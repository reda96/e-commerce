import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  @Input() products:Product[] = [];


  ngOnInit(): void {
    
  }
}
