import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ADDING_TO_CART_STATUS } from 'src/app/core/constants/enums';
import { Product } from 'src/app/core/models/Product.model';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
})
export class GridCardComponent implements OnInit, OnDestroy {
  @Input() item!:Product;
  loggedInUserObs = this.authService.loggedInUserObs$;
  userSub!:Subscription;
  user!:User|undefined;
  constructor(private router:Router,private productService:ProductsService, private authService:AuthService,
    private cartService:CartService){}
  ngOnInit(): void {
   this.userSub= this.loggedInUserObs.subscribe(user=>this.user=user)
  }

  addToFavorites(item:Product){
    this.productService.addToFavorites(item);
    // this.authService.validateToken();
  }
  removeFromFavorites(item:Product){
    this.productService.removeFromFavorites(item);
    // this.authService.validateToken();
  }

  addToCart(product:Product){
     
    // this.itemStatus = ADDING_TO_CART_STATUS.Adding;
    this.cartService.addToCart(product.id,product.title).subscribe(res=>{
      
      // this.itemStatus=ADDING_TO_CART_STATUS.Added;
      // setTimeout(() => {
      //   this.itemStatus=ADDING_TO_CART_STATUS.Not_Added;
      // }, 1000);
    }
  
    )
  }
  goToDetails(productId:number) {
    this.router.navigate(['/item', productId]);
    window.scroll(0,0);
  }
  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

}
