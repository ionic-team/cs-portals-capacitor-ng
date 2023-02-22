import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressPage } from './address.page';
import { ExamplePage } from './example/example.page';

const routes: Routes = [
  {
    path: 'example',
    component: ExamplePage,
    pathMatch: 'full',
  },
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
