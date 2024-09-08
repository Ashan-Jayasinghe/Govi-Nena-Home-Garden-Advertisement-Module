import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantingMaterialsPage } from './planting-materials.page';

describe('PlantingMaterialsPage', () => {
  let component: PlantingMaterialsPage;
  let fixture: ComponentFixture<PlantingMaterialsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingMaterialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
