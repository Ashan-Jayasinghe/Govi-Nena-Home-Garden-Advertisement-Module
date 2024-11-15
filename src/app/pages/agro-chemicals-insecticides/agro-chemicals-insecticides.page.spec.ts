import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgroChemicalsInsecticidesPage } from './agro-chemicals-insecticides.page';

describe('AgroChemicalsInsecticidesPage', () => {
  let component: AgroChemicalsInsecticidesPage;
  let fixture: ComponentFixture<AgroChemicalsInsecticidesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroChemicalsInsecticidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgroChemicalsInsecticidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
