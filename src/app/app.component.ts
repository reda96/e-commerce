import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './core/services/loading.service';

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
