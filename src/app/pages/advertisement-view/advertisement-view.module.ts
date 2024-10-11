import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisementViewPageRoutingModule } from './advertisement-view-routing.module';

import { AdvertisementViewPage } from './advertisement-view.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertisementViewPageRoutingModule
  ],
  declarations: [AdvertisementViewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdvertisementViewPageModule {}
