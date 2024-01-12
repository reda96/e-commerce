import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { GridCardComponent } from '../components/grid-card/grid-card.component';
import { ProductsGridComponent } from '../components/products-grid/products-grid.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
@NgModule({
  declarations: [ProductsGridComponent, GridCardComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    RatingModule,
    // ProgressSpinnerModule,
    CheckboxModule,
    InputNumberModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    MenuModule,
    DropdownModule,
    DialogModule,
    PanelMenuModule
    // BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    // HttpClientModule,
    RatingModule,
    ProgressSpinnerModule,
    CheckboxModule,
    InputNumberModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    MenuModule,
    ProductsGridComponent,
    GridCardComponent,
    DropdownModule,
    DialogModule,
    PanelMenuModule
    // BrowserAnimationsModule
  ],
})
export class SharedModule {}
