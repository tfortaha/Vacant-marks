(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["default-src_app_venuedetails_venuedetails_page_ts"],{

/***/ 7355:
/*!***********************************************!*\
  !*** ./src/app/google-map/google-map.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapPage": () => (/* binding */ GoogleMapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_google_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./google-map.page.html */ 7867);
/* harmony import */ var _google_map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-map.page.scss */ 4718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let GoogleMapPage = class GoogleMapPage {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.location = { lat: null, lng: null };
        this.markerOptions = { position: null, map: null, title: null };
        this.apiKey = 'AIzaSyBSQzbULzh_G5qRtYcjhruGr-BkC0VqgFA';
        this.postData = {
            Lattitude: '',
            Longitude: ''
        };
        this.skeletonText = 0;
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
    ngOnInit() {
        this.Map();
    }
    Map() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
        });
    }
    close() {
        this.modalController.dismiss();
    }
};
GoogleMapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
GoogleMapPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['Map',] }]
};
GoogleMapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-google-map',
        template: _raw_loader_google_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_google_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GoogleMapPage);



/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_venuedetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./venuedetails.page.html */ 9339);
/* harmony import */ var _venuedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venuedetails.page.scss */ 9391);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _google_map_google_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../google-map/google-map.page */ 7355);











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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
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
                this.PbarHide = 1;
            }, err => {
                this.alerrt();
            });
        });
    }
    alerrt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertController.create({
                message: 'Some thing went wrong. Please try again later.',
                buttons: ['ok']
            });
            yield this.alert.present();
        });
    }
    mapModal(Lattitude, Longitude) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            console.log(Lattitude, Longitude);
            let directionParams = { Lattitude, Longitude };
            const modal = yield this.modalController.create({
                component: _google_map_google_map_page__WEBPACK_IMPORTED_MODULE_3__.GoogleMapPage,
                componentProps: { directionParams }
            });
            return yield modal.present();
        });
    }
    close() {
        this.modalController.dismiss();
    }
};
VenuedetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
VenuedetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-venuedetails',
        template: _raw_loader_venuedetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_venuedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VenuedetailsPage);



/***/ }),

/***/ 4718:
/*!*************************************************!*\
  !*** ./src/app/google-map/google-map.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6Imdvb2dsZS1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgIl19 */");

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

/***/ 7867:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google-map/google-map.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Google Maps\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\" style=\"border-radius: 25px; background: #2f3b69;\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf='!this.markerOptions.title' style=\"padding: 2%; height: 100%;\">\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n  </div>\r\n  <div #Map class=\"map\" *ngIf='skeletonText == 1'></div>\r\n</ion-content>\r\n<!-- \r\n<ion-content>\r\n  <div #Map class=\"map\"></div>\r\n\r\n</ion-content> -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\" style=\"border-radius: 25px; background: #2f3b69;\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-progress-bar *ngIf=\"PbarHide == 0\" type=\"indeterminate\" value=\"0.5\"></ion-progress-bar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" id=\"hotel-details\" *ngIf=\"PbarHide == 1\">\r\n  <ion-slides pager=\"true\" *ngIf=\"data.images.length > 0\">\r\n    <ion-slide *ngFor=\"let item of data.images\">\r\n      <img [src]=\"item.Image\" />\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n    <div class=\"ion-padding\">\r\n      <h1 class=\"hotel-name\" style=\"text-align: left; font-size: 30px;\">{{data.Name}}</h1>\r\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\r\n      <h3 style=\"color: gray;\">Overview</h3>\r\n      <div *ngIf='data.Overview'>\r\n        <p style=\"color: gray;\">{{data.Overview}}</p>\r\n      </div>\r\n      <div *ngIf='!data.Overview'>\r\n        <p style=\"color: gray;\"> No Overview Found. </p>\r\n      </div>\r\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\r\n      <h3 style=\"color: gray;\">Services</h3>\r\n    </div>\r\n    <ion-grid style=\"overflow-wrap: normal; font-size: 13px;\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" style=\"text-align: center;\">\r\n          <ion-icon class=\"icon-medium\" name=\"car-sport-sharp\"></ion-icon><br> Free<br> Parking &nbsp;\r\n        </ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: center;\">\r\n          <ion-icon class=\"icon-medium\" name=\"snow-sharp\"></ion-icon><br> Air Conditioned &nbsp;\r\n        </ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: center;\">\r\n          <ion-icon class=\"icon-medium\" name=\"wine\"></ion-icon><br> Mineral Water &nbsp;\r\n        </ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: center;\">\r\n          <ion-icon class=\"icon-medium\" name=\"sparkles\"></ion-icon><br> Premium Quality &nbsp;\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"4\" style=\"text-align: center;\">\r\n          <ion-icon class=\"icon-medium\" name=\"expand\"></ion-icon> <br> {{data.Yards}} Yards &nbsp;\r\n        </ion-col>\r\n        <ion-col size=\"4\" style=\"text-align: center;\">\r\n          <ion-icon class=\"icon-medium\" name=\"apps\"></ion-icon><br> Buffet System &nbsp;\r\n        </ion-col>\r\n        <ion-col size=\"4\" style=\"text-align: center;\">\r\n          <ion-icon class=\"icon-medium\" name=\"people\"></ion-icon><br> Expert Team &nbsp;\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\r\n      <h3 style=\"color: gray;\">Contact Information</h3>\r\n      <ion-grid style=\"overflow-wrap: normal;\">\r\n        <ion-row style=\"margin-bottom: 5px;\">\r\n          <ion-col size=\"2\">\r\n            <ion-icon name=\"location\" class=\"icon-medium\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"10\">\r\n            <div *ngIf='data.Address'>\r\n              {{data.Address}}\r\n            </div>\r\n            <div *ngIf='!data.Address'>\r\n              No Address Found.\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-bottom: 5px;\">\r\n          <ion-col size=\"2\">\r\n            <ion-icon name=\"call\" class=\"icon-medium\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"10\">\r\n            <div *ngIf='data.Phone'>\r\n              {{data.Phone}}\r\n            </div>\r\n            <div *ngIf='!data.Phone'>\r\n              No Phone Number Found.\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-bottom: 5px;\">\r\n          <ion-col size=\"2\">\r\n            <ion-icon class=\"icon-medium\" name=\"mail-sharp\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"10\">\r\n            <div *ngIf='data.Email'>\r\n              {{data.Email}}\r\n            </div>\r\n            <div *ngIf='!data.Email'>\r\n              No Email Found.\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\r\n      <h3 style=\"color: gray;\">Description</h3>\r\n      <div *ngIf='data.Description'>\r\n        <p style=\"color: gray;\">{{data.Description}}</p>\r\n      </div>\r\n      <div *ngIf='!data.Description'>\r\n        <p style=\"color: gray;\">No Description Found.</p>\r\n      </div>\r\n\r\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\r\n      <h3 style=\"color: gray;\">Location</h3>\r\n      <div *ngIf='data.Lattitude && data.Longitude'>\r\n        <div class=\"map\"><a style=\"border-bottom: 1px solid;\" (click)=\"mapModal(data.Lattitude, data.Longitude)\">Click here to see on map.</a></div>\r\n        <!-- <img class=\"location-img ion-no-padding\" src=\"assets/DetailsImgs/navigation-map.png\"> -->\r\n      </div>\r\n      <div *ngIf='!data.Lattitude && !data.Longitude'>\r\n        <p style=\"color: gray;\">No Location Found.</p>\r\n      </div>\r\n\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_venuedetails_venuedetails_page_ts.js.map