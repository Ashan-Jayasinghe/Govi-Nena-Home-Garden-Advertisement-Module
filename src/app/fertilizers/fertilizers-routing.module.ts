import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizersPage } from './fertilizers.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizersPageRoutingModule {}
