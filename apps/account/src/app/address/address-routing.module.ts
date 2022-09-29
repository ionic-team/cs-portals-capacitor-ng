import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressPage } from './address.page';

const routes: Routes = [
  {
    path: ':id',
    component: AddressPage,
  },
  {
    path: '',
    component: AddressPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressPageRoutingModule {}
