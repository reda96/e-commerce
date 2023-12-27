import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService extends BaseService {
  private productsSubject= new BehaviorSubject<Product[] >([]);
  private categoriesSubject=new BehaviorSubject<string[] >([]);
  private productByIdSubject=new BehaviorSubject<Product | undefined>(undefined);


  constructor(private client:HttpClient) { 
    super(client);

  }
  get listProducts$() {
    return this.productsSubject.asObservable();
  }
  get listCategories$() {
    return this.categoriesSubject.asObservable();
  }
  get productByIdObs$() {
    return this.productByIdSubject.asObservable();
  }
  public listAllCategories(){
    return this.http.get<any>('/products/categories', {
      // headers: this.httpOptions.headers,
    }).pipe((map(( categories: string[])=>categories)))
    .subscribe(categories => this.categoriesSubject.next(categories));
  }
  
  

  public listAllProducts(){
    this.listProducts('/products').pipe(
      tap(res=> {
        
        this.productsSubject.next(res);
      })
    ).subscribe()
  }
  public listByCategory(category:string){
    this.listProducts(`/products/category/${category}`).pipe(
      tap(res=> {
        
        this.productsSubject.next(res);
      })
    ).subscribe()
  }

  public getProductById(id:number){
    this.http.get<{data:Product}>(`${this.backendUrl}/products/${id}`).pipe(
      tap(res=> {
        this.productByIdSubject.next(res.data);
      })
    ).subscribe()
  }
}
