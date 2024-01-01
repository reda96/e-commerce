import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ArrayInlcudesPipe } from 'src/app/core/pipes/array-inlcudes.pipe';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [

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
    ArrayInlcudesPipe,
    FavoritesComponent
  ],
  imports: [
    
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
 
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
  ]
})
export class CoreModule { }
