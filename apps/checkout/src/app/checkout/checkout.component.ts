import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@portals-ecommerce/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'portals-ecommerce-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  presentingElement: Element | null = null;
  user$: Observable<User>;

  constructor(private user: UserService) {
    this.user$ = this.user.getCurrentUser();
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}
