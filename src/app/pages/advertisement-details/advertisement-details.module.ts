import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import { IonicSlidesModule } from '@ionic/angular'; 
import { AdvertisementDetailsPageRoutingModule } from './advertisement-details-routing.module';

import { AdvertisementDetailsPage } from './advertisement-details.page';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   // IonicSlidesModule,
    AdvertisementDetailsPageRoutingModule
  ],
  declarations: [AdvertisementDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvertisementDetailsPageModule {}
