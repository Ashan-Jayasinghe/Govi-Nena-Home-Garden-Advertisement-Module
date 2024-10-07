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
  },
  {
    path: 'fertilizers-organic',
    loadChildren: () => import('./pages/fertilizers-organic/fertilizers-organic.module').then( m => m.FertilizersOrganicPageModule)
  },
  {
    path: 'fertilizers-inorganic',
    loadChildren: () => import('./pages/fertilizers-inorganic/fertilizers-inorganic.module').then( m => m.FertilizersInorganicPageModule)
  },
  {
    path: 'planting-materials',
    loadChildren: () => import('./pages/planting-materials/planting-materials.module').then( m => m.PlantingMaterialsPageModule)
  },
  {
    path: 'planting-materials-seeds',
    loadChildren: () => import('./pages/planting-materials-seeds/planting-materials-seeds.module').then( m => m.PlantingMaterialsSeedsPageModule)
  },
  {
    path: 'planting-materials-seedlings',
    loadChildren: () => import('./pages/planting-materials-seedlings/planting-materials-seedlings.module').then( m => m.PlantingMaterialsSeedlingsPageModule)
  },
  {
    path: 'agro-chemicals',
    loadChildren: () => import('./pages/agro-chemicals/agro-chemicals.module').then( m => m.AgroChemicalsPageModule)
  },
  {
    path: 'agro-chemicals-pesticides',
    loadChildren: () => import('./pages/agro-chemicals-pesticides/agro-chemicals-pesticides.module').then( m => m.AgroChemicalsPesticidesPageModule)
  },
  {
    path: 'agro-chemicalss-plant-growth-regulators',
    loadChildren: () => import('./pages/agro-chemicalss-plant-growth-regulators/agro-chemicalss-plant-growth-regulators.module').then( m => m.AgroChemicalssPlantGrowthRegulatorsPageModule)
  },

  {
    path: 'machineries-and-equipment',
    loadChildren: () => import('./pages/machineries-and-equipment/machineries-and-equipment.module').then( m => m.MachineriesAndEquipmentPageModule)
  },
  {
    path: 'machineries-tractors',
    loadChildren: () => import('./pages/machineries-tractors/machineries-tractors.module').then( m => m.MachineriesTractorsPageModule)
  },
  {
    path: 'machineries-tillage',
    loadChildren: () => import('./pages/machineries-tillage/machineries-tillage.module').then( m => m.MachineriesTillagePageModule)
  },
  {
    path: 'machineries-irrigation-systems',
    loadChildren: () => import('./pages/machineries-irrigation-systems/machineries-irrigation-systems.module').then( m => m.MachineriesIrrigationSystemsPageModule)
  },
  {
    path: 'machineries-sprayers',
    loadChildren: () => import('./pages/machineries-sprayers/machineries-sprayers.module').then( m => m.MachineriesSprayersPageModule)
  },
  {
    path: 'machineries-dryers',
    loadChildren: () => import('./pages/machineries-dryers/machineries-dryers.module').then( m => m.MachineriesDryersPageModule)
  },
  {
    path: 'machineries-harvesting-machines',
    loadChildren: () => import('./pages/machineries-harvesting-machines/machineries-harvesting-machines.module').then( m => m.MachineriesHarvestingMachinesPageModule)
  },
  {
    path: 'machineries-planting-machines',
    loadChildren: () => import('./pages/machineries-planting-machines/machineries-planting-machines.module').then( m => m.MachineriesPlantingMachinesPageModule)
  },
  {
    path: 'machineries-other',
    loadChildren: () => import('./pages/machineries-other/machineries-other.module').then( m => m.MachineriesOtherPageModule)
  },
  {
    path: 'planting-materials-tubers',
    loadChildren: () => import('./pages/planting-materials-tubers/planting-materials-tubers.module').then( m => m.PlantingMaterialsTubersPageModule)
  },  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },



 







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
