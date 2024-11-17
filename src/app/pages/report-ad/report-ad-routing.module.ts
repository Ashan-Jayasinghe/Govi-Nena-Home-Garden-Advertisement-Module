import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportAdPage } from './report-ad.page';

const routes: Routes = [
  {
    path: '',
    component: ReportAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportAdPageRoutingModule {}
