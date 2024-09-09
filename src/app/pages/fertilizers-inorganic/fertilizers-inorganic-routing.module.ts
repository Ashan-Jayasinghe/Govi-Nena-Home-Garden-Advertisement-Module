import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizersInorganicPage } from './fertilizers-inorganic.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizersInorganicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizersInorganicPageRoutingModule {}
