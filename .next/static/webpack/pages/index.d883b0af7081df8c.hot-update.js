"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sections/index/hero.jsx":
/*!********************************************!*\
  !*** ./components/sections/index/hero.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-type-animation */ \"./node_modules/react-type-animation/dist/esm/index.es.js\");\n/* harmony import */ var _structure_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../structure/section */ \"./components/structure/section.jsx\");\n/* harmony import */ var _structure_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../structure/container */ \"./components/structure/container.jsx\");\n/* harmony import */ var _utils_spacing_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/spacing.util */ \"./components/utils/spacing.util.jsx\");\n/* harmony import */ var _utils_icon_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/icon.util */ \"./components/utils/icon.util.jsx\");\n/* harmony import */ var _blocks_hero_bg_bg_color_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/hero.bg/bg-color-1 */ \"./components/blocks/hero.bg/bg-color-1.jsx\");\n/* harmony import */ var _styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/sections/index/hero.module.scss */ \"./styles/sections/index/hero.module.scss\");\n/* harmony import */ var _styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_blocks_button_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../styles/blocks/button.module.scss */ \"./styles/blocks/button.module.scss\");\n/* harmony import */ var _styles_blocks_button_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_blocks_button_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../content/index/hero.json */ \"./content/index/hero.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// import resume from \"../../../public/img/resume.pdf\";\n/**\r\n * TO DO LIST\r\n *\r\n * - Create a typog.modules.scss\r\n *   Load this module onto every component, and use predefined typography classes to keep typography consistent\r\n *\r\n * - space.modules.scss\r\n *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent\r\n */ function Hero() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Initializing\"), typingStatus = ref[0], setTypingStatus = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_structure_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        classProp: \"\".concat((_styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().section)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_structure_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                spacing: \"VerticalXXXL\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_2__.TypeAnimation, {\n                        className: \"\".concat((_styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().preHeader)),\n                        sequence: [\n                            _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.startDelay,\n                            function() {\n                                setTypingStatus(\"typing\");\n                            },\n                            _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.start,\n                            function() {\n                                setTypingStatus(\"typed\");\n                            },\n                            _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.deleteDelay,\n                            function() {\n                                setTypingStatus(\"deleting\");\n                            },\n                            _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.end,\n                            function() {\n                                setTypingStatus(\"deleted\");\n                            },\n                            _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.restartDelay, \n                        ],\n                        speed: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.speed,\n                        deletionSpeed: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.deletionSpeed,\n                        wrapper: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.intro.wrapper,\n                        repeat: Infinity\n                    }, void 0, false, {\n                        fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),\n                                children: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.header.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"\".concat((_styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header), \" \").concat((_styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().primaryDim)),\n                                children: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.header.usp\n                            }, void 0, false, {\n                                fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"\".concat((_styles_sections_index_hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().primaryBright), \" subtitle \").concat((0,_utils_spacing_util__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\n                                \"verticalLrg\", \n                            ])),\n                            children: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.paragraph\n                        }, void 0, false, {\n                            fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button \".concat((_styles_blocks_button_module_scss__WEBPACK_IMPORTED_MODULE_10___default().primary), \" leaveSite\"),\n                                onClick: function() {\n                                    return window.open(_content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.buttons.primary.url, \"_blank\");\n                                },\n                                children: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.buttons.primary.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/img/resume.pdf\",\n                                target: \"_blank\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"button \".concat((_styles_blocks_button_module_scss__WEBPACK_IMPORTED_MODULE_10___default().secondary), \" leaveSite\"),\n                                        children: _content_index_hero_json__WEBPACK_IMPORTED_MODULE_8__.buttons.tertiary.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 55\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blocks_hero_bg_bg_color_1__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                theme: \"bg-color-1\"\n            }, void 0, false, {\n                fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\port\\\\components\\\\sections\\\\index\\\\hero.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"iO/ojSHGMIpRu8SrOGo6cg4eORA=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL2luZGV4L2hlcm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDb0I7QUFFUDtBQUNJO0FBRUw7QUFFSjtBQUVZO0FBRWM7QUFDSjtBQUVSO0FBRXZELHVEQUF1RDtBQUV2RDs7O0lBYUUscUJBQ0UsUUFBQ0U7UUFBUVcsU0FBUyxFQUFFLEVBQUMsQ0FBZSxPQUFiTixJQUFJLENBQUNPLE9BQU8sQ0FBRTs7O2dCQUN4QkMsT0FBTyxFQUFFLGNBQWM7OzsrREFFOUJDLFNBQVMsRUFBRSxFQUFDLENBQWlCLE9BQWZULElBQUksQ0FBQ1UsU0FBUyxDQUFFO3dCQUM5QkMsQ0FBQUEsNkRBQVEsMkRBQUU7NEJBQ1JULENBQUFBLHdGQUFhLENBQUNXOzt1RkFFWlIsQ0FBQUEsNERBQUFBOzRCQUNGLENBQUM7OzRCQUVELG1FQUFNO2dDQUNKQSxhQUFBQSwwRkFBeUI7NEJBQzNCLENBQUM7NEJBQ0RILHNFQUFjYSxDQUFXOzRCQUN6QixXQUFNO2dDQUNKVixlQUFlLENBQUMsVUFBVTs0QkFDNUIsQ0FBQzs0QkFDREgsaUVBQWlCOzRCQUNqQixXQUFNO2dDQUNKRyxlQUFlLENBQUMsU0FBUzs0QkFDM0IsQ0FBQzs0QkFDREgsdUVBQWNlLENBQVk7eUJBQzNCO3dCQUNEQyxLQUFLLEVBQUVoQixPQUFPLENBQUNVLEtBQUssQ0FBQ00sS0FBSzt3QkFDMUJDO3dCQUNBQyxJQUFBQSwrREFBaUJSLENBQUs7d0JBQ3RCUyxNQUFNLEVBQUVDLFFBQVE7Ozs7OzRCQUNoQjtrQ0FDRiw4RUFBUTs7O2dDQUNGYjswQ0FBeUJQLE9BQU8sQ0FBQ3NCLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7OzBDQUNoRCw4REFBQ0YsSUFBRTtnQ0FBQ2QsU0FBUyxFQUFFLHVGQUFHVDswQ0FDZkUsaUVBQWtCOzs7OztvQ0FDaEI7Ozs7Ozs0QkFDRztrQ0FDVixRQUFDSztrQ0FDQzs7Z0NBRUk7NkJBQ0QsQ0FBQyxDQUFFO3NDQUVITDs7Ozs7Z0NBQ0M7Ozs7OzRCQUNJO2tDQUNWLFFBQUNLOzs7Z0NBRUdFO2dDQUNBdUIsT0FBTyxFQUFFOztpQ0FBd0Q7Ozs7OztvQ0FHMUQ7MENBSVIsUUFBQ00sR0FBQztnQ0FBQ0M7Z0NBQXVCQyxNQUFNLEVBQUMsNkVBQVE7O29DQUFDLEdBQUM7O3dDQUFTL0I7Ozs7Ozs7Ozs7OztvQ0FDTDs7Ozs7OzRCQUN4Qzs7Ozs7O29CQUNBOzBCQUNaLFFBQUNWO2dCQUFPNEMsS0FBSyxFQUFDOzs7OztvQkFBZTs7Ozs7O1lBQ3JCLENBQ1Y7QUFDSixDQUFDO0dBaEV1QnhDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb25zL2luZGV4L2hlcm8uanN4Pzk0OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHlwZUFuaW1hdGlvbiB9IGZyb20gXCJyZWFjdC10eXBlLWFuaW1hdGlvblwiO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uLy4uL3N0cnVjdHVyZS9zZWN0aW9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL3N0cnVjdHVyZS9jb250YWluZXJcIjtcclxuXHJcbmltcG9ydCBzcGFjZSBmcm9tIFwiLi4vLi4vdXRpbHMvc3BhY2luZy51dGlsXCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vdXRpbHMvaWNvbi51dGlsXCI7XHJcblxyXG5pbXBvcnQgSGVyb0JnIGZyb20gXCIuLi8uLi9ibG9ja3MvaGVyby5iZy9iZy1jb2xvci0xXCI7XHJcblxyXG5pbXBvcnQgaGVybyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3NlY3Rpb25zL2luZGV4L2hlcm8ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2Jsb2Nrcy9idXR0b24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCBjb250ZW50IGZyb20gXCIuLi8uLi8uLi9jb250ZW50L2luZGV4L2hlcm8uanNvblwiO1xyXG5cclxuLy8gaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy9yZXN1bWUucGRmXCI7XHJcblxyXG4vKipcclxuICogVE8gRE8gTElTVFxyXG4gKlxyXG4gKiAtIENyZWF0ZSBhIHR5cG9nLm1vZHVsZXMuc2Nzc1xyXG4gKiAgIExvYWQgdGhpcyBtb2R1bGUgb250byBldmVyeSBjb21wb25lbnQsIGFuZCB1c2UgcHJlZGVmaW5lZCB0eXBvZ3JhcGh5IGNsYXNzZXMgdG8ga2VlcCB0eXBvZ3JhcGh5IGNvbnNpc3RlbnRcclxuICpcclxuICogLSBzcGFjZS5tb2R1bGVzLnNjc3NcclxuICogICBMb2FkIHRoaXMgbW9kdWxlIG9udG8gZXZlcnkgY29tcG9uZW50LCBhbmQgdXNlIHByZWRlZmluZWQgc3BhY2lhbCBjbGFzc2VzIHRvIGtlZXAgZ2VvbWV0cnkgY29uc2lzdGVudFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKSB7XHJcbiAgY29uc3QgW3R5cGluZ1N0YXR1cywgc2V0VHlwaW5nU3RhdHVzXSA9IHVzZVN0YXRlKFwiSW5pdGlhbGl6aW5nXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gY2xhc3NQcm9wPXtgJHtoZXJvLnNlY3Rpb259YH0+XHJcbiAgICAgIDxDb250YWluZXIgc3BhY2luZz17XCJWZXJ0aWNhbFhYWExcIn0+XHJcbiAgICAgICAgPFR5cGVBbmltYXRpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aGVyby5wcmVIZWFkZXJ9YH1cclxuICAgICAgICAgIHNlcXVlbmNlPXtbXHJcbiAgICAgICAgICAgIGNvbnRlbnQuaW50cm8uc3RhcnREZWxheSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFR5cGluZ1N0YXR1cyhcInR5cGluZ1wiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudC5pbnRyby5zdGFydCxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFR5cGluZ1N0YXR1cyhcInR5cGVkXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50LmludHJvLmRlbGV0ZURlbGF5LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VHlwaW5nU3RhdHVzKFwiZGVsZXRpbmdcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQuaW50cm8uZW5kLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VHlwaW5nU3RhdHVzKFwiZGVsZXRlZFwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudC5pbnRyby5yZXN0YXJ0RGVsYXksXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgc3BlZWQ9e2NvbnRlbnQuaW50cm8uc3BlZWR9XHJcbiAgICAgICAgICBkZWxldGlvblNwZWVkPXtjb250ZW50LmludHJvLmRlbGV0aW9uU3BlZWR9XHJcbiAgICAgICAgICB3cmFwcGVyPXtjb250ZW50LmludHJvLndyYXBwZXJ9XHJcbiAgICAgICAgICByZXBlYXQ9e0luZmluaXR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtoZXJvLmhlYWRlcn0+e2NvbnRlbnQuaGVhZGVyLm5hbWV9PC9oMT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2hlcm8uaGVhZGVyfSAke2hlcm8ucHJpbWFyeURpbX1gfT5cclxuICAgICAgICAgICAge2NvbnRlbnQuaGVhZGVyLnVzcH1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtoZXJvLnByaW1hcnlCcmlnaHR9IHN1YnRpdGxlICR7c3BhY2UoW1xyXG4gICAgICAgICAgICAgIFwidmVydGljYWxMcmdcIixcclxuICAgICAgICAgICAgXSl9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbnRlbnQucGFyYWdyYXBofVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uICR7YnV0dG9uLnByaW1hcnl9IGxlYXZlU2l0ZWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGNvbnRlbnQuYnV0dG9ucy5wcmltYXJ5LnVybCwgXCJfYmxhbmtcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb250ZW50LmJ1dHRvbnMucHJpbWFyeS50aXRsZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiAgY2xhc3NOYW1lPXtgYnV0dG9uICR7YnV0dG9uLnNlY29uZGFyeX0gbGVhdmVTaXRlYH1cclxuICAgICAgICAgICAgb25DbGljaz17KCk9PndpbmRvdy5vcGVuKGNvbnRlbnQuYnV0dG9ucy50ZXJ0aWFyeS51cmwsIFwiX2JsYWNrXCIpfVxyXG4gICAgICAgICAgICA+e2NvbnRlbnQuYnV0dG9ucy50ZXJ0aWFyeS50aXRsZX08L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgPGEgaHJlZj1cIi9pbWcvcmVzdW1lLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiPiA8YnV0dG9uICBjbGFzc05hbWU9e2BidXR0b24gJHtidXR0b24uc2Vjb25kYXJ5fSBsZWF2ZVNpdGVgfVxyXG4gICAgICAgICAgICA+e2NvbnRlbnQuYnV0dG9ucy50ZXJ0aWFyeS50aXRsZX08L2J1dHRvbj48L2E+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEhlcm9CZyB0aGVtZT1cImJnLWNvbG9yLTFcIiAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVHlwZUFuaW1hdGlvbiIsIlNlY3Rpb24iLCJDb250YWluZXIiLCJzcGFjZSIsIkljb24iLCJIZXJvQmciLCJoZXJvIiwiYnV0dG9uIiwiY29udGVudCIsIkhlcm8iLCJ0eXBpbmdTdGF0dXMiLCJzZXRUeXBpbmdTdGF0dXMiLCJjbGFzc1Byb3AiLCJzZWN0aW9uIiwic3BhY2luZyIsImNsYXNzTmFtZSIsInByZUhlYWRlciIsInNlcXVlbmNlIiwiaW50cm8iLCJzdGFydERlbGF5Iiwic3RhcnQiLCJkZWxldGVEZWxheSIsImVuZCIsInJlc3RhcnREZWxheSIsInNwZWVkIiwiZGVsZXRpb25TcGVlZCIsIndyYXBwZXIiLCJyZXBlYXQiLCJJbmZpbml0eSIsImgxIiwiaGVhZGVyIiwibmFtZSIsInByaW1hcnlEaW0iLCJ1c3AiLCJwIiwicHJpbWFyeUJyaWdodCIsInBhcmFncmFwaCIsInByaW1hcnkiLCJvbkNsaWNrIiwid2luZG93Iiwib3BlbiIsImJ1dHRvbnMiLCJ1cmwiLCJ0aXRsZSIsImEiLCJocmVmIiwidGFyZ2V0Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/index/hero.jsx\n"));

/***/ })

});