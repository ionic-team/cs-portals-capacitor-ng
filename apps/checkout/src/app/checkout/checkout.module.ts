import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
