import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailPage } from './item-detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: ItemDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetailPageRoutingModule {}
