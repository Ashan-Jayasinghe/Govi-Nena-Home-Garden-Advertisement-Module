import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantingMaterialsPageRoutingModule } from './planting-materials-routing.module';

import { PlantingMaterialsPage } from './planting-materials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantingMaterialsPageRoutingModule
  ],
  declarations: [PlantingMaterialsPage]
})
export class PlantingMaterialsPageModule {}
