webpackHotUpdate("static/development/pages/analyze.js",{

/***/ "./pages/analyze.js":
/*!**************************!*\
  !*** ./pages/analyze.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_tree_map_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/tree-map-chart */ "./components/tree-map-chart.js");
/* harmony import */ var _components_color_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/color-bar */ "./components/color-bar.js");
/* harmony import */ var _components_lighthouse_report__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/lighthouse-report */ "./components/lighthouse-report.js");
/* harmony import */ var _components_multi_line_chart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/multi-line-chart */ "./components/multi-line-chart.js");
/* harmony import */ var _components_horizontal_bar_chart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/horizontal-bar-chart */ "./components/horizontal-bar-chart.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_api_url__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/api-url */ "./components/api-url.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");













var _jsxFileName = "/home/fsociety/Documents/dev/using-router-app/pages/analyze.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;














function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(url) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_22__(url, {
              mode: 'cors'
            });

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response.json());

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log('failed');
            return _context2.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getData.apply(this, arguments);
}

function getColorData(_x2) {
  return _getColorData.apply(this, arguments);
}

function _getColorData() {
  _getColorData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(domain) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/color-detection/").concat(domain)));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getColorData.apply(this, arguments);
}

function getColorBarData(_x3) {
  return _getColorBarData.apply(this, arguments);
}

function _getColorBarData() {
  _getColorBarData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(domain) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/color-bar/").concat(domain)));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getColorBarData.apply(this, arguments);
}

function getAlexaRanking(_x4) {
  return _getAlexaRanking.apply(this, arguments);
}

function _getAlexaRanking() {
  _getAlexaRanking = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(domain) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/alexa-ranking/").concat(domain)));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getAlexaRanking.apply(this, arguments);
}

function getCSSStats(domain) {
  return getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/css-stats/").concat(domain));
}

function getLighthouseReport(domain) {
  return getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/lighthouse/").concat(domain));
}

function getHTMLStats(domain) {
  return getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/html-stats/").concat(domain));
}

function getTechnologiesDetected(domain) {
  return getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/technology-detection/").concat(domain));
}

function getHTTPHeaders(domain) {
  return getData("".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["statsAPI"], "/http-headers/").concat(domain));
}

var Analyze =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(Analyze, _Component);

  function Analyze(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Analyze);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Analyze).call(this, props));
    _this.state = {
      htmlStatsLoading: false,
      colorLoading: false,
      alexaRankLoading: false,
      cssAnalysisLoading: true,
      lighthouseLoading: true,
      colorBarLoading: false
    };

    if (_this.props.router.query.url) {
      _this.state = {
        domain: _this.props.router.query.url,
        submitted: true,
        colorBarLoading: true,
        htmlStatsLoading: true,
        colorDataLoading: true,
        alexaRankLoading: true,
        cssAnalysisLoading: true,
        lighthouseReportLoading: true,
        technologiesLoading: true,
        lighthouseReport: null,
        htmlStats: null,
        cssStats: null,
        colorBarData: null,
        technologies: null,
        alexaRank: null
      };

      _this.getMetrics();
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Analyze, [{
    key: "getMetrics",
    value: function () {
      var _getMetrics = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var _this2 = this;

        var retrievalFunctions;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('getData', this.state.domain);
                retrievalFunctions = [{
                  fn: getColorData,
                  map: {
                    colors: 'colorData',
                    screenshotURL: 'screenshotURL',
                    optimizedScreenshotURL: 'optimizedScreenshotURL'
                  },
                  loadingProp: 'colorDataLoading'
                }, {
                  fn: getColorBarData,
                  map: {
                    _: 'colorBarData'
                  },
                  loadingProp: 'colorBarLoading'
                }, {
                  fn: getAlexaRanking,
                  map: {
                    alexaRank: 'alexaRank'
                  },
                  loadingProp: 'alexaRankLoading'
                }, {
                  fn: getCSSStats,
                  map: {
                    _: 'cssStats'
                  },
                  loadingProp: 'cssStatsLoading'
                }, {
                  fn: getLighthouseReport,
                  map: {
                    lighthouse: 'lighthouseReport',
                    viewReportURL: 'lighthouseReportURL'
                  },
                  loadingProp: 'lighthouseReportLoading'
                }, {
                  fn: getTechnologiesDetected,
                  map: {
                    _: 'technologies'
                  },
                  loadingProp: 'technologiesLoading'
                } // {
                //   fn: getHTMLStats,
                //   map: { htmlStats: this.mapHTMLData.bind(this) },
                //   loadingProp: 'htmlStatsLoading'
                // },
                // }, {
                //   fn: getHTTPHeaders,
                //   stateProp: 'httpHeaders'
                // }
                ];
                retrievalFunctions.forEach(function (_ref) {
                  var fn = _ref.fn,
                      stateProp = _ref.stateProp,
                      map = _ref.map,
                      loadingProp = _ref.loadingProp;
                  fn(_this2.state.domain).then(function (data) {
                    console.log('got data back for', loadingProp);
                    console.log(data);

                    var newState = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, loadingProp, false);

                    for (var _i = 0, _Object$entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5___default()(map); _i < _Object$entries.length; _i++) {
                      var _Object$entries$_i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_Object$entries[_i], 2),
                          key = _Object$entries$_i[0],
                          value = _Object$entries$_i[1];

                      if (key === '_') {
                        newState[value] = data;
                        break;
                      }

                      if (typeof value === 'function') {
                        newState[key] = value(data);
                      } else {
                        newState[value] = data[key];
                      }
                    }

                    _this2.setState(newState);
                  })["catch"](function (err) {
                    console.log("there was an error while getting ".concat(stateProp), err); // TODO: handle some error to display in the UI

                    _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, loadingProp, false));
                  });
                });
                getHTMLStats(this.state.domain).then(function (data) {
                  var tagData = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, data);

                  delete tagData.attributes;

                  _this2.setState({
                    htmlRawData: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, data),
                    htmlStats: _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5___default()(tagData).map(function (_ref2) {
                      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, 2),
                          key = _ref3[0],
                          value = _ref3[1];

                      return {
                        value: value.count,
                        name: key
                      };
                    }),
                    htmlStatsLoading: false,
                    htmlAttributesData: _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5___default()(data.attributes).map(function (_ref4) {
                      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref4, 2),
                          key = _ref5[0],
                          value = _ref5[1];

                      return {
                        value: value,
                        name: key
                      };
                    })
                  });
                })["catch"](function (e) {
                  console.log('there was an error while loading html stats'); // TODO: handle error

                  _this2.setState({
                    htmlStatsLoading: false
                  });
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMetrics() {
        return _getMetrics.apply(this, arguments);
      }

      return getMetrics;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('component did mount', this.props.router.query);
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        domain: event.target.value
      });
    }
  }, {
    key: "handleAttributesDropdownChange",
    value: function handleAttributesDropdownChange(event) {
      console.log('handleAttributesDropdownChange', event.target.value);
      var data;

      if (event.target.value === 'all') {
        data = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5___default()(this.state.htmlRawData.attributes).map(function (_ref6) {
          var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref6, 2),
              key = _ref7[0],
              value = _ref7[1];

          return {
            value: value,
            name: key
          };
        });
      } else {
        data = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5___default()(this.state.htmlRawData[event.target.value].attributes).map(function (_ref8) {
          var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref8, 2),
              key = _ref9[0],
              value = _ref9[1];

          return {
            value: value,
            name: key
          };
        });
      }

      this.setState({
        htmlAttributesData: data
      });
    }
  }, {
    key: "mapHTMLData",
    value: function mapHTMLData(data) {
      // TODO: this shouldn't use setState
      this.setState({
        htmlRawData: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, data)
      });
      delete data.attributes;
      return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_5___default()(data).map(function (_ref10) {
        var _ref11 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref10, 2),
            key = _ref11[0],
            value = _ref11[1];

        return {
          value: value.count,
          name: key
        };
      });
    }
  }, {
    key: "load",
    value: function load() {
      this.props.router.push('/analyze?url=' + this.state.domain);
      this.setState({
        submitted: true,
        colorBarLoading: true,
        htmlStatsLoading: true,
        colorDataLoading: true,
        alexaRankLoading: true,
        cssAnalysisLoading: true,
        lighthouseReportLoading: true,
        technologiesLoading: true,
        lighthouseReport: null,
        htmlStats: null,
        cssStats: null,
        colorBarData: null,
        technologies: null,
        alexaRank: null
      });
      this.getMetrics();
    }
  }, {
    key: "keyPressed",
    value: function keyPressed(event) {
      if (event.key === 'Enter') {
        this.load();
      }
    }
  }, {
    key: "selectElem",
    value: function selectElem() {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Analyze your website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, __jsx("div", {
        className: "background-rect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }), __jsx("div", {
        className: "columns is-centered is-multiline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, __jsx("div", {
        className: "column is-three-quarters first-section-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("div", {
        className: "columns is-vcentered is-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx("div", {
        className: "columns is-centered is-vcentered is-multiline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, __jsx("div", {
        className: "column is-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, __jsx("h1", {
        className: "title is-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "webcodex.dev"), __jsx("span", {
        className: "subtitle is-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Discover what lays behind the face of your favourite websites and graphics that represents everything")), __jsx("div", {
        className: "column is-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, __jsx("div", {
        className: "columns is-centered is-vcentered is-multiline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered is-two-thirds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, __jsx("input", {
        className: "domain-input",
        type: "text",
        value: this.state.domain,
        onChange: function onChange(e) {
          return _this3.handleChange(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this3.keyPressed(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), __jsx("div", {
        className: "column is-narrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, __jsx("button", {
        className: "btn-no-style",
        onClick: function onClick() {
          return _this3.load();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, __jsx("span", {
        className: "fa-layers fa-stack fa-fw fa-2x input-icon-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faCircle"],
        size: "2x",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faSearch"],
        size: "1x",
        color: "black",
        flip: "horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      })))), __jsx("div", {
        className: "column has-text-centered is-two-thirds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, this.state.domain && this.state.submitted && this.state.technologies ? __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "The website is built with ", this.state.technologies.map(function (x, i) {
        return i === _this3.state.technologies.length - 1 ? " and ".concat(x) : _this3.state.technologies.length - 2 ? "".concat(x, " ") : "".concat(x, ", ");
      })) : null))))), __jsx("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, __jsx("div", {
        className: "columns has-text-centered is-centered is-vcentered is-multiline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), __jsx("div", {
        className: "column is-two-thirds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, this.state.submitted && this.state.domain ? __jsx("img", {
        className: "screenshot-img",
        src: "".concat(_components_api_url__WEBPACK_IMPORTED_MODULE_23__["screenshotAPI"], "/").concat(this.state.domain),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }) : null), __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), __jsx("div", {
        className: "column is-two-thirds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, this.state.screenshotURL ? __jsx("span", {
        className: "screenshot-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, __jsx("a", {
        target: "_blank",
        href: this.state.screenshotURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "view fullscreen screenshot")) : null)))))), __jsx("div", {
        className: "columns is-centered is-multiline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, this.state.submitted ? __jsx("div", {
        className: "column is-three-quarters stats-section-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, __jsx("div", {
        className: "columns is-centered is-multiline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, this.state.submitted ? __jsx("div", {
        className: "column is-one-quarter has-text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, __jsx("div", {
        className: "table-of-contents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx("h2", {
        className: "is-size-2 nav-domain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, this.state.domain), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, __jsx("a", {
        href: "#html",
        className: "is-size-5 nav-link",
        onClick: function onClick() {
          return _this3.setState({
            navSectionActive: 'html'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "HTML"), __jsx("li", {
        className: "nav-section ".concat(this.state.navSectionActive !== 'html' ? 'collapsed' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, __jsx("a", {
        href: "#tag-frequency",
        className: "is-size-6 nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "1. Tag frequency")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, __jsx("a", {
        href: "#attribute-frequency",
        className: "is-size-6 nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "2. Attribute frequency")))), __jsx("a", {
        href: "#css",
        className: "is-size-5 nav-link",
        onClick: function onClick() {
          return _this3.setState({
            navSectionActive: 'css'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "CSS"), __jsx("li", {
        className: "nav-section ".concat(this.state.navSectionActive !== 'css' ? 'collapsed' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, __jsx("a", {
        href: "#color-detection",
        className: "is-size-6 nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "1. Color detection")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, __jsx("a", {
        href: "#color-defined-in-css",
        className: "is-size-6 nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "2. Colors defined in the CSS")))), __jsx("a", {
        href: "#js",
        className: "is-size-5 nav-link",
        onClick: function onClick() {
          return _this3.setState({
            navSectionActive: 'js'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "JS"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }), __jsx("a", {
        href: "#performance",
        className: "is-size-5 nav-link",
        onClick: function onClick() {
          return _this3.setState({
            navSectionActive: 'performance'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Performance"), __jsx("li", {
        className: "nav-section ".concat(this.state.navSectionActive !== 'performance' ? 'collapsed' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, __jsx("a", {
        href: "#lighthouse",
        className: "is-size-6 nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "1. Lighthouse report"))))))) : null, __jsx("div", {
        className: "column is-three-quarters has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, __jsx("div", {
        className: "columns is-vcentered is-centered is-multiline stats-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.htmlStats ? __jsx("h3", {
        className: "title is-3",
        id: "html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "HTML") : null : null, __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.htmlStats ? __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "The website containts a total of ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.htmlRawData).reduce(function (prev, curr) {
        return prev + _this3.state.htmlRawData[curr].count || 0;
      }, 0)), " DOM elements.") : null : null), __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.htmlStatsLoading ? __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }) : __jsx(_components_horizontal_bar_chart__WEBPACK_IMPORTED_MODULE_20__["default"], {
        title: "Tag frequency",
        data: this.state.htmlStats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }) : null), __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.htmlAttributesData ? __jsx(_components_horizontal_bar_chart__WEBPACK_IMPORTED_MODULE_20__["default"], {
        title: "Attribute frequency",
        data: this.state.htmlAttributesData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }) : null : null, this.state.submitted ? this.state.domain && this.state.htmlRawData ? __jsx("select", {
        onChange: function onChange(e) {
          return _this3.handleAttributesDropdownChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, __jsx("option", {
        value: "all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, "all"), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.htmlRawData).filter(function (key) {
        return _this3.state.htmlRawData[key] && _this3.state.htmlRawData[key].attributes && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this3.state.htmlRawData[key].attributes).length !== 0;
      }).map(function (key) {
        return __jsx("option", {
          value: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424
          },
          __self: this
        }, " ", "".concat(key, " (").concat(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this3.state.htmlRawData[key].attributes).length, ")"), " ");
      })) : null : null), __jsx("div", {
        className: "column is-full has-text-centered stat-separator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, " "), this.state.submitted ? this.state.domain && (this.state.colorData || this.state.colorBarData) ? __jsx("h3", {
        className: "title is-3",
        id: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, "CSS") : null : null, __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.cssStats ? __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, "The uncompressed amount of CSS present on the website is ", Math.round(this.state.cssStats['stylesheets.filesize.uncompressed.totalBytes'] / 1000), "kb (", Math.round(this.state.cssStats['stylesheets.filesize.compressed.gzip.totalBytes'] / 1000), "kb gzipped).") : null : null), __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.colorDataLoading ? __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }) : __jsx(_components_tree_map_chart__WEBPACK_IMPORTED_MODULE_16__["default"], {
        data: this.state.colorData,
        title: "Predominant colors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }) : null), __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.colorBarLoading ? __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }) : __jsx(_components_color_bar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: "Colors defined in the CSS",
        data: this.state.colorBarData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }) : null), __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.projectwallace.com/analyze-css?url=".concat(this.state.domain),
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, "View Project Wallace report"), " | ", __jsx("a", {
        href: "https://www.cssstats.com/stats?url=".concat(this.state.domain),
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, "View CSSStats report")), __jsx("div", {
        className: "column is-full has-text-centered stat-separator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, " "), this.state.submitted ? this.state.domain && this.state.lighthouseReport ? __jsx("h3", {
        className: "title is-3",
        id: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, "JS") : null : null, __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.lighthouseReport ? __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "The total number of transfered bytes for scripts is ", Math.round(this.state.lighthouseReport.audits['resource-summary'].details.items.find(function (e) {
        return e.resourceType === 'script';
      }).size / 1000), "kb.") : null : null), this.state.submitted ? this.state.domain && this.state.lighthouseReport ? __jsx("h3", {
        className: "title is-3",
        id: "performance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, "Performance") : null : null, __jsx("div", {
        className: "column is-full has-text-centered stat-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, this.state.submitted ? this.state.domain && this.state.lighthouseReportLoading ? __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }) : this.state.lighthouseReport ? __jsx(_components_lighthouse_report__WEBPACK_IMPORTED_MODULE_18__["default"], {
        data: this.state.lighthouseReport,
        lighthouseReportURL: this.state.lighthouseReportURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }) : 'there was an error' : null))))) : null));
    }
  }]);

  return Analyze;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(Analyze));

/***/ })

})
//# sourceMappingURL=analyze.js.e4a8e196aaeeaf5c06df.hot-update.js.map