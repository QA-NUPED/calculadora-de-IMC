/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculation.ts":
/*!****************************!*\
  !*** ./src/calculation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateBMI = void 0;
function calculateBMI(weight, height) {
    var result = weight / (height * height);
    return result;
}
exports.calculateBMI = calculateBMI;


/***/ }),

/***/ "./src/levelBMI.ts":
/*!*************************!*\
  !*** ./src/levelBMI.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBMICategory = void 0;
function getBMICategory(bmi) {
    var IMC = ["Abaixo do Peso", "Peso Normal", "Sobrepeso"];
    if (bmi <= 18.59)
        return IMC[0];
    else if (bmi <= 24.99)
        return IMC[1];
    else if (bmi <= 29.99)
        return IMC[2];
    else
        return "Obeso";
}
exports.getBMICategory = getBMICategory;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var calculation_1 = __webpack_require__(/*! ./calculation */ "./src/calculation.ts");
var levelBMI_1 = __webpack_require__(/*! ./levelBMI */ "./src/levelBMI.ts");
document.addEventListener('DOMContentLoaded', function () {
    var calculateButton = document.getElementById('calculate');
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var resultDiv = document.getElementById('result');
    calculateButton.addEventListener('click', function () {
        var weight = Number(weightInput.value);
        var height = Number(heightInput.value) / 100;
        var bmi = calculation_1.calculateBMI(weight, height);
        var category = levelBMI_1.getBMICategory(bmi);
        resultDiv.textContent = "Seu IMC \u00E9 " + bmi.toFixed(2) + ". Categoria: " + category;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map