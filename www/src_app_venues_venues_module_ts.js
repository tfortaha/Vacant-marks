(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_venues_venues_module_ts"],{

/***/ 8798:
/*!*************************************************!*\
  !*** ./src/app/venues/venues-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuesPageRoutingModule": () => (/* binding */ VenuesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _venues_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venues.page */ 6547);




const routes = [
    {
        path: '',
        component: _venues_page__WEBPACK_IMPORTED_MODULE_0__.VenuesPage
    }
];
let VenuesPageRoutingModule = class VenuesPageRoutingModule {
};
VenuesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VenuesPageRoutingModule);



/***/ }),

/***/ 3930:
/*!*****************************************!*\
  !*** ./src/app/venues/venues.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuesPageModule": () => (/* binding */ VenuesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _venues_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venues-routing.module */ 8798);
/* harmony import */ var _venues_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venues.page */ 6547);







let VenuesPageModule = class VenuesPageModule {
};
VenuesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _venues_routing_module__WEBPACK_IMPORTED_MODULE_0__.VenuesPageRoutingModule
        ],
        declarations: [_venues_page__WEBPACK_IMPORTED_MODULE_1__.VenuesPage]
    })
], VenuesPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_venues_venues_module_ts.js.map