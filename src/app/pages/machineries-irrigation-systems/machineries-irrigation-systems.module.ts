import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesIrrigationSystemsPageRoutingModule } from './machineries-irrigation-systems-routing.module';

import { MachineriesIrrigationSystemsPage } from './machineries-irrigation-systems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesIrrigationSystemsPageRoutingModule
  ],
  declarations: [MachineriesIrrigationSystemsPage]
})
export class MachineriesIrrigationSystemsPageModule {}
