import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantingMaterialsPage } from './planting-materials.page';

const routes: Routes = [
  {
    path: '',
    component: PlantingMaterialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantingMaterialsPageRoutingModule {}
