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

  skeletonStop = 0;
  venues:any=[];
  loading: HTMLIonLoadingElement;
  alert:HTMLIonAlertElement;
  logoutbtn = false;

  public isDestinationValid = true;
  public isDateValid = true;

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 5,
    //loop: true,
    effect: 'slide',
  };

  customPickerOption = {
    buttons: [{
    text: 'Clear',
       handler: () => this.postData.Date = ''
    },
  {
    text:'Done',
    handler:(e) => this.postData.Date = (''+e.year.value+'/'+e.month.value+'/'+e.day.value+'/')
  }
]
  }

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
    this.storage.get("userdetails").then((res)=>{
      if(res != null){
        this.logoutbtn = true;
      }
    })
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
   // await this.loading.present();
    if(this.dataservice.DashboardData.length == 0){
      let params = new HttpParams();
      this.httpService.get("api/Venue/Venues",params).subscribe((res) => {
        debugger;
        this.venues = res;
        let a = false;
        for(let i =0; i<this.venues.length; i++){
          ;
          this.venues[i].EncodeLogo='https://vacantmarks.com/VenueLogoFolder/'+this.venues[i].EncodeLogo;
        }
        ;
        console.log(res);
      },err =>{
        
        this.skeletonStop = 1;
        this.alerrt();
        ;
      })
    }
    else{
      this.venues =  this.dataservice.DashboardData;
      ;
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

  async onDetailsClick(Id,Name) {
    debugger;
    let  VenueId = Id;
    const modal = await this.modalController.create({
      component: VenuedetailsPage,
      componentProps:{VenueId}
    });
    return await modal.present();
  }

  clearVenue(){
    debugger;
    this.postData.destination = '';
    this.postData.destinationId = '';
  }
   
  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }

  onLogoutClick(){
    this.storage.clear();
    window.location.reload();
  }
}
