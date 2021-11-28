(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_google-map_google-map_module_ts"],{

/***/ 1012:
/*!*********************************************************!*\
  !*** ./src/app/google-map/google-map-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapPageRoutingModule": () => (/* binding */ GoogleMapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _google_map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-map.page */ 7355);




const routes = [
    {
        path: '',
        component: _google_map_page__WEBPACK_IMPORTED_MODULE_0__.GoogleMapPage
    }
];
let GoogleMapPageRoutingModule = class GoogleMapPageRoutingModule {
};
GoogleMapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GoogleMapPageRoutingModule);



/***/ }),

/***/ 7370:
/*!*************************************************!*\
  !*** ./src/app/google-map/google-map.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapPageModule": () => (/* binding */ GoogleMapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _google_map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-map-routing.module */ 1012);
/* harmony import */ var _google_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-map.page */ 7355);







let GoogleMapPageModule = class GoogleMapPageModule {
};
GoogleMapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _google_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.GoogleMapPageRoutingModule
        ],
        declarations: [_google_map_page__WEBPACK_IMPORTED_MODULE_1__.GoogleMapPage]
    })
], GoogleMapPageModule);



/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=src_app_google-map_google-map_module_ts.js.map