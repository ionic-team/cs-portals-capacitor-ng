import { Component } from '@angular/core';
import { CartService } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  basketCount = 0;

  constructor(private cart: CartService) {
    this.cart.getCurrentCart().subscribe((c) => {
      this.basketCount = 0;
      c.basket.forEach(({ quantity }) => (this.basketCount += quantity));
    });
  }
}
