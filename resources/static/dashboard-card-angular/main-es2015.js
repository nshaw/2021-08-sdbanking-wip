(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/service/widget-event.service */ "./src/app/core/service/widget-event.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card/card.component */ "./src/app/card/card/card.component.ts");






function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Waiting for authorization...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 2);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardName", ctx_r2.cardname)("keycloak", ctx_r2.keycloak);
} }
const getKeycloakInstance = () => (window &&
    window['entando'] &&
    window['entando'].keycloak && Object.assign(Object.assign({}, window['entando'].keycloak), { initialized: true })) || {
    initialized: false,
};
class AppComponent {
    constructor(widgetEventService) {
        this.widgetEventService = widgetEventService;
        this.keycloak = getKeycloakInstance();
        this.unsubscribeFromKeycloakEvent = null;
    }
    ngOnInit() {
        this.keycloak = Object.assign(Object.assign({}, getKeycloakInstance()), { initialized: true });
        this.unsubscribeFromKeycloakEvent = this.widgetEventService.subscribeToWidgetEvent(_core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__["EVENT_KEY"].KEYCLOAK_EVENT_TYPE, () => {
            this.keycloak = Object.assign(Object.assign({}, getKeycloakInstance()), { initialized: true });
        });
    }
    ngOnDestroy() {
        if (this.unsubscribeFromKeycloakEvent) {
            this.unsubscribeFromKeycloakEvent();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__["WidgetEventService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], inputs: { cardname: "cardname" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "cardName", "keycloak"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.keycloak.initialized && ctx.keycloak.authenticated))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__["WidgetEventService"] }]; }, { cardname: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cardname']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: init, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/__ivy_ngcc__/fesm2015/elements.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card/card.component */ "./src/app/card/card/card.component.ts");
/* harmony import */ var _core_interceptor_security_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptor/security.interceptor */ "./src/app/core/interceptor/security.interceptor.ts");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/pipes/pipes.module */ "./src/app/core/pipes/pipes.module.ts");
/* harmony import */ var _core_service_app_initializer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/service/app-initializer.service */ "./src/app/core/service/app-initializer.service.ts");












function init(appInitializerService) {
    return () => appInitializerService.initialize();
}
class AppModule {
    constructor(injector) {
        this.injector = injector;
    }
    ngDoBootstrap() {
        const el = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_2__["createCustomElement"])(_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], { injector: this.injector });
        customElements.define('sd-seeds-card-details-ng', el);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: init,
            deps: [_core_service_app_initializer_service__WEBPACK_IMPORTED_MODULE_9__["AppInitializerService"]],
            multi: true,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_security_interceptor__WEBPACK_IMPORTED_MODULE_7__["SecurityInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                defaultLanguage: 'en',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _card_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _card_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                        defaultLanguage: 'en',
                    }),
                ],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: init,
                        deps: [_core_service_app_initializer_service__WEBPACK_IMPORTED_MODULE_9__["AppInitializerService"]],
                        multi: true,
                    },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_security_interceptor__WEBPACK_IMPORTED_MODULE_7__["SecurityInterceptor"], multi: true },
                ],
                entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/card/card/card.component.ts":
/*!*********************************************!*\
  !*** ./src/app/card/card/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/widget-event.service */ "./src/app/core/service/widget-event.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.service */ "./src/app/card/card/card.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_pipes_credit_card_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/credit-card.pipe */ "./src/app/core/pipes/credit-card.pipe.ts");









function CardComponent_div_12_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "label.common.rewardPoints"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.seedCard.rewardPoints, " ");
} }
function CardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_div_12_p_7_Template, 5, 4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.seedCard == null ? null : ctx_r0.seedCard.balance), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "label.common.balance"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.seedCard == null ? null : ctx_r0.seedCard.rewardPoints);
} }
const _c0 = function (a0) { return { cardName: a0 }; };
function CardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, "label.common.noCheckingAccount", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.cardName)), " ");
} }
class CardComponent {
    constructor(cardService, widgetEventService) {
        this.cardService = cardService;
        this.widgetEventService = widgetEventService;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.firstCall = true;
    }
    ngOnInit() {
        const userID = this.keycloak.idTokenParsed.preferred_username;
        this.cardService.getSeedsCardByUserID(userID, this.cardName).subscribe((response) => {
            this.seedCard = response;
            if (this.cardName === 'checking' && this.firstCall) {
                this.firstCall = false;
                this.onDetail();
            }
        }, error => console.error(error));
    }
    onDetail() {
        if (this.seedCard && this.seedCard.id) {
            const payload = { cardname: this.cardName, accountID: this.seedCard.id };
            console.log(payload);
            this.widgetEventService.createWidgetEventPublisher(src_app_core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__["EVENT_KEY"].OUTPUT_EVENT_TYPES.transactionsDetail, payload);
        }
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__["WidgetEventService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { cardName: "cardName", keycloak: "keycloak" }, decls: 14, vars: 9, consts: [[3, "click"], [1, "seeds-card"], [1, "seeds-card-header"], [1, "seeds-card-icon", 3, "src"], [1, "seeds-card-title"], [1, "seeds-card-value"], [1, "seeds-card-action"], [1, "fas", "fa-ellipsis-v"], ["class", "seeds-card-body", 4, "ngIf"], [4, "ngIf"], [1, "seeds-card-body"], [1, "seeds-card-balance"], [1, "seeds-card-balance-caption"], ["class", "seeds-card-balance-reward", 4, "ngIf"], [1, "seeds-card-balance-reward"], [1, "seeds-card-balance-reward-value"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_0_listener() { return ctx.onDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "creditCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CardComponent_div_12_Template, 8, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CardComponent_div_13_Template, 4, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.env.assetsPath + "/Framecredit-card.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "label.common." + ctx.cardName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.seedCard == null ? null : ctx.seedCard.accountNumber), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seedCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.seedCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _core_pipes_credit_card_pipe__WEBPACK_IMPORTED_MODULE_6__["CreditCardPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".seeds-card[_ngcontent-%COMP%] {\n  height: 300px;\n  background: #F2F4F7;\n  padding: 10%;\n  box-shadow: 0 0 18px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  transition: 0.3s ease;\n}\n\n.seeds-card[_ngcontent-%COMP%]:hover {\n  height: 300px;\n  background: #7ab7740d;\n  box-shadow: 0 0 18px #7ab774;\n  padding: 10%;\n  border-radius: 20px;\n}\n\n.seeds-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  position: relative;\n}\n\n.seeds-card-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 30px;\n  color: #0e6837;\n  margin: 0 20px;\n  line-height: 35px;\n}\n\n.seeds-card-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #c7c7c7;\n  line-height: 33px;\n}\n\n.seeds-card-action[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 19%;\n  color: #c7c7c7;\n}\n\n.seeds-card-balance[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 50px;\n  color: #000000;\n  margin: 10% 0 0 0;\n}\n\n.seeds-card-balance-caption[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  color: #67676b;\n}\n\n.seeds-card-balancereward[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  color: #c7c7c7;\n}\n\n.seeds-card-balance-reward-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkL0M6XFxVc2Vyc1xcTmF0aGFuXFxnaXRcXGVudGFuZG8tc2FtcGxlc1xcc3RhbmRhcmQtZGVtb1xcYmFua2luZy1wbHVnaW5cXHVpXFx3aWRnZXRzXFxiYW5raW5nLXdpZGdldHNcXGRhc2hib2FyZC1jYXJkLWFuZ3VsYXIvc3JjXFxhcHBcXGNhcmRcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWVkcy1jYXJkIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGMkY0Rjc7XHJcbiAgcGFkZGluZzogMTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zZWVkcy1jYXJkOmhvdmVyIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM3YWI3NzQwZDtcclxuICBib3gtc2hhZG93OiAwIDAgMThweCAjN2FiNzc0O1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uc2VlZHMtY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlZWRzLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjMGU2ODM3O1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uc2VlZHMtY2FyZC12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG59XHJcblxyXG4uc2VlZHMtY2FyZC1hY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDE5JTtcclxuICBjb2xvcjogI2M3YzdjNztcclxufVxyXG5cclxuLnNlZWRzLWNhcmQtYmFsYW5jZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luOiAxMCUgMCAwIDA7XHJcbn1cclxuXHJcbi5zZWVkcy1jYXJkLWJhbGFuY2UtY2FwdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM2NzY3NmI7XHJcbn1cclxuXHJcbi5zZWVkcy1jYXJkLWJhbGFuY2VyZXdhcmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG59XHJcblxyXG4uc2VlZHMtY2FyZC1iYWxhbmNlLXJld2FyZC12YWx1ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuIiwiLnNlZWRzLWNhcmQge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGNEY3O1xuICBwYWRkaW5nOiAxMCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLnNlZWRzLWNhcmQ6aG92ZXIge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjN2FiNzc0MGQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxOHB4ICM3YWI3NzQ7XG4gIHBhZGRpbmc6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnNlZWRzLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWVkcy1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzBlNjgzNztcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4uc2VlZHMtY2FyZC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNjN2M3Yzc7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xufVxuXG4uc2VlZHMtY2FyZC1hY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE5JTtcbiAgY29sb3I6ICNjN2M3Yzc7XG59XG5cbi5zZWVkcy1jYXJkLWJhbGFuY2Uge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46IDEwJSAwIDAgMDtcbn1cblxuLnNlZWRzLWNhcmQtYmFsYW5jZS1jYXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzY3Njc2Yjtcbn1cblxuLnNlZWRzLWNhcmQtYmFsYW5jZXJld2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNjN2M3Yzc7XG59XG5cbi5zZWVkcy1jYXJkLWJhbGFuY2UtcmV3YXJkLXZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return [{ type: _card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"] }, { type: src_app_core_service_widget_event_service__WEBPACK_IMPORTED_MODULE_1__["WidgetEventService"] }]; }, { cardName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keycloak: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/card/card/card.service.ts":
/*!*******************************************!*\
  !*** ./src/app/card/card/card.service.ts ***!
  \*******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CardService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getSeedscard(params = {}) {
        const { id, options, cardname } = params;
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]}/banking/api/${cardname}s/${id}`;
        return this.httpClient.get(url);
    }
    getSeedsCardByUserID(userID, cardName) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].domainUrl}/banking/api/${cardName}/user/${userID}`;
        return this.httpClient.get(url);
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/i18n/en.json":
/*!***********************************!*\
  !*** ./src/app/core/i18n/en.json ***!
  \***********************************/
/*! exports provided: label, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"label\":{\"common\":{\"couldNotFetchData\":\"Unfortunately we could not get data for this user\",\"widgetName\":\"{{widgetNamePlaceholder}}\",\"name\":\"Name\",\"value\":\"Value\",\"loading\":\"Loading...\",\"missingId\":\"Please provide seedscard ID\",\"notAuthenticated\":\"Waiting for authorization...\",\"download\":\"Download file\",\"noCheckingAccount\":\"You don't have a {{cardName}} account\",\"rewardPoints\":\"Reward Points\",\"checking\":\"Checking\",\"savings\":\"Savings\",\"creditcard\":\"Credit Card\",\"balance\":\"Balance\"},\"entities\":{\"seedscard\":{\"id\":\"ID\",\"accountNumber\":\"entities.seedscard.accountNumber\",\"balance\":\"entities.seedscard.balance\",\"userId\":\"entities.seedscard.userId\"}}}}");

/***/ }),

/***/ "./src/app/core/i18n/it.json":
/*!***********************************!*\
  !*** ./src/app/core/i18n/it.json ***!
  \***********************************/
/*! exports provided: label, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"label\":{\"common\":{\"couldNotFetchData\":\"Unfortunately we could not get data for this user\",\"widgetName\":\"{{widgetNamePlaceholder}}\",\"name\":\"Name\",\"value\":\"Value\",\"loading\":\"Loading...\",\"missingId\":\"Please provide seedscard ID\",\"notAuthenticated\":\"Waiting for authorization...\",\"download\":\"Download file\",\"noCheckingAccount\":\"You don't have a {{cardName}} account\",\"rewardPoints\":\"Reward Points\",\"checking\":\"Checking\",\"savings\":\"Savings\",\"creditcard\":\"Credit Card\",\"balance\":\"Balance\"},\"entities\":{\"seedscard\":{\"id\":\"ID\",\"accountNumber\":\"entities.seedscard.accountNumber\",\"balance\":\"entities.seedscard.balance\",\"userId\":\"entities.seedscard.userId\"}}}}");

/***/ }),

/***/ "./src/app/core/interceptor/security.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptor/security.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: SecurityInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityInterceptor", function() { return SecurityInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SecurityInterceptor {
    getKeycloakToken() {
        if (window &&
            window['entando'] &&
            window['entando'].keycloak &&
            window['entando'].keycloak.authenticated) {
            return window['entando'].keycloak.token;
        }
        return '';
    }
    getDefaultOptions() {
        const token = this.getKeycloakToken();
        return {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
    }
    intercept(request, next) {
        const headers = this.getDefaultOptions();
        request = request.clone({
            setHeaders: headers,
        });
        return next.handle(request);
    }
}
SecurityInterceptor.ɵfac = function SecurityInterceptor_Factory(t) { return new (t || SecurityInterceptor)(); };
SecurityInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SecurityInterceptor, factory: SecurityInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipes/credit-card.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/core/pipes/credit-card.pipe.ts ***!
  \************************************************/
/*! exports provided: CreditCardPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardPipe", function() { return CreditCardPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CreditCardPipe {
    transform(value) {
        if (!value)
            return '';
        let obfuscatedValue = '...';
        if (value.length >= 4) {
            obfuscatedValue += value.substring(value.length - 4, value.length);
        }
        return obfuscatedValue;
    }
}
CreditCardPipe.ɵfac = function CreditCardPipe_Factory(t) { return new (t || CreditCardPipe)(); };
CreditCardPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "creditCard", type: CreditCardPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditCardPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'creditCard',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipes/pipes.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/pipes/pipes.module.ts ***!
  \********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _credit_card_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit-card.pipe */ "./src/app/core/pipes/credit-card.pipe.ts");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_credit_card_pipe__WEBPACK_IMPORTED_MODULE_2__["CreditCardPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_credit_card_pipe__WEBPACK_IMPORTED_MODULE_2__["CreditCardPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_credit_card_pipe__WEBPACK_IMPORTED_MODULE_2__["CreditCardPipe"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_credit_card_pipe__WEBPACK_IMPORTED_MODULE_2__["CreditCardPipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/service/app-initializer.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/service/app-initializer.service.ts ***!
  \*********************************************************/
/*! exports provided: AppInitializerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitializerService", function() { return AppInitializerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _i18n_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n/en.json */ "./src/app/core/i18n/en.json");
var _i18n_en_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../i18n/en.json */ "./src/app/core/i18n/en.json", 1);
/* harmony import */ var _i18n_it_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/it.json */ "./src/app/core/i18n/it.json");
var _i18n_it_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../i18n/it.json */ "./src/app/core/i18n/it.json", 1);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class AppInitializerService {
    constructor(translate) {
        this.translate = translate;
    }
    initialize() {
        this.translate.use(window.navigator.language.split('-')[0]);
        this.translate.setTranslation('en', _i18n_en_json__WEBPACK_IMPORTED_MODULE_1__);
        this.translate.setTranslation('it', _i18n_it_json__WEBPACK_IMPORTED_MODULE_2__);
    }
}
AppInitializerService.ɵfac = function AppInitializerService_Factory(t) { return new (t || AppInitializerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AppInitializerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInitializerService, factory: AppInitializerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInitializerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/service/widget-event.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/service/widget-event.service.ts ***!
  \******************************************************/
/*! exports provided: EVENT_KEY, WidgetEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_KEY", function() { return EVENT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEventService", function() { return WidgetEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const EVENT_KEY = {
    KEYCLOAK_EVENT_TYPE: 'keycloak',
    OUTPUT_EVENT_TYPES: {
        transactionsDetail: 'seedscard.transactionsDetail',
    },
};
class WidgetEventService {
    constructor() {
        this.widgetEventToFSA = (widgetEvent) => {
            // for info about Flux Standard Action (FSA) see https://github.com/redux-utilities/flux-standard-action
            const { type, detail: { payload, error, meta }, } = widgetEvent;
            return { type, payload, error, meta };
        };
    }
    publishWidgetEvent(eventId, payload) {
        const widgetEvent = new CustomEvent(eventId, {
            detail: {
                payload,
            },
        });
        window.dispatchEvent(widgetEvent);
    }
    createWidgetEventPublisher(eventId, payload) {
        this.publishWidgetEvent(eventId, payload);
    }
    subscribeToWidgetEvent(eventId, eventHandler) {
        window.addEventListener(eventId, eventHandler);
        return () => {
            window.removeEventListener(eventId, eventHandler);
        };
    }
    subscribeToWidgetEvents(widgetEvents, eventHandler) {
        widgetEvents.forEach((eventType) => window.addEventListener(eventType, eventHandler));
        return () => {
            widgetEvents.forEach((eventType) => window.removeEventListener(eventType, eventHandler));
        };
    }
}
WidgetEventService.ɵfac = function WidgetEventService_Factory(t) { return new (t || WidgetEventService)(); };
WidgetEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetEventService, factory: WidgetEventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetEventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    domainUrl: 'http://localhost:8081',
    assetsPath: 'assets'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nathan\git\entando-samples\standard-demo\banking-plugin\ui\widgets\banking-widgets\dashboard-card-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map