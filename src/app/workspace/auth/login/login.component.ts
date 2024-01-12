import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  activeForm = 'login';
  myForm!: FormGroup;
  signupForm!: FormGroup;
  loginErrorMessage!:string;
  signupErrorMessage!:string;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    window.scroll(100, 100);
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, , Validators.minLength(8)]],
      passwordConfirm: [
        '',
        [
          Validators.required,
          (control: any) => confirmPasswordValidator(control, this.signupForm),
        ],
      ],
    });
  }

  login() {
    if (this.myForm.valid)
      this.authservice
        .logIn(this.myForm.value)
        .pipe(
          tap((res) => {
            sessionStorage.setItem('token', res.token);
            this.cartService.getCartOfSpecificUser();
          })
        )

        .subscribe({
          next: ({ user, token }) => {
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            // console.log(error.error.message);
            this.loginErrorMessage = error.error.message;
            this.myForm.reset();
            this.myForm.markAllAsTouched();
          },
        });
    else {

      this.myForm.reset();
      this.myForm.markAllAsTouched();
    }
  }
  signup() {
    //  console.log(this.signupForm);

    if (this.signupForm.valid)
      this.authservice
        .signUp(this.signupForm.value)
        .pipe(
          tap((res) => {
            this.cartService.getCartOfSpecificUser();
          })
        )
        .subscribe({
          next: ({ user, token }) => {
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            console.log(error);
             this.signupErrorMessage = error.error?.errors[0].msg;
            this.signupForm.reset();
            this.signupForm.markAllAsTouched();
          },
        });
    // console.log(this.myForm.value);
    else {
      // console.log(this.myForm);
      this.signupForm.reset();
      this.signupForm.markAllAsTouched();
    }
  }
}

export const confirmPasswordValidator = (
  control: AbstractControl,
  form: FormGroup
): ValidationErrors | null => {
  // console.log(control.value,form?.value );

  return control.value === form?.value.password
    ? null
    : { PasswordNoMatch: true };
};
