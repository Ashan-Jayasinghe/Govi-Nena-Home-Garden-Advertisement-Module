import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FertilizersPage } from './fertilizers.page';

describe('FertilizersPage', () => {
  let component: FertilizersPage;
  let fixture: ComponentFixture<FertilizersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
