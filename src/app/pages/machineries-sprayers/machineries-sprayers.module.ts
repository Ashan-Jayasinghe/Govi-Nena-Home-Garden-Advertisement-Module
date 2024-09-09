import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesSprayersPageRoutingModule } from './machineries-sprayers-routing.module';

import { MachineriesSprayersPage } from './machineries-sprayers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesSprayersPageRoutingModule
  ],
  declarations: [MachineriesSprayersPage]
})
export class MachineriesSprayersPageModule {}
