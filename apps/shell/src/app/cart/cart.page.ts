import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService, Cart } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cart$: Observable<Cart>;

  constructor(private cart: CartService) {
    this.cart$ = this.cart.getCurrentCart();
  }
}
