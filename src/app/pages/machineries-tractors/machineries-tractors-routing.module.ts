import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesTractorsPage } from './machineries-tractors.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesTractorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesTractorsPageRoutingModule {}
