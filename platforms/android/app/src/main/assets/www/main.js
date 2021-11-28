(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    // {
    //   path: '',
    //   loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
    // },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab_tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab/tab.module */ 4714)).then(m => m.TabPageModule) },
    // {
    //   path: 'dashboard',
    //   loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
    // },
    {
        path: 'venues',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_venuedetails_venuedetails_page_ts"), __webpack_require__.e("default-src_app_venues_venues_page_ts"), __webpack_require__.e("src_app_venues_venues_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./venues/venues.module */ 3930)).then(m => m.VenuesPageModule)
    },
    {
        path: 'search-venue',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search-venue_search-venue_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-venue/search-venue.module */ 4269)).then(m => m.SearchVenuePageModule)
    },
    {
        path: 'venuebydate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-src_app_venuedetails_venuedetails_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_venuebydate_venuebydate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./venuebydate/venuebydate.module */ 4290)).then(m => m.VenuebydatePageModule)
    },
    {
        path: 'search-venueby-date-name',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-src_app_venuedetails_venuedetails_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_search-venueby-date-name_search-venueby-date-name_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search-venueby-date-name/search-venueby-date-name.module */ 2667)).then(m => m.SearchVenuebyDateNamePageModule)
    },
    {
        path: 'venuedetails',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_venuedetails_venuedetails_page_ts"), __webpack_require__.e("src_app_venuedetails_venuedetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./venuedetails/venuedetails.module */ 7631)).then(m => m.VenuedetailsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab_tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab/tab.module */ 4714)).then(m => m.TabPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'registration',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registration_registration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registration/registration.module */ 5375)).then(m => m.RegistrationPageModule)
    },
    {
        path: 'booking',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_booking_booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booking/booking.module */ 3911)).then(m => m.BookingPageModule)
    },
    {
        path: 'bookedvenues',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_bookedvenues_bookedvenues_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bookedvenues/bookedvenues.module */ 1149)).then(m => m.BookedvenuesPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'google-map',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_google-map_google-map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./google-map/google-map.module */ 7370)).then(m => m.GoogleMapPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/data.service */ 2468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 1524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/http.service */ 6858);
/* harmony import */ var _app_login_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/login/login.page */ 6825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);












let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, storage, ds, httpService, toastContr, modalCtrl, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.ds = ds;
        this.httpService = httpService;
        this.toastContr = toastContr;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.show = false;
        this.initializeApp();
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => {
                this.statusBar.backgroundColorByHexString('#2f3b69');
                // this.splashScreen.show();
                // this.statusBar.hide();
                this.storage.get("userdetails").then((res) => {
                    if (res != null) {
                        this.show = true;
                        this.ds.userdetails = res;
                    }
                    else {
                        //this.login();
                        this.router.navigateByUrl("");
                    }
                });
            });
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _app_login_login_page__WEBPACK_IMPORTED_MODULE_6__.LoginPage,
                cssClass: 'login-modal'
            });
            modal.onWillDismiss().then((data) => {
                let SelectedVenue = data.data;
                if (data.data != null) {
                    let splitVenue = SelectedVenue.split("\\");
                    let Sdata = { "EmailID": splitVenue[0], "FirstName": splitVenue[1], "LastName": splitVenue[2], "UserName": splitVenue[3], "Mobile1": splitVenue[4], "CNIC": splitVenue[5], "Address": splitVenue[6], };
                    window.location.reload();
                    // this.data = Sdata;
                    // console.log(data);
                }
            });
            modal.present();
        });
    }
    toast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastContr.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    signout() {
        debugger;
        this.splashScreen.show();
        this.storage.clear();
        window.location.reload();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 1524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 3494);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.IonicStorageModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registration_registration_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration/registration.page */ 9454);










let LoginPage = class LoginPage {
    constructor(authService, loadingController, httpService, storage, modalCtrl, toastController, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.httpService = httpService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.router = router;
        this.postData = {
            Password: '',
            EmailID: ''
        };
        this.isUsernameValid = true;
        this.isPasswordValid = true;
    }
    ionViewWillEnter() {
        this.clear();
    }
    ngOnInit() { }
    validateInputs() {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.postData.EmailID || this.postData.EmailID.length === 0) {
            this.isUsernameValid = false;
        }
        if (!this.postData.Password || this.postData.Password.length === 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    }
    loginAction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            this.loading.present();
            if (this.validateInputs()) {
                this.httpService.getUserDetail('api/Customer/VerifyCustomer', this.postData).subscribe((res) => {
                    if (res.msg == "succuss") {
                        console.log(res);
                        this.storage.set("userdetails", res).then(response => {
                            console.log(response);
                            this.loading.dismiss();
                            window.location.reload();
                            let result = res.result;
                            this.modalCtrl.dismiss(`${result.EmailID}\\ ${result.FirstName}\\ ${result.LastName}\\ ${result.UserName} \\ ${result.Mobile1} \\ ${result.CNIC} \\ ${result.Address}`);
                        });
                    }
                    else {
                        this.toast("Inccorrect Email or Password.");
                        this.loading.dismiss();
                    }
                }, err => {
                    this.loading.dismiss();
                });
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    toast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    SignUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _registration_registration_page__WEBPACK_IMPORTED_MODULE_4__.RegistrationPage,
                cssClass: 'registration-modal'
            });
            modal.onWillDismiss().then((data) => {
                console.log(data);
            });
            modal.present();
        });
    }
    clear() {
        this.postData.EmailID = "";
        this.postData.Password = "";
    }
    onEnter() {
        this.loginAction();
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 9454:
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.page.html */ 8242);
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page.scss */ 5078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);









let RegistrationPage = class RegistrationPage {
    constructor(authService, loadingController, httpService, storage, modalCtrl, toastController, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.httpService = httpService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.router = router;
        this.postData = {
            FirstName: '',
            LastName: '',
            Address: '',
            Mobile1: '',
            UserName: '',
            EmailID: '',
            Password: '',
            CNIC: '',
            IsActive: 'true',
            UserType: 1
        };
        this.isfname = true;
        this.islname = true;
        this.isaddress = true;
        this.ismobileno = true;
        this.isusername = true;
        this.isemail = true;
        this.ispassword = true;
        this.iscnic = true;
    }
    ngOnInit() {
    }
    validateInputs() {
        this.isfname = true;
        this.islname = true;
        this.isaddress = true;
        this.ismobileno = true;
        this.isusername = true;
        this.isemail = true;
        this.ispassword = true;
        this.iscnic = true;
        if (!this.postData.FirstName || this.postData.FirstName.length === 0) {
            this.isfname = false;
        }
        if (!this.postData.LastName || this.postData.LastName.length === 0) {
            this.islname = false;
        }
        if (!this.postData.Address || this.postData.Address.length === 0) {
            this.isaddress = false;
        }
        if (!this.postData.Mobile1 || this.postData.Mobile1.length === 0) {
            this.ismobileno = false;
        }
        if (!this.postData.UserName || this.postData.UserName.length === 0) {
            this.isusername = false;
        }
        if (!this.postData.EmailID || this.postData.EmailID.length === 0) {
            this.isemail = false;
        }
        if (!this.postData.Password || this.postData.Password.length === 0) {
            this.ispassword = false;
        }
        if (!this.postData.CNIC || this.postData.CNIC.length === 0) {
            this.iscnic = false;
        }
        return this.isfname && this.islname && this.isaddress && this.ismobileno && this.isusername && this.isemail &&
            this.ispassword && this.iscnic;
    }
    signUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.validateInputs()) {
                this.loading = yield this.loadingController.create({
                    //message: this.translate.instant('pleasewait'),
                    cssClass: 'custom-loading',
                    translucent: true,
                    showBackdrop: true,
                    spinner: 'circular'
                });
                this.loading.present();
                ;
                this.httpService.getUserDetail('api/Customer/Customer', this.postData).subscribe((res) => {
                    if (res) {
                        this.toast("Successfully! Now Login.");
                        this.close();
                        this.loading.dismiss();
                        console.log(res);
                    }
                }, err => {
                    this.loading.dismiss();
                    this.toast(err.error.Message);
                    console.log(err);
                });
            }
        });
    }
    toast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
RegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationPage);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);







let AuthService = class AuthService {
    constructor(loadingController, httpService, storage, platform, router, toastController) {
        this.loadingController = loadingController;
        this.httpService = httpService;
        this.storage = storage;
        this.platform = platform;
        this.router = router;
        this.toastController = toastController;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
    }
    ifLoggedIn() {
        this.storage.get('tokenData').then((response) => {
            if (response) {
                //this.authState.next(true);
            }
        });
    }
    login(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            this.loading.present();
            this.httpService.getUserDetail('api/userlogin/VerifyLogin', postData).subscribe((res) => {
                if (res) {
                    this.loading.dismiss();
                    // // Storing the User data.
                    // this.storage.set("tokenData", res).then((response) => {
                    //   // let Time = format(new Date(), "hh:mm:ss");
                    //   let Time = new Date();
                    //   var TokenGenerateTime = new Date(Time).getTime();
                    //   this.storage.set("TokenGenerateTime",TokenGenerateTime).then((response) => 
                    //   {
                    //       //console.log(TokenGenerateTime);
                    //       this.loading.dismiss();
                    //       this.storage.set("username",postData.username).then((response) => {
                    //         this.router.navigate( ["dashboard"]);
                    //         this.authState.next(true);
                    //       })
                    //   });
                    // });
                }
                else {
                    this.loading.dismiss();
                    // this.toastService.presentToast("incorrect password.");
                }
            }, (error) => {
                this.loading.dismiss();
                if (error.error.error_description == "Provided username and password is incorrect") {
                    // this.toastService.presentToast(this.translate.instant('LoginInvalid'));
                }
                else {
                    // this.toastService.presentToast(error.error.error_description);
                }
            });
        });
    }
    logout() {
        this.storage.remove('tokenData').then(res => {
            this.storage.clear();
            this.authState.next(false);
            this.router.navigate(['/login']);
        });
    }
    isAuthenticated() {
        return this.authState.value;
    }
};
AuthService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let DataService = class DataService {
    constructor() {
        this.DashboardData = [];
        this.VenuePageData = [];
        this.userdetails = [];
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

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
        headers.append('Access-Control-Request-Method', '*');
        headers.append('Access-Control-Allow-Origin', 'https://www.vacantmarks.com/');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100/');
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

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://www.vacantmarks.com/'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  z-index: auto;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-menu-button {\n  color: var(--ion-color-color1);\n}\n\n#signin {\n  --background: #f7f7f7 !important;\n  height: auto;\n}\n\n#signin #section1 {\n  height: auto;\n}\n\n#signin #section1 h2 {\n  font-size: 32px;\n  font-family: sans-serif;\n  font-weight: 600;\n}\n\n#signin #section1 ion-item {\n  padding: 5px;\n  border: 1px solid #fff;\n  border-radius: 64px;\n  box-shadow: 1px 1px 3px 0px #ccc;\n  background: #ffffff;\n}\n\n#signin #section1 ion-button span {\n  width: 100%;\n  text-align: end;\n}\n\n#signin #section2 {\n  text-align: center;\n  bottom: 5px;\n  padding: 10px;\n  position: absolute;\n  width: 100%;\n}\n\n#button {\n  background-color: #2f3b69;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFDUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ1o7O0FBRVE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFBWjs7QUFJWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRmhCOztBQU9JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxSOztBQVNBO0VBQ0kseUJBQUE7QUFOSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIHotaW5kZXg6IGF1dG87XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG59XHJcblxyXG4jc2lnbmluIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICNzZWN0aW9uMSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNjRweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4ICNjY2M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc2VjdGlvbjIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuI2J1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNiNjk7XHJcbn0iXX0= */");

/***/ }),

/***/ 5078:
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  z-index: auto;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-menu-button {\n  color: var(--ion-color-color1);\n}\n\n#signup {\n  --background: #f7f7f7 !important;\n  height: auto;\n}\n\n#signup #section1 {\n  height: auto;\n}\n\n#signup #section1 h2 {\n  font-size: 32px;\n  font-family: sans-serif;\n  font-weight: 600;\n}\n\n#signup #section1 ion-item {\n  padding: 5px;\n  border: 1px solid #fff;\n  border-radius: 64px;\n  box-shadow: 1px 1px 3px 0px #ccc;\n  background: #ffffff;\n}\n\n#signup #section1 ion-button span {\n  width: 100%;\n  text-align: end;\n}\n\n#signup #section2 {\n  text-align: center;\n  bottom: 5px;\n  padding: 10px;\n  position: absolute;\n  width: 100%;\n}\n\n#button {\n  background-color: #2f3b69;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBQ1E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNaOztBQUVRO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBQVo7O0FBSVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUZoQjs7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFMUjs7QUFTQTtFQUNJLHlCQUFBO0FBTkoiLCJmaWxlIjoicmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgei1pbmRleDogYXV0bztcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbn1cclxuXHJcbiNzaWdudXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgI3NlY3Rpb24xIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2NHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwcHggI2NjYztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzZWN0aW9uMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2I2OTtcclxufSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-app>\r\n  <ion-menu side=\"start\" menuId=\"pages\" type=\"overlay\" contentId=\"mainContent\">\r\n    <ion-header>\r\n      <ion-toolbar style=\"text-align: center;\">\r\n        <img style=\"width: 50%; align-items: center;\" src=\"assets/icon/VMSLogo.png\">\r\n        <ion-row>\r\n          <!-- <ion-col size=\"12\"><img src=\"assets/images/VMSLogo.png\"></ion-col> -->\r\n            <!-- <div>Vacand Mark</div> -->\r\n            <!-- <ion-fab style=\"padding-left:100px; padding-top:35px;\" vertical=\"top\" horizontal=\"start\">\r\n              <ion-button size=\"small\" color=\"none\" style=\"border: none;\">\r\n                <h5>Vaccand Mark</h5>\r\n              </ion-button>\r\n            </ion-fab> -->\r\n        </ion-row>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    \r\n    <ion-content>\r\n      <div *ngIf=\"show\">\r\n      <ion-list class=\"ion-padding\" lines=\"none\">\r\n        <ion-menu-toggle auto-hide=\"false\">\r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"['']\">\r\n            <i slot=\"start\" class=\"icon icon-home icon-small\"></i>\r\n            <h1 class=\"text-size-xs\">Dashboard</h1>\r\n          </ion-item>\r\n \r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"['/bookedvenues']\">\r\n            <ion-icon name=\"calendar-clear-outline\" style=\"color: #2f3b69;width: 8%; padding-left: 4px; padding-right: 12px; padding-top: 6px;\"></ion-icon>\r\n            <!-- <i slot=\"start\" class=\"icon icon-home icon-small\"></i> -->\r\n            <h1 class=\"text-size-xs\">Booked Venues</h1>\r\n          </ion-item>\r\n   <!--       \r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"['/customer']\">\r\n            <i slot=\"start\" class=\"icon icon-account icon-small\" style=\"color: #49b36f;\"></i>\r\n            <h1 class=\"text-size-xs\">{{ 'customer' | translate }}</h1>\r\n          </ion-item>\r\n\r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"['/customerrequest']\">\r\n            <i slot=\"start\" class=\"icon icon-plus-circle-outline icon-small\" style=\"color: #49b36f;\"></i>\r\n            <h1 class=\"text-size-xs\">{{ 'CustomerRequest' | translate }}</h1>\r\n          </ion-item> \r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"['/settings']\">\r\n            <i slot=\"start\" class=\"icon icon-settings icon-small\" style=\"color: #49b36f;\"></i>\r\n            <h1 class=\"text-size-xs\">settings</h1>\r\n          </ion-item>-->\r\n\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n      </div>\r\n      <div *ngIf=\"!show\">\r\n        <ion-list class=\"ion-padding\" lines=\"none\">\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item (click)=\"login()\">\r\n              <ion-icon color=\"medium\" slot=\"end\" name=\"log-out\"></ion-icon>\r\n              <ion-label class=\"ion-padding\">Login or Register</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </div>\r\n    </ion-content>\r\n    \r\n    <div *ngIf=\"show\">\r\n      <ion-footer class=\"ion-no-border\">\r\n        <div class=\"ion-padding\" >\r\n          <ion-button shape=\"round\" color=\"color1\" expand=\"full\" (click)=\"signout()\">\r\n            Signout</ion-button>\r\n        </div>\r\n      </ion-footer> \r\n    </div>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"mainContent\"></ion-router-outlet>\r\n</ion-app>");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n\r\n    <!-- Back Button -->\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"dark\" routerLink=\"\" routerDirection=\"root\" (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- Contents -->\r\n<ion-content id=\"signin\" [fullscreen]=\"true\" class=\"ion-padding\">\r\n  <div id=\"section1\">\r\n    <!-- SignIn Form -->\r\n    <form>\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n          <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n\r\n            <!-- Title -->\r\n            <div class=\"ion-padding\">\r\n              <h2>Sign In</h2>\r\n            </div>\r\n            \r\n            <div class=\"ion-padding-bottom ion-padding-top\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  <ion-icon name=\"mail\"></ion-icon>\r\n                </ion-label>\r\n                <ion-input type=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"postData.EmailID\"></ion-input>\r\n                <ion-icon *ngIf='!isUsernameValid' class=\"icon-small\" name=\"remove-circle\"></ion-icon>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <ion-item lines=\"none\">\r\n              <ion-label>\r\n                <ion-icon name=\"eye\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"postData.Password\">\r\n              </ion-input>\r\n              <div *ngIf='!isPasswordValid'>\r\n                <ion-icon class=\"icon-small\" name=\"remove-circle\"></ion-icon>\r\n              </div>\r\n              <!-- <ion-icon class=\"icon-small\" name=\"eye\"></ion-icon> -->\r\n            </ion-item>\r\n\r\n            <!-- Forget Password Button -->\r\n            <ion-button expand=\"block\" color=\"medium\" fill=\"clear\">\r\n              <span>Forget Password?</span>\r\n            </ion-button>\r\n\r\n\r\n            <!-- Sign In Button -->\r\n            <div class=\"buttons ion-padding\">\r\n              <ion-button expand=\"full\" id=\"#button\" fill=\"outline\" shape=\"round\" (click)=\"loginAction()\">\r\n                <ion-text><strong>Sign In</strong></ion-text>\r\n              </ion-button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n\r\n  <!-- SignUp Buttons -->\r\n  <div id=\"section2\">\r\n    <ion-button fill=\"clear\" color=\"dark\" (click)=\"SignUp()\">\r\n      <ion-text color=\"medium\">Don't Have An Account? \r\n        <ion-text>\r\n          <b>Sign Up</b>\r\n        </ion-text>\r\n      </ion-text>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 8242:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"dark\" routerLink=\"\" routerDirection=\"root\" (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"signup\" [fullscreen]=\"true\" class=\"ion-padding\">\r\n  <div id=\"section1\">\r\n    <form>\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n          <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n            <div class=\"ion-padding\">\r\n              <h2>Create New Account</h2>\r\n            </div>\r\n\r\n            <div style=\"padding-top: 10px; padding-bottom: 10px;\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  <ion-icon name=\"person\"></ion-icon>\r\n                </ion-label>\r\n                <ion-input type=\"text\" placeholder=\"First Name\" name=\"FirstName\" [(ngModel)]=\"postData.FirstName\"></ion-input>\r\n                <ion-icon class=\"icon-small\" slot=\"end\" *ngIf=\"!isfname\" name=\"remove-circle\"></ion-icon>\r\n              </ion-item>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>\r\n                    <ion-icon name=\"person\"></ion-icon>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" placeholder=\"Last Name\" name=\"LastName\" [(ngModel)]=\"postData.LastName\"></ion-input>\r\n                  <ion-icon slot=\"end\" class=\"icon-small\"  *ngIf=\"!islname\" name=\"remove-circle\"></ion-icon>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <ion-item lines=\"none\"> \r\n                  <ion-label>\r\n                    <ion-icon name=\"mail\"></ion-icon>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" placeholder=\"Email\" name=\"EmailID\" [(ngModel)]=\"postData.EmailID\"></ion-input>\r\n                  <ion-icon slot=\"end\" class=\"icon-small\" *ngIf=\"!isemail\" name=\"remove-circle\"></ion-icon>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>\r\n                    <ion-icon name=\"mail\"></ion-icon>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" placeholder=\"Mobile #\" name=\"Mobile1\" [(ngModel)]=\"postData.Mobile1\"></ion-input>\r\n                  <ion-icon slot=\"end\" class=\"icon-small\" *ngIf=\"!ismobileno\" name=\"remove-circle\"></ion-icon>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>\r\n                    <ion-icon name=\"mail\"></ion-icon>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" placeholder=\"CNIC #\" name=\"CNIC\" [(ngModel)]=\"postData.CNIC\"></ion-input>\r\n                  <ion-icon slot=\"end\" *ngIf=\"!iscnic\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\r\n                </ion-item>\r\n              </div>\r\n              \r\n              <div style=\"padding-bottom: 10px;\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>\r\n                    <ion-icon name=\"mail\"></ion-icon>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" placeholder=\"Address\" name=\"Address\" [(ngModel)]=\"postData.Address\"></ion-input>\r\n                  <ion-icon slot=\"end\" *ngIf=\"!isaddress\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>\r\n                    <ion-icon name=\"person\"></ion-icon>\r\n                  </ion-label>\r\n                  <ion-input type=\"email\" placeholder=\"User Name\" name=\"UserName\" [(ngModel)]=\"postData.UserName\"></ion-input>\r\n                  <ion-icon slot=\"end\" *ngIf=\"!isusername\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>\r\n                    <ion-icon name=\"eye\"></ion-icon>\r\n                  </ion-label>\r\n                  <ion-input type=\"password\" placeholder=\"Password\" name=\"Password\" [(ngModel)]=\"postData.Password\"></ion-input>\r\n                  <ion-icon slot=\"end\" *ngIf=\"!ispassword\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\r\n                </ion-item>\r\n            </div>\r\n\r\n            <!-- Signup Button -->\r\n            <div class=\"buttons ion-padding\">\r\n              <ion-button expand=\"full\" id=\"#button\" fill=\"outline\" shape=\"round\" (click)=\"signUp()\">\r\n                <ion-text><strong>Sign Up</strong></ion-text>\r\n              </ion-button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map