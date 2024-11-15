import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetablesFruitsFruitsPage } from './vegetables-fruits-fruits.page';

const routes: Routes = [
  {
    path: '',
    component: VegetablesFruitsFruitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegetablesFruitsFruitsPageRoutingModule {}
