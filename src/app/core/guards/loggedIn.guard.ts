import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(  route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any {
            console.log("in");
            
        if (
            !sessionStorage.getItem('token') &&
            !localStorage.getItem('token')
          ) {
            this.router.navigate(['login'], {
              queryParams: { returnUrl: state.url },
            });
            return true;
          }
          this.router.navigate([''], {
          });
          return false;
        //   this.authService.validateToken()
        //   return  this.authService.loggedInUserObs$;
    }
}