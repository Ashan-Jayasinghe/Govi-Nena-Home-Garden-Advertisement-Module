import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgroChemicalsOtherPageRoutingModule } from './agro-chemicals-other-routing.module';

import { AgroChemicalsOtherPage } from './agro-chemicals-other.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgroChemicalsOtherPageRoutingModule
  ],
  declarations: [AgroChemicalsOtherPage]
})
export class AgroChemicalsOtherPageModule {}
