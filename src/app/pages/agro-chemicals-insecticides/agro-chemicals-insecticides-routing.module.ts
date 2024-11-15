import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgroChemicalsInsecticidesPage } from './agro-chemicals-insecticides.page';

const routes: Routes = [
  {
    path: '',
    component: AgroChemicalsInsecticidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroChemicalsInsecticidesPageRoutingModule {}
