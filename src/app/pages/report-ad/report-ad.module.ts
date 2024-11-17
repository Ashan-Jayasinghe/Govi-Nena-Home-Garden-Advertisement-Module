import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportAdPageRoutingModule } from './report-ad-routing.module';

import { ReportAdPage } from './report-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportAdPageRoutingModule
  ],
  declarations: [ReportAdPage]
})
export class ReportAdPageModule {}
