(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wire-frame-landscape", [], factory);
	else if(typeof exports === 'object')
		exports["wire-frame-landscape"] = factory();
	else
		root["WFL"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
  function Color(hue, saturation, lightness) {
    _classCallCheck(this, Color);

    // console.log(" " + hue + " " + saturation + " " + lightness);
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  _createClass(Color, [{
    key: "get_HSL",
    value: function get_HSL() {
      return [this.hue, this.saturation, this.lightness];
    }
  }, {
    key: "get_RGB",
    value: function get_RGB() {
      return Color.from_HSL_to_RGB(this.hue, this.saturation, this.lightness);
    }
  }, {
    key: "get_RGB_HTML",
    value: function get_RGB_HTML() {
      var rgb = this.get_RGB();
      return "#" + Math.round(rgb[0] * 255).toString(16) + Math.round(rgb[1] * 255).toString(16) + Math.round(rgb[2] * 255).toString(16);
    }
  }], [{
    key: "get_RGB_HTML_from_RGB",
    value: function get_RGB_HTML_from_RGB() {
      var rgb = Color.get_RGB_from_representation.apply(null, arguments);
      // console.log(rgb);
      if (rgb === null) {
        return null;
      }
      return "#" + Math.round(rgb[0] * 255).toString(16) + Math.round(rgb[1] * 255).toString(16) + Math.round(rgb[2] * 255).toString(16);
    }
  }, {
    key: "create_from_HSL",
    value: function create_from_HSL() {
      var hsl = Color.get_HSL_from_representation.apply(null, arguments);
      // console.log(arguments[0]);
      // console.log(hsl);
      if (hsl === null) {
        return null;
      }
      return new Color(hsl[0], hsl[1], hsl[2]);
    }
  }, {
    key: "create_from_RGB",
    value: function create_from_RGB() {
      var hsl = Color.from_RGB_to_HSL.apply(null, arguments);
      if (hsl === null) {
        return null;
      }
      return new Color(hsl[0], hsl[1], hsl[2]);
    }
  }, {
    key: "from_RGB_to_HSL",
    value: function from_RGB_to_HSL() {
      var rgb = Color.get_RGB_from_representation.apply(null, arguments);
      // console.log("coucou");
      // console.log(rgb);
      if (rgb === null) {
        return null;
      }
      var red = rgb[0],
          green = rgb[1],
          blue = rgb[2];

      var M = Math.max(red, green, blue);
      var m = Math.min(red, green, blue);
      var C = M - m;

      var hue_prime = function () {
        if (C === 0.0) return 0;else if (M === red) return (green - blue) / C % 6;else if (M === green) return (blue - red) / C + 2;else if (M === blue) return (red - green) / C + 4;
      }();
      var hue = hue_prime < 0 ? 360 + hue_prime * 60 : hue_prime * 60;
      var lightness = 1 / 2 * (M + m);
      var saturation = function () {
        if (lightness === 1) return 0;else return C / (1 - Math.abs(2 * lightness - 1));
      }();

      return [hue, saturation, lightness];
    }
  }, {
    key: "from_HSL_to_RGB",
    value: function from_HSL_to_RGB() {
      var hsl = Color.get_HSL_from_representation.apply(null, arguments);
      //console.log(hsl);
      if (hsl === null) {
        return null;
      }

      var hue = hsl[0],
          saturation = hsl[1],
          lightness = hsl[2];
      //console.log(hsl);

      var C = (1 - Math.abs(2 * lightness - 1)) * saturation;
      var hue_prime = hue / 60;
      //console.log(hue_prime);
      var X = C * (1 - Math.abs(hue_prime % 2 - 1));
      var rgb_one = function () {
        if (0 <= hue_prime && hue_prime <= 1) return [C, X, 0];else if (1 <= hue_prime && hue_prime <= 2) return [X, C, 0];else if (2 <= hue_prime && hue_prime <= 3) return [0, C, X];else if (3 <= hue_prime && hue_prime <= 4) return [0, X, C];else if (4 <= hue_prime && hue_prime <= 5) return [X, 0, C];else if (5 <= hue_prime && hue_prime <= 6) return [C, 0, X];
      }();
      //console.log(rgb_one);
      var m = lightness - 1.0 / 2.0 * C;
      var red = rgb_one[0] + m,
          green = rgb_one[1] + m,
          blue = rgb_one[2] + m;

      return [red, green, blue];
    }
  }, {
    key: "get_HSL_from_representation",
    value: function get_HSL_from_representation() {
      // console.log("arguments");
      // console.log(arguments);
      if (arguments.length === 3 && typeof arguments[0] === "number" && typeof arguments[1] === "number" && typeof arguments[2] === "number" && arguments[0] <= 360 && arguments[1] <= 1.0 && arguments[2] <= 1.0) {
        return [arguments[0], arguments[1], arguments[2]];
      } else if (arguments.length === 1 && Array.isArray(arguments[0]) && typeof arguments[0][0] === "number" && typeof arguments[0][1] === "number" && typeof arguments[0][2] === "number" && arguments[0][0] <= 360 && arguments[0][1] <= 1.0 && arguments[0][2] <= 1.0) {
        return [arguments[0][0], arguments[0][1], arguments[0][2]];
      }
      return null;
    }
  }, {
    key: "get_RGB_from_representation",
    value: function get_RGB_from_representation() {
      if (arguments.length === 1 && typeof arguments[0] === "string") {
        var str = arguments[0];
        return [parseInt("0x" + str.substring(1, 3)) / 255, parseInt("0x" + str.substring(3, 5)) / 255, parseInt("0x" + str.substring(5, 7)) / 255];
      } else if (arguments.length === 3 && typeof arguments[0] === "number" && typeof arguments[1] === "number" && typeof arguments[2] === "number" && arguments[0] <= 1.0 && arguments[1] <= 1.0 && arguments[2] <= 1.0) {
        return [arguments[0], arguments[1], arguments[2]];
      } else if (arguments.length === 3 && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1]) && Number.isInteger(arguments[2]) && arguments[0] <= 255 && arguments[1] <= 255 && arguments[2] <= 255) {
        return [arguments[0] / 255, arguments[1] / 255, arguments[2] / 255];
      } else if (arguments.length === 1 && Array.isArray(arguments[0]) && typeof arguments[0][0] === "number" && typeof arguments[0][1] === "number" && typeof arguments[0][2] === "number" && arguments[0][0] <= 1.0 && arguments[0][1] <= 1.0 && arguments[0][2] <= 1.0) {
        return [arguments[0][0], arguments[0][1], arguments[0][2]];
      } else if (arguments.length === 1 && Array.isArray(arguments[0]) && Number.isInteger(arguments[0][0]) && Number.isInteger(arguments[0][1]) && Number.isInteger(arguments[0][2]) && arguments[0][0] <= 255 && arguments[0][1] <= 255 && arguments[0][2] <= 255) {
        return [arguments[0][0] / 255, arguments[0][1] / 255, arguments[0][2] / 255];
      }
      return null;
    }
  }]);

  return Color;
}();

exports.default = Color;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = undefined;

var _wireFrameLandscape = __webpack_require__(/*! ./wireFrameLandscape.js */ "./src/wireFrameLandscape.js");

var _wireFrameLandscape2 = _interopRequireDefault(_wireFrameLandscape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(wrapper_id, number_of_point) {
  var framerate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  var background_color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#FFFFFF";
  var wire_color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#FF0000";

  var wfl = new _wireFrameLandscape2.default(wrapper_id, number_of_point, framerate);
  wfl.set_colors(background_color, wire_color);
  return wfl;
}

exports.create = create;

/***/ }),

/***/ "./src/link.js":
/*!*********************!*\
  !*** ./src/link.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = function () {
  function Link(point1, point2) {
    _classCallCheck(this, Link);

    this.start = point1;
    this.end = point2;
    this.start.add_link(this);
    this.end.add_link(this);
    this.used = false;
  }

  _createClass(Link, [{
    key: "use",
    value: function use() {
      this.used = true;
    }
  }, {
    key: "is_used",
    value: function is_used() {
      return this.used;
    }
  }, {
    key: "contains",
    value: function contains(point) {
      return point === this.start || point === this.end;
    }
  }, {
    key: "to_string",
    value: function to_string() {
      return this.start.to_string() + " ----> " + this.end.to_string();
    }
  }]);

  return Link;
}();

exports.default = Link;

/***/ }),

/***/ "./src/point.js":
/*!**********************!*\
  !*** ./src/point.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _link = __webpack_require__(/*! ./link.js */ "./src/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(x, y, from, to, framerate) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
    this.links = [];

    this.frames = [];
    var multiplier = Math.random() * (to - from) - from;
    var translate = Math.random() * (2 * Math.PI - 0) - 0;
    for (var i = 0; i <= framerate; ++i) {
      var coucou = (i / framerate * 2 * Math.PI + translate) % (2 * Math.PI);
      this.frames.push(Math.cos(coucou) * multiplier);
    }
  }

  _createClass(Point, [{
    key: "set_position",
    value: function set_position(cx, cy) {
      this.cx = cx;
      this.cy = cy;
    }
  }, {
    key: "link_to",
    value: function link_to(point) {
      return new _link2.default(this, point);
    }
  }, {
    key: "add_link",
    value: function add_link(link) {
      this.links.push(link);
    }
  }, {
    key: "get_empty_links",
    value: function get_empty_links() {
      var empty_links = [];
      for (var i = 0; i < this.links.length; ++i) {
        if (!this.links[i].is_used()) {
          empty_links.push(this.links[i]);
        }
      }
      return empty_links;
    }
  }, {
    key: "get_unvisited_link",
    value: function get_unvisited_link() {
      for (var i = 0; i < this.links.length; ++i) {
        if (!this.links[i].is_used()) {
          return this.links[i];
        }
      }
      return null;
    }
  }, {
    key: "get_frame",
    value: function get_frame(number) {
      return "" + this.cx + "," + (this.cy + this.frames[number]);
    }
  }, {
    key: "to_string",
    value: function to_string() {
      return "[" + this.x + ", " + this.y + "]";
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),

/***/ "./src/resizeSensor.js":
/*!*****************************!*\
  !*** ./src/resizeSensor.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
    if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var f; }
}(function () {
    var define, module, exports;return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({ 1: [function (require, module, exports) {
            var css = function (global) {
                'use strict';

                /** @var {null|Object} */

                var animationPropertiesForBrowser = null;
                /** @var {null|boolean} */
                var isCssAnimationSupported = null;

                /**
                 * Determines which style convention (properties) to follow
                 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations/Detecting_CSS_animation_support
                 * @returns {{keyframesRule: string, styleDeclaration: string, animationStartEvent: string, animationName: string}}
                 */
                function getAnimationPropertiesForBrowser() {
                    if (animationPropertiesForBrowser !== null) {
                        return animationPropertiesForBrowser;
                    }

                    var testElement = global.document.createElement('div');
                    var supportsUnprefixedAnimationProperties = 'animationName' in testElement.style;

                    // Unprefixed animation properties
                    var animationStartEvent = 'animationstart';
                    var animationName = 'resizeanim';

                    if (supportsUnprefixedAnimationProperties) {
                        return {
                            keyframesRule: '@keyframes ' + animationName + ' {from { opacity: 0; } to { opacity: 0; }}',
                            styleDeclaration: 'animation: 1ms ' + animationName + ';',
                            animationStartEvent: animationStartEvent,
                            animationName: animationName
                        };
                    }

                    // Browser specific animation properties
                    var keyframePrefix = '';
                    var browserPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                    var startEvents = ['webkitAnimationStart', 'animationstart', 'oAnimationStart', 'MSAnimationStart'];

                    var i;
                    var l = browserPrefixes.length;

                    for (i = 0; i < l; i++) {
                        if (browserPrefixes[i] + 'AnimationName' in testElement.style) {
                            keyframePrefix = '-' + browserPrefixes[i].toLowerCase() + '-';
                            animationStartEvent = startEvents[i];
                            break;
                        }
                    }

                    animationPropertiesForBrowser = {
                        keyframesRule: '@' + keyframePrefix + 'keyframes ' + animationName + ' {from { opacity: 0; } to { opacity: 0; }}',
                        styleDeclaration: keyframePrefix + 'animation: 1ms ' + animationName + ';',
                        animationStartEvent: animationStartEvent,
                        animationName: animationName
                    };

                    return animationPropertiesForBrowser;
                }

                /**
                 * @returns {boolean}
                 */
                function isCSSAnimationSupported() {
                    if (isCssAnimationSupported !== null) {
                        return isCssAnimationSupported;
                    }

                    var testElement = global.document.createElement('div');
                    var isAnimationSupported = 'animationName' in testElement.style;

                    if (isAnimationSupported) {
                        isCssAnimationSupported = true;
                        return isCssAnimationSupported;
                    }

                    var browserPrefixes = 'Webkit Moz O ms'.split(' ');
                    var i = 0;
                    var l = browserPrefixes.length;

                    for (; i < l; i++) {
                        if (browserPrefixes[i] + 'AnimationName' in testElement.style) {
                            isCssAnimationSupported = true;
                            return isCssAnimationSupported;
                        }
                    }

                    isCssAnimationSupported = false;
                    return isCssAnimationSupported;
                }

                /**
                 * Adds a style block that contains CSS essential for detecting resize events
                 */
                function insertResizeSensorStyles() {
                    var cssRules = [getAnimationPropertiesForBrowser().keyframesRule ? getAnimationPropertiesForBrowser().keyframesRule : '', '.ResizeSensor__resizeTriggers { ' + (getAnimationPropertiesForBrowser().styleDeclaration ? getAnimationPropertiesForBrowser().styleDeclaration : '') + ' visibility: hidden; opacity: 0; }', '.ResizeSensor__resizeTriggers, .ResizeSensor__resizeTriggers > div, .ResizeSensor__contractTrigger:before { content: \' \'; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .ResizeSensor__resizeTriggers > div { background: #eee; overflow: auto; } .ResizeSensor__contractTrigger:before { width: 200%; height: 200%; }'];

                    cssRules = cssRules.join(' ');

                    var headElem = global.document.head || global.document.getElementsByTagName('head')[0];

                    var styleElem = global.document.createElement('style');
                    styleElem.type = 'text/css';

                    if (styleElem.styleSheet) {
                        styleElem.styleSheet.cssText = cssRules;
                    } else {
                        styleElem.appendChild(global.document.createTextNode(cssRules));
                    }

                    headElem.appendChild(styleElem);
                }

                return {
                    insertResizeSensorStyles: insertResizeSensorStyles,
                    isAnimationSupported: isCSSAnimationSupported,
                    getAnimationPropertiesForBrowser: getAnimationPropertiesForBrowser
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = css;
        }, {}], 2: [function (require, module, exports) {
            var getStyle = function (global) {
                'use strict';

                /**
                 * @param {HTMLElement} element
                 * @param {string} property
                 * @returns {null|string}
                 */

                return function (element, property) {
                    if (!('currentStyle' in element) && !('getComputedStyle' in global)) {
                        return null;
                    }

                    if (element.currentStyle) {
                        return element.currentStyle[property];
                    }

                    return global.document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = getStyle;
        }, {}], 3: [function (require, module, exports) {
            var polyfill = function (global) {
                'use strict';

                /**
                 * @see https://gist.github.com/mrdoob/838785
                 */

                function polyfillRequestAnimationFrame() {
                    if (!global.requestAnimationFrame) {
                        global.requestAnimationFrame = function () {
                            return global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
                                global.setTimeout(callback, 1000 / 60);
                            };
                        }();
                    }

                    if (!global.cancelAnimationFrame) {
                        global.cancelAnimationFrame = function () {
                            return global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame || global.clearTimeout;
                        }();
                    }
                }

                return {
                    requestAnimationFrame: polyfillRequestAnimationFrame
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = polyfill;
        }, {}], 4: [function (require, module, exports) {
            var resizeSensorFactory = function (global) {
                'use strict';

                /** @var {Function} */

                var getStyle = require('./getStyle');
                /** @var {Object} */
                var css = require('./css');

                /**
                 * @param {HTMLElement} targetElement
                 * @param {Function} callback
                 * @constructor
                 */
                var resizeSensor = function resizeSensor(targetElement, callback) {
                    /** @var {HTMLElement} */
                    this.targetElement = targetElement;
                    /** @var {Function} */
                    this.callback = callback;
                    /** @var {{width: int, height: int}} */
                    this.dimensions = {
                        width: 0,
                        height: 0
                    };

                    if ('attachEvent' in global.document) {
                        this.boundOnResizeHandler = this.onElementResize.bind(this);
                        this.targetElement.attachEvent('onresize', this.boundOnResizeHandler);
                        return;
                    }

                    /** @var {{container: HTMLElement, expand: HTMLElement, expandChild: HTMLElement, contract: HTMLElement}} */
                    this.triggerElements = {};
                    /** @var {int} */
                    this.resizeRAF = 0;

                    this.setup();
                };

                resizeSensor.prototype.setup = function () {
                    // Make sure the target element is "positioned"
                    if (getStyle(this.targetElement, 'position') === 'static') {
                        this.targetElement.style.position = 'relative';
                    }

                    // Create and append resize trigger elements
                    this.insertResizeTriggerElements();

                    // Start listening to events
                    this.boundScrollListener = this.handleElementScroll.bind(this);
                    this.targetElement.addEventListener('scroll', this.boundScrollListener, true);

                    if (css.isAnimationSupported()) {
                        this.boundAnimationStartListener = this.resetTriggersOnAnimationStart.bind(this);
                        this.triggerElements.container.addEventListener(css.getAnimationPropertiesForBrowser().animationStartEvent, this.boundAnimationStartListener);
                    }

                    // Initial value reset of all triggers
                    this.resetTriggers();
                };

                resizeSensor.prototype.insertResizeTriggerElements = function () {
                    var resizeTrigger = global.document.createElement('div');
                    var expandTrigger = global.document.createElement('div');
                    var expandTriggerChild = global.document.createElement('div');
                    var contractTrigger = global.document.createElement('div');

                    resizeTrigger.className = 'ResizeSensor ResizeSensor__resizeTriggers';
                    expandTrigger.className = 'ResizeSensor__expandTrigger';
                    contractTrigger.className = 'ResizeSensor__contractTrigger';

                    expandTrigger.appendChild(expandTriggerChild);
                    resizeTrigger.appendChild(expandTrigger);
                    resizeTrigger.appendChild(contractTrigger);

                    this.triggerElements.container = resizeTrigger;
                    this.triggerElements.expand = expandTrigger;
                    this.triggerElements.expandChild = expandTriggerChild;
                    this.triggerElements.contract = contractTrigger;

                    this.targetElement.appendChild(resizeTrigger);
                };

                resizeSensor.prototype.onElementResize = function () {
                    var currentDimensions = this.getDimensions();

                    if (this.isResized(currentDimensions)) {
                        this.dimensions.width = currentDimensions.width;
                        this.dimensions.height = currentDimensions.height;
                        this.elementResized();
                    }
                };

                resizeSensor.prototype.handleElementScroll = function () {
                    var _this = this;

                    this.resetTriggers();

                    if (this.resizeRAF) {
                        global.cancelAnimationFrame(this.resizeRAF);
                    }

                    this.resizeRAF = global.requestAnimationFrame(function () {
                        var currentDimensions = _this.getDimensions();
                        if (_this.isResized(currentDimensions)) {
                            _this.dimensions.width = currentDimensions.width;
                            _this.dimensions.height = currentDimensions.height;
                            _this.elementResized();
                        }
                    });
                };

                /**
                 * @param {{width: number, height: number}} currentDimensions
                 * @returns {boolean}
                 */
                resizeSensor.prototype.isResized = function (currentDimensions) {
                    return currentDimensions.width !== this.dimensions.width || currentDimensions.height !== this.dimensions.height;
                };

                /**
                 * @returns {{width: number, height: number}}
                 */
                resizeSensor.prototype.getDimensions = function () {
                    return {
                        width: this.targetElement.offsetWidth,
                        height: this.targetElement.offsetHeight
                    };
                };

                /**
                 * @param {Event} event
                 */
                resizeSensor.prototype.resetTriggersOnAnimationStart = function (event) {
                    if (event.animationName === css.getAnimationPropertiesForBrowser().animationName) {
                        this.resetTriggers();
                    }
                };

                resizeSensor.prototype.resetTriggers = function () {
                    this.triggerElements.contract.scrollLeft = this.triggerElements.contract.scrollWidth;
                    this.triggerElements.contract.scrollTop = this.triggerElements.contract.scrollHeight;
                    this.triggerElements.expandChild.style.width = this.triggerElements.expand.offsetWidth + 1 + 'px';
                    this.triggerElements.expandChild.style.height = this.triggerElements.expand.offsetHeight + 1 + 'px';
                    this.triggerElements.expand.scrollLeft = this.triggerElements.expand.scrollWidth;
                    this.triggerElements.expand.scrollTop = this.triggerElements.expand.scrollHeight;
                };

                resizeSensor.prototype.elementResized = function () {
                    this.callback(this.dimensions);
                };

                resizeSensor.prototype.destroy = function () {
                    this.removeEventListeners();
                    this.targetElement.removeChild(this.triggerElements.container);
                    delete this.boundAnimationStartListener;
                    delete this.boundScrollListener;
                    delete this.callback;
                    delete this.targetElement;
                };

                resizeSensor.prototype.removeEventListeners = function () {
                    if ('attachEvent' in global.document) {
                        this.targetElement.detachEvent('onresize', this.boundOnResizeHandler);
                        return;
                    }

                    this.triggerElements.container.removeEventListener(css.getAnimationPropertiesForBrowser().animationStartEvent, this.boundAnimationStartListener);
                    this.targetElement.removeEventListener('scroll', this.boundScrollListener, true);
                };

                return {
                    /**
                     * @param {Element} targetElement
                     * @param {Function} callback
                     * @returns {resizeSensor}
                     */
                    create: function create(targetElement, callback) {
                        return new resizeSensor(targetElement, callback);
                    }
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = resizeSensorFactory;
        }, { "./css": 1, "./getStyle": 2 }], 5: [function (require, module, exports) {
            var sensors = function (global) {
                'use strict';

                /** @var {Object} */

                var css = require('./css');
                /** @var {Object} */
                var polyfill = require('./polyfill');
                /** @var {Object} */
                var resizeSensorFactory = require('./resizeSensor');

                /** {array} */
                var unsuitableElements = ['IMG', 'COL', 'TR', 'THEAD', 'TFOOT'];
                /** {boolean} */
                var supportsAttachEvent = 'attachEvent' in global.document;

                /** {{}} Map of all resize sensors (id => ResizeSensor) */
                var allResizeSensors = {};

                if (!supportsAttachEvent) {
                    css.insertResizeSensorStyles();

                    if (!('requestAnimationFrame' in global) || !('cancelAnimationFrame' in global)) {
                        polyfill.requestAnimationFrame();
                    }
                }

                /**
                 * @param {Element} targetElement
                 * @param {Function} callback
                 * @returns {resizeSensor}
                 */
                function create(targetElement, callback) {
                    if (isUnsuitableElement(targetElement)) {
                        console && console.error("Given element isn't suitable to act as a resize sensor. Try wrapping it with one that is. Unsuitable elements are:", unsuitableElements);
                        return null;
                    }

                    var sensorId = getSensorId(targetElement);

                    if (allResizeSensors[sensorId]) {
                        return allResizeSensors[sensorId];
                    }

                    var sensor = resizeSensorFactory.create(targetElement, callback);
                    allResizeSensors[sensorId] = sensor;
                    return sensor;
                }

                /**
                 * @param {Element} targetElement
                 */
                function destroy(targetElement) {
                    var sensorId = getSensorId(targetElement);
                    var sensor = allResizeSensors[sensorId];

                    if (!sensor) {
                        console && console.error("Can't destroy ResizeSensor (404 not found).", targetElement);
                    }

                    sensor.destroy();
                    delete allResizeSensors[sensorId];
                }

                /**
                 * @param {Element} targetElement
                 * @returns {string}
                 */
                function getSensorId(targetElement) {
                    return targetElement.id;
                }

                /**
                 * @param {HTMLElement} targetElement
                 * @returns {boolean}
                 */
                function isUnsuitableElement(targetElement) {
                    var tagName = targetElement.tagName.toUpperCase();
                    return unsuitableElements.indexOf(tagName) > -1;
                }

                return {
                    create: create,
                    destroy: destroy
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = sensors;
        }, { "./css": 1, "./polyfill": 3, "./resizeSensor": 4 }] }, {}, [5])(5);
});

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./index.js */ "./src/index.js");

var WFL = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var wfl = WFL.create("canvas-wrapper", 20, 10, "#FFFFFF", "#0496FF");

setTimeout(function () {
  wfl.animate_colors("#D81159", "#FFBC42");
}, 1000);

/***/ }),

/***/ "./src/wireFrameLandscape.js":
/*!***********************************!*\
  !*** ./src/wireFrameLandscape.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resizeSensor = __webpack_require__(/*! ./resizeSensor.js */ "./src/resizeSensor.js");

var _resizeSensor2 = _interopRequireDefault(_resizeSensor);

var _point = __webpack_require__(/*! ./point.js */ "./src/point.js");

var _point2 = _interopRequireDefault(_point);

var _link = __webpack_require__(/*! ./link.js */ "./src/link.js");

var _link2 = _interopRequireDefault(_link);

var _color = __webpack_require__(/*! ./color.js */ "./src/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WireFrameLandscape = function () {
  function WireFrameLandscape(id_wrapper, number_of_point, framerate) {
    _classCallCheck(this, WireFrameLandscape);

    this.number_of_point = number_of_point;
    this.distance = 50;
    this.length_multipier = 1.5;
    this.min_amplitude = -2;
    this.max_amplitude = 2;
    this.framerate = framerate;

    this.wrapper = document.getElementById(id_wrapper);
    this.create_elements();
    this.set_svg_size();

    if (number_of_point % 2 != 0) {
      throw new Error("the number of point is not even");
    }

    var points = this.create_points(number_of_point, this.framerate);
    this.set_position_points(points);
    var grid = this.generate_links(points);
    var path = this.generate_path(grid);
    this.display(path, this.framerate);

    var $this = this;
    _resizeSensor2.default.create(this.wrapper, function () {
      $this.set_svg_size();
      $this.set_position_points(points);
      $this.display(path, $this.framerate);
    });
  }

  _createClass(WireFrameLandscape, [{
    key: 'create_points',
    value: function create_points(number_of_point, framerate) {
      var from = void 0,
          to = void 0;
      var points = new Array(number_of_point);

      for (var j = 0; j < number_of_point; ++j) {
        points[j] = new Array(number_of_point);
        for (var i = 0; i < number_of_point; ++i) {
          if (i == 0 || i == number_of_point - 1 || j == 0 || j == number_of_point - 1) {
            from = to = 0;
          } else {
            from = this.min_amplitude;
            to = this.max_amplitude;
          }
          points[j][i] = new _point2.default(i, j, from, to, framerate);
        }
      }
      return points;
    }
  }, {
    key: 'set_position_points',
    value: function set_position_points(points) {
      var number_of_point = points[0].length;
      var cx = void 0,
          cy = void 0,
          rot_cx = void 0,
          rot_cy = void 0;
      var width = this.getWidth() * this.length_multipier,
          height = this.getHeight() * this.length_multipier;
      var screen_mid_x = this.getWrapperWidth() / 2.0,
          screen_mid_y = this.getWrapperHeight() / 2.0;
      var matrix = this.create_matrix(Math.PI / 4);

      var translate = 0;

      for (var j = 0; j < number_of_point; ++j) {
        for (var i = 0; i < number_of_point; ++i) {
          cx = i / (number_of_point - 1) * width - width / 2.0;
          cy = j / (number_of_point - 1) * height - height / 2.0;
          // console.log("cx: " + cx + ", cy: " + cy);
          // rot_cx = cx;
          // rot_cy = cy;
          rot_cx = cx * matrix[0][0] + cy * matrix[0][1];
          rot_cy = cx * matrix[1][0] + cy * matrix[1][1];
          // console.log("cx: " + ( cx + screen_mid_x ) + ", cy: " + ( cy + screen_mid_y  ));
          points[j][i].set_position(rot_cx + screen_mid_x + translate, rot_cy + screen_mid_y + translate);
        }
      }
    }
  }, {
    key: 'generate_links',
    value: function generate_links(points) {
      var number_of_point = points.length;
      var links = [];

      for (var j = 0; j < number_of_point; ++j) {
        for (var i = 0; i < number_of_point; ++i) {
          if (j < number_of_point - 1) {
            links.push(points[j][i].link_to(points[j + 1][i]));
          }
          if (i < number_of_point - 1) {
            links.push(points[j][i].link_to(points[j][i + 1]));
          }
        }
      }

      var indices = [0, number_of_point - 1];
      for (var m = 0; m < indices.length; ++m) {
        for (var o = 1; o < number_of_point / 2.0; ++o) {
          links.push(points[indices[m]][o].link_to(points[indices[m]][number_of_point - 1 - o]));
        }
      }

      for (var _m = 0; _m < indices.length; ++_m) {
        for (var _o = 1; _o < number_of_point / 2.0; ++_o) {
          links.push(points[_o][indices[_m]].link_to(points[number_of_point - 1 - _o][indices[_m]]));
        }
      }

      return points;
    }
  }, {
    key: 'generate_path',
    value: function generate_path(grid) {
      var start_point = grid[0][0];
      var start_point_index = 0;
      var path = [start_point];
      var current_point = void 0;
      var sub_path = void 0;
      var link = void 0;

      while (start_point != null) {
        sub_path = [];
        current_point = start_point;
        do {
          link = current_point.get_unvisited_link();
          current_point = link.start === current_point ? link.end : link.start;
          link.use();
          sub_path.push(current_point);
        } while (current_point !== start_point);

        for (var i = 0; i < sub_path.length; ++i) {
          path.splice(start_point_index + i + 1, 0, sub_path[i]);
        }

        start_point = null;
        for (var _i = 0, good = false; !good && _i < path.length; ++_i) {
          if (path[_i].get_unvisited_link() !== null) {
            start_point = path[_i];
            start_point_index = _i;
            good = true;
          }
        }
      }
      return path;
    }
  }, {
    key: 'display',
    value: function display(path, framerate) {
      this.animation_polyline.setAttribute("from", this.create_frame(path, 0));
      this.animation_polyline.setAttribute("to", this.create_frame(path, framerate));
      var keyTimes = "";
      var values = "";
      var sep = "";

      for (var i = 0; i <= framerate; ++i) {
        sep = i === framerate ? "" : ";";
        keyTimes += i / framerate + sep;
        values += this.create_frame(path, i) + sep;
      }

      this.animation_polyline.setAttribute("keyTimes", keyTimes);
      this.animation_polyline.setAttribute("values", values);
    }
  }, {
    key: 'create_svg_node',
    value: function create_svg_node(name, attrs) {
      var element = document.createElementNS("http://www.w3.org/2000/svg", name);
      var keys = Object.keys(attrs);

      for (var i = 0; i < keys.length; ++i) {
        element.setAttribute(keys[i], attrs[keys[i]]);
      }

      return element;
    }
  }, {
    key: 'create_frame',
    value: function create_frame(path, frame_number) {
      var frame = "";

      for (var i = 0; i < path.length; ++i) {
        frame += path[i].get_frame(frame_number) + (i <= path.length - 1 ? " " : "");
      }

      return frame;
    }
  }, {
    key: 'create_matrix',
    value: function create_matrix(theta) {
      return [[Math.cos(theta), -1 * Math.sin(theta)], [Math.sin(theta), Math.cos(theta)]];
    }
  }, {
    key: 'set_colors',
    value: function set_colors(background_color, wire_color) {
      this.rect.setAttribute("fill", background_color);
      this.polyline.setAttribute("stroke", wire_color);
    }
  }, {
    key: 'animate_colors',
    value: function animate_colors(background_color, wire_color) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.4;

      var $this = this;

      var to_background = _color2.default.get_RGB_from_representation(background_color);
      var to_wire = _color2.default.get_RGB_from_representation(wire_color);
      var from_background = _color2.default.get_RGB_from_representation(this.rect.getAttribute("fill"));
      var from_wire = _color2.default.get_RGB_from_representation(this.polyline.getAttribute("stroke"));
      var back = [],
          wire = [];

      for (var i = 0; i < 3; ++i) {
        back.push(to_background[i] - from_background[i]);
        wire.push(to_wire[i] - from_wire[i]);
      }
      // console.log(back);
      // console.log(wire);

      var date = null;
      var interval_key = null;
      var frac = void 0;

      interval_key = setInterval(function () {
        var current = Date.now();
        if (date === null) date = current;else if (current - date >= time * 1000) {
          clearInterval(interval_key);
          current = time * 1000 + date;
        }

        frac = (current - date) / (time * 1000);

        // console.log("frac: " + frac);
        // console.log(back.map(function (item) {
        //   return item * frac
        // }).map(function (item, index) {
        //   return item + from_background[index];
        // }));
        // console.log(Color.get_RGB_HTML_from_RGB(back.map(function (item) {
        //   return item * frac
        // }).map(function (item, index) {
        //   return item + from_background[index];
        // })));

        $this.rect.setAttribute("fill", _color2.default.get_RGB_HTML_from_RGB(back.map(function (item) {
          return item * frac;
        }).map(function (item, index) {
          return item + from_background[index];
        })));

        $this.polyline.setAttribute("stroke", _color2.default.get_RGB_HTML_from_RGB(wire.map(function (item) {
          return item * frac;
        }).map(function (item, index) {
          return item + from_wire[index];
        })));
      }, 33);
    }
  }, {
    key: 'create_elements',
    value: function create_elements() {
      this.element = this.create_svg_node("svg", {
        "version": "1.1"
      });

      this.rect = this.create_svg_node("rect", {
        "fill": "cyan",
        "width": "100%",
        "height": "100%"
      });

      this.polyline = this.create_svg_node("polyline", {
        "stroke": "red",
        "stroke-width": "3",
        "fill": "none"
      });

      this.animation_polyline = this.create_svg_node("animate", {
        "attributeName": "points",
        "dur": "5s",
        "repeatCount": "indefinite"
      });

      this.polyline.appendChild(this.animation_polyline);
      this.element.appendChild(this.rect);
      this.element.appendChild(this.polyline);
      this.wrapper.appendChild(this.element);
    }
  }, {
    key: 'set_svg_size',
    value: function set_svg_size() {
      this.element.setAttribute("viewBox", "0 0 " + this.getWrapperWidth() + " " + this.getWrapperHeight());
      this.element.setAttribute("width", "" + this.getWrapperWidth() + "px");
      this.element.setAttribute("height", "" + this.getWrapperHeight() + "px");
    }
  }, {
    key: 'getWrapperWidth',
    value: function getWrapperWidth() {
      return this.wrapper.offsetWidth;
    }
  }, {
    key: 'getWrapperHeight',
    value: function getWrapperHeight() {
      return this.wrapper.offsetHeight;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var width = this.getWrapperWidth();
      var height = this.getWrapperHeight();
      return width > height ? width : height;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var width = this.getWrapperWidth();
      var height = this.getWrapperHeight();
      return width > height ? width : height;
    }
  }]);

  return WireFrameLandscape;
}();

exports.default = WireFrameLandscape;

/***/ })

/******/ });
});
//# sourceMappingURL=test.js.map