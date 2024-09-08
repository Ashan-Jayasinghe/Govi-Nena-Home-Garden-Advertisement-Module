import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgroChemicalsPage } from './agro-chemicals.page';

describe('AgroChemicalsPage', () => {
  let component: AgroChemicalsPage;
  let fixture: ComponentFixture<AgroChemicalsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroChemicalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
