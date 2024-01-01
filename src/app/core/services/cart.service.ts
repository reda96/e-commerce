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


  addToCart( productId:number,title:string){
  return  this.client.post<Cart>(`${this.backendUrl}/cart`,
    {productId, color:'black',title
  }, {headers: { 'Content-Type': 'application/json' }}).
  pipe(tap((res:any)=>{

    this.cartSubject.next(res.data);

      
  }))
    // this.cart = [...this.cart, {id:productid,quantity}];
   
  }


  getCartOfSpecificUser(){
    ///api/v1/
    this.client.get<any>(`${this.backendUrl}/cart`).pipe(
      tap((res:any)=> {
        
        this.cartSubject.next(res.data)
      })
    ).subscribe()
//     fetch('https://dummyjson.com/carts/user/5')
// .then(res => res.json())
// .then(console.log);
  }

  clearCartItems()
{
  this.client.delete<any>(`${this.backendUrl}/cart`).pipe(
    tap((res:any)=> {

      
      this.cartSubject.next(res.data)
    })
  ).subscribe()
}

removeItemFromCart(id:number){
  this.client.delete<any>(`${this.backendUrl}/cart/${id}`).pipe(
    tap((res:any)=> {
      
      this.cartSubject.next(res.data)
    })
  ).subscribe()
}
updateCartItemQuantity(id:number,quantity:number){
 return this.client.put<any>(`${this.backendUrl}/cart/${id}`,
  {quantity}).pipe(
    tap((res:any)=> {
      
      this.cartSubject.next(res.data)
    })
  )
}

}
