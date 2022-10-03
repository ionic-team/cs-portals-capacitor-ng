import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  ProductService,
  Product,
  CartService,
} from '@portals-ecommerce/shared';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'portals-ecommerce-item-detail',
  templateUrl: 'item-detail.page.html',
  styleUrls: ['item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  product?: Product = undefined;

  constructor(
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private cart: CartService,
    private nav: NavController
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.product = this.productSvc.getProductById(id);
  }

  addToCart(product: Product) {
    this.cart.addToBasket(product.id, product.price);
    this.nav.navigateBack('/shop');
  }
}
