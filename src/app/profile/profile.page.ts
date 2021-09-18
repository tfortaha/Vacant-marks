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
    this.storage.get("userdetails").then((res) =>{
      if(res != null){
        this.IsLogin = res;
        this.data = res.result;
        console.log(this.data);
      }
    })
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
        this.data = Sdata;
        console.log(data);
      }
    });
    modal.present();
  }

}
