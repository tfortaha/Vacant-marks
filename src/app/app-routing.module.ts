import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'venues',
    loadChildren: () => import('./venues/venues.module').then( m => m.VenuesPageModule)
  },
  {
    path: 'search-venue',
    loadChildren: () => import('./search-venue/search-venue.module').then( m => m.SearchVenuePageModule)
  },
  {
    path: 'venuebydate',
    loadChildren: () => import('./venuebydate/venuebydate.module').then( m => m.VenuebydatePageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
