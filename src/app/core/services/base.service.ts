import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { Product } from '../models/Product.model';
import { map } from 'rxjs';
import { environment } from 'src/environments/environments.dev';
export class BaseService {
  http: HttpClient;
  httpTest!: XMLHttpRequest;
  backendUrl: string = environment.backendUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods':'*',
      'Accept-Encoding': 'gzip, compress, br'
      //'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With',
    }),
  };
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  // secureApi: string = environment.secureApiUrl;
  // nonSecureApi: string = environment.nonSecureApiUrl;
  public listProducts(apiUrl: string, filters?:any) {
    return this.http.post<any>(this.backendUrl+ apiUrl, {
      // headers: this.httpOptions.headers,
      filters
    }).pipe((map((res:{ data: any})=>res.data)));
  }
  
  // public getProductById(apiUrl: string) {
  //   return this.http.get<any>(apiUrl, {
  //     // headers: this.httpOptions.headers,
  //   });
  // }
}
