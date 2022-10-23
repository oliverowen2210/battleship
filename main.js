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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! water.jpg */ "./src/water.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! rotate.png */ "./src/rotate.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! miss.png */ "./src/miss.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! hit.png */ "./src/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! file:///C:/odin/js/odin-battleship/src/miss.png */ "./src/miss.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  display: grid;\r\n  grid-template-rows: 1fr 3fr;\r\n  height: 100vh;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.screen-block {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  font-size: 5rem;\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n}\r\n\r\n.screen-block-text {\r\n  color: white;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.screen-block-button {\r\n  grid-row: 2;\r\n  width: 50%;\r\n  height: 50%;\r\n  font-size: 5rem;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.screen-block-button:hover {\r\n  background-color: rgb(206, 206, 206);\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#title {\r\n  grid-column: 2;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 5%;\r\n}\r\n\r\n.type-input {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.type-input input {\r\n  height: 3vh;\r\n  width: calc(0.7vw + 2vh);\r\n}\r\n\r\nheader div h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nheader div button {\r\n  padding: 1%;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 3fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  border: 5px solid black;\r\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  height: 60vh;\r\n  background-color: white;\r\n  width: 60vh;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2vh;\r\n}\r\n\r\n.ship-wrapper {\r\n  cursor: pointer;\r\n}\r\n\r\n.ship-wrapper:hover .ship-cells-wrapper {\r\n  box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n.ship-cells-wrapper {\r\n  display: flex;\r\n  width: fit-content;\r\n}\r\n\r\n.selected .ship-cell {\r\n  background-color: darkred;\r\n}\r\n\r\n.cell.ship-hover {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.cell.bad-placement {\r\n  background-color: lightcoral;\r\n}\r\n\r\n.ship-cell {\r\n  grid-row: 2;\r\n  height: 2vw;\r\n  width: 2vw;\r\n  background-color: red;\r\n  border: 4px solid black;\r\n}\r\n\r\n.ship-name {\r\n  font-size: calc(1.1vw + 16px);\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  text-shadow: 0px 0px 15px black;\r\n}\r\n\r\n#right-ships {\r\n  justify-self: start;\r\n  margin-left: 15%;\r\n}\r\n\r\n#left-ships {\r\n  justify-self: end;\r\n  margin-right: 15%;\r\n}\r\n\r\n#rotate-button {\r\n  width: 75%;\r\n  height: 25%;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#left-grid,\r\n#left-ships {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n}\r\n\r\n#right-grid,\r\n#right-ships {\r\n  grid-column: 3;\r\n  grid-row: 1;\r\n}\r\n\r\n.cell {\r\n  outline: 2px solid black;\r\n  margin-top: 1px;\r\n  margin-left: 1px;\r\n}\r\n\r\n.cell.lose {\r\n  background-color: rgb(199 199 199);\r\n}\r\n\r\n.cell.win {\r\n  background-color: rgb(255 240 176);\r\n}\r\n\r\n.cell.miss {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.hit {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.ship,\r\n.cell.lose.ship,\r\n.cell.win.ship {\r\n  background-color: red;\r\n}\r\n\r\n.cell.ship.hit {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n.cell.hover {\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv.hidden,\r\ndiv.hidden *,\r\n.hidden,\r\n.hidden * {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mDAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,OAAO;AACT;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gDAAgD;EAChD,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,UAAU;EACV,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,yDAAmC;EACnC,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;EACxB,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yDAAiC;EACjC,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,yDAAgC;EAChC,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;;;EAGE,qBAAqB;AACvB;;AAEA;EACE,yDAAsE;AACxE;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["body,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: url(\"water.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  display: grid;\r\n  grid-template-rows: 1fr 3fr;\r\n  height: 100vh;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.screen-block {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  font-size: 5rem;\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n}\r\n\r\n.screen-block-text {\r\n  color: white;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.screen-block-button {\r\n  grid-row: 2;\r\n  width: 50%;\r\n  height: 50%;\r\n  font-size: 5rem;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.screen-block-button:hover {\r\n  background-color: rgb(206, 206, 206);\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#title {\r\n  grid-column: 2;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 5%;\r\n}\r\n\r\n.type-input {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.type-input input {\r\n  height: 3vh;\r\n  width: calc(0.7vw + 2vh);\r\n}\r\n\r\nheader div h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nheader div button {\r\n  padding: 1%;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 3fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  border: 5px solid black;\r\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  height: 60vh;\r\n  background-color: white;\r\n  width: 60vh;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2vh;\r\n}\r\n\r\n.ship-wrapper {\r\n  cursor: pointer;\r\n}\r\n\r\n.ship-wrapper:hover .ship-cells-wrapper {\r\n  box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n.ship-cells-wrapper {\r\n  display: flex;\r\n  width: fit-content;\r\n}\r\n\r\n.selected .ship-cell {\r\n  background-color: darkred;\r\n}\r\n\r\n.cell.ship-hover {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.cell.bad-placement {\r\n  background-color: lightcoral;\r\n}\r\n\r\n.ship-cell {\r\n  grid-row: 2;\r\n  height: 2vw;\r\n  width: 2vw;\r\n  background-color: red;\r\n  border: 4px solid black;\r\n}\r\n\r\n.ship-name {\r\n  font-size: calc(1.1vw + 16px);\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  text-shadow: 0px 0px 15px black;\r\n}\r\n\r\n#right-ships {\r\n  justify-self: start;\r\n  margin-left: 15%;\r\n}\r\n\r\n#left-ships {\r\n  justify-self: end;\r\n  margin-right: 15%;\r\n}\r\n\r\n#rotate-button {\r\n  width: 75%;\r\n  height: 25%;\r\n  background-image: url(\"rotate.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#left-grid,\r\n#left-ships {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n}\r\n\r\n#right-grid,\r\n#right-ships {\r\n  grid-column: 3;\r\n  grid-row: 1;\r\n}\r\n\r\n.cell {\r\n  outline: 2px solid black;\r\n  margin-top: 1px;\r\n  margin-left: 1px;\r\n}\r\n\r\n.cell.lose {\r\n  background-color: rgb(199 199 199);\r\n}\r\n\r\n.cell.win {\r\n  background-color: rgb(255 240 176);\r\n}\r\n\r\n.cell.miss {\r\n  background-image: url(\"miss.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.hit {\r\n  background-image: url(\"hit.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.ship,\r\n.cell.lose.ship,\r\n.cell.win.ship {\r\n  background-color: red;\r\n}\r\n\r\n.cell.ship.hit {\r\n  background-image: url(file:///C:/odin/js/odin-battleship/src/miss.png);\r\n}\r\n\r\n.cell.hover {\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv.hidden,\r\ndiv.hidden *,\r\n.hidden,\r\n.hidden * {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
    this.refreshView();
    _state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver = true;
    _state__WEBPACK_IMPORTED_MODULE_0__.State.winningPlayer = _state__WEBPACK_IMPORTED_MODULE_0__.State.players[_state__WEBPACK_IMPORTED_MODULE_0__.State.turn];
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
    this.ships = [
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3),
      new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2),
    ];
    this.shipAliases = {
      carrier: this.ships[0],
      battleship: this.ships[1],
      cruiser: this.ships[2],
      submarine: this.ships[3],
      destroyer: this.ships[4],
    };
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

  async CPUshoot() {
    let shot = false;
    let shotData = null;
    setTimeout(() => {
      while (!shot) {
        if (_state__WEBPACK_IMPORTED_MODULE_0__.State.gameOver || !_state__WEBPACK_IMPORTED_MODULE_0__.State.playing || _state__WEBPACK_IMPORTED_MODULE_0__.State.placingShips) return;
        try {
          if (this.idealMoves.length) {
            try {
              shotData = this.shoot(
                this.idealMoves[0][0],
                this.idealMoves[0][1]
              );
              this.idealMoves.shift();
            } catch (err) {
              if (err.cause == "invalid" || err.cause == "repeat") {
                this.idealMoves.shift();
              }
              continue;
            }
          } else {
            shotData = this.shoot(
              this.randomCoordinate(),
              this.randomCoordinate()
            );
          }

          shot = true;
          if (shotData.result == "hit") {
            this.idealMoves.push(
              [shotData.x + 1, shotData.y],
              [shotData.x - 1, shotData.y],
              [shotData.x, shotData.y + 1],
              [shotData.x, shotData.y - 1]
            );
            for (let move of this.idealMoves) {
              if (
                !this.board.squareExists(move[0], move[1]) ||
                !this.enemyBoard.squareNotHit(move[0], move[1])
              ) {
                this.idealMoves.splice(this.idealMoves.indexOf(move), 1);
              }
            }
          }
        } catch (err) {}
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
      _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.startGame();
      p1PlacedShips = false;
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
      _page__WEBPACK_IMPORTED_MODULE_2__.Page.gameText.textContent = "Press R to rotate";
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
      shipName.textContent = Object.keys(_state__WEBPACK_IMPORTED_MODULE_1__.State.players[player].shipAliases)[
        Object.values(_state__WEBPACK_IMPORTED_MODULE_1__.State.players[player].shipAliases).indexOf(ship)
      ];
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
            if (!_state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].selectedShip) return;
            _state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].placeSelectedShip({
              x: xCoord,
              y: yCoord,
              direction: selectedDirection,
            });
            if (grid == "left") this.populateShips("right");
            else this.populateShips("left");
            for (let selectedShip of document.querySelectorAll("selected")) {
              selectedShip.classList.remove("selected");
            }
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
  constructor(len) {
    this.length = len;
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

/***/ "./src/hit.png":
/*!*********************!*\
  !*** ./src/hit.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1cd6ac8bf3e51dca577.png";

/***/ }),

/***/ "./src/miss.png":
/*!**********************!*\
  !*** ./src/miss.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebb0ec5be042f988e168.png";

/***/ }),

/***/ "./src/rotate.png":
/*!************************!*\
  !*** ./src/rotate.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7144ccd1d0f8a23175e8.png";

/***/ }),

/***/ "./src/water.jpg":
/*!***********************!*\
  !*** ./src/water.jpg ***!
  \***********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Q7QUFDQSxZQUFZLDREQUF5QjtBQUNyQyxZQUFZLDZEQUEwQjtBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNuVE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lCO0FBQ3RDO0FBQ0EseURBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIndhdGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcInJvdGF0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJtaXNzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImhpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJmaWxlOi8vL0M6L29kaW4vanMvb2Rpbi1iYXR0bGVzaGlwL3NyYy9taXNzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcclxcbmh0bWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jay10ZXh0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbiB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogNSU7XFxyXFxufVxcclxcblxcclxcbi50eXBlLWlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1pbnB1dCBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIHdpZHRoOiBjYWxjKDAuN3Z3ICsgMnZoKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgM2ZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXdyYXBwZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC13cmFwcGVyOmhvdmVyIC5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIC5zaGlwLWNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcC1ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5iYWQtcGxhY2VtZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwge1xcclxcbiAgZ3JpZC1yb3c6IDI7XFxyXFxuICBoZWlnaHQ6IDJ2dztcXHJcXG4gIHdpZHRoOiAydnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMS4xdncgKyAxNnB4KTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LXNoaXBzIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbiNyb3RhdGUtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtZ3JpZCxcXHJcXG4jbGVmdC1zaGlwcyB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGdyaWQtcm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtZ3JpZCxcXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luLXRvcDogMXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubG9zZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5IDE5OSAxOTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC53aW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNDAgMTc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubWlzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLFxcclxcbi5jZWxsLmxvc2Uuc2hpcCxcXHJcXG4uY2VsbC53aW4uc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnNoaXAuaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmhpZGRlbixcXHJcXG5kaXYuaGlkZGVuICosXFxyXFxuLmhpZGRlbixcXHJcXG4uaGlkZGVuICoge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbURBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlEQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5REFBaUM7RUFDakMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5REFBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlEQUFzRTtBQUN4RTs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcclxcbmh0bWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIndhdGVyLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jay10ZXh0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbiB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogNSU7XFxyXFxufVxcclxcblxcclxcbi50eXBlLWlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1pbnB1dCBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIHdpZHRoOiBjYWxjKDAuN3Z3ICsgMnZoKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgM2ZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXdyYXBwZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC13cmFwcGVyOmhvdmVyIC5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIC5zaGlwLWNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcC1ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5iYWQtcGxhY2VtZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwge1xcclxcbiAgZ3JpZC1yb3c6IDI7XFxyXFxuICBoZWlnaHQ6IDJ2dztcXHJcXG4gIHdpZHRoOiAydnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMS4xdncgKyAxNnB4KTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LXNoaXBzIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbiNyb3RhdGUtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwicm90YXRlLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWdyaWQsXFxyXFxuI2xlZnQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0LWdyaWQsXFxyXFxuI3JpZ2h0LXNoaXBzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmxvc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSAxOTkgMTk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwud2luIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjQwIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJtaXNzLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaGl0LnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcCxcXHJcXG4uY2VsbC5sb3NlLnNoaXAsXFxyXFxuLmNlbGwud2luLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZmlsZTovLy9DOi9vZGluL2pzL29kaW4tYmF0dGxlc2hpcC9zcmMvbWlzcy5wbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmRpdi5oaWRkZW4sXFxyXFxuZGl2LmhpZGRlbiAqLFxcclxcbi5oaWRkZW4sXFxyXFxuLmhpZGRlbiAqIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xsZXIgPSB7XHJcbiAgbmV3R2FtZShwMWNwdSwgcDJjcHUpIHtcclxuICAgIFN0YXRlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHAxID0gbmV3IFBsYXllcihcIlBsYXllciAxXCIsIHAxY3B1KTtcclxuICAgIGxldCBwMiA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXIgMlwiLCBwMmNwdSk7XHJcbiAgICBTdGF0ZS5wbGF5ZXJzLnB1c2gocDEsIHAyKTtcclxuICAgIHAxLnNldEJvYXJkKG5ldyBHYW1lYm9hcmQoKSk7XHJcbiAgICBwMi5zZXRCb2FyZChuZXcgR2FtZWJvYXJkKCkpO1xyXG4gICAgcDEuc2V0RW5lbXlCb2FyZChwMi5ib2FyZCk7XHJcbiAgICBwMi5zZXRFbmVteUJvYXJkKHAxLmJvYXJkKTtcclxuXHJcbiAgICBTdGF0ZS5wbGFjaW5nU2hpcHMgPSB0cnVlO1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgdGhpcy5zdGFydFNoaXBQbGFjZW1lbnQoMCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcGxheWVyczogU3RhdGUucGxheWVycyB9O1xyXG4gIH0sXHJcblxyXG4gIHJlc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlc2V0U3RhdGUoKTtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIFJlbmRlcmVyLnNldEJ1dHRvbihcIm5ld1wiKTtcclxuICB9LFxyXG5cclxuICByZXNldFN0YXRlKCkge1xyXG4gICAgU3RhdGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbGVhclBsYXllcnMoKTtcclxuICAgIFN0YXRlLnR1cm4gPSAwO1xyXG4gICAgU3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIFN0YXRlLndpbm5pbmdQbGF5ZXIgPSBudWxsO1xyXG4gICAgU3RhdGUucGxhY2luZ1NoaXBzID0gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnRTaGlwUGxhY2VtZW50KHBsYXllckluZGV4KSB7XHJcbiAgICBpZiAocGxheWVySW5kZXggPT0gMCkge1xyXG4gICAgICBpZiAoIVN0YXRlLnBsYXllcnNbMF0uY3B1KSB7XHJcbiAgICAgICAgUmVuZGVyZXIudG9nZ2xlU2hpcFNlbGVjdGlvbih7IHNpZGU6IFwibGVmdFwiLCBzdGF0ZTogXCJvZmZcIiB9KTtcclxuICAgICAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJyaWdodFwiLCBzdGF0ZTogXCJvblwiIH0pO1xyXG4gICAgICAgIFJlbmRlcmVyLnBvcHVsYXRlU2hpcHMoXCJyaWdodFwiKTtcclxuICAgICAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJjb250aW51ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTdGF0ZS5wbGF5ZXJzWzBdLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTaGlwUGxhY2VtZW50KDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllckluZGV4ID09IDEpIHtcclxuICAgICAgaWYgKCFTdGF0ZS5wbGF5ZXJzWzFdLmNwdSkge1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcInJpZ2h0XCIsIHN0YXRlOiBcIm9mZlwiIH0pO1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcImxlZnRcIiwgc3RhdGU6IFwib25cIiB9KTtcclxuICAgICAgICBSZW5kZXJlci5wb3B1bGF0ZVNoaXBzKFwibGVmdFwiKTtcclxuICAgICAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJjb250aW51ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTdGF0ZS5wbGF5ZXJzWzFdLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICBTdGF0ZS5wbGFjaW5nU2hpcHMgPSBmYWxzZTtcclxuICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcImxlZnRcIiwgc3RhdGU6IFwib2ZmXCIgfSk7XHJcbiAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJyaWdodFwiLCBzdGF0ZTogXCJvZmZcIiB9KTtcclxuICAgIFJlbmRlcmVyLnNldEJ1dHRvbihcInJlc3RhcnRcIik7XHJcbiAgICBSZW5kZXJlci50b2dnbGVSb3RhdGVCdXR0b24oXCJvZmZcIik7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICBpZiAoU3RhdGUucGxheWVyc1swXS5jcHUpIFN0YXRlLnBsYXllcnNbMF0uQ1BVc2hvb3QoKTtcclxuICB9LFxyXG5cclxuICBlbmRHYW1lKCkge1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgU3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgU3RhdGUud2lubmluZ1BsYXllciA9IFN0YXRlLnBsYXllcnNbU3RhdGUudHVybl07XHJcbiAgICBjb25zb2xlLmxvZyhgVGhlIGdhbWUgaXMgb3Zlci4gJHtTdGF0ZS53aW5uaW5nUGxheWVyLm5hbWV9IHdpbnMhYCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqICBUZWxscyB0aGUgcmVuZGVyZXIgd2hhdCB0byBkaXNwbGF5IGluIHRoZSBncmlkc1xyXG4gICAqIGJhc2VkIG9uIHdobydzIHBsYXlpbmcgYW5kIHdoZXRoZXIgdGhleSdyZSBhIENQVVxyXG4gICAqIHRoZW4gdXBkYXRlcyB0aGUgXCJYIHBsYXllcidzIHR1cm5cIiB0ZXh0LiAqL1xyXG4gIHJlZnJlc2hWaWV3KCkge1xyXG4gICAgLy8gSWYgYSBnYW1lIGhhc24ndCBiZWVuIHN0YXJ0ZWQsIGVtcHR5IGJvdGggZ3JpZHNcclxuICAgIGlmICghU3RhdGUucGxheWluZykge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoeyBncmlkOiBcImxlZnRcIiwgaGl0TWFwOiBudWxsLCBzaGlwTWFwOiBudWxsIH0pO1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoeyBncmlkOiBcInJpZ2h0XCIsIGhpdE1hcDogbnVsbCwgc2hpcE1hcDogbnVsbCB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIFN0YXRlLnBsYWNpbmdTaGlwcyB8fFxyXG4gICAgICAoU3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXS5jcHUgJiYgU3RhdGUucGxheWVyc1tOdW1iZXIoIVN0YXRlLnR1cm4pXS5jcHUpXHJcblxyXG4gICAgICAvKiogZGlzcGxheSBhIGZ1bGwgdmlldyBvZiBib3RoIHBsYXllcidzIGJvYXJkcyBpZiBib3RoIHBsYXllcnMgYXJlIENQVXNcclxuICAgICBvciBpZiBzaGlwcyBhcmUgYmVpbmcgcGxhY2VkKi9cclxuICAgICkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5zaGlwTWFwLFxyXG4gICAgICB9KTtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBJZiBpdCdzIHAxJ3MgdHVybiBhbmQgcDEgaXMgYSBDUFUsIGRpc3BsYXkgcDAncyB2aWV3XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMSAmJiBTdGF0ZS5wbGF5ZXJzWzFdLmNwdSkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBJZiBpdCdzIHAwJ3MgdHVybiBhbmQgcDAgaXMgYSBDUFUsIGRpc3BsYXkgcDEncyB2aWV3XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMCAmJiBTdGF0ZS5wbGF5ZXJzWzBdLmNwdSkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIG90aGVyd2lzZSBkaXNwbGF5IHRoZSBjdXJyZW50IHBsYXllcidzIHZpZXdcclxuICAgIH0gZWxzZSBpZiAoU3RhdGUudHVybiA9PSAwKSB7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJsZWZ0XCIsXHJcbiAgICAgICAgc2hpcE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5zaGlwTWFwLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgICBzaGlwTWFwOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoU3RhdGUudHVybiA9PSAxKSB7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJsZWZ0XCIsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzBdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgICBzaGlwTWFwOiBudWxsLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFJlbmRlcmVyLnVwZGF0ZVRleHQoKTtcclxuICB9LFxyXG5cclxuICBibG9ja1NjcmVlbigpIHtcclxuICAgIHNldFRpbWVvdXQoUmVuZGVyZXIudG9nZ2xlU2NyZWVuQmxvY2soXCJvblwiKSwgMjAwMCk7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZW5kVHVybigpIHtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIGlmICghU3RhdGUucGxheWVyc1swXS5jcHUgJiYgIVN0YXRlLnBsYXllcnNbMV0uY3B1KSB7XHJcbiAgICAgIGxldCBuZXh0VHVybiA9IE51bWJlcighU3RhdGUudHVybik7XHJcbiAgICAgIFN0YXRlLnR1cm4gPSAtMTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgUmVuZGVyZXIudG9nZ2xlU2NyZWVuQmxvY2soXCJvblwiKTtcclxuICAgICAgICBSZW5kZXJlci51cGRhdGVTY3JlZW5CbG9ja1RleHQobmV4dFR1cm4pO1xyXG4gICAgICAgIFN0YXRlLnR1cm4gPSBuZXh0VHVybjtcclxuICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgU3RhdGUudHVybiA9IE51bWJlcighU3RhdGUudHVybik7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbU3RhdGUudHVybl0uY3B1KSBTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dLkNQVXNob290KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2xlYXJQbGF5ZXJzKCkge1xyXG4gICAgd2hpbGUgKFN0YXRlLnBsYXllcnNbMF0pIFN0YXRlLnBsYXllcnMucG9wKCk7XHJcbiAgfSxcclxuXHJcbiAgY2FuQ2xpY2socGxheWVySW5kZXgsIHgsIHkpIHtcclxuICAgIGlmIChwbGF5ZXJJbmRleCAhPT0gMCAmJiBwbGF5ZXJJbmRleCAhPT0gMSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGF5ZXIgaW5kZXghXCIpO1xyXG4gICAgbGV0IG90aGVyUGxheWVySW5kZXggPSBOdW1iZXIoIXBsYXllckluZGV4KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIFN0YXRlLnBsYXllcnNbb3RoZXJQbGF5ZXJJbmRleF0uYm9hcmQuc3F1YXJlRXhpc3RzKHgsIHkpICYmXHJcbiAgICAgIFN0YXRlLnBsYXllcnNbb3RoZXJQbGF5ZXJJbmRleF0uYm9hcmQuc3F1YXJlTm90SGl0KHgsIHkpICYmXHJcbiAgICAgIFN0YXRlLnR1cm4gPT0gcGxheWVySW5kZXggJiZcclxuICAgICAgIVN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLmNwdVxyXG4gICAgKTtcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNoaXBNYXAgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XHJcbiAgICB0aGlzLmhpdE1hcCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgbGV0IGJvYXJkID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xyXG4gICAgICAgIHJvdy5wdXNoKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIHNxdWFyZUV4aXN0cyh4LCB5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHggPCB0aGlzLnNoaXBNYXAubGVuZ3RoICYmXHJcbiAgICAgIHggPj0gMCAmJlxyXG4gICAgICB5IDwgdGhpcy5zaGlwTWFwWzBdLmxlbmd0aCAmJlxyXG4gICAgICB5ID49IDBcclxuICAgIClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzcXVhcmVOb3RIaXQoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuaGl0TWFwW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3F1YXJlSGFzU2hpcCh4LCB5KSB7XHJcbiAgICBpZiAodGhpcy5zaGlwTWFwW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRQbGFjZW1lbnQoeyB4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbiB9KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3F1YXJlRXhpc3RzKHggKyBpLCB5KSB8fCB0aGlzLnNxdWFyZUhhc1NoaXAoeCArIGksIHkpKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3F1YXJlRXhpc3RzKHgsIHkgLSBpKSB8fCB0aGlzLnNxdWFyZUhhc1NoaXAoeCwgeSAtIGkpKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcCh7IHNoaXAsIHgsIHksIGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiIH0pIHtcclxuICAgIGlmICghdGhpcy52YWxpZFBsYWNlbWVudCh7IHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoOiBzaGlwLmxlbmd0aCB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCFcIik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgIHRoaXMuc2hpcE1hcFt4ICsgaV1beV0gPSBzaGlwO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICB0aGlzLnNoaXBNYXBbeF1beSAtIGldID0gc2hpcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgQ29udHJvbGxlci5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUhpdCh4LCB5KSB7XHJcbiAgICBpZiAoIXRoaXMuc3F1YXJlRXhpc3RzKHgsIHkpKSB7XHJcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3F1YXJlTm90SGl0KHgsIHkpKSB7XHJcbiAgICAgIHJldHVybiBcInJlcGVhdFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNoaXBNYXBbeF1beV0pIHtcclxuICAgICAgdGhpcy5zaGlwTWFwW3hdW3ldLmhpdCgpO1xyXG4gICAgICB0aGlzLmhpdE1hcFt4XVt5XSA9IFwiaGl0XCI7XHJcbiAgICAgIHJldHVybiBcImhpdFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oaXRNYXBbeF1beV0gPSBcIm1pc3NcIjtcclxuICAgICAgcmV0dXJuIFwibWlzc1wiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxsU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBQYWdlID0ge1xyXG4gIHBsYXllck9uZVR5cGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDEtdHlwZVwiKSxcclxuICBsZWZ0R3JpZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWdyaWRcIiksXHJcbiAgbGVmdFNoaXBzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtc2hpcHNcIiksXHJcbiAgcGxheWVyVHdvVHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMi10eXBlXCIpLFxyXG4gIHJpZ2h0U2hpcHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtc2hpcHNcIiksXHJcbiAgcmlnaHRHcmlkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWdyaWRcIiksXHJcbiAgZ2FtZVRleHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS10ZXh0XCIpLFxyXG4gIGdhbWVCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1idXR0b25cIiksXHJcbiAgcDFUeXBlOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInAxLXR5cGVcIiksXHJcbiAgcDJUeXBlOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInAyLXR5cGVcIiksXHJcbiAgcm90YXRlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0ZS1idXR0b25cIiksXHJcbiAgc2NyZWVuQmxvY2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuLWJsb2NrXCIpLFxyXG4gIGV4aXRTY3JlZW5CbG9ja0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW4tYmxvY2stYnV0dG9uXCIpLFxyXG4gIHNjcmVlbkJsb2NrVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW4tYmxvY2stdGV4dFwiKSxcclxufTtcclxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgY3B1ID0gZmFsc2UpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBudWxsO1xyXG4gICAgdGhpcy5lbmVteUJvYXJkID0gbnVsbDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNwdSA9IGNwdTtcclxuICAgIHRoaXMuaWRlYWxNb3ZlcyA9IFtdO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtcclxuICAgICAgbmV3IFNoaXAoNSksXHJcbiAgICAgIG5ldyBTaGlwKDQpLFxyXG4gICAgICBuZXcgU2hpcCgzKSxcclxuICAgICAgbmV3IFNoaXAoMyksXHJcbiAgICAgIG5ldyBTaGlwKDIpLFxyXG4gICAgXTtcclxuICAgIHRoaXMuc2hpcEFsaWFzZXMgPSB7XHJcbiAgICAgIGNhcnJpZXI6IHRoaXMuc2hpcHNbMF0sXHJcbiAgICAgIGJhdHRsZXNoaXA6IHRoaXMuc2hpcHNbMV0sXHJcbiAgICAgIGNydWlzZXI6IHRoaXMuc2hpcHNbMl0sXHJcbiAgICAgIHN1Ym1hcmluZTogdGhpcy5zaGlwc1szXSxcclxuICAgICAgZGVzdHJveWVyOiB0aGlzLnNoaXBzWzRdLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldEJvYXJkKG5ld0JvYXJkKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gbmV3Qm9hcmQ7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICB9XHJcblxyXG4gIHNldEVuZW15Qm9hcmQoYm9hcmQpIHtcclxuICAgIHJldHVybiAodGhpcy5lbmVteUJvYXJkID0gYm9hcmQpO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTZWxlY3RlZFNoaXAoeyB4LCB5LCBkaXJlY3Rpb24gfSkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTaGlwICYmIHRoaXMuc2hpcHMuaW5kZXhPZih0aGlzLnNlbGVjdGVkU2hpcCkgPiAtMSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKHsgeCwgeSwgZGlyZWN0aW9uLCBzaGlwOiB0aGlzLnNlbGVjdGVkU2hpcCB9KTtcclxuICAgICAgICB0aGlzLnNoaXBzLnNwbGljZSh0aGlzLnNoaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFNoaXApLCAxKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwICYmXHJcbiAgICAgIHRoaXMuc2hpcHMuaW5kZXhPZih0aGlzLnNlbGVjdGVkU2hpcCkgPT09IC0xXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFNoaXAgPSBudWxsO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSB0aGF0IHNoaXAhXCIpO1xyXG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIk5vIHNoaXAgc2VsZWN0ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xyXG4gICAgd2hpbGUgKHRoaXMuc2hpcHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gdGhpcy5zaGlwc1swXTtcclxuICAgICAgbGV0IGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkgZGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlU2VsZWN0ZWRTaGlwKHtcclxuICAgICAgICAgICAgeDogdGhpcy5yYW5kb21Db29yZGluYXRlKCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvb3QoeCwgeSkge1xyXG4gICAgaWYgKFN0YXRlLmdhbWVPdmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2FtZSBpcyBvdmVyLlwiKTtcclxuICAgIGlmIChTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dICE9IHRoaXMpIHtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbTnVtYmVyKCFTdGF0ZS50dXJuKV0gIT0gdGhpcykge1xyXG4gICAgICAgIC8vaWYgdGhpcyBoYXBwZW5zLCB0aGlzIHBsYXllciBpc24ndCBpbiB0aGUgZ2FtZSBhbnltb3JlIGR1ZSB0byBhIHJlc3RhcnRcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQncyBub3QgeW91ciB0dXJuIHlldCFcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVIaXQoeCwgeSk7XHJcbiAgICBpZiAocmVzdWx0ID09IFwiaW52YWxpZFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRob3NlIGNvb3JkaW5hdGVzIGFyZSBpbnZhbGlkIVwiLCB7IGNhdXNlOiBcImludmFsaWRcIiB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQgPT0gXCJyZXBlYXRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaG9zZSBjb29yZGluYXRlcyBoYXZlIGFscmVhZHkgYmVlbiBzaG90IGF0IVwiLCB7XHJcbiAgICAgICAgY2F1c2U6IFwicmVwZWF0XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBzaG90IHRoZSBzcXVhcmUgYXQgJHt4fSwgJHt5fS5gKTtcclxuICAgIGlmIChyZXN1bHQgPT0gXCJoaXRcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkl0IHdhcyBhIGhpdCFcIik7XHJcbiAgICAgIGlmICh0aGlzLmVuZW15Qm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICAgICAgQ29udHJvbGxlci5lbmRHYW1lKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcIm1pc3NcIikgY29uc29sZS5sb2coXCJJdCB3YXMgYSBtaXNzLi4uXCIpO1xyXG4gICAgQ29udHJvbGxlci5lbmRUdXJuKCk7XHJcbiAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCwgeDogeCwgeTogeSB9O1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tQ29vcmRpbmF0ZSgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBDUFVzaG9vdCgpIHtcclxuICAgIGxldCBzaG90ID0gZmFsc2U7XHJcbiAgICBsZXQgc2hvdERhdGEgPSBudWxsO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdoaWxlICghc2hvdCkge1xyXG4gICAgICAgIGlmIChTdGF0ZS5nYW1lT3ZlciB8fCAhU3RhdGUucGxheWluZyB8fCBTdGF0ZS5wbGFjaW5nU2hpcHMpIHJldHVybjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaWRlYWxNb3Zlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBzaG90RGF0YSA9IHRoaXMuc2hvb3QoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkZWFsTW92ZXNbMF1bMF0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkZWFsTW92ZXNbMF1bMV1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRoaXMuaWRlYWxNb3Zlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBpZiAoZXJyLmNhdXNlID09IFwiaW52YWxpZFwiIHx8IGVyci5jYXVzZSA9PSBcInJlcGVhdFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkZWFsTW92ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3REYXRhID0gdGhpcy5zaG9vdChcclxuICAgICAgICAgICAgICB0aGlzLnJhbmRvbUNvb3JkaW5hdGUoKSxcclxuICAgICAgICAgICAgICB0aGlzLnJhbmRvbUNvb3JkaW5hdGUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNob3QgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKHNob3REYXRhLnJlc3VsdCA9PSBcImhpdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRlYWxNb3Zlcy5wdXNoKFxyXG4gICAgICAgICAgICAgIFtzaG90RGF0YS54ICsgMSwgc2hvdERhdGEueV0sXHJcbiAgICAgICAgICAgICAgW3Nob3REYXRhLnggLSAxLCBzaG90RGF0YS55XSxcclxuICAgICAgICAgICAgICBbc2hvdERhdGEueCwgc2hvdERhdGEueSArIDFdLFxyXG4gICAgICAgICAgICAgIFtzaG90RGF0YS54LCBzaG90RGF0YS55IC0gMV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbW92ZSBvZiB0aGlzLmlkZWFsTW92ZXMpIHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5ib2FyZC5zcXVhcmVFeGlzdHMobW92ZVswXSwgbW92ZVsxXSkgfHxcclxuICAgICAgICAgICAgICAgICF0aGlzLmVuZW15Qm9hcmQuc3F1YXJlTm90SGl0KG1vdmVbMF0sIG1vdmVbMV0pXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkZWFsTW92ZXMuc3BsaWNlKHRoaXMuaWRlYWxNb3Zlcy5pbmRleE9mKG1vdmUpLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9wYWdlXCI7XHJcblxyXG4vL3NvIHRoYXQgdGhlIGNvbnRpbnVlIGJ1dHRvbiBrbm93cyB3aGF0IHRvIHRlbGwgdGhlIGNvbnRyb2xsZXJcclxubGV0IHAxUGxhY2VkU2hpcHMgPSBmYWxzZTtcclxuXHJcbi8qKmlmIHlvdSdyZSBhbHJlYWR5IGhvdmVyaW5nIG92ZXIgYSBzcXVhcmUsIHlvdSBoYXZlIHRvIGhvdmVyIG92ZXIgYSBkaWZmZXJlbnQgb25lXHJcbnRvIHNlZSB0aGUgcm90YXRpb24uIHNvcnJ5IDooICovXHJcbmxldCBzZWxlY3RlZERpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG5QYWdlLnJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlbGVjdGVkRGlyZWN0aW9uID1cclxuICAgIHNlbGVjdGVkRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XHJcbn0pO1xyXG5QYWdlLmV4aXRTY3JlZW5CbG9ja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIFJlbmRlcmVyLnRvZ2dsZVNjcmVlbkJsb2NrKFwib2ZmXCIpO1xyXG59KTtcclxuXHJcbmxldCBidXR0b25DYWxsYmFja3MgPSB7XHJcbiAgbmV3R2FtZUNCKCkge1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlVHlwZXMoXCJvZmZcIik7XHJcbiAgICBSZW5kZXJlci50b2dnbGVSb3RhdGVCdXR0b24oXCJvblwiKTtcclxuICAgIGxldCBpc1AxQ1BVID0gZmFsc2U7XHJcbiAgICBsZXQgaXNQMkNQVSA9IGZhbHNlO1xyXG4gICAgZm9yIChsZXQgcmFkaW8gb2YgUGFnZS5wMVR5cGUpIHtcclxuICAgICAgaWYgKHJhZGlvLmNoZWNrZWQgJiYgcmFkaW8udmFsdWUgPT0gXCJDUFVcIikgaXNQMUNQVSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCByYWRpbyBvZiBQYWdlLnAyVHlwZSkge1xyXG4gICAgICBpZiAocmFkaW8uY2hlY2tlZCAmJiByYWRpby52YWx1ZSA9PSBcIkNQVVwiKSBpc1AyQ1BVID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIENvbnRyb2xsZXIubmV3R2FtZShpc1AxQ1BVLCBpc1AyQ1BVKTtcclxuICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdGFydGVkIVwiKTtcclxuICB9LFxyXG5cclxuICBjb250aW51ZUNCKCkge1xyXG4gICAgc2VsZWN0ZWREaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcclxuICAgIGlmICghcDFQbGFjZWRTaGlwcyAmJiAhU3RhdGUucGxheWVyc1swXS5jcHUpIHtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbMF0uc2hpcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHN0aWxsIGhhdmUgc2hpcHMgbGVmdCB0byBwbGFjZSFcIik7XHJcbiAgICAgIH1cclxuICAgICAgQ29udHJvbGxlci5zdGFydFNoaXBQbGFjZW1lbnQoMSk7XHJcbiAgICAgIHAxUGxhY2VkU2hpcHMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbMV0uc2hpcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHN0aWxsIGhhdmUgc2hpcHMgbGVmdCB0byBwbGFjZSFcIik7XHJcbiAgICAgIH1cclxuICAgICAgQ29udHJvbGxlci5zdGFydEdhbWUoKTtcclxuICAgICAgcDFQbGFjZWRTaGlwcyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlc3RhcnRDQigpIHtcclxuICAgIFJlbmRlcmVyLnRvZ2dsZVR5cGVzKFwib25cIik7XHJcbiAgICBDb250cm9sbGVyLnJlc3RhcnQoKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbmRlcmVyID0ge1xyXG4gIHVwZGF0ZVRleHQoKSB7XHJcbiAgICBpZiAoIVN0YXRlLnBsYXlpbmcpIHtcclxuICAgICAgUGFnZS5nYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLmdhbWVPdmVyKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZVRleHQudGV4dENvbnRlbnQgPSBgJHtTdGF0ZS53aW5uaW5nUGxheWVyLm5hbWV9IHdpbnMhISEhISEhYDtcclxuICAgIH0gZWxzZSBpZiAoU3RhdGUucGxhY2luZ1NoaXBzKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZVRleHQudGV4dENvbnRlbnQgPSBcIlByZXNzIFIgdG8gcm90YXRlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBQYWdlLmdhbWVUZXh0LnRleHRDb250ZW50ID0gYCR7U3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXS5uYW1lfSdzIHR1cm5gO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNjcmVlbkJsb2NrVGV4dChwbGF5ZXJJbmRleCkge1xyXG4gICAgUGFnZS5zY3JlZW5CbG9ja1RleHQudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVySW5kZXggKyAxfSdzIHR1cm5gO1xyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZVNjcmVlbkJsb2NrKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2NyZWVuQmxvY2tUZXh0KCk7XHJcbiAgICAgIFBhZ2Uuc2NyZWVuQmxvY2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gXCJvZmZcIikgUGFnZS5zY3JlZW5CbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZVR5cGVzOiBmdW5jdGlvbiB0b2dnbGVQbGF5ZXJUeXBlc1NlbGVjdGlvbihzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlID09IFwib25cIikge1xyXG4gICAgICBQYWdlLnBsYXllck9uZVR5cGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgUGFnZS5wbGF5ZXJUd29UeXBlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09IFwib2ZmXCIpIHtcclxuICAgICAgUGFnZS5wbGF5ZXJPbmVUeXBlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgIFBhZ2UucGxheWVyVHdvVHlwZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZVJvdGF0ZUJ1dHRvbihzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlID09IFwib25cIikge1xyXG4gICAgICBQYWdlLnJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBcIm9mZlwiKSB7XHJcbiAgICAgIFBhZ2Uucm90YXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlQnV0dG9uTGlzdGVuZXJzKCkge1xyXG4gICAgZm9yIChsZXQgbGlzdGVuZXIgaW4gYnV0dG9uQ2FsbGJhY2tzKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnV0dG9uQ2FsbGJhY2tzW2xpc3RlbmVyXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0QnV0dG9uKHR5cGUpIHtcclxuICAgIHRoaXMucmVtb3ZlQnV0dG9uTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgUGFnZS5nYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnVwZGF0ZVRleHQpO1xyXG4gICAgaWYgKHR5cGUgPT0gXCJuZXdcIikge1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBnYW1lXCI7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnV0dG9uQ2FsbGJhY2tzLm5ld0dhbWVDQik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJjb250aW51ZVwiKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DYWxsYmFja3MuY29udGludWVDQik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJyZXN0YXJ0XCIpIHtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXN0YXJ0XCI7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnV0dG9uQ2FsbGJhY2tzLnJlc3RhcnRDQik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2xlYXJTaGlwcygpIHtcclxuICAgIGZvciAobGV0IHNoaXAgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLXdyYXBwZXJcIikpIHtcclxuICAgICAgc2hpcC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZSwgc3RhdGUgfSkge1xyXG4gICAgaWYgKHNpZGUgPT0gXCJsZWZ0XCIpIHtcclxuICAgICAgaWYgKHN0YXRlID09IFwib25cIikge1xyXG4gICAgICAgIFBhZ2UubGVmdFNoaXBzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgUGFnZS5sZWZ0R3JpZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09IFwib2ZmXCIpIHtcclxuICAgICAgICBQYWdlLmxlZnRTaGlwcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIFBhZ2UubGVmdEdyaWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzaWRlID09IFwicmlnaHRcIikge1xyXG4gICAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgICAgUGFnZS5yaWdodFNoaXBzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgUGFnZS5yaWdodEdyaWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBcIm9mZlwiKSB7XHJcbiAgICAgICAgUGFnZS5yaWdodFNoaXBzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgUGFnZS5yaWdodEdyaWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHBvcHVsYXRlU2hpcHMoc2lkZSkge1xyXG4gICAgdGhpcy5jbGVhclNoaXBzKCk7XHJcbiAgICBsZXQgcGxheWVyID0gc2lkZSA9PSBcInJpZ2h0XCIgPyAwIDogMTtcclxuICAgIGZvciAobGV0IHNoaXAgb2YgU3RhdGUucGxheWVyc1twbGF5ZXJdLnNoaXBzKSB7XHJcbiAgICAgIGNvbnN0IHNoaXBIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgc2hpcEhUTUwuY2xhc3NMaXN0LmFkZChcInNoaXAtd3JhcHBlclwiKTtcclxuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgIHNoaXBOYW1lLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW5hbWVcIik7XHJcbiAgICAgIHNoaXBOYW1lLnRleHRDb250ZW50ID0gT2JqZWN0LmtleXMoU3RhdGUucGxheWVyc1twbGF5ZXJdLnNoaXBBbGlhc2VzKVtcclxuICAgICAgICBPYmplY3QudmFsdWVzKFN0YXRlLnBsYXllcnNbcGxheWVyXS5zaGlwQWxpYXNlcykuaW5kZXhPZihzaGlwKVxyXG4gICAgICBdO1xyXG4gICAgICBjb25zdCBzaGlwQ2VsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzaGlwQ2VsbHMuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbHMtd3JhcHBlclwiKTtcclxuICAgICAgc2hpcEhUTUwuYXBwZW5kQ2hpbGQoc2hpcE5hbWUpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcclxuICAgICAgICBzaGlwQ2VsbHMuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xyXG4gICAgICB9XHJcbiAgICAgIHNoaXBIVE1MLmFwcGVuZENoaWxkKHNoaXBDZWxscyk7XHJcbiAgICAgIHNoaXBIVE1MLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgU3RhdGUucGxheWVyc1twbGF5ZXJdLnNlbGVjdGVkU2hpcCA9IHNoaXA7XHJcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0ZWRTaGlwIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgIHNlbGVjdGVkU2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBIVE1MLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChzaWRlID09IFwibGVmdFwiKSBQYWdlLmxlZnRTaGlwcy5hcHBlbmRDaGlsZChzaGlwSFRNTCk7XHJcbiAgICAgIGVsc2UgaWYgKHNpZGUgPT0gXCJyaWdodFwiKSBQYWdlLnJpZ2h0U2hpcHMuYXBwZW5kQ2hpbGQoc2hpcEhUTUwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNsZWFyR3JpZChncmlkKSB7XHJcbiAgICBpZiAoZ3JpZCA9PSBcImxlZnRcIikge1xyXG4gICAgICB3aGlsZSAoUGFnZS5sZWZ0R3JpZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgUGFnZS5sZWZ0R3JpZC5yZW1vdmVDaGlsZChQYWdlLmxlZnRHcmlkLmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZ3JpZCA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgd2hpbGUgKFBhZ2UucmlnaHRHcmlkLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBQYWdlLnJpZ2h0R3JpZC5yZW1vdmVDaGlsZChQYWdlLnJpZ2h0R3JpZC5sYXN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBncmlkISBNdXN0IGJlICdsZWZ0JyBvciAncmlnaHQnLlwiKTtcclxuICB9LFxyXG5cclxuICBjbGVhckhvdmVycygpIHtcclxuICAgIGZvciAobGV0IGhvdmVyQ2VsbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdmVyXCIpKSB7XHJcbiAgICAgIGhvdmVyQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBzaGlwSG92ZXIgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLWhvdmVyXCIpKSB7XHJcbiAgICAgIHNoaXBIb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1ob3ZlclwiKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGJhZFBsYWNlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhZC1wbGFjZW1lbnRcIikpIHtcclxuICAgICAgYmFkUGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiYWQtcGxhY2VtZW50XCIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHBvcHVsYXRlR3JpZCh7IGdyaWQgPSBsZWZ0LCBoaXRNYXAgPSBudWxsLCBzaGlwTWFwID0gbnVsbCB9KSB7XHJcbiAgICBpZiAoZ3JpZCAhPSBcImxlZnRcIiAmJiBncmlkICE9IFwicmlnaHRcIilcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBncmlkISBNdXN0IGJlICdsZWZ0JyBvciAncmlnaHQnLlwiKTtcclxuICAgIHRoaXMuY2xlYXJHcmlkKGdyaWQpO1xyXG4gICAgaWYgKGhpdE1hcCA9PSBudWxsICYmIHNoaXBNYXAgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgZm9yIChsZXQgeUNvb3JkID0gOTsgeUNvb3JkID49IDA7IHlDb29yZC0tKSB7XHJcbiAgICAgIGZvciAobGV0IHhDb29yZCA9IDA7IHhDb29yZCA8IDEwOyB4Q29vcmQrKykge1xyXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG5cclxuICAgICAgICBpZiAoc2hpcE1hcCAmJiBzaGlwTWFwW3hDb29yZF1beUNvb3JkXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoaXRNYXAgJiYgaGl0TWFwW3hDb29yZF1beUNvb3JkXSA9PSBcIm1pc3NcIikge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhpdE1hcCAmJiBoaXRNYXBbeENvb3JkXVt5Q29vcmRdID09IFwiaGl0XCIpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0geENvb3JkO1xyXG4gICAgICAgIGNlbGwuZGF0YXNldC55ID0geUNvb3JkO1xyXG4gICAgICAgIGNlbGwuZGF0YXNldC5ncmlkID0gZ3JpZDtcclxuXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckhvdmVycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBncmlkID09IFwibGVmdFwiID8gMSA6IDI7XHJcbiAgICAgICAgbGV0IHBsYXllckluZGV4ID0gcGxheWVyIC0gMTtcclxuICAgICAgICBsZXQgb3RoZXJQbGF5ZXJJbmRleCA9IE51bWJlcighcGxheWVySW5kZXgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIFN0YXRlLmdhbWVPdmVyICYmXHJcbiAgICAgICAgICBTdGF0ZS53aW5uaW5nUGxheWVyID09IFN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJ3aW5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTdGF0ZS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibG9zZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGlmIChTdGF0ZS5wbGFjaW5nU2hpcHMpIHtcclxuICAgICAgICAgICAgaWYgKCFTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5zZWxlY3RlZFNoaXApIHJldHVybjtcclxuICAgICAgICAgICAgU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0ucGxhY2VTZWxlY3RlZFNoaXAoe1xyXG4gICAgICAgICAgICAgIHg6IHhDb29yZCxcclxuICAgICAgICAgICAgICB5OiB5Q29vcmQsXHJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzZWxlY3RlZERpcmVjdGlvbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChncmlkID09IFwibGVmdFwiKSB0aGlzLnBvcHVsYXRlU2hpcHMoXCJyaWdodFwiKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnBvcHVsYXRlU2hpcHMoXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzZWxlY3RlZFNoaXAgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChDb250cm9sbGVyLmNhbkNsaWNrKG90aGVyUGxheWVySW5kZXgsIHhDb29yZCwgeUNvb3JkKSkge1xyXG4gICAgICAgICAgICBTdGF0ZS5wbGF5ZXJzW290aGVyUGxheWVySW5kZXhdLnNob290KHhDb29yZCwgeUNvb3JkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgIGlmIChTdGF0ZS5wbGFjaW5nU2hpcHMpIHtcclxuICAgICAgICAgICAgaWYgKCFTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5zZWxlY3RlZFNoaXApIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHZhbGlkUGxhY2VtZW50ID0gU3RhdGUucGxheWVyc1tcclxuICAgICAgICAgICAgICBwbGF5ZXJJbmRleFxyXG4gICAgICAgICAgICBdLmJvYXJkLnZhbGlkUGxhY2VtZW50KHtcclxuICAgICAgICAgICAgICB4OiB4Q29vcmQsXHJcbiAgICAgICAgICAgICAgeTogeUNvb3JkLFxyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWREaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgbGVuZ3RoOiBTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5zZWxlY3RlZFNoaXAubGVuZ3RoLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgICAgaSA8IFN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLnNlbGVjdGVkU2hpcC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZENlbGwgPSBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZERpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgYC5jZWxsW2RhdGEteD1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkICsgaVxyXG4gICAgICAgICAgICAgICAgICB9XCJdW2RhdGEteT1cIiR7eUNvb3JkfVwiXVtkYXRhLWdyaWQ9XCIke2dyaWR9XCJdYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRGlyZWN0aW9uID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgYC5jZWxsW2RhdGEteD1cIiR7eENvb3JkfVwiXVtkYXRhLXk9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgIHlDb29yZCAtIGlcclxuICAgICAgICAgICAgICAgICAgfVwiXVtkYXRhLWdyaWQ9XCIke2dyaWR9XCJdYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ2VsbCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICBpZiAodmFsaWRQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1ob3ZlclwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJiYWQtcGxhY2VtZW50XCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChDb250cm9sbGVyLmNhbkNsaWNrKG90aGVyUGxheWVySW5kZXgsIHhDb29yZCwgeUNvb3JkKSkge1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBncmlkID09IFwibGVmdFwiXHJcbiAgICAgICAgICA/IFBhZ2UubGVmdEdyaWQuYXBwZW5kQ2hpbGQoY2VsbClcclxuICAgICAgICAgIDogUGFnZS5yaWdodEdyaWQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbjtcclxuICAgIHRoaXMuaGl0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMgPSB0aGlzLmhpdHMgKz0gMTtcclxuICAgIHJldHVybiB0aGlzLmhpdHM7XHJcbiAgfVxyXG5cclxuICBpc1N1bmsoKSB7XHJcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFN0YXRlID0ge1xyXG4gIHBsYXlpbmc6IGZhbHNlLFxyXG4gIHBsYXllcnM6IFtdLFxyXG4gIHR1cm46IDAsXHJcbiAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gIHdpbm5pbmdQbGF5ZXI6IG51bGwsXHJcbiAgcGxhY2luZ1NoaXBzOiBmYWxzZSxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcclxuXHJcblJlbmRlcmVyLnNldEJ1dHRvbihcIm5ld1wiKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9