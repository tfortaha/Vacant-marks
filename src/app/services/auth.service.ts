import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { Storage } from '@ionic/storage';
import { ToastController, Platform, LoadingController } from '@ionic/angular';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loading: HTMLIonLoadingElement;
  authState = new BehaviorSubject(false);
  constructor(
    public loadingController: LoadingController,
    private httpService: HttpService,
    private storage: Storage,
    private platform: Platform,
    private router: Router,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  ifLoggedIn() {
    this.storage.get('tokenData').then((response) => {
      if (response) {
        //this.authState.next(true);
      }
    });
  }
  async login(postData: any) {
    this.loading = await this.loadingController.create({
      //message: this.translate.instant('pleasewait'),
        cssClass: 'custom-loading',
        translucent: true,
        showBackdrop: true,
        spinner:'circular'
    });
    this.loading.present();
    this.httpService.getUserDetail('api/userlogin/VerifyLogin', postData).subscribe((res: any) => {
      if (res) {
        
        this.loading.dismiss();
        // // Storing the User data.
        // this.storage.set("tokenData", res).then((response) => {
        //   // let Time = format(new Date(), "hh:mm:ss");
        //   let Time = new Date();
        //   var TokenGenerateTime = new Date(Time).getTime();
          
        //   this.storage.set("TokenGenerateTime",TokenGenerateTime).then((response) => 
        //   {
        //       //console.log(TokenGenerateTime);
        //       this.loading.dismiss();
        //       this.storage.set("username",postData.username).then((response) => {
        //         this.router.navigate( ["dashboard"]);
        //         this.authState.next(true);
        //       })
        //   });
        // });
      } 
      else {
        this.loading.dismiss();
        // this.toastService.presentToast("incorrect password.");
      }
    },
      (error: any) => {
        this.loading.dismiss();
        if (error.error.error_description == "Provided username and password is incorrect") {
          // this.toastService.presentToast(this.translate.instant('LoginInvalid'));
        } else {
          // this.toastService.presentToast(error.error.error_description);
        }
      });
  }
  logout() {
    this.storage.remove('tokenData').then(res => {
      this.storage.clear()
      this.authState.next(false);
      this.router.navigate(['/login']);
    });
  }
  isAuthenticated() {
    return this.authState.value;
  }
  
}
