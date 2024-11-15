import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarvestMarketPage } from './harvest-market.page';

const routes: Routes = [
  {
    path: '',
    component: HarvestMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarvestMarketPageRoutingModule {}
