/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, Input, OnInit } from '@angular/core';
import {
  CartService,
  Product,
  ProductService,
} from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
})
export class CartListItemComponent implements OnInit {
  @Input() id!: number;
  @Input() quantity!: number;

  product?: Product;

  constructor(private cart: CartService, private productSvc: ProductService) {}

  ngOnInit(): void {
    this.product = this.productSvc.getProductById(this.id);
  }

  addQuantity() {
    this.quantity++;
    this.cart.addToBasket(this.product!.id, this.product!.price);
  }

  removeQuantity() {
    this.quantity--;
    this.cart.removeFromBasket(this.product!.id, this.product!.price);
  }
}
