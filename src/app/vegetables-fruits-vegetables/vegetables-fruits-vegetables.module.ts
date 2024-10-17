import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegetablesFruitsVegetablesPageRoutingModule } from './vegetables-fruits-vegetables-routing.module';

import { VegetablesFruitsVegetablesPage } from './vegetables-fruits-vegetables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegetablesFruitsVegetablesPageRoutingModule
  ],
  declarations: [VegetablesFruitsVegetablesPage]
})
export class VegetablesFruitsVegetablesPageModule {}
