import { Component } from '@angular/core';
import { UserService, User } from '@portals-ecommerce/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'portals-ecommerce-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage {
  user$: Observable<User>;

  constructor(private user: UserService) {
    this.user$ = this.user.getCurrentUser();
  }

  updateFirstName(e: any) {
    this.user.updateCurrentUser({ firstName: e.detail.value });
  }

  updateLastName(e: any) {
    this.user.updateCurrentUser({ lastName: e.detail.value });
  }

  updateEmailAddress(e: any) {
    this.user.updateCurrentUser({ email: e.detail.value });
  }
}
