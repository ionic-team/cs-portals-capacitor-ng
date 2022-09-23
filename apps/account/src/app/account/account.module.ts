import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountPage } from './account.page';

import { AccountPageRoutingModule } from './account-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AccountPageRoutingModule],
  declarations: [AccountPage],
})
export class AccountPageModule {}
