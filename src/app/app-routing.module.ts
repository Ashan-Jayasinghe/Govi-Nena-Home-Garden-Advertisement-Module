import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'advertisement-page',
    loadChildren: () => import('./pages/advertisement-page/advertisement-page.module').then( m => m.AdvertisementPagePageModule)
  },
  {
    path: 'post-ad-home-page',
    loadChildren: () => import('./pages/post-ad-home-page/post-ad-home-page.module').then( m => m.PostAdHomePagePageModule)
  },
  {
    path: 'advertisement-details',
    loadChildren: () => import('./pages/advertisement-details/advertisement-details.module').then( m => m.AdvertisementDetailsPageModule)
  },
  {
    path: 'fertilizers',
    loadChildren: () => import('./pages/fertilizers/fertilizers.module').then( m => m.FertilizersPageModule)
  },  {
    path: 'fertilizers-organic',
    loadChildren: () => import('./pages/fertilizers-organic/fertilizers-organic.module').then( m => m.FertilizersOrganicPageModule)
  },
  {
    path: 'fertilizers-inorganic',
    loadChildren: () => import('./pages/fertilizers-inorganic/fertilizers-inorganic.module').then( m => m.FertilizersInorganicPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
