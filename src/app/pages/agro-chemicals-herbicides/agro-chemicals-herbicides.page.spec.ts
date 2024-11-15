import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgroChemicalsHerbicidesPage } from './agro-chemicals-herbicides.page';

describe('AgroChemicalsHerbicidesPage', () => {
  let component: AgroChemicalsHerbicidesPage;
  let fixture: ComponentFixture<AgroChemicalsHerbicidesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroChemicalsHerbicidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgroChemicalsHerbicidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
