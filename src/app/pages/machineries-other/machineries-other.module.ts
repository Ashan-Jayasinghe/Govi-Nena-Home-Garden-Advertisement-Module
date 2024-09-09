import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesOtherPageRoutingModule } from './machineries-other-routing.module';

import { MachineriesOtherPage } from './machineries-other.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesOtherPageRoutingModule
  ],
  declarations: [MachineriesOtherPage]
})
export class MachineriesOtherPageModule {}
