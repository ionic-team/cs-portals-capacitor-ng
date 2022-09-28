import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address, User } from './models';
import UserJson from '../../assets/data.json';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user = new BehaviorSubject(UserJson.user as User);

  getCurrentUser(): Observable<User> {
    return this.user.asObservable();
  }

  updateCurrentUser(update: Partial<User>) {
    this.user.next({ ...this.user.getValue(), ...update });
  }

  getAddressById(id?: number): Address | undefined {
    return this.user.getValue().addresses.find((a) => a.id === id);
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
}
