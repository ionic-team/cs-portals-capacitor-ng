import { Component, Input } from '@angular/core';
import { Product } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent {
  @Input() products!: Product[];
}
