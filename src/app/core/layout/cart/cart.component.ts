import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '../../models/CartItem.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartObs:Observable<Cart | undefined> = this.cartService.cartObs$;
  constructor(private cartService:CartService,
    private _location:Location){}

  ngOnInit(): void {
    this.cartService.getCartOfSpecificUser(5)
  }

  goBack(){
    this._location.back()
  }
}
