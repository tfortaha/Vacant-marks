import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedvenuesPageRoutingModule } from './bookedvenues-routing.module';

import { BookedvenuesPage } from './bookedvenues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedvenuesPageRoutingModule
  ],
  declarations: [BookedvenuesPage]
})
export class BookedvenuesPageModule {}
