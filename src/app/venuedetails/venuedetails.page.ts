import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavParams} from '@ionic/angular';

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
    debugger;
    console.log(this.navParams.get('VenueId'));

   }

    // Slider Options
    slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 3.1,
      spaceBetween: 10,
      loop: true,
      effect: 'slide',
    };

  ngOnInit() {
    debugger;
    if(this.navParams.get('VenueId') != ""){
          if(this.count==0)
        {
          this.postData.VenueId=this.navParams.get('VenueId');
          this.count+=1;
        }
        this.getVenue();
        this.imageLoop();
    }

    this.getVenue();
    this.imageLoop();

    // this.route.queryParams.subscribe(paramse => {
    //   if (paramse && paramse.special) {
    //     this.data = JSON.parse(paramse.special);
    //     if(this.count==0)
    //     {
    //       this.postData.VenueId=this.data;
    //       this.count+=1;
    //     }
    //     this.getVenue();
    //     this.imageLoop();
    //   }
    // });
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

    let params = new HttpParams();
    params = params.set("Id",this.postData.VenueId)
    this.httpService.get("api/venue/venues",params).subscribe((res) => {
      this.data = this.allData = res;
      // this.imageLoop();
      this.PbarHide=1;
     // this.loading.dismiss();
      console.log(res);
    },err =>{
      this.alerrt();
     // this.loading.dismiss();
    })
  }

  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }

  imageLoop(){
    let j=2;
    for(let i=0; i<8; i++){
      this.imgUrl = "\\assets\\hotels\\"+j+".jpg";
      this.testimageArray[i] = this.imgUrl;
      j++;
    }
  }

  close(){
    this.modalController.dismiss();
  }

}
