(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagecontent {\n  margin: 10px 300px;\n}\n\n.maintitle {\n  background-color: #EEE;\n  height: 180px;\n  border-bottom: 1px solid #CCC;\n  background: linear-gradient(to right, rgba(44, 83, 158, 1) 0%, rgba(44, 83, 158, 1) 100%);\n  text-align: center;\n}\n\n.maintitle div:first-child {\n  display: inline-block;\n  color: #FFF;\n  font-size: 46px;\n  font-weight: bold;\n  margin-top: 48px;\n}\n\n.maintitle div:last-child {\n  color: #FFF;\n  font-size: 18px;\n}\n\n.normalmode {\n  margin-bottom: 340px;\n}\n\n.inlinemode {\n  margin-bottom: 340px;\n}\n\n.tabcontainer {\n  display: table;\n  width: 100%;\n  border-spacing: 2px;\n}\n\n.tab {\n  display: table-cell;\n  border-radius: 4px;\n  width: 33.33333%;\n  padding: 8px 0;\n  text-align: center;\n}\n\n.activetab {\n  background-color: #2C539E;\n  color: #FFF;\n}\n\n.inactivetab {\n  color: #2C539E;\n}\n\n.inactivetab:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.pagetext {\n  margin: 20px 0;\n}\n\nhr {\n  margin: 6px 0;\n  border: none;\n  height: 1px;\n  background-image: linear-gradient(to right, #DDD, #555, #DDD);\n}\n\n@media screen and (max-width: 1200px) {\n  .pagecontent {\n    margin: 10px 40px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"maintitle\">\n    <div>mydatepicker</div>\n    <div>Angular date picker</div>\n</div>\n<div class=\"pagecontent\">\n    <div class=\"tabcontainer\">\n        <div class=\"tab activetab\">mydatepicker</div>\n        <div class=\"tab inactivetab\" (click)=\"toNgxMyDatePicker()\">ngx-mydatepicker</div>\n        <div class=\"tab inactivetab\" (click)=\"toDateRangePicker()\">mydaterangepicker</div>\n    </div>\n\n    <div>\n        <hr/>\n        <h4><a id=\"normalmode\"></a>Normal mode</h4>\n        <div class=\"normalmode\">\n            <sample-date-picker-normal>loading...</sample-date-picker-normal>\n        </div>\n\n        <hr/>\n        <h4><a id=\"inlinemode\"></a>Inline mode</h4>\n        <div class=\"inlinemode\">\n            <sample-date-picker-inline>loading...</sample-date-picker-inline>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MyDatePickerApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatePickerApp", function() { return MyDatePickerApp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyDatePickerApp = /** @class */ (function () {
    function MyDatePickerApp() {
        console.log('constructor: MyDatePickerApp');
    }
    MyDatePickerApp.prototype.toNgxMyDatePicker = function () {
        window.open('http://kekeh.github.io/ngx-mydatepicker', '_self');
    };
    MyDatePickerApp.prototype.toDateRangePicker = function () {
        window.open('http://kekeh.github.io/mydaterangepicker', '_self');
    };
    MyDatePickerApp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mydatepicker-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            moduleId: module.i,
        }),
        __metadata("design:paramtypes", [])
    ], MyDatePickerApp);
    return MyDatePickerApp;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sample_date_picker_normal_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sample-date-picker-normal/index */ "./src/app/sample-date-picker-normal/index.ts");
/* harmony import */ var _sample_date_picker_inline_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample-date-picker-inline/index */ "./src/app/sample-date-picker-inline/index.ts");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerApp"], _sample_date_picker_normal_index__WEBPACK_IMPORTED_MODULE_5__["SampleDatePickerNormal"], _sample_date_picker_inline_index__WEBPACK_IMPORTED_MODULE_6__["SampleDatePickerInline"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerApp"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sample-date-picker-inline/index.ts":
/*!****************************************************!*\
  !*** ./src/app/sample-date-picker-inline/index.ts ***!
  \****************************************************/
/*! exports provided: SampleDatePickerInline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sample_date_picker_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-date-picker-inline */ "./src/app/sample-date-picker-inline/sample-date-picker-inline.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SampleDatePickerInline", function() { return _sample_date_picker_inline__WEBPACK_IMPORTED_MODULE_0__["SampleDatePickerInline"]; });




/***/ }),

/***/ "./src/app/sample-date-picker-inline/sample-date-picker-inline.html":
/*!**************************************************************************!*\
  !*** ./src/app/sample-date-picker-inline/sample-date-picker-inline.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <ul>\n        <li>\n            <span style=\"margin-right: 10px\">Locale:</span>\n            <span>\n                <select style=\"padding: 2px;cursor: pointer;font-size: 11px;min-width: 60px;\" (change)=\"onChangeLocale($event.target.value)\">\n                    <option *ngFor=\"let l of locales\">{{l}}</option>\n                </select>\n            </span>\n            <span> - </span>\n            <span>\n                <a href=\"https://github.com/kekeh/mydatepicker#locale-attribute\">How</a> to add a new locale.\n            </span>\n        </li>\n        <li>\n            <label>\n                <span>Disable past dates starting from 5th of the current day:</span>\n                <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onDisablePast($event.currentTarget.checked)\" [checked]=\"false\">\n            </label>\n        </li>\n        <li>\n            <label>\n                <span>Disable future dates starting from 5th of the current day:</span>\n                <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onDisableFuture($event.currentTarget.checked)\" [checked]=\"false\">\n            </label>\n        </li>\n        <li>\n            <label>\n                <span>Disable the 1st and the 3rd dates from the next month:</span>\n                <input style=\"cursor: pointer\"  type=\"checkbox\" (change)=\"onDisableSingleDates($event.currentTarget.checked)\" [checked]=\"false\">\n            </label>\n        </li>\n        <li>\n            <label>\n                <span>Disable weekends:</span>\n                <input style=\"cursor: pointer\"  type=\"checkbox\" (change)=\"onDisableWeekends($event.currentTarget.checked)\" [checked]=\"false\">\n            </label>\n        </li>\n    </ul>\n\n    <table style=\"width: 100%\">\n        <tr>\n            <td>\n                <my-date-picker [options]=\"myDatePickerInlineOptions\" (dateChanged)=\"onDateChanged($event)\"\n                                (inputFieldChanged)=\"onInputFieldChanged($event)\" (calendarViewChanged)=\"onCalendarViewChanged($event)\"\n                                [selDate]=\"selectedDateInline\" [locale]=\"locale\"></my-date-picker>\n            </td>\n            <td style=\"vertical-align: top\">\n                <div style=\"padding:4px;border-radius:4px;float:right\" [ngStyle]=\"{border: border}\">\n                    {{selectedTextInline}}\n                </div>\n            </td>\n        </tr>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/sample-date-picker-inline/sample-date-picker-inline.ts":
/*!************************************************************************!*\
  !*** ./src/app/sample-date-picker-inline/sample-date-picker-inline.ts ***!
  \************************************************************************/
/*! exports provided: SampleDatePickerInline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleDatePickerInline", function() { return SampleDatePickerInline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleDatePickerInline = /** @class */ (function () {
    function SampleDatePickerInline() {
        this.myDatePickerInlineOptions = {
            inline: true,
            disableUntil: { year: 0, month: 0, day: 0 },
            disableHeaderButtons: true,
            dateFormat: 'd.m.yyyy'
        };
        this.selectedDateInline = '';
        this.selectedTextInline = '';
        this.border = 'none';
        this.locale = 'en';
        this.locales = new Array('en', 'fr', 'ja', 'fi', 'es', 'hu', 'sv', 'nl', 'ru', 'uk', 'no', 'tr', 'pt-br', 'de', 'it', 'it-ch', 'pl', 'my', 'sk', 'sl', 'zh-cn', 'he', 'ro', 'ca', 'id', 'en-au', 'am-et', 'cs', 'el', 'kk', 'th', 'ko-kr', 'da', 'lt', 'vi', 'bn', 'bg', 'hr', 'ar', 'is', 'de-ch', 'fr-ch');
    }
    SampleDatePickerInline.prototype.ngOnInit = function () {
        console.log('onInit(): SampleDatePickerInline');
    };
    SampleDatePickerInline.prototype.onChangeLocale = function (locale) {
        this.locale = locale;
    };
    SampleDatePickerInline.prototype.onDisablePast = function (checked) {
        var date = new Date();
        // Disable/enable dates from 5th backward
        date.setDate(date.getDate() - 5);
        var copy = this.getCopyOfOptions();
        copy.disableUntil = checked ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : { year: 0, month: 0, day: 0 };
        this.myDatePickerInlineOptions = copy;
    };
    SampleDatePickerInline.prototype.onDisableFuture = function (checked) {
        var date = new Date();
        // Disable/enable dates from 5th forward
        date.setDate(date.getDate() + 5);
        var copy = this.getCopyOfOptions();
        copy.disableSince = checked ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : { year: 0, month: 0, day: 0 };
        this.myDatePickerInlineOptions = copy;
    };
    SampleDatePickerInline.prototype.onDisableSingleDates = function (checked) {
        var date = new Date();
        // Disable/enable next month 1st and 3rd days
        var copy = this.getCopyOfOptions();
        copy.disableDays = checked ? [{ year: date.getFullYear(), month: date.getMonth() + 2, day: 1 }, { year: date.getFullYear(), month: date.getMonth() + 2, day: 3 }] : [];
        this.myDatePickerInlineOptions = copy;
    };
    SampleDatePickerInline.prototype.onDisableWeekends = function (checked) {
        // Disable/enable weekends
        var copy = this.getCopyOfOptions();
        copy.disableWeekends = checked;
        this.myDatePickerInlineOptions = copy;
    };
    SampleDatePickerInline.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if (event.formatted !== '') {
            this.selectedTextInline = 'Formatted: ' + event.formatted + ' - epoc: ' + event.epoc;
            this.border = '1px solid #CCC';
        }
        else {
            this.selectedTextInline = '';
            this.border = 'none';
        }
    };
    SampleDatePickerInline.prototype.onInputFieldChanged = function (event) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    };
    SampleDatePickerInline.prototype.onCalendarViewChanged = function (event) {
        console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
    };
    SampleDatePickerInline.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerInlineOptions));
    };
    SampleDatePickerInline = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sample-date-picker-inline',
            template: __webpack_require__(/*! ./sample-date-picker-inline.html */ "./src/app/sample-date-picker-inline/sample-date-picker-inline.html"),
            moduleId: module.i,
        }),
        __metadata("design:paramtypes", [])
    ], SampleDatePickerInline);
    return SampleDatePickerInline;
}());



/***/ }),

/***/ "./src/app/sample-date-picker-normal/index.ts":
/*!****************************************************!*\
  !*** ./src/app/sample-date-picker-normal/index.ts ***!
  \****************************************************/
/*! exports provided: SampleDatePickerNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sample_date_picker_normal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-date-picker-normal */ "./src/app/sample-date-picker-normal/sample-date-picker-normal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SampleDatePickerNormal", function() { return _sample_date_picker_normal__WEBPACK_IMPORTED_MODULE_0__["SampleDatePickerNormal"]; });




/***/ }),

/***/ "./src/app/sample-date-picker-normal/sample-date-picker-normal.html":
/*!**************************************************************************!*\
  !*** ./src/app/sample-date-picker-normal/sample-date-picker-normal.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .settingstable,\n  .pickertable {\n    width: 100%;\n    border: none;\n  }\n\n  .pickertable {\n    margin-top: 20px;\n  }\n\n  .settingstable tr td,\n  .pickertable tr td {\n    width: 50%;\n    border: none;\n  }\n\n  .pickertable tr td {\n    vertical-align: top;\n  }\n\n  .selectedText {\n    padding: 4px;\n    border-radius: 4px;\n    float: left;\n  }\n  .buttonrow {\n    margin: 15px 4px;\n  }\n</style>\n\n<div>\n  <table class=\"settingstable\">\n    <tr>\n      <td>\n        <label>\n          <span>Disable component:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onDisableComponent($event.currentTarget.checked)\"\n                 [checked]=\"false\">\n        </label>\n      </td>\n      <td>\n        <label>\n          <span>Editable date field:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onEditableDateField($event.currentTarget.checked)\"\n                 [checked]=\"true\">\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <label>\n          <span>Show clear date button:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onShowClearDateButton($event.currentTarget.checked)\"\n                 [checked]=\"true\">\n        </label>\n      </td>\n      <td>\n        <label>\n          <span>Show input field:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onShowInputField($event.currentTarget.checked)\"\n                 [checked]=\"true\">\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <label>\n          <span>Align selector right:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onAlignSelectorRight($event.currentTarget.checked)\"\n                 [checked]=\"false\">\n        </label>\n      </td>\n      <td>\n        <label>\n          <span>Open selector top of input field:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\"\n                 (change)=\"onOpenSelectorTopOfInput($event.currentTarget.checked)\" [checked]=\"false\">\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <label>\n          <span>Show selector arrow:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onShowSelectorArrow($event.currentTarget.checked)\"\n                 [checked]=\"true\">\n        </label>\n      </td>\n      <td>\n        <label>\n          <span>Mark today:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onMarkToday($event.currentTarget.checked)\"\n                 [checked]=\"false\">\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <label>\n          <span>Highligh today:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onHighlightToday($event.currentTarget.checked)\"\n                 [checked]=\"false\">\n        </label>\n      </td>\n      <td>\n        <label>\n          <span>Show week numbers:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onShowWeekNumbers($event.currentTarget.checked)\"\n                 [checked]=\"false\">\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <label>\n          <span>Allow selection only current month:</span>\n          <input style=\"cursor: pointer\" type=\"checkbox\" (change)=\"onAllowSelectionOnlyCurrentMonth($event.currentTarget.checked)\"\n                 [checked]=\"true\">\n        </label>\n      </td>\n      <td>\n        <span style=\"margin-right: 10px\">Selector size:</span>\n        <span>\n                <select style=\"padding: 2px;cursor: pointer;font-size: 11px;min-width: 60px;\"\n                        (change)=\"onSelectorSize($event.target.value)\">\n                    <option *ngFor=\"let s of selectorSizes\">{{s}}</option>\n                </select>\n            </span>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <span style=\"margin-right: 10px\">Date format:</span>\n        <span>\n                    <select style=\"padding: 2px;cursor: pointer;font-size: 11px;min-width: 60px;\"\n                            (change)=\"onChangeDateFormat($event.target.value)\">\n                        <option *ngFor=\"let f of dateFormats\">{{f}}</option>\n                    </select>\n                </span>\n      </td>\n      <td>\n\n      </td>\n    </tr>\n\n\n\n\n\n\n    <tr>\n      <td>\n        <a href=\"https://github.com/kekeh/mydatepicker#options-attribute\">all options...</a>\n      </td>\n      <td>\n\n      </td>\n    </tr>\n  </table>\n\n  <div class=\"buttonrow\">\n    <button style=\"cursor: pointer\" type=\"button\" (click)=\"onToggleCalendar($event)\"\n            [ngStyle]=\"{'cursor': !myDatePickerNormalOptions.componentDisabled ? 'pointer': 'not-allowed'}\"\n            [disabled]=\"myDatePickerNormalOptions.componentDisabled\">Toggle\n    </button>\n    <button style=\"cursor: pointer\" type=\"button\" (click)=\"onClearDate($event)\"\n            [ngStyle]=\"{'cursor': !myDatePickerNormalOptions.componentDisabled ? 'pointer': 'not-allowed'}\"\n            [disabled]=\"myDatePickerNormalOptions.componentDisabled\">Clear\n    </button>\n  </div>\n\n\n  <table class=\"pickertable\">\n    <tr>\n      <td>\n        <my-date-picker #mydp=\"mydatepicker\" [options]=\"myDatePickerNormalOptions\"\n                        (dateChanged)=\"onDateChanged($event)\"\n                        (inputFieldChanged)=\"onInputFieldChanged($event)\"\n                        (calendarViewChanged)=\"onCalendarViewChanged($event)\"\n                        (calendarToggle)=\"onCalendarToggle($event)\"\n                        (inputFocusBlur)=\"onInputFocusBlur($event)\"\n                        [selDate]=\"selectedDateNormal\" [placeholder]=\"placeholderTxt\"></my-date-picker>\n      </td>\n      <td>\n        <div class=\"selectedText\" [ngStyle]=\"{border: border}\">\n          {{selectedTextNormal}}\n        </div>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/sample-date-picker-normal/sample-date-picker-normal.ts":
/*!************************************************************************!*\
  !*** ./src/app/sample-date-picker-normal/sample-date-picker-normal.ts ***!
  \************************************************************************/
/*! exports provided: SampleDatePickerNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleDatePickerNormal", function() { return SampleDatePickerNormal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SampleDatePickerNormal = /** @class */ (function () {
    function SampleDatePickerNormal() {
        this.myDatePickerNormalOptions = {
            todayBtnTxt: 'Today',
            dateFormat: 'dd mmm yyyy',
            firstDayOfWeek: 'mo',
            sunHighlight: true,
            height: '34px',
            width: '210px',
            alignSelectorRight: false,
            componentDisabled: false,
            showClearDateBtn: true,
            openSelectorTopOfInput: false,
            showSelectorArrow: true,
            openSelectorOnInputClick: false,
            showWeekNumbers: false,
            highlightDates: [],
            markDates: [],
            selectorHeight: '232px',
            selectorWidth: '252px',
            allowSelectionOnlyInCurrentMonth: true
        };
        this.selectedDateNormal = '';
        this.selectedTextNormal = '';
        this.border = 'none';
        this.placeholderTxt = 'Select a date';
        this.dateFormats = new Array('dd mmm yyyy', 'yyyy-mm-dd', 'dd.mm.yyyy', 'dd/mm/yyyy', 'mm/dd/yyyy');
        this.selectorSizes = new Array('normal', 'small');
        var date = new Date();
    }
    SampleDatePickerNormal.prototype.onDisableComponent = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.componentDisabled = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onEditableDateField = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.editableDateField = checked;
        copy.openSelectorOnInputClick = !checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowClearDateButton = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showClearDateBtn = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowInputField = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showInputField = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onAlignSelectorRight = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.alignSelectorRight = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onOpenSelectorTopOfInput = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.openSelectorTopOfInput = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowSelectorArrow = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showSelectorArrow = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onChangeDateFormat = function (format) {
        var copy = this.getCopyOfOptions();
        copy.dateFormat = format;
        this.myDatePickerNormalOptions = copy;
        this.selectedDateNormal = '';
    };
    SampleDatePickerNormal.prototype.onSelectorSize = function (size) {
        var copy = this.getCopyOfOptions();
        if (size === 'normal') {
            copy.selectorHeight = '232px';
            copy.selectorWidth = '252px';
            this.myDatePickerNormalOptions = copy;
        }
        else {
            copy.selectorHeight = '200px';
            copy.selectorWidth = '220px';
            this.myDatePickerNormalOptions = copy;
        }
    };
    SampleDatePickerNormal.prototype.onShowWeekNumbers = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showWeekNumbers = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onMarkToday = function (checked) {
        var d = new Date();
        var copy = this.getCopyOfOptions();
        copy.markDates = checked ? [{ dates: [{ year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() }], color: '#C30000' }] : [];
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onHighlightToday = function (checked) {
        var d = new Date();
        var copy = this.getCopyOfOptions();
        copy.highlightDates = checked ? [{ year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() }] : [];
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onAllowSelectionOnlyCurrentMonth = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.allowSelectionOnlyInCurrentMonth = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onToggleCalendar = function (event) {
        event.stopPropagation();
        this.mydp.openBtnClicked();
    };
    SampleDatePickerNormal.prototype.onClearDate = function (event) {
        event.stopPropagation();
        this.mydp.clearDate();
    };
    SampleDatePickerNormal.prototype.ngOnInit = function () {
        console.log('onInit(): SampleDatePickerNormal');
    };
    SampleDatePickerNormal.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if (event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc: ' + event.epoc;
            this.border = '1px solid #CCC';
            this.selectedDateNormal = event.formatted;
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    };
    SampleDatePickerNormal.prototype.onInputFieldChanged = function (event) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    };
    SampleDatePickerNormal.prototype.onCalendarViewChanged = function (event) {
        console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
    };
    SampleDatePickerNormal.prototype.onCalendarToggle = function (event) {
        console.log('onCalendarToggle(): Reason: ', event);
    };
    SampleDatePickerNormal.prototype.onInputFocusBlur = function (event) {
        console.log('onInputFocusBlur(): Reason: ', event.reason, ' - Value: ', event.value);
    };
    SampleDatePickerNormal.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerNormalOptions));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mydp'),
        __metadata("design:type", mydatepicker__WEBPACK_IMPORTED_MODULE_1__["MyDatePicker"])
    ], SampleDatePickerNormal.prototype, "mydp", void 0);
    SampleDatePickerNormal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sample-date-picker-normal',
            template: __webpack_require__(/*! ./sample-date-picker-normal.html */ "./src/app/sample-date-picker-normal/sample-date-picker-normal.html"),
            moduleId: module.i,
        }),
        __metadata("design:paramtypes", [])
    ], SampleDatePickerNormal);
    return SampleDatePickerNormal;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/keijo/code/ghpages/mydatepicker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map