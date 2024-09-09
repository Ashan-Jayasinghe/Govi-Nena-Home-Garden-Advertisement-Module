import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesOtherPage } from './machineries-other.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesOtherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesOtherPageRoutingModule {}
