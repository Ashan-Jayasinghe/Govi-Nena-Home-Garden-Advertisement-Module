import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedAdsPage } from './saved-ads.page';

const routes: Routes = [
  {
    path: '',
    component: SavedAdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedAdsPageRoutingModule {}
