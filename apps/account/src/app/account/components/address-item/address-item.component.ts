import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address, User } from '@portals-ecommerce/shared';

@Component({
  selector: 'portals-ecommerce-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss'],
})
export class AddressItemComponent {
  @Input() user!: User;
  @Input() address!: Address;
  @Input() selectable = false;
  @Input() selectedId?: number;

  @Output() selectAddress = new EventEmitter<Address>();

  onAddressSelected() {
    if (this.address.id !== this.selectedId)
      this.selectAddress.emit(this.address);
  }
}
