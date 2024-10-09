import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdvertisementsPageRoutingModule } from './my-advertisements-routing.module';

import { MyAdvertisementsPage } from './my-advertisements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAdvertisementsPageRoutingModule
  ],
  declarations: [MyAdvertisementsPage]
})
export class MyAdvertisementsPageModule {}
