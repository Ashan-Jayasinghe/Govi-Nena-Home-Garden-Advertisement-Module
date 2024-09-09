import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgroChemicalsPesticidesPage } from './agro-chemicals-pesticides.page';

const routes: Routes = [
  {
    path: '',
    component: AgroChemicalsPesticidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroChemicalsPesticidesPageRoutingModule {}
