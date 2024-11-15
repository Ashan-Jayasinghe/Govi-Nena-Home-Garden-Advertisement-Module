import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegetablesFruitsFruitsPageRoutingModule } from './vegetables-fruits-fruits-routing.module';

import { VegetablesFruitsFruitsPage } from './vegetables-fruits-fruits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegetablesFruitsFruitsPageRoutingModule
  ],
  declarations: [VegetablesFruitsFruitsPage]
})
export class VegetablesFruitsFruitsPageModule {}
