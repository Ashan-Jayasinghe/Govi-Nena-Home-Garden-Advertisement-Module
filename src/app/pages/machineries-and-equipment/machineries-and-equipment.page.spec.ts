import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesAndEquipmentPage } from './machineries-and-equipment.page';

describe('MachineriesAndEquipmentPage', () => {
  let component: MachineriesAndEquipmentPage;
  let fixture: ComponentFixture<MachineriesAndEquipmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesAndEquipmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
