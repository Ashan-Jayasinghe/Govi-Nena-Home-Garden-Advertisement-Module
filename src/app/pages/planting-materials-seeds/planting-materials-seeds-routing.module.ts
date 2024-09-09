import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantingMaterialsSeedsPage } from './planting-materials-seeds.page';

const routes: Routes = [
  {
    path: '',
    component: PlantingMaterialsSeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantingMaterialsSeedsPageRoutingModule {}
