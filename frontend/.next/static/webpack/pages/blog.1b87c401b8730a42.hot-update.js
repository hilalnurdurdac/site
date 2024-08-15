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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Blog.module.css */ \"./styles/Blog.module.css\");\n/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n // CSS dosyasını import et\nfunction BlogPage() {\n    _s();\n    const tweets = [\n        \"AI does not replace human decisions; instead, AI adds value to human judgment :)\",\n        \"A literal is data whose values are determined by the literal itself.\",\n        \"Technology is best when it brings people together.\",\n        \"Innovate or stagnate. Technology moves fast, keep up.\",\n        \"The future is tech-driven and it's already here.\"\n    ];\n    const articles = [\n        {\n            id: 1,\n            title: \"Makale 1\",\n            content: \"Bu, ilk makale i\\xe7eriğidir.\"\n        },\n        {\n            id: 2,\n            title: \"Makale 2\",\n            content: \"Bu, ikinci makale i\\xe7eriğidir.\"\n        },\n        {\n            id: 3,\n            title: \"Makale 3\",\n            content: \"Bu, \\xfc\\xe7\\xfcnc\\xfc makale i\\xe7eriğidir.\"\n        },\n        {\n            id: 4,\n            title: \"Makale 4\",\n            content: \"Bu, d\\xf6rd\\xfcnc\\xfc makale i\\xe7eriğidir.\"\n        },\n        {\n            id: 5,\n            title: \"Makale 5\",\n            content: \"Bu, beşinci makale i\\xe7eriğidir.\"\n        }\n    ];\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            type: \"article\",\n            title: \"Makale 1\",\n            content: articles[0].content,\n            date: \"2024-07-19\"\n        },\n        {\n            type: \"article\",\n            title: \"Makale 2\",\n            content: articles[1].content,\n            date: \"2024-07-21\"\n        },\n        {\n            type: \"tweet\",\n            content: tweets[0],\n            date: \"2024-07-23\"\n        },\n        {\n            type: \"tweet\",\n            content: tweets[1],\n            date: \"2024-07-25\"\n        },\n        {\n            type: \"tweet\",\n            content: tweets[2],\n            date: \"2024-07-27\"\n        },\n        {\n            type: \"tweet\",\n            content: tweets[3],\n            date: \"2024-07-29\"\n        },\n        {\n            type: \"article\",\n            title: \"Makale 3\",\n            content: articles[2].content,\n            date: \"2024-07-31\"\n        },\n        {\n            type: \"article\",\n            title: \"Makale 4\",\n            content: articles[3].content,\n            date: \"2024-08-02\"\n        },\n        {\n            type: \"article\",\n            title: \"Makale 5\",\n            content: articles[4].content,\n            date: \"2024-08-04\"\n        }\n    ]);\n    const handleAddPost = ()=>{\n        const postType = prompt(\"Ne eklemek istersiniz? Tweet mi yoksa Makale mi?\", \"Tweet/Makale\");\n        // Kullanıcı \"İptal\" derse veya boş bırakırsa işlem yapmadan çık\n        if (!postType) {\n            return;\n        }\n        let newPost = null;\n        if (postType.toLowerCase() === \"tweet\") {\n            const selectedTweet = prompt(\"Bir Tweet se\\xe7in:\", tweets.join(\"\\n\"));\n            if (selectedTweet) {\n                newPost = {\n                    type: \"tweet\",\n                    content: selectedTweet,\n                    date: new Date().toISOString().split(\"T\")[0]\n                };\n            }\n        } else if (postType.toLowerCase() === \"makale\") {\n            const selectedArticle = prompt(\"Bir Makale se\\xe7in:\", articles.map((article)=>article.title).join(\"\\n\"));\n            const article = articles.find((article)=>article.title === selectedArticle);\n            if (article) {\n                newPost = {\n                    type: \"article\",\n                    title: article.title,\n                    content: article.content,\n                    date: new Date().toISOString().split(\"T\")[0]\n                };\n            }\n        }\n        if (newPost) {\n            const updatedPosts = [\n                newPost,\n                ...posts\n            ].sort((a, b)=>new Date(b.date) - new Date(a.date));\n            setPosts(updatedPosts);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddPost,\n                className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().addButton),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/photos\",\n                        children: \"Photos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/videos\",\n                        children: \"Videos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().posts),\n                children: posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),\n                        children: post.type === \"tweet\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().tweet),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    children: post.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_3___default().article),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    onClick: ()=>alert(post.content),\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    children: post.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hilalnurdurdac/Desktop/site/frontend/pages/blog.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(BlogPage, \"YnZK5ZYiULkSGk7gUM/9Dbn+24U=\");\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cuanM/Y2JiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuY3NzJzsgLy8gQ1NTIGRvc3lhc8SxbsSxIGltcG9ydCBldFxuXG5mdW5jdGlvbiBCbG9nUGFnZSgpIHtcbiAgY29uc3QgdHdlZXRzID0gW1xuICAgIFwiQUkgZG9lcyBub3QgcmVwbGFjZSBodW1hbiBkZWNpc2lvbnM7IGluc3RlYWQsIEFJIGFkZHMgdmFsdWUgdG8gaHVtYW4ganVkZ21lbnQgOilcIixcbiAgICBcIkEgbGl0ZXJhbCBpcyBkYXRhIHdob3NlIHZhbHVlcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbGl0ZXJhbCBpdHNlbGYuXCIsXG4gICAgXCJUZWNobm9sb2d5IGlzIGJlc3Qgd2hlbiBpdCBicmluZ3MgcGVvcGxlIHRvZ2V0aGVyLlwiLFxuICAgIFwiSW5ub3ZhdGUgb3Igc3RhZ25hdGUuIFRlY2hub2xvZ3kgbW92ZXMgZmFzdCwga2VlcCB1cC5cIixcbiAgICBcIlRoZSBmdXR1cmUgaXMgdGVjaC1kcml2ZW4gYW5kIGl0J3MgYWxyZWFkeSBoZXJlLlwiXG4gIF07XG5cbiAgY29uc3QgYXJ0aWNsZXMgPSBbXG4gICAgeyBpZDogMSwgdGl0bGU6ICdNYWthbGUgMScsIGNvbnRlbnQ6ICdCdSwgaWxrIG1ha2FsZSBpw6dlcmnEn2lkaXIuJyB9LFxuICAgIHsgaWQ6IDIsIHRpdGxlOiAnTWFrYWxlIDInLCBjb250ZW50OiAnQnUsIGlraW5jaSBtYWthbGUgacOnZXJpxJ9pZGlyLicgfSxcbiAgICB7IGlkOiAzLCB0aXRsZTogJ01ha2FsZSAzJywgY29udGVudDogJ0J1LCDDvMOnw7xuY8O8IG1ha2FsZSBpw6dlcmnEn2lkaXIuJyB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiAnTWFrYWxlIDQnLCBjb250ZW50OiAnQnUsIGTDtnJkw7xuY8O8IG1ha2FsZSBpw6dlcmnEn2lkaXIuJyB9LFxuICAgIHsgaWQ6IDUsIHRpdGxlOiAnTWFrYWxlIDUnLCBjb250ZW50OiAnQnUsIGJlxZ9pbmNpIG1ha2FsZSBpw6dlcmnEn2lkaXIuJyB9XG4gIF07XG5cbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXG4gICAgeyB0eXBlOiAnYXJ0aWNsZScsIHRpdGxlOiAnTWFrYWxlIDEnLCBjb250ZW50OiBhcnRpY2xlc1swXS5jb250ZW50LCBkYXRlOiAnMjAyNC0wNy0xOScgfSxcbiAgICB7IHR5cGU6ICdhcnRpY2xlJywgdGl0bGU6ICdNYWthbGUgMicsIGNvbnRlbnQ6IGFydGljbGVzWzFdLmNvbnRlbnQsIGRhdGU6ICcyMDI0LTA3LTIxJyB9LFxuICAgIHsgdHlwZTogJ3R3ZWV0JywgY29udGVudDogdHdlZXRzWzBdLCBkYXRlOiAnMjAyNC0wNy0yMycgfSxcbiAgICB7IHR5cGU6ICd0d2VldCcsIGNvbnRlbnQ6IHR3ZWV0c1sxXSwgZGF0ZTogJzIwMjQtMDctMjUnIH0sXG4gICAgeyB0eXBlOiAndHdlZXQnLCBjb250ZW50OiB0d2VldHNbMl0sIGRhdGU6ICcyMDI0LTA3LTI3JyB9LFxuICAgIHsgdHlwZTogJ3R3ZWV0JywgY29udGVudDogdHdlZXRzWzNdLCBkYXRlOiAnMjAyNC0wNy0yOScgfSxcbiAgICB7IHR5cGU6ICdhcnRpY2xlJywgdGl0bGU6ICdNYWthbGUgMycsIGNvbnRlbnQ6IGFydGljbGVzWzJdLmNvbnRlbnQsIGRhdGU6ICcyMDI0LTA3LTMxJyB9LFxuICAgIHsgdHlwZTogJ2FydGljbGUnLCB0aXRsZTogJ01ha2FsZSA0JywgY29udGVudDogYXJ0aWNsZXNbM10uY29udGVudCwgZGF0ZTogJzIwMjQtMDgtMDInIH0sXG4gICAgeyB0eXBlOiAnYXJ0aWNsZScsIHRpdGxlOiAnTWFrYWxlIDUnLCBjb250ZW50OiBhcnRpY2xlc1s0XS5jb250ZW50LCBkYXRlOiAnMjAyNC0wOC0wNCcgfVxuICBdKTtcblxuICBjb25zdCBoYW5kbGVBZGRQb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RUeXBlID0gcHJvbXB0KFwiTmUgZWtsZW1layBpc3RlcnNpbml6PyBUd2VldCBtaSB5b2tzYSBNYWthbGUgbWk/XCIsIFwiVHdlZXQvTWFrYWxlXCIpO1xuXG4gICAgLy8gS3VsbGFuxLFjxLEgXCLEsHB0YWxcIiBkZXJzZSB2ZXlhIGJvxZ8gYsSxcmFrxLFyc2EgacWfbGVtIHlhcG1hZGFuIMOnxLFrXG4gICAgaWYgKCFwb3N0VHlwZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQb3N0ID0gbnVsbDtcblxuICAgIGlmIChwb3N0VHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInR3ZWV0XCIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVHdlZXQgPSBwcm9tcHQoXCJCaXIgVHdlZXQgc2XDp2luOlwiLCB0d2VldHMuam9pbignXFxuJykpO1xuICAgICAgaWYgKHNlbGVjdGVkVHdlZXQpIHtcbiAgICAgICAgbmV3UG9zdCA9IHsgdHlwZTogJ3R3ZWV0JywgY29udGVudDogc2VsZWN0ZWRUd2VldCwgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvc3RUeXBlLnRvTG93ZXJDYXNlKCkgPT09IFwibWFrYWxlXCIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQXJ0aWNsZSA9IHByb21wdChcIkJpciBNYWthbGUgc2XDp2luOlwiLCBhcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiBhcnRpY2xlLnRpdGxlKS5qb2luKCdcXG4nKSk7XG4gICAgICBjb25zdCBhcnRpY2xlID0gYXJ0aWNsZXMuZmluZChhcnRpY2xlID0+IGFydGljbGUudGl0bGUgPT09IHNlbGVjdGVkQXJ0aWNsZSk7XG4gICAgICBpZiAoYXJ0aWNsZSkge1xuICAgICAgICBuZXdQb3N0ID0geyB0eXBlOiAnYXJ0aWNsZScsIHRpdGxlOiBhcnRpY2xlLnRpdGxlLCBjb250ZW50OiBhcnRpY2xlLmNvbnRlbnQsIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bvc3QpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRQb3N0cyA9IFtuZXdQb3N0LCAuLi5wb3N0c10uc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICAgICAgc2V0UG9zdHModXBkYXRlZFBvc3RzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDE+QmxvZzwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFBvc3R9IGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0+KzwvYnV0dG9uPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGhvdG9zXCI+UGhvdG9zPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3ZpZGVvc1wiPlZpZGVvczwvTGluaz5cbiAgICAgIDwvbmF2PlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHN9PlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgICAgICB7cG9zdC50eXBlID09PSAndHdlZXQnID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0fT5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8c21hbGw+e3Bvc3QuZGF0ZX08L3NtYWxsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XG4gICAgICAgICAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IGFsZXJ0KHBvc3QuY29udGVudCl9Pntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPntwb3N0LmRhdGV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInN0eWxlcyIsIkJsb2dQYWdlIiwidHdlZXRzIiwiYXJ0aWNsZXMiLCJpZCIsInRpdGxlIiwiY29udGVudCIsInBvc3RzIiwic2V0UG9zdHMiLCJ0eXBlIiwiZGF0ZSIsImhhbmRsZUFkZFBvc3QiLCJwb3N0VHlwZSIsInByb21wdCIsIm5ld1Bvc3QiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdGVkVHdlZXQiLCJqb2luIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJzZWxlY3RlZEFydGljbGUiLCJtYXAiLCJhcnRpY2xlIiwiZmluZCIsInVwZGF0ZWRQb3N0cyIsInNvcnQiLCJhIiwiYiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImFkZEJ1dHRvbiIsIm5hdiIsImhyZWYiLCJwb3N0IiwiaW5kZXgiLCJ0d2VldCIsInAiLCJzbWFsbCIsImgyIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n"));

/***/ })

});