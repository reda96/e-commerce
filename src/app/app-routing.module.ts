import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInAuthGuard } from './core/guards/loggedIn.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./workspace/shopping/core.module').then(
        (m) => m.CoreModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./workspace/heighest/heighest.module').then(
        (m) => m.HeighestModule
      ),
  },
  {
    path: '',
    canActivate:[LoggedInAuthGuard],

    loadChildren: () =>
      import('./workspace/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },

  {
    path: 'orders',
    canActivate:[AuthGuard],

    loadChildren: () =>
      import('./workspace/orders/orders.module').then(
        (m) => m.OrdersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoggedInAuthGuard]
})
export class AppRoutingModule { }
