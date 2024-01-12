import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
    // { path: "", component: LandingPageComponent },
    { path: "cart",canActivate:[AuthGuard], component: CartComponent },



]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class CoreRoutingModule { }
