import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Storage } from '@ionic/storage';
import { format } from 'date-fns';

@Component({
  selector: 'app-bookedvenues',
  templateUrl: './bookedvenues.page.html',
  styleUrls: ['./bookedvenues.page.scss'],
})
export class BookedvenuesPage implements OnInit {

  alert:HTMLIonAlertElement;
  detailHeader:any =[];
  data:any = [];
  showMore:any=[];
  skeletonList:any=[];

  constructor(
    private httpService: HttpService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private storage: Storage,
    private toastcontroller:ToastController,
    private modalController: ModalController
  ) 
  {
    this.skeletonList.length = 10;
    // this.showMore = false;
  }

  ngOnInit() {
    this.method();
  }

  async method(){
    let params = new HttpParams();
    this.storage.get("userdetails").then((res) =>{
      if(res != null){
        params = params.set("CustomerId",res.result.Id);
        ;
        // this.data = [];
        this.httpService.get("api/Booking/PreviousBooking",params).subscribe((res) => {
         // this.data.push(res);
         this.data = res;
          if(this.data.length > 0){
            let count = 0;
            for(let item of this.data){
              var SplitedDate = item.BookingDate.split("T");
              let statusMessage = "";
              if(item.Status == 1){
                statusMessage = "Confirmed";
              }
              else if(item.Status == 2){
                statusMessage = "Pending";
              }
              else if(item.Status == 2){
                statusMessage = "Canceled";
              }
              else{
                  statusMessage = "";
              }
              // this.detailHeader[count] = "Date: " + SplitedDate[0] + "\n Venue: " + item.Name + "\n Status: " + statusMessage +
              //   "\n Title: " + item.title + "\n " + item.Description + "\n Guest: " + item.Guest +
              //   "\n Total Amount: " + item.VenueAmount + "\n Advance Amount: " + item.Advance +
              //   "\n Discount%: " + item.Discount + "\n Reference: " + item.Reference;
              this.detailHeader[count] = "Date: " + SplitedDate[0] + "\n Venue: " + item.Name + "\n Status: " + statusMessage +
              "\n Title: " + item.title + "\n " + item.Description + "\n Guest: " + item.Guest ;

                this.showMore[count ] = false;
                count++;
            }
          }
        },err =>{
          this.alerrt();
        })
      }
      })
  }

  trimString(string, length) {
    //;
    if(string != undefined){
      return string.length > length ? 
             string.substring(0, length) + '...' :
             string;
    }
    else{
      return '';
    }
}

  async alerrt(){
    this.alert = await this.alertController.create({
      message: 'Some thing went wrong. Please try again later.',
      buttons:['ok']
    });
    await this.alert.present();
  }

}
