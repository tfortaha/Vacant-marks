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
        this.slideOpts = {
            initialSlide: 0,
            speed: 1000,
            slidesPerView: 3.1,
            spaceBetween: 10,
            loop: true,
            effect: 'slide',
        };
        ;
        console.log(this.navParams.get('VenueId'));
    }
    ngOnInit() {
        ;
        if (this.navParams.get('VenueId') != "") {
            if (this.count == 0) {
                this.postData.VenueId = this.navParams.get('VenueId');
                this.count += 1;
            }
            this.getVenue();
        }
        this.getVenue();
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
                let images = this.data.images;
                for (let i = 0; i < images.length; i++) {
                    images[i].Image = 'https://www.vacantmarks.com/VenueImages/' + images[i].VenueId + "/" + images[i].Image;
                }
                this.data.images = images;
                console.log(images);
                this.PbarHide = 1;
            }, err => {
                this.alerrt();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#hotel-details {\n  top: -56px;\n}\n#hotel-details img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n}\n#hotel-details #photos ion-slides,\n#hotel-details #photos .swiper-container {\n  width: 100%;\n  height: 120px;\n}\n#hotel-details #photos .swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n  border-radius: 10px;\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\nh3 {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnVlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQU1ROztFQUVJLFdBQUE7RUFDQSxhQUFBO0FBSlo7QUFPUTtFQUNJLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQUxaO0FBa0VFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQS9ESjtBQXdFQTtFQUNFLGlCQUFBO0FBckVGIiwiZmlsZSI6InZlbnVlZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2hvdGVsLWRldGFpbHMge1xyXG4gICAgdG9wOiAtNTZweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgI3Bob3RvcyB7XHJcblxyXG4gICAgICAgIC8vICNzbGlkZXJcclxuICAgICAgICBpb24tc2xpZGVzLFxyXG4gICAgICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGlvbi1zbGlkZXMge1xyXG4gICAgLy8gICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAuc2hhcmUtaWNvbiB7XHJcbiAgICAvLyAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAvLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC5sb2NhdGlvbi1pbWcge1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAvLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcblxyXG4vLyAuY2FyZC1oZWFkZXItaW1hZ2Uge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4vLyAgICAgJjo6YmVmb3JlIHtcclxuLy8gICAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuLy8gICAgICAgbWl4LWJsZW5kLW1vZGU6IHZhcigtLWNzLW1vZGUtaW1hZ2UpO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jcy1ncmFkaWVudC1saW5lYXIpO1xyXG4vLyAgICAgICB6LWluZGV4OiA1O1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgaW1nIHtcclxuLy8gICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuICBcclxuLy8gICAgIC50aXRsZS1jYXJkIHtcclxuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICBjb2xvcjogdmFyKC0tY3MtdGV4dC1wcmltYXJ5KTtcclxuLy8gICAgICAgbGVmdDogMTZweDtcclxuLy8gICAgICAgYm90dG9tOiAxNnB4O1xyXG4vLyAgICAgICB6LWluZGV4OiA5O1xyXG4vLyAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuICBcclxuLy8gICBpb24tYnV0dG9uIHtcclxuLy8gICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDE2cHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgaW9uLWNhcmR7XHJcbi8vICAgICAgIG1hcmdpbjoxMHB4O1xyXG4vLyAgICAgICBtaW4taGVpZ2h0OiAxNjhweDtcclxuLy8gICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAubG9jYXRpb24taW1nIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDE1MHB4O1xyXG4vLyAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyB9XHJcblxyXG5oM3tcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\" style=\"border-radius: 25px; background: #2f3b69;\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title>Venues</ion-title> -->\n  </ion-toolbar>\n  <ion-progress-bar *ngIf=\"PbarHide == 0\" type=\"indeterminate\" value=\"0.5\"></ion-progress-bar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"hotel-details\" *ngIf=\"PbarHide == 1\">\n  <ion-slides pager=\"true\" *ngIf=\"data.images.length > 0\">\n    <ion-slide *ngFor=\"let item of data.images\">\n      <img [src]=\"item.Image\" />\n    </ion-slide>\n  </ion-slides>\n\n  <!-- <div  class=\"ion-no-padding\">\n    <ion-card class=\"box-shadow ion-padding ion-no-margin ion-text-center\">\n      <h1 class=\"hotel-name\" style=\"text-align: center;\">{{data.Name}}</h1>\n      <p style=\"text-align: center;\"> <ion-icon name=\"location\" slot=\"start\" color=\"medium\"></ion-icon> {{data.Address}}</p>\n    </ion-card>\n    \n    <div class=\"ion-padding\">\n      <ion-list-header class=\"ion-no-padding\">\n        <ion-label color=\"medium\">Description</ion-label>\n      </ion-list-header>\n\n      <ion-text color=\"medium\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,\n        content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum\n         as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.\n      </ion-text>\n<div></div>\n      <ion-label style=\"padding:10px\">\n        <p><strong>Address:</strong> {{data.Address}}</p>\n        <p><strong>Website:</strong> <a href=\"#\"> WWW.vacantmarks.com</a></p>\n        <p><strong>Phone:</strong> <i>{{data.Phone}}</i></p>\n      </ion-label>\n  \n      <img class=\"location-img ion-no-padding\" src=\"assets/DetailsImgs/navigation-map.png\">\n    </div>\n    </div> -->\n\n    <div class=\"ion-padding\">\n      <h1 class=\"hotel-name\" style=\"text-align: left; font-size: 40px;\">{{data.Name}}</h1>\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <!-- <p style=\"text-align: left;\"> <ion-icon name=\"location\" slot=\"start\" color=\"medium\"></ion-icon> {{data.Address}}</p> -->\n      <h3 style=\"color: gray;\">Overview</h3>\n      <p style=\"color: gray;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      </p>\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Services</h3>\n    </div>\n    <ion-grid style=\"overflow-wrap: normal; font-size: 13px;\">\n      <ion-row>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"car-sport-sharp\"></ion-icon><br> Free<br> Parking &nbsp;\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"snow-sharp\"></ion-icon><br> Air Conditioned &nbsp;\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"wine\"></ion-icon><br> Mineral Water &nbsp;\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"sparkles\"></ion-icon><br> Premium Quality &nbsp;\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"expand\"></ion-icon> <br> {{data.Yards}} Yards &nbsp;\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"apps\"></ion-icon><br> Buffet System &nbsp;\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-icon class=\"icon-medium\" name=\"people\"></ion-icon><br> Expert Team &nbsp;\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"ion-padding\">\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Contact Information</h3>\n      <ion-grid style=\"overflow-wrap: normal;\">\n        <ion-row style=\"margin-bottom: 5px;\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"location\" class=\"icon-medium\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            {{data.Address}}\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-bottom: 5px;\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"call\" class=\"icon-medium\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            {{data.Phone}}\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-bottom: 5px;\">\n          <ion-col size=\"2\">\n            <ion-icon class=\"icon-medium\" name=\"mail-sharp\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            {{data.Email}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Description</h3>\n      <p style=\"color: gray;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n        when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      </p>\n\n      <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n      <h3 style=\"color: gray;\">Location</h3>\n      <img class=\"location-img ion-no-padding\" src=\"assets/DetailsImgs/navigation-map.png\">\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_venuedetails_venuedetails_page_ts.js.map