import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchVenuePage } from './search-venue.page';

const routes: Routes = [
  {
    path: '',
    component: SearchVenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchVenuePageRoutingModule {}
