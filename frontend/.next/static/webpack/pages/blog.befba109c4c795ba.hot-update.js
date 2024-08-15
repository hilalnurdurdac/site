"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Blog.module.css */ \"./styles/Blog.module.css\");\n/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n // CSS dosyasını import et\nfunction BlogPage() {\n    _s();\n    // Random tweet cümleleri\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            type: \"tweet\",\n            content: \"AI does not replace human decisions; instead, AI adds value to human judgment :)\",\n            date: \"2024-07-19\"\n        },\n        {\n            id: 2,\n            type: \"tweet\",\n            content: \"A literal is data whose values are determined by the literal itself.\",\n            date: \"2024-07-17\"\n        },\n        {\n            id: 3,\n            type: \"tweet\",\n            content: \"Technology is best when it brings people together.\",\n            date: \"2024-07-18\"\n        },\n        {\n            id: 4,\n            type: \"article\",\n            title: \"Makale 1\",\n            content: \"Bu, ilk makale i\\xe7eriğidir.\",\n            date: \"2024-07-20\"\n        },\n        {\n            id: 5,\n            type: \"article\",\n            title: \"Makale 2\",\n            content: \"Bu, ikinci makale i\\xe7eriğidir.\",\n            date: \"2024-07-21\"\n        },\n        {\n            id: 6,\n            type: \"article\",\n            title: \"Makale 3\",\n            content: \"Bu, \\xfc\\xe7\\xfcnc\\xfc makale i\\xe7eriğidir.\",\n            date: \"2024-07-22\"\n        }\n    ]);\n    const addPost = ()=>{\n        const postType = window.prompt(\"What type of post would you like to add? (tweet/article)\");\n        if (postType === \"tweet\") {\n            const tweetContent = window.prompt(\"Enter your tweet:\");\n            setPosts([\n                ...posts,\n                {\n                    id: posts.length + 1,\n                    type: \"tweet\",\n                    content: tweetContent,\n                    date: new Date().toISOString().split(\"T\")[0]\n                }\n            ]);\n        } else if (postType === \"article\") {\n            const articleTitle = window.prompt(\"Enter article title:\");\n            const articleContent = window.prompt(\"Enter article content:\");\n            setPosts([\n                ...posts,\n                {\n                    id: posts.length + 1,\n                    type: \"article\",\n                    title: articleTitle,\n                    content: articleContent,\n                    date: new Date().toISOString().split(\"T\")[0]\n                }\n            ]);\n        }\n    };\n    // Tarihe göre sıralama\n    const sortedPosts = posts.sort((a, b)=>new Date(b.date) - new Date(a.date));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().posts),\n                children: sortedPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),\n                        children: post.type === \"tweet\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().tweet),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().date),\n                                    children: post.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().article),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().date),\n                                    children: post.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this)\n                    }, post.id, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().addButton),\n                onClick: addPost,\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/photos\",\n                        children: \"Photos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/videos\",\n                        children: \"Videos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(BlogPage, \"HPEaHG9co+NDxfJs8zBiP3CKKY8=\");\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJYixXQUFXekIsb0VBQVU7O2tDQUN4Qiw4REFBQ0Qsa0RBQUlBO3dCQUFDd0MsTUFBSztrQ0FBSTs7Ozs7O2tDQUNmLDhEQUFDeEMsa0RBQUlBO3dCQUFDd0MsTUFBSztrQ0FBVTs7Ozs7O2tDQUNyQiw4REFBQ3hDLGtEQUFJQTt3QkFBQ3dDLE1BQUs7a0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QjtHQXZEU3RDO0tBQUFBO0FBeURULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cuanM/Y2JiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuY3NzJzsgLy8gQ1NTIGRvc3lhc8SxbsSxIGltcG9ydCBldFxuXG5mdW5jdGlvbiBCbG9nUGFnZSgpIHtcbiAgLy8gUmFuZG9tIHR3ZWV0IGPDvG1sZWxlcmlcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXG4gICAgeyBpZDogMSwgdHlwZTogJ3R3ZWV0JywgY29udGVudDogXCJBSSBkb2VzIG5vdCByZXBsYWNlIGh1bWFuIGRlY2lzaW9uczsgaW5zdGVhZCwgQUkgYWRkcyB2YWx1ZSB0byBodW1hbiBqdWRnbWVudCA6KVwiLCBkYXRlOiAnMjAyNC0wNy0xOScgfSxcbiAgICB7IGlkOiAyLCB0eXBlOiAndHdlZXQnLCBjb250ZW50OiBcIkEgbGl0ZXJhbCBpcyBkYXRhIHdob3NlIHZhbHVlcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbGl0ZXJhbCBpdHNlbGYuXCIsIGRhdGU6ICcyMDI0LTA3LTE3JyB9LFxuICAgIHsgaWQ6IDMsIHR5cGU6ICd0d2VldCcsIGNvbnRlbnQ6IFwiVGVjaG5vbG9neSBpcyBiZXN0IHdoZW4gaXQgYnJpbmdzIHBlb3BsZSB0b2dldGhlci5cIiwgZGF0ZTogJzIwMjQtMDctMTgnIH0sXG4gICAgeyBpZDogNCwgdHlwZTogJ2FydGljbGUnLCB0aXRsZTogJ01ha2FsZSAxJywgY29udGVudDogJ0J1LCBpbGsgbWFrYWxlIGnDp2VyacSfaWRpci4nLCBkYXRlOiAnMjAyNC0wNy0yMCcgfSxcbiAgICB7IGlkOiA1LCB0eXBlOiAnYXJ0aWNsZScsIHRpdGxlOiAnTWFrYWxlIDInLCBjb250ZW50OiAnQnUsIGlraW5jaSBtYWthbGUgacOnZXJpxJ9pZGlyLicsIGRhdGU6ICcyMDI0LTA3LTIxJyB9LFxuICAgIHsgaWQ6IDYsIHR5cGU6ICdhcnRpY2xlJywgdGl0bGU6ICdNYWthbGUgMycsIGNvbnRlbnQ6ICdCdSwgw7zDp8O8bmPDvCBtYWthbGUgacOnZXJpxJ9pZGlyLicsIGRhdGU6ICcyMDI0LTA3LTIyJyB9XG4gIF0pO1xuXG4gIGNvbnN0IGFkZFBvc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zdFR5cGUgPSB3aW5kb3cucHJvbXB0KFwiV2hhdCB0eXBlIG9mIHBvc3Qgd291bGQgeW91IGxpa2UgdG8gYWRkPyAodHdlZXQvYXJ0aWNsZSlcIik7XG4gICAgaWYgKHBvc3RUeXBlID09PSAndHdlZXQnKSB7XG4gICAgICBjb25zdCB0d2VldENvbnRlbnQgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgeW91ciB0d2VldDpcIik7XG4gICAgICBzZXRQb3N0cyhbLi4ucG9zdHMsIHsgaWQ6IHBvc3RzLmxlbmd0aCArIDEsIHR5cGU6ICd0d2VldCcsIGNvbnRlbnQ6IHR3ZWV0Q29udGVudCwgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gfV0pO1xuICAgIH0gZWxzZSBpZiAocG9zdFR5cGUgPT09ICdhcnRpY2xlJykge1xuICAgICAgY29uc3QgYXJ0aWNsZVRpdGxlID0gd2luZG93LnByb21wdChcIkVudGVyIGFydGljbGUgdGl0bGU6XCIpO1xuICAgICAgY29uc3QgYXJ0aWNsZUNvbnRlbnQgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgYXJ0aWNsZSBjb250ZW50OlwiKTtcbiAgICAgIHNldFBvc3RzKFsuLi5wb3N0cywgeyBpZDogcG9zdHMubGVuZ3RoICsgMSwgdHlwZTogJ2FydGljbGUnLCB0aXRsZTogYXJ0aWNsZVRpdGxlLCBjb250ZW50OiBhcnRpY2xlQ29udGVudCwgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gfV0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBUYXJpaGUgZ8O2cmUgc8SxcmFsYW1hXG4gIGNvbnN0IHNvcnRlZFBvc3RzID0gcG9zdHMuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxPkJsb2c8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XG4gICAgICAgIHtzb3J0ZWRQb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxuICAgICAgICAgICAge3Bvc3QudHlwZSA9PT0gJ3R3ZWV0JyA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50d2VldH0+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e3Bvc3QuZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cbiAgICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57cG9zdC5kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259IG9uQ2xpY2s9e2FkZFBvc3R9Pis8L2J1dHRvbj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Bob3Rvc1wiPlBob3RvczwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi92aWRlb3NcIj5WaWRlb3M8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZXMiLCJCbG9nUGFnZSIsInBvc3RzIiwic2V0UG9zdHMiLCJpZCIsInR5cGUiLCJjb250ZW50IiwiZGF0ZSIsInRpdGxlIiwiYWRkUG9zdCIsInBvc3RUeXBlIiwid2luZG93IiwicHJvbXB0IiwidHdlZXRDb250ZW50IiwibGVuZ3RoIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJhcnRpY2xlVGl0bGUiLCJhcnRpY2xlQ29udGVudCIsInNvcnRlZFBvc3RzIiwic29ydCIsImEiLCJiIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJtYXAiLCJwb3N0IiwidHdlZXQiLCJwIiwic3BhbiIsImFydGljbGUiLCJoMiIsImJ1dHRvbiIsImFkZEJ1dHRvbiIsIm9uQ2xpY2siLCJuYXYiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n"));

/***/ })

});