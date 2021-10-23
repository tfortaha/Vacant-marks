(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_bookedvenues_bookedvenues_module_ts"],{

/***/ 3201:
/*!*************************************************************!*\
  !*** ./src/app/bookedvenues/bookedvenues-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedvenuesPageRoutingModule": () => (/* binding */ BookedvenuesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bookedvenues_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookedvenues.page */ 4949);




const routes = [
    {
        path: '',
        component: _bookedvenues_page__WEBPACK_IMPORTED_MODULE_0__.BookedvenuesPage
    }
];
let BookedvenuesPageRoutingModule = class BookedvenuesPageRoutingModule {
};
BookedvenuesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookedvenuesPageRoutingModule);



/***/ }),

/***/ 1149:
/*!*****************************************************!*\
  !*** ./src/app/bookedvenues/bookedvenues.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedvenuesPageModule": () => (/* binding */ BookedvenuesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bookedvenues_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookedvenues-routing.module */ 3201);
/* harmony import */ var _bookedvenues_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookedvenues.page */ 4949);







let BookedvenuesPageModule = class BookedvenuesPageModule {
};
BookedvenuesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bookedvenues_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookedvenuesPageRoutingModule
        ],
        declarations: [_bookedvenues_page__WEBPACK_IMPORTED_MODULE_1__.BookedvenuesPage]
    })
], BookedvenuesPageModule);



/***/ }),

/***/ 4949:
/*!***************************************************!*\
  !*** ./src/app/bookedvenues/bookedvenues.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedvenuesPage": () => (/* binding */ BookedvenuesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bookedvenues_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bookedvenues.page.html */ 6757);
/* harmony import */ var _bookedvenues_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookedvenues.page.scss */ 4083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 8605);








let BookedvenuesPage = class BookedvenuesPage {
    constructor(httpService, alertController, loadingController, storage, toastcontroller, modalController) {
        this.httpService = httpService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastcontroller = toastcontroller;
        this.modalController = modalController;
        this.detailHeader = [];
        this.data = [];
        this.showMore = [];
        this.skeletonList = [];
        this.skeletonList.length = 10;
        // this.showMore = false;
    }
    ngOnInit() {
        this.method();
    }
    method() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
            this.storage.get("userdetails").then((res) => {
                if (res != null) {
                    params = params.set("CustomerId", res.result.Id);
                    ;
                    // this.data = [];
                    this.httpService.get("api/Booking/PreviousBooking", params).subscribe((res) => {
                        // this.data.push(res);
                        this.data = res;
                        if (this.data.length > 0) {
                            let count = 0;
                            for (let item of this.data) {
                                var SplitedDate = item.BookingDate.split("T");
                                let statusMessage = "";
                                if (item.Status == 1) {
                                    statusMessage = "Confirmed";
                                }
                                else if (item.Status == 2) {
                                    statusMessage = "Pending";
                                }
                                else if (item.Status == 2) {
                                    statusMessage = "Canceled";
                                }
                                else {
                                    statusMessage = "";
                                }
                                this.detailHeader[count] = "Date: " + SplitedDate[0] + "\n Venue: " + item.Name + "\n Status: " + statusMessage +
                                    "\n Title: " + item.title + "\n " + item.Description + "\n Guest: " + item.Guest +
                                    "\n Total Amount: " + item.VenueAmount + "\n Advance Amount: " + item.Advance +
                                    "\n Discount%: " + item.Discount + "\n Reference: " + item.Reference;
                                this.showMore[count] = false;
                                count++;
                            }
                        }
                    }, err => {
                        this.alerrt();
                    });
                }
            });
        });
    }
    trimString(string, length) {
        //;
        if (string != undefined) {
            return string.length > length ?
                string.substring(0, length) + '...' :
                string;
        }
        else {
            return '';
        }
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
};
BookedvenuesPage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
BookedvenuesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-bookedvenues',
        template: _raw_loader_bookedvenues_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bookedvenues_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookedvenuesPage);



/***/ }),

/***/ 4083:
/*!*****************************************************!*\
  !*** ./src/app/bookedvenues/bookedvenues.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  border-left: 7px solid #2f3b69;\n  border-right: 7px solid #2f3b69;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tlZHZlbnVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJib29rZWR2ZW51ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMyZjNiNjk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMmYzYjY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufTsiXX0= */");

/***/ }),

/***/ 6757:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookedvenues/bookedvenues.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-label>Booked Venues</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf='data.length > 0'>\n    <ion-card style=\"padding-top: 5px; padding-bottom: 5px;\" *ngFor='let item of detailHeader; let k = index'>\n          <ion-item lines=\"none\" (click)=\"showMore[k] = !showMore[k]\">\n            <div>\n              <div *ngIf=\"!showMore[k]\">\n                  {{trimString(item,55)}}\n              </div>\n              <div *ngIf=\"showMore[k]\" style=\"white-space: pre-wrap;\">\n                  {{item}}\n              </div>\n          </div>\n          <i slot=\"end\" *ngIf=\"!showMore[k]\" class=\"icon icon-plus-box icon-small\"></i>\n          <i slot=\"end\" *ngIf=\"showMore[k]\" class=\"icon icon-minus-box icon-small\"></i>\n        </ion-item>\n    </ion-card>\n  </div>\n\n  <div *ngIf='data.length == 0'>\n    <ion-list style=\"padding-right: 4%;\">\n      <div *ngFor='let item of skeletonList'>\n          <ion-item>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-item>\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bookedvenues_bookedvenues_module_ts.js.map