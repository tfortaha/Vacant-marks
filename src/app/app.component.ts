import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[Storage]
})
export class AppComponent {
  constructor(
    private storage: Storage
  ) 
  {
    this.storage.create();
    this.storage.clear();
  }
}