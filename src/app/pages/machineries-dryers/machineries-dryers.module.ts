import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesDryersPageRoutingModule } from './machineries-dryers-routing.module';

import { MachineriesDryersPage } from './machineries-dryers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesDryersPageRoutingModule
  ],
  declarations: [MachineriesDryersPage]
})
export class MachineriesDryersPageModule {}
