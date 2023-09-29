function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-home></app-home>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<main #main class=\"main\" [ngClass]=\"activeMode ? 'darkMode' : ''\">\r\n  <header class=\"bg-top\">\r\n    <div class=\"content-container\">\r\n      <div class=\"header\">\r\n        <h1>todo</h1>\r\n        <img\r\n          src=\"/assets/images/icon-{{ mode }}.svg\"\r\n          (click)=\"changeMode()\"\r\n          alt=\"Icone de modo escuro e claro\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"input-box\">\r\n        <input\r\n          type=\"text\"\r\n          placeholder=\"Create a new todo...\"\r\n          (keyup.enter)=\"todoVerify()\"\r\n          [(ngModel)]=\"value\"\r\n        />\r\n        <span></span>\r\n      </div>\r\n\r\n      <div class=\"list-todo\">\r\n        <div class=\"item\" *ngFor=\"let data of dataToDo\">\r\n          <span [ngClass]=\"data.do ? 'finalized' : ''\">{{ data.description }}</span>\r\n          <img\r\n            class=\"delete\"\r\n            src=\"/assets/images/icon-cross.svg\"\r\n            alt=\"Ícone de delete\"\r\n            (click)=\"delete(data.description)\"\r\n          />\r\n          <div class=\"verify\" (click)=\"update(data)\" [ngClass]=\"data.do ? 'verifyTrue' : ''\">\r\n            <img src=\"/assets/images/icon-check.svg\" [ngClass]=\"data.do ? 'showImg' : ''\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <footer class=\"footer\">\r\n        <span class=\"items-number\">{{sizeList}} items left</span>\r\n        <div class=\"actions\">\r\n          <button class=\"all\" disabled>All</button>\r\n          <button disabled>Active</button>\r\n          <button (click)=\"completedAll()\">Completed</button>\r\n        </div>\r\n        <button (click)=\"clear()\">Clear completed</button>\r\n      </footer>\r\n    </div>\r\n  </header>\r\n  <div class=\"bg-bottom\"></div>\r\n</main>\r\n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
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
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var routes = [];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".main {\n  display: grid;\n  grid-template-rows: 40vh 80vh;\n}\n\n.bg-top {\n  position: relative;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: url(/assets/images/bg-desktop-dark.jpg) no-repeat;\n  background-size: cover;\n  transition: 0.3s;\n}\n\n.bg-top img {\n  width: 150%;\n  background-repeat: no-repeat;\n}\n\n.bg-bottom {\n  background-color: var(--darkblue);\n  transition: 0.3s;\n}\n\n.content-container {\n  width: 600px;\n  height: 600px;\n  position: absolute;\n  top: 4.5em;\n  left: 50%;\n  transform: translateX(-50%);\n  color: var(--white);\n}\n\n.content-container .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 3em;\n}\n\n.content-container .header h1 {\n  text-transform: uppercase;\n  letter-spacing: 0.3cm;\n}\n\n.content-container .header img {\n  width: 30px;\n}\n\n.content-container .input-box {\n  position: relative;\n}\n\n.content-container .input-box input {\n  width: 100%;\n  padding: 1.15em 0 1em 3.5em;\n  font-size: 1.1em;\n  color: var(--white);\n  border: none;\n  border-radius: 5px;\n  background-color: var(--darkblack);\n  outline: none;\n}\n\n.content-container .input-box span {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  border: 2px solid var(--darkgray);\n}\n\n.content-container .list-todo {\n  height: 377px;\n  background-color: var(--darkblack);\n  margin-top: 1.5em;\n  border-radius: 5px 5px 0 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.content-container .list-todo .item {\n  padding: 1.2em 0 1em 3.8em;\n  border-bottom: 2px solid var(--darkgray);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.content-container .list-todo .item:hover img {\n  right: 30px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.content-container .list-todo .item .delete {\n  width: 20px;\n  position: absolute;\n  right: -30px;\n}\n\n.content-container .list-todo .item .verify {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  border: 2px solid var(--darkgray);\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n}\n\n.content-container .list-todo .item .verify:hover {\n  transition: 0.3s;\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.content-container .list-todo .item .verify img {\n  display: none;\n  width: 15px;\n  height: 13px;\n}\n\n.content-container .list-todo .item .verify .showImg {\n  display: block;\n}\n\n.content-container .list-todo .item .verifyTrue {\n  background: linear-gradient(45deg, #57ddff, #c058f3);\n}\n\n.content-container .list-todo .item .finalized {\n  color: var(--gray);\n  font-style: italic;\n  text-decoration: line-through;\n}\n\n.content-container .list-todo::-webkit-scrollbar {\n  display: none;\n}\n\n.content-container .footer {\n  width: 100%;\n  padding: 1em;\n  padding-bottom: 0.8em;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--darkblack);\n  position: absolute;\n  bottom: 0;\n  border-radius: 0 0 5px 5px;\n  border-top: 2px solid var(--darkgray);\n}\n\n.content-container .footer .items-number {\n  color: var(--gray);\n  font-weight: 400;\n  text-transform: none;\n}\n\n.content-container .footer button {\n  font-weight: 700;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--gray);\n  text-transform: capitalize;\n}\n\n.content-container .footer button:hover {\n  transition: 0.3s;\n  color: var(--white);\n}\n\n.content-container .footer .actions {\n  display: flex;\n  gap: 1.3em;\n}\n\n.content-container .footer .actions .all {\n  color: var(--blue);\n}\n\n.darkMode .bg-top {\n  background: url(/assets/images/bg-desktop-light.jpg) no-repeat;\n  background-size: cover;\n}\n\n.darkMode .bg-bottom {\n  background-color: var(--lightsatured);\n}\n\n.darkMode .content-container .input-box {\n  position: relative;\n}\n\n.darkMode .content-container .input-box input {\n  color: var(--darkblue);\n  background-color: var(--light);\n}\n\n.darkMode .content-container .input-box span {\n  border: 2px solid var(--lightSoSatured);\n}\n\n.darkMode .content-container .list-todo {\n  height: 380px;\n  background-color: var(--light);\n}\n\n.darkMode .content-container .list-todo .item {\n  border-bottom: 2px solid var(--lightsatured);\n  color: var(--darkblack);\n}\n\n.darkMode .content-container .list-todo .item .verify {\n  border: 2px solid var(--lightSoSatured);\n}\n\n.darkMode .content-container .list-todo .item .verify:hover {\n  border-color: rgba(78, 77, 77, 0.6);\n}\n\n.darkMode .content-container .list-todo .item .finalized {\n  color: var(--lightdark);\n}\n\n.darkMode .content-container .footer {\n  background-color: var(--light);\n  border-top: 2px solid var(--lightsatured);\n}\n\n.darkMode .content-container .footer button {\n  color: var(--lightdark);\n}\n\n.darkMode .content-container .footer button:hover {\n  color: var(--darkgray);\n}\n\n@media screen and (max-width: 700px) {\n  .content-container {\n    width: 90%;\n    height: 600px;\n  }\n  .content-container .actions {\n    width: 92%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: -50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxBTkdVTEFSXFx0by1kby9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FDQ0o7O0FER0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDQU47O0FER0k7RUFDRSxXQUFBO0FDRE47O0FES0U7RUFDRSxrQkFBQTtBQ0hKOztBREtJO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDSk47O0FEUUU7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0UsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNOTjs7QURRTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNOUjs7QURTTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNQUjs7QURVTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNSUjs7QURVUTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUNSVjs7QURXUTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RWOztBRFlRO0VBQ0UsY0FBQTtBQ1ZWOztBRGNNO0VBQ0Usb0RBQUE7QUNaUjs7QURlTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ2JSOztBRGtCRTtFQUNFLGFBQUE7QUNoQko7O0FEbUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQ2pCSjs7QURtQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNqQk47O0FEb0JJO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ2xCTjs7QURvQk07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDbEJSOztBRHNCSTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FDcEJOOztBRHNCTTtFQUNFLGtCQUFBO0FDcEJSOztBRDRCRTtFQUNFLDhEQUFBO0VBQ0Esc0JBQUE7QUN6Qko7O0FENEJFO0VBQ0UscUNBQUE7QUMxQko7O0FEOEJJO0VBQ0Usa0JBQUE7QUM1Qk47O0FEOEJNO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQzVCUjs7QUQrQk07RUFDRSx1Q0FBQTtBQzdCUjs7QURpQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUMvQk47O0FEaUNNO0VBQ0UsNENBQUE7RUFDQSx1QkFBQTtBQy9CUjs7QURpQ1E7RUFDRSx1Q0FBQTtBQy9CVjs7QURpQ1U7RUFDRSxtQ0FBQTtBQy9CWjs7QURtQ1E7RUFDRSx1QkFBQTtBQ2pDVjs7QURzQ0k7RUFDRSw4QkFBQTtFQUNBLHlDQUFBO0FDcENOOztBRHNDTTtFQUNFLHVCQUFBO0FDcENSOztBRHNDUTtFQUNFLHNCQUFBO0FDcENWOztBRDJDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGFBQUE7RUN4Q0Y7RUQwQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQ3hDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwdmggODB2aDtcclxufVxyXG5cclxuLmJnLXRvcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy1kZXNrdG9wLWRhcmsuanBnKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxufVxyXG5cclxuLmJnLWJvdHRvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNC41ZW07XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM2NtO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMS4xNWVtIDAgMWVtIDMuNWVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsYWNrKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmtncmF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saXN0LXRvZG8ge1xyXG4gICAgaGVpZ2h0OiAzNzdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibGFjayk7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgIC5pdGVtIHtcclxuICAgICAgcGFkZGluZzogMS4yZW0gMCAxZW0gMy44ZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrZ3JheSk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgJjpob3ZlciBpbWcge1xyXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVyaWZ5IHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrZ3JheSk7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3dJbWcge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVyaWZ5VHJ1ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTdkZGZmLCAjYzA1OGYzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpbmFsaXplZCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpc3QtdG9kbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibGFjayk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1kYXJrZ3JheSk7XHJcblxyXG4gICAgLml0ZW1zLW51bWJlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDEuM2VtO1xyXG5cclxuICAgICAgLmFsbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEQVJLIE1PREUgQUNUSVZFXHJcbi5kYXJrTW9kZSB7XHJcbiAgLmJnLXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctZGVza3RvcC1saWdodC5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuYmctYm90dG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0c2F0dXJlZCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgLmlucHV0LWJveCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRTb1NhdHVyZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtdG9kbyB7XHJcbiAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcclxuXHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGlnaHRzYXR1cmVkKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFya2JsYWNrKTtcclxuXHJcbiAgICAgICAgLnZlcmlmeSB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodFNvU2F0dXJlZCk7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg3OCwgNzcsIDc3LCAwLjYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbmFsaXplZCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHRkYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tbGlnaHRzYXR1cmVkKTtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0ZGFyayk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmtncmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHZoIDgwdmg7XG59XG5cbi5iZy10b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctZGVza3RvcC1kYXJrLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmJnLXRvcCBpbWcge1xuICB3aWR0aDogMTUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJnLWJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNC41ZW07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuaGVhZGVyIGgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2NtO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG4uY29udGVudC1jb250YWluZXIgLmlucHV0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuaW5wdXQtYm94IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuMTVlbSAwIDFlbSAzLjVlbTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibGFjayk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY29udGVudC1jb250YWluZXIgLmlucHV0LWJveCBzcGFuIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmtncmF5KTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIHtcbiAgaGVpZ2h0OiAzNzdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsYWNrKTtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIHtcbiAgcGFkZGluZzogMS4yZW0gMCAxZW0gMy44ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrZ3JheSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW06aG92ZXIgaW1nIHtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC5kZWxldGUge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTMwcHg7XG59XG4uY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyAuaXRlbSAudmVyaWZ5IHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmtncmF5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW0gLnZlcmlmeTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW0gLnZlcmlmeSBpbWcge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW0gLnZlcmlmeSAuc2hvd0ltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW0gLnZlcmlmeVRydWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1N2RkZmYsICNjMDU4ZjMpO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5saXN0LXRvZG8gLml0ZW0gLmZpbmFsaXplZCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGVudC1jb250YWluZXIgLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibGFjayk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRhcmtncmF5KTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIC5pdGVtcy1udW1iZXIge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5mb290ZXIgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjNlbTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIC5hY3Rpb25zIC5hbGwge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59XG5cbi5kYXJrTW9kZSAuYmctdG9wIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLWRlc2t0b3AtbGlnaHQuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uZGFya01vZGUgLmJnLWJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0c2F0dXJlZCk7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5pbnB1dC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5pbnB1dC1ib3ggaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5pbnB1dC1ib3ggc3BhbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0U29TYXR1cmVkKTtcbn1cbi5kYXJrTW9kZSAuY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyB7XG4gIGhlaWdodDogMzgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cbi5kYXJrTW9kZSAuY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyAuaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saWdodHNhdHVyZWQpO1xuICBjb2xvcjogdmFyKC0tZGFya2JsYWNrKTtcbn1cbi5kYXJrTW9kZSAuY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyAuaXRlbSAudmVyaWZ5IHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRTb1NhdHVyZWQpO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAubGlzdC10b2RvIC5pdGVtIC52ZXJpZnk6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoNzgsIDc3LCA3NywgMC42KTtcbn1cbi5kYXJrTW9kZSAuY29udGVudC1jb250YWluZXIgLmxpc3QtdG9kbyAuaXRlbSAuZmluYWxpemVkIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZGFyayk7XG59XG4uZGFya01vZGUgLmNvbnRlbnQtY29udGFpbmVyIC5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1saWdodHNhdHVyZWQpO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodGRhcmspO1xufVxuLmRhcmtNb2RlIC5jb250ZW50LWNvbnRhaW5lciAuZm9vdGVyIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG4gIC5jb250ZW50LWNvbnRhaW5lciAuYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC01MHB4O1xuICB9XG59Il19 */";

    /***/
  },

  /***/"./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
        this.mode = "moon";
        this.sizeList = 0;
        this.activeMode = true;
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.list();
          this.loadTheme();
          if (localStorage.hasOwnProperty("darkmode")) {
            this.mode = "sun";
          }
        }
        // Validação do tarefa
      }, {
        key: "todoVerify",
        value: function todoVerify() {
          if (!this.dataToDo || this.dataToDo && this.value && !this.newTaskExist()) {
            this.create();
          } else {
            alert("Campo não preenchido corretamente ou descrição já existente, tente novamente!");
          }
        }
        // Cria uma nova tarefa
      }, {
        key: "create",
        value: function create() {
          this.dataToDo = new Array(); // Criando um array para colocar os objetos
          // Verificando se existe a propriedade/array 'dataToDo' no localStorage
          if (localStorage.hasOwnProperty("dataToDo")) {
            this.dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
          }

          this.dataToDo.push({
            description: this.value,
            "do": false
          }); // Adicionando um novo objeto ao array
          localStorage.setItem("dataToDo", JSON.stringify(this.dataToDo)); // Salvando no localStorage
          this.list();
        }
        // Lista as tarefas
      }, {
        key: "list",
        value: function list() {
          // Pegando os valores da propriedade/array 'dataToDo'
          // Convertendo para JSON
          this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
          if (localStorage.hasOwnProperty("dataToDo")) {
            this.sizeList = this.dataToDo.length; // Pegando o tamanho da lista
          }
        }
        // Deleta uma tarefa
      }, {
        key: "delete",
        value: function _delete(data) {
          this.dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
          var tmp = this.dataToDo.filter(function (item) {
            return item.description !== data;
          });
          localStorage.setItem("dataToDo", JSON.stringify(tmp)); // Salvando no localStorage
          this.list();
        }
        // Atualiza a lista quando há alguma alteração
      }, {
        key: "update",
        value: function update(data) {
          var newDataToDo = this.dataToDo.map(function (item) {
            if (item.description === data.description) {
              return Object.assign({}, item, {
                "do": !data["do"]
              });
            }
            return item;
          });
          localStorage.setItem("dataToDo", JSON.stringify(newDataToDo)); // Salvando no localStorage
          this.list();
        }
        // Limpando a lista
      }, {
        key: "clear",
        value: function clear() {
          localStorage.removeItem("dataToDo");
          this.list();
        }
      }, {
        key: "completedAll",
        value: function completedAll() {
          if (localStorage.hasOwnProperty("dataToDo")) {
            var newDataToDo = this.dataToDo.map(function (item) {
              return Object.assign({}, item, {
                "do": true
              });
            });
            localStorage.setItem("dataToDo", JSON.stringify(newDataToDo)); // Salvando no localStorage
            console.log(this.dataToDo);
            this.list();
          }
        }
      }, {
        key: "saveMode",
        value: function saveMode() {
          // Verificando se existe a propriedade/array 'dataToDo' no localStorage
          if (localStorage.hasOwnProperty("sun")) {
            this.activeMode = true;
          } else {
            this.activeMode = false;
          }
        }
        // Verificando se a tarefa já existe
      }, {
        key: "newTaskExist",
        value: function newTaskExist() {
          var _this = this;
          this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
          var exist = this.dataToDo.find(function (item) {
            return item.description === _this.value;
          });
          return !exist ? false : true;
        }
        // Mudando o tema
      }, {
        key: "darkLightMode",
        value: function darkLightMode() {
          this.activeMode = !this.activeMode;
        }
        // Carregando o tema escolhido
      }, {
        key: "loadTheme",
        value: function loadTheme() {
          var darkmode = localStorage.getItem("darkmode");
          if (darkmode) {
            this.darkLightMode();
          }
        }
        // Verificação de alteração de temas
      }, {
        key: "changeMode",
        value: function changeMode() {
          this.darkLightMode();
          localStorage.removeItem("darkmode");
          this.mode = "moon";
          console.log(this.main.nativeElement.classList.contains("darkMode"));
          if (this.main.nativeElement.classList.contains("darkMode")) {
            localStorage.setItem("darkmode", "1"); // Salvando no localStorage
            this.mode = "sun";
          }
        }
      }]);
      return HomeComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("main", {
      "static": true
    })], HomeComponent.prototype, "main", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */"./src/app/components/home/home.component.scss"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
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

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\ANGULAR\to-do\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map