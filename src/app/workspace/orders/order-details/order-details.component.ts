import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order!:any;

  constructor(private location:LocationStrategy ){}

  ngOnInit(): void {
    let state: any = this.location.getState();
    this.order = state.order;
  }

}
