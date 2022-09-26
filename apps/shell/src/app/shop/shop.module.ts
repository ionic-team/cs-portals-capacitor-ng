import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShopPageRoutingModule } from './shop-routing.module';
import { ShopPage } from './shop.page';
import { ProductCardComponent } from './product-card/product-card.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

@NgModule({
  imports: [IonicModule, CommonModule, ShopPageRoutingModule],
  declarations: [ShopPage, ProductCardComponent, FeaturedProductsComponent],
})
export class ShopPageModule {}
