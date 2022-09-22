import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ItemDetailPageRoutingModule } from './item-detail-routing.module';
import { ItemDetailPage } from './item-detail.page';

@NgModule({
  imports: [IonicModule, CommonModule, ItemDetailPageRoutingModule],
  declarations: [ItemDetailPage],
})
export class ItemDetailPageModule {}
