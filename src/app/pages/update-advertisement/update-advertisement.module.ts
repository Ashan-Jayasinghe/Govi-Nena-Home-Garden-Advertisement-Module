import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAdvertisementPageRoutingModule } from './update-advertisement-routing.module';

import { UpdateAdvertisementPage } from './update-advertisement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAdvertisementPageRoutingModule
  ],
  declarations: [UpdateAdvertisementPage]
})
export class UpdateAdvertisementPageModule {}
