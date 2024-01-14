import { tap, catchError, timeout } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError as observableThrowError, throwError } from 'rxjs';
import { SpinnerService } from '../services/loading.service';

// import { ApiRequest } from '../models/api-request';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  counter = 0;
  // router!: Router;
  loadingExemptedUrls: string[] = [];
  clonedRequest!: HttpRequest<any>;

  constructor(private spinnerService: SpinnerService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    {
      // console.log(req);
     if(   !( req.method == 'POST' &&
     req.url.includes('api/v1/cart')))
      this.doPrework(req);

      let handleObs: Observable<HttpEvent<any>>;
      if (
        !req.url.includes('https://accept.paymob.com') &&
        !req.url.includes('https://accept.paymobsolutions.com')
      )
        this.clonedRequest = req.clone({
          headers: req.headers.append(
            'authorization',
            'Bearer ' + sessionStorage.getItem('token')
          ),
        });
      else this.clonedRequest = req;

      handleObs = next.handle(this.clonedRequest).pipe(
        // timeout({
        //   each: 1000,
        //   with: () => throwError(() => new CustomTimeoutError())
        // }),
        catchError((errorResponse, caught) => {
          //  console.log('Caught error ', errorResponse?.error?.message);
           if(["Invalid token, please login again.."].includes(errorResponse?.error?.message)||(
            ['JsonWebTokenError', 'TokenExpiredError'].includes(
              errorResponse?.error?.error?.name
            ))
          ) {
            
            this.router.navigateByUrl('/login',{state: {message: 'You have to log in to complete this request'}});
          }
          this.spinnerService.hide();
          return observableThrowError(errorResponse);
        })
      );
      return handleObs.pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            // console.log("post");
            if (
              !(
                req.method == 'POST' &&
                req.url.includes('api/v1/cart')
              )
            )
              this.doPostwork(response);
          }
        })
      );
    }
  }

  private doPrework(req: HttpRequest<any>) {
    // this.counter++;
    
    // if (this.counter == 1)
     {
      this.spinnerService.show();
    }

    // Pass the cloned request instead of the original request to the next handle
  }

  private doPostwork(resp: HttpResponse<any>) {
    // this.counter--;
    // if (this.counter == 0)
     {
      this.spinnerService.hide();
    }
  }

  private isExemptedUrl(url: string): boolean {
    return this.loadingExemptedUrls.some((exempted) => url.includes(exempted));
  }
}

class CustomTimeoutError extends Error {
  constructor() {
    super('Check your connection');
    this.name = 'CustomTimeoutError';
  }
}
