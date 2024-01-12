import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CollectionsComponent } from '../shopping/collections/collections.component';
import { CardComponent } from '../components/card/card.component';
import { OwlCarouselComponent } from '../components/owl-carousel/owl-carousel.component';
import { LandingRoutingModule } from './landing.routing.module';
import { CarouselModule } from 'primeng/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { HeighestProductsFilteredComponent } from '../components/heighest-products-filtered/heighest-products-filtered.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from '../shopping/favorites/favorites.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProductsComponent } from '../shopping/products/products.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    OwlCarouselComponent,
    CardComponent,
    CollectionsComponent,
    HeighestProductsFilteredComponent,
    FavoritesComponent,
    ProductsComponent
    

  ],
    
  imports: [CommonModule,DropdownModule, LandingRoutingModule,SharedModule, CarouselModule, ReactiveFormsModule],
  
})
export class LandingModule {}
