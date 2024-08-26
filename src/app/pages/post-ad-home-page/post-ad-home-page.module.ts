import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostAdHomePagePageRoutingModule } from './post-ad-home-page-routing.module';

import { PostAdHomePagePage } from './post-ad-home-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostAdHomePagePageRoutingModule
  ],
  declarations: [PostAdHomePagePage]
})
export class PostAdHomePagePageModule {}
