
import { tap, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
    from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { SpinnerService } from '../services/loading.service';

// import { ApiRequest } from '../models/api-request';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    router!: Router;
    loadingExemptedUrls: string[] = []
    constructor(private spinnerService: SpinnerService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        {
            // console.log(req);
        if(!(req.method=="PUT"&&req.url.includes("https://dummyjson.com/carts")))
            
            this.doPrework(req);



        let handleObs: Observable<HttpEvent<any>>;
        handleObs = next.handle(req).pipe(catchError((errorResponse, caught) => {
            //console.log('Caught error ', errorResponse);
            this.spinnerService.hide();
            return observableThrowError(errorResponse);
        }));
        return handleObs.pipe(tap(response => {
            if (response instanceof HttpResponse) {
                // console.log("post");
        if(!(req.method=="PUT"&&req.url.includes("https://dummyjson.com/carts")))
                
                this.doPostwork(response);
            }
        }));
}

    }

    private doPrework(req: HttpRequest<any>) {
      this.spinnerService.show();
    }

    private doPostwork(resp: HttpResponse<any>) {
        this.spinnerService.hide();
    }

    

    private isExemptedUrl(url: string): boolean {
        return this.loadingExemptedUrls.some(exempted => url.includes(exempted));
    }
}
