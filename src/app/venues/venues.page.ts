import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss']
})
export class VenuesPage implements OnInit {

  allData:any =[];
  data:any = [];
  loading: HTMLIonLoadingElement;
  alert:HTMLIonAlertElement;


  constructor(
    private router: Router,
    private httpService: HttpService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private storage: Storage,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.getVenue();
  }

  async getVenue(){

    this.loading = await this.loadingController.create({
      //message: this.translate.instant('pleasewait'),
      cssClass: 'custom-loading',
      translucent: true,
      showBackdrop: true,
      spinner:'bubbles'
    });
    await this.loading.present();

    let params = new HttpParams();
    this.httpService.get("api/Venue/Venues",params).subscribe((res) => {
      this.data = this.allData = res;
      this.loading.dismiss();
      console.log(res);
    },err =>{
      this.alerrt();
      this.loading.dismiss();
    })
  }
  
  search(event){
    this.data = this.allData;
    let text = event.target.value;
    this.data = this.data.filter((item) => {
      return item.Name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    })
   
  }
  clear(event){
    this.data = this.allData;
  }
  onItemClickFunc(Id,Name): void {

    this.modalController.dismiss(`${Id}\\${Name}`);
    // let selectedVenue:any = [{"Name":Name,"Id":Id}];
    // this.storage.set("selectedVenue",selectedVenue).then(response=>{
    //   console.log("selectedVenue --> ",response)
    //   this.router.navigate(['/tabs/home']);
    // })
  }

  onDetailsClick(Id,Name){
    console.log("Details Click: ",Id,Name);
    let  VenueId = Id;
    console.log(VenueId);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(VenueId)
        }
      };
      this.router.navigate(['/venuedetails'],navigationExtras);
  }


  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }
}
