import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAdvertisementsPage } from './my-advertisements.page';

const routes: Routes = [
  {
    path: '',
    component: MyAdvertisementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAdvertisementsPageRoutingModule {}
