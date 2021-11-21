import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavParams, ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  slot:any=[];
  Slots:any=[];
  postData={
    title:'',
    SlotId:'',
    BookingDate:'',
    Status:2,
    Guest:'',
    CustomerId:'' 
  }
  loading:HTMLIonLoadingElement;
  public isGuestValid = true;
  public isSlotValid = true;
  public istitleValid = true;
  public isDateValid = true;

  constructor(
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    public navParams : NavParams,
    private httpService: HttpService,
    private ds : DataService,
    private toastcontroller:ToastController,
    private router : Router
  ) 
  {
    ;
    this.slot = this.navParams.data[0];
    this.Slots = this.slot[0].Slots;
    if(this.Slots.length == 0){
      this.Slots.push({"Id":"","SlotStartEnd":"No Slots Available."});
    }
    this.postData.BookingDate = this.slot[0].Date;
    console.log(this.slot,this.Slots);
   }

  ngOnInit() {
  }

  validateInputs(): boolean {
    ;
    this.isGuestValid = true;
    this.isSlotValid = true;
    this.istitleValid = true;
    this.isDateValid = true;
    if (!this.postData.Guest || this.postData.Guest.length === 0 || this.postData.Guest <= '0') {
      this.isGuestValid = false;
    }
    if (!this.postData.SlotId || this.postData.SlotId.length === 0) {
      this.isSlotValid = false;
    }
    if (!this.postData.title || this.postData.title.length === 0) {
      this.istitleValid = false;
    }
    if (!this.postData.BookingDate || this.postData.BookingDate.length === 0) {
      this.isDateValid = false;
    }

    return this.isGuestValid && this.isDateValid && this.isSlotValid && this.istitleValid;
  }

  async BookVenue(){
    if (this.validateInputs()) {
      this.loading = await this.loadingController.create({
        //message: this.translate.instant('pleasewait'),
        cssClass: 'custom-loading',
        translucent: true,
        showBackdrop: true,
        spinner:'circular'
      });
      await this.loading.present();
      ;
      this.postData.CustomerId = this.ds.userdetails.result.Id;
      this.httpService.post('api/Booking', this.postData).subscribe((res: any) => {
        ;
        console.log(res);
        this.toast("Venue Booked!!");
        this.close();
        this.router.navigate(['']);
        this.loading.dismiss();
  
      }, err=>{
        this.loading.dismiss();
      })
    }

  }

  async toast(msg){
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  close(){
      this.modalCtrl.dismiss();
  }
}
