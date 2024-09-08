import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellRentPage } from './sell-rent.page';

describe('SellRentPage', () => {
  let component: SellRentPage;
  let fixture: ComponentFixture<SellRentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SellRentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
