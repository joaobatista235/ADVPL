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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n\n// Funções de validação adicionais\nconst isCNPJ = (cnpj)=>{\n    // Implementação simplificada de validação de CNPJ (você pode usar uma lib como 'cpf-cnpj-validator' para validação completa)\n    return cnpj.length === 14 && !isNaN(Number(cnpj)); // Verificação simples (ajuste conforme necessário)\n};\nconst isCPF = (cpf)=>{\n    // Implementação simplificada de validação de CPF\n    return cpf.length === 11 && !isNaN(Number(cpf)); // Verificação simples (ajuste conforme necessário)\n};\nconst schema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    codigo: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"C\\xf3digo \\xe9 obrigat\\xf3rio\").max(6),\n    loja: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Loja \\xe9 obrigat\\xf3ria\").max(2),\n    nome: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3, \"Nome \\xe9 obrigat\\xf3rio\").max(40),\n    pessoa: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Pessoa \\xe9 obrigat\\xf3ria\").refine((val)=>val === \"F\" || val === \"J\", {\n        message: \"Pessoa deve ser F (F\\xedsica) ou J (Jur\\xeddica)\"\n    }),\n    endereco: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),\n    cep: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(8, \"CEP \\xe9 obrigat\\xf3rio\").length(8, \"CEP deve ter 8 d\\xedgitos\"),\n    bairro: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),\n    cidade: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),\n    estado: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(2, \"Estado Obrigat\\xf3rio\").max(2),\n    status: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Status \\xe9 obrigat\\xf3rio\").refine((val)=>val === \"1\" || val === \"2\", {\n        message: \"Status deve ser 1 ou 2\"\n    }),\n    cnpj: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(11, \"Digite um CNPJ ou CPF\")//@ts-ignore\n    .refine((val, ctx)=>{\n        var _ctx_parent;\n        const pessoa = ctx === null || ctx === void 0 ? void 0 : (_ctx_parent = ctx.parent) === null || _ctx_parent === void 0 ? void 0 : _ctx_parent.pessoa;\n        if (pessoa === \"F\") {\n            return isCPF(val); // Se for pessoa física, valida CPF\n        } else if (pessoa === \"J\") {\n            return isCNPJ(val); // Se for pessoa jurídica, valida CNPJ\n        }\n        return true; // Caso contrário, ignora (valida normalmente)\n    }, {\n        message: \"CNPJ deve ser v\\xe1lido para pessoa jur\\xeddica ou CPF v\\xe1lido para pessoa f\\xedsica\"\n    }),\n    tipo: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Selecione um tipo\").refine((val)=>[\n            \"F\",\n            \"L\",\n            \"R\",\n            \"S\",\n            \"X\"\n        ].includes(val), {\n        message: \"Tipo deve ser um dos valores: F, L, R, S, X\"\n    }),\n    ddd: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(2, \"Adicione um DDD\"),\n    telefone: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Adicione um n\\xfamero de telefone\"),\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Adicione um email\"),\n    pais: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Digite um pa\\xeds\").max(3),\n    contato: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Adicione um contato\")\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNXLE1BQU0sR0FBR0MsR0FBRyxDQUFDLEdBQUc7QUFDN0I7QUFFQSwrREFBZUosTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi92YWxpZGF0aW9ucy9pbmRleC50cz8xNGQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5cclxuLy8gRnVuw6fDtWVzIGRlIHZhbGlkYcOnw6NvIGFkaWNpb25haXNcclxuY29uc3QgaXNDTlBKID0gKGNucGo6IHN0cmluZykgPT4ge1xyXG4gIC8vIEltcGxlbWVudGHDp8OjbyBzaW1wbGlmaWNhZGEgZGUgdmFsaWRhw6fDo28gZGUgQ05QSiAodm9jw6ogcG9kZSB1c2FyIHVtYSBsaWIgY29tbyAnY3BmLWNucGotdmFsaWRhdG9yJyBwYXJhIHZhbGlkYcOnw6NvIGNvbXBsZXRhKVxyXG4gIHJldHVybiBjbnBqLmxlbmd0aCA9PT0gMTQgJiYgIWlzTmFOKE51bWJlcihjbnBqKSk7IC8vIFZlcmlmaWNhw6fDo28gc2ltcGxlcyAoYWp1c3RlIGNvbmZvcm1lIG5lY2Vzc8OhcmlvKVxyXG59O1xyXG5cclxuY29uc3QgaXNDUEYgPSAoY3BmOiBzdHJpbmcpID0+IHtcclxuICAvLyBJbXBsZW1lbnRhw6fDo28gc2ltcGxpZmljYWRhIGRlIHZhbGlkYcOnw6NvIGRlIENQRlxyXG4gIHJldHVybiBjcGYubGVuZ3RoID09PSAxMSAmJiAhaXNOYU4oTnVtYmVyKGNwZikpOyAvLyBWZXJpZmljYcOnw6NvIHNpbXBsZXMgKGFqdXN0ZSBjb25mb3JtZSBuZWNlc3PDoXJpbylcclxufTtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBjb2RpZ286IHouc3RyaW5nKCkubWluKDEsIFwiQ8OzZGlnbyDDqSBvYnJpZ2F0w7NyaW9cIikubWF4KDYpLFxyXG4gIGxvamE6IHouc3RyaW5nKCkubWluKDEsIFwiTG9qYSDDqSBvYnJpZ2F0w7NyaWFcIikubWF4KDIpLFxyXG4gIG5vbWU6IHouc3RyaW5nKCkubWluKDMsIFwiTm9tZSDDqSBvYnJpZ2F0w7NyaW9cIikubWF4KDQwKSxcclxuICBwZXNzb2E6IHouc3RyaW5nKCkubWluKDEsIFwiUGVzc29hIMOpIG9icmlnYXTDs3JpYVwiKVxyXG4gICAgLnJlZmluZSh2YWwgPT4gdmFsID09PSAnRicgfHwgdmFsID09PSAnSicsIHsgbWVzc2FnZTogXCJQZXNzb2EgZGV2ZSBzZXIgRiAoRsOtc2ljYSkgb3UgSiAoSnVyw61kaWNhKVwiIH0pLFxyXG4gIGVuZGVyZWNvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgY2VwOiB6LnN0cmluZygpLm1pbig4LCBcIkNFUCDDqSBvYnJpZ2F0w7NyaW9cIikubGVuZ3RoKDgsIFwiQ0VQIGRldmUgdGVyIDggZMOtZ2l0b3NcIiksXHJcbiAgYmFpcnJvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgY2lkYWRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgZXN0YWRvOiB6LnN0cmluZygpLm1pbigyLCBcIkVzdGFkbyBPYnJpZ2F0w7NyaW9cIikubWF4KDIpLFxyXG4gIHN0YXR1czogei5zdHJpbmcoKS5taW4oMSwgXCJTdGF0dXMgw6kgb2JyaWdhdMOzcmlvXCIpXHJcbiAgICAucmVmaW5lKHZhbCA9PiB2YWwgPT09ICcxJyB8fCB2YWwgPT09ICcyJywgeyBtZXNzYWdlOiBcIlN0YXR1cyBkZXZlIHNlciAxIG91IDJcIiB9KSxcclxuICBjbnBqOiB6LnN0cmluZygpLm1pbigxMSwgXCJEaWdpdGUgdW0gQ05QSiBvdSBDUEZcIilcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLnJlZmluZSgodmFsLCBjdHgpID0+IHtcclxuICAgICAgY29uc3QgcGVzc29hID0gY3R4Py5wYXJlbnQ/LnBlc3NvYTtcclxuICAgICAgaWYgKHBlc3NvYSA9PT0gJ0YnKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQ1BGKHZhbCk7ICAvLyBTZSBmb3IgcGVzc29hIGbDrXNpY2EsIHZhbGlkYSBDUEZcclxuICAgICAgfSBlbHNlIGlmIChwZXNzb2EgPT09ICdKJykge1xyXG4gICAgICAgIHJldHVybiBpc0NOUEoodmFsKTsgLy8gU2UgZm9yIHBlc3NvYSBqdXLDrWRpY2EsIHZhbGlkYSBDTlBKXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7ICAvLyBDYXNvIGNvbnRyw6FyaW8sIGlnbm9yYSAodmFsaWRhIG5vcm1hbG1lbnRlKVxyXG4gICAgfSwge1xyXG4gICAgICBtZXNzYWdlOiBcIkNOUEogZGV2ZSBzZXIgdsOhbGlkbyBwYXJhIHBlc3NvYSBqdXLDrWRpY2Egb3UgQ1BGIHbDoWxpZG8gcGFyYSBwZXNzb2EgZsOtc2ljYVwiXHJcbiAgICB9KSxcclxuICB0aXBvOiB6LnN0cmluZygpLm1pbigxLCBcIlNlbGVjaW9uZSB1bSB0aXBvXCIpXHJcbiAgICAucmVmaW5lKHZhbCA9PiBbJ0YnLCAnTCcsICdSJywgJ1MnLCAnWCddLmluY2x1ZGVzKHZhbCksIHsgbWVzc2FnZTogXCJUaXBvIGRldmUgc2VyIHVtIGRvcyB2YWxvcmVzOiBGLCBMLCBSLCBTLCBYXCIgfSksXHJcbiAgZGRkOiB6LnN0cmluZygpLm1pbigyLCBcIkFkaWNpb25lIHVtIERERFwiKSxcclxuICB0ZWxlZm9uZTogei5zdHJpbmcoKS5taW4oMSwgXCJBZGljaW9uZSB1bSBuw7ptZXJvIGRlIHRlbGVmb25lXCIpLFxyXG4gIGVtYWlsOiB6LnN0cmluZygpLm1pbigxLCBcIkFkaWNpb25lIHVtIGVtYWlsXCIpLFxyXG4gIHBhaXM6IHouc3RyaW5nKCkubWluKDEsIFwiRGlnaXRlIHVtIHBhw61zXCIpLm1heCgzKSxcclxuICBjb250YXRvOiB6LnN0cmluZygpLm1pbigxLCBcIkFkaWNpb25lIHVtIGNvbnRhdG9cIilcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7XHJcbiJdLCJuYW1lcyI6WyJ6IiwiaXNDTlBKIiwiY25waiIsImxlbmd0aCIsImlzTmFOIiwiTnVtYmVyIiwiaXNDUEYiLCJjcGYiLCJzY2hlbWEiLCJvYmplY3QiLCJjb2RpZ28iLCJzdHJpbmciLCJtaW4iLCJtYXgiLCJsb2phIiwibm9tZSIsInBlc3NvYSIsInJlZmluZSIsInZhbCIsIm1lc3NhZ2UiLCJlbmRlcmVjbyIsIm9wdGlvbmFsIiwiY2VwIiwiYmFpcnJvIiwiY2lkYWRlIiwiZXN0YWRvIiwic3RhdHVzIiwiY3R4IiwicGFyZW50IiwidGlwbyIsImluY2x1ZGVzIiwiZGRkIiwidGVsZWZvbmUiLCJlbWFpbCIsInBhaXMiLCJjb250YXRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./validations/index.ts\n"));

/***/ })

});