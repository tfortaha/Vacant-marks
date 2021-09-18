(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["default-src_app_registration_registration_page_ts"],{

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
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.page.html */ 2657);
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
            this.loading = yield this.loadingController.create({
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            this.loading.present();
            if (this.validateInputs()) {
                debugger;
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

/***/ 2657:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" routerLink=\"\" routerDirection=\"root\" (click)=\"close()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"signup\" [fullscreen]=\"true\" class=\"ion-padding\">\n  <div id=\"section1\">\n    <form>\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div class=\"ion-padding\">\n              <h2>Create New Account</h2>\n            </div>\n\n            <div style=\"padding-top: 10px; padding-bottom: 10px;\">\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <ion-icon name=\"person\"></ion-icon>\n                </ion-label>\n                <ion-input type=\"text\" placeholder=\"First Name\" name=\"FirstName\" [(ngModel)]=\"postData.FirstName\"></ion-input>\n                <ion-icon class=\"icon-small\" slot=\"end\" *ngIf=\"!isfname\" name=\"remove-circle\"></ion-icon>\n              </ion-item>\n              </div>\n\n              <div style=\"padding-bottom: 10px;\">\n                <ion-item lines=\"none\">\n                  <ion-label>\n                    <ion-icon name=\"person\"></ion-icon>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"Last Name\" name=\"LastName\" [(ngModel)]=\"postData.LastName\"></ion-input>\n                  <ion-icon slot=\"end\" class=\"icon-small\"  *ngIf=\"!islname\" name=\"remove-circle\"></ion-icon>\n                </ion-item>\n              </div>\n\n              <div style=\"padding-bottom: 10px;\">\n                <ion-item lines=\"none\"> \n                  <ion-label>\n                    <ion-icon name=\"mail\"></ion-icon>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"Email\" name=\"EmailID\" [(ngModel)]=\"postData.EmailID\"></ion-input>\n                  <ion-icon slot=\"end\" class=\"icon-small\" *ngIf=\"!isemail\" name=\"remove-circle\"></ion-icon>\n                </ion-item>\n              </div>\n\n              <div style=\"padding-bottom: 10px;\">\n                <ion-item lines=\"none\">\n                  <ion-label>\n                    <ion-icon name=\"mail\"></ion-icon>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"Mobile #\" name=\"Mobile1\" [(ngModel)]=\"postData.Mobile1\"></ion-input>\n                  <ion-icon slot=\"end\" class=\"icon-small\" *ngIf=\"!ismobileno\" name=\"remove-circle\"></ion-icon>\n                </ion-item>\n              </div>\n\n              <div style=\"padding-bottom: 10px;\">\n                <ion-item lines=\"none\">\n                  <ion-label>\n                    <ion-icon name=\"mail\"></ion-icon>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"CNIC #\" name=\"CNIC\" [(ngModel)]=\"postData.CNIC\"></ion-input>\n                  <ion-icon slot=\"end\" *ngIf=\"!iscnic\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\n                </ion-item>\n              </div>\n              \n              <div style=\"padding-bottom: 10px;\">\n                <ion-item lines=\"none\">\n                  <ion-label>\n                    <ion-icon name=\"mail\"></ion-icon>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"Address\" name=\"Address\" [(ngModel)]=\"postData.Address\"></ion-input>\n                  <ion-icon slot=\"end\" *ngIf=\"!isaddress\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\n                </ion-item>\n              </div>\n\n              <div style=\"padding-bottom: 10px;\">\n                <ion-item lines=\"none\">\n                  <ion-label>\n                    <ion-icon name=\"person\"></ion-icon>\n                  </ion-label>\n                  <ion-input type=\"email\" placeholder=\"User Name\" name=\"UserName\" [(ngModel)]=\"postData.UserName\"></ion-input>\n                  <ion-icon slot=\"end\" *ngIf=\"!isusername\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\n                </ion-item>\n              </div>\n\n              <div style=\"padding-bottom: 10px;\">\n                <ion-item lines=\"none\">\n                  <ion-label>\n                    <ion-icon name=\"eye\"></ion-icon>\n                  </ion-label>\n                  <ion-input type=\"password\" placeholder=\"Password\" name=\"Password\" [(ngModel)]=\"postData.Password\"></ion-input>\n                  <ion-icon slot=\"end\" *ngIf=\"!ispassword\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\n                </ion-item>\n            </div>\n\n            <!-- Signup Button -->\n            <div class=\"buttons ion-padding\">\n              <ion-button expand=\"full\" id=\"#button\" fill=\"outline\" shape=\"round\" (click)=\"signUp()\">\n                <ion-text><strong>Sign Up</strong></ion-text>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_registration_registration_page_ts.js.map