(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["default-src_app_venuedetails_venuedetails_page_ts"],{

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(serviceName, params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Content-Type', 'application/json');
        //headers.append("Accept", 'application/json');
        //headers.append("Content-Type", "application/x-www-form-urlencoded");
        // headers = headers.append("Authorization", "bearer " + token);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName;
        const options = { headers: headers, withCredintials: false };
        return this.http.get(url, { headers: headers, params: params });
    }
    getData(serviceName, params, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        //headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers = headers.append("Authorization", "bearer " + token);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName;
        const options = { headers: headers, withCredintials: false };
        return this.http.get(url, { headers: headers, params: params });
    }
    post(serviceName, data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append("Content-Type", "application/json");
        const options = { headers: headers, withCredintials: false };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName;
        return this.http.post(url, JSON.stringify(data), options);
    }
    // post(serviceName: string ,params:HttpParams,token:any, data: any) {
    //   let headers = new HttpHeaders();
    //   headers = headers.append("Content-Type", "application/json");
    //   headers = headers.append("Authorization", "bearer " + token);
    //   const url = environment.apiUrl + serviceName;
    //   const options = { headers: headers, withCredintials: false };
    //   return this.http.post(url,JSON.stringify(data),{headers:headers,params:params});
    // }
    getUserDetail(serviceName, data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append("Content-Type", "application/json");
        const options = { headers: headers, withCredintials: false };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName;
        let json = "username=" + data.username + "&password=" + data.password;
        return this.http.post(url, JSON.stringify(data), options);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



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
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 3.1,
            spaceBetween: 10,
            loop: true,
            effect: 'slide',
        };
        debugger;
        console.log(this.navParams.get('VenueId'));
    }
    ngOnInit() {
        debugger;
        if (this.navParams.get('VenueId') != "") {
            if (this.count == 0) {
                this.postData.VenueId = this.navParams.get('VenueId');
                this.count += 1;
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
    getVenue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            // await this.loading.present();
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
            params = params.set("Id", this.postData.VenueId);
            this.httpService.get("api/venue/venues", params).subscribe((res) => {
                this.data = this.allData = res;
                // this.imageLoop();
                this.PbarHide = 1;
                // this.loading.dismiss();
                console.log(res);
            }, err => {
                this.alerrt();
                // this.loading.dismiss();
            });
        });
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
    imageLoop() {
        let j = 2;
        for (let i = 0; i < 8; i++) {
            this.imgUrl = "\\assets\\hotels\\" + j + ".jpg";
            this.testimageArray[i] = this.imgUrl;
            j++;
        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#hotel-details {\n  top: -56px;\n}\n#hotel-details img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n}\n#hotel-details #photos ion-slides,\n#hotel-details #photos .swiper-container {\n  width: 100%;\n  height: 120px;\n}\n#hotel-details #photos .swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n  border-radius: 10px;\n}\n#hotel-details ion-slides {\n  --bullet-background-active: var(--ion-color-color1);\n}\n#hotel-details .share-icon {\n  padding-top: 16px;\n  float: right;\n}\n#hotel-details .location-img {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n}\n.card-header-image {\n  position: relative;\n}\n.card-header-image::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n  z-index: 5;\n}\n.card-header-image img {\n  width: 100% !important;\n}\n.card-header-image .title-card {\n  position: absolute;\n  color: var(--cs-text-primary);\n  left: 16px;\n  bottom: 16px;\n  z-index: 9;\n  padding-right: 10px;\n}\nion-button {\n  margin-inline-start: 16px !important;\n}\nion-card {\n  margin: 10px;\n  min-height: 168px;\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.location-img {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnVlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQU1ROztFQUVJLFdBQUE7RUFDQSxhQUFBO0FBSlo7QUFPUTtFQUNJLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQUxaO0FBVUk7RUFDSSxtREFBQTtBQVJSO0FBV0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFUUjtBQVlJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVZSO0FBZUE7RUFDSSxrQkFBQTtBQVpKO0FBY0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFaTjtBQWVJO0VBQ0Usc0JBQUE7QUFiTjtBQWdCSTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQWROO0FBa0JFO0VBQ0Usb0NBQUE7QUFmSjtBQWlCRTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQWROO0FBaUJFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQWRKO0FBaUJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWRGIiwiZmlsZSI6InZlbnVlZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2hvdGVsLWRldGFpbHMge1xyXG4gICAgdG9wOiAtNTZweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgI3Bob3RvcyB7XHJcblxyXG4gICAgICAgIC8vICNzbGlkZXJcclxuICAgICAgICBpb24tc2xpZGVzLFxyXG4gICAgICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlvbi1zbGlkZXMge1xyXG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2hhcmUtaWNvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2NhdGlvbi1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY2FyZC1oZWFkZXItaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgbWl4LWJsZW5kLW1vZGU6IHZhcigtLWNzLW1vZGUtaW1hZ2UpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jcy1ncmFkaWVudC1saW5lYXIpO1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC50aXRsZS1jYXJkIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY3MtdGV4dC1wcmltYXJ5KTtcclxuICAgICAgbGVmdDogMTZweDtcclxuICAgICAgYm90dG9tOiAxNnB4O1xyXG4gICAgICB6LWluZGV4OiA5O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWNhcmR7XHJcbiAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxNjhweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9jYXRpb24taW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\" style=\"border-radius: 25px; background: #2f3b69;\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title>Venues</ion-title> -->\n  </ion-toolbar>\n  <ion-progress-bar *ngIf=\"PbarHide == 0\" type=\"indeterminate\" value=\"0.5\"></ion-progress-bar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"hotel-details\" *ngIf=\"PbarHide == 1\">\n  <ion-slides pager=\"true\" *ngIf=\"data.images.length > 0\">\n    <ion-slide *ngFor=\"let item of data.images\">\n      <img [src]=\"item.Image\" />\n    </ion-slide>\n  </ion-slides>\n\n  <!-- <ion-slides pager=\"true\" *ngIf=\"testimageArray.length > 0\">\n    <ion-slide *ngFor=\"let item of testimageArray\">\n      <img [src]=\"item\" />\n    </ion-slide>\n  </ion-slides> -->\n\n  <div  class=\"ion-no-padding\">\n    <ion-card class=\"box-shadow ion-padding ion-no-margin ion-text-center\">\n      <h1 class=\"hotel-name\" style=\"text-align: center;\">{{data.Name}}</h1>\n      <p style=\"text-align: center;\"> <ion-icon name=\"location\" slot=\"start\" color=\"medium\"></ion-icon> {{data.Address}}</p>\n    </ion-card>\n    \n    <!-- <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"box-shadow ion-padding ion-no-margin ion-text-center\">\n            <div class=\"images ion-padding\">\n              <ion-img src=\"assets/DetailsImgs/yards.png\"></ion-img>\n            </div>\n            <ion-card-content class=\"ion-no-padding\">\n              <h2 class=\"text-size-lg\">Yards:</h2>\n              <p class=\"text-size-xs\">{{data.Yards}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      \n        <ion-col>\n          <ion-card class=\"box-shadow ion-padding ion-no-margin ion-text-center\">\n            <div class=\"images ion-padding\">\n              <ion-img src=\"assets/DetailsImgs/star.png\"></ion-img>\n            </div>\n            <ion-card-content class=\"ion-no-padding\">\n              <h2 class=\"text-size-lg\">Service: </h2>\n              <p class=\"text-size-xs\">Excellent</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"box-shadow ion-padding ion-no-margin ion-text-center\">\n            <div class=\"images ion-padding\">\n              <ion-img src=\"assets/DetailsImgs/slot.png\" style=\"display: inline-table; width: 40%;\"></ion-img>\n            </div>\n            <ion-card-content class=\"ion-no-padding\">\n              <h2 class=\"text-size-lg\">Available Slots:</h2>\n              <p class=\"text-size-xs\" *ngFor=\"let slot of data.slots let in=index\">{{in+1}}. {{slot.SlotStartEnd}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"box-shadow ion-padding ion-no-margin ion-text-center\">\n            <div class=\"images ion-padding\">\n              <ion-img src=\"assets/DetailsImgs/minCap.png\"></ion-img>\n            </div>\n            <ion-card-content class=\"ion-no-padding\">\n              <h2 class=\"text-size-lg\">Min. Capacity:</h2>\n              <p class=\"text-size-xs\">{{data.MinCapacity}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card class=\"box-shadow ion-padding ion-no-margin ion-text-center\">\n            <div class=\"images ion-padding\">\n              <ion-img src=\"assets/DetailsImgs/maxCap.png\"></ion-img>\n            </div>\n            <ion-card-content class=\"ion-no-padding\">\n              <h2 class=\"text-size-lg\">Max. Capacity:</h2>\n              <p class=\"text-size-xs\">{{data.MaxCapacity}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n\n    <div class=\"ion-padding\">\n      <ion-list-header class=\"ion-no-padding\">\n        <ion-label color=\"medium\">Description</ion-label>\n      </ion-list-header>\n\n      <ion-text color=\"medium\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,\n        content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum\n         as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.\n      </ion-text>\n<div></div>\n      <ion-label style=\"padding:10px\">\n        <p><strong>Address:</strong> {{data.Address}}</p>\n        <p><strong>Website:</strong> <a href=\"#\"> WWW.vacantmarks.com</a></p>\n        <p><strong>Phone:</strong> <i>{{data.Phone}}</i></p>\n      </ion-label>\n  \n      <img class=\"location-img ion-no-padding\" src=\"assets/DetailsImgs/navigation-map.png\">\n    </div>\n    </div>\n\n  <div style=\"padding-right: 15px;\">\n    <ion-button expand=\"block\" expand=\"full\" shape=\"round\" fill=\"outline\">\n      See Availablity\n    </ion-button>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_venuedetails_venuedetails_page_ts.js.map