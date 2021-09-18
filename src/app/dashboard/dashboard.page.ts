import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { format } from 'date-fns';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { VenuesPage } from '../venues/venues.page';
import { DataService } from '../services/data.service';
import { VenuedetailsPage } from '../venuedetails/venuedetails.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  minDate = format(new Date(), "yyyy-MM-dd");
  maxDate = new Date().getFullYear()+2;

  postData = {
    destination:'',
    Date:'',
    destinationId:''
  }

  venues:any=[];
  loading: HTMLIonLoadingElement;
  alert:HTMLIonAlertElement;

  public isDestinationValid = true;
  public isDateValid = true;

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 200,
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true,
    effect: 'slide',
  };

  constructor(
    private router: Router,
    private httpService: HttpService,
    private storage: Storage,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private dataservice : DataService,
    private modalController: ModalController
  ) 
  { 
   
  }

  ngOnInit() {
   this.getVenue();
  }

  validateInputs(): boolean {
    this.isDestinationValid = true;
    this.isDateValid = true;
    if (!this.postData.destination || this.postData.destination.length === 0) {
      this.isDestinationValid = false;
    }
    if (!this.postData.Date || this.postData.Date.length === 0) {
      this.isDateValid = false;
    }
    if (this.postData.Date != "") {
      this.isDestinationValid = true;
      this.isDateValid = true;
    }
    return this.isDestinationValid && this.isDateValid;
  }


  async getVenue(){
    this.loading = await this.loadingController.create({
      //message: this.translate.instant('pleasewait'),
      cssClass: 'custom-loading',
      translucent: true,
      showBackdrop: true,
      spinner:'circular'
    });
    await this.loading.present();
    if(this.dataservice.DashboardData.length == 0){
      let params = new HttpParams();
      this.httpService.get("api/Venue/Venues",params).subscribe((res) => {
        this.venues = res;
        this.loading.dismiss();
        console.log(res);
      },err =>{
        this.alerrt();
        this.loading.dismiss();
      })
    }
    else{
      this.venues =  this.dataservice.DashboardData;
      this.loading.dismiss();
    }
  }

  async getDestination() {
    const modal = await this.modalController.create({
      component: VenuesPage
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        let SelectedVenue = data.data;
        let splitVenue = SelectedVenue.split("\\");
        console.log(splitVenue);
        this.postData.destinationId = splitVenue[0];
        this.postData.destination = splitVenue[1] ;
      }
    });
    return await modal.present();
  }

  search(){
    if (this.validateInputs()) {
      if(this.postData.Date != "" && this.postData.destinationId == ""){
        let SearchDate:any = [{"Date":format(new Date(this.postData.Date),"yyyy-MM-dd")}];
        let navigationExtras: NavigationExtras = {
              queryParams: {
                special: JSON.stringify(SearchDate)
              }
            };
            this.router.navigate(['/venuebydate'],navigationExtras);
      }
      else if( this.postData.Date != "" && this.postData.destinationId != "" ){
        let SearchByDateName:any = [{"Date":format(new Date(this.postData.Date),"yyyy-MM-dd"),"destinationId":this.postData.destinationId}];
        let navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(SearchByDateName)
          }
        };
        this.router.navigate(['/search-venueby-date-name'],navigationExtras);
      }
    }
  }

  // onDetailsClick(Id,Name){
  //   debugger;
  //   console.log("Details Click: ",Id,Name);
  //   let  VenueId = Id;
  //   console.log(VenueId);
  //     let navigationExtras: NavigationExtras = {
  //       queryParams: {
  //         special: JSON.stringify(VenueId)
  //       }
  //     };
  //     this.router.navigate(['/venuedetails'],navigationExtras);
  // }

  async onDetailsClick(Id,Name) {
    let  VenueId = Id;
    const modal = await this.modalController.create({
      component: VenuedetailsPage,
      componentProps:{VenueId}
    });
    return await modal.present();
  }
  
  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }
}
