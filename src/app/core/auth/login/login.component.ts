import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import {  Router } from '@angular/router';

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
      confirmPassword:['', [Validators.required]],
    });
  }

  login(){
    if(this.myForm.valid)
    this.authservice.logIn(this.myForm.value).subscribe(({user, token})=>{
       sessionStorage.setItem('token',token);
        this.router.navigateByUrl('/')
         
    })  
    // console.log(this.myForm.value);
     else this.myForm.reset();
  }
  signup(){
    if(this.signupForm.valid)
    this.authservice.logIn(this.signupForm.value).subscribe(({user, token})=>{
       sessionStorage.setItem('token',token);
        this.router.navigateByUrl('/')
         
    })  
    // console.log(this.myForm.value);
     else this.signupForm.reset();
  }

}
