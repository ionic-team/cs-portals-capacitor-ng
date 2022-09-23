import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models';
import ProductsJson from '../../assets/data.json';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = ProductsJson.products as Product[];

  getProducts(): Product[] {
    return this.products.filter((p) => p.category !== 'MustHaves');
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter((p) => p.category === 'MustHaves');
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find((p) => p.id === id));
  }
}
