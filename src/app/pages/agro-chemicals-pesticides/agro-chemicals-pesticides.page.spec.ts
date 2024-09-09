import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgroChemicalsPesticidesPage } from './agro-chemicals-pesticides.page';

describe('AgroChemicalsPesticidesPage', () => {
  let component: AgroChemicalsPesticidesPage;
  let fixture: ComponentFixture<AgroChemicalsPesticidesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroChemicalsPesticidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
