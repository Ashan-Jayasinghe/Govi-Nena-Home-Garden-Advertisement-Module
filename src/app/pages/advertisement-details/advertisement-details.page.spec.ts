import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisementDetailsPage } from './advertisement-details.page';

describe('AdvertisementDetailsPage', () => {
  let component: AdvertisementDetailsPage;
  let fixture: ComponentFixture<AdvertisementDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
