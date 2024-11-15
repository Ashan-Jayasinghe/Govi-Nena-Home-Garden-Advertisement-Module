import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgroChemicalsFungicidesPageRoutingModule } from './agro-chemicals-fungicides-routing.module';

import { AgroChemicalsFungicidesPage } from './agro-chemicals-fungicides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgroChemicalsFungicidesPageRoutingModule
  ],
  declarations: [AgroChemicalsFungicidesPage]
})
export class AgroChemicalsFungicidesPageModule {}
