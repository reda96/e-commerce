import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy{

  loggedInUser = this.authService.loggedInUserObs$;
  filteredProductsObs = this.productsService.filteredProducts$;
  userSub!:Subscription;
  constructor(private _location:Location,private productsService:ProductsService, private authService:AuthService){
    
  }
 ngOnInit(): void {
   this.loggedInUser.subscribe(user=> {
   this.productsService.listFilteredProducts({ ids:user?.wishlist})

   })
 }

  goBack(){
    this._location.back()
  }
  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
    this.productsService.destroyFilteredProducts();

  }
}


