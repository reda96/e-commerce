import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/inspectors/loading-interceptor';
import { AppComponent } from './app.component';
import { LayoutModule } from './workspace/layout/layout.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GridCardComponent } from './workspace/components/grid-card/grid-card.component';
import { ProductsGridComponent } from './workspace/components/products-grid/products-grid.component';
import { HeighestProductsFilteredComponent } from './workspace/components/heighest-products-filtered/heighest-products-filtered.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    LayoutModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
