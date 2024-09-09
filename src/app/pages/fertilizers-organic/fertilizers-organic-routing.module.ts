import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizersOrganicPage } from './fertilizers-organic.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizersOrganicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizersOrganicPageRoutingModule {}
