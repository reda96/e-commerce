import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Cart, CartItem } from '../models/CartItem.model';
import { Product } from '../models/Product.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService {
  cartSubject = new BehaviorSubject<Cart | undefined>(undefined);
  cart:CartItem[] = [];
  constructor(private client:HttpClient) {
    super(client)
   }

  get cartObs$() {
    return this.cartSubject.asObservable();
  }


  addToCart( productid:number,quantity:number, cartId:number, userId?:number){
  return  this.client.put<Cart>(`https://dummyjson.com/carts/${cartId}`,
    {merge:true, products:[{id:productid,quantity}]
  }, {headers: { 'Content-Type': 'application/json' }}).
  pipe(tap((res:Cart)=>{

      // console.log(res);
    this.cartSubject.next(res);

      
  }))
    // this.cart = [...this.cart, {id:productid,quantity}];
   
  }


  getCartOfSpecificUser(userId:number){
    this.client.get<any>(`https://dummyjson.com/carts/user/${userId}`).pipe(
      tap((res:any)=> {
        console.log(res);
        
        this.cartSubject.next(res.carts[0])
      })
    ).subscribe()
//     fetch('https://dummyjson.com/carts/user/5')
// .then(res => res.json())
// .then(console.log);
  }
}
