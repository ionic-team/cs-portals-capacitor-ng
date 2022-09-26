import { Component, Input } from '@angular/core';
import { Product } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
}
