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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n\r\n    // mobile menu - hide and show depend on hamburger click\r\n    const mobileMenu = $('.mobileMenu');\r\n    const nav = $('nav');\r\n    mobileMenu.on('click', function(event) {\r\n        event.preventDefault();\r\n        nav.slideToggle();\r\n    })\r\n\r\n    // navigation with header distance\r\n    const links = $('a');\r\n    links.on('click',function(event){\r\n      event.preventDefault();\r\n      console.log(this);\r\n      $('html, body').animate({\r\n            scrollTop: $($(this).attr('href')).offset().top-200\r\n        }, 500);\r\n    });\r\n\r\n    // slider (animation instead)\r\n    // const slides = $('.slide');\r\n    // let slide = 0;\r\n    //\r\n    // function nextSlide() {\r\n    //   slides.eq(slide).addClass('hideInfo');\r\n    //   slide--;\r\n    //   if (slide < 0) {\r\n    //     slide = slides.length -1;\r\n    //   };\r\n    //   slides.eq(slide).removeClass('hideInfo');\r\n    // }\r\n\r\n    // const intervalId = setInterval(function(){\r\n    //   nextSlide();\r\n    // }, 3000);\r\n\r\n})\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./js/app.js\n// module id = 0\n// module chunks = 1\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })
/******/ ]);