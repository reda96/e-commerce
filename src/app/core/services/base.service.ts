import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { Product } from '../models/Product.model';
import { map } from 'rxjs';
export class BaseService {
  http: HttpClient;
  httpTest!: XMLHttpRequest;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods':'*',
      //'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With',
    }),
  };
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  // secureApi: string = environment.secureApiUrl;
  // nonSecureApi: string = environment.nonSecureApiUrl;
  public listProducts(apiUrl: string) {
    return this.http.get<any>(apiUrl, {
      // headers: this.httpOptions.headers,
    }).pipe((map((res:{ data: any})=>res.data)));
  }
  
  // public getProductById(apiUrl: string) {
  //   return this.http.get<any>(apiUrl, {
  //     // headers: this.httpOptions.headers,
  //   });
  // }
}
