webpackHotUpdate("static/development/pages/launch/[flight_number].js",{

/***/ "./pages/launch/[flight_number].js":
/*!*****************************************!*\
  !*** ./pages/launch/[flight_number].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Launch; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/apple/lesson/hello-next/hello-apollo-next/pages/launch/[flight_number].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\n * @Author: hhhhhq\n * @Date: 2020-06-27 15:21:34\n * @LastEditors: hhhhhq\n * @LastEditTime: 2020-06-27 15:31:38\n * @Description: file content\n */\n\n\n\n\nvar LAUNCH_QUERY = {\n  \"kind\": \"Document\",\n  \"definitions\": [{\n    \"kind\": \"OperationDefinition\",\n    \"operation\": \"query\",\n    \"name\": {\n      \"kind\": \"Name\",\n      \"value\": \"LaunchQuery\"\n    },\n    \"variableDefinitions\": [{\n      \"kind\": \"VariableDefinition\",\n      \"variable\": {\n        \"kind\": \"Variable\",\n        \"name\": {\n          \"kind\": \"Name\",\n          \"value\": \"flight_number\"\n        }\n      },\n      \"type\": {\n        \"kind\": \"NonNullType\",\n        \"type\": {\n          \"kind\": \"NamedType\",\n          \"name\": {\n            \"kind\": \"Name\",\n            \"value\": \"Int\"\n          }\n        }\n      },\n      \"directives\": []\n    }],\n    \"directives\": [],\n    \"selectionSet\": {\n      \"kind\": \"SelectionSet\",\n      \"selections\": [{\n        \"kind\": \"Field\",\n        \"name\": {\n          \"kind\": \"Name\",\n          \"value\": \"launch\"\n        },\n        \"arguments\": [{\n          \"kind\": \"Argument\",\n          \"name\": {\n            \"kind\": \"Name\",\n            \"value\": \"flight_number\"\n          },\n          \"value\": {\n            \"kind\": \"Variable\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"flight_number\"\n            }\n          }\n        }],\n        \"directives\": [],\n        \"selectionSet\": {\n          \"kind\": \"SelectionSet\",\n          \"selections\": [{\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"flight_number\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"mission_name\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"launch_year\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"launch_success\"\n            },\n            \"arguments\": [],\n            \"directives\": []\n          }, {\n            \"kind\": \"Field\",\n            \"name\": {\n              \"kind\": \"Name\",\n              \"value\": \"rocket\"\n            },\n            \"arguments\": [],\n            \"directives\": [],\n            \"selectionSet\": {\n              \"kind\": \"SelectionSet\",\n              \"selections\": [{\n                \"kind\": \"Field\",\n                \"name\": {\n                  \"kind\": \"Name\",\n                  \"value\": \"rocket_id\"\n                },\n                \"arguments\": [],\n                \"directives\": []\n              }, {\n                \"kind\": \"Field\",\n                \"name\": {\n                  \"kind\": \"Name\",\n                  \"value\": \"rocket_name\"\n                },\n                \"arguments\": [],\n                \"directives\": []\n              }, {\n                \"kind\": \"Field\",\n                \"name\": {\n                  \"kind\": \"Name\",\n                  \"value\": \"rocket_type\"\n                },\n                \"arguments\": [],\n                \"directives\": []\n              }]\n            }\n          }]\n        }\n      }]\n    }\n  }],\n  \"loc\": {\n    \"start\": 0,\n    \"end\": 258,\n    \"source\": {\n      \"body\": \"\\n  query LaunchQuery($flight_number: Int!) {\\n    launch(flight_number: $flight_number) {\\n      flight_number\\n      mission_name\\n      launch_year\\n      launch_success\\n      rocket {\\n        rocket_id\\n        rocket_name\\n        rocket_type\\n      }\\n    }\\n  }\\n\",\n      \"name\": \"GraphQL request\",\n      \"locationOffset\": {\n        \"line\": 1,\n        \"column\": 1\n      }\n    }\n  }\n};\n\nvar Launch = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Launch, _Component);\n\n  var _super = _createSuper(Launch);\n\n  function Launch() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Launch);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Launch, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n      var flight_number = router.query.flight_number;\n      flight_number = parseInt(flight_number);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 7\n        }\n      }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_6__[\"Query\"], {\n        query: LAUNCH_QUERY,\n        variables: {\n          flight_number: flight_number\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }\n      }, function (_ref) {\n        var loading = _ref.loading,\n            error = _ref.error,\n            data = _ref.data;\n        if (loading) return __jsx(\"h4\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 35\n          }\n        }, \"loading...\");\n        if (error) console.log(error);\n        var _data$launch = data.launch,\n            flight_number = _data$launch.flight_number,\n            mission_name = _data$launch.mission_name,\n            launch_year = _data$launch.launch_year,\n            launch_success = _data$launch.launch_success,\n            _data$launch$rocket = _data$launch.rocket,\n            rocket_id = _data$launch$rocket.rocket_id,\n            rocket_name = _data$launch$rocket.rocket_name,\n            rocket_type = _data$launch$rocket.rocket_type;\n        return __jsx(\"div\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 17\n          }\n        }, __jsx(\"h1\", {\n          className: \"display-4 my-3\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 19\n          }\n        }, __jsx(\"span\", {\n          className: \"text-dark\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 21\n          }\n        }, \"Mission: \"), \" \", mission_name), __jsx(\"h4\", {\n          className: \"mb-3\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 19\n          }\n        }, \"Launch Details\"), __jsx(\"ul\", {\n          className: \"list-group\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 19\n          }\n        }, __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 21\n          }\n        }, \"Flight Number: \", flight_number), __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 21\n          }\n        }, \"Flight Year: \", launch_year), __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 21\n          }\n        }, \"Flight Successful: \", launch_success ? 'Yes' : 'No')), __jsx(\"h4\", {\n          className: \"mb-3\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 19\n          }\n        }, \"Rocket Details\"), __jsx(\"ul\", {\n          className: \"list-group\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 19\n          }\n        }, __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 21\n          }\n        }, \"Rocket ID: \", rocket_id), __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 21\n          }\n        }, \"Rocket Name: \", rocket_name), __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 21\n          }\n        }, \"Rocket Type: \", rocket_type)), __jsx(\"hr\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 19\n          }\n        }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 19\n          }\n        }, __jsx(\"a\", {\n          className: \"btn btn-secondary\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 21\n          }\n        }, \"Back home\")));\n      }));\n    }\n  }]);\n\n  return Launch;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXVuY2gvW2ZsaWdodF9udW1iZXJdLmpzPzJiMjEiXSwibmFtZXMiOlsiTEFVTkNIX1FVRVJZIiwiTGF1bmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmxpZ2h0X251bWJlciIsInF1ZXJ5IiwicGFyc2VJbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxhdW5jaCIsIm1pc3Npb25fbmFtZSIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJyb2NrZXQiLCJyb2NrZXRfaWQiLCJyb2NrZXRfbmFtZSIsInJvY2tldF90eXBlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWxCOztJQWdCcUJDLE07Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQTs7QUFDUCxVQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRE8sVUFFREMsYUFGQyxHQUVpQkYsTUFBTSxDQUFDRyxLQUZ4QixDQUVERCxhQUZDO0FBR1BBLG1CQUFhLEdBQUdFLFFBQVEsQ0FBQ0YsYUFBRCxDQUF4QjtBQUVBLGFBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUFPLGFBQUssRUFBRUosWUFBZDtBQUE0QixpQkFBUyxFQUFFO0FBQUVJLHVCQUFhLEVBQWJBO0FBQUYsU0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJLGdCQUE4QjtBQUFBLFlBQTNCRyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxZQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsWUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVCLFlBQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQVA7QUFDYixZQUFJQyxLQUFKLEVBQVdFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBRmlCLDJCQVV4QkMsSUFBSSxDQUFDRyxNQVZtQjtBQUFBLFlBSzFCUixhQUwwQixnQkFLMUJBLGFBTDBCO0FBQUEsWUFNMUJTLFlBTjBCLGdCQU0xQkEsWUFOMEI7QUFBQSxZQU8xQkMsV0FQMEIsZ0JBTzFCQSxXQVAwQjtBQUFBLFlBUTFCQyxjQVIwQixnQkFRMUJBLGNBUjBCO0FBQUEsK0NBUzFCQyxNQVQwQjtBQUFBLFlBU2hCQyxTQVRnQix1QkFTaEJBLFNBVGdCO0FBQUEsWUFTTEMsV0FUSyx1QkFTTEEsV0FUSztBQUFBLFlBU1FDLFdBVFIsdUJBU1FBLFdBVFI7QUFZNUIsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSSxtQkFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFNLG1CQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixPQUNpRE4sWUFEakQsQ0FERixFQUlFO0FBQUksbUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkYsRUFPRTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQWdEVCxhQUFoRCxDQURGLEVBRUU7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQThDVSxXQUE5QyxDQUZGLEVBR0U7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQW9EQyxjQUFjLEdBQUcsS0FBSCxHQUFXLElBQTdFLENBSEYsQ0FQRixFQVlFO0FBQUksbUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBWkYsRUFlRTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQTRDRSxTQUE1QyxDQURGLEVBRUU7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQThDQyxXQUE5QyxDQUZGLEVBR0U7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQThDQyxXQUE5QyxDQUhGLENBZkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXBCRixFQXFCRSxNQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUcsbUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBckJGLENBREY7QUE2QkQsT0EzQ0wsQ0FERixDQURGO0FBa0REOzs7O0VBeERpQ0MsK0MiLCJmaWxlIjoiLi9wYWdlcy9sYXVuY2gvW2ZsaWdodF9udW1iZXJdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhoaGhocVxuICogQERhdGU6IDIwMjAtMDYtMjcgMTU6MjE6MzRcbiAqIEBMYXN0RWRpdG9yczogaGhoaGhxXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA2LTI3IDE1OjMxOjM4XG4gKiBARGVzY3JpcHRpb246IGZpbGUgY29udGVudFxuICovIFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBMQVVOQ0hfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IExhdW5jaFF1ZXJ5KCRmbGlnaHRfbnVtYmVyOiBJbnQhKSB7XG4gICAgbGF1bmNoKGZsaWdodF9udW1iZXI6ICRmbGlnaHRfbnVtYmVyKSB7XG4gICAgICBmbGlnaHRfbnVtYmVyXG4gICAgICBtaXNzaW9uX25hbWVcbiAgICAgIGxhdW5jaF95ZWFyXG4gICAgICBsYXVuY2hfc3VjY2Vzc1xuICAgICAgcm9ja2V0IHtcbiAgICAgICAgcm9ja2V0X2lkXG4gICAgICAgIHJvY2tldF9uYW1lXG4gICAgICAgIHJvY2tldF90eXBlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVuY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBsZXQgeyBmbGlnaHRfbnVtYmVyIH0gPSByb3V0ZXIucXVlcnlcbiAgICBmbGlnaHRfbnVtYmVyID0gcGFyc2VJbnQoZmxpZ2h0X251bWJlcik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8UXVlcnkgcXVlcnk9e0xBVU5DSF9RVUVSWX0gdmFyaWFibGVzPXt7IGZsaWdodF9udW1iZXIgfX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgKHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxoND5sb2FkaW5nLi4uPC9oND47XG4gICAgICAgICAgICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBmbGlnaHRfbnVtYmVyLFxuICAgICAgICAgICAgICAgIG1pc3Npb25fbmFtZSxcbiAgICAgICAgICAgICAgICBsYXVuY2hfeWVhcixcbiAgICAgICAgICAgICAgICBsYXVuY2hfc3VjY2VzcyxcbiAgICAgICAgICAgICAgICByb2NrZXQ6IHsgcm9ja2V0X2lkLCByb2NrZXRfbmFtZSwgcm9ja2V0X3R5cGUgfVxuICAgICAgICAgICAgICB9ID0gZGF0YS5sYXVuY2g7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFya1wiPk1pc3Npb246IDwvc3Bhbj4geyBtaXNzaW9uX25hbWUgfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIExhdW5jaCBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkZsaWdodCBOdW1iZXI6IHtmbGlnaHRfbnVtYmVyfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5GbGlnaHQgWWVhcjoge2xhdW5jaF95ZWFyfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5GbGlnaHQgU3VjY2Vzc2Z1bDoge2xhdW5jaF9zdWNjZXNzID8gJ1llcycgOiAnTm8nfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgUm9ja2V0IERldGFpbHNcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Um9ja2V0IElEOiB7cm9ja2V0X2lkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Sb2NrZXQgTmFtZToge3JvY2tldF9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Sb2NrZXQgVHlwZToge3JvY2tldF90eXBlfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEJhY2sgaG9tZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIDwvUXVlcnk+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/launch/[flight_number].js\n");

/***/ })

})