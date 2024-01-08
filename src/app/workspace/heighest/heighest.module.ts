import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeighestProductsFilteredComponent } from './heighest-products-filtered/heighest-products-filtered.component';
import { ProductsGridComponent } from '../components/products-grid/products-grid.component';
import { GridCardComponent } from '../components/grid-card/grid-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeighestProductsFilteredComponent],
  imports: [CommonModule, SharedModule],
  exports:[HeighestProductsFilteredComponent]
})
export class HeighestModule {}
