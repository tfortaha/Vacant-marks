(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_tab_tab_module_ts"],{

/***/ 3807:
/*!*******************************************!*\
  !*** ./src/app/tab/tab-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageRoutingModule": () => (/* binding */ TabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.page */ 9078);




const routes = [
    {
        path: 'tabs',
        component: _tab_page__WEBPACK_IMPORTED_MODULE_0__.TabPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_venuedetails_venuedetails_page_ts"), __webpack_require__.e("default-src_app_venues_venues_page_ts"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 4814)).then(m => m.DashboardPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_registration_registration_page_ts"), __webpack_require__.e("default-src_app_login_login_page_ts"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabPageRoutingModule = class TabPageRoutingModule {
};
TabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabPageRoutingModule);



/***/ }),

/***/ 4714:
/*!***********************************!*\
  !*** ./src/app/tab/tab.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageModule": () => (/* binding */ TabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-routing.module */ 3807);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page */ 9078);







let TabPageModule = class TabPageModule {
};
TabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabPageRoutingModule
        ],
        declarations: [_tab_page__WEBPACK_IMPORTED_MODULE_1__.TabPage]
    })
], TabPageModule);



/***/ }),

/***/ 9078:
/*!*********************************!*\
  !*** ./src/app/tab/tab.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPage": () => (/* binding */ TabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab.page.html */ 9293);
/* harmony import */ var _tab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page.scss */ 4846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TabPage = class TabPage {
    constructor() { }
    ngOnInit() {
    }
};
TabPage.ctorParameters = () => [];
TabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab',
        template: _raw_loader_tab_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabPage);



/***/ }),

/***/ 4846:
/*!***********************************!*\
  !*** ./src/app/tab/tab.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-bar {\n  --border: 0px;\n  --color-selected: var(--ion-color-color1);\n  --color: var(--cs-icon-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUNBQUE7RUFDQSx1Q0FBQTtBQUNKIiwiZmlsZSI6InRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XHJcbiAgICAtLWJvcmRlcjogMHB4O1xyXG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1jcy1pY29uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn0iXX0= */");

/***/ }),

/***/ 9293:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab/tab.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab_tab_module_ts.js.map