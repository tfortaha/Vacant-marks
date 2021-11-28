(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 5935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 5935);








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 2836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 8043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 2707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var _venues_venues_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../venues/venues.page */ 6547);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _venuedetails_venuedetails_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../venuedetails/venuedetails.page */ 7924);













let DashboardPage = class DashboardPage {
    constructor(router, httpService, storage, alertController, loadingController, dataservice, modalController) {
        this.router = router;
        this.httpService = httpService;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.dataservice = dataservice;
        this.modalController = modalController;
        this.minDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(), "yyyy-MM-dd");
        this.maxDate = new Date().getFullYear() + 2;
        this.postData = {
            destination: '',
            Date: '',
            destinationId: ''
        };
        this.skeletonStop = 0;
        this.venues = [];
        this.logoutbtn = false;
        this.isDestinationValid = true;
        this.isDateValid = true;
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 5,
            //loop: true,
            effect: 'slide',
        };
        this.customPickerOption = {
            buttons: [{
                    text: 'Clear',
                    handler: () => this.postData.Date = ''
                },
                {
                    text: 'Done',
                    handler: (e) => this.postData.Date = ('' + e.year.value + '/' + e.month.value + '/' + e.day.value + '/')
                }
            ]
        };
        this.storage.get("userdetails").then((res) => {
            if (res != null) {
                this.logoutbtn = true;
            }
        });
    }
    ngOnInit() {
        this.getVenue();
    }
    validateInputs() {
        this.isDestinationValid = true;
        this.isDateValid = true;
        if (!this.postData.destination || this.postData.destination.length === 0) {
            this.isDestinationValid = false;
        }
        if (!this.postData.Date || this.postData.Date.length === 0) {
            this.isDateValid = false;
        }
        if (this.postData.Date != "") {
            this.isDestinationValid = true;
            this.isDateValid = true;
        }
        return this.isDestinationValid && this.isDateValid;
    }
    getVenue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            // await this.loading.present();
            if (this.dataservice.DashboardData.length == 0) {
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams();
                this.httpService.get("api/Venue/Venues", params).subscribe((res) => {
                    debugger;
                    this.venues = res;
                    let a = false;
                    for (let i = 0; i < this.venues.length; i++) {
                        ;
                        this.venues[i].EncodeLogo = 'https://vacantmarks.com/VenueLogoFolder/' + this.venues[i].EncodeLogo;
                    }
                    ;
                    console.log(res);
                }, err => {
                    this.skeletonStop = 1;
                    this.alerrt();
                    ;
                });
            }
            else {
                this.venues = this.dataservice.DashboardData;
                ;
            }
        });
    }
    getDestination() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _venues_venues_page__WEBPACK_IMPORTED_MODULE_3__.VenuesPage
            });
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    let SelectedVenue = data.data;
                    let splitVenue = SelectedVenue.split("\\");
                    console.log(splitVenue);
                    this.postData.destinationId = splitVenue[0];
                    this.postData.destination = splitVenue[1];
                }
            });
            return yield modal.present();
        });
    }
    search() {
        if (this.validateInputs()) {
            if (this.postData.Date != "" && this.postData.destinationId == "") {
                let SearchDate = [{ "Date": (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(this.postData.Date), "yyyy-MM-dd") }];
                let navigationExtras = {
                    queryParams: {
                        special: JSON.stringify(SearchDate)
                    }
                };
                this.router.navigate(['/venuebydate'], navigationExtras);
            }
            else if (this.postData.Date != "" && this.postData.destinationId != "") {
                let SearchByDateName = [{ "Date": (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(this.postData.Date), "yyyy-MM-dd"), "destinationId": this.postData.destinationId }];
                let navigationExtras = {
                    queryParams: {
                        special: JSON.stringify(SearchByDateName)
                    }
                };
                this.router.navigate(['/search-venueby-date-name'], navigationExtras);
            }
        }
    }
    onDetailsClick(Id, Name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            let VenueId = Id;
            const modal = yield this.modalController.create({
                component: _venuedetails_venuedetails_page__WEBPACK_IMPORTED_MODULE_5__.VenuedetailsPage,
                componentProps: { VenueId }
            });
            return yield modal.present();
        });
    }
    clearVenue() {
        debugger;
        this.postData.destination = '';
        this.postData.destinationId = '';
    }
    alerrt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertController.create({
                message: 'Some thing went wrong. Please try again later.',
                buttons: ['ok']
            });
            yield this.alert.present();
        });
    }
    onLogoutClick() {
        this.storage.clear();
        window.location.reload();
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 8043:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border-radius: 5px;\n}\n\n.section1 {\n  background: #2f3b69 !important;\n  text-align: center;\n  padding: 0px;\n}\n\n.section1 .value {\n  color: #2f3b69;\n  font-weight: 300;\n}\n\n.section1 ion-item {\n  --background: #2f3b69;\n  --color: #ffffff;\n  font-weight: 300;\n  font-family: \"Courier New\", Courier, monospace;\n  --highlight-background: #2f3b69;\n}\n\n.section1 ion-item ion-label {\n  color: #ffffff;\n}\n\n.section1 ion-button {\n  --background: #ffffff;\n  --color: var(--ion-color-color1);\n  --background-activated: #ffffff;\n}\n\n#popular_hotels ion-list-header ion-label {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\n#popular_hotels ion-slides,\n#popular_hotels .swiper-container {\n  width: 100%;\n  height: 200px;\n}\n\n#popular_hotels .swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n  border-radius: 10px;\n}\n\n#popular_hotels .slider .section_1 {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  text-align: left;\n  margin: 0;\n}\n\n#popular_hotels .slider .section_2 {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  text-align: left;\n  margin: 0;\n  color: white;\n  text-shadow: 0 1px 0 black;\n}\n\n#popular_hotels .slider .section_2 h2 {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQTBDQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBdkNKOztBQXlDSTtFQUNJLGNBQUE7RUFFQSxnQkFBQTtBQXhDUjs7QUE0Q0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLCtCQUFBO0FBM0NSOztBQTZDUTtFQUNJLGNBQUE7QUEzQ1o7O0FBK0NJO0VBQ0kscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBN0NSOztBQWtESTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBL0NSOztBQW1ESTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtBQWpEUjs7QUFvREk7RUFDSSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUFsRFI7O0FBc0RRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQXBEWjs7QUF1RFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBckRaOztBQXdEWTtFQUNJLGVBQUE7QUF0RGhCIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi8vICNwb3B1bGFyX2hvdGVscyB7XHJcbi8vICAgICAuaXRlbSB7XHJcbi8vICAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAxMzdweDtcclxuXHJcbi8vICAgICAgICAgICAgIC5wYWNrYWdlc190aHVtYm5haWwge1xyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzdweDtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLm5hbWUge1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpb24taWNvbiB7XHJcbi8vICAgICAgICAgICAvLyAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaW9uLW5vdGUge1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1jYXJkIHtcclxuLy8gICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB0Yi1ybDtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2I2OTtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5zZWN0aW9uMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmYzYjY5ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgICBjb2xvcjogIzJmM2I2OTtcclxuICAgICAgICAvLyBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjNiNjk7XHJcbiAgICAgICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICMyZjNiNjk7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcclxuICAgIH1cclxufVxyXG5cclxuI3BvcHVsYXJfaG90ZWxzIHtcclxuICAgIGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI3NsaWRlclxyXG4gICAgaW9uLXNsaWRlcyxcclxuICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zd2lwZXItc2xpZGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXIge1xyXG4gICAgICAgIC5zZWN0aW9uXzEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlY3Rpb25fMiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgYmxhY2s7XHJcblxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-label>Vacant Marks</ion-label>\r\n    <i slot=\"end\" class=\"icon icon-power icon-small\" *ngIf='logoutbtn' style=\"padding-right: 1%; color: white;\" (click)=\"onLogoutClick()\"></i>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid class=\"section1\" style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; margin-left: 5px; margin-right: 5px;\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Search Venue</ion-label>\r\n            <ion-input type=\"text\" (click)=\"getDestination()\" placeholder=\"Please Select\" name=\"destination\"\r\n             [(ngModel)]=\"postData.destination\"></ion-input>\r\n             <ion-icon style=\"padding-top: 20px;\" slot=\"end\" *ngIf='postData.destinationId' (click)='clearVenue()' name=\"close-circle\"></ion-icon>  \r\n             <ion-icon style=\"padding-top: 20px;\" slot=\"end\" *ngIf=\"!isDestinationValid && !postData.destinationId\" name=\"remove-circle\"></ion-icon>\r\n          </ion-item>\r\n        </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Select Date</ion-label>\r\n                <ion-datetime displayFormat=\"DD MMMM YYYY\" placeholder=\"Please Select\" min=\"{{minDate}}\" max={{maxDate}} \r\n                [(ngModel)]=\"postData.Date\" [pickerOptions]=\"customPickerOption\">\r\n                </ion-datetime>\r\n                <ion-icon style=\"padding-top: 20px;\" slot=\"end\" *ngIf='postData.Date' name=\"close-circle\"></ion-icon>  \r\n                <ion-icon style=\"padding-top: 20px;\" slot=\"end\" *ngIf=\"!isDateValid && !postData.Date\" name=\"remove-circle\"></ion-icon>\r\n              </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col style=\"margin-bottom: 10px;\">\r\n            <ion-button expand=\"block\" (click)=\"search()\">Search</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n  \r\n  <div style=\"padding-top: 10px;\" id=\"popular_hotels\" *ngIf='venues.length > 0'>\r\n    <ion-list-header>\r\n      <ion-label color=\"dark\">Popular Venues</ion-label>\r\n    </ion-list-header>\r\n    <ion-slides class=\"ion-padding slider\" #slider [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let item of venues\" (click)=\"onDetailsClick(item.Id)\"\r\n              [ngStyle]=\"{'background' : 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' + item.EncodeLogo + ')'}\">\r\n        <div class=\"section_2\">\r\n          <h2>{{item.Name}}</h2>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n\r\n  <div style=\"padding-top: 10px;\" id=\"popular_hotels\" *ngIf='skeletonStop == 0 && venues.length == 0'>\r\n    <ion-list-header>\r\n      <ion-skeleton-text animated style=\"width:40%\"></ion-skeleton-text>\r\n    </ion-list-header>\r\n     <ion-item lines=\"none\">\r\n    <ion-slides class=\"ion-padding slider\" #slider [options]=\"slideOpts\">\r\n      <ion-slide>\r\n        <ion-thumbnail slot=\"start\" style=\"width: 100%; height: 100%; border-radius: 25px;\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n      </ion-slide>\r\n    </ion-slides>\r\n      </ion-item>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map