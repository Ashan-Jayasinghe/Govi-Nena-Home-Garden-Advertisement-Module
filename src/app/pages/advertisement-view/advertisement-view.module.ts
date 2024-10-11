import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisementViewPageRoutingModule } from './advertisement-view-routing.module';

import { AdvertisementViewPage } from './advertisement-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertisementViewPageRoutingModule
  ],
  declarations: [AdvertisementViewPage]
})
export class AdvertisementViewPageModule {}
