import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchVenuebyDateNamePageRoutingModule } from './search-venueby-date-name-routing.module';

import { SearchVenuebyDateNamePage } from './search-venueby-date-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchVenuebyDateNamePageRoutingModule
  ],
  declarations: [SearchVenuebyDateNamePage]
})
export class SearchVenuebyDateNamePageModule {}
