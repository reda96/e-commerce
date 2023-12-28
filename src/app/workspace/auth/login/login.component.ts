import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  activeForm="login"
  myForm!: FormGroup;
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,private authservice:AuthService,
    private cartService:CartService,
    private router:Router){
   
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
     
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    });
    this.signupForm=this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      passwordConfirm:['', [Validators.required]],
    });
  }

  login(){
    if(this.myForm.valid)
    this.authservice.logIn(this.myForm.value)
    .pipe((tap((res)=>{
      this.cartService.getCartOfSpecificUser();
    })))
    .subscribe(({user, token})=>{
       sessionStorage.setItem('token',token);
        this.router.navigateByUrl('/')
         
    })  
    // console.log(this.myForm.value);
     else this.myForm.reset();
  }
  signup(){
    console.log(this.signupForm);
    
    if(this.signupForm.valid)
    this.authservice.signUp(this.signupForm.value)
    .pipe((tap((res)=>{
      this.cartService.getCartOfSpecificUser();
    })))
    .subscribe(({user, token})=>{
       sessionStorage.setItem('token',token);
        this.router.navigateByUrl('/')
         
    })  
    // console.log(this.myForm.value);
     else this.signupForm.reset();
  }

}
