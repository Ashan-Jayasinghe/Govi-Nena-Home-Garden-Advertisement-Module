import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgroChemicalsFungicidesPage } from './agro-chemicals-fungicides.page';

describe('AgroChemicalsFungicidesPage', () => {
  let component: AgroChemicalsFungicidesPage;
  let fixture: ComponentFixture<AgroChemicalsFungicidesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroChemicalsFungicidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgroChemicalsFungicidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
