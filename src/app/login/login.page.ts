import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { RegistrationPage } from '../registration/registration.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[ModalController]
})
export class LoginPage implements OnInit {

  postData = {
    Password: '',
    EmailID:''
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
    private toastController : ToastController,
    private router: Router
  ) {
    
  }
  ionViewWillEnter() {
    this.clear();
  }

  ngOnInit() {}

  validateInputs(): boolean {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    if (!this.postData.EmailID || this.postData.EmailID.length === 0) {
      this.isUsernameValid = false;
    }
    if (!this.postData.Password || this.postData.Password.length === 0) {
      this.isPasswordValid = false;
    }
    return this.isPasswordValid && this.isUsernameValid;
  }
  
  async loginAction() {
    this.loading = await this.loadingController.create({
        cssClass: 'custom-loading',
        translucent: true,
        showBackdrop: true,
        spinner:'circular'
    });
    this.loading.present();

    if (this.validateInputs()) {
      this.httpService.getUserDetail('api/Customer/VerifyCustomer', this.postData).subscribe((res: any) => {
        if (res.msg == "succuss") {
          console.log(res);
          this.storage.set("userdetails",res).then(response=>{
            console.log(response)
            this.loading.dismiss();
            window.location.reload();
            let result = res.result;
            this.modalCtrl.dismiss(`${result.EmailID}\\ ${result.FirstName}\\ ${result.LastName}\\ ${result.UserName} \\ ${result.Mobile1} \\ ${result.CNIC} \\ ${result.Address}`);
          })
        }
        else{
          this.toast("Inccorrect Email or Password.");
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

  async toast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async SignUp(){
    let modal = await this.modalCtrl.create({
      component: RegistrationPage,
      cssClass: 'registration-modal'
    });
    modal.onWillDismiss().then((data) => {
      
      console.log(data);
    });
    modal.present();
  }

  clear(){
    this.postData.EmailID="";
    this.postData.Password="";
  }

  onEnter(){
    this.loginAction();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
