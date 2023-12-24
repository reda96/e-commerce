import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
})
export class GridCardComponent implements OnInit {
  @Input() item!:Product;
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  goToDetails(productId:number) {
    this.router.navigate(['/item', productId]);
    window.scroll(0,0);
  }
}
