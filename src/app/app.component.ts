import { AfterContentChecked, AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './core/services/loading.service';
import { User } from './core/models/user.model';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  title = 'e-commerce';
  spinnerObs!:Observable<boolean>;
  loggedInUserObs:Observable<User | undefined>= this.authService.loggedInUserObs$; ;

  constructor(private spinnerService:SpinnerService, 
    private authService:AuthService){
      setTimeout(() => {
       this.spinnerObs=this.spinnerService.spinnerState$;
    });
    
    }

    ngAfterViewInit(){
      setTimeout(() => {
        this.spinnerObs=this.spinnerService.spinnerState$;
     });
    }
}
