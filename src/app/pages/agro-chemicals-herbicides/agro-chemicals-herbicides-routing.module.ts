import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgroChemicalsHerbicidesPage } from './agro-chemicals-herbicides.page';

const routes: Routes = [
  {
    path: '',
    component: AgroChemicalsHerbicidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroChemicalsHerbicidesPageRoutingModule {}
