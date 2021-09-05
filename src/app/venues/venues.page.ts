import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras, Data } from '@angular/router';
import { VenuedetailsPage } from '../venuedetails/venuedetails.page';
import { DataService } from '../services/data.service';

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
    private dataservice: DataService,
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

    if(this.dataservice.VenuePageData.length == 0){
      let params = new HttpParams();
      this.httpService.get("api/Venue/Venues",params).subscribe((res) => {
        this.data = this.allData = res;
        this.dataservice.VenuePageData = res;
        this.loading.dismiss();
        console.log(res);
      },err =>{
        this.alerrt();
        this.loading.dismiss();
      })
    }
    else{
      this.data = this.allData = this.dataservice.VenuePageData;
      this.loading.dismiss();
    }
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
  }

  async onDetailsClick(Id,Name){
    let  VenueId = Id;
    const modal = await this.modalController.create({
      component: VenuedetailsPage,
      componentProps:{VenueId}
    });
    return await modal.present();
  }

  close(){
    this.modalController.dismiss();
  }

  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }
}
