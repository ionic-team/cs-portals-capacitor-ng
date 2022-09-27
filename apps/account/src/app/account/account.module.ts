import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountPage } from './account.page';

import { AccountPageRoutingModule } from './account-routing.module';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { PaymentItemComponent } from './components/payment-item/payment-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AccountPageRoutingModule],
  declarations: [AccountPage, AddressItemComponent, PaymentItemComponent],
})
export class AccountPageModule {}
