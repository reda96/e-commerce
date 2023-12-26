import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "item/:id", component: ProductDetailsComponent },
    { path: "cart", component: CartComponent },



]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
