webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_app_component__ = __webpack_require__("./src/app/core/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//modules here

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__core_app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NO_ERRORS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-menu></app-menu>\r\n<router-outlet></router-outlet> -->\r\n\r\n<app-top-nav class=\"fixed-topnav\" fxHide.gt-xs></app-top-nav>\r\n<mat-sidenav-container>\r\n  <mat-sidenav #appDrawer mode=\"over\" opened=\"false\">\r\n    <mat-nav-list>\r\n      <app-menu-list-item *ngFor=\"let item of navItems\" [item]=\"item\"></app-menu-list-item>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <app-top-nav fxHide.xs></app-top-nav>\r\n  <mat-toolbar fxHide.xs class=\"menu-bar mat-elevation-z1\">\r\n      <span *ngFor=\"let item of navItems\">\r\n        <!-- Handle branch node buttons here -->\r\n        <span *ngIf=\"item.children && item.children.length > 0\">\r\n          <button mat-button [matMenuTriggerFor]=\"menu.childMenu\"\r\n          [disabled]=\"item.disabled\">\r\n            {{item.displayName}}\r\n          </button>\r\n          <app-menu-toolbar #menu [items]=\"item.children\"></app-menu-toolbar>\r\n        </span>\r\n        <!-- Leaf node buttons here -->\r\n        <span *ngIf=\"!item.children || item.children.length === 0\">\r\n          <button mat-button color=\"primary\" [routerLink]=\"item.route\">\r\n            {{item.displayName}}\r\n          </button>\r\n        </span>\r\n      </span>\r\n    </mat-toolbar>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n  <div class=\"footer\">\r\n    <button color='warn' (click)=\"openDialog()\" mat-raised-button>Quick Enquiry</button>\r\n  </div>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/* app drawer breakpoint */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-sidenav {\n  width: 360px; }\n.mat-sidenav-container {\n  background-color: white !important;\n  height: 100vh; }\n.sidenav-toolbar {\n  height: 64px;\n  background-color: #3f51b5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n@media (max-width: 600px) {\n    .sidenav-toolbar {\n      height: 56px; } }\n.mat-nav-list {\n  padding-top: 0; }\n@media (max-width: 600px) {\n  .fixed-topnav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    width: 100% !important; }\n  .mat-drawer-container {\n    margin-top: 56px; } }\n.footer {\n  position: fixed;\n  bottom: 5%;\n  right: 2%; }\n"

/***/ }),

/***/ "./src/app/core/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_nav_service__ = __webpack_require__("./src/app/core/navigation/nav-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_dialog_component__ = __webpack_require__("./src/app/core/dialog/dialog.component.ts");
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
    function AppComponent(navService, dialog) {
        this.navService = navService;
        this.dialog = dialog;
        this.version = __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* VERSION */];
        this.navItems = [
            {
                displayName: 'Home',
                iconName: 'home',
                route: 'home'
            },
            {
                displayName: 'IEEE Projects',
                iconName: 'verified_user',
                children: [
                    {
                        displayName: 'Power Electronics Projects',
                        iconName: 'settings_input_svideo',
                        route: ''
                    },
                    {
                        displayName: 'Embedded System Projects',
                        iconName: 'settings_input_antenna',
                        route: ''
                    },
                    {
                        displayName: 'Matlab Projects',
                        iconName: 'settings_applications',
                        route: ''
                    },
                    {
                        displayName: 'IOT Projects',
                        iconName: 'watch',
                        route: ''
                    },
                    {
                        displayName: 'Raspberry PI Projects',
                        iconName: 'settings_input_composite',
                        route: ''
                    },
                    {
                        displayName: 'Java Projects',
                        iconName: 'important_devices',
                        route: ''
                    },
                    {
                        displayName: '.NET Projects',
                        iconName: 'developer_mode',
                        route: ''
                    },
                    {
                        displayName: 'Android Projects',
                        iconName: 'android',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'Training',
                iconName: 'loyalty',
                children: [
                    {
                        displayName: 'Embedded System ',
                        iconName: 'settings_input_antenna',
                        route: ''
                    },
                    {
                        displayName: 'Matlab',
                        iconName: 'settings_applications',
                        route: ''
                    },
                    {
                        displayName: 'Web Technologies',
                        iconName: 'language',
                        route: ''
                    },
                    {
                        displayName: 'SEO',
                        iconName: 'settings_cell',
                        route: ''
                    },
                ]
            },
            {
                displayName: 'Courses',
                iconName: 'business',
                children: [
                    {
                        displayName: 'Image Processing',
                        iconName: 'blur_on',
                        route: ''
                    },
                    {
                        displayName: 'Network Security',
                        iconName: 'security',
                        route: ''
                    },
                    {
                        displayName: 'Mobile Computing',
                        iconName: 'mobile_friendly',
                        route: ''
                    },
                    {
                        displayName: 'Cloud Computing',
                        iconName: 'cloud',
                        route: ''
                    },
                    {
                        displayName: 'Wireless Communications',
                        iconName: 'wifi_tethering',
                        route: ''
                    },
                    {
                        displayName: 'Artificial Intelligence',
                        iconName: 'graphic_eq',
                        route: ''
                    },
                    {
                        displayName: 'Embedded Systems',
                        iconName: 'settings_input_antenna',
                        route: ''
                    },
                    {
                        displayName: 'VLSI',
                        iconName: 'waves',
                        route: ''
                    },
                    {
                        displayName: 'Robotics',
                        iconName: 'usb',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'Contact Us',
                iconName: 'contact_support',
                route: 'contact'
            }
        ];
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.navService.appDrawer = this.appDrawer;
    };
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialog_dialog_component__["a" /* DialogComponent */], {
            data: { name: '', mobile: '', degree: '', department: '', message: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('appDrawer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AppComponent.prototype, "appDrawer", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/core/app.component.html"),
            styles: [__webpack_require__("./src/app/core/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__navigation_nav_service__["a" /* NavService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/core/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_nav_service__ = __webpack_require__("./src/app/core/navigation/nav-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_core_service__ = __webpack_require__("./src/app/core/service/core.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_menu_component__ = __webpack_require__("./src/app/core/navigation/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_top_nav_top_nav_component__ = __webpack_require__("./src/app/core/navigation/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/core/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navigation_menu_toolbar_menu_toolbar_component__ = __webpack_require__("./src/app/core/navigation/menu-toolbar/menu-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_dialog_component__ = __webpack_require__("./src/app/core/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import {A11yModule} from '@angular/cdk/a11y';
// import {BidiModule} from '@angular/cdk/bidi';
// import {ObserversModule} from '@angular/cdk/observers';
// import {OverlayModule} from '@angular/cdk/overlay';
// import {PlatformModule} from '@angular/cdk/platform';
// import {PortalModule} from '@angular/cdk/portal';
// import {ScrollDispatchModule} from '@angular/cdk/scrolling';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';



var materialModules = [
    // CDK
    //  A11yModule,
    //  BidiModule,
    //  ObserversModule,
    //  OverlayModule,
    //  PlatformModule,
    //  PortalModule,
    //  ScrollDispatchModule,
    //  CdkStepperModule,
    //CdkTableModule,
    // Material
    //MatAutocompleteModule,
    //MatButtonToggleModule,
    //  MatCheckboxModule,
    //  MatChipsModule,
    //  MatDatepickerModule,
    //  MatExpansionModule,
    //  MatGridListModule,
    //  MatProgressBarModule,
    //  MatProgressSpinnerModule,
    //  MatRadioModule,
    //  MatRippleModule,
    //  MatSlideToggleModule,
    //  MatSliderModule,
    //  MatSnackBarModule,
    //  MatTooltipModule,
    //  MatNativeDateModule,
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatToolbarModule */],
];




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */]
            ].concat(materialModules, [
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            ]),
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_menu_component__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_9__navigation_top_nav_top_nav_component__["a" /* TopNavComponent */], __WEBPACK_IMPORTED_MODULE_11__navigation_menu_toolbar_menu_toolbar_component__["a" /* MenuToolbarComponent */], __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_13__dialog_dialog_component__["a" /* DialogComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__service_core_service__["a" /* CoreService */], __WEBPACK_IMPORTED_MODULE_4__navigation_nav_service__["a" /* NavService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]].concat(materialModules),
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__dialog_dialog_component__["a" /* DialogComponent */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='modal-form'>\n<h1 mat-dialog-title>Quick Enquiry</h1>\n<div mat-dialog-content>\n  <!-- <p>Your Name</p> -->\n  <form [formGroup]=\"myform\">\n  <mat-form-field class=\"input-fields\" >\n    <input matInput placeholder=\"Name\" formControlName=\"name\" required>\n    <mat-error *ngIf=\"\"></mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"input-fields\" >\n    <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" maxlength=\"10\" required>\n    <mat-error >\n      <!-- <span *ngIf=\"myForm?.controls.mobile?.errors?.required\">Required Field</span>\n      <span *ngIf=\"myForm?.controls.mobilet?.errors?.maxLength\">Maximum Length is 10</span> -->\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"input-fields\" >\n    <mat-select placeholder=\"Select\" formControlName=\"degree\" required>\n      <mat-option value=\"B.E\">B.E/B.Tech</mat-option>\n      <mat-option value=\"Diploma\">Diploma</mat-option>\n      <mat-option value=\"P.G\">P.G</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"input-fields\" >\n    <input matInput placeholder=\"Department\" formControlName=\"department\" required>\n  </mat-form-field>\n  <!-- <p>Kindly Mention Your Project Details</p> -->\n  <mat-form-field class=\"input-fields\" >\n    <input matInput placeholder=\"message\" formControlName=\"message\" required>\n  </mat-form-field>\n\n</form>\n</div>\n\n\n<div mat-dialog-actions>\n  \n  <button mat-button color='warn' [mat-dialog-close]=\"true\">Cancel</button>\n  <button mat-button color='primary' [disabled]='!myform.valid' >Save</button>\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/core/dialog/dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.modal-form > * {\n  width: 100%; }\n\n.input-fields {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/core/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogComponent = /** @class */ (function () {
    function DialogComponent(fb, data, dialog, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.title = "Example Angular Material Dialog";
        this.myform = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(10)])],
            degree: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            department: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("./src/app/core/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/core/dialog/dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"row backgnd\">\n \n  <div class='col-sm-12 col-md-4'>\n      <ul>IEEE Project\n        <li *ngFor='let ieee of menus.navcontents[1].children'><a>{{ieee.displayName}}</a></li>\n      </ul>\n  </div>\n\n  <div class='col-sm-12 col-md-4'>\n    <ul>Training\n      <li *ngFor='let ieee of menus.navcontents[2].children'><a>{{ieee.displayName}}</a></li>\n    </ul>\n  </div>\n\n  <div class='col-sm-12 col-md-4'>\n    <ul>Courses\n      <li *ngFor='let ieee of menus.navcontents[3].children'><a>{{ieee.displayName}}</a></li>\n    </ul>\n  </div>\n\n\n\n</div>\n\n<div class='row'>\n  <p class='col-sm-12'>\n    Copyright © 2018 by JK Electrocorps\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".backgnd {\n  background: black; }\n\nul {\n  color: white;\n  font-size: 20px;\n  font-weight: bold; }\n\nli a {\n  color: #8b8b8b;\n  font-size: 16px;\n  font-weight: normal; }\n\np {\n  background: #444; }\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_top_nav_nav_models__ = __webpack_require__("./src/app/core/navigation/top-nav/nav-models.ts");
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
    function FooterComponent() {
        this.menus = new __WEBPACK_IMPORTED_MODULE_1__navigation_top_nav_nav_models__["a" /* nav */]();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/core/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/menu-toolbar/menu-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n    <span *ngFor=\"let child of items\">\n      <!-- Handle branch node menu items -->\n      <span *ngIf=\"child.children && child.children.length > 0\">\n        <button mat-menu-item color=\"primary\" [matMenuTriggerFor]=\"menu.childMenu\">\n          <mat-icon>{{child.iconName}}</mat-icon>\n          <span>{{child.displayName}}</span>\n        </button>\n        <app-menu-toolbar #menu [items]=\"child.children\"></app-menu-toolbar>\n      </span>\n      <!-- Handle leaf node menu items -->\n      <span *ngIf=\"!child.children || child.children.length === 0\">\n        <button mat-menu-item [routerLink]=\"child.route\">\n          <mat-icon>{{child.iconName}}</mat-icon>\n          <span>{{child.displayName}}</span>\n        </button>\n      </span>\n    </span>\n  </mat-menu>"

/***/ }),

/***/ "./src/app/core/navigation/menu-toolbar/menu-toolbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navigation/menu-toolbar/menu-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuToolbarComponent = /** @class */ (function () {
    function MenuToolbarComponent(router) {
        this.router = router;
    }
    MenuToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MenuToolbarComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('childMenu'),
        __metadata("design:type", Object)
    ], MenuToolbarComponent.prototype, "childMenu", void 0);
    MenuToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-toolbar',
            template: __webpack_require__("./src/app/core/navigation/menu-toolbar/menu-toolbar.component.html"),
            styles: [__webpack_require__("./src/app/core/navigation/menu-toolbar/menu-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], MenuToolbarComponent);
    return MenuToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<a mat-list-item [ngStyle]=\"{'padding-left': (depth * 12) + 'px'}\" (click)=\"onItemSelected(item)\"\n              [ngClass]=\"{'active': item.route ? router.isActive(item.route, true): false, 'expanded': expanded}\">\n  <mat-icon class=\"routeIcon\">{{item.iconName}}</mat-icon>\n  {{item.displayName}}\n  <span fxFlex *ngIf=\"item.children && item.children.length\">\n    <span fxFlex></span>\n    <mat-icon [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\">\n      expand_more\n    </mat-icon>\n  </span>\n</a>\n<div *ngIf=\"expanded\">\n  <app-menu-list-item *ngFor=\"let child of item.children\" [item]=\"child\" [depth]=\"depth+1\">\n  </app-menu-list-item>\n</div>\n\n\n<!-- <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n                <button type=\"button\" \n                        class=\"navbar-toggle collapsed\"\n                        (click)=\"toggleState()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">logo here</a>\n        </div>\n         <div class=\"collapse navbar-collapse\"\n              [ngClass]=\"{ 'in': isIn }\">\n            <ul class=\"nav navbar-nav\">\n                <li><a>Home</a></li>\n                <li><a>Users</a></li>\n            </ul>\n        </div>\n    </div>\n</nav> -->"

/***/ }),

/***/ "./src/app/core/navigation/menu.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: block;\n  outline: none; }\n:host .mat-list-item.active {\n    background-color: #e8eaf6; }\n:host:hover > .mat-list-item:not(.expanded), :host:focus > .mat-list-item:not(.expanded) {\n    background-color: #c5cae9 !important; }\n.mat-list-item {\n  padding: 8px 0; }\n.mat-list-item .routeIcon {\n    margin-right: 40px; }\n"

/***/ }),

/***/ "./src/app/core/navigation/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_service__ = __webpack_require__("./src/app/core/navigation/nav-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(navService, router) {
        this.navService = navService;
        this.router = router;
        this.ariaExpanded = this.expanded;
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    MenuComponent.prototype.onItemSelected = function (item) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
            this.navService.closeNav();
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('attr.aria-expanded'),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "ariaExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], MenuComponent.prototype, "depth", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-list-item',
            template: __webpack_require__("./src/app/core/navigation/menu.component.html"),
            styles: [__webpack_require__("./src/app/core/navigation/menu.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* trigger */])('indicatorRotate', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ transform: 'rotate(180deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/nav-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavService = /** @class */ (function () {
    function NavService() {
    }
    NavService.prototype.closeNav = function () {
        this.appDrawer.close();
    };
    NavService.prototype.openNav = function () {
        this.appDrawer.open();
    };
    NavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/core/navigation/top-nav/nav-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nav; });
var nav = /** @class */ (function () {
    function nav() {
        this.navcontents = [
            {
                displayName: 'Home',
                iconName: 'home',
                route: 'home'
            },
            {
                displayName: 'IEEE Projects',
                iconName: 'verified_user',
                children: [
                    {
                        displayName: 'Power Electronics Projects',
                        iconName: 'settings_input_svideo',
                        route: ''
                    },
                    {
                        displayName: 'Embedded System Projects',
                        iconName: 'settings_input_antenna',
                        route: ''
                    },
                    {
                        displayName: 'Matlab Projects',
                        iconName: 'settings_applications',
                        route: ''
                    },
                    {
                        displayName: 'IOT Projects',
                        iconName: 'watch',
                        route: ''
                    },
                    {
                        displayName: 'Raspberry PI Projects',
                        iconName: 'settings_input_composite',
                        route: ''
                    },
                    {
                        displayName: 'Java Projects',
                        iconName: 'important_devices',
                        route: ''
                    },
                    {
                        displayName: '.NET Projects',
                        iconName: 'developer_mode',
                        route: ''
                    },
                    {
                        displayName: 'Android Projects',
                        iconName: 'android',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'Training',
                iconName: 'loyalty',
                children: [
                    {
                        displayName: 'Embedded System ',
                        iconName: 'settings_input_antenna',
                        route: ''
                    },
                    {
                        displayName: 'Matlab',
                        iconName: 'settings_applications',
                        route: ''
                    },
                    {
                        displayName: 'Web Technologies',
                        iconName: 'language',
                        route: ''
                    },
                    {
                        displayName: 'SEO',
                        iconName: 'settings_cell',
                        route: ''
                    },
                ]
            },
            {
                displayName: 'Courses',
                iconName: 'business',
                children: [
                    {
                        displayName: 'Image Processing',
                        iconName: 'blur_on',
                        route: ''
                    },
                    {
                        displayName: 'Network Security',
                        iconName: 'security',
                        route: ''
                    },
                    {
                        displayName: 'Mobile Computing',
                        iconName: 'mobile_friendly',
                        route: ''
                    },
                    {
                        displayName: 'Cloud Computing',
                        iconName: 'cloud',
                        route: ''
                    },
                    {
                        displayName: 'Wireless Communications',
                        iconName: 'wifi_tethering',
                        route: ''
                    },
                    {
                        displayName: 'Artificial Intelligence',
                        iconName: 'graphic_eq',
                        route: ''
                    },
                    {
                        displayName: 'Embedded Systems',
                        iconName: 'settings_input_antenna',
                        route: ''
                    },
                    {
                        displayName: 'VLSI',
                        iconName: 'waves',
                        route: ''
                    },
                    {
                        displayName: 'Robotics',
                        iconName: 'usb',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'Contact Us',
                iconName: 'contact_support',
                route: 'contact'
            }
        ];
    }
    return nav;
}());



/***/ }),

/***/ "./src/app/core/navigation/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z1\">\n  <button mat-icon-button id=\"menu\" (click)=\"navService.openNav()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <h1>JK Electro Corps </h1>\n\n\n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/navigation/top-nav/top-nav.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: \"Comic Sans MS\", cursive, sans-serif; }\n"

/***/ }),

/***/ "./src/app/core/navigation/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_service__ = __webpack_require__("./src/app/core/navigation/nav-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_models__ = __webpack_require__("./src/app/core/navigation/top-nav/nav-models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(navService) {
        this.navService = navService;
        this.navs = new __WEBPACK_IMPORTED_MODULE_2__nav_models__["a" /* nav */]();
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-nav',
            template: __webpack_require__("./src/app/core/navigation/top-nav/top-nav.component.html"),
            styles: [__webpack_require__("./src/app/core/navigation/top-nav/top-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nav_service__["a" /* NavService */]])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/core/service/core.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    CoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/home/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class='row' fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <mat-card  class=\"card-picture col-sm-12 col-md-3\" *ngFor=\"let picture of pictures\">\n    <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n      <span fxFlex=\"80%\">{{picture.title}}</span>\n      <!-- <mat-icon fxFlex=\"10%\">mode_edit</mat-icon>\n      <mat-icon fxFlex=\"10%\">delete</mat-icon> -->\n    </mat-card-title>\n    <img mat-card-image [src]=\"picture.img\">\n  </mat-card>\n</div>\n\n<div class='clearfix'></div>"

/***/ }),

/***/ "./src/app/home/components/card/card.component.scss":
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 100%;\n  margin-bottom: 18%; }\n\n.container {\n  min-height: 100%;\n  width: 100%; }\n\n.card-picture {\n  float: left;\n  margin-bottom: 2%;\n  margin: 3%; }\n\n.search-form {\n  width: 90%; }\n\nmat-card {\n  height: 312px; }\n"

/***/ }),

/***/ "./src/app/home/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.pictures = [
            {
                id: 1,
                title: 'Embedded Systems',
                img: 'assets/images/embedded.jpg'
            },
            {
                id: 2,
                title: 'Power Electronics',
                img: 'assets/images/powerelec.jpg'
            },
            {
                id: 3,
                title: 'Mat Lab',
                img: 'assets/images/matlab.jpg'
            },
            {
                id: 4,
                title: ' Java',
                img: 'assets/images/java.jpg'
            },
            {
                id: 5,
                title: 'Dot Net',
                img: 'assets/images/dotnet.png'
            },
            {
                id: 6,
                title: 'IOT',
                img: 'assets/images/iot.jpg'
            },
        ];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/home/components/card/card.component.html"),
            styles: [__webpack_require__("./src/app/home/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/home/components/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "\n<carousel>\n  <slide>\n    <img src=\"assets/images/climbing.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <h3>Having a hard time in doing a project?</h3>\n      <p>No worries we provide all type of solution for your project</p>\n    </div>\n  </slide>\n  <slide>\n    <img src=\"assets/images/electronics.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <h3>Electronics</h3>\n      <p>Embedded Systems,Matlab,Power Electronics</p>\n    </div>\n  </slide>\n  <slide>\n    <img src=\"assets/images/elec.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <h3>Electrical</h3>\n      <p>Matlab,\n        power Electronics,etc..,\n      </p>\n    </div>\n  </slide>\n  <slide>\n    <img src=\"assets/images/computer.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      \n      <h3>Java,DotNET,Web Programming,IOT,etc..,</h3>\n    </div>\n  </slide>\n\n  </carousel>\n"

/***/ }),

/***/ "./src/app/home/components/carousel/carousel.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  height: 387px; }\n"

/***/ }),

/***/ "./src/app/home/components/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/home/components/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/home/components/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/home/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-carousel></app-carousel>\n\n<app-card></app-card>\n<div class='clearfix'></div>\n<div class=\"container-fluid\" style=\"margin-top: 10px\">\n  <div class=\"jumbotron\">\n    <h1>Our Mission</h1>      \n    <p>\n      We Jk'ites work with students to achieve their creative solutions to Real-time problems and also to enhance their technical sound using brainstorming practices.\n      </p>\n\n      <h1>Our Vision</h1>      \n    <p>\n        Innovate with branding new ideas not with recursive abstracts </p>\n  </div>    \n</div>\n\n"

/***/ }),

/***/ "./src/app/home/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-card-content {\n  font-family: \"Comic Sans MS\", cursive, sans-serif !important; }\n\n.jumbotron {\n  background-color: white;\n  border: 1.5px solid #0b1650;\n  border-radius: 10px;\n  -webkit-box-shadow: 9px 6px 3px 2px #0b1650;\n          box-shadow: 9px 6px 3px 2px #0b1650; }\n"

/***/ }),

/***/ "./src/app/home/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/components/text-effect/text-effect.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"content\">\n  <div class=\"content__container\">\n    <p class=\"content__container__text\">\n      Hello\n    </p>\n    \n    <ul class=\"content__container__list\">\n      <li class=\"content__container__list__item\">world !</li>\n      <li class=\"content__container__list__item\">bob !</li>\n      <li class=\"content__container__list__item\">users !</li>\n      <li class=\"content__container__list__item\">everybody !</li>\n    </ul>\n  </div>\n</div>\n\n<!-- <ul class=\"content__container__list\">\n  <li class=\"content__container__list__item\">B.E/B.Tech  !</li>\n  <li class=\"content__container__list__item\">Diploma Projects !</li>\n  <li class=\"content__container__list__item\">M.E projects !</li>\n  <li class=\"content__container__list__item\">Products !</li>\n  <li class=\"content__container__list__item\">Training !</li>\n  <li class=\"content__container__list__item\">1 Place Solution</li>\n</ul> -->\n"

/***/ }),

/***/ "./src/app/home/components/text-effect/text-effect.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: #34495e; }\n\n.content {\n  position: absolute;\n  top: 15%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  overflow: hidden;\n  font-family: 'Lato', sans-serif;\n  font-size: 35px;\n  line-height: 40px;\n  color: #3f51b5; }\n\n.content__container {\n    font-weight: 600;\n    overflow: hidden;\n    height: 40px;\n    padding: 0 40px; }\n\n.content__container:before {\n      content: '[';\n      left: 0; }\n\n.content__container:after {\n      content: ']';\n      position: absolute;\n      right: 0; }\n\n.content__container:after, .content__container:before {\n      position: absolute;\n      top: 0;\n      color: #3f51b5;\n      font-size: 42px;\n      line-height: 40px;\n      -webkit-animation-name: opacity;\n      -webkit-animation-duration: 2s;\n      -webkit-animation-iteration-count: infinite;\n      animation-name: opacity;\n      animation-duration: 2s;\n      animation-iteration-count: infinite; }\n\n.content__container__text {\n      display: inline;\n      float: left;\n      margin: 0; }\n\n.content__container__list {\n      margin-top: 0;\n      padding-left: 110px;\n      text-align: left;\n      list-style: none;\n      -webkit-animation-name: change;\n      -webkit-animation-duration: 10s;\n      -webkit-animation-iteration-count: infinite;\n      animation-name: change;\n      animation-duration: 10s;\n      animation-iteration-count: infinite; }\n\n.content__container__list__item {\n        line-height: 40px;\n        margin: 0; }\n\n@-webkit-keyframes opacity {\n  0%, 100% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n@-webkit-keyframes change {\n  0%, 12.66%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  16.66%, 29.32% {\n    -webkit-transform: translate3d(0, -25%, 0);\n            transform: translate3d(0, -25%, 0); }\n  33.32%, 45.98% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n  49.98%, 62.64% {\n    -webkit-transform: translate3d(0, -75%, 0);\n            transform: translate3d(0, -75%, 0); }\n  66.64%, 79.3% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n  83.3%, 95.96% {\n    -webkit-transform: translate3d(0, -25%, 0);\n            transform: translate3d(0, -25%, 0); } }\n\n@keyframes opacity {\n  0%, 100% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n@keyframes change {\n  0%, 12.66%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  16.66%, 29.32% {\n    -webkit-transform: translate3d(0, -25%, 0);\n            transform: translate3d(0, -25%, 0); }\n  33.32%, 45.98% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n  49.98%, 62.64% {\n    -webkit-transform: translate3d(0, -75%, 0);\n            transform: translate3d(0, -75%, 0); }\n  66.64%, 79.3% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n  83.3%, 95.96% {\n    -webkit-transform: translate3d(0, -25%, 0);\n            transform: translate3d(0, -25%, 0); } }\n"

/***/ }),

/***/ "./src/app/home/components/text-effect/text-effect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEffectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextEffectComponent = /** @class */ (function () {
    function TextEffectComponent() {
    }
    TextEffectComponent.prototype.ngOnInit = function () {
    };
    TextEffectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-text-effect',
            template: __webpack_require__("./src/app/home/components/text-effect/text-effect.component.html"),
            styles: [__webpack_require__("./src/app/home/components/text-effect/text-effect.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextEffectComponent);
    return TextEffectComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_container__ = __webpack_require__("./src/app/home/home.container.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_container__["a" /* HomeContainer */] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.container.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.container.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeContainer = /** @class */ (function () {
    function HomeContainer() {
    }
    HomeContainer.prototype.ngOnInit = function () {
    };
    HomeContainer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-container',
            template: "\n    <app-home></app-home>\n  ",
            styles: [__webpack_require__("./src/app/home/home.container.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeContainer);
    return HomeContainer;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_container__ = __webpack_require__("./src/app/home/home.container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/home/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_text_effect_text_effect_component__ = __webpack_require__("./src/app/home/components/text-effect/text-effect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carousel_carousel_component__ = __webpack_require__("./src/app/home/components/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_card_card_component__ = __webpack_require__("./src/app/home/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_container__["a" /* HomeContainer */],
                __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_text_effect_text_effect_component__["a" /* TextEffectComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_card_card_component__["a" /* CardComponent */]
            ],
            providers: [],
            exports: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);




// if (environment.production) {
//   enableProdMode();
// }
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map