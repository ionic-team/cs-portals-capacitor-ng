/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { UserService, User, Address } from '@portals-ecommerce/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'pea-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {
  user$: Observable<User>;

  constructor(private user: UserService) {
    this.user$ = this.user.getCurrentUser();
  }

  onAddressSelected(address: Address) {
    console.log(address);
  }
}
