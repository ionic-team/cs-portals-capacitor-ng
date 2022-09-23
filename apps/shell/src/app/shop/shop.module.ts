import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShopPageRoutingModule } from './shop-routing.module';
import { ShopPage } from './shop.page';

@NgModule({
  imports: [IonicModule, CommonModule, ShopPageRoutingModule],
  declarations: [ShopPage],
})
export class ShopPageModule {}
