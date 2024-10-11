import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisementViewPage } from './advertisement-view.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementViewPageRoutingModule {}
