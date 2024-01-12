import { RouterModule, Routes } from "@angular/router";
import { YourOrdersComponent } from "./your-orders/your-orders.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { OrderDetailsComponent } from "./order-details/order-details.component";

const routes: Routes = [
    { path: "", component: YourOrdersComponent },
    { path: ":id", component: OrderDetailsComponent },





]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class OrdersRoutingModule { }
