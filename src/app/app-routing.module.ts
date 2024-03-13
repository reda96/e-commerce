import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInAuthGuard } from './core/guards/loggedIn.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./workspace/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./workspace/shopping/core.module').then(
        (m) => m.CoreModule
      ),
  },
  {
    path: 'login',
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
const extraOptions: ExtraOptions = {
  enableTracing: false,
  onSameUrlNavigation: 'reload',
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule],
  providers:[LoggedInAuthGuard]
})
export class AppRoutingModule { }
