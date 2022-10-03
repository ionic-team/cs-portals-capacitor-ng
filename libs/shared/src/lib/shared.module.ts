import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { PaymentItemComponent } from './components/payment-item/payment-item.component';

@NgModule({
  imports: [IonicModule, CommonModule, RouterModule],
  declarations: [AddressItemComponent, PaymentItemComponent],
  exports: [AddressItemComponent, PaymentItemComponent],
})
export class SharedModule {}
