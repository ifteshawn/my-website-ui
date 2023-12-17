"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SquareDrawer: () => (/* binding */ SquareDrawer)\n/* harmony export */ });\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVlDLEtBQUtDLElBQUksQ0FBQztBQUNyQixNQUFNQztJQUNUQyxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFO1FBQzVCLE1BQU1DLGNBQWNELFNBQVNQLFdBQVdTLGdCQUFnQkQsY0FBYztRQUN0RUgsUUFBUUssSUFBSSxDQUFDLENBQUNGLGFBQWEsQ0FBQ0EsYUFBYUMsZUFBZUE7SUFDNUQ7SUFDQUUsZ0JBQWdCO1FBQ1osT0FBTztJQUNYO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8tZnJvbnQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanM/YTY3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaXhGYWN0b3IgPSBNYXRoLnNxcnQoMik7XG5leHBvcnQgY2xhc3MgU3F1YXJlRHJhd2VyIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZml4ZWRSYWRpdXMgPSByYWRpdXMgLyBmaXhGYWN0b3IsIGZpeGVkRGlhbWV0ZXIgPSBmaXhlZFJhZGl1cyAqIDI7XG4gICAgICAgIGNvbnRleHQucmVjdCgtZml4ZWRSYWRpdXMsIC1maXhlZFJhZGl1cywgZml4ZWREaWFtZXRlciwgZml4ZWREaWFtZXRlcik7XG4gICAgfVxuICAgIGdldFNpZGVzQ291bnQoKSB7XG4gICAgICAgIHJldHVybiA0O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJmaXhGYWN0b3IiLCJNYXRoIiwic3FydCIsIlNxdWFyZURyYXdlciIsImRyYXciLCJjb250ZXh0IiwicGFydGljbGUiLCJyYWRpdXMiLCJmaXhlZFJhZGl1cyIsImZpeGVkRGlhbWV0ZXIiLCJyZWN0IiwiZ2V0U2lkZXNDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSquareShape: () => (/* binding */ loadSquareShape)\n/* harmony export */ });\n/* harmony import */ var _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareDrawer */ \"(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\");\n\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\n        \"edge\",\n        \"square\"\n    ], new _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__.SquareDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QyxlQUFlQyxnQkFBZ0JDLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQ3hELE1BQU1ELE9BQU9FLFFBQVEsQ0FBQztRQUFDO1FBQVE7S0FBUyxFQUFFLElBQUlKLHVEQUFZQSxJQUFJRztBQUNsRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby1mcm9udC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zcXVhcmUvZXNtL2luZGV4LmpzP2M3MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3F1YXJlRHJhd2VyIH0gZnJvbSBcIi4vU3F1YXJlRHJhd2VyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFNxdWFyZVNoYXBlKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkU2hhcGUoW1wiZWRnZVwiLCBcInNxdWFyZVwiXSwgbmV3IFNxdWFyZURyYXdlcigpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6WyJTcXVhcmVEcmF3ZXIiLCJsb2FkU3F1YXJlU2hhcGUiLCJlbmdpbmUiLCJyZWZyZXNoIiwiYWRkU2hhcGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/index.js\n");

/***/ })

};
;