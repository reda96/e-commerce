import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { BaseService } from './base.service';
import { Product, productInstance } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService extends BaseService {
  private productsSubject:BehaviorSubject<Product[] >= new BehaviorSubject([productInstance]);
  constructor(private client:HttpClient) { 
    super(client);

  }
  get listProducts$() {
    return this.productsSubject.asObservable();
  }

  public listAllProducts(){
    this.listProducts('https://dummyjson.com/products').pipe(
      tap(res=> {
        
        this.productsSubject.next(res);
      })
    ).subscribe()
  }
  public listByCategory(category:string){
    this.listProducts(`https://dummyjson.com/products/category/${category}`).pipe(
      tap(res=> {
        
        this.productsSubject.next(res);
      })
    ).subscribe()
  }
}
