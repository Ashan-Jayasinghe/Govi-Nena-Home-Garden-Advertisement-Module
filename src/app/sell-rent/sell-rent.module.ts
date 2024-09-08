import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellRentPageRoutingModule } from './sell-rent-routing.module';

import { SellRentPage } from './sell-rent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellRentPageRoutingModule
  ],
  declarations: [SellRentPage]
})
export class SellRentPageModule {}
