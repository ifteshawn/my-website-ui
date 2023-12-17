"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-attract";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-attract"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/Attractor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-attract/esm/Attractor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Attractor: () => (/* binding */ Attractor)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/Circle.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/Vector.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/Constants.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n/* harmony import */ var _Options_Classes_Attract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Options/Classes/Attract */ \"(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/Options/Classes/Attract.js\");\n\n\nclass Attractor extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(engine, container){\n        super(container);\n        this._clickAttract = ()=>{\n            const container = this.container;\n            if (!container.attract) {\n                container.attract = {\n                    particles: []\n                };\n            }\n            const { attract } = container;\n            if (!attract.finish) {\n                if (!attract.count) {\n                    attract.count = 0;\n                }\n                attract.count++;\n                if (attract.count === container.particles.count) {\n                    attract.finish = true;\n                }\n            }\n            if (attract.clicking) {\n                const mousePos = container.interactivity.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;\n                if (!attractRadius || attractRadius < 0 || !mousePos) {\n                    return;\n                }\n                this._processAttract(mousePos, attractRadius, new tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.Circle(mousePos.x, mousePos.y, attractRadius));\n            } else if (attract.clicking === false) {\n                attract.particles = [];\n            }\n            return;\n        };\n        this._hoverAttract = ()=>{\n            const container = this.container, mousePos = container.interactivity.mouse.position, attractRadius = container.retina.attractModeDistance;\n            if (!attractRadius || attractRadius < 0 || !mousePos) {\n                return;\n            }\n            this._processAttract(mousePos, attractRadius, new tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.Circle(mousePos.x, mousePos.y, attractRadius));\n        };\n        this._processAttract = (position, attractRadius, area)=>{\n            const container = this.container, attractOptions = container.actualOptions.interactivity.modes.attract;\n            if (!attractOptions) {\n                return;\n            }\n            const query = container.particles.quadTree.query(area, (p)=>this.isEnabled(p));\n            for (const particle of query){\n                const { dx, dy, distance } = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.getDistances)(particle.position, position);\n                const velocity = attractOptions.speed * attractOptions.factor;\n                const attractFactor = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.clamp)((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.getEasing)(attractOptions.easing)(1 - distance / attractRadius) * velocity, 0, attractOptions.maxSpeed);\n                const normVec = tsparticles_engine__WEBPACK_IMPORTED_MODULE_3__.Vector.create(distance === 0 ? velocity : dx / distance * attractFactor, distance === 0 ? velocity : dy / distance * attractFactor);\n                particle.position.subFrom(normVec);\n            }\n        };\n        this._engine = engine;\n        if (!container.attract) {\n            container.attract = {\n                particles: []\n            };\n        }\n        this.handleClickMode = (mode)=>{\n            const options = this.container.actualOptions, attract = options.interactivity.modes.attract;\n            if (!attract || mode !== \"attract\") {\n                return;\n            }\n            if (!container.attract) {\n                container.attract = {\n                    particles: []\n                };\n            }\n            container.attract.clicking = true;\n            container.attract.count = 0;\n            for (const particle of container.attract.particles){\n                if (!this.isEnabled(particle)) {\n                    continue;\n                }\n                particle.velocity.setTo(particle.initialVelocity);\n            }\n            container.attract.particles = [];\n            container.attract.finish = false;\n            setTimeout(()=>{\n                if (container.destroyed) {\n                    return;\n                }\n                if (!container.attract) {\n                    container.attract = {\n                        particles: []\n                    };\n                }\n                container.attract.clicking = false;\n            }, attract.duration * 1000);\n        };\n    }\n    clear() {}\n    init() {\n        const container = this.container, attract = container.actualOptions.interactivity.modes.attract;\n        if (!attract) {\n            return;\n        }\n        container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;\n    }\n    async interact() {\n        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === tsparticles_engine__WEBPACK_IMPORTED_MODULE_4__.mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode;\n        if (mouseMoveStatus && hoverEnabled && (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_5__.isInArray)(\"attract\", hoverMode)) {\n            this._hoverAttract();\n        } else if (clickEnabled && (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_5__.isInArray)(\"attract\", clickMode)) {\n            this._clickAttract();\n        }\n    }\n    isEnabled(particle) {\n        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events;\n        if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {\n            return false;\n        }\n        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;\n        return (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_5__.isInArray)(\"attract\", hoverMode) || (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_5__.isInArray)(\"attract\", clickMode);\n    }\n    loadModeOptions(options, ...sources) {\n        if (!options.attract) {\n            options.attract = new _Options_Classes_Attract__WEBPACK_IMPORTED_MODULE_6__.Attract();\n        }\n        for (const source of sources){\n            options.attract.load(source?.attract);\n        }\n    }\n    reset() {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYXR0cmFjdC9lc20vQXR0cmFjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdJO0FBQ3BGO0FBQzdDLE1BQU1TLGtCQUFrQlIsc0VBQXNCQTtJQUNqRFMsWUFBWUMsTUFBTSxFQUFFQyxTQUFTLENBQUU7UUFDM0IsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsYUFBYSxHQUFHO1lBQ2pCLE1BQU1ELFlBQVksSUFBSSxDQUFDQSxTQUFTO1lBQ2hDLElBQUksQ0FBQ0EsVUFBVUUsT0FBTyxFQUFFO2dCQUNwQkYsVUFBVUUsT0FBTyxHQUFHO29CQUFFQyxXQUFXLEVBQUU7Z0JBQUM7WUFDeEM7WUFDQSxNQUFNLEVBQUVELE9BQU8sRUFBRSxHQUFHRjtZQUNwQixJQUFJLENBQUNFLFFBQVFFLE1BQU0sRUFBRTtnQkFDakIsSUFBSSxDQUFDRixRQUFRRyxLQUFLLEVBQUU7b0JBQ2hCSCxRQUFRRyxLQUFLLEdBQUc7Z0JBQ3BCO2dCQUNBSCxRQUFRRyxLQUFLO2dCQUNiLElBQUlILFFBQVFHLEtBQUssS0FBS0wsVUFBVUcsU0FBUyxDQUFDRSxLQUFLLEVBQUU7b0JBQzdDSCxRQUFRRSxNQUFNLEdBQUc7Z0JBQ3JCO1lBQ0o7WUFDQSxJQUFJRixRQUFRSSxRQUFRLEVBQUU7Z0JBQ2xCLE1BQU1DLFdBQVdQLFVBQVVRLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDQyxhQUFhLEVBQUVDLGdCQUFnQlgsVUFBVVksTUFBTSxDQUFDQyxtQkFBbUI7Z0JBQ2xILElBQUksQ0FBQ0YsaUJBQWlCQSxnQkFBZ0IsS0FBSyxDQUFDSixVQUFVO29CQUNsRDtnQkFDSjtnQkFDQSxJQUFJLENBQUNPLGVBQWUsQ0FBQ1AsVUFBVUksZUFBZSxJQUFJdkIsc0RBQU1BLENBQUNtQixTQUFTUSxDQUFDLEVBQUVSLFNBQVNTLENBQUMsRUFBRUw7WUFDckYsT0FDSyxJQUFJVCxRQUFRSSxRQUFR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QSxTQUFTLEVBQUUyQyxVQUFVM0MsVUFBVXFCLGFBQWEsRUFBRVosUUFBUVQsVUFBVVEsYUFBYSxDQUFDQyxLQUFLLEVBQUU4QyxTQUFTLENBQUM1QixVQUFVbkIsaUJBQWlCbUMsUUFBUW5DLGFBQWEsRUFBRStDLE1BQU07UUFDOUssSUFBSSxDQUFDLENBQUM5QyxNQUFNUyxRQUFRLElBQUksQ0FBQ3FDLE9BQU9FLE9BQU8sQ0FBQ0MsTUFBTSxLQUFNLEVBQUNqRCxNQUFNQyxhQUFhLElBQUksQ0FBQzZDLE9BQU9NLE9BQU8sQ0FBQ0gsTUFBTSxHQUFHO1lBQ2pHLE9BQU87UUFDWDtRQUNBLE1BQU1DLFlBQVlKLE9BQU9FLE9BQU8sQ0FBQ2YsSUFBSSxFQUFFb0IsWUFBWVAsT0FBT00sT0FBTyxDQUFDbkIsSUFBSTtRQUN0RSxPQUFPaEQsNkRBQVNBLENBQUMsV0FBV2lFLGNBQWNqRSw2REFBU0EsQ0FBQyxXQUFXb0U7SUFDbkU7SUFDQUMsZ0JBQWdCcEIsT0FBTyxFQUFFLEdBQUdxQixPQUFPLEVBQUU7UUFDakMsSUFBSSxDQUFDckIsUUFBUXpDLE9BQU8sRUFBRTtZQUNsQnlDLFFBQVF6QyxPQUFPLEdBQUcsSUFBSU4sNkRBQU9BO1FBQ2pDO1FBQ0EsS0FBSyxNQUFNcUUsVUFBVUQsUUFBUztZQUMxQnJCLFFBQVF6QyxPQUFPLENBQUNnRSxJQUFJLENBQUNELFFBQVEvRDtRQUNqQztJQUNKO0lBQ0FpRSxRQUFRLENBQ1I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby1mcm9udC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1hdHRyYWN0L2VzbS9BdHRyYWN0b3IuanM/MDU4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXJjbGUsIEV4dGVybmFsSW50ZXJhY3RvckJhc2UsIFZlY3RvciwgY2xhbXAsIGdldERpc3RhbmNlcywgZ2V0RWFzaW5nLCBpc0luQXJyYXksIG1vdXNlTW92ZUV2ZW50LCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IEF0dHJhY3QgfSBmcm9tIFwiLi9PcHRpb25zL0NsYXNzZXMvQXR0cmFjdFwiO1xuZXhwb3J0IGNsYXNzIEF0dHJhY3RvciBleHRlbmRzIEV4dGVybmFsSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuX2NsaWNrQXR0cmFjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKCFjb250YWluZXIuYXR0cmFjdCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hdHRyYWN0ID0geyBwYXJ0aWNsZXM6IFtdIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJhY3QgfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICghYXR0cmFjdC5maW5pc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHJhY3QuY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmFjdC5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJhY3QuY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmFjdC5jb3VudCA9PT0gY29udGFpbmVyLnBhcnRpY2xlcy5jb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyYWN0LmZpbmlzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF0dHJhY3QuY2xpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZVBvcyA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrUG9zaXRpb24sIGF0dHJhY3RSYWRpdXMgPSBjb250YWluZXIucmV0aW5hLmF0dHJhY3RNb2RlRGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyYWN0UmFkaXVzIHx8IGF0dHJhY3RSYWRpdXMgPCAwIHx8ICFtb3VzZVBvcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NBdHRyYWN0KG1vdXNlUG9zLCBhdHRyYWN0UmFkaXVzLCBuZXcgQ2lyY2xlKG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIGF0dHJhY3RSYWRpdXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGF0dHJhY3QuY2xpY2tpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYXR0cmFjdC5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faG92ZXJBdHRyYWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIG1vdXNlUG9zID0gY29udGFpbmVyLmludGVyYWN0aXZpdHkubW91c2UucG9zaXRpb24sIGF0dHJhY3RSYWRpdXMgPSBjb250YWluZXIucmV0aW5hLmF0dHJhY3RNb2RlRGlzdGFuY2U7XG4gICAgICAgICAgICBpZiAoIWF0dHJhY3RSYWRpdXMgfHwgYXR0cmFjdFJhZGl1cyA8IDAgfHwgIW1vdXNlUG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0F0dHJhY3QobW91c2VQb3MsIGF0dHJhY3RSYWRpdXMsIG5ldyBDaXJjbGUobW91c2VQb3MueCwgbW91c2VQb3MueSwgYXR0cmFjdFJhZGl1cykpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcm9jZXNzQXR0cmFjdCA9IChwb3NpdGlvbiwgYXR0cmFjdFJhZGl1cywgYXJlYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIGF0dHJhY3RPcHRpb25zID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5hdHRyYWN0O1xuICAgICAgICAgICAgaWYgKCFhdHRyYWN0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gY29udGFpbmVyLnBhcnRpY2xlcy5xdWFkVHJlZS5xdWVyeShhcmVhLCAocCkgPT4gdGhpcy5pc0VuYWJsZWQocCkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJ0aWNsZSBvZiBxdWVyeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZHgsIGR5LCBkaXN0YW5jZSB9ID0gZ2V0RGlzdGFuY2VzKHBhcnRpY2xlLnBvc2l0aW9uLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBhdHRyYWN0T3B0aW9ucy5zcGVlZCAqIGF0dHJhY3RPcHRpb25zLmZhY3RvcjtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyYWN0RmFjdG9yID0gY2xhbXAoZ2V0RWFzaW5nKGF0dHJhY3RPcHRpb25zLmVhc2luZykoMSAtIGRpc3RhbmNlIC8gYXR0cmFjdFJhZGl1cykgKiB2ZWxvY2l0eSwgMCwgYXR0cmFjdE9wdGlvbnMubWF4U3BlZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1WZWMgPSBWZWN0b3IuY3JlYXRlKGRpc3RhbmNlID09PSAwID8gdmVsb2NpdHkgOiAoZHggLyBkaXN0YW5jZSkgKiBhdHRyYWN0RmFjdG9yLCBkaXN0YW5jZSA9PT0gMCA/IHZlbG9jaXR5IDogKGR5IC8gZGlzdGFuY2UpICogYXR0cmFjdEZhY3Rvcik7XG4gICAgICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24uc3ViRnJvbShub3JtVmVjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xuICAgICAgICBpZiAoIWNvbnRhaW5lci5hdHRyYWN0KSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXR0cmFjdCA9IHsgcGFydGljbGVzOiBbXSB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tNb2RlID0gKG1vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbnRhaW5lci5hY3R1YWxPcHRpb25zLCBhdHRyYWN0ID0gb3B0aW9ucy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmF0dHJhY3Q7XG4gICAgICAgICAgICBpZiAoIWF0dHJhY3QgfHwgbW9kZSAhPT0gXCJhdHRyYWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5hdHRyYWN0KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmF0dHJhY3QgPSB7IHBhcnRpY2xlczogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hdHRyYWN0LmNsaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hdHRyYWN0LmNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFydGljbGUgb2YgY29udGFpbmVyLmF0dHJhY3QucGFydGljbGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlZChwYXJ0aWNsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5LnNldFRvKHBhcnRpY2xlLmluaXRpYWxWZWxvY2l0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIuYXR0cmFjdC5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hdHRyYWN0LmZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5hdHRyYWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hdHRyYWN0ID0geyBwYXJ0aWNsZXM6IFtdIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hdHRyYWN0LmNsaWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LCBhdHRyYWN0LmR1cmF0aW9uICogMTAwMCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgYXR0cmFjdCA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLmludGVyYWN0aXZpdHkubW9kZXMuYXR0cmFjdDtcbiAgICAgICAgaWYgKCFhdHRyYWN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLnJldGluYS5hdHRyYWN0TW9kZURpc3RhbmNlID0gYXR0cmFjdC5kaXN0YW5jZSAqIGNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbztcbiAgICB9XG4gICAgYXN5bmMgaW50ZXJhY3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBvcHRpb25zID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnMsIG1vdXNlTW92ZVN0YXR1cyA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PT0gbW91c2VNb3ZlRXZlbnQsIGV2ZW50cyA9IG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMsIGhvdmVyRW5hYmxlZCA9IGV2ZW50cy5vbkhvdmVyLmVuYWJsZSwgaG92ZXJNb2RlID0gZXZlbnRzLm9uSG92ZXIubW9kZSwgY2xpY2tFbmFibGVkID0gZXZlbnRzLm9uQ2xpY2suZW5hYmxlLCBjbGlja01vZGUgPSBldmVudHMub25DbGljay5tb2RlO1xuICAgICAgICBpZiAobW91c2VNb3ZlU3RhdHVzICYmIGhvdmVyRW5hYmxlZCAmJiBpc0luQXJyYXkoXCJhdHRyYWN0XCIsIGhvdmVyTW9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hvdmVyQXR0cmFjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsaWNrRW5hYmxlZCAmJiBpc0luQXJyYXkoXCJhdHRyYWN0XCIsIGNsaWNrTW9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrQXR0cmFjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRW5hYmxlZChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgb3B0aW9ucyA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLCBtb3VzZSA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLCBldmVudHMgPSAocGFydGljbGU/LmludGVyYWN0aXZpdHkgPz8gb3B0aW9ucy5pbnRlcmFjdGl2aXR5KS5ldmVudHM7XG4gICAgICAgIGlmICgoIW1vdXNlLnBvc2l0aW9uIHx8ICFldmVudHMub25Ib3Zlci5lbmFibGUpICYmICghbW91c2UuY2xpY2tQb3NpdGlvbiB8fCAhZXZlbnRzLm9uQ2xpY2suZW5hYmxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvdmVyTW9kZSA9IGV2ZW50cy5vbkhvdmVyLm1vZGUsIGNsaWNrTW9kZSA9IGV2ZW50cy5vbkNsaWNrLm1vZGU7XG4gICAgICAgIHJldHVybiBpc0luQXJyYXkoXCJhdHRyYWN0XCIsIGhvdmVyTW9kZSkgfHwgaXNJbkFycmF5KFwiYXR0cmFjdFwiLCBjbGlja01vZGUpO1xuICAgIH1cbiAgICBsb2FkTW9kZU9wdGlvbnMob3B0aW9ucywgLi4uc291cmNlcykge1xuICAgICAgICBpZiAoIW9wdGlvbnMuYXR0cmFjdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5hdHRyYWN0ID0gbmV3IEF0dHJhY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJhY3QubG9hZChzb3VyY2U/LmF0dHJhY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDaXJjbGUiLCJFeHRlcm5hbEludGVyYWN0b3JCYXNlIiwiVmVjdG9yIiwiY2xhbXAiLCJnZXREaXN0YW5jZXMiLCJnZXRFYXNpbmciLCJpc0luQXJyYXkiLCJtb3VzZU1vdmVFdmVudCIsIkF0dHJhY3QiLCJBdHRyYWN0b3IiLCJjb25zdHJ1Y3RvciIsImVuZ2luZSIsImNvbnRhaW5lciIsIl9jbGlja0F0dHJhY3QiLCJhdHRyYWN0IiwicGFydGljbGVzIiwiZmluaXNoIiwiY291bnQiLCJjbGlja2luZyIsIm1vdXNlUG9zIiwiaW50ZXJhY3Rpdml0eSIsIm1vdXNlIiwiY2xpY2tQb3NpdGlvbiIsImF0dHJhY3RSYWRpdXMiLCJyZXRpbmEiLCJhdHRyYWN0TW9kZURpc3RhbmNlIiwiX3Byb2Nlc3NBdHRyYWN0IiwieCIsInkiLCJfaG92ZXJBdHRyYWN0IiwicG9zaXRpb24iLCJhcmVhIiwiYXR0cmFjdE9wdGlvbnMiLCJhY3R1YWxPcHRpb25zIiwibW9kZXMiLCJxdWVyeSIsInF1YWRUcmVlIiwicCIsImlzRW5hYmxlZCIsInBhcnRpY2xlIiwiZHgiLCJkeSIsImRpc3RhbmNlIiwidmVsb2NpdHkiLCJzcGVlZCIsImZhY3RvciIsImF0dHJhY3RGYWN0b3IiLCJlYXNpbmciLCJtYXhTcGVlZCIsIm5vcm1WZWMiLCJjcmVhdGUiLCJzdWJGcm9tIiwiX2VuZ2luZSIsImhhbmRsZUNsaWNrTW9kZSIsIm1vZGUiLCJvcHRpb25zIiwic2V0VG8iLCJpbml0aWFsVmVsb2NpdHkiLCJzZXRUaW1lb3V0IiwiZGVzdHJveWVkIiwiZHVyYXRpb24iLCJjbGVhciIsImluaXQiLCJwaXhlbFJhdGlvIiwiaW50ZXJhY3QiLCJtb3VzZU1vdmVTdGF0dXMiLCJzdGF0dXMiLCJldmVudHMiLCJob3ZlckVuYWJsZWQiLCJvbkhvdmVyIiwiZW5hYmxlIiwiaG92ZXJNb2RlIiwiY2xpY2tFbmFibGVkIiwib25DbGljayIsImNsaWNrTW9kZSIsImxvYWRNb2RlT3B0aW9ucyIsInNvdXJjZXMiLCJzb3VyY2UiLCJsb2FkIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/Attractor.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/Options/Classes/Attract.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-attract/esm/Options/Classes/Attract.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Attract: () => (/* binding */ Attract)\n/* harmony export */ });\nclass Attract {\n    constructor(){\n        this.distance = 200;\n        this.duration = 0.4;\n        this.easing = \"ease-out-quad\";\n        this.factor = 1;\n        this.maxSpeed = 50;\n        this.speed = 1;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.distance !== undefined) {\n            this.distance = data.distance;\n        }\n        if (data.duration !== undefined) {\n            this.duration = data.duration;\n        }\n        if (data.easing !== undefined) {\n            this.easing = data.easing;\n        }\n        if (data.factor !== undefined) {\n            this.factor = data.factor;\n        }\n        if (data.maxSpeed !== undefined) {\n            this.maxSpeed = data.maxSpeed;\n        }\n        if (data.speed !== undefined) {\n            this.speed = data.speed;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYXR0cmFjdC9lc20vT3B0aW9ucy9DbGFzc2VzL0F0dHJhY3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BO0lBQ1RDLGFBQWM7UUFDVixJQUFJLENBQUNDLFFBQVEsR0FBRztRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBRztRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRztRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUc7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUc7SUFDakI7SUFDQUMsS0FBS0MsSUFBSSxFQUFFO1FBQ1AsSUFBSSxDQUFDQSxNQUFNO1lBQ1A7UUFDSjtRQUNBLElBQUlBLEtBQUtQLFFBQVEsS0FBS1EsV0FBVztZQUM3QixJQUFJLENBQUNSLFFBQVEsR0FBR08sS0FBS1AsUUFBUTtRQUNqQztRQUNBLElBQUlPLEtBQUtOLFFBQVEsS0FBS08sV0FBVztZQUM3QixJQUFJLENBQUNQLFFBQVEsR0FBR00sS0FBS04sUUFBUTtRQUNqQztRQUNBLElBQUlNLEtBQUtMLE1BQU0sS0FBS00sV0FBVztZQUMzQixJQUFJLENBQUNOLE1BQU0sR0FBR0ssS0FBS0wsTUFBTTtRQUM3QjtRQUNBLElBQUlLLEtBQUtKLE1BQU0sS0FBS0ssV0FBVztZQUMzQixJQUFJLENBQUNMLE1BQU0sR0FBR0ksS0FBS0osTUFBTTtRQUM3QjtRQUNBLElBQUlJLEtBQUtILFFBQVEsS0FBS0ksV0FBVztZQUM3QixJQUFJLENBQUNKLFFBQVEsR0FBR0csS0FBS0gsUUFBUTtRQUNqQztRQUNBLElBQUlHLEtBQUtGLEtBQUssS0FBS0csV0FBVztZQUMxQixJQUFJLENBQUNILEtBQUssR0FBR0UsS0FBS0YsS0FBSztRQUMzQjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8tZnJvbnQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYXR0cmFjdC9lc20vT3B0aW9ucy9DbGFzc2VzL0F0dHJhY3QuanM/ZWQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXR0cmFjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAyMDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjQ7XG4gICAgICAgIHRoaXMuZWFzaW5nID0gXCJlYXNlLW91dC1xdWFkXCI7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDUwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICB9XG4gICAgbG9hZChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRpc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkYXRhLmRpc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmVhc2luZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVhc2luZyA9IGRhdGEuZWFzaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmZhY3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZhY3RvciA9IGRhdGEuZmFjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLm1heFNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U3BlZWQgPSBkYXRhLm1heFNwZWVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkF0dHJhY3QiLCJjb25zdHJ1Y3RvciIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJlYXNpbmciLCJmYWN0b3IiLCJtYXhTcGVlZCIsInNwZWVkIiwibG9hZCIsImRhdGEiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/Options/Classes/Attract.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-attract/esm/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Attract: () => (/* reexport safe */ _Options_Classes_Attract__WEBPACK_IMPORTED_MODULE_1__.Attract),\n/* harmony export */   loadExternalAttractInteraction: () => (/* binding */ loadExternalAttractInteraction)\n/* harmony export */ });\n/* harmony import */ var _Attractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attractor */ \"(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/Attractor.js\");\n/* harmony import */ var _Options_Classes_Attract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Attract */ \"(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/Options/Classes/Attract.js\");\n\nasync function loadExternalAttractInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalAttract\", (container)=>new _Attractor__WEBPACK_IMPORTED_MODULE_0__.Attractor(engine, container), refresh);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYXR0cmFjdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNqQyxlQUFlQywrQkFBK0JDLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQ3ZFLE1BQU1ELE9BQU9FLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQ0MsWUFBYyxJQUFJTCxpREFBU0EsQ0FBQ0UsUUFBUUcsWUFBWUY7QUFDbkc7QUFDMEM7QUFDSSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby1mcm9udC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1hdHRyYWN0L2VzbS9pbmRleC5qcz9hMjMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJhY3RvciB9IGZyb20gXCIuL0F0dHJhY3RvclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRFeHRlcm5hbEF0dHJhY3RJbnRlcmFjdGlvbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZEludGVyYWN0b3IoXCJleHRlcm5hbEF0dHJhY3RcIiwgKGNvbnRhaW5lcikgPT4gbmV3IEF0dHJhY3RvcihlbmdpbmUsIGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuZXhwb3J0ICogZnJvbSBcIi4vT3B0aW9ucy9DbGFzc2VzL0F0dHJhY3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL09wdGlvbnMvSW50ZXJmYWNlcy9JQXR0cmFjdFwiO1xuIl0sIm5hbWVzIjpbIkF0dHJhY3RvciIsImxvYWRFeHRlcm5hbEF0dHJhY3RJbnRlcmFjdGlvbiIsImVuZ2luZSIsInJlZnJlc2giLCJhZGRJbnRlcmFjdG9yIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-attract/esm/index.js\n");

/***/ })

};
;