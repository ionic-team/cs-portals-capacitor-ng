import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressPageRoutingModule } from './address-routing.module';

import { AddressPage } from './address.page';
import { ExamplePage } from './example/example.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AddressPageRoutingModule],
  declarations: [AddressPage, ExamplePage],
})
export class AddressPageModule {}
