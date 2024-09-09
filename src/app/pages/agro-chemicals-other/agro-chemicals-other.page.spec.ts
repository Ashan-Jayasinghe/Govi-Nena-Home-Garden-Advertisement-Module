import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgroChemicalsOtherPage } from './agro-chemicals-other.page';

describe('AgroChemicalsOtherPage', () => {
  let component: AgroChemicalsOtherPage;
  let fixture: ComponentFixture<AgroChemicalsOtherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroChemicalsOtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
