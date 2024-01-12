import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.scss']
})
export class YourOrdersComponent implements OnInit {
   ordersObs = this.ordersService.orders$;
  constructor(private ordersService:OrdersService){}

  ngOnInit(): void {
    this.ordersService.getOrdersOfSpecificUser();
  }
}
