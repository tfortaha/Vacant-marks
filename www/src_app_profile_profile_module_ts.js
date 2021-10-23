(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 2907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.page */ 6825);







let ProfilePage = class ProfilePage {
    constructor(storage, modalCtrl) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.IsLogin = [];
        this.logoutbtn = false;
        this.storage.get("userdetails").then((res) => {
            if (res != null) {
                this.logoutbtn = true;
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get("userdetails").then((res) => {
                if (res != null) {
                    this.IsLogin = res;
                    this.data = res.result;
                    console.log(this.data);
                }
            });
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage,
                cssClass: 'login-modal'
            });
            modal.onWillDismiss().then((data) => {
                let SelectedVenue = data.data;
                if (data.data != null) {
                    let splitVenue = SelectedVenue.split("\\");
                    let Sdata = { "EmailID": splitVenue[0], "FirstName": splitVenue[1], "LastName": splitVenue[2], "UserName": splitVenue[3], "Mobile1": splitVenue[4], "CNIC": splitVenue[5], "Address": splitVenue[6], };
                    this.data = Sdata;
                    console.log(data);
                }
            });
            modal.present();
        });
    }
    onLogoutClick() {
        this.storage.clear();
        window.location.reload();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item ion-avatar {\n  width: 100px;\n  height: 100px;\n}\n.item .name {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.item .edit-profile {\n  font-size: 16px;\n  color: #6d6d6d;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRlIiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtcHJvZmlsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 2907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n    <i slot=\"end\" class=\"icon icon-power icon-small\" *ngIf='logoutbtn' style=\"padding-right: 1%; color: white;\" (click)=\"onLogoutClick()\"></i>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"background\">\n  <!-- Profile Details -->\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img style=\"vertical-align: middle;\" src=\"assets/DetailsImgs/avatar.png\">\n      </ion-avatar>\n\n      <div *ngIf=\"data != null\">\n        <ion-label class=\"ion-text-wrap\" *ngIf=\"data.FirstName !== '' || data.FirstName !== null || data.FirstName !== undefined\">\n          <h4 class=\"name\">{{data.FirstName}} {{data.LastName}}</h4>\n          <!-- <ion-text class=\"edit-profile\" (click)=\"gotoEditProfile()\">Edit profile</ion-text> -->\n        </ion-label>\n      </div>\n\n      <div *ngIf=\"data == null\">\n        <ion-label class=\"ion-text-wrap\">\n          <h1 style=\"padding-bottom: 3px;\">Login</h1>\n          <ion-text class=\"edit-profile\" (click)=\"login()\">Login or Create an Account.</ion-text>\n        </ion-label>\n      </div>\n\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf=\"data == null\">\n    <ion-list lines=\"full\" class=\"ion-padding-top\">\n      <ion-item> </ion-item>\n      <ion-item (click)=\"login()\">\n        <ion-icon color=\"medium\" slot=\"end\" name=\"log-out\"></ion-icon>\n        <ion-label class=\"ion-padding\">Login or Register</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"data != null\">\n    <ion-list>\n      <!-- <ion-item-divider>{{'BasicInformation' | translate }}</ion-item-divider> -->\n      <ion-item\n        *ngIf=\"data.UserName !== '' || data.UserName !== null || data.UserName !== undefined\">\n        <ion-label stacked>User name</ion-label>\n        <ion-label>{{data.UserName}}</ion-label>\n      </ion-item>\n\n      <ion-item\n        *ngIf=\"data.EmailID !== '' || data.EmailID !== null || data.EmailID !== undefined\">\n        <ion-label stacked>Email </ion-label>\n        <ion-label>{{data.EmailID}}</ion-label>\n      </ion-item>\n\n      <ion-item\n      *ngIf=\"data.Mobile1 !== '' || data.Mobile1 !== null || data.Mobile1 !== undefined\">\n      <ion-label stacked>Mobile # </ion-label>\n      <ion-label>{{data.Mobile1}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      *ngIf=\"data.CNIC !== '' || data.CNIC !== null || data.CNIC !== undefined\">\n      <ion-label stacked>CNIC # </ion-label>\n      <ion-label>{{data.CNIC}}</ion-label>\n    </ion-item>\n\n    <ion-item\n      *ngIf=\"data.Address !== '' || data.Address !== null || data.Address !== undefined\">\n      <ion-label stacked>Address </ion-label>\n      <ion-label>{{data.Address}}</ion-label>\n    </ion-item>\n\n    </ion-list>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map