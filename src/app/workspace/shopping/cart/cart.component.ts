import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/core/models/CartItem.model';

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
    this.cartService.getCartOfSpecificUser();
  }

  goBack(){
    this._location.back()
  }
}
