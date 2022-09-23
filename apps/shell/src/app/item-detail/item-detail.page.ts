import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService, Product } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-item-detail',
  templateUrl: 'item-detail.page.html',
  styleUrls: ['item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  product$: Observable<Product | undefined> = of(undefined);

  constructor(private route: ActivatedRoute, private product: ProductService) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.product$ = this.product.getProductById(id);
  }

  addToCart(product: Product) {
    console.log(product);
  }
}
