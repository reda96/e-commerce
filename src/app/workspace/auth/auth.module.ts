import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoggedInAuthGuard } from 'src/app/core/guards/loggedIn.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [ AuthRoutingModule , CommonModule,ReactiveFormsModule ],
  exports: [LoginComponent],
  // providers:[LoggedInAuthGuard]
})
export class AuthModule {}
