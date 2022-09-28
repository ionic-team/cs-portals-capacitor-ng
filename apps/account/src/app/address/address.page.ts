import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { StateCodes, User, UserService } from '@portals-ecommerce/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'portals-ecommerce-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  user$: Observable<User>;

  id = -1;
  street = '';
  city = '';
  state = '';
  postal = '';
  preferred = false;

  constructor(
    private route: ActivatedRoute,
    private user: UserService,
    private pickerCtrl: PickerController,
    private router: Router
  ) {
    this.user$ = this.user.getCurrentUser();
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '-1', 10);
    const address = this.user.getAddressById(this.id);
    if (address) {
      this.street = address.street;
      this.city = address.city;
      this.state = address.state;
      this.postal = address.postal;
      this.preferred = address.preferred || false;
    }
  }

  async openStateCodePicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'StateCode',
          options: StateCodes.map((code) => ({ text: code, value: code })),
          selectedIndex: StateCodes.findIndex((code) => code === this.state),
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (selected) => (this.state = selected.StateCode.value),
        },
      ],
    });
    await picker.present();
  }

  saveAddress() {
    const { id, street, city, state, postal, preferred } = this;
    this.user.saveAddress({ id, street, city, state, postal, preferred });
    this.router.navigate(['/user']);
  }
}
