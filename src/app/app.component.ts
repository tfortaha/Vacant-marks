import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataService } from '../app/services/data.service';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { LoginPage } from '../app/login/login.page';
import { Router } from '@angular/router';

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
    private ds :DataService,
    private httpService: HttpService,
    private toastContr : ToastController,
    private modalCtrl: ModalController,
    private router: Router,
  ) 
  {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#2f3b69');
     // this.splashScreen.show();
       // ;
        this.statusBar.hide();

      //;
      this.storage.get("userdetails").then((res)=>{
        if(res != null){
          this.show = true;
          this.ds.userdetails = res;
        }
        else{
          //this.login();
          this.router.navigateByUrl("")
        }
      })
    });
  }

  async login() {
    let modal = await this.modalCtrl.create({
      component: LoginPage,
      cssClass: 'login-modal'
    });
    modal.onWillDismiss().then((data) => {
      let SelectedVenue = data.data;
      if(data.data != null){
        let splitVenue = SelectedVenue.split("\\");
        let Sdata = {"EmailID":splitVenue[0], "FirstName":splitVenue[1], "LastName":splitVenue[2],"UserName":splitVenue[3], "Mobile1":splitVenue[4], "CNIC":splitVenue[5], "Address":splitVenue[6],}
        window.location.reload();
        // this.data = Sdata;
        // console.log(data);
      }
    });
    modal.present();
  }

  async toast(msg){
    const toast = await this.toastContr.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  signout(){
    this.storage.clear();
    window.location.reload();
  }
}
