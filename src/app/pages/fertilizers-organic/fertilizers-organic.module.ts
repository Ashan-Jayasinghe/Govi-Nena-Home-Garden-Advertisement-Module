import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizersOrganicPageRoutingModule } from './fertilizers-organic-routing.module';

import { FertilizersOrganicPage } from './fertilizers-organic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizersOrganicPageRoutingModule
  ],
  declarations: [FertilizersOrganicPage]
})
export class FertilizersOrganicPageModule {}
