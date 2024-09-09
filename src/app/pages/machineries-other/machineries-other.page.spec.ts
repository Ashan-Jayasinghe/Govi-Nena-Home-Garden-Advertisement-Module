import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesOtherPage } from './machineries-other.page';

describe('MachineriesOtherPage', () => {
  let component: MachineriesOtherPage;
  let fixture: ComponentFixture<MachineriesOtherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesOtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
