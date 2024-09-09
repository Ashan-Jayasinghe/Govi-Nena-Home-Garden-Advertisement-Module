import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesAndEquipmentPageRoutingModule } from './machineries-and-equipment-routing.module';

import { MachineriesAndEquipmentPage } from './machineries-and-equipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesAndEquipmentPageRoutingModule
  ],
  declarations: [MachineriesAndEquipmentPage]
})
export class MachineriesAndEquipmentPageModule {}
