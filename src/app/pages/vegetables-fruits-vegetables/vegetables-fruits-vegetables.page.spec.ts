import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VegetablesFruitsVegetablesPage } from './vegetables-fruits-vegetables.page';

describe('VegetablesFruitsVegetablesPage', () => {
  let component: VegetablesFruitsVegetablesPage;
  let fixture: ComponentFixture<VegetablesFruitsVegetablesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesFruitsVegetablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VegetablesFruitsVegetablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
