(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["default-src_app_venuedetails_venuedetails_page_ts"],{

/***/ 7924:
/*!***************************************************!*\
  !*** ./src/app/venuedetails/venuedetails.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuedetailsPage": () => (/* binding */ VenuedetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_venuedetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./venuedetails.page.html */ 9339);
/* harmony import */ var _venuedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venuedetails.page.scss */ 9391);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);










let VenuedetailsPage = class VenuedetailsPage {
    constructor(route, router, httpService, alertController, loadingController, storage, navParams, modalController) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.navParams = navParams;
        this.modalController = modalController;
        this.allData = [];
        this.data = [];
        this.postData = {
            VenueId: ''
        };
        this.count = 0;
        this.imgUrl = "";
        this.testimageArray = [];
        this.PbarHide = 0;
        this.location = { lat: null, lng: null };
        this.markerOptions = { position: null, map: null, title: null };
        this.apiKey = 'AIzaSyBSQzbULzh_G5qRtYcjhruGr-BkC0VqgFA';
        this.slideOpts = {
            initialSlide: 0,
            speed: 1000,
            slidesPerView: 3.1,
            spaceBetween: 10,
            loop: true,
            effect: 'slide',
        };
        console.log(this.navParams.get('VenueId'));
    }
    ngOnInit() {
        if (this.navParams.get('VenueId') != "") {
            if (this.count == 0) {
                this.postData.VenueId = this.navParams.get('VenueId');
                this.count += 1;
            }
            this.getVenue();
        }
        // this.getVenue();
    }
    getVenue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
            params = params.set("Id", this.postData.VenueId);
            this.httpService.get("api/venue/venues", params).subscribe((res) => {
                this.data = this.allData = res;
                console.log(res);
                let images = this.data.images;
                for (let i = 0; i < images.length; i++) {
                    images[i].Image = 'https://www.vacantmarks.com/VenueImages/' + images[i].VenueId + "/" + images[i].Image;
                }
                this.data.images = images;
                //console.log(images);
                this.GoogleMap(this.data.Longitude, this.data.Lattitude);
                this.PbarHide = 1;
            }, err => {
                this.alerrt();
            });
        });
    }
    GoogleMap(Long, Lat) {
        const script = document.createElement('script');
        script.id = 'googleMap';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
        document.head.appendChild(script);
        this.location.lat = Lat;
        this.location.lng = Long;
        this.mapOptions = {
            center: this.location,
            zoom: 20,
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
    alerrt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertController.create({
                message: 'Some thing went wrong. Please try again later.',
                buttons: ['ok']
            });
            yield this.alert.present();
        });
    }
    close() {
        this.modalController.dismiss();
    }
};
VenuedetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
VenuedetailsPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['Map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef, static: true },] }]
};
VenuedetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-venuedetails',
        template: _raw_loader_venuedetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_venuedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VenuedetailsPage);



/***/ }),

/***/ 9391:
/*!*****************************************************!*\
  !*** ./src/app/venuedetails/venuedetails.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#hotel-details {\n  top: -56px;\n}\n#hotel-details img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n}\n#hotel-details #photos ion-slides,\n#hotel-details #photos .swiper-container {\n  width: 100%;\n  height: 120px;\n}\n#hotel-details #photos .swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n  border-radius: 10px;\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\nh3 {\n  padding-top: 10px;\n}\n.map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnVlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUlROztFQUVJLFdBQUE7RUFDQSxhQUFBO0FBRlo7QUFJUTtFQUNJLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQUZaO0FBT0U7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FBSko7QUFPQTtFQUNFLGlCQUFBO0FBSkY7QUFPQTtFQUNJLFlBQUE7QUFKSiIsImZpbGUiOiJ2ZW51ZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNob3RlbC1kZXRhaWxzIHtcclxuICAgIHRvcDogLTU2cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgICNwaG90b3Mge1xyXG4gICAgICAgIGlvbi1zbGlkZXMsXHJcbiAgICAgICAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oM3tcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hcHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */");

/***/ }),

/***/ 9339:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/venuedetails/venuedetails.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\" style=\"border-radius: 25px; background: #2f3b69;\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar *ngIf=\"PbarHide == 0\" type=\"indeterminate\" value=\"0.5\"></ion-progress-bar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"hotel-details\" *ngIf=\"PbarHide == 1\">\n  <ion-slides pager=\"true\" *ngIf=\"data.images.length > 0\">\n    <ion-slide *ngFor=\"let item of data.images\">\n      <img [src]=\"item.Image\" />\n    </ion-slide>\n  </ion-slides>\n\n    <div class=\"ion-padding\">\n      <h1 class=\"hotel-name\" style=\"text-align: left; font-size: 30px;\">{{data.Name}}</h1>\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Overview</h3>\n      <div *ngIf='data.Overview'>\n        <p style=\"color: gray;\">{{data.Overview}}</p>\n      </div>\n      <div *ngIf='!data.Overview'>\n        <p style=\"color: gray;\"> No Overview Found. </p>\n      </div>\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Services</h3>\n    </div>\n    <ion-grid style=\"overflow-wrap: normal; font-size: 13px;\">\n      <ion-row>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"car-sport-sharp\"></ion-icon><br> Free<br> Parking &nbsp;\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"snow-sharp\"></ion-icon><br> Air Conditioned &nbsp;\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"wine\"></ion-icon><br> Mineral Water &nbsp;\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"sparkles\"></ion-icon><br> Premium Quality &nbsp;\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"expand\"></ion-icon> <br> {{data.Yards}} Yards &nbsp;\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"apps\"></ion-icon><br> Buffet System &nbsp;\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"people\"></ion-icon><br> Expert Team &nbsp;\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"ion-padding\">\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Contact Information</h3>\n      <ion-grid style=\"overflow-wrap: normal;\">\n        <ion-row style=\"margin-bottom: 5px;\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"location\" class=\"icon-medium\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div *ngIf='data.Address'>\n              {{data.Address}}\n            </div>\n            <div *ngIf='!data.Address'>\n              No Address Found.\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-bottom: 5px;\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"call\" class=\"icon-medium\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div *ngIf='data.Phone'>\n              {{data.Phone}}\n            </div>\n            <div *ngIf='!data.Phone'>\n              No Phone Number Found.\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-bottom: 5px;\">\n          <ion-col size=\"2\">\n            <ion-icon class=\"icon-medium\" name=\"mail-sharp\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div *ngIf='data.Email'>\n              {{data.Email}}\n            </div>\n            <div *ngIf='!data.Email'>\n              No Email Found.\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Description</h3>\n      <div *ngIf='data.Description'>\n        <p style=\"color: gray;\">{{data.Description}}</p>\n      </div>\n      <div *ngIf='!data.Description'>\n        <p style=\"color: gray;\">No Description Found.</p>\n      </div>\n\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Location</h3>\n      <div *ngIf='data.Lattitude && data.Longitude'>\n        <!-- <img class=\"location-img ion-no-padding\" src=\"assets/DetailsImgs/navigation-map.png\"> -->\n        <div #Map class=\"map\"></div>\n      </div>\n      <div *ngIf='!data.Lattitude && !data.Longitude'>\n        <p style=\"color: gray;\">No Location Found.</p>\n      </div>\n\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_venuedetails_venuedetails_page_ts.js.map