import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisementConfirmationPageRoutingModule } from './advertisement-confirmation-routing.module';

import { AdvertisementConfirmationPage } from './advertisement-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertisementConfirmationPageRoutingModule
  ],
  declarations: [AdvertisementConfirmationPage]
})
export class AdvertisementConfirmationPageModule {}
