import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OwlCarouselComponent } from './components/owl-carousel/owl-carousel.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { CollectionsComponent } from './layout/collections/collections.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { ProductsComponent } from './layout/products/products.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    ContactUsComponent,
    OwlCarouselComponent,
    CardComponent,
    LandingPageComponent,
    CollectionsComponent,
    ProductsGridComponent,
    GridCardComponent,
    ProductsComponent
  ],
  imports: [
    SharedModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    ContactUsComponent,
    OwlCarouselComponent
  ]
})
export class CoreModule { }
