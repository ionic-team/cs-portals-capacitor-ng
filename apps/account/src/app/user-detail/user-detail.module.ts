import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserDetailPageRoutingModule } from './user-detail-routing.module';
import { UserDetailPage } from './user-detail.page';
import { SharedModule } from '@portals-ecommerce/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UserDetailPageRoutingModule,
  ],
  declarations: [UserDetailPage],
})
export class UserDetailPageModule {}
