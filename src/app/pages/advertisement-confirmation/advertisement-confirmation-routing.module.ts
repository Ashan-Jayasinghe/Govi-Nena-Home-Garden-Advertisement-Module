import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisementConfirmationPage } from './advertisement-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementConfirmationPageRoutingModule {}
