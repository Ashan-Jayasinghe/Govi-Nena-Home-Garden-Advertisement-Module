import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostAdHomePagePage } from './post-ad-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: PostAdHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostAdHomePagePageRoutingModule {}
