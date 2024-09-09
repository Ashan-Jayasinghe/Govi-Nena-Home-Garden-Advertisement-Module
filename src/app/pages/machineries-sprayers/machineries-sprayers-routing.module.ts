import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesSprayersPage } from './machineries-sprayers.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesSprayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesSprayersPageRoutingModule {}
