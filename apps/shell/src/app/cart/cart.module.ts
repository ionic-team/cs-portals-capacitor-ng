import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { CartListItemComponent } from './cart-list-item/cart-list-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CartPageRoutingModule],
  declarations: [CartPage, CartListItemComponent],
})
export class CartPageModule {}
