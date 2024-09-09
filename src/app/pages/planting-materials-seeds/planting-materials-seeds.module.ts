import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantingMaterialsSeedsPageRoutingModule } from './planting-materials-seeds-routing.module';

import { PlantingMaterialsSeedsPage } from './planting-materials-seeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantingMaterialsSeedsPageRoutingModule
  ],
  declarations: [PlantingMaterialsSeedsPage]
})
export class PlantingMaterialsSeedsPageModule {}
