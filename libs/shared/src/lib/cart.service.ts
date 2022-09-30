/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from './models';
import DataJson from '../../assets/data.json';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart = new BehaviorSubject(DataJson.cart as Cart);

  constructor(private user: UserService) {
    this.user
      .getCurrentUser()
      .subscribe(({ id }) => this.cart.next({ ...this.cart.getValue(), id }));
  }

  getCurrentCart(): Observable<Cart> {
    return this.cart.asObservable();
  }

  addToBasket(id: number, price: number, quantity: number = 1) {
    let { basket, subTotal } = this.cart.getValue();
    subTotal += price * quantity;

    const idx = basket.findIndex(({ productId }) => productId === id);
    if (idx > -1) basket[idx].quantity += quantity;
    else basket.push({ productId: id, quantity });

    this.cart.next({ ...this.cart.getValue(), basket, subTotal });
  }

  removeFromBasket(id: number, price: number, quantity: number = 1) {
    let { basket, subTotal } = this.cart.getValue();
    subTotal -= price * quantity;

    const idx = basket.findIndex(({ productId }) => productId === id);
    if (basket[idx].quantity - quantity > 0) basket[idx].quantity -= quantity;
    else basket.splice(idx, 1);

    this.cart.next({ ...this.cart.getValue(), basket, subTotal });
    console.log(this.cart.getValue());
  }

  clearBasket() {
    this.cart.next({ ...this.cart.getValue(), basket: [], subTotal: 0 });
  }
}
