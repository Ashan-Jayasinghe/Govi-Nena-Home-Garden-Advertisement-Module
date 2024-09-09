import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesAndEquipmentPage } from './machineries-and-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesAndEquipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesAndEquipmentPageRoutingModule {}
