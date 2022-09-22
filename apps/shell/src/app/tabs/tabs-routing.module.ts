import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'shop',
        loadChildren: () =>
          import('../shop/shop.module').then((m) => m.ShopPageModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('account/Module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: '/shop',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
