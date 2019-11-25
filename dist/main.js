/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#flex-wrapper {\r\n  display: flex; \r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#grid-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 50px);\r\n  grid-template-rows: repeat(3, 50px);\r\n  column-gap: 2px;\r\n  row-gap: 2px;\r\n  background-color: aqua;\r\n  margin: 20px;\r\n}\r\n\r\n#grid-wrapper > div {\r\n  background-color: white;\r\n  padding: 2px;\r\n}\r\n\r\n#winner-overlay {\r\n  position: fixed; /* Sit on top of the page content */\r\n  display: none; /* Hidden by default */\r\n  align-items: center;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  flex-direction: column;\r\n  font-size: 2em;\r\n  width: 100%; /* Full width (cover the whole page) */\r\n  height: 100%; /* Full height (cover the whole page) */\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0,0,0,0.5); /* Black background with opacity */\r\n  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\r\n}\r\n\r\n#play-again-button {\r\n  background: transparent;\r\n  border-color: blue;\r\n  border-radius: 10px;\r\n}\r\n\r\n#play-again-button:active {\r\n  border-color: red;\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/TicTacLogic.js":
/*!****************************!*\
  !*** ./src/TicTacLogic.js ***!
  \****************************/
/*! exports provided: GetWinner, GetPCTurn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWinner", function() { return GetWinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPCTurn", function() { return GetPCTurn; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

function GetWinner(board) {
  var winner = 0;

  for (var i in board) {
    winner = checkWinner(board[i].reduce(function (pr, br) {
      return pr + (br ? br : 0);
    }, 0));
    if (winner) return winner;

    if (i == 1) {
      winner = checkWinner(board[i].reduce(function (pr, br, j) {
        return Math.abs(pr) < 3 ? br === board[0][j] && br === board[2][j] ? br * 3 : 0 : pr;
      }, 0));
      if (winner) return winner;
    }
  }

  return checkWinner(board[0][0] === board[1][1] && board[0][0] === board[2][2] ? board[0][0] * 3 : board[0][2] === board[1][1] && board[0][2] === board[2][0] ? board[0][2] * 3 : 0);
}

function checkWinner(winner) {
  if (winner === 3) return _index__WEBPACK_IMPORTED_MODULE_0__["pc"];
  if (winner === -3) return _index__WEBPACK_IMPORTED_MODULE_0__["player"];
  return undefined;
}

function GetPCTurn(board) {
  for (var i in board) {
    for (var j in board[i]) {
      if (!board[i][j]) return [i, j];
    }
  }
}

/***/ }),

/***/ "./src/circle.svg":
/*!************************!*\
  !*** ./src/circle.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E %3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E %3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E %3Cg%3E%3Cpath d='M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,919.4C268.4,919.4,80.6,731.6,80.6,500S268.4,80.6,500,80.6c231.6,0,419.4,187.8,419.4,419.4S731.6,919.4,500,919.4z'/%3E%3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/cross.svg":
/*!***********************!*\
  !*** ./src/cross.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/svg%3E"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: player, pc, createGridItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return pc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGridItems", function() { return createGridItems; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay */ "./src/overlay.js");
/* harmony import */ var _TicTacLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TicTacLogic */ "./src/TicTacLogic.js");
/* harmony import */ var _circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle.svg */ "./src/circle.svg");
/* harmony import */ var _circle_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_circle_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cross_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.svg */ "./src/cross.svg");
/* harmony import */ var _cross_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cross_svg__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var board = [];
var player = -1;
var pc = 1;
var winner = 0;

function turn(i, j, who, target) {
  var img = document.createElement('img');
  img.src = who === player ? _circle_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _cross_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
  img.alt = who === player ? 'Circle' : 'Cross';
  img.style.width = '100%';
  img.style.color = who === player ? 'blue' : 'red';
  target.appendChild(img);
  board[i][j] = who;
}

function onclick(ci, rj, _ref) {
  var target = _ref.target;

  if (!board[ci][rj]) {
    turn(ci, rj, player, target);
    winner = Object(_TicTacLogic__WEBPACK_IMPORTED_MODULE_2__["GetWinner"])(board);
    if (winner) Object(_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayOnOff"])(true, winner);else {
      var _GetPCTurn = Object(_TicTacLogic__WEBPACK_IMPORTED_MODULE_2__["GetPCTurn"])(board),
          _GetPCTurn2 = _slicedToArray(_GetPCTurn, 2),
          i = _GetPCTurn2[0],
          j = _GetPCTurn2[1];

      turn(i, j, pc, document.getElementById("".concat(i).concat(j)));
      winner = Object(_TicTacLogic__WEBPACK_IMPORTED_MODULE_2__["GetWinner"])(board);
      if (winner) Object(_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayOnOff"])(true, winner);
    }
  }
}

function createGridItems() {
  var gridRoot = document.getElementById('grid-wrapper');

  while (gridRoot.firstChild) {
    gridRoot.removeChild(gridRoot.firstChild);
  }

  board = Array.apply(null, {
    length: 3
  }).map(function (_) {
    return Array.apply(null, {
      length: 3
    });
  });
  board.forEach(function (c, ci) {
    return c.forEach(function (r, rj) {
      var element = document.createElement('div');
      element.id = "".concat(ci).concat(rj);
      element.onclick = onclick.bind(null, ci, rj);
      gridRoot.appendChild(element);
    });
  });
}
createGridItems();

/***/ }),

/***/ "./src/overlay.js":
/*!************************!*\
  !*** ./src/overlay.js ***!
  \************************/
/*! exports provided: OverlayOnOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayOnOff", function() { return OverlayOnOff; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

function OverlayOnOff(on, winner) {
  var overlay = document.getElementById('winner-overlay');
  overlay.style.display = on ? 'flex' : 'none';
  var caption = document.getElementById('winner-caption');
  caption.innerHTML = winner === _index__WEBPACK_IMPORTED_MODULE_0__["pc"] ? 'You loose' : 'Congratulations! You\'re the winner';
  var playAgain = document.getElementById('play-again-button');

  playAgain.onclick = function () {
    overlay.style.display = 'none';
    Object(_index__WEBPACK_IMPORTED_MODULE_0__["createGridItems"])();
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGljVGFjTG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmNsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nyb3NzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzPzE4YTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5LmpzIl0sIm5hbWVzIjpbIkdldFdpbm5lciIsImJvYXJkIiwid2lubmVyIiwiaSIsImNoZWNrV2lubmVyIiwicmVkdWNlIiwicHIiLCJiciIsImoiLCJNYXRoIiwiYWJzIiwicGMiLCJwbGF5ZXIiLCJ1bmRlZmluZWQiLCJHZXRQQ1R1cm4iLCJ0dXJuIiwid2hvIiwidGFyZ2V0IiwiaW1nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiQ2lyY2xlIiwiQ3Jvc3MiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiY29sb3IiLCJhcHBlbmRDaGlsZCIsIm9uY2xpY2siLCJjaSIsInJqIiwiT3ZlcmxheU9uT2ZmIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVHcmlkSXRlbXMiLCJncmlkUm9vdCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIkFycmF5IiwiYXBwbHkiLCJsZW5ndGgiLCJtYXAiLCJfIiwiZm9yRWFjaCIsImMiLCJyIiwiZWxlbWVudCIsImlkIiwiYmluZCIsIm9uIiwib3ZlcmxheSIsImRpc3BsYXkiLCJjYXB0aW9uIiwiaW5uZXJIVE1MIiwicGxheUFn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R0FBRzNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBMEIsYUFBTyxDQUFDQyxFQUFSLGFBQWdCakIsRUFBaEIsU0FBcUJDLEVBQXJCO0FBQ0FlLGFBQU8sQ0FBQ2pCLE9BQVIsR0FBa0JBLE9BQU8sQ0FBQ21CLElBQVIsQ0FBYSxJQUFiLEVBQW1CbEIsRUFBbkIsRUFBdUJDLEVBQXZCLENBQWxCO0FBQ0FJLGNBQVEsQ0FBQ1AsV0FBVCxDQUFxQmtCLE9BQXJCO0FBQ0QsS0FMd0IsQ0FBWDtBQUFBLEdBQWQ7QUFNRDtBQU9EWixlQUFlLEc7Ozs7Ozs7Ozs7OztBQ3hEZjtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNGLFlBQVQsQ0FBc0JpQixFQUF0QixFQUEwQi9DLE1BQTFCLEVBQWtDO0FBQ3ZDLE1BQU1nRCxPQUFPLEdBQUcvQixRQUFRLENBQUNjLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWhCO0FBQ0FpQixTQUFPLENBQUN6QixLQUFSLENBQWMwQixPQUFkLEdBQXdCRixFQUFFLEdBQUcsTUFBSCxHQUFZLE1BQXRDO0FBQ0EsTUFBTUcsT0FBTyxHQUFHakMsUUFBUSxDQUFDYyxjQUFULENBQXdCLGdCQUF4QixDQUFoQjtBQUNBbUIsU0FBTyxDQUFDQyxTQUFSLEdBQW9CbkQsTUFBTSxLQUFLUyx5Q0FBWCxHQUFnQixXQUFoQixHQUE4QixxQ0FBbEQ7QUFDQSxNQUFNMkMsU0FBUyxHQUFHbkMsUUFBUSxDQUFDYyxjQUFULENBQXdCLG1CQUF4QixDQUFsQjs7QUFDQXFCLFdBQVMsQ0FBQ3pCLE9BQVYsR0FBb0IsWUFBTTtBQUN4QnFCLFdBQU8sQ0FBQ3pCLEtBQVIsQ0FBYzBCLE9BQWQsR0FBd0IsTUFBeEI7QUFDQWpCLGtFQUFlO0FBQ2hCLEdBSEQ7QUFJRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2ZsZXgtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNncmlkLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDUwcHgpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNTBweCk7XFxyXFxuICBjb2x1bW4tZ2FwOiAycHg7XFxyXFxuICByb3ctZ2FwOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZC13cmFwcGVyID4gZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVyLW92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXHJcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cXHJcXG4gIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cXHJcXG59XFxyXFxuXFxyXFxuI3BsYXktYWdhaW4tYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXktYWdhaW4tYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBib3JkZXItY29sb3I6IHJlZDtcXHJcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0IHsgcGxheWVyLCBwYyB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0V2lubmVyKGJvYXJkKSB7XHJcbiAgbGV0IHdpbm5lciA9IDBcclxuICBmb3IgKGxldCBpIGluIGJvYXJkKSB7XHJcbiAgICB3aW5uZXIgPSBjaGVja1dpbm5lcihib2FyZFtpXS5yZWR1Y2UoKHByLCBicikgPT4gcHIgKyAoYnIgPyBiciA6IDApLCAwKSlcclxuICAgIGlmICh3aW5uZXIpXHJcbiAgICAgIHJldHVybiB3aW5uZXJcclxuICAgIGlmIChpID09IDEpIHtcclxuICAgICAgd2lubmVyID0gY2hlY2tXaW5uZXIoYm9hcmRbaV0ucmVkdWNlKChwciwgYnIsIGopID0+XHJcbiAgICAgICAgTWF0aC5hYnMocHIpIDwgMyA/IChiciA9PT0gYm9hcmRbMF1bal0gJiYgYnIgPT09IGJvYXJkWzJdW2pdKSA/IGJyICogMyA6IDAgOiBwciwgMCkpXHJcbiAgICAgIGlmICh3aW5uZXIpXHJcbiAgICAgICAgcmV0dXJuIHdpbm5lclxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY2hlY2tXaW5uZXIoYm9hcmRbMF1bMF0gPT09IGJvYXJkWzFdWzFdICYmIGJvYXJkWzBdWzBdID09PSBib2FyZFsyXVsyXSA/IGJvYXJkWzBdWzBdICogMyA6XHJcbiAgICBib2FyZFswXVsyXSA9PT0gYm9hcmRbMV1bMV0gJiYgYm9hcmRbMF1bMl0gPT09IGJvYXJkWzJdWzBdID8gYm9hcmRbMF1bMl0gKiAzIDogMClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrV2lubmVyKHdpbm5lcikge1xyXG4gIGlmICh3aW5uZXIgPT09IDMpIHJldHVybiBwY1xyXG4gIGlmICh3aW5uZXIgPT09IC0zKSByZXR1cm4gcGxheWVyXHJcbiAgcmV0dXJuIHVuZGVmaW5lZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0UENUdXJuKGJvYXJkKSB7XHJcbiAgZm9yIChsZXQgaSBpbiBib2FyZClcclxuICAgIGZvciAobGV0IGogaW4gYm9hcmRbaV0pXHJcbiAgICAgIGlmICghYm9hcmRbaV1bal0pXHJcbiAgICAgICAgcmV0dXJuIFtpLCBqXVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0M/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J3V0Zi04Jz8lM0UgJTNDIS0tIFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIC0tJTNFICUzQyFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJyUzRSAlM0NzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDEwMDAgMTAwMCcgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMTAwMCAxMDAwJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSAlM0NtZXRhZGF0YSUzRSBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAlM0MvbWV0YWRhdGElM0UgJTNDZyUzRSUzQ3BhdGggZD0nTTUwMCwxMEMyMjkuNCwxMCwxMCwyMjkuNCwxMCw1MDBjMCwyNzAuNiwyMTkuNCw0OTAsNDkwLDQ5MGMyNzAuNiwwLDQ5MC0yMTkuNCw0OTAtNDkwQzk5MCwyMjkuNCw3NzAuNiwxMCw1MDAsMTB6IE01MDAsOTE5LjRDMjY4LjQsOTE5LjQsODAuNiw3MzEuNiw4MC42LDUwMFMyNjguNCw4MC42LDUwMCw4MC42YzIzMS42LDAsNDE5LjQsMTg3LjgsNDE5LjQsNDE5LjRTNzMxLjYsOTE5LjQsNTAwLDkxOS40eicvJTNFJTNDL2clM0UgJTNDL3N2ZyUzRVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCclM0UlM0NwYXRoIGQ9J00yNCAyMC4xODhsLTguMzE1LTguMjA5IDguMi04LjI4Mi0zLjY5Ny0zLjY5Ny04LjIxMiA4LjMxOC04LjMxLTguMjAzLTMuNjY2IDMuNjY2IDguMzIxIDguMjQtOC4yMDYgOC4zMTMgMy42NjYgMy42NjYgOC4yMzctOC4zMTggOC4yODUgOC4yMDN6Jy8lM0UlM0Mvc3ZnJTNFXCIiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7IE92ZXJsYXlPbk9mZiB9IGZyb20gJy4vb3ZlcmxheSdcclxuaW1wb3J0IHsgR2V0UENUdXJuLCBHZXRXaW5uZXIgfSBmcm9tICcuL1RpY1RhY0xvZ2ljJ1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlLnN2ZydcclxuaW1wb3J0IENyb3NzIGZyb20gJy4vY3Jvc3Muc3ZnJ1xyXG5cclxubGV0IGJvYXJkID0gW11cclxuZXhwb3J0IGNvbnN0IHBsYXllciA9IC0xXHJcbmV4cG9ydCBjb25zdCBwYyA9IDFcclxubGV0IHdpbm5lciA9IDA7XHJcblxyXG5mdW5jdGlvbiB0dXJuKGksIGosIHdobywgdGFyZ2V0KSB7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nLnNyYyA9IHdobyA9PT0gcGxheWVyID8gQ2lyY2xlIDogQ3Jvc3M7XHJcbiAgaW1nLmFsdCA9IHdobyA9PT0gcGxheWVyID8gJ0NpcmNsZScgOiAnQ3Jvc3MnO1xyXG4gIGltZy5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gIGltZy5zdHlsZS5jb2xvciA9IHdobyA9PT0gcGxheWVyID8gJ2JsdWUnIDogJ3JlZCc7XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgYm9hcmRbaV1bal0gPSB3aG87XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uY2xpY2soY2ksIHJqLCB7IHRhcmdldCB9KSB7XHJcbiAgaWYgKCFib2FyZFtjaV1bcmpdKSB7XHJcbiAgICB0dXJuKGNpLCByaiwgcGxheWVyLCB0YXJnZXQpXHJcbiAgICB3aW5uZXIgPSBHZXRXaW5uZXIoYm9hcmQpXHJcbiAgICBpZiAod2lubmVyKVxyXG4gICAgICBPdmVybGF5T25PZmYodHJ1ZSwgd2lubmVyKVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IFtpLCBqXSA9IEdldFBDVHVybihib2FyZClcclxuICAgICAgdHVybihpLCBqLCBwYywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke2p9YCkpXHJcbiAgICAgIHdpbm5lciA9IEdldFdpbm5lcihib2FyZClcclxuICAgICAgaWYgKHdpbm5lcilcclxuICAgICAgICBPdmVybGF5T25PZmYodHJ1ZSwgd2lubmVyKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdyaWRJdGVtcygpIHtcclxuICBjb25zdCBncmlkUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkLXdyYXBwZXInKVxyXG4gIHdoaWxlIChncmlkUm9vdC5maXJzdENoaWxkKVxyXG4gICAgZ3JpZFJvb3QucmVtb3ZlQ2hpbGQoZ3JpZFJvb3QuZmlyc3RDaGlsZClcclxuXHJcbiAgYm9hcmQgPSBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogMyB9KS5tYXAoXyA9PiBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogMyB9KSk7XHJcbiAgYm9hcmQuZm9yRWFjaCgoYywgY2kpID0+IGMuZm9yRWFjaCgociwgcmopID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaWQgPSBgJHtjaX0ke3JqfWA7XHJcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSBvbmNsaWNrLmJpbmQobnVsbCwgY2ksIHJqKVxyXG4gICAgZ3JpZFJvb3QuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICB9KSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jcmVhdGVHcmlkSXRlbXMoKSIsImltcG9ydCB7IHBsYXllciwgcGMsIGNyZWF0ZUdyaWRJdGVtcyB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT3ZlcmxheU9uT2ZmKG9uLCB3aW5uZXIpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1vdmVybGF5Jyk7XHJcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gb24gPyAnZmxleCcgOiAnbm9uZSdcclxuICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1jYXB0aW9uJylcclxuICBjYXB0aW9uLmlubmVySFRNTCA9IHdpbm5lciA9PT0gcGMgPyAnWW91IGxvb3NlJyA6ICdDb25ncmF0dWxhdGlvbnMhIFlvdVxcJ3JlIHRoZSB3aW5uZXInXHJcbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYWdhaW4tYnV0dG9uJylcclxuICBwbGF5QWdhaW4ub25jbGljayA9ICgpID0+IHsgXHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIGNyZWF0ZUdyaWRJdGVtcygpIFxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=