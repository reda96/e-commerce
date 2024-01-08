import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsObs: Observable<Product[]> = this.productsService.listProducts$;
  listCategories: Observable<any[]> = this.productsService.listCategories$;
  sortByOptions = [
    { name: 'Top Rated', sortBy: 'ratingsAverage', sortType: -1  },
    { name: 'Sold Items', sortBy: 'sold',sortType: -1 },
    { name: 'Price Descending', sortBy: 'price' , sortType:-1},
    { name: 'Price Ascending', sortBy: 'price',sortType:1 },

  ];
  // sortType = -1;
  currentCategory = 'all';
  constructor(private productsService: ProductsService, private _location:LocationStrategy) {}

  ngOnInit(): void {
    this.productsService.listAllProducts();
    this.productsService.listAllCategories();
    let state:any = this._location.getState();
    console.log(state);
    
    if(state?.category){
      this.productsService.listByCategory(state.category);
      this.currentCategory=state.category;
    } else     this.productsService.listAllProducts();
  }

  listAllProducts() {
    this.productsService.listAllProducts();
    this.currentCategory = 'all';
  }
  listbyCategory(categoryId: string) {
    this.currentCategory = categoryId;
    this.productsService.listByCategory(categoryId);
  }
  changeSortBy(event:DropdownChangeEvent) {
    // console.log(event.value);
    this.productsService.listAllProducts(event.value.sortBy, 50,event.value.sortType)
    
  }
}
