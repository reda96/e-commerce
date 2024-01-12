import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { FavoritesComponent } from '../shopping/favorites/favorites.component';
import { ProductsComponent } from '../shopping/products/products.component';



const routes: Routes = [
   { path: "", component: LandingPageComponent },
  // { path: "item/:id", component: ProductDetailsComponent },
  // { path: "cart",canActivate:[AuthGuard], component: CartComponent },
  // { path: "shop", component: ProductsComponent },
  { path: "whishlist",canActivate:[AuthGuard], component: FavoritesComponent },
  { path: "shop", component: ProductsComponent },




]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule { }
