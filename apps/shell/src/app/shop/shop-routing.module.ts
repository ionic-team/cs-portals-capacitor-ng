import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPage } from './shop.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPage,
  },
  {
    path: 'item',
    loadChildren: () =>
      import('../item-detail/item-detail.module').then(
        (m) => m.ItemDetailPageModule
      ),
  },
  {
    path: 'help',
    loadChildren: () => import('help/Module').then((m) => m.HelpPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPageRoutingModule {}
