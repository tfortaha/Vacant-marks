import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenuebydatePage } from './venuebydate.page';

const routes: Routes = [
  {
    path: '',
    component: VenuebydatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenuebydatePageRoutingModule {}
