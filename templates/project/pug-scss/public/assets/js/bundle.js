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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_changeInnerHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/changeInnerHeight */ "./src/js/modules/changeInnerHeight.js");
/* harmony import */ var _modules_windowOrientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/windowOrientation */ "./src/js/modules/windowOrientation.js");
/* harmony import */ var _modules_addDeviceClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addDeviceClass */ "./src/js/modules/addDeviceClass.js");



Object(_modules_windowOrientation__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_changeInnerHeight__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_addDeviceClass__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/js/modules/addDeviceClass.js":
/*!******************************************!*\
  !*** ./src/js/modules/addDeviceClass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  window.onload = function () {
    var ua = navigator.userAgent;
    var body = document.body;

    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('Windows Phone') > 0) {
      body.classList.add('sp');
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
      body.classList.add('tab');
    } else {
      body.classList.add('pc');
    }
  };
});

/***/ }),

/***/ "./src/js/modules/changeInnerHeight.js":
/*!*********************************************!*\
  !*** ./src/js/modules/changeInnerHeight.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var event = 'onorientationchange' in window ? 'orientationchange' : 'resize';

  var heightChange = function heightChange() {
    setTimeout(function () {
      document.querySelector('main').style.height = "".concat(window.innerHeight, "px");
    }, 110);
  };

  window.addEventListener(event, heightChange, false);
  heightChange();
});

/***/ }),

/***/ "./src/js/modules/windowOrientation.js":
/*!*********************************************!*\
  !*** ./src/js/modules/windowOrientation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 画面幅・高さによってランドスケープかポートレートかを判別する処理。
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var event = 'onorientationchange' in window ? 'orientationchange' : 'resize';

  var orientationHandler = function orientationHandler(event) {
    setTimeout(function () {
      var w = parseInt(window.innerWidth);
      var h = parseInt(window.innerHeight);
      var target = document.getElementsByTagName('body')[0];

      if (w > h) {
        target.classList.add('landscape');
        target.classList.remove('portrait');
      } else {
        target.classList.remove('landscape');
        target.classList.add('portrait');
      }
    }, 200);
  };

  window.addEventListener(event, orientationHandler, false);
  orientationHandler();
});

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/bundle.js ./src/css/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/masahiro/Desktop/tmp/camp1705/src/js/bundle.js */"./src/js/bundle.js");
module.exports = __webpack_require__(/*! /Users/masahiro/Desktop/tmp/camp1705/src/css/style.scss */"./src/css/style.scss");


/***/ })

/******/ });