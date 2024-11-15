import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VegetablesFruitsFruitsPage } from './vegetables-fruits-fruits.page';

describe('VegetablesFruitsFruitsPage', () => {
  let component: VegetablesFruitsFruitsPage;
  let fixture: ComponentFixture<VegetablesFruitsFruitsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesFruitsFruitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VegetablesFruitsFruitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
