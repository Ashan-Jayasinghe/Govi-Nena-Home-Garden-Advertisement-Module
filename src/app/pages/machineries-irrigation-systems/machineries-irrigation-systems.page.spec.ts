import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesIrrigationSystemsPage } from './machineries-irrigation-systems.page';

describe('MachineriesIrrigationSystemsPage', () => {
  let component: MachineriesIrrigationSystemsPage;
  let fixture: ComponentFixture<MachineriesIrrigationSystemsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesIrrigationSystemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
