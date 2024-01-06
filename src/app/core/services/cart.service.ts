import { Injectable } from '@angular/core';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { Cart, CartItem } from '../models/CartItem.model';
import { Product } from '../models/Product.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService {
  cartSubject = new BehaviorSubject<Cart | undefined>(undefined);
  cart: CartItem[] = [];
  paymentToken!:string;
  constructor(private client: HttpClient, private router:Router) {
    super(client);
  }

  get cartObs$() {
    return this.cartSubject.asObservable();
  }

  addToCart(productId: number, title: string) {
    return this.client
      .post<Cart>(
        `${this.backendUrl}/cart`,
        { productId, color: 'black', title },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(
        tap((res: any) => {
          this.cartSubject.next(res.data);
        })
      );
    // this.cart = [...this.cart, {id:productid,quantity}];
  }

  getCartOfSpecificUser() {
    ///api/v1/
    this.client
      .get<any>(`${this.backendUrl}/cart`)
      .pipe(
        tap((res: any) => {
          this.cartSubject.next(res.data);
        })
      )
      .subscribe();
    //     fetch('https://dummyjson.com/carts/user/5')
    // .then(res => res.json())
    // .then(console.log);
  }

  clearCartItems() {
    this.client
      .delete<any>(`${this.backendUrl}/cart`)
      .pipe(
        tap((res: any) => {
          this.cartSubject.next(res.data);
        })
      )
      .subscribe();
  }

  removeItemFromCart(id: number) {
    this.client
      .delete<any>(`${this.backendUrl}/cart/${id}`)
      .pipe(
        tap((res: any) => {
          this.cartSubject.next(res.data);
        })
      )
      .subscribe();
  }
  updateCartItemQuantity(id: number, quantity: number) {
    return this.client
      .put<any>(`${this.backendUrl}/cart/${id}`, { quantity })
      .pipe(
        tap((res: any) => {
          this.cartSubject.next(res.data);
        })
      );
  }

  getPaymobToken() {
    return this.client
      .post(
        `https://accept.paymob.com/api/auth/tokens`,
        {
          api_key: `ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RVd01ESTNMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuSUJ2MUdjTXZ3S2F4UVFGODBleGZUXzJOZGVNaDVJYkt6OF9HcXpiWEltdXM2Q0FNNkRWRXRsNXJDNEtYRzZmdDN0UkxuWjNCR0pGd2JRdjhQZkI5RXc=`,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(
        switchMap((res: any) => {
          this.paymentToken = res.token;
          return this.client.post(`https://accept.paymob.com/api/ecommerce/orders`,{
            
              auth_token:  res.token,
              delivery_needed: false,
              amount_cents: 100,
              currency: "EGP",
              items: [],
              
               
          })
        }),
        switchMap((res: any) => {
          return this.client.post(`https://accept.paymob.com/api/acceptance/payment_keys`,{
            
              "auth_token":  this.paymentToken,
              "amount_cents": "100", 
              "expiration": 3600, 
              "order_id": res.id,
              "billing_data": {
                "apartment": "803", 
                "email": "claudette09@exa.com", 
                "floor": "42", 
                "first_name": "Clifford", 
                "street": "Ethan Land", 
                "building": "8028", 
                "phone_number": "+86(8)9135210487", 
                "shipping_method": "PKG", 
                "postal_code": "01898", 
                "city": "Jaskolskiburgh", 
                "country": "CR", 
                "last_name": "Nicolas", 
                "state": "Utah"
              }, 
              "currency": "EGP", 
              "integration_id": 4429259,
              "lock_order_when_paid": "false"
              
               
          })
        }),
        map( (res:any)=>{
          
          console.log(res);
          window.location.href=`https://accept.paymobsolutions.com/api/acceptance/iframes/812526?payment_token=${res.token}`
          // this.router.navigate([`https://accept.paymobsolutions.com/api/acceptance/iframes/812526?payment_token=${res.token}`])
          
      }  )
      );
    // this.car
  }
}
