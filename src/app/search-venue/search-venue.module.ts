import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchVenuePageRoutingModule } from './search-venue-routing.module';

import { SearchVenuePage } from './search-venue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchVenuePageRoutingModule
  ],
  declarations: [SearchVenuePage]
})
export class SearchVenuePageModule {}
