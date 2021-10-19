import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { VenuedetailsPage } from '../venuedetails/venuedetails.page';
import { BookingPage } from '../booking/booking.page';

@Component({
  selector: 'app-venuebydate',
  templateUrl: './venuebydate.page.html',
  styleUrls: ['./venuebydate.page.scss'],
})
export class VenuebydatePage implements OnInit {

  allData:any =[];
  data:any = [];
  slots:any=[];
  availableSlots:any=[];

  loading: HTMLIonLoadingElement;
  alert:HTMLIonAlertElement;

  postData={
    Date:''
  }
  count = 0;
  imgUrl="";
  skeletonList:any=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private storage: Storage,
    private toastcontroller:ToastController,
    private modalController: ModalController
  ) 
  {
    this.skeletonList.length = 4;
  }

  async ngOnInit() {
    this.route.queryParams.subscribe(paramse => {
      if (paramse && paramse.special) {
        this.data = JSON.parse(paramse.special);
        if(this.count==0)
        {
          this.postData.Date=this.data[0].Date;
          this.count+=1;
        }
        // ;
      }
    });
    this.getVenue();
  }

  async getVenue(){

    // this.loading = await this.loadingController.create({
    //   //message: this.translate.instant('pleasewait'),
    //   cssClass: 'custom-loading',
    //   translucent: true,
    //   showBackdrop: true,
    //   spinner:'circular'
    // });
    // await this.loading.present();

    let params = new HttpParams();
    params = params.set("Date",this.postData.Date)
    this.httpService.get("api/Venue/Venues",params).subscribe((res) => {

      this.data = this.allData = res;
      for(let i =0; i<this.allData.length; i++){
        ;
       this.data[i].EncodeLogo='https://vacantmarks.com/VenueLogoFolder/'+this.data[i].EncodeLogo;
      }
     // this.imageLoop();
     // ;
      console.log(res);
    },err =>{
      this.alerrt();
      ;
    })
  }

  // imageLoop(){
  //   let j=2;
  //   for(let i=0; i<this.data.length; i++){
  //     this.imgUrl = "\\assets\\hotels\\"+j+".jpg";
  //     this.data[i].img = this.imgUrl;
  //     j++;
  //   }
  // }
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
  async onItemClickFunc(Id,Name) {
    let  VenueId = Id;
    const modal = await this.modalController.create({
      component: VenuedetailsPage,
      componentProps:{VenueId}
    });
    return await modal.present();
  }

  onDetailsClick(Id,Name){
    console.log("Details Click: ",Id,Name);
  }

  async BookNowClick(Id,Date){
    this.loading = await this.loadingController.create({
      //message: this.translate.instant('pleasewait'),
      cssClass: 'custom-loading',
      translucent: true,
      showBackdrop: true,
      spinner:'circular'
    });
   // await this.loading.present();

    this.storage.get("userdetails").then((response)=>{
      if(response != null){
        let params = new HttpParams();
        this.availableSlots=[];
        params = params.set("Date",Date);
        params = params.set("VenueId",Id);
        this.httpService.get("api/Venue/Venues",params).subscribe((res) => {
          console.log(res);
          this.slots = res;
          let i =0;
          ;
          for(let item of this.slots){
            for(let slot of item.slots){
              if(slot.Status == "Available"){
                this.availableSlots.push(slot);
                // this.availableSlots[i] = slot;
                // i++;
              }
            }
            }
            this.Booking(Id,Date);
          console.log(this.availableSlots);
          ;
        },err=>{
          ;
        })
      }
      else{
        this.toast("Please Sign In for Booking!");
        ;
      }
    })
    // console.log("Book Now Click: ",Id);
  }

  async Booking(Id,Date){
    ;
    let list:any = [];
    list.push({"Id":Id, "Date":Date, "Slots":this.availableSlots})
    let modal = await this.modalController.create({
      component: BookingPage,
      cssClass: 'booking-modal',
      componentProps:[list]
    });
    
    modal.present();
  }

  async toast(msg){
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }

}
