import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellRentPage } from './sell-rent.page';

const routes: Routes = [
  {
    path: '',
    component: SellRentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellRentPageRoutingModule {}
