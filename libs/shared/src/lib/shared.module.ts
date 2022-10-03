import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [AddressComponent, PaymentComponent],
  exports: [AddressComponent, PaymentComponent],
})
export class SharedModule {}
