import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address, CreditCard, User } from './models';
import DataJson from '../../assets/data.json';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user = new BehaviorSubject(DataJson.user as User);

  getCurrentUser(): Observable<User> {
    return this.user.asObservable();
  }

  updateCurrentUser(update: Partial<User>) {
    this.user.next({ ...this.user.getValue(), ...update });
  }

  getAddressById(id: number): Address | undefined {
    return this.user.getValue().addresses.find((a) => a.id === id);
  }

  getPaymentMethodById(id: number): CreditCard | undefined {
    return this.user.getValue().creditCards.find((c) => c.id === id);
  }

  getPreferredAddress(): Address | undefined {
    return this.user.getValue().addresses.find((a) => a.preferred);
  }

  getPreferredPaymentMethod(): CreditCard | undefined {
    return this.user.getValue().creditCards.find((c) => c.preferred);
  }

  saveAddress(address: Address) {
    const addresses = this.user.getValue().addresses;
    let idx = addresses.findIndex((a) => a.id === address.id);

    if (address.preferred) addresses.map((a) => (a.preferred = false));

    if (idx > -1) {
      addresses.splice(idx, 1, address);
    } else {
      idx = (Math.max(...addresses.map((a) => a.id)) || 0) + 1;
      addresses.push({ ...address, id: idx });
    }

    this.user.next({ ...this.user.getValue(), addresses });
  }

  savePaymentMethod(card: CreditCard) {
    const creditCards = this.user.getValue().creditCards;
    let idx = creditCards.findIndex((c) => c.id === card.id);

    if (card.preferred) creditCards.map((c) => (c.preferred = false));

    if (idx > -1) {
      creditCards.splice(idx, 1, card);
    } else {
      idx = Math.max(...(creditCards.map((c) => c.id) || 0)) + 1;
      creditCards.push({ ...card, id: idx });
    }

    this.user.next({ ...this.user.getValue(), creditCards });
  }
}
