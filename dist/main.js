/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/water.jpg */ "./src/images/water.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/rotate.png */ "./src/images/rotate.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/miss.png */ "./src/images/miss.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hit.png */ "./src/images/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1.2em;\r\n}\r\n\r\nbody {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  display: grid;\r\n  grid-template-rows: 1fr 3fr;\r\n  height: 100vh;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.screen-block {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  font-size: 5rem;\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n}\r\n\r\n.screen-block-text {\r\n  color: white;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.screen-block-button {\r\n  grid-row: 2;\r\n  width: 50%;\r\n  height: 50%;\r\n  font-size: 5rem;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.screen-block-button:hover {\r\n  background-color: rgb(206, 206, 206);\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#title {\r\n  grid-column: 2;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 5%;\r\n}\r\n\r\n.type-input {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.type-input input {\r\n  height: 3vh;\r\n  width: calc(0.7vw + 2vh);\r\n}\r\n\r\nheader div h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nheader div button {\r\n  padding: 1%;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 3fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  border: 5px solid black;\r\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  height: 60vh;\r\n  background-color: white;\r\n  width: 60vh;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2vh;\r\n}\r\n\r\n.ship-wrapper {\r\n  cursor: pointer;\r\n}\r\n\r\n.ship-wrapper:hover .ship-cells-wrapper {\r\n  box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n.ship-cells-wrapper {\r\n  display: flex;\r\n  width: fit-content;\r\n}\r\n\r\n.selected .ship-cell {\r\n  background-color: darkred;\r\n}\r\n\r\n.cell.ship-hover {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.cell.bad-placement {\r\n  background-color: lightcoral;\r\n}\r\n\r\n.ship-cell {\r\n  grid-row: 2;\r\n  height: 2vw;\r\n  width: 2vw;\r\n  background-color: red;\r\n  border: 4px solid black;\r\n}\r\n\r\n.ship-name {\r\n  font-size: calc(1.1vw + 16px);\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  text-shadow: 0px 0px 15px black;\r\n}\r\n\r\n#right-ships {\r\n  justify-self: start;\r\n}\r\n\r\n#left-ships {\r\n  justify-self: end;\r\n}\r\n\r\n#rotate-button {\r\n  width: 75%;\r\n  height: 25%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  filter: drop-shadow(0px 0px 15px black);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#left-grid,\r\n#left-ships {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n  justify-self: end;\r\n}\r\n\r\n#right-grid,\r\n#right-ships {\r\n  grid-column: 3;\r\n  grid-row: 1;\r\n  justify-self: start;\r\n}\r\n\r\n.cell {\r\n  outline: 2px solid black;\r\n  margin-top: 1px;\r\n  margin-left: 1px;\r\n}\r\n\r\n.cell.lose {\r\n  background-color: rgb(199 199 199);\r\n}\r\n\r\n.cell.win {\r\n  background-color: rgb(255 240 176);\r\n}\r\n\r\n.cell.miss {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.hit {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.ship,\r\n.cell.lose.ship,\r\n.cell.win.ship {\r\n  background-color: red;\r\n}\r\n\r\n.cell.ship.hit {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.cell.hover {\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv.hidden,\r\ndiv.hidden *,\r\n.hidden,\r\n.hidden * {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,mDAAqC;EACrC,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,OAAO;AACT;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gDAAgD;EAChD,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,UAAU;EACV,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mDAAsC;EACtC,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;EACxB,uCAAuC;EACvC,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,cAAc;EACd,WAAW;EACX,iBAAiB;AACnB;;AAEA;;EAEE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yDAA0C;EAC1C,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,yDAAyC;EACzC,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;;;EAGE,qBAAqB;AACvB;;AAEA;EACE,yDAA0C;AAC5C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["body,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1.2em;\r\n}\r\n\r\nbody {\r\n  background: url(\"./images/water.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  display: grid;\r\n  grid-template-rows: 1fr 3fr;\r\n  height: 100vh;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.screen-block {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  font-size: 5rem;\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n}\r\n\r\n.screen-block-text {\r\n  color: white;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.screen-block-button {\r\n  grid-row: 2;\r\n  width: 50%;\r\n  height: 50%;\r\n  font-size: 5rem;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.screen-block-button:hover {\r\n  background-color: rgb(206, 206, 206);\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#title {\r\n  grid-column: 2;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 5%;\r\n}\r\n\r\n.type-input {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.type-input input {\r\n  height: 3vh;\r\n  width: calc(0.7vw + 2vh);\r\n}\r\n\r\nheader div h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nheader div button {\r\n  padding: 1%;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 3fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  border: 5px solid black;\r\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  height: 60vh;\r\n  background-color: white;\r\n  width: 60vh;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2vh;\r\n}\r\n\r\n.ship-wrapper {\r\n  cursor: pointer;\r\n}\r\n\r\n.ship-wrapper:hover .ship-cells-wrapper {\r\n  box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n.ship-cells-wrapper {\r\n  display: flex;\r\n  width: fit-content;\r\n}\r\n\r\n.selected .ship-cell {\r\n  background-color: darkred;\r\n}\r\n\r\n.cell.ship-hover {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.cell.bad-placement {\r\n  background-color: lightcoral;\r\n}\r\n\r\n.ship-cell {\r\n  grid-row: 2;\r\n  height: 2vw;\r\n  width: 2vw;\r\n  background-color: red;\r\n  border: 4px solid black;\r\n}\r\n\r\n.ship-name {\r\n  font-size: calc(1.1vw + 16px);\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  text-shadow: 0px 0px 15px black;\r\n}\r\n\r\n#right-ships {\r\n  justify-self: start;\r\n}\r\n\r\n#left-ships {\r\n  justify-self: end;\r\n}\r\n\r\n#rotate-button {\r\n  width: 75%;\r\n  height: 25%;\r\n  background: url(\"./images/rotate.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  filter: drop-shadow(0px 0px 15px black);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#left-grid,\r\n#left-ships {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n  justify-self: end;\r\n}\r\n\r\n#right-grid,\r\n#right-ships {\r\n  grid-column: 3;\r\n  grid-row: 1;\r\n  justify-self: start;\r\n}\r\n\r\n.cell {\r\n  outline: 2px solid black;\r\n  margin-top: 1px;\r\n  margin-left: 1px;\r\n}\r\n\r\n.cell.lose {\r\n  background-color: rgb(199 199 199);\r\n}\r\n\r\n.cell.win {\r\n  background-color: rgb(255 240 176);\r\n}\r\n\r\n.cell.miss {\r\n  background-image: url(\"./images/miss.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.hit {\r\n  background-image: url(\"./images/hit.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.ship,\r\n.cell.lose.ship,\r\n.cell.win.ship {\r\n  background-color: red;\r\n}\r\n\r\n.cell.ship.hit {\r\n  background-image: url(\"./images/miss.png\");\r\n}\r\n\r\n.cell.hover {\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv.hidden,\r\ndiv.hidden *,\r\n.hidden,\r\n.hidden * {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");





const Controller = {
  newGame(p1cpu, p2cpu) {
    _state__WEBPACK_IMPORTED_MODULE_0__.State.playing = true;
    let p1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player("Player 1", p1cpu);
    let p2 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player("Player 2", p2cpu);
    _state__WEBPACK_IMPORTED_MODULE_0__.State.players.push(p1, p2);
    p1.setBoard(new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard());
    p2.setBoard(new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard());
    p1.setEnemyBoard(p2.board);
    p2.setEnemyBoard(p1.board);

    _state__WEBPACK_IMPORTED_MODULE_0__.State.placingShips = true;
    this.refreshView();
    this.startShipPlacement(0);

    return { players: _state__WEBPACK_IMPORTED_MODULE_0__.State.players };
  },

  restart() {
    this.resetState();
    this.refreshView();
    _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.setButton("new");
  },

  resetState() {
    _state__WEBPACK_IMPORTED_MODULE_0__.State.playing = false;
    this.clearPlayers();
    _state__WEBPACK_IMPORTED_MODULE_0__.State.turn = 0;
    _state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver = false;
    _state__WEBPACK_IMPORTED_MODULE_0__.State.winningPlayer = null;
    _state__WEBPACK_IMPORTED_MODULE_0__.State.placingShips = false;
  },

  startShipPlacement(playerIndex) {
    if (playerIndex == 0) {
      if (!_state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].cpu) {
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleShipSelection({ side: "left", state: "off" });
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleShipSelection({ side: "right", state: "on" });
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateShips("right");
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.setButton("continue");
      } else {
        _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].placeShipsRandomly();
        this.startShipPlacement(1);
      }
    } else if (playerIndex == 1) {
      if (!_state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].cpu) {
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleShipSelection({ side: "right", state: "off" });
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleShipSelection({ side: "left", state: "on" });
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateShips("left");
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.setButton("continue");
      } else {
        _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].placeShipsRandomly();
        this.startGame();
      }
    }
  },

  startGame() {
    _state__WEBPACK_IMPORTED_MODULE_0__.State.placingShips = false;
    _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleShipSelection({ side: "left", state: "off" });
    _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleShipSelection({ side: "right", state: "off" });
    _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.setButton("restart");
    _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleRotateButton("off");
    this.refreshView();
    if (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].cpu) _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].CPUshoot();
  },

  endGame() {
    _state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver = true;
    _state__WEBPACK_IMPORTED_MODULE_0__.State.winningPlayer = _state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn];
    this.refreshView();
    console.log(`The game is over. ${_state__WEBPACK_IMPORTED_MODULE_0__.State.winningPlayer.name} wins!`);
  },

  /**  Tells the renderer what to display in the grids
   * based on who's playing and whether they're a CPU
   * then updates the "X player's turn" text. */
  refreshView() {
    // If a game hasn't been started, empty both grids
    if (!_state__WEBPACK_IMPORTED_MODULE_0__.State.playing) {
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({ grid: "left", hitMap: null, shipMap: null });
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({ grid: "right", hitMap: null, shipMap: null });
    } else if (
      _state__WEBPACK_IMPORTED_MODULE_0__.State.placingShips ||
      (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn].cpu && _state__WEBPACK_IMPORTED_MODULE_0__.State.players[Number(!_state__WEBPACK_IMPORTED_MODULE_0__.State.turn)].cpu)

      /** display a full view of both player's boards if both players are CPUs
     or if ships are being placed*/
    ) {
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "left",
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.hitMap,
        shipMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.shipMap,
      });
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "right",
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.hitMap,
        shipMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.shipMap,
      });
      // If it's p1's turn and p1 is a CPU, display p0's view
    } else if (_state__WEBPACK_IMPORTED_MODULE_0__.State.turn == 1 && _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].cpu) {
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "left",
        shipMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.shipMap,
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.hitMap,
      });

      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "right",
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.hitMap,
        shipMap: null,
      });

      // If it's p0's turn and p0 is a CPU, display p1's view
    } else if (_state__WEBPACK_IMPORTED_MODULE_0__.State.turn == 0 && _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].cpu) {
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "left",
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.hitMap,
        shipMap: null,
      });
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "right",
        shipMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.shipMap,
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.hitMap,
      });

      // otherwise display the current player's view
    } else if (_state__WEBPACK_IMPORTED_MODULE_0__.State.turn == 0) {
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "left",
        shipMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.shipMap,
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.hitMap,
      });

      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "right",
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.hitMap,
        shipMap: null,
      });
    } else if (_state__WEBPACK_IMPORTED_MODULE_0__.State.turn == 1) {
      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "left",
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].board.hitMap,
        shipMap: null,
      });

      _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.populateGrid({
        grid: "right",
        shipMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.shipMap,
        hitMap: _state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].board.hitMap,
      });
    }
    _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.updateText();
  },

  blockScreen() {
    setTimeout(_renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleScreenBlock("on"), 2000);
  },

  async endTurn() {
    this.refreshView();
    if (!_state__WEBPACK_IMPORTED_MODULE_0__.State.players[0].cpu && !_state__WEBPACK_IMPORTED_MODULE_0__.State.players[1].cpu) {
      let nextTurn = Number(!_state__WEBPACK_IMPORTED_MODULE_0__.State.turn);
      _state__WEBPACK_IMPORTED_MODULE_0__.State.turn = -1;
      setTimeout(() => {
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.toggleScreenBlock("on");
        _renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer.updateScreenBlockText(nextTurn);
        _state__WEBPACK_IMPORTED_MODULE_0__.State.turn = nextTurn;
        this.refreshView();
      }, 2000);
    } else {
      _state__WEBPACK_IMPORTED_MODULE_0__.State.turn = Number(!_state__WEBPACK_IMPORTED_MODULE_0__.State.turn);
      this.refreshView();
      if (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn].cpu) _state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn].CPUshoot();
    }
  },

  clearPlayers() {
    while (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[0]) _state__WEBPACK_IMPORTED_MODULE_0__.State.players.pop();
  },

  canClick(playerIndex, x, y) {
    if (playerIndex !== 0 && playerIndex !== 1)
      throw new Error("Invalid player index!");
    let otherPlayerIndex = Number(!playerIndex);
    return (
      _state__WEBPACK_IMPORTED_MODULE_0__.State.players[otherPlayerIndex].board.squareExists(x, y) &&
      _state__WEBPACK_IMPORTED_MODULE_0__.State.players[otherPlayerIndex].board.squareNotHit(x, y) &&
      _state__WEBPACK_IMPORTED_MODULE_0__.State.turn == playerIndex &&
      !_state__WEBPACK_IMPORTED_MODULE_0__.State.players[playerIndex].cpu
    );
  },
};


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");


class Gameboard {
  constructor() {
    this.shipMap = this.createBoard();
    this.hitMap = this.createBoard();
    this.ships = [];
  }

  createBoard() {
    let board = [];
    for (let i = 1; i <= 10; i++) {
      let row = [];
      for (let j = 1; j <= 10; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  squareExists(x, y) {
    if (
      x < this.shipMap.length &&
      x >= 0 &&
      y < this.shipMap[0].length &&
      y >= 0
    )
      return true;
    return false;
  }

  squareNotHit(x, y) {
    if (this.hitMap[x][y] !== null) {
      return false;
    }
    return true;
  }

  squareHasShip(x, y) {
    if (this.shipMap[x][y] !== null) {
      return true;
    }
    return false;
  }

  validPlacement({ x, y, length, direction }) {
    for (let i = 0; i < length; i++) {
      if (direction == "horizontal") {
        if (!this.squareExists(x + i, y) || this.squareHasShip(x + i, y))
          return false;
      } else if (direction == "vertical") {
        if (!this.squareExists(x, y - i) || this.squareHasShip(x, y - i))
          return false;
      }
    }
    return true;
  }

  placeShip({ ship, x, y, direction = "horizontal" }) {
    if (!this.validPlacement({ x, y, direction, length: ship.length })) {
      throw new Error("Invalid placement!");
    }
    for (let i = 0; i < ship.length; i++) {
      if (direction == "horizontal") {
        this.shipMap[x + i][y] = ship;
      } else if (direction == "vertical") {
        this.shipMap[x][y - i] = ship;
      }
    }
    this.ships.push(ship);
    _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.refreshView();
  }

  removeShip(ship) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.shipMap[i][j] == ship) {
          this.shipMap[i][j] = null;
        }
      }
    }
    this.ships.splice(this.ships.indexOf(ship), 1);
    _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.refreshView();
  }

  receiveHit(x, y) {
    if (!this.squareExists(x, y)) {
      return "invalid";
    }

    if (!this.squareNotHit(x, y)) {
      return "repeat";
    }

    if (this.shipMap[x][y]) {
      this.shipMap[x][y].hit();
      this.hitMap[x][y] = "hit";
      return "hit";
    } else {
      this.hitMap[x][y] = "miss";
      return "miss";
    }
  }

  allSunk() {
    return this.ships.every((ship) => {
      return ship.isSunk();
    });
  }
}


/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
const Page = {
  playerOneType: document.getElementById("p1-type"),
  leftGrid: document.getElementById("left-grid"),
  leftShips: document.getElementById("left-ships"),
  playerTwoType: document.getElementById("p2-type"),
  rightShips: document.getElementById("right-ships"),
  rightGrid: document.getElementById("right-grid"),
  gameText: document.getElementById("game-text"),
  gameButton: document.getElementById("game-button"),
  p1Type: document.getElementsByName("p1-type"),
  p2Type: document.getElementsByName("p2-type"),
  rotateButton: document.getElementById("rotate-button"),
  screenBlock: document.querySelector(".screen-block"),
  exitScreenBlockButton: document.querySelector(".screen-block-button"),
  screenBlockText: document.querySelector(".screen-block-text"),
};


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");




class Player {
  constructor(name, cpu = false) {
    this.board = null;
    this.enemyBoard = null;
    this.name = name;
    this.cpu = cpu;
    this.idealMoves = [];
    this.lastHits = [];
    this.currentDirection = null;
    this.ships = [
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5, "carrier"),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4, "battleship"),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, "cruiser"),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, "submarine"),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2, "destroyer"),
    ];
    this.selectedShip = null;
  }

  setBoard(newBoard) {
    this.board = newBoard;
    return this.board;
  }

  setEnemyBoard(board) {
    return (this.enemyBoard = board);
  }

  placeSelectedShip({ x, y, direction }) {
    if (this.selectedShip && this.ships.indexOf(this.selectedShip) > -1) {
      try {
        this.board.placeShip({ x, y, direction, ship: this.selectedShip });
        this.ships.splice(this.ships.indexOf(this.selectedShip), 1);
      } catch (err) {
        throw new Error(err);
      }
    } else if (
      this.selectedShip &&
      this.ships.indexOf(this.selectedShip) === -1
    ) {
      this.selectedShip = null;
      throw new Error("You don't have that ship!");
    } else throw new Error("No ship selected.");
  }

  placeShipsRandomly() {
    while (this.ships.length) {
      this.selectedShip = this.ships[0];
      let direction = "horizontal";
      if (Math.random() > 0.5) direction = "vertical";
      while (true) {
        try {
          this.placeSelectedShip({
            x: this.randomCoordinate(),
            y: this.randomCoordinate(),
            direction,
          });
          break;
        } catch (err) {}
      }
    }
  }

  shoot(x, y) {
    if (_state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver) throw new Error("The game is over.");
    if (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn] != this) {
      if (_state__WEBPACK_IMPORTED_MODULE_0__.State.players[Number(!_state__WEBPACK_IMPORTED_MODULE_0__.State.turn)] != this) {
        //if this happens, this player isn't in the game anymore due to a restart
        return;
      }
      throw new Error("It's not your turn yet!");
    }
    let result = this.enemyBoard.receiveHit(x, y);
    if (result == "invalid") {
      throw new Error("Those coordinates are invalid!", { cause: "invalid" });
    }
    if (result == "repeat") {
      throw new Error("Those coordinates have already been shot at!", {
        cause: "repeat",
      });
    }
    console.log(`${this.name} shot the square at ${x}, ${y}.`);
    if (result == "hit") {
      console.log("It was a hit!");
      if (this.enemyBoard.allSunk()) {
        _controller__WEBPACK_IMPORTED_MODULE_2__.Controller.endGame();
        return;
      }
    } else if (result == "miss") console.log("It was a miss...");
    _controller__WEBPACK_IMPORTED_MODULE_2__.Controller.endTurn();
    return { result: result, x: x, y: y };
  }

  randomCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  deleteBadMoves(movesObj) {
    for (let i = movesObj.length - 1; i >= 0; i--) {
      if (
        !this.board.squareExists(movesObj[i].x, movesObj[i].y) ||
        !this.enemyBoard.squareNotHit(movesObj[i].x, movesObj[i].y)
      ) {
        movesObj.splice(i, 1);
      }
    }
  }

  async CPUshoot() {
    let shot = false;
    let shotData = null;
    setTimeout(() => {
      while (!shot) {
        if (_state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver || !_state__WEBPACK_IMPORTED_MODULE_0__.State.playing || _state__WEBPACK_IMPORTED_MODULE_0__.State.placingShips) return;
        if (this.idealMoves.length) {
          shotData = this.shoot(this.idealMoves[0].x, this.idealMoves[0].y);
          if (shotData.result == "hit") {
            let direction = this.idealMoves[0].direction;
            if (direction == "horizontal") {
              for (let i = this.idealMoves.length - 1; i >= 0; i--) {
                if (this.idealMoves[i].direction == "vertical") {
                  this.idealMoves.splice(i, 1);
                }
              }
            } else if (direction == "vertical") {
              for (let i = this.idealMoves.length - 1; i >= 0; i--) {
                if (this.idealMoves[i].direction == "horizontal") {
                  this.idealMoves.splice(i, 1);
                }
              }
            }
          }
          this.idealMoves.splice(this.idealMoves[0], 1);
        } else {
          try {
            shotData = this.shoot(
              this.randomCoordinate(),
              this.randomCoordinate()
            );
          } catch (err) {
            continue;
          }
        }

        shot = true;
        if (!shotData.result) return;
        if (shotData.result == "hit") {
          if (this.lastHits.length) {
            if (this.lastHits.length > 4) {
              this.lastHits.splice(3);
            }
            for (let i = 0; i < this.lastHits.length; i++) {
              if (
                shotData.x == this.lastHits[i].x + 1 ||
                shotData.x == this.lastHits[i].x - 1
              ) {
                this.currentDirection = "horizontal";
              } else if (
                shotData.y == this.lastHits[i].y + 1 ||
                shotData.y == this.lastHits[i].y - 1
              ) {
                this.currentDirection = "vertical";
              }
            }
          }
          let nextMoves = null;
          if (this.currentDirection == "horizontal") {
            nextMoves = [
              {
                x: shotData.x - 1,
                y: shotData.y,
                direction: "horizontal",
              },
              {
                x: shotData.x + 1,
                y: shotData.y,
                direction: "horizontal",
              },
            ];
          } else if (this.currentDirection == "vertical") {
            nextMoves = [
              {
                x: shotData.x,
                y: shotData.y + 1,
                direction: "vertical",
              },
              {
                x: shotData.x,
                y: shotData.y - 1,
                direction: "vertical",
              },
            ];
          } else {
            nextMoves = [
              {
                x: shotData.x - 1,
                y: shotData.y,
                direction: "horizontal",
              },
              {
                x: shotData.x + 1,
                y: shotData.y,
                direction: "horizontal",
              },
              {
                x: shotData.x,
                y: shotData.y + 1,
                direction: "vertical",
              },
              {
                x: shotData.x,
                y: shotData.y - 1,
                direction: "vertical",
              },
            ];
          }

          this.deleteBadMoves(nextMoves);
          this.idealMoves.push(...nextMoves);
          this.lastHits.unshift({ x: shotData.x, y: shotData.y });
        } else if (shotData.result == "miss") {
          this.currentDirection = null;
        }
      }
    }, 2000);
  }
}


/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/page.js");




//so that the continue button knows what to tell the controller
let p1PlacedShips = false;

/**if you're already hovering over a square, you have to hover over a different one
to see the rotation. sorry :( */
let selectedDirection = "horizontal";
_page__WEBPACK_IMPORTED_MODULE_2__.Page.rotateButton.addEventListener("click", () => {
  selectedDirection =
    selectedDirection == "horizontal" ? "vertical" : "horizontal";
});
_page__WEBPACK_IMPORTED_MODULE_2__.Page.exitScreenBlockButton.addEventListener("click", () => {
  Renderer.toggleScreenBlock("off");
});

let buttonCallbacks = {
  newGameCB() {
    Renderer.toggleTypes("off");
    Renderer.toggleRotateButton("on");
    p1PlacedShips = false;
    let isP1CPU = false;
    let isP2CPU = false;
    for (let radio of _page__WEBPACK_IMPORTED_MODULE_2__.Page.p1Type) {
      if (radio.checked && radio.value == "CPU") isP1CPU = true;
    }
    for (let radio of _page__WEBPACK_IMPORTED_MODULE_2__.Page.p2Type) {
      if (radio.checked && radio.value == "CPU") isP2CPU = true;
    }
    _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.newGame(isP1CPU, isP2CPU);
    console.log("Game started!");
  },

  continueCB() {
    selectedDirection = "horizontal";
    if (!p1PlacedShips && !_state__WEBPACK_IMPORTED_MODULE_1__.State.players[0].cpu) {
      if (_state__WEBPACK_IMPORTED_MODULE_1__.State.players[0].ships.length) {
        throw new Error("You still have ships left to place!");
      }
      _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.startShipPlacement(1);
      p1PlacedShips = true;
    } else {
      if (_state__WEBPACK_IMPORTED_MODULE_1__.State.players[1].ships.length) {
        throw new Error("You still have ships left to place!");
      }
      p1PlacedShips = false;
      _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.startGame();
    }
  },

  restartCB() {
    Renderer.toggleTypes("on");
    _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.restart();
  },
};

const Renderer = {
  updateText() {
    if (!_state__WEBPACK_IMPORTED_MODULE_1__.State.playing) {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameText.textContent = "";
    } else if (_state__WEBPACK_IMPORTED_MODULE_1__.State.gameOver) {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameText.textContent = `${_state__WEBPACK_IMPORTED_MODULE_1__.State.winningPlayer.name} wins!!!!!!!`;
    } else if (_state__WEBPACK_IMPORTED_MODULE_1__.State.placingShips) {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameText.textContent = "Place your ships";
    } else {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameText.textContent = `${_state__WEBPACK_IMPORTED_MODULE_1__.State.players[_state__WEBPACK_IMPORTED_MODULE_1__.State.turn].name}'s turn`;
    }
  },

  updateScreenBlockText(playerIndex) {
    _page__WEBPACK_IMPORTED_MODULE_2__.Page.screenBlockText.textContent = `Player ${playerIndex + 1}'s turn`;
  },

  toggleScreenBlock(state) {
    if (state == "on") {
      this.updateScreenBlockText();
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.screenBlock.classList.remove("hidden");
    } else if (state == "off") _page__WEBPACK_IMPORTED_MODULE_2__.Page.screenBlock.classList.add("hidden");
  },

  toggleTypes: function togglePlayerTypesSelection(state) {
    if (state == "on") {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.playerOneType.classList.remove("hidden");
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.playerTwoType.classList.remove("hidden");
    } else if (state == "off") {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.playerOneType.classList.add("hidden");
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.playerTwoType.classList.add("hidden");
    }
  },

  toggleRotateButton(state) {
    if (state == "on") {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.rotateButton.classList.remove("hidden");
    } else if (state == "off") {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.rotateButton.classList.add("hidden");
    }
  },

  removeButtonListeners() {
    for (let listener in buttonCallbacks) {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.removeEventListener("click", buttonCallbacks[listener]);
    }
  },

  setButton(type) {
    this.removeButtonListeners();

    _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.addEventListener("click", this.updateText);
    if (type == "new") {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.textContent = "New game";
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.addEventListener("click", buttonCallbacks.newGameCB);
    } else if (type == "continue") {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.textContent = "Continue";
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.addEventListener("click", buttonCallbacks.continueCB);
    } else if (type == "restart") {
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.textContent = "Restart";
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameButton.addEventListener("click", buttonCallbacks.restartCB);
    }
  },

  clearShips() {
    for (let ship of document.querySelectorAll(".ship-wrapper")) {
      ship.remove();
    }
  },

  toggleShipSelection({ side, state }) {
    if (side == "left") {
      if (state == "on") {
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.leftShips.classList.remove("hidden");
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.leftGrid.classList.add("hidden");
      } else if (state == "off") {
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.leftShips.classList.add("hidden");
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.leftGrid.classList.remove("hidden");
      }
    } else if (side == "right") {
      if (state == "on") {
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.rightShips.classList.remove("hidden");
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.rightGrid.classList.add("hidden");
      } else if (state == "off") {
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.rightShips.classList.add("hidden");
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.rightGrid.classList.remove("hidden");
      }
    }
  },

  populateShips(side) {
    this.clearShips();
    let player = side == "right" ? 0 : 1;
    for (let ship of _state__WEBPACK_IMPORTED_MODULE_1__.State.players[player].ships) {
      const shipHTML = document.createElement("div");
      shipHTML.classList.add("ship-wrapper");
      const shipName = document.createElement("h2");
      shipName.classList.add("ship-name");
      shipName.textContent = ship.name;
      const shipCells = document.createElement("div");
      shipCells.classList.add("ship-cells-wrapper");
      shipHTML.appendChild(shipName);
      for (let i = 0; i < ship.length; i++) {
        const shipCell = document.createElement("div");
        shipCell.classList.add("ship-cell");
        shipCells.appendChild(shipCell);
      }
      shipHTML.appendChild(shipCells);
      shipHTML.addEventListener("click", () => {
        _state__WEBPACK_IMPORTED_MODULE_1__.State.players[player].selectedShip = ship;
        for (let selectedShip of document.querySelectorAll(".selected")) {
          selectedShip.classList.remove("selected");
        }
        shipHTML.classList.add("selected");
      });
      if (side == "left") _page__WEBPACK_IMPORTED_MODULE_2__.Page.leftShips.appendChild(shipHTML);
      else if (side == "right") _page__WEBPACK_IMPORTED_MODULE_2__.Page.rightShips.appendChild(shipHTML);
    }
  },

  clearGrid(grid) {
    if (grid == "left") {
      while (_page__WEBPACK_IMPORTED_MODULE_2__.Page.leftGrid.firstChild) {
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.leftGrid.removeChild(_page__WEBPACK_IMPORTED_MODULE_2__.Page.leftGrid.lastChild);
      }
    } else if (grid == "right") {
      while (_page__WEBPACK_IMPORTED_MODULE_2__.Page.rightGrid.firstChild) {
        _page__WEBPACK_IMPORTED_MODULE_2__.Page.rightGrid.removeChild(_page__WEBPACK_IMPORTED_MODULE_2__.Page.rightGrid.lastChild);
      }
    } else throw new Error("Invalid grid! Must be 'left' or 'right'.");
  },

  clearHovers() {
    for (let hoverCell of document.querySelectorAll(".hover")) {
      hoverCell.classList.remove("hover");
    }
    for (let shipHover of document.querySelectorAll(".ship-hover")) {
      shipHover.classList.remove("ship-hover");
    }
    for (let badPlacement of document.querySelectorAll(".bad-placement")) {
      badPlacement.classList.remove("bad-placement");
    }
  },

  removeClickedShip(shipMap, board, x, y) {
    _state__WEBPACK_IMPORTED_MODULE_1__.State.players[board].selectedShip = shipMap[x][y];
    _state__WEBPACK_IMPORTED_MODULE_1__.State.players[board].board.removeShip(_state__WEBPACK_IMPORTED_MODULE_1__.State.players[board].selectedShip);
    _state__WEBPACK_IMPORTED_MODULE_1__.State.players[board].ships.push(_state__WEBPACK_IMPORTED_MODULE_1__.State.players[board].selectedShip);
  },

  populateGrid({ grid = left, hitMap = null, shipMap = null }) {
    if (grid != "left" && grid != "right")
      throw new Error("Invalid grid! Must be 'left' or 'right'.");
    this.clearGrid(grid);
    if (hitMap == null && shipMap == null) return;
    for (let yCoord = 9; yCoord >= 0; yCoord--) {
      for (let xCoord = 0; xCoord < 10; xCoord++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        if (shipMap && shipMap[xCoord][yCoord] !== null) {
          cell.classList.add("ship");
        }

        if (hitMap && hitMap[xCoord][yCoord] == "miss") {
          cell.classList.add("miss");
        } else if (hitMap && hitMap[xCoord][yCoord] == "hit") {
          cell.classList.add("hit");
        }

        cell.dataset.x = xCoord;
        cell.dataset.y = yCoord;
        cell.dataset.grid = grid;

        cell.addEventListener("mouseout", () => {
          this.clearHovers();
        });
        let player = grid == "left" ? 1 : 2;
        let playerIndex = player - 1;
        let otherPlayerIndex = Number(!playerIndex);
        if (
          _state__WEBPACK_IMPORTED_MODULE_1__.State.gameOver &&
          _state__WEBPACK_IMPORTED_MODULE_1__.State.winningPlayer == _state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex]
        ) {
          cell.classList.add("win");
        } else if (_state__WEBPACK_IMPORTED_MODULE_1__.State.gameOver) {
          cell.classList.add("lose");
        }

        cell.addEventListener("click", () => {
          if (_state__WEBPACK_IMPORTED_MODULE_1__.State.placingShips) {
            if (!_state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].selectedShip) {
              if (cell.classList.contains("ship")) {
                this.removeClickedShip(shipMap, playerIndex, xCoord, yCoord);
              } else return;
            } else {
              if (cell.classList.contains("ship")) {
                this.removeClickedShip(shipMap, playerIndex, xCoord, yCoord);
              } else {
                _state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].placeSelectedShip({
                  x: xCoord,
                  y: yCoord,
                  direction: selectedDirection,
                });
                _state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].selectedShip = null;
              }

              for (let selectedShip of document.querySelectorAll("selected")) {
                selectedShip.classList.remove("selected");
              }
            }

            if (grid == "left") this.populateShips("right");
            else this.populateShips("left");
          } else if (_controller__WEBPACK_IMPORTED_MODULE_0__.Controller.canClick(otherPlayerIndex, xCoord, yCoord)) {
            _state__WEBPACK_IMPORTED_MODULE_1__.State.players[otherPlayerIndex].shoot(xCoord, yCoord);
          }
        });

        cell.addEventListener("mouseover", () => {
          if (_state__WEBPACK_IMPORTED_MODULE_1__.State.placingShips) {
            if (!_state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].selectedShip) return;
            let validPlacement = _state__WEBPACK_IMPORTED_MODULE_1__.State.players[
              playerIndex
            ].board.validPlacement({
              x: xCoord,
              y: yCoord,
              direction: selectedDirection,
              length: _state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].selectedShip.length,
            });
            for (
              let i = 0;
              i < _state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].selectedShip.length;
              i++
            ) {
              let selectedCell = null;
              if (selectedDirection == "horizontal") {
                selectedCell = document.querySelector(
                  `.cell[data-x="${
                    xCoord + i
                  }"][data-y="${yCoord}"][data-grid="${grid}"]`
                );
              } else if (selectedDirection == "vertical") {
                selectedCell = document.querySelector(
                  `.cell[data-x="${xCoord}"][data-y="${
                    yCoord - i
                  }"][data-grid="${grid}"]`
                );
              }
              if (selectedCell == undefined) return;
              if (validPlacement) {
                selectedCell.classList.add("ship-hover");
              } else {
                selectedCell.classList.add("bad-placement");
              }
            }
          } else if (_controller__WEBPACK_IMPORTED_MODULE_0__.Controller.canClick(otherPlayerIndex, xCoord, yCoord)) {
            cell.classList.add("hover");
          }
        });
        grid == "left"
          ? _page__WEBPACK_IMPORTED_MODULE_2__.Page.leftGrid.appendChild(cell)
          : _page__WEBPACK_IMPORTED_MODULE_2__.Page.rightGrid.appendChild(cell);
      }
    }
  },
};


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(len, name = "") {
    this.length = len;
    this.name = name;
    this.hits = 0;
  }

  hit() {
    this.hits = this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.length) return true;
    return false;
  }
}


/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
const State = {
  playing: false,
  players: [],
  turn: 0,
  gameOver: false,
  winningPlayer: null,
  placingShips: false,
};


/***/ }),

/***/ "./src/images/hit.png":
/*!****************************!*\
  !*** ./src/images/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1cd6ac8bf3e51dca577.png";

/***/ }),

/***/ "./src/images/miss.png":
/*!*****************************!*\
  !*** ./src/images/miss.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebb0ec5be042f988e168.png";

/***/ }),

/***/ "./src/images/rotate.png":
/*!*******************************!*\
  !*** ./src/images/rotate.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc63fbcef40b64844dd5.png";

/***/ }),

/***/ "./src/images/water.jpg":
/*!******************************!*\
  !*** ./src/images/water.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "922a30106478f3a394f8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");



_renderer__WEBPACK_IMPORTED_MODULE_1__.Renderer.setButton("new");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUN0QztBQUNBLHlEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy93YXRlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yb3RhdGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWlzcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLXRleHQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2stYnV0dG9uIHtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2stYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGUtaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50eXBlLWlucHV0IGlucHV0IHtcXHJcXG4gIGhlaWdodDogM3ZoO1xcclxcbiAgd2lkdGg6IGNhbGMoMC43dncgKyAydmgpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAzZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtd3JhcHBlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXdyYXBwZXI6aG92ZXIgLnNoaXAtY2VsbHMtd3JhcHBlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2VsbHMtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQgLnNoaXAtY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLWhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmJhZC1wbGFjZW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2VsbCB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGhlaWdodDogMnZ3O1xcclxcbiAgd2lkdGg6IDJ2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjF2dyArIDE2cHgpO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDE1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNyaWdodC1zaGlwcyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1zaGlwcyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdGF0ZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCBibGFjayk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWdyaWQsXFxyXFxuI2xlZnQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtZ3JpZCxcXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmxvc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSAxOTkgMTk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwud2luIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjQwIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcCxcXHJcXG4uY2VsbC5sb3NlLnNoaXAsXFxyXFxuLmNlbGwud2luLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmRpdi5oaWRkZW4sXFxyXFxuZGl2LmhpZGRlbiAqLFxcclxcbi5oaWRkZW4sXFxyXFxuLmhpZGRlbiAqIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtREFBcUM7RUFDckMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1EQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlEQUEwQztFQUMxQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlEQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseURBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOzs7O0VBSUUsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL3dhdGVyLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jay10ZXh0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbiB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogNSU7XFxyXFxufVxcclxcblxcclxcbi50eXBlLWlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1pbnB1dCBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIHdpZHRoOiBjYWxjKDAuN3Z3ICsgMnZoKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgM2ZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXdyYXBwZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC13cmFwcGVyOmhvdmVyIC5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIC5zaGlwLWNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcC1ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5iYWQtcGxhY2VtZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwge1xcclxcbiAgZ3JpZC1yb3c6IDI7XFxyXFxuICBoZWlnaHQ6IDJ2dztcXHJcXG4gIHdpZHRoOiAydnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMS4xdncgKyAxNnB4KTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtc2hpcHMge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbiNyb3RhdGUtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWFnZXMvcm90YXRlLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxNXB4IGJsYWNrKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtZ3JpZCxcXHJcXG4jbGVmdC1zaGlwcyB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGdyaWQtcm93OiAxO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbiNyaWdodC1ncmlkLFxcclxcbiNyaWdodC1zaGlwcyB7XFxyXFxuICBncmlkLWNvbHVtbjogMztcXHJcXG4gIGdyaWQtcm93OiAxO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luLXRvcDogMXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubG9zZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5IDE5OSAxOTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC53aW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNDAgMTc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubWlzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL21pc3MucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9oaXQucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLFxcclxcbi5jZWxsLmxvc2Uuc2hpcCxcXHJcXG4uY2VsbC53aW4uc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnNoaXAuaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvbWlzcy5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaGlkZGVuLFxcclxcbmRpdi5oaWRkZW4gKixcXHJcXG4uaGlkZGVuLFxcclxcbi5oaWRkZW4gKiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250cm9sbGVyID0ge1xyXG4gIG5ld0dhbWUocDFjcHUsIHAyY3B1KSB7XHJcbiAgICBTdGF0ZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgIGxldCBwMSA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXIgMVwiLCBwMWNwdSk7XHJcbiAgICBsZXQgcDIgPSBuZXcgUGxheWVyKFwiUGxheWVyIDJcIiwgcDJjcHUpO1xyXG4gICAgU3RhdGUucGxheWVycy5wdXNoKHAxLCBwMik7XHJcbiAgICBwMS5zZXRCb2FyZChuZXcgR2FtZWJvYXJkKCkpO1xyXG4gICAgcDIuc2V0Qm9hcmQobmV3IEdhbWVib2FyZCgpKTtcclxuICAgIHAxLnNldEVuZW15Qm9hcmQocDIuYm9hcmQpO1xyXG4gICAgcDIuc2V0RW5lbXlCb2FyZChwMS5ib2FyZCk7XHJcblxyXG4gICAgU3RhdGUucGxhY2luZ1NoaXBzID0gdHJ1ZTtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIHRoaXMuc3RhcnRTaGlwUGxhY2VtZW50KDApO1xyXG5cclxuICAgIHJldHVybiB7IHBsYXllcnM6IFN0YXRlLnBsYXllcnMgfTtcclxuICB9LFxyXG5cclxuICByZXN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJuZXdcIik7XHJcbiAgfSxcclxuXHJcbiAgcmVzZXRTdGF0ZSgpIHtcclxuICAgIFN0YXRlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xlYXJQbGF5ZXJzKCk7XHJcbiAgICBTdGF0ZS50dXJuID0gMDtcclxuICAgIFN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICBTdGF0ZS53aW5uaW5nUGxheWVyID0gbnVsbDtcclxuICAgIFN0YXRlLnBsYWNpbmdTaGlwcyA9IGZhbHNlO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0U2hpcFBsYWNlbWVudChwbGF5ZXJJbmRleCkge1xyXG4gICAgaWYgKHBsYXllckluZGV4ID09IDApIHtcclxuICAgICAgaWYgKCFTdGF0ZS5wbGF5ZXJzWzBdLmNwdSkge1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcImxlZnRcIiwgc3RhdGU6IFwib2ZmXCIgfSk7XHJcbiAgICAgICAgUmVuZGVyZXIudG9nZ2xlU2hpcFNlbGVjdGlvbih7IHNpZGU6IFwicmlnaHRcIiwgc3RhdGU6IFwib25cIiB9KTtcclxuICAgICAgICBSZW5kZXJlci5wb3B1bGF0ZVNoaXBzKFwicmlnaHRcIik7XHJcbiAgICAgICAgUmVuZGVyZXIuc2V0QnV0dG9uKFwiY29udGludWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU3RhdGUucGxheWVyc1swXS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0U2hpcFBsYWNlbWVudCgxKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXJJbmRleCA9PSAxKSB7XHJcbiAgICAgIGlmICghU3RhdGUucGxheWVyc1sxXS5jcHUpIHtcclxuICAgICAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJyaWdodFwiLCBzdGF0ZTogXCJvZmZcIiB9KTtcclxuICAgICAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJsZWZ0XCIsIHN0YXRlOiBcIm9uXCIgfSk7XHJcbiAgICAgICAgUmVuZGVyZXIucG9wdWxhdGVTaGlwcyhcImxlZnRcIik7XHJcbiAgICAgICAgUmVuZGVyZXIuc2V0QnV0dG9uKFwiY29udGludWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU3RhdGUucGxheWVyc1sxXS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgU3RhdGUucGxhY2luZ1NoaXBzID0gZmFsc2U7XHJcbiAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJsZWZ0XCIsIHN0YXRlOiBcIm9mZlwiIH0pO1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlU2hpcFNlbGVjdGlvbih7IHNpZGU6IFwicmlnaHRcIiwgc3RhdGU6IFwib2ZmXCIgfSk7XHJcbiAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJyZXN0YXJ0XCIpO1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlUm90YXRlQnV0dG9uKFwib2ZmXCIpO1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgaWYgKFN0YXRlLnBsYXllcnNbMF0uY3B1KSBTdGF0ZS5wbGF5ZXJzWzBdLkNQVXNob290KCk7XHJcbiAgfSxcclxuXHJcbiAgZW5kR2FtZSgpIHtcclxuICAgIFN0YXRlLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgIFN0YXRlLndpbm5pbmdQbGF5ZXIgPSBTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dO1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgY29uc29sZS5sb2coYFRoZSBnYW1lIGlzIG92ZXIuICR7U3RhdGUud2lubmluZ1BsYXllci5uYW1lfSB3aW5zIWApO1xyXG4gIH0sXHJcblxyXG4gIC8qKiAgVGVsbHMgdGhlIHJlbmRlcmVyIHdoYXQgdG8gZGlzcGxheSBpbiB0aGUgZ3JpZHNcclxuICAgKiBiYXNlZCBvbiB3aG8ncyBwbGF5aW5nIGFuZCB3aGV0aGVyIHRoZXkncmUgYSBDUFVcclxuICAgKiB0aGVuIHVwZGF0ZXMgdGhlIFwiWCBwbGF5ZXIncyB0dXJuXCIgdGV4dC4gKi9cclxuICByZWZyZXNoVmlldygpIHtcclxuICAgIC8vIElmIGEgZ2FtZSBoYXNuJ3QgYmVlbiBzdGFydGVkLCBlbXB0eSBib3RoIGdyaWRzXHJcbiAgICBpZiAoIVN0YXRlLnBsYXlpbmcpIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHsgZ3JpZDogXCJsZWZ0XCIsIGhpdE1hcDogbnVsbCwgc2hpcE1hcDogbnVsbCB9KTtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHsgZ3JpZDogXCJyaWdodFwiLCBoaXRNYXA6IG51bGwsIHNoaXBNYXA6IG51bGwgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBTdGF0ZS5wbGFjaW5nU2hpcHMgfHxcclxuICAgICAgKFN0YXRlLnBsYXllcnNbU3RhdGUudHVybl0uY3B1ICYmIFN0YXRlLnBsYXllcnNbTnVtYmVyKCFTdGF0ZS50dXJuKV0uY3B1KVxyXG5cclxuICAgICAgLyoqIGRpc3BsYXkgYSBmdWxsIHZpZXcgb2YgYm90aCBwbGF5ZXIncyBib2FyZHMgaWYgYm90aCBwbGF5ZXJzIGFyZSBDUFVzXHJcbiAgICAgb3IgaWYgc2hpcHMgYXJlIGJlaW5nIHBsYWNlZCovXHJcbiAgICApIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcImxlZnRcIixcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgfSk7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5zaGlwTWFwLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gSWYgaXQncyBwMSdzIHR1cm4gYW5kIHAxIGlzIGEgQ1BVLCBkaXNwbGF5IHAwJ3Mgdmlld1xyXG4gICAgfSBlbHNlIGlmIChTdGF0ZS50dXJuID09IDEgJiYgU3RhdGUucGxheWVyc1sxXS5jcHUpIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcImxlZnRcIixcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzBdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzBdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwicmlnaHRcIixcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICAgIHNoaXBNYXA6IG51bGwsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSWYgaXQncyBwMCdzIHR1cm4gYW5kIHAwIGlzIGEgQ1BVLCBkaXNwbGF5IHAxJ3Mgdmlld1xyXG4gICAgfSBlbHNlIGlmIChTdGF0ZS50dXJuID09IDAgJiYgU3RhdGUucGxheWVyc1swXS5jcHUpIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcImxlZnRcIixcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICAgIHNoaXBNYXA6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwicmlnaHRcIixcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBvdGhlcndpc2UgZGlzcGxheSB0aGUgY3VycmVudCBwbGF5ZXIncyB2aWV3XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMCkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMSkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwicmlnaHRcIixcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJlci51cGRhdGVUZXh0KCk7XHJcbiAgfSxcclxuXHJcbiAgYmxvY2tTY3JlZW4oKSB7XHJcbiAgICBzZXRUaW1lb3V0KFJlbmRlcmVyLnRvZ2dsZVNjcmVlbkJsb2NrKFwib25cIiksIDIwMDApO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGVuZFR1cm4oKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICBpZiAoIVN0YXRlLnBsYXllcnNbMF0uY3B1ICYmICFTdGF0ZS5wbGF5ZXJzWzFdLmNwdSkge1xyXG4gICAgICBsZXQgbmV4dFR1cm4gPSBOdW1iZXIoIVN0YXRlLnR1cm4pO1xyXG4gICAgICBTdGF0ZS50dXJuID0gLTE7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNjcmVlbkJsb2NrKFwib25cIik7XHJcbiAgICAgICAgUmVuZGVyZXIudXBkYXRlU2NyZWVuQmxvY2tUZXh0KG5leHRUdXJuKTtcclxuICAgICAgICBTdGF0ZS50dXJuID0gbmV4dFR1cm47XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFN0YXRlLnR1cm4gPSBOdW1iZXIoIVN0YXRlLnR1cm4pO1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICAgIGlmIChTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dLmNwdSkgU3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXS5DUFVzaG9vdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNsZWFyUGxheWVycygpIHtcclxuICAgIHdoaWxlIChTdGF0ZS5wbGF5ZXJzWzBdKSBTdGF0ZS5wbGF5ZXJzLnBvcCgpO1xyXG4gIH0sXHJcblxyXG4gIGNhbkNsaWNrKHBsYXllckluZGV4LCB4LCB5KSB7XHJcbiAgICBpZiAocGxheWVySW5kZXggIT09IDAgJiYgcGxheWVySW5kZXggIT09IDEpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGxheWVyIGluZGV4IVwiKTtcclxuICAgIGxldCBvdGhlclBsYXllckluZGV4ID0gTnVtYmVyKCFwbGF5ZXJJbmRleCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBTdGF0ZS5wbGF5ZXJzW290aGVyUGxheWVySW5kZXhdLmJvYXJkLnNxdWFyZUV4aXN0cyh4LCB5KSAmJlxyXG4gICAgICBTdGF0ZS5wbGF5ZXJzW290aGVyUGxheWVySW5kZXhdLmJvYXJkLnNxdWFyZU5vdEhpdCh4LCB5KSAmJlxyXG4gICAgICBTdGF0ZS50dXJuID09IHBsYXllckluZGV4ICYmXHJcbiAgICAgICFTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5jcHVcclxuICAgICk7XHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaGlwTWFwID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG4gICAgdGhpcy5oaXRNYXAgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XHJcbiAgICB0aGlzLnNoaXBzID0gW107XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZCgpIHtcclxuICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICBsZXQgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcclxuICAgICAgICByb3cucHVzaChudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBib2FyZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBzcXVhcmVFeGlzdHMoeCwgeSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB4IDwgdGhpcy5zaGlwTWFwLmxlbmd0aCAmJlxyXG4gICAgICB4ID49IDAgJiZcclxuICAgICAgeSA8IHRoaXMuc2hpcE1hcFswXS5sZW5ndGggJiZcclxuICAgICAgeSA+PSAwXHJcbiAgICApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3F1YXJlTm90SGl0KHgsIHkpIHtcclxuICAgIGlmICh0aGlzLmhpdE1hcFt4XVt5XSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNxdWFyZUhhc1NoaXAoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuc2hpcE1hcFt4XVt5XSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZhbGlkUGxhY2VtZW50KHsgeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24gfSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNxdWFyZUV4aXN0cyh4ICsgaSwgeSkgfHwgdGhpcy5zcXVhcmVIYXNTaGlwKHggKyBpLCB5KSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNxdWFyZUV4aXN0cyh4LCB5IC0gaSkgfHwgdGhpcy5zcXVhcmVIYXNTaGlwKHgsIHkgLSBpKSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwbGFjZVNoaXAoeyBzaGlwLCB4LCB5LCBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIiB9KSB7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRQbGFjZW1lbnQoeyB4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aDogc2hpcC5sZW5ndGggfSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQhXCIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICB0aGlzLnNoaXBNYXBbeCArIGldW3ldID0gc2hpcDtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgdGhpcy5zaGlwTWFwW3hdW3kgLSBpXSA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgIENvbnRyb2xsZXIucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNoaXAoc2hpcCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGlmICh0aGlzLnNoaXBNYXBbaV1bal0gPT0gc2hpcCkge1xyXG4gICAgICAgICAgdGhpcy5zaGlwTWFwW2ldW2pdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2hpcHMuc3BsaWNlKHRoaXMuc2hpcHMuaW5kZXhPZihzaGlwKSwgMSk7XHJcbiAgICBDb250cm9sbGVyLnJlZnJlc2hWaWV3KCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlSGl0KHgsIHkpIHtcclxuICAgIGlmICghdGhpcy5zcXVhcmVFeGlzdHMoeCwgeSkpIHtcclxuICAgICAgcmV0dXJuIFwiaW52YWxpZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zcXVhcmVOb3RIaXQoeCwgeSkpIHtcclxuICAgICAgcmV0dXJuIFwicmVwZWF0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hpcE1hcFt4XVt5XSkge1xyXG4gICAgICB0aGlzLnNoaXBNYXBbeF1beV0uaGl0KCk7XHJcbiAgICAgIHRoaXMuaGl0TWFwW3hdW3ldID0gXCJoaXRcIjtcclxuICAgICAgcmV0dXJuIFwiaGl0XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpdE1hcFt4XVt5XSA9IFwibWlzc1wiO1xyXG4gICAgICByZXR1cm4gXCJtaXNzXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGxTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHtcclxuICAgICAgcmV0dXJuIHNoaXAuaXNTdW5rKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFBhZ2UgPSB7XHJcbiAgcGxheWVyT25lVHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMS10eXBlXCIpLFxyXG4gIGxlZnRHcmlkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtZ3JpZFwiKSxcclxuICBsZWZ0U2hpcHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1zaGlwc1wiKSxcclxuICBwbGF5ZXJUd29UeXBlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAyLXR5cGVcIiksXHJcbiAgcmlnaHRTaGlwczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1zaGlwc1wiKSxcclxuICByaWdodEdyaWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZ3JpZFwiKSxcclxuICBnYW1lVGV4dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXRleHRcIiksXHJcbiAgZ2FtZUJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWJ1dHRvblwiKSxcclxuICBwMVR5cGU6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwicDEtdHlwZVwiKSxcclxuICBwMlR5cGU6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwicDItdHlwZVwiKSxcclxuICByb3RhdGVCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRlLWJ1dHRvblwiKSxcclxuICBzY3JlZW5CbG9jazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW4tYmxvY2tcIiksXHJcbiAgZXhpdFNjcmVlbkJsb2NrQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcmVlbi1ibG9jay1idXR0b25cIiksXHJcbiAgc2NyZWVuQmxvY2tUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcmVlbi1ibG9jay10ZXh0XCIpLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBjcHUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IG51bGw7XHJcbiAgICB0aGlzLmVuZW15Qm9hcmQgPSBudWxsO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY3B1ID0gY3B1O1xyXG4gICAgdGhpcy5pZGVhbE1vdmVzID0gW107XHJcbiAgICB0aGlzLmxhc3RIaXRzID0gW107XHJcbiAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtcclxuICAgICAgbmV3IFNoaXAoNSwgXCJjYXJyaWVyXCIpLFxyXG4gICAgICBuZXcgU2hpcCg0LCBcImJhdHRsZXNoaXBcIiksXHJcbiAgICAgIG5ldyBTaGlwKDMsIFwiY3J1aXNlclwiKSxcclxuICAgICAgbmV3IFNoaXAoMywgXCJzdWJtYXJpbmVcIiksXHJcbiAgICAgIG5ldyBTaGlwKDIsIFwiZGVzdHJveWVyXCIpLFxyXG4gICAgXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldEJvYXJkKG5ld0JvYXJkKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gbmV3Qm9hcmQ7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICB9XHJcblxyXG4gIHNldEVuZW15Qm9hcmQoYm9hcmQpIHtcclxuICAgIHJldHVybiAodGhpcy5lbmVteUJvYXJkID0gYm9hcmQpO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTZWxlY3RlZFNoaXAoeyB4LCB5LCBkaXJlY3Rpb24gfSkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTaGlwICYmIHRoaXMuc2hpcHMuaW5kZXhPZih0aGlzLnNlbGVjdGVkU2hpcCkgPiAtMSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKHsgeCwgeSwgZGlyZWN0aW9uLCBzaGlwOiB0aGlzLnNlbGVjdGVkU2hpcCB9KTtcclxuICAgICAgICB0aGlzLnNoaXBzLnNwbGljZSh0aGlzLnNoaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFNoaXApLCAxKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwICYmXHJcbiAgICAgIHRoaXMuc2hpcHMuaW5kZXhPZih0aGlzLnNlbGVjdGVkU2hpcCkgPT09IC0xXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFNoaXAgPSBudWxsO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSB0aGF0IHNoaXAhXCIpO1xyXG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIk5vIHNoaXAgc2VsZWN0ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xyXG4gICAgd2hpbGUgKHRoaXMuc2hpcHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gdGhpcy5zaGlwc1swXTtcclxuICAgICAgbGV0IGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkgZGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlU2VsZWN0ZWRTaGlwKHtcclxuICAgICAgICAgICAgeDogdGhpcy5yYW5kb21Db29yZGluYXRlKCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvb3QoeCwgeSkge1xyXG4gICAgaWYgKFN0YXRlLmdhbWVPdmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2FtZSBpcyBvdmVyLlwiKTtcclxuICAgIGlmIChTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dICE9IHRoaXMpIHtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbTnVtYmVyKCFTdGF0ZS50dXJuKV0gIT0gdGhpcykge1xyXG4gICAgICAgIC8vaWYgdGhpcyBoYXBwZW5zLCB0aGlzIHBsYXllciBpc24ndCBpbiB0aGUgZ2FtZSBhbnltb3JlIGR1ZSB0byBhIHJlc3RhcnRcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQncyBub3QgeW91ciB0dXJuIHlldCFcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVIaXQoeCwgeSk7XHJcbiAgICBpZiAocmVzdWx0ID09IFwiaW52YWxpZFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRob3NlIGNvb3JkaW5hdGVzIGFyZSBpbnZhbGlkIVwiLCB7IGNhdXNlOiBcImludmFsaWRcIiB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQgPT0gXCJyZXBlYXRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaG9zZSBjb29yZGluYXRlcyBoYXZlIGFscmVhZHkgYmVlbiBzaG90IGF0IVwiLCB7XHJcbiAgICAgICAgY2F1c2U6IFwicmVwZWF0XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBzaG90IHRoZSBzcXVhcmUgYXQgJHt4fSwgJHt5fS5gKTtcclxuICAgIGlmIChyZXN1bHQgPT0gXCJoaXRcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkl0IHdhcyBhIGhpdCFcIik7XHJcbiAgICAgIGlmICh0aGlzLmVuZW15Qm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICAgICAgQ29udHJvbGxlci5lbmRHYW1lKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcIm1pc3NcIikgY29uc29sZS5sb2coXCJJdCB3YXMgYSBtaXNzLi4uXCIpO1xyXG4gICAgQ29udHJvbGxlci5lbmRUdXJuKCk7XHJcbiAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCwgeDogeCwgeTogeSB9O1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tQ29vcmRpbmF0ZSgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVCYWRNb3Zlcyhtb3Zlc09iaikge1xyXG4gICAgZm9yIChsZXQgaSA9IG1vdmVzT2JqLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy5ib2FyZC5zcXVhcmVFeGlzdHMobW92ZXNPYmpbaV0ueCwgbW92ZXNPYmpbaV0ueSkgfHxcclxuICAgICAgICAhdGhpcy5lbmVteUJvYXJkLnNxdWFyZU5vdEhpdChtb3Zlc09ialtpXS54LCBtb3Zlc09ialtpXS55KVxyXG4gICAgICApIHtcclxuICAgICAgICBtb3Zlc09iai5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIENQVXNob290KCkge1xyXG4gICAgbGV0IHNob3QgPSBmYWxzZTtcclxuICAgIGxldCBzaG90RGF0YSA9IG51bGw7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd2hpbGUgKCFzaG90KSB7XHJcbiAgICAgICAgaWYgKFN0YXRlLmdhbWVPdmVyIHx8ICFTdGF0ZS5wbGF5aW5nIHx8IFN0YXRlLnBsYWNpbmdTaGlwcykgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlkZWFsTW92ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzaG90RGF0YSA9IHRoaXMuc2hvb3QodGhpcy5pZGVhbE1vdmVzWzBdLngsIHRoaXMuaWRlYWxNb3Zlc1swXS55KTtcclxuICAgICAgICAgIGlmIChzaG90RGF0YS5yZXN1bHQgPT0gXCJoaXRcIikge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5pZGVhbE1vdmVzWzBdLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmlkZWFsTW92ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkZWFsTW92ZXNbaV0uZGlyZWN0aW9uID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmlkZWFsTW92ZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaWRlYWxNb3Zlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWRlYWxNb3Zlc1tpXS5kaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pZGVhbE1vdmVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuaWRlYWxNb3Zlcy5zcGxpY2UodGhpcy5pZGVhbE1vdmVzWzBdLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2hvdERhdGEgPSB0aGlzLnNob290KFxyXG4gICAgICAgICAgICAgIHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpLFxyXG4gICAgICAgICAgICAgIHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaG90ID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIXNob3REYXRhLnJlc3VsdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzaG90RGF0YS5yZXN1bHQgPT0gXCJoaXRcIikge1xyXG4gICAgICAgICAgaWYgKHRoaXMubGFzdEhpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RIaXRzLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxhc3RIaXRzLnNwbGljZSgzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFzdEhpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzaG90RGF0YS54ID09IHRoaXMubGFzdEhpdHNbaV0ueCArIDEgfHxcclxuICAgICAgICAgICAgICAgIHNob3REYXRhLnggPT0gdGhpcy5sYXN0SGl0c1tpXS54IC0gMVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHNob3REYXRhLnkgPT0gdGhpcy5sYXN0SGl0c1tpXS55ICsgMSB8fFxyXG4gICAgICAgICAgICAgICAgc2hvdERhdGEueSA9PSB0aGlzLmxhc3RIaXRzW2ldLnkgLSAxXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgbmV4dE1vdmVzID0gbnVsbDtcclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgbmV4dE1vdmVzID0gW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IHNob3REYXRhLnggLSAxLFxyXG4gICAgICAgICAgICAgICAgeTogc2hvdERhdGEueSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiBzaG90RGF0YS54ICsgMSxcclxuICAgICAgICAgICAgICAgIHk6IHNob3REYXRhLnksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudERpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbmV4dE1vdmVzID0gW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IHNob3REYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiBzaG90RGF0YS55ICsgMSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogc2hvdERhdGEueCxcclxuICAgICAgICAgICAgICAgIHk6IHNob3REYXRhLnkgLSAxLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRNb3ZlcyA9IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiBzaG90RGF0YS54IC0gMSxcclxuICAgICAgICAgICAgICAgIHk6IHNob3REYXRhLnksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogc2hvdERhdGEueCArIDEsXHJcbiAgICAgICAgICAgICAgICB5OiBzaG90RGF0YS55LFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IHNob3REYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiBzaG90RGF0YS55ICsgMSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogc2hvdERhdGEueCxcclxuICAgICAgICAgICAgICAgIHk6IHNob3REYXRhLnkgLSAxLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUJhZE1vdmVzKG5leHRNb3Zlcyk7XHJcbiAgICAgICAgICB0aGlzLmlkZWFsTW92ZXMucHVzaCguLi5uZXh0TW92ZXMpO1xyXG4gICAgICAgICAgdGhpcy5sYXN0SGl0cy51bnNoaWZ0KHsgeDogc2hvdERhdGEueCwgeTogc2hvdERhdGEueSB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3REYXRhLnJlc3VsdCA9PSBcIm1pc3NcIikge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9wYWdlXCI7XHJcblxyXG4vL3NvIHRoYXQgdGhlIGNvbnRpbnVlIGJ1dHRvbiBrbm93cyB3aGF0IHRvIHRlbGwgdGhlIGNvbnRyb2xsZXJcclxubGV0IHAxUGxhY2VkU2hpcHMgPSBmYWxzZTtcclxuXHJcbi8qKmlmIHlvdSdyZSBhbHJlYWR5IGhvdmVyaW5nIG92ZXIgYSBzcXVhcmUsIHlvdSBoYXZlIHRvIGhvdmVyIG92ZXIgYSBkaWZmZXJlbnQgb25lXHJcbnRvIHNlZSB0aGUgcm90YXRpb24uIHNvcnJ5IDooICovXHJcbmxldCBzZWxlY3RlZERpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG5QYWdlLnJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlbGVjdGVkRGlyZWN0aW9uID1cclxuICAgIHNlbGVjdGVkRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XHJcbn0pO1xyXG5QYWdlLmV4aXRTY3JlZW5CbG9ja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIFJlbmRlcmVyLnRvZ2dsZVNjcmVlbkJsb2NrKFwib2ZmXCIpO1xyXG59KTtcclxuXHJcbmxldCBidXR0b25DYWxsYmFja3MgPSB7XHJcbiAgbmV3R2FtZUNCKCkge1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlVHlwZXMoXCJvZmZcIik7XHJcbiAgICBSZW5kZXJlci50b2dnbGVSb3RhdGVCdXR0b24oXCJvblwiKTtcclxuICAgIHAxUGxhY2VkU2hpcHMgPSBmYWxzZTtcclxuICAgIGxldCBpc1AxQ1BVID0gZmFsc2U7XHJcbiAgICBsZXQgaXNQMkNQVSA9IGZhbHNlO1xyXG4gICAgZm9yIChsZXQgcmFkaW8gb2YgUGFnZS5wMVR5cGUpIHtcclxuICAgICAgaWYgKHJhZGlvLmNoZWNrZWQgJiYgcmFkaW8udmFsdWUgPT0gXCJDUFVcIikgaXNQMUNQVSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCByYWRpbyBvZiBQYWdlLnAyVHlwZSkge1xyXG4gICAgICBpZiAocmFkaW8uY2hlY2tlZCAmJiByYWRpby52YWx1ZSA9PSBcIkNQVVwiKSBpc1AyQ1BVID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIENvbnRyb2xsZXIubmV3R2FtZShpc1AxQ1BVLCBpc1AyQ1BVKTtcclxuICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdGFydGVkIVwiKTtcclxuICB9LFxyXG5cclxuICBjb250aW51ZUNCKCkge1xyXG4gICAgc2VsZWN0ZWREaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcclxuICAgIGlmICghcDFQbGFjZWRTaGlwcyAmJiAhU3RhdGUucGxheWVyc1swXS5jcHUpIHtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbMF0uc2hpcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHN0aWxsIGhhdmUgc2hpcHMgbGVmdCB0byBwbGFjZSFcIik7XHJcbiAgICAgIH1cclxuICAgICAgQ29udHJvbGxlci5zdGFydFNoaXBQbGFjZW1lbnQoMSk7XHJcbiAgICAgIHAxUGxhY2VkU2hpcHMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbMV0uc2hpcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHN0aWxsIGhhdmUgc2hpcHMgbGVmdCB0byBwbGFjZSFcIik7XHJcbiAgICAgIH1cclxuICAgICAgcDFQbGFjZWRTaGlwcyA9IGZhbHNlO1xyXG4gICAgICBDb250cm9sbGVyLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlc3RhcnRDQigpIHtcclxuICAgIFJlbmRlcmVyLnRvZ2dsZVR5cGVzKFwib25cIik7XHJcbiAgICBDb250cm9sbGVyLnJlc3RhcnQoKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbmRlcmVyID0ge1xyXG4gIHVwZGF0ZVRleHQoKSB7XHJcbiAgICBpZiAoIVN0YXRlLnBsYXlpbmcpIHtcclxuICAgICAgUGFnZS5nYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLmdhbWVPdmVyKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZVRleHQudGV4dENvbnRlbnQgPSBgJHtTdGF0ZS53aW5uaW5nUGxheWVyLm5hbWV9IHdpbnMhISEhISEhYDtcclxuICAgIH0gZWxzZSBpZiAoU3RhdGUucGxhY2luZ1NoaXBzKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZVRleHQudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcHNcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFBhZ2UuZ2FtZVRleHQudGV4dENvbnRlbnQgPSBgJHtTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dLm5hbWV9J3MgdHVybmA7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2NyZWVuQmxvY2tUZXh0KHBsYXllckluZGV4KSB7XHJcbiAgICBQYWdlLnNjcmVlbkJsb2NrVGV4dC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtwbGF5ZXJJbmRleCArIDF9J3MgdHVybmA7XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlU2NyZWVuQmxvY2soc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgdGhpcy51cGRhdGVTY3JlZW5CbG9ja1RleHQoKTtcclxuICAgICAgUGFnZS5zY3JlZW5CbG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBcIm9mZlwiKSBQYWdlLnNjcmVlbkJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlVHlwZXM6IGZ1bmN0aW9uIHRvZ2dsZVBsYXllclR5cGVzU2VsZWN0aW9uKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgIFBhZ2UucGxheWVyT25lVHlwZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBQYWdlLnBsYXllclR3b1R5cGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gXCJvZmZcIikge1xyXG4gICAgICBQYWdlLnBsYXllck9uZVR5cGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgUGFnZS5wbGF5ZXJUd29UeXBlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlUm90YXRlQnV0dG9uKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgIFBhZ2Uucm90YXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09IFwib2ZmXCIpIHtcclxuICAgICAgUGFnZS5yb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgICBmb3IgKGxldCBsaXN0ZW5lciBpbiBidXR0b25DYWxsYmFja3MpIHtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DYWxsYmFja3NbbGlzdGVuZXJdKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRCdXR0b24odHlwZSkge1xyXG4gICAgdGhpcy5yZW1vdmVCdXR0b25MaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBQYWdlLmdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudXBkYXRlVGV4dCk7XHJcbiAgICBpZiAodHlwZSA9PSBcIm5ld1wiKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IGdhbWVcIjtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DYWxsYmFja3MubmV3R2FtZUNCKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImNvbnRpbnVlXCIpIHtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250aW51ZVwiO1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1dHRvbkNhbGxiYWNrcy5jb250aW51ZUNCKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInJlc3RhcnRcIikge1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlc3RhcnRcIjtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DYWxsYmFja3MucmVzdGFydENCKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjbGVhclNoaXBzKCkge1xyXG4gICAgZm9yIChsZXQgc2hpcCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtd3JhcHBlclwiKSkge1xyXG4gICAgICBzaGlwLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlLCBzdGF0ZSB9KSB7XHJcbiAgICBpZiAoc2lkZSA9PSBcImxlZnRcIikge1xyXG4gICAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgICAgUGFnZS5sZWZ0U2hpcHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBQYWdlLmxlZnRHcmlkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gXCJvZmZcIikge1xyXG4gICAgICAgIFBhZ2UubGVmdFNoaXBzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgUGFnZS5sZWZ0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNpZGUgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgICBQYWdlLnJpZ2h0U2hpcHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBQYWdlLnJpZ2h0R3JpZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09IFwib2ZmXCIpIHtcclxuICAgICAgICBQYWdlLnJpZ2h0U2hpcHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBQYWdlLnJpZ2h0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcG9wdWxhdGVTaGlwcyhzaWRlKSB7XHJcbiAgICB0aGlzLmNsZWFyU2hpcHMoKTtcclxuICAgIGxldCBwbGF5ZXIgPSBzaWRlID09IFwicmlnaHRcIiA/IDAgOiAxO1xyXG4gICAgZm9yIChsZXQgc2hpcCBvZiBTdGF0ZS5wbGF5ZXJzW3BsYXllcl0uc2hpcHMpIHtcclxuICAgICAgY29uc3Qgc2hpcEhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzaGlwSFRNTC5jbGFzc0xpc3QuYWRkKFwic2hpcC13cmFwcGVyXCIpO1xyXG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgc2hpcE5hbWUuY2xhc3NMaXN0LmFkZChcInNoaXAtbmFtZVwiKTtcclxuICAgICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XHJcbiAgICAgIGNvbnN0IHNoaXBDZWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNoaXBDZWxscy5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxscy13cmFwcGVyXCIpO1xyXG4gICAgICBzaGlwSFRNTC5hcHBlbmRDaGlsZChzaGlwTmFtZSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsXCIpO1xyXG4gICAgICAgIHNoaXBDZWxscy5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XHJcbiAgICAgIH1cclxuICAgICAgc2hpcEhUTUwuYXBwZW5kQ2hpbGQoc2hpcENlbGxzKTtcclxuICAgICAgc2hpcEhUTUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBTdGF0ZS5wbGF5ZXJzW3BsYXllcl0uc2VsZWN0ZWRTaGlwID0gc2hpcDtcclxuICAgICAgICBmb3IgKGxldCBzZWxlY3RlZFNoaXAgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcEhUTUwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHNpZGUgPT0gXCJsZWZ0XCIpIFBhZ2UubGVmdFNoaXBzLmFwcGVuZENoaWxkKHNoaXBIVE1MKTtcclxuICAgICAgZWxzZSBpZiAoc2lkZSA9PSBcInJpZ2h0XCIpIFBhZ2UucmlnaHRTaGlwcy5hcHBlbmRDaGlsZChzaGlwSFRNTCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2xlYXJHcmlkKGdyaWQpIHtcclxuICAgIGlmIChncmlkID09IFwibGVmdFwiKSB7XHJcbiAgICAgIHdoaWxlIChQYWdlLmxlZnRHcmlkLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBQYWdlLmxlZnRHcmlkLnJlbW92ZUNoaWxkKFBhZ2UubGVmdEdyaWQubGFzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChncmlkID09IFwicmlnaHRcIikge1xyXG4gICAgICB3aGlsZSAoUGFnZS5yaWdodEdyaWQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFBhZ2UucmlnaHRHcmlkLnJlbW92ZUNoaWxkKFBhZ2UucmlnaHRHcmlkLmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyaWQhIE11c3QgYmUgJ2xlZnQnIG9yICdyaWdodCcuXCIpO1xyXG4gIH0sXHJcblxyXG4gIGNsZWFySG92ZXJzKCkge1xyXG4gICAgZm9yIChsZXQgaG92ZXJDZWxsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG92ZXJcIikpIHtcclxuICAgICAgaG92ZXJDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IHNoaXBIb3ZlciBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtaG92ZXJcIikpIHtcclxuICAgICAgc2hpcEhvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLWhvdmVyXCIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYmFkUGxhY2VtZW50IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFkLXBsYWNlbWVudFwiKSkge1xyXG4gICAgICBiYWRQbGFjZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJhZC1wbGFjZW1lbnRcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlQ2xpY2tlZFNoaXAoc2hpcE1hcCwgYm9hcmQsIHgsIHkpIHtcclxuICAgIFN0YXRlLnBsYXllcnNbYm9hcmRdLnNlbGVjdGVkU2hpcCA9IHNoaXBNYXBbeF1beV07XHJcbiAgICBTdGF0ZS5wbGF5ZXJzW2JvYXJkXS5ib2FyZC5yZW1vdmVTaGlwKFN0YXRlLnBsYXllcnNbYm9hcmRdLnNlbGVjdGVkU2hpcCk7XHJcbiAgICBTdGF0ZS5wbGF5ZXJzW2JvYXJkXS5zaGlwcy5wdXNoKFN0YXRlLnBsYXllcnNbYm9hcmRdLnNlbGVjdGVkU2hpcCk7XHJcbiAgfSxcclxuXHJcbiAgcG9wdWxhdGVHcmlkKHsgZ3JpZCA9IGxlZnQsIGhpdE1hcCA9IG51bGwsIHNoaXBNYXAgPSBudWxsIH0pIHtcclxuICAgIGlmIChncmlkICE9IFwibGVmdFwiICYmIGdyaWQgIT0gXCJyaWdodFwiKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyaWQhIE11c3QgYmUgJ2xlZnQnIG9yICdyaWdodCcuXCIpO1xyXG4gICAgdGhpcy5jbGVhckdyaWQoZ3JpZCk7XHJcbiAgICBpZiAoaGl0TWFwID09IG51bGwgJiYgc2hpcE1hcCA9PSBudWxsKSByZXR1cm47XHJcbiAgICBmb3IgKGxldCB5Q29vcmQgPSA5OyB5Q29vcmQgPj0gMDsgeUNvb3JkLS0pIHtcclxuICAgICAgZm9yIChsZXQgeENvb3JkID0gMDsgeENvb3JkIDwgMTA7IHhDb29yZCsrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcblxyXG4gICAgICAgIGlmIChzaGlwTWFwICYmIHNoaXBNYXBbeENvb3JkXVt5Q29vcmRdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpdE1hcCAmJiBoaXRNYXBbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGl0TWFwICYmIGhpdE1hcFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIikge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnggPSB4Q29vcmQ7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSB5Q29vcmQ7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmdyaWQgPSBncmlkO1xyXG5cclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFySG92ZXJzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBsYXllciA9IGdyaWQgPT0gXCJsZWZ0XCIgPyAxIDogMjtcclxuICAgICAgICBsZXQgcGxheWVySW5kZXggPSBwbGF5ZXIgLSAxO1xyXG4gICAgICAgIGxldCBvdGhlclBsYXllckluZGV4ID0gTnVtYmVyKCFwbGF5ZXJJbmRleCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgU3RhdGUuZ2FtZU92ZXIgJiZcclxuICAgICAgICAgIFN0YXRlLndpbm5pbmdQbGF5ZXIgPT0gU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIndpblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFN0YXRlLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFN0YXRlLnBsYWNpbmdTaGlwcykge1xyXG4gICAgICAgICAgICBpZiAoIVN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLnNlbGVjdGVkU2hpcCkge1xyXG4gICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xpY2tlZFNoaXAoc2hpcE1hcCwgcGxheWVySW5kZXgsIHhDb29yZCwgeUNvb3JkKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xpY2tlZFNoaXAoc2hpcE1hcCwgcGxheWVySW5kZXgsIHhDb29yZCwgeUNvb3JkKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0ucGxhY2VTZWxlY3RlZFNoaXAoe1xyXG4gICAgICAgICAgICAgICAgICB4OiB4Q29vcmQsXHJcbiAgICAgICAgICAgICAgICAgIHk6IHlDb29yZCxcclxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzZWxlY3RlZERpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGZvciAobGV0IHNlbGVjdGVkU2hpcCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JpZCA9PSBcImxlZnRcIikgdGhpcy5wb3B1bGF0ZVNoaXBzKFwicmlnaHRcIik7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wb3B1bGF0ZVNoaXBzKFwibGVmdFwiKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoQ29udHJvbGxlci5jYW5DbGljayhvdGhlclBsYXllckluZGV4LCB4Q29vcmQsIHlDb29yZCkpIHtcclxuICAgICAgICAgICAgU3RhdGUucGxheWVyc1tvdGhlclBsYXllckluZGV4XS5zaG9vdCh4Q29vcmQsIHlDb29yZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoU3RhdGUucGxhY2luZ1NoaXBzKSB7XHJcbiAgICAgICAgICAgIGlmICghU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCB2YWxpZFBsYWNlbWVudCA9IFN0YXRlLnBsYXllcnNbXHJcbiAgICAgICAgICAgICAgcGxheWVySW5kZXhcclxuICAgICAgICAgICAgXS5ib2FyZC52YWxpZFBsYWNlbWVudCh7XHJcbiAgICAgICAgICAgICAgeDogeENvb3JkLFxyXG4gICAgICAgICAgICAgIHk6IHlDb29yZCxcclxuICAgICAgICAgICAgICBkaXJlY3Rpb246IHNlbGVjdGVkRGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgIGxlbmd0aDogU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwLmxlbmd0aCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgIGkgPCBTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5zZWxlY3RlZFNoaXAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRDZWxsID0gbnVsbDtcclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgIGAuY2VsbFtkYXRhLXg9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZCArIGlcclxuICAgICAgICAgICAgICAgICAgfVwiXVtkYXRhLXk9XCIke3lDb29yZH1cIl1bZGF0YS1ncmlkPVwiJHtncmlkfVwiXWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZERpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgIGAuY2VsbFtkYXRhLXg9XCIke3hDb29yZH1cIl1bZGF0YS15PVwiJHtcclxuICAgICAgICAgICAgICAgICAgICB5Q29vcmQgLSBpXHJcbiAgICAgICAgICAgICAgICAgIH1cIl1bZGF0YS1ncmlkPVwiJHtncmlkfVwiXWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZENlbGwgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgaWYgKHZhbGlkUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiYmFkLXBsYWNlbWVudFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoQ29udHJvbGxlci5jYW5DbGljayhvdGhlclBsYXllckluZGV4LCB4Q29vcmQsIHlDb29yZCkpIHtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JpZCA9PSBcImxlZnRcIlxyXG4gICAgICAgICAgPyBQYWdlLmxlZnRHcmlkLmFwcGVuZENoaWxkKGNlbGwpXHJcbiAgICAgICAgICA6IFBhZ2UucmlnaHRHcmlkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbiwgbmFtZSA9IFwiXCIpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaGl0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMgPSB0aGlzLmhpdHMgKz0gMTtcclxuICAgIHJldHVybiB0aGlzLmhpdHM7XHJcbiAgfVxyXG5cclxuICBpc1N1bmsoKSB7XHJcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFN0YXRlID0ge1xyXG4gIHBsYXlpbmc6IGZhbHNlLFxyXG4gIHBsYXllcnM6IFtdLFxyXG4gIHR1cm46IDAsXHJcbiAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gIHdpbm5pbmdQbGF5ZXI6IG51bGwsXHJcbiAgcGxhY2luZ1NoaXBzOiBmYWxzZSxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcclxuXHJcblJlbmRlcmVyLnNldEJ1dHRvbihcIm5ld1wiKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9