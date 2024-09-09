import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantingMaterialsSeedlingsPage } from './planting-materials-seedlings.page';

describe('PlantingMaterialsSeedlingsPage', () => {
  let component: PlantingMaterialsSeedlingsPage;
  let fixture: ComponentFixture<PlantingMaterialsSeedlingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingMaterialsSeedlingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
