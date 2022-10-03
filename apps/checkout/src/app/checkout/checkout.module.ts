import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@portals-ecommerce/shared';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  imports: [IonicModule, CommonModule, SharedModule],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
