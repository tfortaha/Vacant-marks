import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers:[ModalController]
})
export class ProfilePage implements OnInit {

  IsLogin: any = [];
  data:any;

  constructor(
    public storage: Storage,
    private modalCtrl: ModalController,

  ) { }

  async ngOnInit() {
    debugger;
    this.storage.get("userdetails").then((res) =>{
      this.IsLogin = res;
      this.data = res.result;
      console.log(this.data);
    })
  }

  async login() {
    debugger;
    let modal = await this.modalCtrl.create({
      component: LoginPage,
      cssClass: 'login-modal'
    });
    modal.onWillDismiss().then(() => {
      
    });
    modal.present();
  }

}
