import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgroChemicalssPlantGrowthRegulatorsPageRoutingModule } from './agro-chemicalss-plant-growth-regulators-routing.module';

import { AgroChemicalssPlantGrowthRegulatorsPage } from './agro-chemicalss-plant-growth-regulators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgroChemicalssPlantGrowthRegulatorsPageRoutingModule
  ],
  declarations: [AgroChemicalssPlantGrowthRegulatorsPage]
})
export class AgroChemicalssPlantGrowthRegulatorsPageModule {}
