import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from '../models/Product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService extends BaseService {
  private productsSubject= new BehaviorSubject<Product[] >([]);
  private filteredProductsSubject= new BehaviorSubject<Product[] >([]);
  private categoriesSubject=new BehaviorSubject<string[] >([]);
  private productByIdSubject=new BehaviorSubject<Product | undefined>(undefined);


  constructor(private client:HttpClient, private authService:AuthService) { 
    super(client);

  }
  get listProducts$() {
    return this.productsSubject.asObservable();
  }
  get filteredProducts$() {
    return this.filteredProductsSubject.asObservable();
  }
  get listCategories$() {
    return this.categoriesSubject.asObservable();
  }
  get productByIdObs$() {
    return this.productByIdSubject.asObservable();
  }
  public listAllCategories(){
    return this.http.get<any>(`${this.backendUrl}/categories`, {
      // headers: this.httpOptions.headers,
    })
    // .pipe((map(( categories: string[])=>categories)))
    .subscribe(categories => {
      //  console.log(categories);
      
       this.categoriesSubject.next(categories.data)
    });
  }
  
  

  public listFilteredProducts( filters?:any){
    // console.log("filters: ", filters);
    
    this.listProducts('/products',filters).pipe(
      tap(res=> {
        
        this.filteredProductsSubject.next(res);
      })
    ).subscribe()
  }
  public listAllProducts(){
    
    this.listProducts('/products').pipe(
      tap(res=> {
        
        this.productsSubject.next(res);
      })
    ).subscribe()
  }
  public listByCategory(category:string){
    this.listProducts(`/products?category=${category}`).pipe(
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

  public addToFavorites(product:Product){
    
    this.http.post<{data:any}>(`${this.backendUrl}/wishlist`,{
      productId: product.id
    }).pipe(
      tap(()=> this.authService.validateToken())
    )
    .subscribe()
  }
  public removeFromFavorites(product:Product){
    
    this.http.delete<{data:any}>(`${this.backendUrl}/wishlist/${product.id}`).pipe(
      tap(()=> this.authService.validateToken())
    ).subscribe()
  }
  destroyFilteredProducts(){{
    this.filteredProductsSubject.next([]);
  }}
}
