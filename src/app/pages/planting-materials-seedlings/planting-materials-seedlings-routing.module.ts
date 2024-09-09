import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantingMaterialsSeedlingsPage } from './planting-materials-seedlings.page';

const routes: Routes = [
  {
    path: '',
    component: PlantingMaterialsSeedlingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantingMaterialsSeedlingsPageRoutingModule {}
