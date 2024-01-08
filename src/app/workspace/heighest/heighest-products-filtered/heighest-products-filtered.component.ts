import { LiteralPrimitive } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take, tap } from 'rxjs';
import { Product } from 'src/app/core/models/Product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-heighest-products-filtered',
  templateUrl: './heighest-products-filtered.component.html',
  styleUrls: ['./heighest-products-filtered.component.scss']
})
export class HeighestProductsFilteredComponent implements OnInit, OnDestroy {
  @Input() sortBy!: string;
  @Input() title!:string;
  @Input() sortType!:number;
  subscription!:Subscription;
  // productsObs = this.productsService.listProducts$.pipe(take(2));
  products!:Product[];

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
   this.subscription= this.productsService.listProducts(`/products?sort=${this.sortBy}&sortType=${this.sortType}&limit=${4}`).pipe(
      tap(res=> {
        console.log(
          "in heighst"
        );
        
        this.products=res;
        // this.productsSubject.next(res);
      })
    ).subscribe()

  }

  ngOnDestroy(): void {
    
    this.subscription?.unsubscribe();
  }
  


}
