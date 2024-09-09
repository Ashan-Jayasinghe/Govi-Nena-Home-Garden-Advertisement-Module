import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantingMaterialsTubersPage } from './planting-materials-tubers.page';

describe('PlantingMaterialsTubersPage', () => {
  let component: PlantingMaterialsTubersPage;
  let fixture: ComponentFixture<PlantingMaterialsTubersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingMaterialsTubersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
