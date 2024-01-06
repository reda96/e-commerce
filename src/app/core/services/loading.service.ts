import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  showSpinner = false;
  spinnerSubject: BehaviorSubject<boolean>;

  constructor() {
    this.spinnerSubject = new BehaviorSubject<boolean>(true);
  }

  get spinnerState$(): Observable<boolean> {

    // ////console.log("giSpinnerHw Returning Spinner State");
    return this.spinnerSubject.asObservable();
  }

  public show() {
    // ////console.log("giSpinnerHw show called");
    //console.log(true);
    this.spinnerSubject.next(true);
  }

  public hide() {
    // ////console.log("giSpinnerHw hide called");
    //console.log(false);
    this.spinnerSubject.next(false);
  }
}
