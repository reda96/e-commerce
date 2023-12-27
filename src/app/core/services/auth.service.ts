import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { LogInRequest, User } from '../models/user.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  loggedInUserSub = new BehaviorSubject<User | undefined>(undefined);
  
  constructor(private client:HttpClient) { 
    super(client)
  }

  get loggedInUserObs$() {
    return this.loggedInUserSub.asObservable();
  }

  logIn(userCredentials:LogInRequest){
    return  this.client.post(`${this.backendUrl}/auth/login`,
      { ...userCredentials
    }, {headers: { 'Content-Type': 'application/json' }}).
    pipe(tap(({data}:any)=>{
  
        // console.log(res);
      this.loggedInUserSub.next(data);
  
        
    }))
     
    }

    validateToken(){

        this.client.get(`${this.backendUrl}/auth/validateToken`,
     {headers: { 'Content-Type': 'application/json' }}).
      pipe(tap(({data}:any)=>{
    
           console.log(data);
        this.loggedInUserSub.next(data);
    
          
      })).subscribe()
       
      }
}
  