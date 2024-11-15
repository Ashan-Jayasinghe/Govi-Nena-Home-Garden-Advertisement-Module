import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarvestMarketPageRoutingModule } from './harvest-market-routing.module';

import { HarvestMarketPage } from './harvest-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarvestMarketPageRoutingModule
  ],
  declarations: [HarvestMarketPage]
})
export class HarvestMarketPageModule {}
