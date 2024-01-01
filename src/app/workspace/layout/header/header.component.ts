import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartObs = this.cartService.cartObs$;
  loggedInUserObs = this.authService.loggedInUserObs$;
  userSub!:Subscription;
  items = [
    {
      label: 'sing In/ Registere',
      command: () => {
        this.router.navigateByUrl('/login')
      }

    }]
  constructor(private cartService:CartService,private authService:AuthService,private router:Router){}
  
  ngOnInit(): void {
    let token =sessionStorage.getItem('token');
    if(token)
    {this.authService.validateToken()
  this.userSub = this.loggedInUserObs.subscribe(res=> {
    this.cartService.getCartOfSpecificUser();
  })}
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('login')
  }
}
