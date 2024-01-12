import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Product } from 'src/app/core/models/Product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
visible = false;
searchInput = '';
products!:Product[];
subscription!:Subscription;
constructor(private productsService:ProductsService){}
ngOnInit(): void {
  
}
searchProducts(input:string){
  // console.log(event);
  let params = new HttpParams();
  params =   params.append('limit', 5) ;
  params =   params.append('keyword', input) ;
  this.subscription= this.productsService.listProducts(`/products`,params).pipe(
    tap(res=> {
     
      this.products=res;
      // this.productsSubject.next(res);
    })
  ).subscribe()
  
}
}
