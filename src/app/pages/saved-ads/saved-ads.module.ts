import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedAdsPageRoutingModule } from './saved-ads-routing.module';

import { SavedAdsPage } from './saved-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedAdsPageRoutingModule
  ],
  declarations: [SavedAdsPage]
})
export class SavedAdsPageModule {}
