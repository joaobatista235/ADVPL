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

/***/ "./components/table/Pagination.tsx":
/*!*****************************************!*\
  !*** ./components/table/Pagination.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/Pagination.tsx\n\n\nconst Pagination = (param)=>{\n    let { currentPage, totalPages, onNext, onPrevious } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-8 flex justify-center items-center space-x-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: currentPage === 1,\n                onClick: onPrevious,\n                className: \"px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 transition hover:bg-gray-300\",\n                children: \"Anterior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Fatec\\\\ADVPL\\\\frontend\\\\components\\\\table\\\\Pagination.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-gray-600\",\n                children: [\n                    \"P\\xe1gina \",\n                    currentPage\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Fatec\\\\ADVPL\\\\frontend\\\\components\\\\table\\\\Pagination.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: currentPage === totalPages,\n                onClick: onNext,\n                className: \"px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 transition hover:bg-gray-300\",\n                children: \"Pr\\xf3xima\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Fatec\\\\ADVPL\\\\frontend\\\\components\\\\table\\\\Pagination.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Fatec\\\\ADVPL\\\\frontend\\\\components\\\\table\\\\Pagination.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNEJBQTRCOztBQUNGO0FBUzFCLE1BQU1DLGFBQXdDO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO3lCQUM1Riw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxVQUFVUCxnQkFBZ0I7Z0JBQzFCUSxTQUFTTDtnQkFDVEUsV0FBVTswQkFDWDs7Ozs7OzBCQUdELDhEQUFDSTtnQkFBS0osV0FBVTs7b0JBQWdCO29CQUFRTDs7Ozs7OzswQkFDeEMsOERBQUNNO2dCQUNDQyxVQUFVUCxnQkFBZ0JDO2dCQUMxQk8sU0FBU047Z0JBQ1RHLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7Ozs7S0FkQ047QUFvQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS9QYWdpbmF0aW9uLnRzeD9mNTc4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvUGFnaW5hdGlvbi50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQYWdpbmF0aW9uUHJvcHMge1xyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgdG90YWxQYWdlczogbnVtYmVyO1xyXG4gIG9uTmV4dDogKCkgPT4gdm9pZDtcclxuICBvblByZXZpb3VzOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uOiBSZWFjdC5GQzxQYWdpbmF0aW9uUHJvcHM+ID0gKHsgY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMsIG9uTmV4dCwgb25QcmV2aW91cyB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcbiAgICAgIG9uQ2xpY2s9e29uUHJldmlvdXN9XHJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkLWxnIGRpc2FibGVkOm9wYWNpdHktNTAgdHJhbnNpdGlvbiBob3ZlcjpiZy1ncmF5LTMwMFwiXHJcbiAgICA+XHJcbiAgICAgIEFudGVyaW9yXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5Qw6FnaW5hIHtjdXJyZW50UGFnZX08L3NwYW4+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlc31cclxuICAgICAgb25DbGljaz17b25OZXh0fVxyXG4gICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBkaXNhYmxlZDpvcGFjaXR5LTUwIHRyYW5zaXRpb24gaG92ZXI6YmctZ3JheS0zMDBcIlxyXG4gICAgPlxyXG4gICAgICBQcsOzeGltYVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwib25OZXh0Iiwib25QcmV2aW91cyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/table/Pagination.tsx\n"));

/***/ })

});