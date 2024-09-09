import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesPlantingMachinesPage } from './machineries-planting-machines.page';

describe('MachineriesPlantingMachinesPage', () => {
  let component: MachineriesPlantingMachinesPage;
  let fixture: ComponentFixture<MachineriesPlantingMachinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesPlantingMachinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
