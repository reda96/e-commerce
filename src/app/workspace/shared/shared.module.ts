import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { GridCardComponent } from '../components/grid-card/grid-card.component';
import { ProductsGridComponent } from '../components/products-grid/products-grid.component';

import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [GridCardComponent,ProductsGridComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    RatingModule,
    // ProgressSpinnerModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    MenuModule,
    
    DialogModule,
    PanelMenuModule,
    RatingModule,
    // BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    // CarouselModule,
    ButtonModule,
    TagModule,
    // HttpClientModule,
    RatingModule,
    ProgressSpinnerModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    MenuModule,
    
    GridCardComponent,ProductsGridComponent,
    
    DialogModule,
    PanelMenuModule,
    RatingModule,
    // BrowserAnimationsModule
  ],
})
export class SharedModule {}
