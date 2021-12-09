/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/icons/icons.js":
/*!****************************!*\
  !*** ./src/icons/icons.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svg_customers_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/customers.svg */ \"./src/icons/svg/customers.svg\");\n/* harmony import */ var _svg_ring_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/ring.svg */ \"./src/icons/svg/ring.svg\");\n/* harmony import */ var _svg_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/search.svg */ \"./src/icons/svg/search.svg\");\n/* harmony import */ var _svg_button_export_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/button-export.svg */ \"./src/icons/svg/button-export.svg\");\n/* harmony import */ var _svg_button_import_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/button-import.svg */ \"./src/icons/svg/button-import.svg\");\n/* harmony import */ var _svg_dashboard_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/dashboard.svg */ \"./src/icons/svg/dashboard.svg\");\n/* harmony import */ var _svg_products_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/products.svg */ \"./src/icons/svg/products.svg\");\n/* harmony import */ var _svg_account_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg/account.svg */ \"./src/icons/svg/account.svg\");\n/* harmony import */ var _svg_settings_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/settings.svg */ \"./src/icons/svg/settings.svg\");\n/* harmony import */ var _svg_login_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/login.svg */ \"./src/icons/svg/login.svg\");\n/* harmony import */ var _svg_register_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svg/register.svg */ \"./src/icons/svg/register.svg\");\n/* harmony import */ var _svg_error_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg/error.svg */ \"./src/icons/svg/error.svg\");\n/* harmony import */ var _svg_button_link_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg/button-link.svg */ \"./src/icons/svg/button-link.svg\");\n/* harmony import */ var _svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svg/arrow-down.svg */ \"./src/icons/svg/arrow-down.svg\");\n/* harmony import */ var _svg_button_previous_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/button-previous.svg */ \"./src/icons/svg/button-previous.svg\");\n/* harmony import */ var _svg_cursor_down_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg/cursor-down.svg */ \"./src/icons/svg/cursor-down.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvaWNvbnMuanM/NTMzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2ljb25zL2ljb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N2Zy9jdXN0b21lcnMuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9yaW5nLnN2Zyc7XHJcbmltcG9ydCAnLi9zdmcvc2VhcmNoLnN2Zyc7XHJcbmltcG9ydCAnLi9zdmcvYnV0dG9uLWV4cG9ydC5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL2J1dHRvbi1pbXBvcnQuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9kYXNoYm9hcmQuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9wcm9kdWN0cy5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL2FjY291bnQuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9zZXR0aW5ncy5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL2xvZ2luLnN2Zyc7XHJcbmltcG9ydCAnLi9zdmcvcmVnaXN0ZXIuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9lcnJvci5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL2J1dHRvbi1saW5rLnN2Zyc7XHJcbmltcG9ydCAnLi9zdmcvYXJyb3ctZG93bi5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL2J1dHRvbi1wcmV2aW91cy5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL2N1cnNvci1kb3duLnN2Zyc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/icons/icons.js\n");

/***/ }),

/***/ "./src/icons/svg/account.svg":
/*!***********************************!*\
  !*** ./src/icons/svg/account.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-account-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-account\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2FjY291bnQuc3ZnPzNmMmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLHFCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLIiwiZmlsZSI6Ii4vc3JjL2ljb25zL3N2Zy9hY2NvdW50LnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYWNjb3VudC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1hY2NvdW50XCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/svg/account.svg\n");

/***/ }),

/***/ "./src/icons/svg/arrow-down.svg":
/*!**************************************!*\
  !*** ./src/icons/svg/arrow-down.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-arrow-down-usage\",\n      viewBox: \"0 0 13 12\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-arrow-down\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2Fycm93LWRvd24uc3ZnP2UyZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLHFCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLIiwiZmlsZSI6Ii4vc3JjL2ljb25zL3N2Zy9hcnJvdy1kb3duLnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYXJyb3ctZG93bi11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTMgMTJcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1hcnJvdy1kb3duXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/svg/arrow-down.svg\n");

/***/ }),

/***/ "./src/icons/svg/button-export.svg":
/*!*****************************************!*\
  !*** ./src/icons/svg/button-export.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-button-export-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-button-export\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2J1dHRvbi1leHBvcnQuc3ZnPzk3ODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLHFCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLIiwiZmlsZSI6Ii4vc3JjL2ljb25zL3N2Zy9idXR0b24tZXhwb3J0LnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYnV0dG9uLWV4cG9ydC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1idXR0b24tZXhwb3J0XCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/svg/button-export.svg\n");

/***/ }),

/***/ "./src/icons/svg/button-import.svg":
/*!*****************************************!*\
  !*** ./src/icons/svg/button-import.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-button-import-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-button-import\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2J1dHRvbi1pbXBvcnQuc3ZnPzZkNmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLHFCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLIiwiZmlsZSI6Ii4vc3JjL2ljb25zL3N2Zy9idXR0b24taW1wb3J0LnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYnV0dG9uLWltcG9ydC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1idXR0b24taW1wb3J0XCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/svg/button-import.svg\n");

/***/ }),

/***/ "./src/icons/svg/button-link.svg":
/*!***************************************!*\
  !*** ./src/icons/svg/button-link.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-button-link-usage\",\n      viewBox: \"0 0 21 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-button-link\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2J1dHRvbi1saW5rLnN2Zz8yZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL3NyYy9pY29ucy9zdmcvYnV0dG9uLWxpbmsuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1idXR0b24tbGluay11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjEgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1idXR0b24tbGlua1wiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons/svg/button-link.svg\n");

/***/ }),

/***/ "./src/icons/svg/button-previous.svg":
/*!*******************************************!*\
  !*** ./src/icons/svg/button-previous.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-button-previous-usage\",\n      viewBox: \"0 0 8 12\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-button-previous\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2J1dHRvbi1wcmV2aW91cy5zdmc/OGE4NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcscUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoiLi9zcmMvaWNvbnMvc3ZnL2J1dHRvbi1wcmV2aW91cy5zdmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWJ1dHRvbi1wcmV2aW91cy11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgOCAxMlwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaWNvbnMvc3ByaXRlLnN2ZyNpY29uLWJ1dHRvbi1wcmV2aW91c1wiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons/svg/button-previous.svg\n");

/***/ }),

/***/ "./src/icons/svg/cursor-down.svg":
/*!***************************************!*\
  !*** ./src/icons/svg/cursor-down.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cursor-down-usage\",\n      viewBox: \"0 0 10 5\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-cursor-down\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2N1cnNvci1kb3duLnN2Zz9hODA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL3NyYy9pY29ucy9zdmcvY3Vyc29yLWRvd24uc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jdXJzb3ItZG93bi11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTAgNVwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaWNvbnMvc3ByaXRlLnN2ZyNpY29uLWN1cnNvci1kb3duXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/svg/cursor-down.svg\n");

/***/ }),

/***/ "./src/icons/svg/customers.svg":
/*!*************************************!*\
  !*** ./src/icons/svg/customers.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-customers-usage\",\n      viewBox: \"0 0 22 18\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-customers\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2N1c3RvbWVycy5zdmc/ZDU1MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcscUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoiLi9zcmMvaWNvbnMvc3ZnL2N1c3RvbWVycy5zdmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWN1c3RvbWVycy11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjIgMThcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1jdXN0b21lcnNcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/icons/svg/customers.svg\n");

/***/ }),

/***/ "./src/icons/svg/dashboard.svg":
/*!*************************************!*\
  !*** ./src/icons/svg/dashboard.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-dashboard-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-dashboard\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2Rhc2hib2FyZC5zdmc/ZWQ3ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcscUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoiLi9zcmMvaWNvbnMvc3ZnL2Rhc2hib2FyZC5zdmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWRhc2hib2FyZC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1kYXNoYm9hcmRcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/icons/svg/dashboard.svg\n");

/***/ }),

/***/ "./src/icons/svg/error.svg":
/*!*********************************!*\
  !*** ./src/icons/svg/error.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-error-usage\",\n      viewBox: \"0 0 16 16\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-error\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2Vycm9yLnN2Zz8yZGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL3NyYy9pY29ucy9zdmcvZXJyb3Iuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1lcnJvci11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1lcnJvclwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons/svg/error.svg\n");

/***/ }),

/***/ "./src/icons/svg/login.svg":
/*!*********************************!*\
  !*** ./src/icons/svg/login.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-login-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-login\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL2xvZ2luLnN2Zz83YjBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL3NyYy9pY29ucy9zdmcvbG9naW4uc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1sb2dpbi11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1sb2dpblwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons/svg/login.svg\n");

/***/ }),

/***/ "./src/icons/svg/products.svg":
/*!************************************!*\
  !*** ./src/icons/svg/products.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-products-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-products\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL3Byb2R1Y3RzLnN2Zz85MjM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL3NyYy9pY29ucy9zdmcvcHJvZHVjdHMuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1wcm9kdWN0cy11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1wcm9kdWN0c1wiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons/svg/products.svg\n");

/***/ }),

/***/ "./src/icons/svg/register.svg":
/*!************************************!*\
  !*** ./src/icons/svg/register.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-register-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-register\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL3JlZ2lzdGVyLnN2Zz9kODA4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL3NyYy9pY29ucy9zdmcvcmVnaXN0ZXIuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1yZWdpc3Rlci11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1yZWdpc3RlclwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons/svg/register.svg\n");

/***/ }),

/***/ "./src/icons/svg/ring.svg":
/*!********************************!*\
  !*** ./src/icons/svg/ring.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-ring-usage\",\n      viewBox: \"0 0 18 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-ring\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL3Jpbmcuc3ZnPzE4MGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLHFCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLIiwiZmlsZSI6Ii4vc3JjL2ljb25zL3N2Zy9yaW5nLnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tcmluZy11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTggMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1yaW5nXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/svg/ring.svg\n");

/***/ }),

/***/ "./src/icons/svg/search.svg":
/*!**********************************!*\
  !*** ./src/icons/svg/search.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-search-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-search\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL3NlYXJjaC5zdmc/YjZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcscUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoiLi9zcmMvaWNvbnMvc3ZnL3NlYXJjaC5zdmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXNlYXJjaC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1zZWFyY2hcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/icons/svg/search.svg\n");

/***/ }),

/***/ "./src/icons/svg/settings.svg":
/*!************************************!*\
  !*** ./src/icons/svg/settings.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-settings-usage\",\n      viewBox: \"0 0 20 20\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-settings\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ZnL3NldHRpbmdzLnN2Zz8yY2Y2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL3NyYy9pY29ucy9zdmcvc2V0dGluZ3Muc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1zZXR0aW5ncy11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1zZXR0aW5nc1wiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/icons/svg/settings.svg\n");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9qcy9zY3JpcHQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzP2QxYzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./src/js/script.js ./src/scss/style.scss ./src/icons/icons.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/script.js */"./src/js/script.js");
__webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");
module.exports = __webpack_require__(/*! ./src/icons/icons.js */"./src/icons/icons.js");


/***/ })

/******/ });