import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  loading: HTMLIonLoadingElement;

  postData={
    FirstName:'',
    LastName:'',
    Address:'',
  Mobile1:'',
  UserName:'',
  EmailID:'',
  Password:'',
  CNIC:'',
  IsActive:'true',
  UserType: 1
  }
  public isfname = true;
  public islname = true;
  public isaddress = true;
  public ismobileno = true;
  public isusername = true;
  public isemail = true;
  public ispassword = true;
  public iscnic = true;

  constructor(
    private authService: AuthService,
    public loadingController: LoadingController,
    private httpService: HttpService,
    private storage: Storage,
    private modalCtrl: ModalController,
    private toastController : ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  validateInputs(): boolean {
    this.isfname = true;
    this.islname = true;
    this.isaddress = true;
    this.ismobileno = true;
    this.isusername = true;
    this.isemail = true;
    this.ispassword = true;
    this.iscnic = true;

    if (!this.postData.FirstName || this.postData.FirstName.length === 0) {
      this.isfname = false;
    }
    if (!this.postData.LastName || this.postData.LastName.length === 0) {
      this.islname = false;
    }
    if (!this.postData.Address || this.postData.Address.length === 0) {
      this.isaddress = false;
    }
    if (!this.postData.Mobile1 || this.postData.Mobile1.length === 0) {
      this.ismobileno = false;
    }
    if (!this.postData.UserName || this.postData.UserName.length === 0) {
      this.isusername = false;
    }
    if (!this.postData.EmailID || this.postData.EmailID.length === 0) {
      this.isemail = false;
    }
    if (!this.postData.Password || this.postData.Password.length === 0) {
      this.ispassword = false;
    }
    if (!this.postData.CNIC || this.postData.CNIC.length === 0) {
      this.iscnic = false;
    }

    return this.isfname && this.islname && this.isaddress && this.ismobileno && this.isusername && this.isemail &&
     this.ispassword && this.iscnic;
  }

  async signUp(){
    if(this.validateInputs()){
    this.loading = await this.loadingController.create({
      //message: this.translate.instant('pleasewait'),
        cssClass: 'custom-loading',
        translucent: true,
        showBackdrop: true,
        spinner:'circular'
    });
    this.loading.present();

   
      debugger;
      this.httpService.getUserDetail('api/Customer/Customer', this.postData).subscribe((res: any) => {
        if (res) {
          this.toast("Successfully! Now Login.");
          this.close();
          this.loading.dismiss();
          console.log(res);
        }
      },err=>{
        this.loading.dismiss();
          this.toast(err.error.Message);
          console.log(err);
      })
    }
  }

  async toast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
