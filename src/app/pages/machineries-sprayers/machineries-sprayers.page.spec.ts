import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesSprayersPage } from './machineries-sprayers.page';

describe('MachineriesSprayersPage', () => {
  let component: MachineriesSprayersPage;
  let fixture: ComponentFixture<MachineriesSprayersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesSprayersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
