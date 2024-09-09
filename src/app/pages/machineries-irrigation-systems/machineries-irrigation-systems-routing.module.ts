import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesIrrigationSystemsPage } from './machineries-irrigation-systems.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesIrrigationSystemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesIrrigationSystemsPageRoutingModule {}
