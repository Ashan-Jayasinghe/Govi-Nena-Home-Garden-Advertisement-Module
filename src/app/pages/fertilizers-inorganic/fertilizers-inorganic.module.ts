import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizersInorganicPageRoutingModule } from './fertilizers-inorganic-routing.module';

import { FertilizersInorganicPage } from './fertilizers-inorganic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizersInorganicPageRoutingModule
  ],
  declarations: [FertilizersInorganicPage]
})
export class FertilizersInorganicPageModule {}
