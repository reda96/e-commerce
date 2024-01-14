import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Location } from '@angular/common';
import { ADDING_TO_CART_STATUS } from 'src/app/core/constants/enums';
import { ProductsService } from 'src/app/core/services/products.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/core/models/Product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy{
productObs = this.productsService.productByIdObs$;
similarProductsObs = this.productsService.listProducts$; 
categoriesObs = this.productsService.listCategories$;
categories!:any[];
categoriesSubscription!:Subscription;
productSubscription!:Subscription;
itemStatus = ADDING_TO_CART_STATUS.Not_Added;
currentPage=0;
constructor(private productsService:ProductsService,
  private cartService:CartService,
  private activatedRoute:ActivatedRoute,
  private _location:Location){}
ngOnInit(): void {
  this.productsService.listAllCategories();
  this.activatedRoute.snapshot.params['id'];
 this.categoriesSubscription= this.categoriesObs.subscribe((res:any[])=>this.categories=res)
 setTimeout(() => {
  this.activatedRoute.params.subscribe((params: Params) => {
    // this.id = params['id'];
    this.productsService.getProductById(params['id'])
  });
 });

  this.productSubscription= this.categoriesObs.pipe(
    switchMap(()=> this.productObs)
  ).subscribe((product=>
    {
      // console.log(product);
     let category= this.categories?.find((c) => {
      return c.name==product?.category?.name
      })
      // console.log(category,this.categories,product);
      
      if(category)
       this.productsService.listByCategory(category?._id) 
      }
    ))
  
  // this.productObs.subscribe
  
   
}
changeImage(event:any, imageIndex:number){
  this.currentPage=imageIndex;
  
}
addToCart(product:Product){
  
  this.itemStatus = ADDING_TO_CART_STATUS.Adding;
  this.cartService.addToCart(product.id,product.title).subscribe(res=>{
    
    this.itemStatus=ADDING_TO_CART_STATUS.Added;
    setTimeout(() => {
      this.itemStatus=ADDING_TO_CART_STATUS.Not_Added;
    }, 1000);
  }

  )
}
goBack(){
  this._location.back()
}
ngOnDestroy(): void {
  this.productSubscription?.unsubscribe();
  this.categoriesSubscription?.unsubscribe();
}
}
