webpackJsonp(["main"],{

/***/ "../../../../../package.json":
/***/ (function(module, exports) {

module.exports = {"name":"Uzmantarih","version":"0.0.1","license":"MIT","scripts":{"ng":"ng","start":"ng serve --proxy-config proxy.config.json","build":"ng build --prod","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^5.2.3","@angular/cdk":"^5.1.1","@angular/common":"^5.2.0","@angular/compiler":"^5.2.0","@angular/core":"^5.2.0","@angular/flex-layout":"^2.0.0-beta.12","@angular/forms":"^5.2.0","@angular/http":"^5.2.0","@angular/material":"^5.1.1","@angular/platform-browser":"^5.2.0","@angular/platform-browser-dynamic":"^5.2.0","@angular/router":"^5.2.0","@ngx-translate/core":"^9.1.1","@ngx-translate/http-loader":"^2.0.1","core-js":"^2.4.1","hammerjs":"^2.0.8","ngx-logger":"^1.1.2","rxjs":"^5.5.6","zone.js":"^0.8.19"},"devDependencies":{"@angular/cli":"1.6.6","@angular/compiler-cli":"^5.2.0","@angular/language-service":"^5.2.0","@types/hammerjs":"^2.0.35","@types/jasmine":"~2.8.3","@types/jasminewd2":"~2.0.2","@types/node":"~6.0.60","codelyzer":"^4.0.1","jasmine-core":"~2.8.0","jasmine-spec-reporter":"~4.2.1","karma":"~2.0.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.1.2","ts-node":"~4.1.0","tslint":"~5.9.1","typescript":"~2.5.3"}}

/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fxFlex fxFlexFill>\n    <mat-sidenav #sideMenu>\n        <app-menu-bar></app-menu-bar>\n    </mat-sidenav>\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxFlexFill>\n        <header>\n            <router-outlet name=\"header\"></router-outlet>\n        </header>\n\n        <article fxFlex fxFlexFill>\n            <router-outlet></router-outlet>\n        </article>\n\n        <footer>\n            <router-outlet name=\"footer\"></router-outlet>\n        </footer>\n    </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_environment_app_environment__ = __webpack_require__("../../../../../src/app/core/environment/app-environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(app) {
        this.app = app;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuSubscription = this.app.getMenuBarService().sideNavToggleCalled
            .subscribe(function () {
            _this.sideMenu.toggle().then(function () {
            });
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.menuSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sideMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenav */])
    ], AppComponent.prototype, "sideMenu", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_environment_app_environment__["a" /* AppEnvironment */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_logger__ = __webpack_require__("../../../../ngx-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_environment_app_environment__ = __webpack_require__("../../../../../src/app/core/environment/app-environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_ui_ui_module__ = __webpack_require__("../../../../../src/app/core/ui/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_i18n_i18n_module__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_i18n_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_organization_organization_component__ = __webpack_require__("../../../../../src/app/dashboard/organization/organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__configuration_configuration_module__ = __webpack_require__("../../../../../src/app/configuration/configuration.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_routing_routing_module__ = __webpack_require__("../../../../../src/app/core/routing/routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_organization_organization_component__["a" /* OrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ngx_logger__["a" /* LoggerModule */].forRoot({
                    serverLoggingUrl: '/api/logs',
                    level: __WEBPACK_IMPORTED_MODULE_2_ngx_logger__["c" /* NgxLoggerLevel */].DEBUG,
                    serverLogLevel: __WEBPACK_IMPORTED_MODULE_2_ngx_logger__["c" /* NgxLoggerLevel */].ERROR
                }),
                __WEBPACK_IMPORTED_MODULE_14__core_routing_routing_module__["a" /* KPYSRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_13__configuration_configuration_module__["a" /* ConfigurationModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_ui_ui_module__["a" /* UiModule */],
                __WEBPACK_IMPORTED_MODULE_9__core_i18n_i18n_module__["a" /* I18nModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_9__core_i18n_i18n_module__["b" /* createTranslateLoader */],
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                    },
                    isolate: true
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__core_environment_app_environment__["a" /* AppEnvironment */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_logger__["b" /* NGXLogger */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_9__core_i18n_i18n_module__["c" /* languageLoader */],
                    deps: [__WEBPACK_IMPORTED_MODULE_10__core_i18n_i18n_service__["a" /* I18nService */]]
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/configuration/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  company config works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/configuration/company/company.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/configuration/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyConfigComponent = /** @class */ (function () {
    function CompanyConfigComponent() {
    }
    CompanyConfigComponent.prototype.ngOnInit = function () {
    };
    CompanyConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company',
            template: __webpack_require__("../../../../../src/app/configuration/company/company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/configuration/company/company.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyConfigComponent);
    return CompanyConfigComponent;
}());



/***/ }),

/***/ "../../../../../src/app/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/configuration/configuration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/configuration/configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    ConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-configuration',
            template: __webpack_require__("../../../../../src/app/configuration/configuration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/configuration/configuration.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/configuration/configuration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_routing__ = __webpack_require__("../../../../../src/app/configuration/configuration.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_component__ = __webpack_require__("../../../../../src/app/configuration/configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_component__ = __webpack_require__("../../../../../src/app/configuration/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organization_organization_component__ = __webpack_require__("../../../../../src/app/configuration/organization/organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organization_organization_service__ = __webpack_require__("../../../../../src/app/configuration/organization/organization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__core_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__configuration_routing__["a" /* ConfigurationRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__configuration_component__["a" /* ConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_4__company_company_component__["a" /* CompanyConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_5__organization_organization_component__["a" /* OrganizationConfigComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__configuration_component__["a" /* ConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_4__company_company_component__["a" /* CompanyConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_5__organization_organization_component__["a" /* OrganizationConfigComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__organization_organization_service__["a" /* OrganizationConfigService */]
            ]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ }),

/***/ "../../../../../src/app/configuration/configuration.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_component__ = __webpack_require__("../../../../../src/app/configuration/configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organization_organization_component__ = __webpack_require__("../../../../../src/app/configuration/organization/organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_routing__ = __webpack_require__("../../../../../src/app/core/routing/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConfigurationRoutingModule = /** @class */ (function () {
    function ConfigurationRoutingModule() {
    }
    ConfigurationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: __WEBPACK_IMPORTED_MODULE_4__core_routing__["a" /* AppRoutes */].ROUTING_CONFIGURATION,
                        component: __WEBPACK_IMPORTED_MODULE_2__configuration_component__["a" /* ConfigurationComponent */],
                        children: [
                            { path: __WEBPACK_IMPORTED_MODULE_4__core_routing__["a" /* AppRoutes */].ROUTING_ORGANIZATION, component: __WEBPACK_IMPORTED_MODULE_3__organization_organization_component__["a" /* OrganizationConfigComponent */] }
                        ]
                    }
                ])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ConfigurationRoutingModule);
    return ConfigurationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/configuration/organization/organization.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  organization config works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/configuration/organization/organization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/configuration/organization/organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_environment_app_environment__ = __webpack_require__("../../../../../src/app/core/environment/app-environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organization_service__ = __webpack_require__("../../../../../src/app/configuration/organization/organization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizationConfigComponent = /** @class */ (function () {
    function OrganizationConfigComponent(app, organizationService) {
        this.app = app;
        this.organizationService = organizationService;
    }
    OrganizationConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.getLogger().debug('OrganizationConfigComponent init');
        this.organizationService.getAllOrganization().then(function (data) { return _this.app.getLogger().debug(data); });
    };
    OrganizationConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-organization',
            template: __webpack_require__("../../../../../src/app/configuration/organization/organization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/configuration/organization/organization.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_environment_app_environment__["a" /* AppEnvironment */], __WEBPACK_IMPORTED_MODULE_2__organization_service__["a" /* OrganizationConfigService */]])
    ], OrganizationConfigComponent);
    return OrganizationConfigComponent;
}());



/***/ }),

/***/ "../../../../../src/app/configuration/organization/organization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_environment_app_environment__ = __webpack_require__("../../../../../src/app/core/environment/app-environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_shared_api_urls__ = __webpack_require__("../../../../../src/app/core/shared/api-urls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationConfigService = /** @class */ (function () {
    function OrganizationConfigService(app, http) {
        this.app = app;
        this.http = http;
    }
    OrganizationConfigService.prototype.getAllOrganization = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__core_shared_api_urls__["a" /* ApiUrls */].ORGANIZATION_URL).toPromise();
    };
    OrganizationConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_environment_app_environment__["a" /* AppEnvironment */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], OrganizationConfigService);
    return OrganizationConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/core/environment/app-environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEnvironment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_logger__ = __webpack_require__("../../../../ngx-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_menu_bar_menu_bar_service__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_title_service__ = __webpack_require__("../../../../../src/app/core/services/page-title.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * This class include the application helper services.
 */
var AppEnvironment = /** @class */ (function () {
    function AppEnvironment(logger, menuService, pageTitleService) {
        this.logger = logger;
        this.menuService = menuService;
        this.pageTitleService = pageTitleService;
        this.version = __webpack_require__("../../../../../package.json").version;
        this.appName = __webpack_require__("../../../../../package.json").name;
        this.pageTitleService.setPageTitle(this.appName);
    }
    /**
     * Get service for changing page title
     * @returns {PageTitleService}
     */
    AppEnvironment.prototype.getPageTitleService = function () {
        return this.pageTitleService;
    };
    /**
     * Get application logger
     * @returns {NGXLogger}
     */
    AppEnvironment.prototype.getLogger = function () {
        return this.logger;
    };
    /**
     * Get the service for toggle side navigation panel
     * @returns {MenuBarService}
     */
    AppEnvironment.prototype.getMenuBarService = function () {
        return this.menuService;
    };
    AppEnvironment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_logger__["b" /* NGXLogger */],
            __WEBPACK_IMPORTED_MODULE_2__ui_menu_bar_menu_bar_service__["a" /* MenuBarService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_title_service__["a" /* PageTitleService */]])
    ], AppEnvironment);
    return AppEnvironment;
}());



/***/ }),

/***/ "../../../../../src/app/core/i18n/i18n.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nModule; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createTranslateLoader;
/* harmony export (immutable) */ __webpack_exports__["c"] = languageLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggler_toggler_component__ = __webpack_require__("../../../../../src/app/core/i18n/toggler/toggler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var I18nModule = /** @class */ (function () {
    function I18nModule() {
    }
    I18nModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1__toggler_toggler_component__["a" /* TogglerComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__toggler_toggler_component__["a" /* TogglerComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__i18n_service__["a" /* I18nService */]]
        })
    ], I18nModule);
    return I18nModule;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
function languageLoader(i18nService) {
    return i18nService.getLanguage();
}


/***/ }),

/***/ "../../../../../src/app/core/i18n/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_logger__ = __webpack_require__("../../../../ngx-logger/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var I18nService = /** @class */ (function () {
    function I18nService(translate, logger) {
        this.translate = translate;
        this.logger = logger;
        this.init();
    }
    I18nService_1 = I18nService;
    I18nService.prototype.init = function () {
        this.translate.addLangs(I18nService_1.AVAILABLE_LANGUAGES);
        this.setLanguage(I18nService_1.DEFAULT_LANGUAGE);
    };
    I18nService.prototype.setLanguage = function (lang) {
        var _this = this;
        this.translate.setDefaultLang(lang);
        this.translate.use(lang).subscribe(function () {
            _this.logger.debug("Successfully initialize " + lang + " language.");
        }, function (err) {
            _this.logger.error("Problem with '" + lang + "' language initialization.'");
        });
    };
    I18nService.prototype.getSupportedLanguages = function () {
        return this.translate.getLangs();
    };
    I18nService.prototype.switchLanguage = function (newLanguage) {
        this.setLanguage(newLanguage);
    };
    I18nService.prototype.isCurrentLanguage = function (language) {
        return this.translate.getDefaultLang() === language;
    };
    I18nService.prototype.translateKeySync = function (key) {
        return this.translate.get(key);
    };
    I18nService.prototype.translateKey = function (key) {
        var translation = this.translate.instant(key);
        if (translation === key) {
            this.logger.error('No translation found for key', key);
        }
        return translation;
    };
    I18nService.prototype.translateEnum = function (key) {
        return this.translateKey('Enum' + key);
    };
    I18nService.prototype.getLanguage = function () {
        /*
         * For now the locale is automatically determined based on the client browser language.
         * The user texts can be alter manually
         */
        return this.translate.getDefaultLang();
    };
    // only visible for testing
    I18nService.prototype.getBrowserLanguage = function () {
        return this.translate.getBrowserLang();
    };
    I18nService.DEFAULT_LANGUAGE = 'tr';
    I18nService.AVAILABLE_LANGUAGES = ['tr', 'nl'];
    I18nService = I18nService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ngx_logger__["b" /* NGXLogger */]])
    ], I18nService);
    return I18nService;
    var I18nService_1;
}());



/***/ }),

/***/ "../../../../../src/app/core/i18n/toggler/toggler.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button fxHide fxShow.gt-xs\n        class=\"language-button\"\n        [matMenuTriggerFor]=\"languageMenu\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img class=\"flag mr-8\" [src]=\"'assets/images/flags/'+getLanguage()+'.png'\">\n        <span class=\"iso text-uppercase\">{{getLanguage()}}</span>\n    </div>\n</button>\n\n<mat-menu #languageMenu=\"matMenu\" [overlapTrigger]=\"false\">\n\n    <button mat-menu-item *ngFor=\"let lang of getAvailableLanguages()\"\n            (click)=\"switchLanguage(lang)\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img class=\"flag mr-16\" [src]=\"'assets/images/flags/'+lang+'.png'\">\n            <span class=\"iso text-uppercase\">{{lang}}</span>\n        </div>\n    </button>\n\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/core/i18n/toggler/toggler.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/i18n/toggler/toggler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TogglerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TogglerComponent = /** @class */ (function () {
    function TogglerComponent(i18nService) {
        this.i18nService = i18nService;
    }
    TogglerComponent.prototype.switchLanguage = function (language) {
        this.i18nService.switchLanguage(language);
    };
    TogglerComponent.prototype.getAvailableLanguages = function () {
        return this.i18nService.getSupportedLanguages();
    };
    TogglerComponent.prototype.getLanguage = function () {
        return this.i18nService.getLanguage();
    };
    TogglerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-language-switcher',
            template: __webpack_require__("../../../../../src/app/core/i18n/toggler/toggler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/i18n/toggler/toggler.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */]])
    ], TogglerComponent);
    return TogglerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/routing/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing__ = __webpack_require__("../../../../../src/app/core/routing/routing.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__routing__["a"]; });



/***/ }),

/***/ "../../../../../src/app/core/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KPYSRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [];
var KPYSRoutingModule = /** @class */ (function () {
    function KPYSRoutingModule() {
    }
    KPYSRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
        })
    ], KPYSRoutingModule);
    return KPYSRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/routing/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var AppRoutes = /** @class */ (function () {
    function AppRoutes() {
    }
    AppRoutes.ROUTING_HOME = '';
    AppRoutes.ROUTING_LOGIN = 'login';
    AppRoutes.ROUTING_DASHBOARD = 'dashboard';
    AppRoutes.ROUTING_CONFIGURATION = 'configuration';
    AppRoutes.ROUTING_ORGANIZATION = 'organization';
    AppRoutes.ROUTING_TEST = 'test';
    AppRoutes.ROUTING_COMPANY = 'company';
    AppRoutes.ROUTING_DEPARTMENT = 'department';
    return AppRoutes;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/page-title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTitleService = /** @class */ (function () {
    function PageTitleService() {
        this.updateTitle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PageTitleService.prototype.setPageTitle = function (newPageTitle) {
        this.pageTitle = newPageTitle;
        this.updateTitle.emit(this.pageTitle);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PageTitleService.prototype, "pageTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PageTitleService.prototype, "updateTitle", void 0);
    PageTitleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], PageTitleService);
    return PageTitleService;
}());



/***/ }),

/***/ "../../../../../src/app/core/shared/api-urls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrls; });
var ApiUrls = /** @class */ (function () {
    function ApiUrls() {
    }
    ApiUrls.BASE_URL = '/api';
    ApiUrls.ORGANIZATION_URL = ApiUrls.BASE_URL + '/organizations';
    return ApiUrls;
}());



/***/ }),

/***/ "../../../../../src/app/core/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var materialModules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: materialModules,
            exports: materialModules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_module__ = __webpack_require__("../../../../../src/app/core/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_menu_bar_menu_bar_service__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_page_title_service__ = __webpack_require__("../../../../../src/app/core/services/page-title.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var sharedModules = [
    __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_2__material_module__["a" /* MaterialModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: sharedModules,
            exports: sharedModules,
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ui_menu_bar_menu_bar_service__["a" /* MenuBarService */],
                __WEBPACK_IMPORTED_MODULE_12__services_page_title_service__["a" /* PageTitleService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <mat-toolbar color=\"primary\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFill>\n      <span *ngFor=\"let link of links\">\n        <a href=\"{{ link.url }}\" target=\"_blank\">\n          <mat-icon>{{ link.icon }}</mat-icon>\n\n          <span [ngSwitch]=\"link.translate\">\n            <span *ngSwitchCase=\"true\">\n              {{ link.name | translate }}\n            </span>\n            <span *ngSwitchDefault>\n              {{ link.name }}\n            </span>\n          </span>\n        </a>\n      </span>\n            <div fxFlex></div>\n            <small>V: {{ version }}</small>\n        </div>\n    </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/ui/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer md-toolbar {\n  min-height: 32px; }\n  .footer md-toolbar md-toolbar-row {\n    height: 32px; }\n  .footer span {\n  padding: 0 16px 0 0; }\n  .footer small {\n  font-size: 10px; }\n  .footer a {\n  color: #eee;\n  font-size: 12px;\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .footer a span {\n    padding: 0; }\n  .footer a:hover span {\n    text-decoration: underline; }\n  .footer md-icon {\n  margin-right: 4px;\n  width: 20px;\n  height: 20px; }\n  .footer md-icon.material-icons {\n    font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/ui/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_app_environment__ = __webpack_require__("../../../../../src/app/core/environment/app-environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(app) {
        this.app = app;
        this.links = [];
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.version = this.app.version;
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/core/ui/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/ui/footer/footer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__environment_app_environment__["a" /* AppEnvironment */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KPYSFooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KPYSFooterModule = /** @class */ (function () {
    function KPYSFooterModule() {
    }
    KPYSFooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([])
            ],
            declarations: []
        })
    ], KPYSFooterModule);
    return KPYSFooterModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/footer/footer.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutFooterRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("../../../../../src/app/core/ui/footer/footer.component.ts");

var LayoutFooterRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__footer_component__["a" /* FooterComponent */],
        outlet: 'footer'
    },
];


/***/ }),

/***/ "../../../../../src/app/core/ui/footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("../../../../../src/app/core/ui/footer/footer.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_routing__ = __webpack_require__("../../../../../src/app/core/ui/footer/footer.routing.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_routing__["a"]; });




/***/ }),

/***/ "../../../../../src/app/core/ui/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/core/ui/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/ui/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/core/ui/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/ui/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: []
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/header/header.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutHeaderRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/app/core/ui/header/header.component.ts");

var LayoutHeaderRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__header_component__["a" /* HeaderComponent */],
        outlet: 'header'
    },
];


/***/ }),

/***/ "../../../../../src/app/core/ui/header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/app/core/ui/header/header.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_routing__ = __webpack_require__("../../../../../src/app/core/ui/header/header.routing.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__header_routing__["a"]; });




/***/ }),

/***/ "../../../../../src/app/core/ui/menu-bar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_bar_component__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_bar_routing__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.routing.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_bar_routing__["a"]; });




/***/ }),

/***/ "../../../../../src/app/core/ui/menu-bar/menu-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <mat-list-item>\n        <a mat-line [routerLink]=\"['/']\">Dashboard</a>\n    </mat-list-item>\n    <mat-list-item>\n        <a mat-line [routerLink]=\"['/configuration/organization']\">Bölgeler</a>\n    </mat-list-item>\n    <mat-list-item>Mıntıkalar</mat-list-item>\n    <mat-list-item>Şubeler</mat-list-item>\n</mat-nav-list>\n"

/***/ }),

/***/ "../../../../../src/app/core/ui/menu-bar/menu-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/ui/menu-bar/menu-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent() {
    }
    MenuBarComponent.prototype.ngOnInit = function () {
    };
    MenuBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-bar',
            template: __webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuBarComponent);
    return MenuBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/menu-bar/menu-bar.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSidenavRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_bar_component__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.component.ts");

var LayoutSidenavRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__menu_bar_component__["a" /* MenuBarComponent */],
        outlet: 'sidenav'
    },
];


/***/ }),

/***/ "../../../../../src/app/core/ui/menu-bar/menu-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBarService = /** @class */ (function () {
    function MenuBarService() {
        this.sideNavToggleSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.sideNavToggleCalled = this.sideNavToggleSource.asObservable();
    }
    /**
     * Method to toggle side nav pane in the menu bar component
     */
    MenuBarService.prototype.toggleMenu = function () {
        this.sideNavToggleSource.next();
    };
    MenuBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuBarService);
    return MenuBarService;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/menu-bar/sidenav.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SidenavModule = /** @class */ (function () {
    function SidenavModule() {
    }
    SidenavModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: []
        })
    ], SidenavModule);
    return SidenavModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-toolbar>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFill>\n            <button md-icon-button (click)=\"toggleMenu()\" class=\"hamburg-menu\">\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <span>{{ getPageTitle() | translate}}</span>\n\n            <span fxFlex></span>\n\n            <span fxLayout=\"row\" fxLayoutAlign=\"start center\"></span>\n        </div>\n    </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/ui/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hamburg-menu {\n  background: transparent;\n  color: #fff;\n  border: none;\n  cursor: pointer; }\n  .hamburg-menu mat-icon {\n    font-size: 40px;\n    width: 40px;\n    height: 40px; }\n  mat-toolbar {\n  background: #534d64;\n  color: #ffffff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/ui/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_app_environment__ = __webpack_require__("../../../../../src/app/core/environment/app-environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(app) {
        this.app = app;
    }
    ToolbarComponent.prototype.getPageTitle = function () {
        return this.app.getPageTitleService().pageTitle;
    };
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    /**
     * Method to toggle application sidenav.
     */
    ToolbarComponent.prototype.toggleMenu = function () {
        this.app.getMenuBarService().toggleMenu();
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/core/ui/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/ui/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__environment_app_environment__["a" /* AppEnvironment */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/ui-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__("../../../../../src/app/core/ui/footer/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header__ = __webpack_require__("../../../../../src/app/core/ui/header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_bar__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UiRoutingModule = /** @class */ (function () {
    function UiRoutingModule() {
    }
    UiRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__footer__["a" /* LayoutFooterRoutes */].concat(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* LayoutHeaderRoutes */], __WEBPACK_IMPORTED_MODULE_4__menu_bar__["a" /* LayoutSidenavRoutes */]))
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], UiRoutingModule);
    return UiRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/ui/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/core/ui/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/core/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_bar_menu_bar_component__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/menu-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/core/ui/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/core/ui/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_module__ = __webpack_require__("../../../../../src/app/core/ui/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__ = __webpack_require__("../../../../../src/app/core/ui/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_bar_sidenav_module__ = __webpack_require__("../../../../../src/app/core/ui/menu-bar/sidenav.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_routing_module__ = __webpack_require__("../../../../../src/app/core/ui/ui-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__["a" /* KPYSFooterModule */],
                __WEBPACK_IMPORTED_MODULE_8__menu_bar_sidenav_module__["a" /* SidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__ui_routing_module__["a" /* UiRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__menu_bar_menu_bar_component__["a" /* MenuBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__menu_bar_menu_bar_component__["a" /* MenuBarComponent */],
            ],
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "Dashboard:\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/organization/organization.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  organization works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/organization/organization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/organization/organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent() {
    }
    OrganizationComponent.prototype.ngOnInit = function () {
    };
    OrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-organization',
            template: __webpack_require__("../../../../../src/app/dashboard/organization/organization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/organization/organization.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map