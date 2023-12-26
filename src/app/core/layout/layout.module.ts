import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { OwlCarouselComponent } from '../components/owl-carousel/owl-carousel.component';
import { CardComponent } from '../components/card/card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CollectionsComponent } from './collections/collections.component';
import { ProductsGridComponent } from '../components/products-grid/products-grid.component';
import { GridCardComponent } from '../components/grid-card/grid-card.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



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
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    ContactUsComponent,
    OwlCarouselComponent
  ]
})
export class LayoutModule { }
