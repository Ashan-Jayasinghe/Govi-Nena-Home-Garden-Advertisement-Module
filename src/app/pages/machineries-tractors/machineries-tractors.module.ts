import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesTractorsPageRoutingModule } from './machineries-tractors-routing.module';

import { MachineriesTractorsPage } from './machineries-tractors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesTractorsPageRoutingModule
  ],
  declarations: [MachineriesTractorsPage]
})
export class MachineriesTractorsPageModule {}
