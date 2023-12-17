"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pauser: () => (/* binding */ Pauser)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n\nclass Pauser extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container){\n        super(container);\n        this.handleClickMode = (mode)=>{\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            } else {\n                container.play();\n            }\n        };\n    }\n    clear() {}\n    init() {}\n    async interact() {}\n    isEnabled() {\n        return true;\n    }\n    reset() {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUNyRCxNQUFNQyxlQUFlRCxzRUFBc0JBO0lBQzlDRSxZQUFZQyxTQUFTLENBQUU7UUFDbkIsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsZUFBZSxHQUFHLENBQUNDO1lBQ3BCLElBQUlBLFNBQVMsU0FBUztnQkFDbEI7WUFDSjtZQUNBLE1BQU1GLFlBQVksSUFBSSxDQUFDQSxTQUFTO1lBQ2hDLElBQUlBLFVBQVVHLGtCQUFrQixJQUFJO2dCQUNoQ0gsVUFBVUksS0FBSztZQUNuQixPQUNLO2dCQUNESixVQUFVSyxJQUFJO1lBQ2xCO1FBQ0o7SUFDSjtJQUNBQyxRQUFRLENBQ1I7SUFDQUMsT0FBTyxDQUNQO0lBQ0EsTUFBTUMsV0FBVyxDQUNqQjtJQUNBQyxZQUFZO1FBQ1IsT0FBTztJQUNYO0lBQ0FDLFFBQVEsQ0FDUjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLWZyb250Ly4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXBhdXNlL2VzbS9QYXVzZXIuanM/YmQzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRlcm5hbEludGVyYWN0b3JCYXNlIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZXhwb3J0IGNsYXNzIFBhdXNlciBleHRlbmRzIEV4dGVybmFsSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrTW9kZSA9IChtb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmdldEFuaW1hdGlvblN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICB9XG4gICAgYXN5bmMgaW50ZXJhY3QoKSB7XG4gICAgfVxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJFeHRlcm5hbEludGVyYWN0b3JCYXNlIiwiUGF1c2VyIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJoYW5kbGVDbGlja01vZGUiLCJtb2RlIiwiZ2V0QW5pbWF0aW9uU3RhdHVzIiwicGF1c2UiLCJwbGF5IiwiY2xlYXIiLCJpbml0IiwiaW50ZXJhY3QiLCJpc0VuYWJsZWQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadExternalPauseInteraction: () => (/* binding */ loadExternalPauseInteraction)\n/* harmony export */ });\n/* harmony import */ var _Pauser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\");\n\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container)=>new _Pauser__WEBPACK_IMPORTED_MODULE_0__.Pauser(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQzNCLGVBQWVDLDZCQUE2QkMsTUFBTSxFQUFFQyxVQUFVLElBQUk7SUFDckUsTUFBTUQsT0FBT0UsYUFBYSxDQUFDLGlCQUFpQixDQUFDQyxZQUFjLElBQUlMLDJDQUFNQSxDQUFDSyxZQUFZRjtBQUN0RiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby1mcm9udC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1wYXVzZS9lc20vaW5kZXguanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXVzZXIgfSBmcm9tIFwiLi9QYXVzZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRXh0ZXJuYWxQYXVzZUludGVyYWN0aW9uKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkSW50ZXJhY3RvcihcImV4dGVybmFsUGF1c2VcIiwgKGNvbnRhaW5lcikgPT4gbmV3IFBhdXNlcihjb250YWluZXIpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6WyJQYXVzZXIiLCJsb2FkRXh0ZXJuYWxQYXVzZUludGVyYWN0aW9uIiwiZW5naW5lIiwicmVmcmVzaCIsImFkZEludGVyYWN0b3IiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js\n");

/***/ })

};
;