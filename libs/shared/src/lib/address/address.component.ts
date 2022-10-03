import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, Address } from '../models';

@Component({
  selector: 'portals-ecommerce-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Input() user!: User;
  @Input() address!: Address;
  @Input() selectable = true;
  @Input() selectedId?: number;

  @Output() selectAddress = new EventEmitter<Address>();

  onAddressSelected() {
    if (this.address.id !== this.selectedId)
      this.selectAddress.emit(this.address);
  }
}
