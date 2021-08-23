import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenuedetailsPageRoutingModule } from './venuedetails-routing.module';

import { VenuedetailsPage } from './venuedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenuedetailsPageRoutingModule
  ],
  declarations: [VenuedetailsPage]
})
export class VenuedetailsPageModule {}
