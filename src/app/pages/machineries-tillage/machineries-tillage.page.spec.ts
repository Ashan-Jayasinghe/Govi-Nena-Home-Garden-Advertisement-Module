import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesTillagePage } from './machineries-tillage.page';

describe('MachineriesTillagePage', () => {
  let component: MachineriesTillagePage;
  let fixture: ComponentFixture<MachineriesTillagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesTillagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
