import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesHarvestingMachinesPage } from './machineries-harvesting-machines.page';

describe('MachineriesHarvestingMachinesPage', () => {
  let component: MachineriesHarvestingMachinesPage;
  let fixture: ComponentFixture<MachineriesHarvestingMachinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesHarvestingMachinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
