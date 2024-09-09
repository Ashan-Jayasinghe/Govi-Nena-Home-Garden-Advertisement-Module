import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantingMaterialsTubersPageRoutingModule } from './planting-materials-tubers-routing.module';

import { PlantingMaterialsTubersPage } from './planting-materials-tubers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantingMaterialsTubersPageRoutingModule
  ],
  declarations: [PlantingMaterialsTubersPage]
})
export class PlantingMaterialsTubersPageModule {}
