"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/utils/icon.util.jsx":
/*!****************************************!*\
  !*** ./components/utils/icon.util.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icon; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n// Core packages\n\n\nvar _s = $RefreshSig$();\n\n// Font Awesome packages\nvar ref = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.mjs\"), library = ref.library, config = ref.config;\n\n// Load icons into\n/**\r\n * Icon factory utility.\r\n * Generates icon JSX and returns it. Keeps all icon packages isolated in here\r\n * \r\n * ! Can only distribute free icons\r\n * ? give users access to cheat sheet of free icons\r\n * ? pre-select those icons in a MD file\r\n * ? use MD file to only load those icons from the lib\r\n * \r\n * ! requiring the library will likely create a SSR issue\r\n * ! According to maintainers of @fortawesome the best solution will be to import the icon directly \r\n * ! and avoit the library module all together which is inline with MD loading plans\r\n * * https://github.com/FortAwesome/Font-Awesome/issues/19348\r\n *\r\n * @param \t{array} icon request props [ iconType, iconKey ]\r\n * @returns {jsx} \t<Icon />\r\n */ function Icon(param) {\n    var icon = param.icon;\n    _s();\n    var _icon = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(icon, 2), iconType = _icon[0], iconKey = _icon[1];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"circle-notch\"), stateIconKey = ref[0], setIconKey = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        return setIconKey(iconKey);\n    }, [\n        iconKey\n    ]);\n    return(// <FontAwesomeIcon icon={[ iconType, stateIconKey ]} />\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        class: \"fa-solid fa-\".concat(iconKey)\n    }, void 0, false, {\n        fileName: \"D:\\\\port\\\\components\\\\utils\\\\icon.util.jsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, this));\n}\n_s(Icon, \"S4hVNIucisMuFxEQfo+ZvBkBfRc=\");\n_c = Icon;\nvar _c;\n$RefreshReg$(_c, \"Icon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxzL2ljb24udXRpbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQjs7O0FBQTJDO0FBRTNDLHdCQUF3QjtBQUN4QixJQUE0QkUsR0FBNEMsR0FBNUNBLG1CQUFPLENBQUMscUdBQW1DLENBQUMsRUFBaEVDLE9BQU8sR0FBYUQsR0FBNEMsQ0FBaEVDLE9BQU8sRUFBRUMsTUFBTSxHQUFLRixHQUE0QyxDQUF2REUsTUFBTTtBQUN5QztBQUVoRSxrQkFBa0I7QUFFbEI7UUFpQjZCLElBQU0sR0FBTixLQUFRLENBQU5HLElBQUk7O0lBRWxDO0lBRUEsSUFBcUNOLEdBQXdCLEdBQXhCQSxRQUFRLENBQUM7SUFFOUNELFNBQVMsQ0FBRTtlQUFNVyxVQUFVLENBQUVGLE9BQU8sQ0FBRTtLQUFBLEVBQUU7O0tBQVcsQ0FBRTtJQUVyRCxPQUNDLHdEQUF3RDtrQkFDeEQsUUFBQ0csR0FBQztRQUFDQyxLQUFLLEVBQUUsY0FBYSxDQUFVLE9BQVJKLE9BQU8sQ0FBRTs7Ozs7WUFBTSxFQUN4QztBQUNGLENBQUM7R0FadUJILElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3V0aWxzL2ljb24udXRpbC5qc3g/ODlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlIHBhY2thZ2VzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIEZvbnQgQXdlc29tZSBwYWNrYWdlc1xyXG5jb25zdCB7IGxpYnJhcnksIGNvbmZpZyB9ID0gcmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJylcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5cclxuLy8gTG9hZCBpY29ucyBpbnRvXHJcblxyXG4vKipcclxuICogSWNvbiBmYWN0b3J5IHV0aWxpdHkuXHJcbiAqIEdlbmVyYXRlcyBpY29uIEpTWCBhbmQgcmV0dXJucyBpdC4gS2VlcHMgYWxsIGljb24gcGFja2FnZXMgaXNvbGF0ZWQgaW4gaGVyZVxyXG4gKiBcclxuICogISBDYW4gb25seSBkaXN0cmlidXRlIGZyZWUgaWNvbnNcclxuICogPyBnaXZlIHVzZXJzIGFjY2VzcyB0byBjaGVhdCBzaGVldCBvZiBmcmVlIGljb25zXHJcbiAqID8gcHJlLXNlbGVjdCB0aG9zZSBpY29ucyBpbiBhIE1EIGZpbGVcclxuICogPyB1c2UgTUQgZmlsZSB0byBvbmx5IGxvYWQgdGhvc2UgaWNvbnMgZnJvbSB0aGUgbGliXHJcbiAqIFxyXG4gKiAhIHJlcXVpcmluZyB0aGUgbGlicmFyeSB3aWxsIGxpa2VseSBjcmVhdGUgYSBTU1IgaXNzdWVcclxuICogISBBY2NvcmRpbmcgdG8gbWFpbnRhaW5lcnMgb2YgQGZvcnRhd2Vzb21lIHRoZSBiZXN0IHNvbHV0aW9uIHdpbGwgYmUgdG8gaW1wb3J0IHRoZSBpY29uIGRpcmVjdGx5IFxyXG4gKiAhIGFuZCBhdm9pdCB0aGUgbGlicmFyeSBtb2R1bGUgYWxsIHRvZ2V0aGVyIHdoaWNoIGlzIGlubGluZSB3aXRoIE1EIGxvYWRpbmcgcGxhbnNcclxuICogKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lL2lzc3Vlcy8xOTM0OFxyXG4gKlxyXG4gKiBAcGFyYW0gXHR7YXJyYXl9IGljb24gcmVxdWVzdCBwcm9wcyBbIGljb25UeXBlLCBpY29uS2V5IF1cclxuICogQHJldHVybnMge2pzeH0gXHQ8SWNvbiAvPlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbih7IGljb24gfSkge1xyXG5cclxuXHRjb25zdCBbIGljb25UeXBlLCBpY29uS2V5IF0gPSBpY29uXHJcblxyXG5cdGNvbnN0IFsgc3RhdGVJY29uS2V5LCBzZXRJY29uS2V5IF0gPSB1c2VTdGF0ZSgnY2lyY2xlLW5vdGNoJylcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiBzZXRJY29uS2V5KCBpY29uS2V5ICksIFsgaWNvbktleSBdIClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdC8vIDxGb250QXdlc29tZUljb24gaWNvbj17WyBpY29uVHlwZSwgc3RhdGVJY29uS2V5IF19IC8+XHJcblx0XHQ8aSBjbGFzcz17YGZhLXNvbGlkIGZhLSR7aWNvbktleX1gfT48L2k+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJlcXVpcmUiLCJsaWJyYXJ5IiwiY29uZmlnIiwiRm9udEF3ZXNvbWVJY29uIiwiSWNvbiIsImljb24iLCJpY29uVHlwZSIsImljb25LZXkiLCJzdGF0ZUljb25LZXkiLCJzZXRJY29uS2V5IiwiaSIsImNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/utils/icon.util.jsx\n"));

/***/ })

});