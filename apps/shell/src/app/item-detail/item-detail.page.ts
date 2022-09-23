import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'portals-ecommerce-item-detail',
  templateUrl: 'item-detail.page.html',
  styleUrls: ['item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  product = {
    id: 1,
    title: 'Capacitor Snapback',
    price: 32,
    description: 'lorem ipsum',
  };
  id = -1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
  }
}
