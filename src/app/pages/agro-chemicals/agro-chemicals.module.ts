import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgroChemicalsPageRoutingModule } from './agro-chemicals-routing.module';

import { AgroChemicalsPage } from './agro-chemicals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgroChemicalsPageRoutingModule
  ],
  declarations: [AgroChemicalsPage]
})
export class AgroChemicalsPageModule {}
