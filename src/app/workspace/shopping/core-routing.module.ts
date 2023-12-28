import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { LoggedInAuthGuard } from "src/app/core/guards/loggedIn.guard";

const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "item/:id", component: ProductDetailsComponent },
    { path: "cart",canActivate:[AuthGuard], component: CartComponent },



]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class CoreRoutingModule { }
