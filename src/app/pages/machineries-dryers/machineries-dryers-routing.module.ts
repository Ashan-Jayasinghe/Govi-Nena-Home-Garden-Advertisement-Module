import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesDryersPage } from './machineries-dryers.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesDryersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesDryersPageRoutingModule {}
