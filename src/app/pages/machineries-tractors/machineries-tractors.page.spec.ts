import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesTractorsPage } from './machineries-tractors.page';

describe('MachineriesTractorsPage', () => {
  let component: MachineriesTractorsPage;
  let fixture: ComponentFixture<MachineriesTractorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesTractorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
