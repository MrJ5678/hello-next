webpackHotUpdate("static/development/pages/launch/[flight_number].js",{

/***/ "./pages/launch/[flight_number].js":
/*!*****************************************!*\
  !*** ./pages/launch/[flight_number].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/apple/lesson/hello-next/hello-apollo-next/pages/launch/[flight_number].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n * @Author: hhhhhq\n * @Date: 2020-06-27 15:21:34\n * @LastEditors: hhhhhq\n * @LastEditTime: 2020-06-27 15:34:30\n * @Description: file content\n */\n\n\n\n\nvar LAUNCH_QUERY = {\n  \"kind\": \"Document\",\n  \"definitions\": [{\n    \"kind\": \"OperationDefinition\",\n    \"operation\": \"query\",\n    \"name\": {\n      \"kind\": \"Name\",\n      \"value\": \"LaunchQuery\"\n    },\n    \"variableDefinitions\": [{\n      \"kind\": \"VariableDefinition\",\n      \"variable\": {\n        \"kind\": \"Variable\",\n        \"name\": {\n          \"kind\": \"Name\",\n          \"value\": \"flight_number\"\n        }\n      },\n      \"type\": {\n        \"kind\": \"NonNullType\",\n        \"type\": {\n          \"kind\": \"NamedType\",\n          \"name\": {\n            \"kind\": \"Name\",\n            \"value\": \"Int\"\n          }\n        }\n      },\n      \"directives\": []\n    }],\n    \"directives\": [],\n    \"selectionSet\": {\n      \"kind\": \"SelectionSet\",\n      \"selections\": [{\n        \"kind\": \"Field\",\n        \"name\": {\n          \"kind\": \"Name\",\n          \"value\": \"launch\"\n        },\n        \"arguments\": [{\n          \"kind\": \"Argument\",\n          \"name\": {\n            \"kind\": \"Name\",\n            \"value\": \"flight_number\"\n          },\n          \"value\": {\n            \"kind\": \"Variable\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"flight_number\"\n            }\n          }\n        }],\n        \"directives\": [],\n        \"selectionSet\": {\n          \"kind\": \"SelectionSet\",\n          \"selections\": [{\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"flight_number\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"mission_name\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"launch_year\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"launch_success\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"rocket\"\n            },\n            \"arguments\": [],\n            \"directives\": [],\n            \"selectionSet\": {\n              \"kind\": \"SelectionSet\",\n              \"selections\": [{\n                \"kind\": \"Field\",\n                \"name\": {\n                  \"kind\": \"Name\",\n                  \"value\": \"rocket_id\"\n                },\n                \"arguments\": [],\n                \"directives\": []\n              }, {\n                \"kind\": \"Field\",\n                \"name\": {\n                  \"kind\": \"Name\",\n                  \"value\": \"rocket_name\"\n                },\n                \"arguments\": [],\n                \"directives\": []\n              }, {\n                \"kind\": \"Field\",\n                \"name\": {\n                  \"kind\": \"Name\",\n                  \"value\": \"rocket_type\"\n                },\n                \"arguments\": [],\n                \"directives\": []\n              }]\n            }\n          }]\n        }\n      }]\n    }\n  }],\n  \"loc\": {\n    \"start\": 0,\n    \"end\": 258,\n    \"source\": {\n      \"body\": \"\\n  query LaunchQuery($flight_number: Int!) {\\n    launch(flight_number: $flight_number) {\\n      flight_number\\n      mission_name\\n      launch_year\\n      launch_success\\n      rocket {\\n        rocket_id\\n        rocket_name\\n        rocket_type\\n      }\\n    }\\n  }\\n\",\n      \"name\": \"GraphQL request\",\n      \"locationOffset\": {\n        \"line\": 1,\n        \"column\": 1\n      }\n    }\n  }\n};\n\nvar Launch = function Launch() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var flight_number = router.query.flight_number;\n  flight_number = parseInt(flight_number);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Query\"], {\n    query: LAUNCH_QUERY,\n    variables: {\n      flight_number: flight_number\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, function (_ref) {\n    var loading = _ref.loading,\n        error = _ref.error,\n        data = _ref.data;\n    if (loading) return __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 33\n      }\n    }, \"loading...\");\n    if (error) console.log(error);\n    var _data$launch = data.launch,\n        flight_number = _data$launch.flight_number,\n        mission_name = _data$launch.mission_name,\n        launch_year = _data$launch.launch_year,\n        launch_success = _data$launch.launch_success,\n        _data$launch$rocket = _data$launch.rocket,\n        rocket_id = _data$launch$rocket.rocket_id,\n        rocket_name = _data$launch$rocket.rocket_name,\n        rocket_type = _data$launch$rocket.rocket_type;\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    }, __jsx(\"h1\", {\n      className: \"display-4 my-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }\n    }, __jsx(\"span\", {\n      className: \"text-dark\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 19\n      }\n    }, \"Mission: \"), \" \", mission_name), __jsx(\"h4\", {\n      className: \"mb-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }\n    }, \"Launch Details\"), __jsx(\"ul\", {\n      className: \"list-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }\n    }, __jsx(\"li\", {\n      className: \"list-group-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 19\n      }\n    }, \"Flight Number: \", flight_number), __jsx(\"li\", {\n      className: \"list-group-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 19\n      }\n    }, \"Flight Year: \", launch_year), __jsx(\"li\", {\n      className: \"list-group-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 19\n      }\n    }, \"Flight Successful: \", launch_success ? 'Yes' : 'No')), __jsx(\"h4\", {\n      className: \"mb-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, \"Rocket Details\"), __jsx(\"ul\", {\n      className: \"list-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }\n    }, __jsx(\"li\", {\n      className: \"list-group-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 19\n      }\n    }, \"Rocket ID: \", rocket_id), __jsx(\"li\", {\n      className: \"list-group-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 19\n      }\n    }, \"Rocket Name: \", rocket_name), __jsx(\"li\", {\n      className: \"list-group-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 19\n      }\n    }, \"Rocket Type: \", rocket_type)), __jsx(\"hr\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }\n    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      className: \"btn btn-secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 19\n      }\n    }, \"Back home\")));\n  }));\n};\n\n_s(Launch, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Launch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Launch);\n\nvar _c;\n\n$RefreshReg$(_c, \"Launch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXVuY2gvW2ZsaWdodF9udW1iZXJdLmpzPzJiMjEiXSwibmFtZXMiOlsiTEFVTkNIX1FVRVJZIiwiTGF1bmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmxpZ2h0X251bWJlciIsInF1ZXJ5IiwicGFyc2VJbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxhdW5jaCIsIm1pc3Npb25fbmFtZSIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJyb2NrZXQiLCJyb2NrZXRfaWQiLCJyb2NrZXRfbmFtZSIsInJvY2tldF90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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RSxTQUE1QyxDQURGLEVBRUU7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBOENDLFdBQTlDLENBRkYsRUFHRTtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUE4Q0MsV0FBOUMsQ0FIRixDQWZGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwQkYsRUFxQkUsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBckJGLENBREY7QUE2QkQsR0EzQ0wsQ0FERixDQURGO0FBa0RELENBdkREOztHQUFNbEIsTTtVQUNXRSxxRDs7O0tBRFhGLE07QUF5RFNBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGF1bmNoL1tmbGlnaHRfbnVtYmVyXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBoaGhoaHFcbiAqIEBEYXRlOiAyMDIwLTA2LTI3IDE1OjIxOjM0XG4gKiBATGFzdEVkaXRvcnM6IGhoaGhocVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wNi0yNyAxNTozNDozMFxuICogQERlc2NyaXB0aW9uOiBmaWxlIGNvbnRlbnRcbiAqLyBcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgTEFVTkNIX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBMYXVuY2hRdWVyeSgkZmxpZ2h0X251bWJlcjogSW50ISkge1xuICAgIGxhdW5jaChmbGlnaHRfbnVtYmVyOiAkZmxpZ2h0X251bWJlcikge1xuICAgICAgZmxpZ2h0X251bWJlclxuICAgICAgbWlzc2lvbl9uYW1lXG4gICAgICBsYXVuY2hfeWVhclxuICAgICAgbGF1bmNoX3N1Y2Nlc3NcbiAgICAgIHJvY2tldCB7XG4gICAgICAgIHJvY2tldF9pZFxuICAgICAgICByb2NrZXRfbmFtZVxuICAgICAgICByb2NrZXRfdHlwZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGF1bmNoID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBsZXQgeyBmbGlnaHRfbnVtYmVyIH0gPSByb3V0ZXIucXVlcnlcbiAgZmxpZ2h0X251bWJlciA9IHBhcnNlSW50KGZsaWdodF9udW1iZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtMQVVOQ0hfUVVFUll9IHZhcmlhYmxlcz17eyBmbGlnaHRfbnVtYmVyIH19PlxuICAgICAgICB7XG4gICAgICAgICAgKHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDQ+bG9hZGluZy4uLjwvaDQ+O1xuICAgICAgICAgICAgaWYgKGVycm9yKSBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgZmxpZ2h0X251bWJlcixcbiAgICAgICAgICAgICAgbWlzc2lvbl9uYW1lLFxuICAgICAgICAgICAgICBsYXVuY2hfeWVhcixcbiAgICAgICAgICAgICAgbGF1bmNoX3N1Y2Nlc3MsXG4gICAgICAgICAgICAgIHJvY2tldDogeyByb2NrZXRfaWQsIHJvY2tldF9uYW1lLCByb2NrZXRfdHlwZSB9XG4gICAgICAgICAgICB9ID0gZGF0YS5sYXVuY2g7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBteS0zXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj5NaXNzaW9uOiA8L3NwYW4+IHsgbWlzc2lvbl9uYW1lIH1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICBMYXVuY2ggRGV0YWlsc1xuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5GbGlnaHQgTnVtYmVyOiB7ZmxpZ2h0X251bWJlcn08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkZsaWdodCBZZWFyOiB7bGF1bmNoX3llYXJ9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5GbGlnaHQgU3VjY2Vzc2Z1bDoge2xhdW5jaF9zdWNjZXNzID8gJ1llcycgOiAnTm8nfTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgUm9ja2V0IERldGFpbHNcbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Um9ja2V0IElEOiB7cm9ja2V0X2lkfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Um9ja2V0IE5hbWU6IHtyb2NrZXRfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlJvY2tldCBUeXBlOiB7cm9ja2V0X3R5cGV9PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBCYWNrIGhvbWVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9RdWVyeT5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhdW5jaFxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/launch/[flight_number].js\n");

/***/ })

})