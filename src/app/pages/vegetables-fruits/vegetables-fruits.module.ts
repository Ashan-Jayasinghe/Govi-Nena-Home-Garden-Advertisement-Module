import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegetablesFruitsPageRoutingModule } from './vegetables-fruits-routing.module';

import { VegetablesFruitsPage } from './vegetables-fruits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegetablesFruitsPageRoutingModule
  ],
  declarations: [VegetablesFruitsPage]
})
export class VegetablesFruitsPageModule {}
