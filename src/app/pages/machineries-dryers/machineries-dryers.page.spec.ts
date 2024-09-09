import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesDryersPage } from './machineries-dryers.page';

describe('MachineriesDryersPage', () => {
  let component: MachineriesDryersPage;
  let fixture: ComponentFixture<MachineriesDryersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesDryersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
