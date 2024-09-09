import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesPlantingMachinesPageRoutingModule } from './machineries-planting-machines-routing.module';

import { MachineriesPlantingMachinesPage } from './machineries-planting-machines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesPlantingMachinesPageRoutingModule
  ],
  declarations: [MachineriesPlantingMachinesPage]
})
export class MachineriesPlantingMachinesPageModule {}
