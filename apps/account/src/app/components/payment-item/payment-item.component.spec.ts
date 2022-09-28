import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentItemComponent } from './payment-item.component';

describe('PaymentItemComponent', () => {
  let component: PaymentItemComponent;
  let fixture: ComponentFixture<PaymentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
