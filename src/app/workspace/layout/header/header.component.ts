import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
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
  
  currentRoute!:string;
  userSub!:Subscription;
  items = [
    {
      label: 'sign In/ Register',
      command: () => {
        this.router.navigateByUrl('/login')
      }

    }]
  constructor(private cartService:CartService,
    private authService:AuthService,
    private router:Router,
    ){
      this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
      .subscribe((event:NavigationEnd) => 
       {
          this.currentRoute = event.url;          
          // console.log(event);
       });
    }
  
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
    this.router.navigateByUrl('login');
    this.authService.destroyUserObs();
  }
}
