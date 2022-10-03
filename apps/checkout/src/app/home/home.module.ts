import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CheckoutModule } from '../checkout/checkout.module';

@NgModule({
  imports: [CommonModule, IonicModule, HomePageRoutingModule, CheckoutModule],
  declarations: [HomePage],
})
export class HomePageModule {}
