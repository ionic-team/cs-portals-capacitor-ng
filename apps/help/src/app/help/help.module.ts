import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HelpPage } from './help.page';

import { HelpPageRoutingModule } from './help-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HelpPageRoutingModule],
  declarations: [HelpPage],
})
export class HelpPageModule {}
