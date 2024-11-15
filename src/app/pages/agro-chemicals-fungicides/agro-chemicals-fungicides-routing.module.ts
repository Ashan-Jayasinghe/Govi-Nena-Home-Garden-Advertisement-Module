import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgroChemicalsFungicidesPage } from './agro-chemicals-fungicides.page';

const routes: Routes = [
  {
    path: '',
    component: AgroChemicalsFungicidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroChemicalsFungicidesPageRoutingModule {}
