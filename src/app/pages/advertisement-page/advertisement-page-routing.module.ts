import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisementPagePage } from './advertisement-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementPagePageRoutingModule {}
