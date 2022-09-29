import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  today = new Date(Date.now()).toISOString();

  id = -1;
  number = '';
  cvv = '';
  zip = '';
  expirationDate = this.today;
  preferred = false;

  constructor(
    private route: ActivatedRoute,
    private user: UserService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '-1', 10);
    const card = this.user.getPaymentMethodById(this.id);
    if (card) {
      this.number = card.number;
      this.cvv = card.cvv;
      this.zip = card.zip;
      this.expirationDate = card.expirationDate;
      this.preferred = card.preferred || false;
    }
  }

  savePaymentMethod() {
    const { id, number, cvv, zip, expirationDate, preferred } = this;
    const card = { id, number, cvv, zip, expirationDate, preferred };
    this.user.savePaymentMethod({ ...card, company: 'Visa' });
    this.nav.back();
  }
}
