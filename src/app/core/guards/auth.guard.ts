import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    
    if (
      !sessionStorage.getItem('token') &&
      !localStorage.getItem('token')
    ) {
      this.router.navigate(['login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
    this.authService.validateToken()
    return  this.authService.loggedInUserObs$;
  }
}