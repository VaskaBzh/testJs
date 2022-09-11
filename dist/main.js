/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hero */ \"./src/modules/hero.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/score */ \"./src/modules/score.js\");\n\r\n\r\n\r\n\r\n(0,_modules_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://testJs/./src/index.js?");

/***/ }),

/***/ "./src/modules/hero.js":
/*!*****************************!*\
  !*** ./src/modules/hero.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _start_stop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-stop.js */ \"./src/modules/start-stop.js\");\n\r\nconst hero = () => {\r\n  const heroBlock = document.querySelector('.hero')\r\n  const startFunc = (e) => {\r\n    move(e)\r\n  }\r\n  const stopFunc = () => {\r\n    return\r\n  }\r\n\r\n  const move = (e) => {\r\n    if ((e.keyCode == '87' && heroBlock.offsetTop >= 55) || (e.keyCode == '38' && heroBlock.offsetTop >= 55)) {\r\n      heroBlock.style.top = `${heroBlock.offsetTop - 5}px`;\r\n    } else if ((e.keyCode == '83' && heroBlock.offsetTop <= 645) || (e.keyCode == '40' && heroBlock.offsetTop <= 645)) {\r\n      heroBlock.style.top = `${heroBlock.offsetTop + 5}px`;\r\n    } else if ((e.keyCode == '68' && heroBlock.offsetLeft <= 655) || (e.keyCode == '39' && heroBlock.offsetLeft <= 655)) {\r\n      heroBlock.style.left = `${heroBlock.offsetLeft + 5}px`;\r\n      heroBlock.style.transform = 'translate(-50%, -50%) scaleX(1)'\r\n    } else if ((e.keyCode == '65' && heroBlock.offsetLeft >= 45) || (e.keyCode == '37' && heroBlock.offsetLeft >= 45)) {\r\n      heroBlock.style.left = `${heroBlock.offsetLeft - 5}px`;\r\n      heroBlock.style.transform = 'translate(-50%, -50%) scaleX(-1)'\r\n    }\r\n  };\r\n\r\n  document.addEventListener('keydown', startFunc)\r\n\r\n  ;(0,_start_stop_js__WEBPACK_IMPORTED_MODULE_0__.startStop)(startFunc, stopFunc)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);\n\n//# sourceURL=webpack://testJs/./src/modules/hero.js?");

/***/ }),

/***/ "./src/modules/score.js":
/*!******************************!*\
  !*** ./src/modules/score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _start_stop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-stop.js */ \"./src/modules/start-stop.js\");\n\r\nconst score = () => {\r\n  const scoreVal = document.querySelector('.score')\r\n\r\n  let timer\r\n  let x = 0\r\n  const startTimer = () => {\r\n    timer = setTimeout(countdown, 2500)\r\n  }\r\n  const startFunc = (e) => {\r\n    if (e.keyCode == '87' || e.keyCode == '38' || e.keyCode == '83' || e.keyCode == '40' || e.keyCode == '68' || e.keyCode == '39' || e.keyCode == '65' || e.keyCode == '37') {\r\n      startTimer()\r\n\r\n      document.removeEventListener('keydown', startFunc)\r\n    }\r\n  }\r\n  const stopFunc = () => {\r\n    clearTimeout(timer)\r\n  }\r\n  const countdown = () => { \r\n    x = x + 10\r\n    scoreVal.innerHTML = x\r\n\r\n    startTimer()\r\n  }\r\n\r\n  document.addEventListener('keydown', startFunc)\r\n\r\n  ;(0,_start_stop_js__WEBPACK_IMPORTED_MODULE_0__.startStop)(startFunc, stopFunc)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (score);\n\n//# sourceURL=webpack://testJs/./src/modules/score.js?");

/***/ }),

/***/ "./src/modules/start-stop.js":
/*!***********************************!*\
  !*** ./src/modules/start-stop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startStop\": () => (/* binding */ startStop)\n/* harmony export */ });\nconst startStop = (func, funcStop) => {\r\n  document.addEventListener('keydown', (e) => {\r\n    if (e.keyCode == '27') {\r\n      funcStop()\r\n      document.removeEventListener('keydown', func)\r\n\r\n      document.querySelector('.continue').style.display = 'inline-flex'\r\n      document.querySelector('.continue').addEventListener('click', () => {\r\n        document.addEventListener('keydown', func)\r\n        document.querySelector('.continue').style.display = 'none'\r\n        // document.removeEventListener('keydown', func)\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://testJs/./src/modules/start-stop.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _start_stop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-stop.js */ \"./src/modules/start-stop.js\");\n\r\nconst timer = () => {\r\n  const timerBlock = document.querySelector('.timer')\r\n  let timer\r\n  let x = 60\r\n  const startFunc = () => {\r\n    timer = setTimeout(countdown, 1000)\r\n    document.removeEventListener('keydown', startFunc)\r\n  }\r\n  const stopFunc = () => {\r\n    clearTimeout(timer) \r\n  }\r\n  const startBtn = document.querySelector('.wid__btn')\r\n  function countdown(){\r\n    x--\r\n    timerBlock.innerHTML = x\r\n    \r\n    if (x < 0){\r\n      stopFunc()\r\n      alert('вы выйграли треш!!')\r\n    }\r\n    else {\r\n      startFunc()\r\n    }\r\n  }\r\n\r\n  document.addEventListener('keydown', startFunc)\r\n  ;(0,_start_stop_js__WEBPACK_IMPORTED_MODULE_0__.startStop)(startFunc, stopFunc)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://testJs/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;