import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisementPagePageRoutingModule } from './advertisement-page-routing.module';

import { AdvertisementPagePage } from './advertisement-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertisementPagePageRoutingModule
  ],
  declarations: [AdvertisementPagePage]
})
export class AdvertisementPagePageModule {}
