import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesTillagePageRoutingModule } from './machineries-tillage-routing.module';

import { MachineriesTillagePage } from './machineries-tillage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesTillagePageRoutingModule
  ],
  declarations: [MachineriesTillagePage]
})
export class MachineriesTillagePageModule {}
