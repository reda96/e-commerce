import { Component } from '@angular/core';
import { SpinnerService } from './core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  spinnerObs:Observable<boolean> = this.spinnerService.spinnerState$;

  constructor(private spinnerService:SpinnerService){}
}
