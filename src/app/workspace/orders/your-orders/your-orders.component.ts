import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.scss']
})
export class YourOrdersComponent implements OnInit {
   ordersObs = this.ordersService.orders$;
  constructor(private ordersService:OrdersService,
    private location:LocationStrategy){}

  ngOnInit(): void {
    window.scroll(0,0)
    this.ordersService.getOrdersOfSpecificUser();
  }
  goBack(){
    this.location.back()
  }
}
