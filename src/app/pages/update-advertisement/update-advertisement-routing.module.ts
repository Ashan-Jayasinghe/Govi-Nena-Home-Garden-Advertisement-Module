import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAdvertisementPage } from './update-advertisement.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAdvertisementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAdvertisementPageRoutingModule {}
