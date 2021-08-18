(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./src/app/pages/analytics/analytics-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/analytics/analytics-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.component */ "./src/app/pages/analytics/analytics.component.ts");
/* harmony import */ var _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocupacion/ocupacion.component */ "./src/app/pages/analytics/ocupacion/ocupacion.component.ts");
/* harmony import */ var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordenes/ordenes.component */ "./src/app/pages/analytics/ordenes/ordenes.component.ts");
/* harmony import */ var _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordenes-no-wips/ordenes-no-wips.component */ "./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts");
/* harmony import */ var _predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./predictivo/predictivo.component */ "./src/app/pages/analytics/predictivo/predictivo.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/pages/analytics/reports/reports.component.ts");










const routes = [{
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"],
        children: [
            {
                path: 'ocupacion',
                component: _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_3__["OcupacionComponent"],
            },
            {
                path: 'ordenes',
                component: _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_4__["OrdenesComponent"],
            },
            {
                path: 'ordenesNotWips',
                component: _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_5__["OrdenesNoWipsComponent"],
            },
            {
                path: 'predictivo',
                component: _predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_6__["PredictivoComponent"],
            },
            {
                path: 'reportes',
                component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
            },
        ],
    }];
class AnalyticsRoutingModule {
}
AnalyticsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnalyticsRoutingModule });
AnalyticsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnalyticsRoutingModule_Factory(t) { return new (t || AnalyticsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/analytics.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/analytics/analytics.component.ts ***!
  \********************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AnalyticsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(); };
AnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["ngx-analytics"]], decls: 1, vars: 0, template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-analytics',
                template: `<router-outlet></router-outlet>`,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/analytics.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/analytics/analytics.module.ts ***!
  \*****************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/pages/analytics/analytics-routing.module.ts");
/* harmony import */ var _predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predictivo/predictivo.component */ "./src/app/pages/analytics/predictivo/predictivo.component.ts");
/* harmony import */ var _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ocupacion/ocupacion.component */ "./src/app/pages/analytics/ocupacion/ocupacion.component.ts");
/* harmony import */ var _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordenes-no-wips/ordenes-no-wips.component */ "./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts");
/* harmony import */ var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ordenes/ordenes.component */ "./src/app/pages/analytics/ordenes/ordenes.component.ts");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics.component */ "./src/app/pages/analytics/analytics.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/pages/analytics/reports/reports.component.ts");













class AnalyticsModule {
}
AnalyticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnalyticsModule });
AnalyticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnalyticsModule, { declarations: [_predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_4__["PredictivoComponent"], _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_5__["OcupacionComponent"], _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_6__["OrdenesNoWipsComponent"], _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__["OrdenesComponent"], _analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_4__["PredictivoComponent"], _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_5__["OcupacionComponent"], _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_6__["OrdenesNoWipsComponent"], _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__["OrdenesComponent"], _analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/ocupacion/ocupacion.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/analytics/ocupacion/ocupacion.component.ts ***!
  \******************************************************************/
/*! exports provided: OcupacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcupacionComponent", function() { return OcupacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");










class OcupacionComponent {
    constructor(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        /** Table de ocupacion del sistema */
        this.settings1 = {
            actions: false,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                    filter: false,
                    hide: true,
                },
                name: {
                    title: 'Nombre',
                    type: 'string',
                    filter: false,
                },
                totalOcupated: {
                    title: 'Capacidad Total (mt)',
                    type: 'number',
                    filter: false,
                },
                currentOcupated: {
                    title: 'Ocupados (mt)',
                    type: 'number',
                    filter: false,
                },
                available: {
                    title: 'Disponible (mt)',
                    type: 'number',
                    filter: false,
                },
                percOcupation: {
                    title: '%Ocupacion',
                    type: 'number',
                    filter: false,
                },
            },
        };
        this.source1 = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargeReportOcupation();
    }
    ngOnInit() {
    }
    ChargeReportOcupation() {
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GeReportOcupation').subscribe((res) => {
            //REPORTOCUPATION=res;
            // console.log("Report Ocupacion:", res);
            this.ReportOcupation = res;
            this.source1.load(res);
        });
        const contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60000);
        contador.subscribe((n) => {
            this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GeReportOcupation').subscribe((res) => {
                //REPORTOCUPATION=res;
                this.ReportOcupation = res;
                this.source1.load(res);
            });
        });
    }
}
OcupacionComponent.ɵfac = function OcupacionComponent_Factory(t) { return new (t || OcupacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
OcupacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OcupacionComponent, selectors: [["ngx-ocupacion"]], decls: 12, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function OcupacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      Ocupaci\u00F3n del sistema\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings1)("source", ctx.source1);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9vY3VwYWNpb24vb2N1cGFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OcupacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ocupacion',
                templateUrl: './ocupacion.component.html',
                styleUrls: ['./ocupacion.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrdenesNoWipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesNoWipsComponent", function() { return OrdenesNoWipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");










class OrdenesNoWipsComponent {
    constructor(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        /** Table de ordenes que no encajan en los wips */
        this.settings2 = {
            actions: false,
            columns: {
                // id: {
                //   title: 'ID',
                //   type: 'number',
                //   filter:false,
                //   hide:true,
                // },
                orderId: {
                    title: 'OrderId',
                    type: 'number',
                    filter: false,
                    hide: true,
                },
                batch: {
                    title: 'Batch',
                    type: 'number',
                    filter: false,
                },
                order: {
                    title: 'Orden',
                    type: 'string',
                    filter: false,
                },
                cutsLength: {
                    title: 'Longitud cortes',
                    type: 'number',
                    filter: false,
                },
                cutsWidth: {
                    title: 'Ancho corte',
                    type: 'number',
                    filter: false,
                },
                anchoWip: {
                    title: 'Ancho Wip',
                    type: 'string',
                    filter: false,
                },
                target: {
                    title: 'Target',
                    type: 'string',
                    filter: false,
                },
                wip: {
                    title: 'Wip',
                    type: 'string',
                    filter: false,
                },
                sizeDifference: {
                    title: 'Diferencia tamaño',
                    type: 'number',
                    filter: false,
                },
            },
        };
        this.source2 = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargeOrdersnotwip();
    }
    ngOnInit() {
    }
    ChargeOrdersnotwip() {
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetnotwipList').subscribe((res) => {
            //REPORTOCUPATION=res;
            // console.log("Report notwipList:", res);
            this.ReportOrdersnotwip = res;
            this.source2.load(res);
        });
        const contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30000);
        contador.subscribe((n) => {
            this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetnotwipList').subscribe((res) => {
                //REPORTOCUPATION=res;
                this.ReportOrdersnotwip = res;
                this.source2.load(res);
            });
        });
    }
}
OrdenesNoWipsComponent.ɵfac = function OrdenesNoWipsComponent_Factory(t) { return new (t || OrdenesNoWipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
OrdenesNoWipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdenesNoWipsComponent, selectors: [["ngx-ordenes-no-wips"]], decls: 13, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function OrdenesNoWipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      Ordenes que no se pueden trasportar en el wip\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings2)("source", ctx.source2);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9vcmRlbmVzLW5vLXdpcHMvb3JkZW5lcy1uby13aXBzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdenesNoWipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ordenes-no-wips',
                templateUrl: './ordenes-no-wips.component.html',
                styleUrls: ['./ordenes-no-wips.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/ordenes/ordenes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/analytics/ordenes/ordenes.component.ts ***!
  \**************************************************************/
/*! exports provided: OrdenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesComponent", function() { return OrdenesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");










class OrdenesComponent {
    constructor(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        /** Table de Ordenes */
        this.settings = {
            actions: false,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                    filter: false,
                    hide: true,
                },
                batch: {
                    title: 'Batch',
                    type: 'number',
                    filter: false,
                },
                order: {
                    title: 'Orden',
                    type: 'string',
                    filter: false,
                },
                cutsNumberTotal: {
                    title: 'N° cortes Total',
                    type: 'number',
                    filter: false,
                },
                currenCouts: {
                    title: 'Arrumes Salida Corrugador',
                    type: 'number',
                    filter: false,
                },
                ordenesMachineCount: {
                    title: 'Arrumes Entrada Maquina',
                    type: 'number',
                    filter: false,
                },
                diference: {
                    title: 'Pendientes por Atender',
                    type: 'number',
                    filter: false,
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargeReportOrdens();
    }
    ngOnInit() {
    }
    ChargeReportOrdens() {
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetReportOrdersList').subscribe((res) => {
            //REPORTOCUPATION=res;
            console.log("Report Total Ordenes:", res);
            this.ReportOrdens = res;
            this.source.load(res);
        });
        const contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60000);
        contador.subscribe((n) => {
            this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetReportOrdersList').subscribe((res) => {
                //REPORTOCUPATION=res;
                this.ReportOrdens = res;
                this.source.load(res);
            });
        });
    }
}
OrdenesComponent.ɵfac = function OrdenesComponent_Factory(t) { return new (t || OrdenesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
OrdenesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdenesComponent, selectors: [["ngx-ordenes"]], decls: 12, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function OrdenesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            Ordenes\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.ReportOrdens);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9vcmRlbmVzL29yZGVuZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdenesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ordenes',
                templateUrl: './ordenes.component.html',
                styleUrls: ['./ordenes.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/predictivo/predictivo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/analytics/predictivo/predictivo.component.ts ***!
  \********************************************************************/
/*! exports provided: PredictivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictivoComponent", function() { return PredictivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");










class PredictivoComponent {
    constructor(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        this.settings3 = {
            actions: false,
            columns: {
                // Maquina: {
                //   title: 'Maquina',
                //   type: 'string',
                //   filter: false,
                //   hide: true,
                // },
                maquina: {
                    title: 'Maquina',
                    type: 'string',
                    filter: false,
                },
                metrosPor10MinCorrugador: {
                    title: 'MetrosPor10MinCorrugador',
                    type: 'number',
                    filter: false,
                },
                metrosPor10MinMaquina: {
                    title: 'MetrosPor10MinMaquina',
                    type: 'number',
                    filter: false,
                },
                capacidadWip: {
                    title: 'CapacidadWip',
                    type: 'number',
                    filter: false,
                },
                ocupacionActual: {
                    title: 'OcupacionActual',
                    type: 'number',
                    filter: false,
                },
                anchoTotalAruumeOrden: {
                    title: 'AnchoTotalAruumeOrden',
                    type: 'number',
                    filter: false,
                },
                ocupacionPredictiva: {
                    title: 'OcupacionPredictiva',
                    type: 'number',
                    filter: false,
                },
                tiempoDetencionCorrugador: {
                    title: 'TiempoDetencionCorrugador',
                    type: 'number',
                    filter: false,
                },
                duracionDetencion: {
                    title: 'DuracionDetencion',
                    type: 'number',
                    filter: false,
                },
            },
        };
        this.source3 = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargePredictive();
    }
    ngOnInit() {
    }
    ChargePredictive() {
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetPredictiveList').subscribe((res) => {
            //REPORTOCUPATION=res;
            // console.log("Report Predictive:", res);
            this.GetPredictive = res;
            this.source3.load(res);
        });
        const contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30000);
        contador.subscribe((n) => {
            this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetPredictiveList').subscribe((res) => {
                //REPORTOCUPATION=res;
                this.GetPredictive = res;
                this.source3.load(res);
            });
        });
    }
}
PredictivoComponent.ɵfac = function PredictivoComponent_Factory(t) { return new (t || PredictivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
PredictivoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictivoComponent, selectors: [["ngx-predictivo"]], decls: 12, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function PredictivoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      Predictivo\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings3)("source", ctx.GetPredictive);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9wcmVkaWN0aXZvL3ByZWRpY3Rpdm8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PredictivoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-predictivo',
                templateUrl: './predictivo.component.html',
                styleUrls: ['./predictivo.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/reports/reports.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/analytics/reports/reports.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReportsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["ngx-reports"]], decls: 3, vars: 0, template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module-es2015.js.map