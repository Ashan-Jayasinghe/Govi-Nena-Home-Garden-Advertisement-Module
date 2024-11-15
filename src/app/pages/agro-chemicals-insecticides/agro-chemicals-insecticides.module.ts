import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgroChemicalsInsecticidesPageRoutingModule } from './agro-chemicals-insecticides-routing.module';

import { AgroChemicalsInsecticidesPage } from './agro-chemicals-insecticides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgroChemicalsInsecticidesPageRoutingModule
  ],
  declarations: [AgroChemicalsInsecticidesPage]
})
export class AgroChemicalsInsecticidesPageModule {}
