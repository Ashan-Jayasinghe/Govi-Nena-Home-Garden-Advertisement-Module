import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisementDetailsPage } from './advertisement-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementDetailsPageRoutingModule {}
