import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    YourOrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
