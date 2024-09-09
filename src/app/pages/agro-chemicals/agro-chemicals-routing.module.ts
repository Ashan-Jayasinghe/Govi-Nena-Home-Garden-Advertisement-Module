import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgroChemicalsPage } from './agro-chemicals.page';

const routes: Routes = [
  {
    path: '',
    component: AgroChemicalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroChemicalsPageRoutingModule {}
