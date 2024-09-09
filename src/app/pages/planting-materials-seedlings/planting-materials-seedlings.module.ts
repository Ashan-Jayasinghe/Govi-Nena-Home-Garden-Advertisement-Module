import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantingMaterialsSeedlingsPageRoutingModule } from './planting-materials-seedlings-routing.module';

import { PlantingMaterialsSeedlingsPage } from './planting-materials-seedlings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantingMaterialsSeedlingsPageRoutingModule
  ],
  declarations: [PlantingMaterialsSeedlingsPage]
})
export class PlantingMaterialsSeedlingsPageModule {}
