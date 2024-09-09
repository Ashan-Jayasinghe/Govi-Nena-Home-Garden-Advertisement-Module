import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesHarvestingMachinesPage } from './machineries-harvesting-machines.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesHarvestingMachinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesHarvestingMachinesPageRoutingModule {}
