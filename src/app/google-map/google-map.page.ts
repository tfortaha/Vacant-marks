import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
//import {Geolocation} from '@ionic-native/geolocation/ngx';

declare var google: any;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage {

  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyBSQzbULzh_G5qRtYcjhruGr-BkC0VqgFA';
  postData = {
    Lattitude:'',
    Longitude:''
  };
  skeletonText=0;
  
  constructor(
    private modalController:ModalController,
    public navParams : NavParams,
  ) 
  {
    debugger;
    console.log(this.navParams.get('directionParams'));
    var params = this.navParams.get('directionParams');
    this.postData.Lattitude = params.Lattitude;
    this.postData.Longitude = params.Longitude;
    const script = document.createElement('script');
    script.id = 'googleMap';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    document.head.appendChild(script);
  }

  ngOnInit(){
    this.Map();
  }

  async Map(){

    this.location.lat = this.postData.Lattitude;
    this.location.lng = this.postData.Longitude;
    this.mapOptions = {
      center: this.location,
      zoom: 15,
      mapTypeId: 'terrain'
    };

    setTimeout(() => {
      debugger;
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
      this.markerOptions.position = this.location;
      this.markerOptions.map = this.map;
      this.markerOptions.title = 'Vacant Mark';
      this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
    this.skeletonText = 1;
  }
  close(){
    this.modalController.dismiss();
  }
}
