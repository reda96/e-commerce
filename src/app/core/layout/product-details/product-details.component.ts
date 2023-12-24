import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ADDING_TO_CART_STATUS } from '../../constants/enums';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy{
productObs = this.productsService.productByIdObs$;
similarProductsObs = this.productsService.listProducts$; 
productSubscription!:Subscription;
itemStatus = ADDING_TO_CART_STATUS.Not_Added;
currentPage=0;
constructor(private productsService:ProductsService,
  private cartService:CartService,
  private activatedRoute:ActivatedRoute,
  private _location:Location){}
ngOnInit(): void {
  this.activatedRoute.snapshot.params['id'];
  this.activatedRoute.params.subscribe((params: Params) => {
    // this.id = params['id'];
    this.productsService.getProductById(params['id'])
  });
  this.productSubscription= this.productObs.subscribe(product=>
    {
      if(product)
       this.productsService.listByCategory(product.category) }
    )
  
   
}
changeImage(event:any, imageIndex:number){
  this.currentPage=imageIndex;
  
}
addToCart(productId:number,){
  
  this.itemStatus = ADDING_TO_CART_STATUS.Adding;
  this.cartService.addToCart(productId,1,1).subscribe(res=>{
    
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
}
}
