(self["webpackChunkvacant_marks"] = self["webpackChunkvacant_marks"] || []).push([["src_app_booking_booking_module_ts-src_app_services_http_service_ts"],{

/***/ 6698:
/*!***************************************************!*\
  !*** ./src/app/booking/booking-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPageRoutingModule": () => (/* binding */ BookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.page */ 710);




const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_0__.BookingPage
    }
];
let BookingPageRoutingModule = class BookingPageRoutingModule {
};
BookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingPageRoutingModule);



/***/ }),

/***/ 3911:
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPageModule": () => (/* binding */ BookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-routing.module */ 6698);
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.page */ 710);








let BookingPageModule = class BookingPageModule {
};
BookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingPageRoutingModule,
        ],
        declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_1__.BookingPage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder]
    })
], BookingPageModule);



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



/***/ })

}]);
//# sourceMappingURL=src_app_booking_booking_module_ts-src_app_services_http_service_ts.js.map