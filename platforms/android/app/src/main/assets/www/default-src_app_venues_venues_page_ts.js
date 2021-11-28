(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["default-src_app_venues_venues_page_ts"],{

/***/ 6547:
/*!***************************************!*\
  !*** ./src/app/venues/venues.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuesPage": () => (/* binding */ VenuesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_venues_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./venues.page.html */ 1995);
/* harmony import */ var _venues_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venues.page.scss */ 3082);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _venuedetails_venuedetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../venuedetails/venuedetails.page */ 7924);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 2468);











let VenuesPage = class VenuesPage {
    constructor(router, httpService, alertController, loadingController, storage, dataservice, modalController) {
        this.router = router;
        this.httpService = httpService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.dataservice = dataservice;
        this.modalController = modalController;
        this.allData = [];
        this.data = [];
        this.skeletonList = [];
        this.skeletonList.length = 4;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.getVenue();
        });
    }
    getVenue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            ;
            // this.loading = await this.loadingController.create({
            //   //message: this.translate.instant('pleasewait'),
            //   cssClass: 'custom-loading',
            //   translucent: true,
            //   showBackdrop: true,
            //   spinner:'circular'
            // });
            // await this.loading.present();
            if (this.dataservice.VenuePageData.length == 0) {
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
                this.httpService.get("api/Venue/Venues", params).subscribe((res) => {
                    this.data = this.allData = res;
                    for (let i = 0; i < this.allData.length; i++) {
                        ;
                        this.data[i].EncodeLogo = 'https://vacantmarks.com/VenueLogoFolder/' + this.data[i].EncodeLogo;
                    }
                    this.dataservice.VenuePageData = this.data;
                    ;
                    console.log(res);
                }, err => {
                    this.alerrt();
                    // ;
                });
            }
            else {
                this.data = this.allData = this.dataservice.VenuePageData;
                // ;
            }
        });
    }
    search(event) {
        this.data = this.allData;
        let text = event.target.value;
        this.data = this.data.filter((item) => {
            return item.Name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    }
    clear(event) {
        this.data = this.allData;
    }
    onItemClickFunc(Id, Name) {
        this.modalController.dismiss(`${Id}\\${Name}`);
    }
    onDetailsClick(Id, Name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let VenueId = Id;
            const modal = yield this.modalController.create({
                component: _venuedetails_venuedetails_page__WEBPACK_IMPORTED_MODULE_3__.VenuedetailsPage,
                componentProps: { VenueId }
            });
            return yield modal.present();
        });
    }
    close() {
        this.modalController.dismiss();
    }
    alerrt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertController.create({
                message: 'Some thing went wrong. Please try again later.',
                buttons: ['ok']
            });
            yield this.alert.present();
        });
    }
};
VenuesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
VenuesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-venues',
        template: _raw_loader_venues_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_venues_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VenuesPage);



/***/ }),

/***/ 3082:
/*!*****************************************!*\
  !*** ./src/app/venues/venues.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#search-bar {\n  background: #eeeeee;\n}\n#search-bar ion-searchbar {\n  --icon-color: var(--ion-color-color1);\n  --placeholder-color: var(--ion-color-color1);\n  --background: #fff;\n  --color: var(--ion-color-color1);\n  --box-shadow: 0px 1px 12px 0px #cccccc;\n  --border-radius: 25px;\n}\nimg {\n  height: 100px;\n  width: 100%;\n  object-fit: cover;\n}\nion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n.item .name {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #3c3c3c;\n}\n.item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n.item .price {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0pBO0VBQ0ksbUJBQUE7QUFuSko7QUFxSkk7RUFDSSxxQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7QUFuSlI7QUF1SkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBcEpKO0FBd0pBO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FBckpKO0FBeUpJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF0SlI7QUF5Skk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBdkpSO0FBMEpJO0VBQ0ksZUFBQTtBQXhKUiIsImZpbGUiOiJ2ZW51ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXNlYXJjaGJhciB7XHJcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51LWJ1dHRvbiB7XHJcbi8vICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWN0aW9uMSB7XHJcbi8vICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpICFpbXBvcnRhbnQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4vLyAgICAgLnZhbHVlIHtcclxuLy8gICAgIC8vICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgIC0tYmFja2dyb3VuZDogIzJmM2I2OTtcclxuLy8gICAgICAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgIC8vICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcblxyXG4vLyAgICAgICAgIGlvbi1sYWJlbCB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbi8vICAgICAgICAvLyAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuLy8gICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBpb24tc2VnbWVudCB7XHJcbi8vICAgICAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbi8vICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuLy8gICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMyZjNiNjk7XHJcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMyZjNiNjk7XHJcbi8vICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjMmYzYjY5O1xyXG4vLyAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuc3VibWl0LWJ0biB7XHJcbi8vICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gI3BvcHVsYXJfaG90ZWxzIHtcclxuLy8gICAgIC5pdGVtIHtcclxuLy8gICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDEzN3B4O1xyXG5cclxuLy8gICAgICAgICAgICAgLnBhY2thZ2VzX3RodW1ibmFpbCB7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzN3B4O1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAubmFtZSB7XHJcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1pY29uIHtcclxuLy8gICAgICAgICAgIC8vICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpb24tbm90ZSB7XHJcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaW9uLWNhcmQge1xyXG4vLyAgICAgICAgICAgICB3cml0aW5nLW1vZGU6IHRiLXJsO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYjY5O1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gI3NlYXJjaC1iYXIge1xyXG4vLyAvLyAgICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuXHJcbi8vIC8vICAgICBpb24tc2VhcmNoYmFyIHtcclxuLy8gLy8gICAgICAgICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG4vLyAvLyAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG4vLyAvLyAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gLy8gICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuLy8gLy8gICAgICAgICAtLWJveC1zaGFkb3c6IDBweCAxcHggMTJweCAwcHggI2NjY2NjYztcclxuLy8gLy8gICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbi8vIC8vICAgICB9XHJcbi8vIC8vIH1cclxuXHJcbi8vIGltZyB7XHJcbi8vICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbi8vIH1cclxuXHJcbi8vIGlvbi1mYWItYnV0dG9uIHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG5cclxuLy8gLml0ZW0ge1xyXG4vLyAgICAgLm5hbWUge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vICAgICAgICAgY29sb3I6ICMzYzNjM2M7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW9uLW5vdGUge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW9uLWNhcmQge1xyXG4vLyAgICAgICAgIHdyaXRpbmctbW9kZTogdGItcmw7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYjY5O1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gLnByaWNlIHtcclxuLy8gICAgIC8vICAgICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgICAvLyB9XHJcbi8vIH1cclxuXHJcbiNzZWFyY2gtYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcblxyXG4gICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgICAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggMXB4IDEycHggMHB4ICNjY2NjY2M7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2MzYzNjO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 1995:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/venues/venues.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" (click)=\"close()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Venues</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar >\r\n    <ion-searchbar placeholder=\"Search\"\r\n                   animated\r\n                   (ionChange)=\"search( $event )\"\r\n                   (ionCancel)=\"clear($event)\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\" allData.length > 0\">\r\n    <ion-card *ngFor=\"let item of data\">\r\n      <ion-fab vertical=\"top\" horizontal=\"start\">\r\n        <ion-button size=\"small\" color=\"dark\" (click)=\"onDetailsClick(item.Id,item.Name)\">\r\n          {{item.Name}}\r\n        </ion-button>\r\n      </ion-fab>\r\n      <img [src]=\"item.EncodeLogo\" (click)=\"onItemClickFunc(item.Id,item.Name)\" />\r\n    </ion-card>\r\n  </div>\r\n  \r\n  <!-- <div *ngIf=\" allData.length > 0\">\r\n    <ion-card *ngFor=\"let item of data; let k=index\">\r\n      <img [src]=\"item.EncodeLogo\">\r\n      <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-label class=\"ion-text-wrap\"  (click)=\"onItemClickFunc(item.Id,item.Name)\">\r\n  \r\n            <h4 class=\"name\">{{item.Name}}</h4>\r\n  \r\n            <ion-text style=\"font-size: 12px;\" color=\"medium\"> \r\n              Max Capacity: {{item.MaxCapacity}} Persons. <br>\r\n                Min Capacity: {{item.MinCapacity}} Persons. <br>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-card (click)=\"onDetailsClick(item.Id,item.Name)\">\r\n            Details\r\n          </ion-card>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n  <div *ngIf=\" allData.length == 0\">\r\n    <div *ngFor='let item of skeletonList'>\r\n      <ion-card>\r\n        <ion-skeleton-text style=\"padding:20%;margin-left: 3%;margin-top: 3%;width: 94%;\" animated></ion-skeleton-text>\r\n        <ion-list lines=\"none\">\r\n          <ion-item>\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <ion-skeleton-text style=\"width: 40%;\" animated></ion-skeleton-text>\r\n              <ion-skeleton-text style=\"width: 40%;\" animated></ion-skeleton-text> \r\n              <ion-skeleton-text style=\"width: 40%;\" animated></ion-skeleton-text>\r\n            </ion-label>\r\n            <ion-card>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-card>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_venues_venues_page_ts.js.map