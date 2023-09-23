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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-home></app-home>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main #main class=\"main\" [ngClass]=\"activeMode ? 'darkMode' : ''\">\r\n  <header class=\"bg-top\">\r\n    <div class=\"content-container\">\r\n      <div class=\"header\">\r\n        <h1>todo</h1>\r\n        <img\r\n          src=\"/assets/images/icon-{{ mode }}.svg\"\r\n          (click)=\"changeMode()\"\r\n          alt=\"Icone de modo escuro e claro\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"input-box\">\r\n        <input\r\n          type=\"text\"\r\n          placeholder=\"Create a new todo...\"\r\n          (keyup.enter)=\"todoVerify()\"\r\n          [(ngModel)]=\"value\"\r\n        />\r\n        <span></span>\r\n      </div>\r\n\r\n      <div class=\"list-todo\">\r\n        <div class=\"item\" *ngFor=\"let data of dataToDo\">\r\n          <span [ngClass]=\"data.do ? 'finalized' : ''\">{{ data.description }}</span>\r\n          <img\r\n            class=\"delete\"\r\n            src=\"/assets/images/icon-cross.svg\"\r\n            alt=\"Ícone de delete\"\r\n            (click)=\"delete(data.description)\"\r\n          />\r\n          <div class=\"verify\" (click)=\"update(data)\" [ngClass]=\"data.do ? 'verifyTrue' : ''\">\r\n            <img src=\"/assets/images/icon-check.svg\" [ngClass]=\"data.do ? 'showImg' : ''\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <footer class=\"footer\">\r\n        <span class=\"items-number\">{{sizeList}} items left</span>\r\n        <div class=\"actions\">\r\n          <span class=\"all\">All</span>\r\n          <span>Active</span>\r\n          <span>Completed</span>\r\n        </div>\r\n        <span (click)=\"clear()\">Clear completed</span>\r\n      </footer>\r\n    </div>\r\n  </header>\r\n  <div class=\"bg-bottom\"></div>\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  display: grid;\n  grid-template-rows: 40vh 60vh;\n}\n\n.bg-top {\n  position: relative;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: url(/assets/images/bg-desktop-dark.jpg) no-repeat;\n  background-size: cover;\n  transition: 0.3s;\n}\n\n.bg-top img {\n  width: 150%;\n  background-repeat: no-repeat;\n}\n\n.bg-bottom {\n  background-color: var(--darkblue);\n  transition: 0.3s;\n}\n\n.content-container {\n  width: 600px;\n  height: 600px;\n  position: absolute;\n  top: 4.5em;\n  left: 50%;\n  transform: translateX(-50%);\n  color: var(--white);\n}\n\n.content-container .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 3em;\n}\n\n.content-container .header h1 {\n  text-transform: uppercase;\n  letter-spacing: 0.3cm;\n}\n\n.content-container .header img {\n  width: 30px;\n}\n\n.content-container .input-box {\n  position: relative;\n}\n\n.content-container .input-box input {\n  width: 100%;\n  padding: 1.15em 0 1em 3.5em;\n  font-size: 1.1em;\n  color: var(--white);\n  border: none;\n  border-radius: 5px;\n  background-color: var(--darkblack);\n  outline: none;\n}\n\n.content-container .input-box span {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  border: 2px solid var(--darkgray);\n}\n\n.content-container .list-todo {\n  height: 377px;\n  background-color: var(--darkblack);\n  margin-top: 1.5em;\n  border-radius: 5px 5px 0 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.content-container .list-todo .item {\n  padding: 1.2em 0 1em 3.8em;\n  border-bottom: 2px solid var(--darkgray);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.content-container .list-todo .item:hover img {\n  right: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.content-container .list-todo .item .delete {\n  width: 20px;\n  position: absolute;\n  right: -30px;\n}\n\n.content-container .list-todo .item .verify {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  border: 2px solid var(--darkgray);\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n}\n\n.content-container .list-todo .item .verify:hover {\n  transition: 0.3s;\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.content-container .list-todo .item .verify img {\n  display: none;\n  width: 15px;\n  height: 13px;\n}\n\n.content-container .list-todo .item .verify .showImg {\n  display: block;\n}\n\n.content-container .list-todo .item .verifyTrue {\n  background: linear-gradient(45deg, #57ddff, #c058f3);\n}\n\n.content-container .list-todo .item .finalized {\n  color: var(--gray);\n  font-style: italic;\n  text-decoration: line-through;\n}\n\n.content-container .footer {\n  width: 100%;\n  padding: 1em;\n  padding-bottom: 0.8em;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--darkblack);\n  position: absolute;\n  bottom: 0;\n  border-radius: 0 0 5px 5px;\n  border-top: 2px solid var(--darkgray);\n}\n\n.content-container .footer .items-number {\n  font-weight: 400;\n  text-transform: none;\n}\n\n.content-container .footer span {\n  font-weight: 700;\n  cursor: pointer;\n  color: var(--gray);\n  text-transform: capitalize;\n}\n\n.content-container .footer span:hover {\n  transition: 0.3s;\n  color: var(--white);\n}\n\n.content-container .footer .actions {\n  display: flex;\n  gap: 1.3em;\n}\n\n.content-container .footer .actions .all {\n  color: var(--blue);\n}\n\n.darkMode .bg-top {\n  background: url(/assets/images/bg-desktop-light.jpg) no-repeat;\n  background-size: cover;\n}\n\n.darkMode .bg-bottom {\n  background-color: var(--lightsatured);\n}\n\n.darkMode .content-container .input-box {\n  position: relative;\n}\n\n.darkMode .content-container .input-box input {\n  width: 100%;\n  padding: 1.15em 0 1em 3.5em;\n  font-size: 1.1em;\n  color: var(--darkblue);\n  border: none;\n  border-radius: 5px;\n  background-color: var(--light);\n  outline: none;\n}\n\n.darkMode .content-container .input-box span {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  border: 2px solid var(--lightSoSatured);\n}\n\n.darkMode .content-container .list-todo {\n  height: 377px;\n  background-color: var(--light);\n  margin-top: 1.5em;\n  border-radius: 5px 5px 0 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.darkMode .content-container .list-todo .item {\n  border-bottom: 2px solid var(--lightsatured);\n  color: var(--darkblack);\n}\n\n.darkMode .content-container .list-todo .item .verify {\n  border: 2px solid var(--lightSoSatured);\n}\n\n.darkMode .content-container .list-todo .item .verify:hover {\n  border-color: rgba(78, 77, 77, 0.6);\n}\n\n.darkMode .content-container .list-todo .item .finalized {\n  color: var(--lightdark);\n}\n\n.darkMode .content-container .footer {\n  background-color: var(--light);\n  border-top: 2px solid var(--lightsatured);\n}\n\n.darkMode .content-container .footer span {\n  color: var(--lightdark);\n}\n\n.darkMode .content-container .footer span:hover {\n  color: var(--darkgray);\n}\n\n@media screen and (max-width: 700px) {\n  .content-container {\n    width: 90%;\n    height: 600px;\n  }\n  .content-container .actions {\n    width: 92%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: -50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxBTkdVTEFSXFx0by1kby9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FDQ0o7O0FER0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDQU47O0FER0k7RUFDRSxXQUFBO0FDRE47O0FES0U7RUFDRSxrQkFBQTtBQ0hKOztBREtJO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDSk47O0FEUUU7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0UsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNOTjs7QURRTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNOUjs7QURTTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNQUjs7QURVTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNSUjs7QURVUTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUNSVjs7QURXUTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RWOztBRFlRO0VBQ0UsY0FBQTtBQ1ZWOztBRGNNO0VBQ0Usb0RBQUE7QUNaUjs7QURlTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ2JSOztBRGtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7QUNoQko7O0FEa0JJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQ2hCTjs7QURtQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDakJOOztBRG9CSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNsQk47O0FEcUJJO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNuQk47O0FEcUJNO0VBQ0Usa0JBQUE7QUNuQlI7O0FENEJFO0VBQ0UsOERBQUE7RUFDQSxzQkFBQTtBQ3pCSjs7QUQ0QkU7RUFDRSxxQ0FBQTtBQzFCSjs7QUQ4Qkk7RUFDRSxrQkFBQTtBQzVCTjs7QUQ4Qk07RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDNUJSOztBRCtCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQzdCUjs7QURpQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQy9CTjs7QURpQ007RUFDRSw0Q0FBQTtFQUNBLHVCQUFBO0FDL0JSOztBRGlDUTtFQUNFLHVDQUFBO0FDL0JWOztBRGlDVTtFQUNFLG1DQUFBO0FDL0JaOztBRG1DUTtFQUNFLHVCQUFBO0FDakNWOztBRHNDSTtFQUNFLDhCQUFBO0VBQ0EseUNBQUE7QUNwQ047O0FEc0NNO0VBQ0UsdUJBQUE7QUNwQ1I7O0FEc0NRO0VBQ0Usc0JBQUE7QUNwQ1Y7O0FEMkNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsYUFBQTtFQ3hDRjtFRDBDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDeENKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDB2aCA2MHZoO1xyXG59XHJcblxyXG4uYmctdG9wIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLWRlc2t0b3AtZGFyay5qcGcpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYmctYm90dG9tIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0LjVlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcblxyXG4gICAgaDEge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zY207XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxLjE1ZW0gMCAxZW0gMy41ZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmxhY2spO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFya2dyYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpc3QtdG9kbyB7XHJcbiAgICBoZWlnaHQ6IDM3N3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsYWNrKTtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAxLjJlbSAwIDFlbSAzLjhlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmtncmF5KTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAmOmhvdmVyIGltZyB7XHJcbiAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWxldGUge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52ZXJpZnkge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmtncmF5KTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2hvd0ltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52ZXJpZnlUcnVlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1N2RkZmYsICNjMDU4ZjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmluYWxpemVkIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmxhY2spO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZGFya2dyYXkpO1xyXG5cclxuICAgIC5pdGVtcy1udW1iZXIge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW46aG92ZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxLjNlbTtcclxuXHJcbiAgICAgIC5hbGwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIERBUksgTU9ERSBBQ1RJVkVcclxuLmRhcmtNb2RlIHtcclxuICAuYmctdG9wIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy1kZXNrdG9wLWxpZ2h0LmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5iZy1ib3R0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRzYXR1cmVkKTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICAuaW5wdXQtYm94IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMTVlbSAwIDFlbSAzLjVlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRTb1NhdHVyZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtdG9kbyB7XHJcbiAgICAgIGhlaWdodDogMzc3cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcclxuICAgICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGlnaHRzYXR1cmVkKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFya2JsYWNrKTtcclxuXHJcbiAgICAgICAgLnZlcmlmeSB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodFNvU2F0dXJlZCk7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg3OCwgNzcsIDc3LCAwLjYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbmFsaXplZCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHRkYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbGlnaHRzYXR1cmVkKTtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodGRhcmspO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC01MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDB2aCA2MHZoO1xufVxuXG4uYmctdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLWRlc2t0b3AtZGFyay5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5iZy10b3AgaW1nIHtcbiAgd2lkdGg6IDE1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iZy1ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQuNWVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG4uY29udGVudC1jb250YWluZXIgLmhlYWRlciBoMSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNjbTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5pbnB1dC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudC1jb250YWluZXIgLmlucHV0LWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxLjE1ZW0gMCAxZW0gMy41ZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmxhY2spO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5pbnB1dC1ib3ggc3BhbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrZ3JheSk7XG59XG4uY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyB7XG4gIGhlaWdodDogMzc3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibGFjayk7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyAuaXRlbSB7XG4gIHBhZGRpbmc6IDEuMmVtIDAgMWVtIDMuOGVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFya2dyYXkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtOmhvdmVyIGltZyB7XG4gIHJpZ2h0OiAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyAuaXRlbSAuZGVsZXRlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMHB4O1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW0gLnZlcmlmeSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrZ3JheSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC52ZXJpZnk6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC52ZXJpZnkgaW1nIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTNweDtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC52ZXJpZnkgLnNob3dJbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC52ZXJpZnlUcnVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTdkZGZmLCAjYzA1OGYzKTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC5maW5hbGl6ZWQge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uY29udGVudC1jb250YWluZXIgLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibGFjayk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRhcmtncmF5KTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIC5pdGVtcy1udW1iZXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY29udGVudC1jb250YWluZXIgLmZvb3RlciBzcGFuOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjNlbTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIC5hY3Rpb25zIC5hbGwge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59XG5cbi5kYXJrTW9kZSAuYmctdG9wIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLWRlc2t0b3AtbGlnaHQuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uZGFya01vZGUgLmJnLWJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0c2F0dXJlZCk7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5pbnB1dC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5pbnB1dC1ib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMS4xNWVtIDAgMWVtIDMuNWVtO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAuaW5wdXQtYm94IHNwYW4ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI1cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRTb1NhdHVyZWQpO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIHtcbiAgaGVpZ2h0OiAzNzdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0c2F0dXJlZCk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrYmxhY2spO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC52ZXJpZnkge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodFNvU2F0dXJlZCk7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW0gLnZlcmlmeTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg3OCwgNzcsIDc3LCAwLjYpO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC5maW5hbGl6ZWQge1xuICBjb2xvcjogdmFyKC0tbGlnaHRkYXJrKTtcbn1cbi5kYXJrTW9kZSAuY29udGVudC1jb250YWluZXIgLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0c2F0dXJlZCk7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5mb290ZXIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodGRhcmspO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIHNwYW46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tZGFya2dyYXkpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxuICAuY29udGVudC1jb250YWluZXIgLmFjdGlvbnMge1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.mode = "moon";
        this.activeMode = true;
    }
    ngOnInit() {
        this.list();
        this.loadTheme();
        if (localStorage.hasOwnProperty("darkmode")) {
            this.mode = "sun";
        }
    }
    // Validação do tarefa
    todoVerify() {
        if (!this.dataToDo ||
            (this.dataToDo && this.value && !this.newTaskExist())) {
            this.create();
        }
        else {
            alert("Campo não preenchido corretamente ou descrição já existente, tente novamente!");
        }
    }
    // Cria uma nova tarefa
    create() {
        this.dataToDo = new Array(); // Criando um array para colocar os objetos
        // Verificando se existe a propriedade/array 'dataToDo' no localStorage
        if (localStorage.hasOwnProperty("dataToDo")) {
            this.dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
        }
        this.dataToDo.push({ description: this.value, do: false }); // Adicionando um novo objeto ao array
        localStorage.setItem("dataToDo", JSON.stringify(this.dataToDo)); // Salvando no localStorage
        this.list();
    }
    // Lista as tarefas
    list() {
        // Pegando os valores da propriedade/array 'dataToDo'
        // Convertendo para JSON
        this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
        if (localStorage.hasOwnProperty("dataToDo")) {
            this.sizeList = this.dataToDo.length; // Pegando o tamanho da lista
        }
    }
    // Deleta uma tarefa
    delete(data) {
        this.dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
        let tmp = this.dataToDo.filter((item) => item.description !== data);
        localStorage.setItem("dataToDo", JSON.stringify(tmp)); // Salvando no localStorage
        this.list();
    }
    // Atualiza a lista quando há alguma alteração
    update(data) {
        const newDataToDo = this.dataToDo.map((item) => {
            if (item.description === data.description) {
                return Object.assign({}, item, { do: !data.do });
            }
            return item;
        });
        localStorage.setItem("dataToDo", JSON.stringify(newDataToDo)); // Salvando no localStorage
        this.list();
    }
    // Limpando a lista
    clear() {
        localStorage.removeItem("dataToDo");
        this.list();
    }
    saveMode() {
        // Verificando se existe a propriedade/array 'dataToDo' no localStorage
        if (localStorage.hasOwnProperty("sun")) {
            this.activeMode = true;
        }
        else {
            this.activeMode = false;
        }
    }
    // Verificando se a tarefa já existe
    newTaskExist() {
        this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
        let exist = this.dataToDo.find((item) => item.description === this.value);
        return !exist ? false : true;
    }
    // Mudando o tema
    darkLightMode() {
        this.activeMode = !this.activeMode;
    }
    // Carregando o tema escolhido
    loadTheme() {
        const darkmode = localStorage.getItem("darkmode");
        if (darkmode) {
            this.darkLightMode();
        }
    }
    // Verificação de alteração de temas
    changeMode() {
        this.darkLightMode();
        localStorage.removeItem("darkmode");
        this.mode = "moon";
        console.log(this.main.nativeElement.classList.contains("darkMode"));
        if (this.main.nativeElement.classList.contains("darkMode")) {
            localStorage.setItem("darkmode", "1"); // Salvando no localStorage
            this.mode = "sun";
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("main", { static: true })
], HomeComponent.prototype, "main", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ANGULAR\to-do\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map