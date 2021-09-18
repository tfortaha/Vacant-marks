import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataService } from '../app/services/data.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public show:Boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private ds :DataService
  ) 
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#2f3b69');
      this.splashScreen.hide();
      debugger;
      this.storage.get("userdetails").then((res)=>{
        if(res != null){
          this.show = true;
          this.ds.userdetails = res;
        }
      })
    });
  }

  signout(){
    this.storage.clear();
    window.location.reload();
  }
}
