import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // },
  { path: '', loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule) },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // },
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
  {
    path: 'search-venueby-date-name',
    loadChildren: () => import('./search-venueby-date-name/search-venueby-date-name.module').then( m => m.SearchVenuebyDateNamePageModule)
  },
  {
    path: 'venuedetails',
    loadChildren: () => import('./venuedetails/venuedetails.module').then( m => m.VenuedetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'bookedvenues',
    loadChildren: () => import('./bookedvenues/bookedvenues.module').then( m => m.BookedvenuesPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'google-map',
    loadChildren: () => import('./google-map/google-map.module').then( m => m.GoogleMapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
