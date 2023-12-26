import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./layout/landing-page/landing-page.component";
import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./layout/product-details/product-details.component";
import { CartComponent } from "./layout/cart/cart.component";


@NgModule({
    imports: [],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
