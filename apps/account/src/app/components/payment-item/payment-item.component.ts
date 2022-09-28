import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditCard } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.scss'],
})
export class PaymentItemComponent {
  @Input() creditCard!: CreditCard;
  @Input() selectable = false;
  @Input() selectedId?: number;

  @Output() selectPayment = new EventEmitter<CreditCard>();

  onPaymentSelected() {
    if (this.creditCard.id !== this.selectedId)
      this.selectPayment.emit(this.creditCard);
  }
}
