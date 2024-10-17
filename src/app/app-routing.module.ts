import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Adjust the path if necessary
import { LoginGuard } from './guards/login.guard';
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
    loadChildren: () => import('./pages/advertisement-page/advertisement-page.module').then( m => m.AdvertisementPagePageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'post-ad-home-page',
    loadChildren: () => import('./pages/post-ad-home-page/post-ad-home-page.module').then( m => m.PostAdHomePagePageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  // {
  //   path: 'advertisement-details',
  //   loadChildren: () => import('./pages/advertisement-details/advertisement-details.module').then( m => m.AdvertisementDetailsPageModule)
  // },
  {
    path: 'fertilizers',
    loadChildren: () => import('./pages/fertilizers/fertilizers.module').then( m => m.FertilizersPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'fertilizers-organic',
    loadChildren: () => import('./pages/fertilizers-organic/fertilizers-organic.module').then( m => m.FertilizersOrganicPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'fertilizers-inorganic',
    loadChildren: () => import('./pages/fertilizers-inorganic/fertilizers-inorganic.module').then( m => m.FertilizersInorganicPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'planting-materials',
    loadChildren: () => import('./pages/planting-materials/planting-materials.module').then( m => m.PlantingMaterialsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'planting-materials-seeds',
    loadChildren: () => import('./pages/planting-materials-seeds/planting-materials-seeds.module').then( m => m.PlantingMaterialsSeedsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'planting-materials-seedlings',
    loadChildren: () => import('./pages/planting-materials-seedlings/planting-materials-seedlings.module').then( m => m.PlantingMaterialsSeedlingsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'agro-chemicals',
    loadChildren: () => import('./pages/agro-chemicals/agro-chemicals.module').then( m => m.AgroChemicalsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'agro-chemicals-pesticides',
    loadChildren: () => import('./pages/agro-chemicals-pesticides/agro-chemicals-pesticides.module').then( m => m.AgroChemicalsPesticidesPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'agro-chemicalss-plant-growth-regulators',
    loadChildren: () => import('./pages/agro-chemicalss-plant-growth-regulators/agro-chemicalss-plant-growth-regulators.module').then( m => m.AgroChemicalssPlantGrowthRegulatorsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },

  {
    path: 'machineries-and-equipment',
    loadChildren: () => import('./pages/machineries-and-equipment/machineries-and-equipment.module').then( m => m.MachineriesAndEquipmentPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-tractors',
    loadChildren: () => import('./pages/machineries-tractors/machineries-tractors.module').then( m => m.MachineriesTractorsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-tillage',
    loadChildren: () => import('./pages/machineries-tillage/machineries-tillage.module').then( m => m.MachineriesTillagePageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-irrigation-systems',
    loadChildren: () => import('./pages/machineries-irrigation-systems/machineries-irrigation-systems.module').then( m => m.MachineriesIrrigationSystemsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-sprayers',
    loadChildren: () => import('./pages/machineries-sprayers/machineries-sprayers.module').then( m => m.MachineriesSprayersPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-dryers',
    loadChildren: () => import('./pages/machineries-dryers/machineries-dryers.module').then( m => m.MachineriesDryersPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-harvesting-machines',
    loadChildren: () => import('./pages/machineries-harvesting-machines/machineries-harvesting-machines.module').then( m => m.MachineriesHarvestingMachinesPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-planting-machines',
    loadChildren: () => import('./pages/machineries-planting-machines/machineries-planting-machines.module').then( m => m.MachineriesPlantingMachinesPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'machineries-other',
    loadChildren: () => import('./pages/machineries-other/machineries-other.module').then( m => m.MachineriesOtherPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'planting-materials-tubers',
    loadChildren: () => import('./pages/planting-materials-tubers/planting-materials-tubers.module').then( m => m.PlantingMaterialsTubersPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
    canActivate: [LoginGuard] // Guard that allows only non-logged-in users

  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard] // Guard that allows only non-logged-in users

  },
  {
    path: 'advertisements',
    loadChildren: () => import('./pages/advertisements/advertisements.module').then( m => m.AdvertisementsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'my-advertisements',
    loadChildren: () => import('./pages/my-advertisements/my-advertisements.module').then( m => m.MyAdvertisementsPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },
  {
    path: 'advertisement-view/:id',
    loadChildren: () => import('./pages/advertisement-view/advertisement-view.module').then( m => m.AdvertisementViewPageModule),
    canActivate: [AuthGuard] // Add the guard here to protect the route

  },  {
    path: 'saved-ads',
    loadChildren: () => import('./pages/saved-ads/saved-ads.module').then( m => m.SavedAdsPageModule)
  },
  {
    path: 'advertisement-confirmation',
    loadChildren: () => import('./pages/advertisement-confirmation/advertisement-confirmation.module').then( m => m.AdvertisementConfirmationPageModule)
  },
  {
    path: 'vegetables-fruits',
    loadChildren: () => import('./vegetables-fruits/vegetables-fruits.module').then( m => m.VegetablesFruitsPageModule)
  },
  {
    path: 'vegetables-fruits-vegetables',
    loadChildren: () => import('./vegetables-fruits-vegetables/vegetables-fruits-vegetables.module').then( m => m.VegetablesFruitsVegetablesPageModule)
  },
  {
    path: 'vegetables-fruits-fruits',
    loadChildren: () => import('./vegetables-fruits-fruits/vegetables-fruits-fruits.module').then( m => m.VegetablesFruitsFruitsPageModule)
  },






 







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
