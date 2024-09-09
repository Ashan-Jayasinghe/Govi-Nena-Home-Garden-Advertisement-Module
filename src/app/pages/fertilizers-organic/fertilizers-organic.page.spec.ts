import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FertilizersOrganicPage } from './fertilizers-organic.page';

describe('FertilizersOrganicPage', () => {
  let component: FertilizersOrganicPage;
  let fixture: ComponentFixture<FertilizersOrganicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizersOrganicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
