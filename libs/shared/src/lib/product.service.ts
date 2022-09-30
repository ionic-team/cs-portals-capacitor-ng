import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models';
import DataJson from '../../assets/data.json';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = DataJson.products as Product[];

  getProducts(): Product[] {
    return this.products.filter((p) => p.category !== 'MustHaves');
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter((p) => p.category === 'MustHaves');
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
