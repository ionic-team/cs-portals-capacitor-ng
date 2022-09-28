import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailPageRoutingModule } from './user-detail-routing.module';

import { UserDetailPage } from './user-detail.page';
import { AddressItemComponent } from '../components/address-item/address-item.component';
import { PaymentItemComponent } from '../components/payment-item/payment-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailPageRoutingModule,
  ],
  declarations: [UserDetailPage, AddressItemComponent, PaymentItemComponent],
})
export class UserDetailPageModule {}
