import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { LogInRequest, SignUpRequest, User } from '../models/user.model';
import { BaseService } from './base.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  loggedInUserSub = new BehaviorSubject<User | undefined>(undefined);
  
  constructor(private client:HttpClient,
    private router:Router) { 
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

    signUp(userCredentials:SignUpRequest){
      return  this.client.post(`${this.backendUrl}/auth/signup`,
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
      pipe(
        (catchError((error:any)=>{
          console.log(error);
          sessionStorage.removeItem('token');
          this.router.navigateByUrl('auth/login');
          return throwError(error);
        })),
        
        tap(({data}:any)=>{
    
        this.loggedInUserSub.next(data);
          
      })).subscribe()
       
      }
}
  