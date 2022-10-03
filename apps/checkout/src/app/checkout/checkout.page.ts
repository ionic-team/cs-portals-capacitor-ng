import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Cart,
  CartService,
  CheckoutService,
  CreditCard,
  User,
  UserService,
  Address,
} from '@portals-ecommerce/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'portals-ecommerce-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  user$: Observable<User>;
  cart$: Observable<Cart>;
  selectedAddressId = -1;
  selectedPaymentId = -1;

  constructor(
    private user: UserService,
    private cart: CartService,
    private checkout: CheckoutService,
    private nav: NavController
  ) {
    this.user$ = this.user.getCurrentUser();
    this.cart$ = this.cart.getCurrentCart();
  }

  ngOnInit(): void {
    this.selectedAddressId = this.user.getPreferredAddress()?.id || -1;
    this.selectedPaymentId = this.user.getPreferredPaymentMethod()?.id || -1;
  }

  onAddressSelected(e: any) {
    this.selectedAddressId = e.id;
  }

  onPaymentSelected(e: any) {
    this.selectedPaymentId = e.id;
  }

  async order() {
    const { result } = this.checkout.checkout();
    if (result === 'success') {
      this.cart.clearBasket();
      this.nav.navigateBack('/cart');
    }
  }
}
