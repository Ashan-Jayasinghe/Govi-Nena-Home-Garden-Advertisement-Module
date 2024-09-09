import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesPlantingMachinesPage } from './machineries-planting-machines.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesPlantingMachinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesPlantingMachinesPageRoutingModule {}
