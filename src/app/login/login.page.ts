import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[ModalController]
})
export class LoginPage implements OnInit {

  postData = {
    username: '',
    password: ''
  };
  loading: HTMLIonLoadingElement;
  public isUsernameValid = true;
  public isPasswordValid = true;

  constructor(
    private authService: AuthService,
    public loadingController: LoadingController,
    private httpService: HttpService,
    private storage: Storage,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    
  }
  ionViewWillEnter() {
    this.clear();
    
  }
  ngOnInit() {
    
  }

  validateInputs(): boolean {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    if (!this.postData.username || this.postData.username.length === 0) {
      this.isUsernameValid = false;
    }
    if (!this.postData.password || this.postData.password.length === 0) {
      this.isPasswordValid = false;
    }
    return this.isPasswordValid && this.isUsernameValid;
  }
  
  async loginAction() {
    this.loading = await this.loadingController.create({
      //message: this.translate.instant('pleasewait'),
        cssClass: 'custom-loading',
        translucent: true,
        showBackdrop: true,
        spinner:'bubbles'
    });
    this.loading.present();

    if (this.validateInputs()) {
      // this.authService.login(this.postData);
      this.httpService.getUserDetail('api/userlogin/VerifyLogin', this.postData).subscribe((res: any) => {
        if (res) {
          console.log(res);
          this.storage.set("userdetails",res).then(response=>{
            console.log(response)
            this.loading.dismiss();
            let result = res.result;
            this.modalCtrl.dismiss(`${result.EmailID}\\ ${result.FirstName}\\ ${result.LastName}\\ ${result.UserName}`);
          })
        }
        else{
          this.loading.dismiss();
        }
      },err =>{
          this.loading.dismiss();
        })
    } 
    else {
      this.loading.dismiss();
    }
  }

  clear(){
    this.postData.username="";
    this.postData.password="";
  }

  onEnter(){
    this.loginAction();
  }

  // close() {
  //   this.modalCtrl.dismiss();
  // }

}
