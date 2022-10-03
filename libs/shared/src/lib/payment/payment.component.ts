import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditCard } from '../models';

@Component({
  selector: 'portals-ecommerce-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Input() creditCard!: CreditCard;
  @Input() selectable = true;
  @Input() selectedId?: number;

  @Output() selectPayment = new EventEmitter<CreditCard>();

  onPaymentSelected() {
    if (this.creditCard.id !== this.selectedId)
      this.selectPayment.emit(this.creditCard);
  }
}
