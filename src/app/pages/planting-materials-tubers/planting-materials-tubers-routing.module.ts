import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantingMaterialsTubersPage } from './planting-materials-tubers.page';

const routes: Routes = [
  {
    path: '',
    component: PlantingMaterialsTubersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantingMaterialsTubersPageRoutingModule {}
