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

/***/ "./validations/index.ts":
/*!******************************!*\
  !*** ./validations/index.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n\n// Funções de validação adicionais\nconst isCNPJ = (cnpj)=>{\n    // Implementação simplificada de validação de CNPJ (você pode usar uma lib como 'cpf-cnpj-validator' para validação completa)\n    return cnpj.length === 14 && !isNaN(Number(cnpj)); // Verificação simples (ajuste conforme necessário)\n};\nconst isCPF = (cpf)=>{\n    // Implementação simplificada de validação de CPF\n    return cpf.length === 11 && !isNaN(Number(cpf)); // Verificação simples (ajuste conforme necessário)\n};\nconst schema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    codigo: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"C\\xf3digo \\xe9 obrigat\\xf3rio\").max(6, \"Quantidade de caracteres excedida\"),\n    loja: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Loja \\xe9 obrigat\\xf3ria\").max(2),\n    nome: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3, \"Nome \\xe9 obrigat\\xf3rio\").max(40),\n    pessoa: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Pessoa \\xe9 obrigat\\xf3ria\").refine((val)=>val === \"F\" || val === \"J\", {\n        message: \"Pessoa deve ser F (F\\xedsica) ou J (Jur\\xeddica)\"\n    }),\n    endereco: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(0).max(80),\n    cep: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(8, \"CEP \\xe9 obrigat\\xf3rio\").max(8).length(8, \"CEP deve ter 8 d\\xedgitos\"),\n    bairro: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(0).max(),\n    cidade: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),\n    estado: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(2, \"Estado Obrigat\\xf3rio\").max(2),\n    status: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Status \\xe9 obrigat\\xf3rio\").refine((val)=>val === \"1\" || val === \"2\", {\n        message: \"Status deve ser 1 ou 2\"\n    }),\n    cnpj: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(11, \"Digite um CNPJ ou CPF\")//@ts-ignore\n    .refine((val, ctx)=>{\n        var _ctx_parent;\n        const pessoa = ctx === null || ctx === void 0 ? void 0 : (_ctx_parent = ctx.parent) === null || _ctx_parent === void 0 ? void 0 : _ctx_parent.pessoa;\n        if (pessoa === \"F\") {\n            return isCPF(val); // Se for pessoa física, valida CPF\n        } else if (pessoa === \"J\") {\n            return isCNPJ(val); // Se for pessoa jurídica, valida CNPJ\n        }\n        return true; // Caso contrário, ignora (valida normalmente)\n    }, {\n        message: \"CNPJ deve ser v\\xe1lido para pessoa jur\\xeddica ou CPF v\\xe1lido para pessoa f\\xedsica\"\n    }),\n    tipo: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Selecione um tipo\").refine((val)=>[\n            \"F\",\n            \"L\",\n            \"R\",\n            \"S\",\n            \"X\"\n        ].includes(val), {\n        message: \"Tipo deve ser um dos valores: F, L, R, S, X\"\n    }),\n    ddd: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(2, \"Adicione um DDD\"),\n    telefone: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Adicione um n\\xfamero de telefone\"),\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Adicione um email\"),\n    pais: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Digite um pa\\xeds\").max(3),\n    contato: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Adicione um contato\")\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxHQUFHLHFCQUFrQkMsR0FBRyxDQUFDO0lBQzlDc0IsU0FBU25DLGtDQUFDQSxDQUFDVyxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO0FBQzdCO0FBRUEsK0RBQWVKLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmFsaWRhdGlvbnMvaW5kZXgudHM/MTRkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcclxuXHJcbi8vIEZ1bsOnw7VlcyBkZSB2YWxpZGHDp8OjbyBhZGljaW9uYWlzXHJcbmNvbnN0IGlzQ05QSiA9IChjbnBqOiBzdHJpbmcpID0+IHtcclxuICAvLyBJbXBsZW1lbnRhw6fDo28gc2ltcGxpZmljYWRhIGRlIHZhbGlkYcOnw6NvIGRlIENOUEogKHZvY8OqIHBvZGUgdXNhciB1bWEgbGliIGNvbW8gJ2NwZi1jbnBqLXZhbGlkYXRvcicgcGFyYSB2YWxpZGHDp8OjbyBjb21wbGV0YSlcclxuICByZXR1cm4gY25wai5sZW5ndGggPT09IDE0ICYmICFpc05hTihOdW1iZXIoY25waikpOyAvLyBWZXJpZmljYcOnw6NvIHNpbXBsZXMgKGFqdXN0ZSBjb25mb3JtZSBuZWNlc3PDoXJpbylcclxufTtcclxuXHJcbmNvbnN0IGlzQ1BGID0gKGNwZjogc3RyaW5nKSA9PiB7XHJcbiAgLy8gSW1wbGVtZW50YcOnw6NvIHNpbXBsaWZpY2FkYSBkZSB2YWxpZGHDp8OjbyBkZSBDUEZcclxuICByZXR1cm4gY3BmLmxlbmd0aCA9PT0gMTEgJiYgIWlzTmFOKE51bWJlcihjcGYpKTsgLy8gVmVyaWZpY2HDp8OjbyBzaW1wbGVzIChhanVzdGUgY29uZm9ybWUgbmVjZXNzw6FyaW8pXHJcbn07XHJcblxyXG5jb25zdCBzY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgY29kaWdvOiB6LnN0cmluZygpLm1pbigxLCBcIkPDs2RpZ28gw6kgb2JyaWdhdMOzcmlvXCIpLm1heCg2LCBcIlF1YW50aWRhZGUgZGUgY2FyYWN0ZXJlcyBleGNlZGlkYVwiKSxcclxuICBsb2phOiB6LnN0cmluZygpLm1pbigxLCBcIkxvamEgw6kgb2JyaWdhdMOzcmlhXCIpLm1heCgyKSxcclxuICBub21lOiB6LnN0cmluZygpLm1pbigzLCBcIk5vbWUgw6kgb2JyaWdhdMOzcmlvXCIpLm1heCg0MCksXHJcbiAgcGVzc29hOiB6LnN0cmluZygpLm1pbigxLCBcIlBlc3NvYSDDqSBvYnJpZ2F0w7NyaWFcIilcclxuICAgIC5yZWZpbmUodmFsID0+IHZhbCA9PT0gJ0YnIHx8IHZhbCA9PT0gJ0onLCB7IG1lc3NhZ2U6IFwiUGVzc29hIGRldmUgc2VyIEYgKEbDrXNpY2EpIG91IEogKEp1csOtZGljYSlcIiB9KSxcclxuICBlbmRlcmVjbzogei5zdHJpbmcoKS5taW4oMCkubWF4KDgwKSxcclxuICBjZXA6IHouc3RyaW5nKCkubWluKDgsIFwiQ0VQIMOpIG9icmlnYXTDs3Jpb1wiKS5tYXgoOCkubGVuZ3RoKDgsIFwiQ0VQIGRldmUgdGVyIDggZMOtZ2l0b3NcIiksXHJcbiAgYmFpcnJvOiB6LnN0cmluZygpLm1pbigwKS5tYXgoKSxcclxuICBjaWRhZGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICBlc3RhZG86IHouc3RyaW5nKCkubWluKDIsIFwiRXN0YWRvIE9icmlnYXTDs3Jpb1wiKS5tYXgoMiksXHJcbiAgc3RhdHVzOiB6LnN0cmluZygpLm1pbigxLCBcIlN0YXR1cyDDqSBvYnJpZ2F0w7NyaW9cIilcclxuICAgIC5yZWZpbmUodmFsID0+IHZhbCA9PT0gJzEnIHx8IHZhbCA9PT0gJzInLCB7IG1lc3NhZ2U6IFwiU3RhdHVzIGRldmUgc2VyIDEgb3UgMlwiIH0pLFxyXG4gIGNucGo6IHouc3RyaW5nKCkubWluKDExLCBcIkRpZ2l0ZSB1bSBDTlBKIG91IENQRlwiKVxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICAucmVmaW5lKCh2YWwsIGN0eCkgPT4ge1xyXG4gICAgICBjb25zdCBwZXNzb2EgPSBjdHg/LnBhcmVudD8ucGVzc29hO1xyXG4gICAgICBpZiAocGVzc29hID09PSAnRicpIHtcclxuICAgICAgICByZXR1cm4gaXNDUEYodmFsKTsgIC8vIFNlIGZvciBwZXNzb2EgZsOtc2ljYSwgdmFsaWRhIENQRlxyXG4gICAgICB9IGVsc2UgaWYgKHBlc3NvYSA9PT0gJ0onKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQ05QSih2YWwpOyAvLyBTZSBmb3IgcGVzc29hIGp1csOtZGljYSwgdmFsaWRhIENOUEpcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTsgIC8vIENhc28gY29udHLDoXJpbywgaWdub3JhICh2YWxpZGEgbm9ybWFsbWVudGUpXHJcbiAgICB9LCB7XHJcbiAgICAgIG1lc3NhZ2U6IFwiQ05QSiBkZXZlIHNlciB2w6FsaWRvIHBhcmEgcGVzc29hIGp1csOtZGljYSBvdSBDUEYgdsOhbGlkbyBwYXJhIHBlc3NvYSBmw61zaWNhXCJcclxuICAgIH0pLFxyXG4gIHRpcG86IHouc3RyaW5nKCkubWluKDEsIFwiU2VsZWNpb25lIHVtIHRpcG9cIilcclxuICAgIC5yZWZpbmUodmFsID0+IFsnRicsICdMJywgJ1InLCAnUycsICdYJ10uaW5jbHVkZXModmFsKSwgeyBtZXNzYWdlOiBcIlRpcG8gZGV2ZSBzZXIgdW0gZG9zIHZhbG9yZXM6IEYsIEwsIFIsIFMsIFhcIiB9KSxcclxuICBkZGQ6IHouc3RyaW5nKCkubWluKDIsIFwiQWRpY2lvbmUgdW0gREREXCIpLFxyXG4gIHRlbGVmb25lOiB6LnN0cmluZygpLm1pbigxLCBcIkFkaWNpb25lIHVtIG7Dum1lcm8gZGUgdGVsZWZvbmVcIiksXHJcbiAgZW1haWw6IHouc3RyaW5nKCkubWluKDEsIFwiQWRpY2lvbmUgdW0gZW1haWxcIiksXHJcbiAgcGFpczogei5zdHJpbmcoKS5taW4oMSwgXCJEaWdpdGUgdW0gcGHDrXNcIikubWF4KDMpLFxyXG4gIGNvbnRhdG86IHouc3RyaW5nKCkubWluKDEsIFwiQWRpY2lvbmUgdW0gY29udGF0b1wiKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjaGVtYTtcclxuIl0sIm5hbWVzIjpbInoiLCJpc0NOUEoiLCJjbnBqIiwibGVuZ3RoIiwiaXNOYU4iLCJOdW1iZXIiLCJpc0NQRiIsImNwZiIsInNjaGVtYSIsIm9iamVjdCIsImNvZGlnbyIsInN0cmluZyIsIm1pbiIsIm1heCIsImxvamEiLCJub21lIiwicGVzc29hIiwicmVmaW5lIiwidmFsIiwibWVzc2FnZSIsImVuZGVyZWNvIiwiY2VwIiwiYmFpcnJvIiwiY2lkYWRlIiwib3B0aW9uYWwiLCJlc3RhZG8iLCJzdGF0dXMiLCJjdHgiLCJwYXJlbnQiLCJ0aXBvIiwiaW5jbHVkZXMiLCJkZGQiLCJ0ZWxlZm9uZSIsImVtYWlsIiwicGFpcyIsImNvbnRhdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./validations/index.ts\n"));

/***/ })

});