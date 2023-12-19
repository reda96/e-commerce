import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsObs:Observable<Product[]> = this.productsService.listProducts$;
  currentCategory = 'all';
  constructor(private productsService:ProductsService){}


  ngOnInit(): void {
    this.productsService.listAllProducts();
  }
  listAllProducts(){
    this.productsService.listAllProducts();
    this.currentCategory='all';
  }
  listbyCategory(categoryId:string){
    this.currentCategory=categoryId;
    this.productsService.listByCategory(categoryId);
  }
}

