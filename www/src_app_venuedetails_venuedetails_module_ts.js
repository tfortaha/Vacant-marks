(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_venuedetails_venuedetails_module_ts"],{

/***/ 9618:
/*!*************************************************************!*\
  !*** ./src/app/venuedetails/venuedetails-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuedetailsPageRoutingModule": () => (/* binding */ VenuedetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _venuedetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venuedetails.page */ 7924);




const routes = [
    {
        path: '',
        component: _venuedetails_page__WEBPACK_IMPORTED_MODULE_0__.VenuedetailsPage
    }
];
let VenuedetailsPageRoutingModule = class VenuedetailsPageRoutingModule {
};
VenuedetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VenuedetailsPageRoutingModule);



/***/ }),

/***/ 7631:
/*!*****************************************************!*\
  !*** ./src/app/venuedetails/venuedetails.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuedetailsPageModule": () => (/* binding */ VenuedetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _venuedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venuedetails-routing.module */ 9618);
/* harmony import */ var _venuedetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venuedetails.page */ 7924);







let VenuedetailsPageModule = class VenuedetailsPageModule {
};
VenuedetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _venuedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.VenuedetailsPageRoutingModule
        ],
        declarations: [_venuedetails_page__WEBPACK_IMPORTED_MODULE_1__.VenuedetailsPage]
    })
], VenuedetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_venuedetails_venuedetails_module_ts.js.map