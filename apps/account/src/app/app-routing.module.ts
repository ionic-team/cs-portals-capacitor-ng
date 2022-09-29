import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-detail/user-detail.module').then(
        (m) => m.UserDetailPageModule
      ),
  },
  {
    path: 'address',
    loadChildren: () =>
      import('./address/address.module').then((m) => m.AddressPageModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
