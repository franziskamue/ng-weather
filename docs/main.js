(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/zipcode-entry/zipcode-entry.component */ 3813);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/location.service */ 1494);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/weather.service */ 2170);
/* harmony import */ var _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/current-conditions/current-conditions.component */ 6263);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _shared_components_tabs_group_tabs_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/tabs-group/tabs-group.component */ 509);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/storage.service */ 2483);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent, _shared_components_tabs_group_tabs_group_component__WEBPACK_IMPORTED_MODULE_9__.TabsGroupComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  })],
  providers: [_shared_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService, _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__.StorageService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);



const appRoutes = [{
  path: '',
  component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 6263:
/*!*******************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 2923);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 4207);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/location.service */ 1494);
/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/weather.service */ 2170);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_shared_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__.WeatherService);
    // Signal to store the array of ConditionsAndZip objects
    this.currentConditionsForLocations = this.weatherService.getCurrentConditions();
    // compute the tabs from the currentConditionsForLocations
    this.tabContents = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => {
      return this.currentConditionsForLocations().map(conditionAndZip => {
        return {
          tabName: `${conditionAndZip.data.name} (${conditionAndZip.zip})`,
          tabIdentifier: conditionAndZip.zip
        };
      });
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
      const locations = this.locationService.getLocations();
      this.weatherService.loadCurrentConditionsForLocations(locations());
    }, {
      allowSignalWrites: true
    });
  }
  removeWeatherTab(index) {
    this.locationService.removeLocation(this.tabContents()[index].tabIdentifier);
  }
  static #_ = this.ctorParameters = () => [];
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 726:
/*!***********************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 5422);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 8314);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/weather.service */ 2170);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4766:
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 3813:
/*!*********************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/location.service */ 1494);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    this.service.addLocation(zipcode);
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 509:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tabs-group/tabs-group.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsGroupComponent: () => (/* binding */ TabsGroupComponent)
/* harmony export */ });
/* harmony import */ var _tabs_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-group.component.html?ngResource */ 2340);
/* harmony import */ var _tabs_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-group.component.css?ngResource */ 1876);
/* harmony import */ var _tabs_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabsGroupComponent = class TabsGroupComponent {
  constructor() {
    this.tabContents = [];
    this.removeTabEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.selectedTabIndex = 0;
  }
  selectTab(newTabIndex) {
    this.selectedTabIndex = newTabIndex;
  }
  removeTab(index) {
    this.selectedTabIndex = 0;
    this.removeTabEmitter.emit(index);
  }
  static #_ = this.propDecorators = {
    tabContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    removeTabEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
TabsGroupComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tabs-group',
  template: _tabs_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsGroupComponent);


/***/ }),

/***/ 1494:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/location.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 2483);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = "locations";
let LocationService = class LocationService {
  constructor() {
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService);
    this.locations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    let locString = this.storageService.getDataFromLocalStorage(LOCATIONS);
    if (locString) {
      this.locations.update(() => JSON.parse(locString));
    }
  }
  getLocations() {
    return this.locations.asReadonly();
  }
  addLocation(zipCode) {
    this.locations.update(values => [...values, zipCode]);
    this.storageService.saveDataInLocalStorage(LOCATIONS, this.locations());
  }
  removeLocation(zipCode) {
    this.locations.update(values => values.filter(loc => loc !== zipCode));
    this.storageService.saveDataInLocalStorage(LOCATIONS, this.locations());
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 2483:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let StorageService = class StorageService {
  constructor() {
    this.DATA_VALID_TIME_IN_MINUTES = 120;
  }
  saveDataInLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  saveDataInLocalStorageWithTimestamp(key, data) {
    const now = new Date().getTime();
    const dataWithTimestamp = {
      ...data,
      timestamp: now
    };
    this.saveDataInLocalStorage(key, dataWithTimestamp);
  }
  removeDataFromLocalStorage(key) {
    localStorage.removeItem(key);
  }
  getDataFromLocalStorage(key, checkIfValid = false) {
    const retrievedData = this.retrieveFromLocalStorage(key);
    if (checkIfValid) {
      const isDataValid = this.checkIfDataIsValid(retrievedData);
      if (!isDataValid) {
        // delete invalid data
        this.removeDataFromLocalStorage(key);
        return null;
      }
    }
    return retrievedData;
  }
  checkIfDataIsValid(data) {
    if (data) {
      const parsedData = JSON.parse(data);
      const now = new Date().getTime();
      const timeStampForData = parsedData.timestamp;
      // check time difference between time now and timestamp of data in minutes
      const timeDifferenceInMinutes = (now - timeStampForData) / (1000 * 60);
      return this.DATA_VALID_TIME_IN_MINUTES > timeDifferenceInMinutes;
    }
    return false;
  }
  retrieveFromLocalStorage(key) {
    return localStorage.getItem(key);
  }
};
StorageService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], StorageService);


/***/ }),

/***/ 2170:
/*!****************************************************!*\
  !*** ./src/app/shared/services/weather.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 2483);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;





let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'https://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  static #_5 = this.FORECAST_KEY = 'forecast-';
  static #_6 = this.CONDITIONS_KEY = 'conditions-';
  constructor(http) {
    this.http = http;
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService);
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  addCurrentConditions(zipcode) {
    const key = WeatherService_1.CONDITIONS_KEY + zipcode;
    const conditionInStorage = this.storageService.getDataFromLocalStorage(key, true);
    if (conditionInStorage) {
      const conditionAndZipFromStorage = JSON.parse(conditionInStorage);
      this.updateCurrentConditions(zipcode, conditionAndZipFromStorage);
    } else {
      this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`).subscribe(result => {
        this.storageService.saveDataInLocalStorageWithTimestamp(key, result);
        this.updateCurrentConditions(zipcode, result);
      });
    }
  }
  updateCurrentConditions(zip, currentConditions) {
    this.currentConditions.update(existingConditions => [...existingConditions, {
      zip: zip,
      data: currentConditions
    }]);
  }
  loadCurrentConditionsForLocations(locations) {
    // reset current conditions
    this.currentConditions.set([]);
    locations.forEach(location => {
      this.addCurrentConditions(location);
    });
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    const key = WeatherService_1.FORECAST_KEY + zipcode;
    const conditionInStorage = this.storageService.getDataFromLocalStorage(key, true);
    if (conditionInStorage) {
      const parsedData = JSON.parse(conditionInStorage);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(parsedData);
    } else {
      return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(data => this.storageService.saveDataInLocalStorageWithTimestamp(key, data)));
    }
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
  static #_7 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], WeatherService);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4207:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.weather-content {
    display: flex;
}

.weather-description {
    margin-right: 5em;
}

.weather-heading {
    font-size: 1.4em;

}
`, "",{"version":3,"sources":["webpack://./src/app/components/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;;AAEpB","sourcesContent":[".weather-content {\n    display: flex;\n}\n\n.weather-description {\n    margin-right: 5em;\n}\n\n.weather-heading {\n    font-size: 1.4em;\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8314:
/*!***********************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1876:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/tabs-group/tabs-group.component.css?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
    cursor: pointer;
}
.flex {
    display: flex;
    justify-content: space-between;
}


.tabs-container {
    width: 100%;
    overflow: hidden;
}

.tabs {
    display: flex;
}

.tab {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    margin-right: 4px;
    color: white;
    background-color: #2d5c88;
    cursor: pointer;
}

.tab.active {
    background-color: #4a79a3;
    font-weight: bold;
}

.tab button {
    background: none;
    border: none;
    color: white;
    margin-left: 8px;
    cursor: pointer;
    font-size: 14px;
}

.tab button:hover {
    color: #ccc;
}

.content {
    padding: 16px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
}

.content p {
    margin: 4px 0;
}

.content a {
    color: #2d5c88;
    text-decoration: none;
}

.content a:hover {
    text-decoration: underline;
}
`, "",{"version":3,"sources":["webpack://./src/app/shared/components/tabs-group/tabs-group.component.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;;;AAGA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":[".close {\n    cursor: pointer;\n}\n.flex {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n.tabs-container {\n    width: 100%;\n    overflow: hidden;\n}\n\n.tabs {\n    display: flex;\n}\n\n.tab {\n    display: flex;\n    align-items: center;\n    padding: 8px 16px;\n    margin-right: 4px;\n    color: white;\n    background-color: #2d5c88;\n    cursor: pointer;\n}\n\n.tab.active {\n    background-color: #4a79a3;\n    font-weight: bold;\n}\n\n.tab button {\n    background: none;\n    border: none;\n    color: white;\n    margin-left: 8px;\n    cursor: pointer;\n    font-size: 14px;\n}\n\n.tab button:hover {\n    color: #ccc;\n}\n\n.content {\n    padding: 16px;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n}\n\n.content p {\n    margin: 4px 0;\n}\n\n.content a {\n    color: #2d5c88;\n    text-decoration: none;\n}\n\n.content a:hover {\n    text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 2923:
/*!********************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (tabContents().length > 0 && currentConditionsForLocations().length > 0) {\n    <app-tabs-group [tabContents]=\"tabContents()\" (removeTabEmitter)=\"removeWeatherTab($event)\" #tabsGroupComponent>\n        @if (currentConditionsForLocations()[tabsGroupComponent.selectedTabIndex]; as selectedCondition) {\n            <div class=\"weather-content\">\n                <div class=\"weather-description\">\n                    <div class=\"weather-heading\"><p>Current conditions: {{selectedCondition.data.weather[0]?.description}}</p></div>\n                    <div class=\"weather-heading\"><p>Temperatures today:</p></div>\n                    <p>Current {{ selectedCondition.data.main.temp }} °F - Max {{ selectedCondition.data.main.temp_max }} - Min {{ selectedCondition.data.main.temp_min }}</p>\n                    <p>\n                        <a [routerLink]=\"['/forecast', selectedCondition.zip]\">Show 5-day forecast\n                            for {{ selectedCondition.data.name }}</a>\n                    </p>\n                </div>\n                <div>\n                    <img [src]=\"weatherService.getWeatherIcon(selectedCondition.data.weather[0].id)\" alt=\"weatherimage\"/>\n                </div>\n            </div>\n        }\n    </app-tabs-group>\n}\n";

/***/ }),

/***/ 5422:
/*!************************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\n\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n";

/***/ }),

/***/ 595:
/*!**************************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n\n  <app-zipcode-entry> </app-zipcode-entry>\n  <app-current-conditions></app-current-conditions>\n</div>\n";

/***/ }),

/***/ 2647:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode:</h2>\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\" >\n    Add location\n  </button>\n</div>\n";

/***/ }),

/***/ 2340:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/tabs-group/tabs-group.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tabs-container\">\n    <!-- Tabs Section -->\n    <div class=\"tabs\">\n        <div *ngFor=\"let tab of tabContents; let i = index\"\n             [class.active]=\"i === selectedTabIndex\"\n             (click)=\"selectTab(i)\"\n             class=\"tab\">\n            {{tab.tabName}}\n            <button (click)=\"removeTab(i, $event)\">X</button>\n        </div>\n    </div>\n\n    <!-- Content Section -->\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map