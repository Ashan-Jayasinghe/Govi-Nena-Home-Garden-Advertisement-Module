import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisementPagePage } from './advertisement-page.page';

describe('AdvertisementPagePage', () => {
  let component: AdvertisementPagePage;
  let fixture: ComponentFixture<AdvertisementPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
