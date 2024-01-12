import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService{
 private ordersSubject = new BehaviorSubject<any[]>([]);
  constructor(private client: HttpClient) {
    super(client);
  }
  get orders$ (){
    return this.ordersSubject.asObservable()
  }
  getOrdersOfSpecificUser() {
    ///api/v1/
    this.client
      .get<any>(`${this.backendUrl}/orders`)
      .pipe(
        tap((res: any) => {
          this.ordersSubject.next(res.data);
        })
      )
      .subscribe();

  }
}
