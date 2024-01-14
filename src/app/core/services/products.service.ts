import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from '../models/Product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private filteredProductsSubject = new BehaviorSubject<Product[]>([]);
  private categoriesSubject = new BehaviorSubject<string[]>([]);
  private productByIdSubject = new BehaviorSubject<Product | undefined>(
    undefined
  );

  constructor(private client: HttpClient, private authService: AuthService) {
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
  public listAllCategories() {
      
    if(!this.categoriesSubject.getValue().length)
   {  (
      this.http
        .get<any>(`${this.backendUrl}/categories`, {
          // headers: this.httpOptions.headers,
        })
        // .pipe((map(( categories: string[])=>categories)))
        .subscribe((categories) => {
          
          this.categoriesSubject.next(categories.data);
        })
    );}
    else return;
  }

  public listFilteredProducts(filters?: any) {
    // console.log("filters: ", filters);

    this.listProducts('/products', undefined, filters)
      .pipe(
        tap((res) => {
          this.filteredProductsSubject.next(res);
        })
      )
      .subscribe();
  }
  public listAllProducts(sortBy?: string, limit?: number, sortType?: number, keyword?:string,category?:string, filters?:any) {
    // sort=${sortBy}&sortType=${sortType}&limit=${limit}
    let params = new HttpParams();
    params = sortBy ? params.append('sortBy', sortBy) : params;
    params = sortType ? params.append('sortType', sortType) : params;
    params = limit ? params.append('limit', limit) : params;
    params = keyword ? params.append('keyword', keyword) : params;
    params = category ? params.append('category', category) : params;


    
    this.listProducts(`/products`,params,filters)
      .pipe(
        tap((res) => {
          this.productsSubject.next(res);
        })
      )
      .subscribe();
  }
  public listByCategory(category: string) {
    this.listProducts(`/products?category=${category}`)
      .pipe(
        tap((res) => {
          this.productsSubject.next(res);
        })
      )
      .subscribe();
  }

  public getProductById(id: number) {
    this.http
      .get<{ data: Product }>(`${this.backendUrl}/products/${id}`)
      .pipe(
        tap((res) => {
          this.productByIdSubject.next(res.data);
        })
      )
      .subscribe();
  }

  public addToFavorites(product: Product) {
    this.http
      .post<{ data: any }>(`${this.backendUrl}/wishlist`, {
        productId: product.id,
      })
      .pipe(tap(() => this.authService.validateToken()))
      .subscribe();
  }
  public removeFromFavorites(product: Product) {
    this.http
      .delete<{ data: any }>(`${this.backendUrl}/wishlist/${product.id}`)
      .pipe(tap(() => this.authService.validateToken()))
      .subscribe();
  }
  destroyFilteredProducts() {
    {
      this.filteredProductsSubject.next([]);
    }
  }
}
