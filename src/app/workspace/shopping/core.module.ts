import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ArrayInlcudesPipe } from 'src/app/core/pipes/array-inlcudes.pipe';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RatingModule } from 'primeng/rating';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [ProductDetailsComponent, CartComponent, ArrayInlcudesPipe],
  imports: [
    CoreRoutingModule,
    CommonModule,
    CarouselModule,
    CheckboxModule,
    FormsModule,
    RatingModule,
    ProgressSpinnerModule,
    SharedModule,
    InputNumberModule,
  ],
  exports: [CartComponent],
})
export class CoreModule {}
