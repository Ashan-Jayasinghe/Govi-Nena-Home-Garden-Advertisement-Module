import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetablesFruitsVegetablesPage } from './vegetables-fruits-vegetables.page';

const routes: Routes = [
  {
    path: '',
    component: VegetablesFruitsVegetablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegetablesFruitsVegetablesPageRoutingModule {}
