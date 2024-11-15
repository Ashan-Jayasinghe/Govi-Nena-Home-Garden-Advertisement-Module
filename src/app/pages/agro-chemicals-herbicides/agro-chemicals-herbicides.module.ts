import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgroChemicalsHerbicidesPageRoutingModule } from './agro-chemicals-herbicides-routing.module';

import { AgroChemicalsHerbicidesPage } from './agro-chemicals-herbicides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgroChemicalsHerbicidesPageRoutingModule
  ],
  declarations: [AgroChemicalsHerbicidesPage]
})
export class AgroChemicalsHerbicidesPageModule {}
