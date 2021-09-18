(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["default-src_app_login_login_page_ts"],{

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
    ngOnInit() {
    }
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
                //message: this.translate.instant('pleasewait'),
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                spinner: 'circular'
            });
            this.loading.present();
            if (this.validateInputs()) {
                debugger;
                // this.authService.login(this.postData);
                // this.httpService.getUserDetail('api/userlogin/VerifyLogin', this.postData).subscribe((res: any) => {
                this.httpService.getUserDetail('api/Customer/VerifyCustomer', this.postData).subscribe((res) => {
                    if (res.msg == "succuss") {
                        console.log(res);
                        this.storage.set("userdetails", res).then(response => {
                            console.log(response);
                            this.loading.dismiss();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <!-- Back Button -->\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" routerLink=\"\" routerDirection=\"root\" (click)=\"close()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Contents -->\n<ion-content id=\"signin\" [fullscreen]=\"true\" class=\"ion-padding\">\n  <div id=\"section1\">\n    <!-- SignIn Form -->\n    <form>\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\n            <!-- Title -->\n            <div class=\"ion-padding\">\n              <h2>Sign In</h2>\n            </div>\n            \n            <div class=\"ion-padding-bottom ion-padding-top\">\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <ion-icon name=\"mail\"></ion-icon>\n                </ion-label>\n                <ion-input type=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"postData.EmailID\"></ion-input>\n                <ion-icon *ngIf=\"!isUsernameValid\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\n              </ion-item>\n            </div>\n\n            <!-- Password -->\n            <ion-item lines=\"none\">\n              <ion-label>\n                <ion-icon name=\"eye\"></ion-icon>\n              </ion-label>\n              <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"postData.Password\">\n              </ion-input>\n              <ion-icon *ngIf=\"!isPasswordValid\" class=\"icon-small\" name=\"remove-circle\"></ion-icon>\n            </ion-item>\n\n            <!-- Forget Password Button -->\n            <ion-button expand=\"block\" color=\"medium\" fill=\"clear\">\n              <span>Forget Password?</span>\n            </ion-button>\n\n\n            <!-- Sign In Button -->\n            <div class=\"buttons ion-padding\">\n              <ion-button expand=\"full\" id=\"#button\" fill=\"outline\" shape=\"round\" (click)=\"loginAction()\">\n                <ion-text><strong>Sign In</strong></ion-text>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n\n  <!-- SignUp Buttons -->\n  <div id=\"section2\">\n    <ion-button fill=\"clear\" color=\"dark\" (click)=\"SignUp()\">\n      <ion-text color=\"medium\">Don't Have An Account? \n        <ion-text>\n          <b>Sign Up</b>\n        </ion-text>\n      </ion-text>\n    </ion-button>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_login_login_page_ts.js.map