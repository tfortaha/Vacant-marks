import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-venuebydate',
  templateUrl: './venuebydate.page.html',
  styleUrls: ['./venuebydate.page.scss'],
})
export class VenuebydatePage implements OnInit {

  allData:any =[];
  data:any = [];
  loading: HTMLIonLoadingElement;
  alert:HTMLIonAlertElement;

  postData={
    Date:''
  }
  count = 0;
  imgUrl="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private storage: Storage,
  ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(paramse => {
      if (paramse && paramse.special) {
        this.data = JSON.parse(paramse.special);
        if(this.count==0)
        {
          this.postData.Date=this.data[0].Date;
          this.count+=1;
        }
        // this.loading.dismiss();
      }
    });
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
    params = params.set("Date",this.postData.Date)
    this.httpService.get("api/Venue/Venues",params).subscribe((res) => {
      this.data = this.allData = res;
      this.imageLoop();
      this.loading.dismiss();
      console.log(res);
    },err =>{
      this.alerrt();
      this.loading.dismiss();
    })
  }

  imageLoop(){
    let j=2;
    for(let i=0; i<this.data.length; i++){
      this.imgUrl = "\\assets\\hotels\\"+j+".jpg";
      this.data[i].img = this.imgUrl;
      j++;
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
    let  VenueId = Id;
    console.log(VenueId);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(VenueId)
        }
      };
      this.router.navigate(['/venuedetails'],navigationExtras);

    // this.storage.set("selectedVenue",selectedVenue).then(response=>{
    //   console.log("selectedVenue --> ",response)
    //   this.router.navigate(['/dashboard']);
    // })
  }

  onDetailsClick(Id,Name){
    console.log("Details Click: ",Id,Name);
  }


  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }

}
