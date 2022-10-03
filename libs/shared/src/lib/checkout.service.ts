import { Injectable } from '@angular/core';
import { CheckoutResult } from './models';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  checkout(): CheckoutResult {
    return { result: 'success' };
  }
}
