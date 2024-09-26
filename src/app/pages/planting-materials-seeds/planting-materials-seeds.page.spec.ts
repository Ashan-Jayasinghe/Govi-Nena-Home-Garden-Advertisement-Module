import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantingMaterialsSeedsPage } from './planting-materials-seeds.page';

describe('PlantingMaterialsSeedsPage', () => {
  let component: PlantingMaterialsSeedsPage;
  let fixture: ComponentFixture<PlantingMaterialsSeedsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingMaterialsSeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class PlantingMaterialsSeedsPage{
  type: any;
  variety: any;
  title: any;
  images: any;
  stock: any;
  specifications: any;
  price1: any;
  price5: any;
  price10: any;
  address: any;
  mobile: any;
  constructor(){}

  addSeeeds(){
    let data = (
      this.type,
      this.variety,
      this.title,
      this.images,
      this.stock,
      this.specifications,
      this.price1,
      this.price5,
      this.price10,
      this.address,
      this.mobile);
  }
}