import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavParams} from '@ionic/angular';
import { isSameDay } from 'date-fns';

@Component({
  selector: 'app-venuedetails',
  templateUrl: './venuedetails.page.html',
  styleUrls: ['./venuedetails.page.scss'],
})
export class VenuedetailsPage implements OnInit {

  allData:any =[];
  data:any = [];
  loading: HTMLIonLoadingElement;
  alert:HTMLIonAlertElement;

  postData={
    VenueId:''
  }
  count = 0;
  imgUrl="";
  testimageArray:any=[];

  PbarHide=0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private storage: Storage,
    public navParams : NavParams,
    public modalController: ModalController
  ) 
  {
    console.log(this.navParams.get('VenueId'));
   }
   
    slideOpts = {
      initialSlide: 0,
      speed: 1000,
      slidesPerView: 3.1,
      spaceBetween: 10,
      loop: true,
      effect: 'slide',
    };

  ngOnInit() {
    if(this.navParams.get('VenueId') != ""){
      if(this.count==0){
        this.postData.VenueId=this.navParams.get('VenueId');
        this.count+=1;
      }
      this.getVenue();
    }
    this.getVenue();
  }

  async getVenue(){
    this.loading = await this.loadingController.create({
      //message: this.translate.instant('pleasewait'),
      cssClass: 'custom-loading',
      translucent: true,
      showBackdrop: true,
      spinner:'circular'
    });

    let params = new HttpParams();
    params = params.set("Id",this.postData.VenueId)
    this.httpService.get("api/venue/venues",params).subscribe((res) => {
      this.data = this.allData = res;
      console.log(res);
      let images  = this.data.images;
      for(let i =0; i<images.length; i++){
        images[i].Image='https://www.vacantmarks.com/VenueImages/'+images[i].VenueId+"/"+images[i].Image;
      }
      this.data.images = images;
      //console.log(images);
      this.PbarHide=1;
    },err =>{
      this.alerrt();
    })
  }

  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }

  close(){
    this.modalController.dismiss();
  }

}
