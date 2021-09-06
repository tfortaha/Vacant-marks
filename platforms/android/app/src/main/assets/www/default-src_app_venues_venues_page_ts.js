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
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.getVenue();
        });
    }
    getVenue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'bubbles'
            });
            yield this.loading.present();
            if (this.dataservice.VenuePageData.length == 0) {
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
                this.httpService.get("api/Venue/Venues", params).subscribe((res) => {
                    this.data = this.allData = res;
                    this.dataservice.VenuePageData = res;
                    this.loading.dismiss();
                    console.log(res);
                }, err => {
                    this.alerrt();
                    this.loading.dismiss();
                });
            }
            else {
                this.data = this.allData = this.dataservice.VenuePageData;
                this.loading.dismiss();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-searchbar {\n  --border-radius: 25px;\n}\n\nion-menu-button {\n  color: var(--ion-color-color1);\n}\n\n.section1 {\n  text-align: center;\n  padding: 0px;\n}\n\n.section1 .value {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n\n.section1 ion-item {\n  --background: #2f3b69;\n  --color: #ffffff;\n  font-weight: 600;\n}\n\n.section1 ion-item ion-label {\n  color: #ffffff;\n}\n\n.section1 ion-button {\n  --background: #ffffff;\n  --background-activated: #ffffff;\n}\n\nion-segment .segment-button-checked {\n  color: #000000;\n}\n\nion-segment ion-segment-button {\n  color: #fff;\n  --background-hover: #2f3b69;\n  --background-focused: #2f3b69;\n  --color-checked: #2f3b69;\n  --indicator-color: #ffffff;\n}\n\n.submit-btn ion-button {\n  width: 100%;\n}\n\n#popular_hotels .item ion-thumbnail {\n  width: 100px;\n  height: 137px;\n}\n\n#popular_hotels .item ion-thumbnail .packages_thumbnail {\n  width: 100px;\n  height: 137px;\n  border-radius: 5px;\n}\n\n#popular_hotels .item .name {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n#popular_hotels .item ion-icon {\n  padding-right: 10px;\n}\n\n#popular_hotels .item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n\n#popular_hotels .item ion-card {\n  writing-mode: tb-rl;\n  padding: 10px;\n  background-color: #2f3b69;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n}\n\nimg {\n  height: 200px;\n  width: 100%;\n  object-fit: cover;\n}\n\nion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n\n.item .name {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #3c3c3c;\n}\n\n.item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n\n.item ion-card {\n  writing-mode: tb-rl;\n  padding: 10px;\n  background-color: #2f3b69;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVJO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtBQURSOztBQUlJO0VBQ0cscUJBQUE7RUFDQyxnQkFBQTtFQUVBLGdCQUFBO0FBSFI7O0FBTVE7RUFDSSxjQUFBO0FBSlo7O0FBUUk7RUFDSSxxQkFBQTtFQUVBLCtCQUFBO0FBUFI7O0FBWUk7RUFDSSxjQUFBO0FBVFI7O0FBWUk7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFWUjs7QUFlSTtFQUNJLFdBQUE7QUFaUjs7QUFrQlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQWZaOztBQWlCWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFmaEI7O0FBbUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBakJaOztBQW9CUTtFQUVJLG1CQUFBO0FBbkJaOztBQXNCUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFwQlo7O0FBdUJRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckJaOztBQXVDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFwQ0o7O0FBd0NBO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FBckNKOztBQXlDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBdENSOztBQXlDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUF2Q1I7O0FBMENJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBeENSIiwiZmlsZSI6InZlbnVlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxufVxyXG5cclxuLnNlY3Rpb24xIHtcclxuICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSkgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAudmFsdWUge1xyXG4gICAgLy8gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiAjMmYzYjY5O1xyXG4gICAgICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgLy8gICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgIC8vIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzJmM2I2OTtcclxuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzJmM2I2OTtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyZjNiNjk7XHJcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jcG9wdWxhcl9ob3RlbHMge1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTM3cHg7XHJcblxyXG4gICAgICAgICAgICAucGFja2FnZXNfdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTM3cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgLy8gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdGItcmw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNiNjk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAjc2VhcmNoLWJhciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG5cclxuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xyXG4vLyAgICAgICAgIC0taWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbi8vICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG4vLyAgICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDFweCAxMnB4IDBweCAjY2NjY2NjO1xyXG4vLyAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzNjM2MzYztcclxuICAgIH1cclxuXHJcbiAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgd3JpdGluZy1tb2RlOiB0Yi1ybDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNiNjk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAvLyAucHJpY2Uge1xyXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC8vIH1cclxufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"close()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>Venues</ion-title>\n  </ion-toolbar>\n  <ion-toolbar >\n    <ion-searchbar placeholder=\"Search\"\n                   animated\n                   (ionChange)=\"search( $event )\"\n                   (ionCancel)=\"clear($event)\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div id=\"popular_hotels\">\n    <ion-card class=\"ion-no-padding\" *ngFor=\"let item of data\">\n      <ion-list lines=\"none\" class=\"ion-no-padding\">\n        <ion-item class=\"ion-no-padding\">\n\n          <ion-thumbnail slot=\"start\"  (click)=\"onItemClickFunc(item.Id,item.Name)\">\n            <img class=\"packages_thumbnail\" style=\"vertical-align: middle;\" [src]=\"item.EncodeLogo\">\n          </ion-thumbnail>\n\n          <ion-label class=\"ion-text-wrap\" (click)=\"onItemClickFunc(item.Id,item.Name)\">\n            <h4 class=\"name\">{{item.Name}}</h4>\n            <ion-text color=\"medium\">\n              <ion-icon color=\"medium\" name=\"location\"></ion-icon> \n              {{item.Address}}<br>\n              Max Capacity: {{item.MaxCapacity}}<br>\n              Min Capacity: {{item.MinCapacity}}<br>\n              Area(yards): {{item.Yards}}<br>\n            </ion-text>\n            <br>\n            <p class=\"ion-padding-top\">\n              <ion-icon name=\"person\"></ion-icon> {{item.totalPerson}} &nbsp;\n              <ion-icon name=\"briefcase\"></ion-icon> {{item.suitcases}} &nbsp;\n              <ion-icon name=\"logo-slack\"></ion-icon> {{item.seats}} &nbsp;\n              <ion-icon name=\"copy\"></ion-icon> {{item.doorCount}}\n            </p>\n          </ion-label>\n          <ion-card (click)=\"onDetailsClick(item.Id,item.Name)\">\n            Details\n          </ion-card>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div> -->\n\n  <div *ngIf=\" allData.length > 0\">\n    <ion-card *ngFor=\"let item of data; let k=index\">\n      <!-- <ion-fab vertical=\"top\" horizontal=\"start\">\n        <ion-button size=\"small\" color=\"warning\">\n          {{item.slots[0].Status}}\n        </ion-button>\n      </ion-fab>\n   -->\n      <img [src]=\"item.EncodeLogo\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\"  (click)=\"onItemClickFunc(item.Id,item.Name)\">\n  \n            <h4 class=\"name\">{{item.Name}}</h4>\n  \n            <ion-text style=\"font-size: 12px;\" color=\"medium\"> \n              Max Capacity: {{item.MaxCapacity}} Persons. <br>\n                Min Capacity: {{item.MinCapacity}} Persons. <br>\n                <!-- Available slot: {{item.slots[0].SlotStartEnd}}<br> -->\n                <!-- Date: {{item.slots[0].Date}} <br> -->\n            </ion-text>\n          </ion-label>\n          <ion-card (click)=\"onDetailsClick(item.Id,item.Name)\">\n            Details\n          </ion-card>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_venues_venues_page_ts.js.map