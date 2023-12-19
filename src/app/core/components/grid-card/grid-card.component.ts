import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
})
export class GridCardComponent {
  @Input() item!:Product;
}
