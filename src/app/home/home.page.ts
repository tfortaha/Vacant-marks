import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
//import {Geolocation} from '@ionic-native/geolocation/ngx';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyBSQzbULzh_G5qRtYcjhruGr-BkC0VqgFA';

  constructor() {
    debugger;
    const script = document.createElement('script');
    script.id = 'googleMap';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    document.head.appendChild(script);

   
    this.location.lat = 24.86253996754457;
    this.location.lng = 67.15399867911933;
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
      this.markerOptions.title = 'La mia posizione';
      this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
  }

}
