import { Component } from '@angular/core';
import { ProductService } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss'],
})
export class ShopPage {
  constructor(private product: ProductService) {
    console.log(this.product.user);
  }
}
