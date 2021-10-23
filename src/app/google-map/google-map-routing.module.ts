import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapPage } from './google-map.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleMapPageRoutingModule {}
