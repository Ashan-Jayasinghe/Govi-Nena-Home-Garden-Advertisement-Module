import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesTillagePage } from './machineries-tillage.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesTillagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesTillagePageRoutingModule {}
