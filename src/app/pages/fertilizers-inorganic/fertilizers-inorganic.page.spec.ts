import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FertilizersInorganicPage } from './fertilizers-inorganic.page';

describe('FertilizersInorganicPage', () => {
  let component: FertilizersInorganicPage;
  let fixture: ComponentFixture<FertilizersInorganicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizersInorganicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
