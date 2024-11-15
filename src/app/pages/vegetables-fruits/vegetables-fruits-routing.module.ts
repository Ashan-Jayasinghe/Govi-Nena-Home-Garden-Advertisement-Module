import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetablesFruitsPage } from './vegetables-fruits.page';

const routes: Routes = [
  {
    path: '',
    component: VegetablesFruitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegetablesFruitsPageRoutingModule {}
