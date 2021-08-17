import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenuebydatePageRoutingModule } from './venuebydate-routing.module';

import { VenuebydatePage } from './venuebydate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenuebydatePageRoutingModule
  ],
  declarations: [VenuebydatePage]
})
export class VenuebydatePageModule {}
