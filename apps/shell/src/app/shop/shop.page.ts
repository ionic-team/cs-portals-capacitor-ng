import { Component } from '@angular/core';
import { ProductService, Product } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss'],
})
export class ShopPage {
  featuredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private product: ProductService) {
    this.products = this.product.getProducts();
    this.featuredProducts = this.product.getFeaturedProducts();
  }
}
