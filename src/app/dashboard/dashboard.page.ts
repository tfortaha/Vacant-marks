import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { format } from 'date-fns';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers:[Storage]
})
export class DashboardPage implements OnInit {

  minDate = format(new Date(), "yyyy-MM-dd");
  maxDate = new Date().getFullYear()+2;

  postData = {
    destination:'',
    Date:'',
    destinationId:''
  }

  isValid:Boolean = false;
  formlogin : FormGroup;

  venues:any=[];
  loading: HTMLIonLoadingElement;
  alert:HTMLIonAlertElement;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private storage: Storage,
    public alertController: AlertController,
    private loadingController: LoadingController,
    formBuilder : FormBuilder
  ) 
  { 
    this.formlogin = formBuilder.group({
      destination : new FormControl('', Validators.compose([
          Validators.required
      ])),    
      Date : new FormControl('', Validators.compose([
           Validators.required
      ]))
    });
    console.log(this.minDate,this.maxDate);
  }

  ngOnInit() {
    this.getVenue();
  }

  ionViewDidLoad(){
    this.postData = {
      destination:'',
      Date:'',
      destinationId:''
    }
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
      this.venues = res;
      this.loading.dismiss();
      console.log(res);
    },err =>{
      this.alerrt();
      this.loading.dismiss();
    })
  }

  ionViewDidEnter(){
    let form = this.formlogin.value; 
    this.storage.create();
    this.storage.get("selectedVenue").then(response=>{
      if(response){
        form.destination = response[0].Name;
        this.postData.destinationId = response[0].Id;
      }
    })
  }

  getVenues(){
    this.router.navigate(['/venues']);
  }

  search(){
    let form = this;
    let formValues = form.formlogin.value;
    
    if(formValues.Date != "" && formValues.destination == ""){
      this.isValid = false;
      let SearchDate:any = [{"Date":format(new Date(formValues.Date),"yyyy-MM-dd")}];
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(SearchDate)
        }
      };
      this.router.navigate(['/venuebydate'],navigationExtras);
    }
    else if(formValues.Date != "" && formValues.destination != ""){
      this.isValid = false;
      let SearchByDateName:any = [{"Date":format(new Date(formValues.Date),"yyyy-MM-dd"),"destinationId":this.postData.destinationId}];
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(SearchByDateName)
        }
      };
      this.router.navigate(['/search-venueby-date-name'],navigationExtras);

    }
    else{
      this.isValid = true;
    }
    console.log(form.formlogin.value.Date,form.formlogin.value.destination)
    console.log(this.postData.destination,this.postData.Date);
  }

  get errorControl() {
    return this.formlogin.controls;
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
