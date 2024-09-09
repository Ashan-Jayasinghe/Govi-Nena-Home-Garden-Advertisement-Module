import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgroChemicalssPlantGrowthRegulatorsPage } from './agro-chemicalss-plant-growth-regulators.page';

const routes: Routes = [
  {
    path: '',
    component: AgroChemicalssPlantGrowthRegulatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroChemicalssPlantGrowthRegulatorsPageRoutingModule {}
