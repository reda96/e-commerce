import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, combineLatest, combineLatestWith, switchMap, take, tap } from 'rxjs';
import { Location } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/core/models/CartItem.model';
import { Product } from 'src/app/core/models/Product.model';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { InputNumberInputEvent } from 'primeng/inputnumber';
import { ProductsService } from 'src/app/core/services/products.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartObs:Observable<Cart | undefined> = this.cartService.cartObs$;
  cartSubscription!: Subscription;
  firstCartItems?: Product[];
  loggedInUser = this.authService.loggedInUserObs$;
  filteredProductsObs = this.productsService.filteredProducts$;
  userSub!:Subscription;
  constructor(private _location:Location,
    private cartService:CartService,
    private router:Router,
    private productsService:ProductsService, private authService:AuthService){
    
  }

  ngOnInit(): void {
    // this.cartService.getCartOfSpecificUser();
    let ids:any[] | undefined = [];
    let cartItems:any[] = [];
    this.cartSubscription = this.cartObs.pipe(
      switchMap((res:Cart | undefined)=> {
          // console.log(res);
          if(res)
         { ids = res?.cartItems.map((i:any) => i.product);
           this.productsService.listFilteredProducts({ids});
           cartItems=res.cartItems }
           return this.productsService.filteredProducts$;
      })
    ).subscribe((res:Product[])=> {
      
      if(!this.firstCartItems?.length)
      this.firstCartItems=res.map(p => { return {...p, quantity:cartItems?.find(i=>i.product == p.id).quantity}})
    
    
    })
  }

  goBack(){
    this._location.back()
  }
  deselectAll(event:CheckboxChangeEvent){
    if(!event.checked)
    this.cartService.clearCartItems();
  }
  addToFavorites(item:Product){
    this.productsService.addToFavorites(item);
    // this.authService.validateToken();
  }
  removeFromFavorites(item:Product){
    this.productsService.removeFromFavorites(item);
    // this.authService.validateToken();
  }
  deleteItem(product:any, cartItems:any[]){
    cartItems.length ? product = cartItems.find((p)=> p.product==product.id) : null; 
    this.cartService.removeItemFromCart(product._id);
    // console.log(product,this.firstCartItems);
    
     this.firstCartItems= this.firstCartItems?.filter(p=>p.id!==product.product)
  }
  changeSelection(event:CheckboxChangeEvent, product:any,cartItems:any[]){
    
    if(!event.checked)
  {
     cartItems.length ? product = cartItems.find((p)=> p.product==product.id) : null;   
    
    this.cartService.removeItemFromCart(product._id);}
    else {
      
      this.cartService.addToCart(product.id,product.title)
      .pipe(switchMap(
        (res)=>   {
          let prod = res.data.cartItems.find((p:any)=>p.product==product.product)
         return  this.cartService.updateCartItemQuantity(prod._id,product.quantity)}
      ))
    
    .subscribe()
    }
    
  }

  updateCartItemQuantity(event:InputNumberInputEvent, product:any){
    
    let quantity = +event.value;
    console.log(product);
    
    this.cartService.updateCartItemQuantity(product._id,quantity).subscribe()

  }

  goToPaymentToken(){
    this.cartService.getPaymobToken().subscribe(
    )
  }
  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
    this.firstCartItems=undefined;
    this.productsService.destroyFilteredProducts();
  }
}
