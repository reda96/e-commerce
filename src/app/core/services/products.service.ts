import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { BaseService } from './base.service';
import { Product, productInstance } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService extends BaseService {
  private productsSubject= new BehaviorSubject<Product[] >([]);
  private categoriesSubject=new BehaviorSubject<string[] >([]);

  constructor(private client:HttpClient) { 
    super(client);

  }
  get listProducts$() {
    return this.productsSubject.asObservable();
  }
  get listCategories$() {
    return this.categoriesSubject.asObservable();
  }
  public listAllCategories(){
    return this.http.get<any>('https://dummyjson.com/products/categories', {
      // headers: this.httpOptions.headers,
    }).pipe((map(( categories: string[])=>categories)))
    .subscribe(categories => this.categoriesSubject.next(categories));
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
