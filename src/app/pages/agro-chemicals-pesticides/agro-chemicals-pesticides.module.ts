import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgroChemicalsPesticidesPageRoutingModule } from './agro-chemicals-pesticides-routing.module';

import { AgroChemicalsPesticidesPage } from './agro-chemicals-pesticides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgroChemicalsPesticidesPageRoutingModule
  ],
  declarations: [AgroChemicalsPesticidesPage]
})
export class AgroChemicalsPesticidesPageModule {}
