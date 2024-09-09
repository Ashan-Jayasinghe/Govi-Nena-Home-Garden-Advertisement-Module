import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantingMaterialsSeedsPage } from './planting-materials-seeds.page';

describe('PlantingMaterialsSeedsPage', () => {
  let component: PlantingMaterialsSeedsPage;
  let fixture: ComponentFixture<PlantingMaterialsSeedsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingMaterialsSeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
