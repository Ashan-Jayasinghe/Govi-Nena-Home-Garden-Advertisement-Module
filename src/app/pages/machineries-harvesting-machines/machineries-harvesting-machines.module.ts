import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesHarvestingMachinesPageRoutingModule } from './machineries-harvesting-machines-routing.module';

import { MachineriesHarvestingMachinesPage } from './machineries-harvesting-machines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesHarvestingMachinesPageRoutingModule
  ],
  declarations: [MachineriesHarvestingMachinesPage]
})
export class MachineriesHarvestingMachinesPageModule {}
