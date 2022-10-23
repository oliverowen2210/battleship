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
___CSS_LOADER_EXPORT___.push([module.id, "body,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  display: grid;\r\n  grid-template-rows: 1fr 3fr;\r\n  height: 100vh;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.screen-block {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  font-size: 5rem;\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n}\r\n\r\n.screen-block-text {\r\n  color: white;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.screen-block-button {\r\n  grid-row: 2;\r\n  width: 50%;\r\n  height: 50%;\r\n  font-size: 5rem;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.screen-block-button:hover {\r\n  background-color: rgb(206, 206, 206);\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#title {\r\n  grid-column: 2;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 5%;\r\n}\r\n\r\n.type-input {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.type-input input {\r\n  height: 3vh;\r\n  width: calc(0.7vw + 2vh);\r\n}\r\n\r\nheader div h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nheader div button {\r\n  padding: 1%;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 3fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  border: 5px solid black;\r\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  height: 60vh;\r\n  background-color: white;\r\n  width: 60vh;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2vh;\r\n}\r\n\r\n.ship-wrapper {\r\n  cursor: pointer;\r\n}\r\n\r\n.ship-wrapper:hover .ship-cells-wrapper {\r\n  box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n.ship-cells-wrapper {\r\n  display: flex;\r\n  width: fit-content;\r\n}\r\n\r\n.selected .ship-cell {\r\n  background-color: darkred;\r\n}\r\n\r\n.cell.ship-hover {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.cell.bad-placement {\r\n  background-color: lightcoral;\r\n}\r\n\r\n.ship-cell {\r\n  grid-row: 2;\r\n  height: 2vw;\r\n  width: 2vw;\r\n  background-color: red;\r\n  border: 4px solid black;\r\n}\r\n\r\n.ship-name {\r\n  font-size: calc(1.1vw + 16px);\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  text-shadow: 0px 0px 15px black;\r\n}\r\n\r\n#right-ships {\r\n  justify-self: start;\r\n}\r\n\r\n#left-ships {\r\n  justify-self: end;\r\n}\r\n\r\n#rotate-button {\r\n  width: 75%;\r\n  height: 25%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  filter: drop-shadow(0px 0px 15px black);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#left-grid,\r\n#left-ships {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n  justify-self: end;\r\n}\r\n\r\n#right-grid,\r\n#right-ships {\r\n  grid-column: 3;\r\n  grid-row: 1;\r\n  justify-self: start;\r\n}\r\n\r\n.cell {\r\n  outline: 2px solid black;\r\n  margin-top: 1px;\r\n  margin-left: 1px;\r\n}\r\n\r\n.cell.lose {\r\n  background-color: rgb(199 199 199);\r\n}\r\n\r\n.cell.win {\r\n  background-color: rgb(255 240 176);\r\n}\r\n\r\n.cell.miss {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.hit {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.ship,\r\n.cell.lose.ship,\r\n.cell.win.ship {\r\n  background-color: red;\r\n}\r\n\r\n.cell.ship.hit {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n.cell.hover {\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv.hidden,\r\ndiv.hidden *,\r\n.hidden,\r\n.hidden * {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mDAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,OAAO;AACT;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gDAAgD;EAChD,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,UAAU;EACV,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mDAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;EACxB,uCAAuC;EACvC,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,cAAc;EACd,WAAW;EACX,iBAAiB;AACnB;;AAEA;;EAEE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yDAAiC;EACjC,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,yDAAgC;EAChC,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;;;EAGE,qBAAqB;AACvB;;AAEA;EACE,yDAAsE;AACxE;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["body,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: url(\"water.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  display: grid;\r\n  grid-template-rows: 1fr 3fr;\r\n  height: 100vh;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.screen-block {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  font-size: 5rem;\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n}\r\n\r\n.screen-block-text {\r\n  color: white;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n\r\n.screen-block-button {\r\n  grid-row: 2;\r\n  width: 50%;\r\n  height: 50%;\r\n  font-size: 5rem;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.screen-block-button:hover {\r\n  background-color: rgb(206, 206, 206);\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#title {\r\n  grid-column: 2;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 5%;\r\n}\r\n\r\n.type-input {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.type-input input {\r\n  height: 3vh;\r\n  width: calc(0.7vw + 2vh);\r\n}\r\n\r\nheader div h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nheader div button {\r\n  padding: 1%;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 3fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  border: 5px solid black;\r\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n  height: 60vh;\r\n  background-color: white;\r\n  width: 60vh;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2vh;\r\n}\r\n\r\n.ship-wrapper {\r\n  cursor: pointer;\r\n}\r\n\r\n.ship-wrapper:hover .ship-cells-wrapper {\r\n  box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n.ship-cells-wrapper {\r\n  display: flex;\r\n  width: fit-content;\r\n}\r\n\r\n.selected .ship-cell {\r\n  background-color: darkred;\r\n}\r\n\r\n.cell.ship-hover {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.cell.bad-placement {\r\n  background-color: lightcoral;\r\n}\r\n\r\n.ship-cell {\r\n  grid-row: 2;\r\n  height: 2vw;\r\n  width: 2vw;\r\n  background-color: red;\r\n  border: 4px solid black;\r\n}\r\n\r\n.ship-name {\r\n  font-size: calc(1.1vw + 16px);\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  text-shadow: 0px 0px 15px black;\r\n}\r\n\r\n#right-ships {\r\n  justify-self: start;\r\n}\r\n\r\n#left-ships {\r\n  justify-self: end;\r\n}\r\n\r\n#rotate-button {\r\n  width: 75%;\r\n  height: 25%;\r\n  background: url(\"rotate.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  filter: drop-shadow(0px 0px 15px black);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#left-grid,\r\n#left-ships {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n  justify-self: end;\r\n}\r\n\r\n#right-grid,\r\n#right-ships {\r\n  grid-column: 3;\r\n  grid-row: 1;\r\n  justify-self: start;\r\n}\r\n\r\n.cell {\r\n  outline: 2px solid black;\r\n  margin-top: 1px;\r\n  margin-left: 1px;\r\n}\r\n\r\n.cell.lose {\r\n  background-color: rgb(199 199 199);\r\n}\r\n\r\n.cell.win {\r\n  background-color: rgb(255 240 176);\r\n}\r\n\r\n.cell.miss {\r\n  background-image: url(\"miss.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.hit {\r\n  background-image: url(\"hit.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n.cell.ship,\r\n.cell.lose.ship,\r\n.cell.win.ship {\r\n  background-color: red;\r\n}\r\n\r\n.cell.ship.hit {\r\n  background-image: url(file:///C:/odin/js/odin-battleship/src/miss.png);\r\n}\r\n\r\n.cell.hover {\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv.hidden,\r\ndiv.hidden *,\r\n.hidden,\r\n.hidden * {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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

module.exports = __webpack_require__.p + "dc63fbcef40b64844dd5.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Q7QUFDQSxZQUFZLDREQUF5QjtBQUNyQyxZQUFZLDZEQUEwQjtBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNuVE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lCO0FBQ3RDO0FBQ0EseURBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIndhdGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcInJvdGF0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJtaXNzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImhpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJmaWxlOi8vL0M6L29kaW4vanMvb2Rpbi1iYXR0bGVzaGlwL3NyYy9taXNzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcclxcbmh0bWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jay10ZXh0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbiB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogNSU7XFxyXFxufVxcclxcblxcclxcbi50eXBlLWlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1pbnB1dCBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIHdpZHRoOiBjYWxjKDAuN3Z3ICsgMnZoKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgM2ZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXdyYXBwZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC13cmFwcGVyOmhvdmVyIC5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGxzLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIC5zaGlwLWNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcC1ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5iYWQtcGxhY2VtZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwge1xcclxcbiAgZ3JpZC1yb3c6IDI7XFxyXFxuICBoZWlnaHQ6IDJ2dztcXHJcXG4gIHdpZHRoOiAydnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMS4xdncgKyAxNnB4KTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtc2hpcHMge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbiNyb3RhdGUtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDE1cHggYmxhY2spO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1ncmlkLFxcclxcbiNsZWZ0LXNoaXBzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0LWdyaWQsXFxyXFxuI3JpZ2h0LXNoaXBzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5sb3NlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLndpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI0MCAxNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5taXNzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnNoaXAsXFxyXFxuLmNlbGwubG9zZS5zaGlwLFxcclxcbi5jZWxsLndpbi5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcC5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaGlkZGVuLFxcclxcbmRpdi5oaWRkZW4gKixcXHJcXG4uaGlkZGVuLFxcclxcbi5oaWRkZW4gKiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtREFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1EQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlEQUFpQztFQUNqQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlEQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseURBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOzs7O0VBSUUsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwid2F0ZXIuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLXRleHQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2stYnV0dG9uIHtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2stYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGUtaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50eXBlLWlucHV0IGlucHV0IHtcXHJcXG4gIGhlaWdodDogM3ZoO1xcclxcbiAgd2lkdGg6IGNhbGMoMC43dncgKyAydmgpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAzZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtd3JhcHBlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXdyYXBwZXI6aG92ZXIgLnNoaXAtY2VsbHMtd3JhcHBlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2VsbHMtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQgLnNoaXAtY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLWhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmJhZC1wbGFjZW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2VsbCB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGhlaWdodDogMnZ3O1xcclxcbiAgd2lkdGg6IDJ2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjF2dyArIDE2cHgpO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDE1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNyaWdodC1zaGlwcyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1zaGlwcyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdGF0ZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJyb3RhdGUucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDE1cHggYmxhY2spO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1ncmlkLFxcclxcbiNsZWZ0LXNoaXBzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0LWdyaWQsXFxyXFxuI3JpZ2h0LXNoaXBzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5sb3NlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLndpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI0MCAxNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5taXNzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwibWlzcy5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImhpdC5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnNoaXAsXFxyXFxuLmNlbGwubG9zZS5zaGlwLFxcclxcbi5jZWxsLndpbi5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcC5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGZpbGU6Ly8vQzovb2Rpbi9qcy9vZGluLWJhdHRsZXNoaXAvc3JjL21pc3MucG5nKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaGlkZGVuLFxcclxcbmRpdi5oaWRkZW4gKixcXHJcXG4uaGlkZGVuLFxcclxcbi5oaWRkZW4gKiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250cm9sbGVyID0ge1xyXG4gIG5ld0dhbWUocDFjcHUsIHAyY3B1KSB7XHJcbiAgICBTdGF0ZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgIGxldCBwMSA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXIgMVwiLCBwMWNwdSk7XHJcbiAgICBsZXQgcDIgPSBuZXcgUGxheWVyKFwiUGxheWVyIDJcIiwgcDJjcHUpO1xyXG4gICAgU3RhdGUucGxheWVycy5wdXNoKHAxLCBwMik7XHJcbiAgICBwMS5zZXRCb2FyZChuZXcgR2FtZWJvYXJkKCkpO1xyXG4gICAgcDIuc2V0Qm9hcmQobmV3IEdhbWVib2FyZCgpKTtcclxuICAgIHAxLnNldEVuZW15Qm9hcmQocDIuYm9hcmQpO1xyXG4gICAgcDIuc2V0RW5lbXlCb2FyZChwMS5ib2FyZCk7XHJcblxyXG4gICAgU3RhdGUucGxhY2luZ1NoaXBzID0gdHJ1ZTtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIHRoaXMuc3RhcnRTaGlwUGxhY2VtZW50KDApO1xyXG5cclxuICAgIHJldHVybiB7IHBsYXllcnM6IFN0YXRlLnBsYXllcnMgfTtcclxuICB9LFxyXG5cclxuICByZXN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJuZXdcIik7XHJcbiAgfSxcclxuXHJcbiAgcmVzZXRTdGF0ZSgpIHtcclxuICAgIFN0YXRlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xlYXJQbGF5ZXJzKCk7XHJcbiAgICBTdGF0ZS50dXJuID0gMDtcclxuICAgIFN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICBTdGF0ZS53aW5uaW5nUGxheWVyID0gbnVsbDtcclxuICAgIFN0YXRlLnBsYWNpbmdTaGlwcyA9IGZhbHNlO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0U2hpcFBsYWNlbWVudChwbGF5ZXJJbmRleCkge1xyXG4gICAgaWYgKHBsYXllckluZGV4ID09IDApIHtcclxuICAgICAgaWYgKCFTdGF0ZS5wbGF5ZXJzWzBdLmNwdSkge1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcImxlZnRcIiwgc3RhdGU6IFwib2ZmXCIgfSk7XHJcbiAgICAgICAgUmVuZGVyZXIudG9nZ2xlU2hpcFNlbGVjdGlvbih7IHNpZGU6IFwicmlnaHRcIiwgc3RhdGU6IFwib25cIiB9KTtcclxuICAgICAgICBSZW5kZXJlci5wb3B1bGF0ZVNoaXBzKFwicmlnaHRcIik7XHJcbiAgICAgICAgUmVuZGVyZXIuc2V0QnV0dG9uKFwiY29udGludWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU3RhdGUucGxheWVyc1swXS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0U2hpcFBsYWNlbWVudCgxKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXJJbmRleCA9PSAxKSB7XHJcbiAgICAgIGlmICghU3RhdGUucGxheWVyc1sxXS5jcHUpIHtcclxuICAgICAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJyaWdodFwiLCBzdGF0ZTogXCJvZmZcIiB9KTtcclxuICAgICAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJsZWZ0XCIsIHN0YXRlOiBcIm9uXCIgfSk7XHJcbiAgICAgICAgUmVuZGVyZXIucG9wdWxhdGVTaGlwcyhcImxlZnRcIik7XHJcbiAgICAgICAgUmVuZGVyZXIuc2V0QnV0dG9uKFwiY29udGludWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU3RhdGUucGxheWVyc1sxXS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgU3RhdGUucGxhY2luZ1NoaXBzID0gZmFsc2U7XHJcbiAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJsZWZ0XCIsIHN0YXRlOiBcIm9mZlwiIH0pO1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlU2hpcFNlbGVjdGlvbih7IHNpZGU6IFwicmlnaHRcIiwgc3RhdGU6IFwib2ZmXCIgfSk7XHJcbiAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJyZXN0YXJ0XCIpO1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlUm90YXRlQnV0dG9uKFwib2ZmXCIpO1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgaWYgKFN0YXRlLnBsYXllcnNbMF0uY3B1KSBTdGF0ZS5wbGF5ZXJzWzBdLkNQVXNob290KCk7XHJcbiAgfSxcclxuXHJcbiAgZW5kR2FtZSgpIHtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIFN0YXRlLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgIFN0YXRlLndpbm5pbmdQbGF5ZXIgPSBTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dO1xyXG4gICAgY29uc29sZS5sb2coYFRoZSBnYW1lIGlzIG92ZXIuICR7U3RhdGUud2lubmluZ1BsYXllci5uYW1lfSB3aW5zIWApO1xyXG4gIH0sXHJcblxyXG4gIC8qKiAgVGVsbHMgdGhlIHJlbmRlcmVyIHdoYXQgdG8gZGlzcGxheSBpbiB0aGUgZ3JpZHNcclxuICAgKiBiYXNlZCBvbiB3aG8ncyBwbGF5aW5nIGFuZCB3aGV0aGVyIHRoZXkncmUgYSBDUFVcclxuICAgKiB0aGVuIHVwZGF0ZXMgdGhlIFwiWCBwbGF5ZXIncyB0dXJuXCIgdGV4dC4gKi9cclxuICByZWZyZXNoVmlldygpIHtcclxuICAgIC8vIElmIGEgZ2FtZSBoYXNuJ3QgYmVlbiBzdGFydGVkLCBlbXB0eSBib3RoIGdyaWRzXHJcbiAgICBpZiAoIVN0YXRlLnBsYXlpbmcpIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHsgZ3JpZDogXCJsZWZ0XCIsIGhpdE1hcDogbnVsbCwgc2hpcE1hcDogbnVsbCB9KTtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHsgZ3JpZDogXCJyaWdodFwiLCBoaXRNYXA6IG51bGwsIHNoaXBNYXA6IG51bGwgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBTdGF0ZS5wbGFjaW5nU2hpcHMgfHxcclxuICAgICAgKFN0YXRlLnBsYXllcnNbU3RhdGUudHVybl0uY3B1ICYmIFN0YXRlLnBsYXllcnNbTnVtYmVyKCFTdGF0ZS50dXJuKV0uY3B1KVxyXG5cclxuICAgICAgLyoqIGRpc3BsYXkgYSBmdWxsIHZpZXcgb2YgYm90aCBwbGF5ZXIncyBib2FyZHMgaWYgYm90aCBwbGF5ZXJzIGFyZSBDUFVzXHJcbiAgICAgb3IgaWYgc2hpcHMgYXJlIGJlaW5nIHBsYWNlZCovXHJcbiAgICApIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcImxlZnRcIixcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgfSk7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5zaGlwTWFwLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gSWYgaXQncyBwMSdzIHR1cm4gYW5kIHAxIGlzIGEgQ1BVLCBkaXNwbGF5IHAwJ3Mgdmlld1xyXG4gICAgfSBlbHNlIGlmIChTdGF0ZS50dXJuID09IDEgJiYgU3RhdGUucGxheWVyc1sxXS5jcHUpIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcImxlZnRcIixcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzBdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzBdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwicmlnaHRcIixcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICAgIHNoaXBNYXA6IG51bGwsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSWYgaXQncyBwMCdzIHR1cm4gYW5kIHAwIGlzIGEgQ1BVLCBkaXNwbGF5IHAxJ3Mgdmlld1xyXG4gICAgfSBlbHNlIGlmIChTdGF0ZS50dXJuID09IDAgJiYgU3RhdGUucGxheWVyc1swXS5jcHUpIHtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcImxlZnRcIixcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICAgIHNoaXBNYXA6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwicmlnaHRcIixcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBvdGhlcndpc2UgZGlzcGxheSB0aGUgY3VycmVudCBwbGF5ZXIncyB2aWV3XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMCkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMSkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwicmlnaHRcIixcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJlci51cGRhdGVUZXh0KCk7XHJcbiAgfSxcclxuXHJcbiAgYmxvY2tTY3JlZW4oKSB7XHJcbiAgICBzZXRUaW1lb3V0KFJlbmRlcmVyLnRvZ2dsZVNjcmVlbkJsb2NrKFwib25cIiksIDIwMDApO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGVuZFR1cm4oKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICBpZiAoIVN0YXRlLnBsYXllcnNbMF0uY3B1ICYmICFTdGF0ZS5wbGF5ZXJzWzFdLmNwdSkge1xyXG4gICAgICBsZXQgbmV4dFR1cm4gPSBOdW1iZXIoIVN0YXRlLnR1cm4pO1xyXG4gICAgICBTdGF0ZS50dXJuID0gLTE7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNjcmVlbkJsb2NrKFwib25cIik7XHJcbiAgICAgICAgUmVuZGVyZXIudXBkYXRlU2NyZWVuQmxvY2tUZXh0KG5leHRUdXJuKTtcclxuICAgICAgICBTdGF0ZS50dXJuID0gbmV4dFR1cm47XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFN0YXRlLnR1cm4gPSBOdW1iZXIoIVN0YXRlLnR1cm4pO1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICAgIGlmIChTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dLmNwdSkgU3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXS5DUFVzaG9vdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNsZWFyUGxheWVycygpIHtcclxuICAgIHdoaWxlIChTdGF0ZS5wbGF5ZXJzWzBdKSBTdGF0ZS5wbGF5ZXJzLnBvcCgpO1xyXG4gIH0sXHJcblxyXG4gIGNhbkNsaWNrKHBsYXllckluZGV4LCB4LCB5KSB7XHJcbiAgICBpZiAocGxheWVySW5kZXggIT09IDAgJiYgcGxheWVySW5kZXggIT09IDEpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGxheWVyIGluZGV4IVwiKTtcclxuICAgIGxldCBvdGhlclBsYXllckluZGV4ID0gTnVtYmVyKCFwbGF5ZXJJbmRleCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBTdGF0ZS5wbGF5ZXJzW290aGVyUGxheWVySW5kZXhdLmJvYXJkLnNxdWFyZUV4aXN0cyh4LCB5KSAmJlxyXG4gICAgICBTdGF0ZS5wbGF5ZXJzW290aGVyUGxheWVySW5kZXhdLmJvYXJkLnNxdWFyZU5vdEhpdCh4LCB5KSAmJlxyXG4gICAgICBTdGF0ZS50dXJuID09IHBsYXllckluZGV4ICYmXHJcbiAgICAgICFTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5jcHVcclxuICAgICk7XHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaGlwTWFwID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG4gICAgdGhpcy5oaXRNYXAgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XHJcbiAgICB0aGlzLnNoaXBzID0gW107XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZCgpIHtcclxuICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICBsZXQgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcclxuICAgICAgICByb3cucHVzaChudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBib2FyZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBzcXVhcmVFeGlzdHMoeCwgeSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB4IDwgdGhpcy5zaGlwTWFwLmxlbmd0aCAmJlxyXG4gICAgICB4ID49IDAgJiZcclxuICAgICAgeSA8IHRoaXMuc2hpcE1hcFswXS5sZW5ndGggJiZcclxuICAgICAgeSA+PSAwXHJcbiAgICApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3F1YXJlTm90SGl0KHgsIHkpIHtcclxuICAgIGlmICh0aGlzLmhpdE1hcFt4XVt5XSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNxdWFyZUhhc1NoaXAoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuc2hpcE1hcFt4XVt5XSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZhbGlkUGxhY2VtZW50KHsgeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24gfSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNxdWFyZUV4aXN0cyh4ICsgaSwgeSkgfHwgdGhpcy5zcXVhcmVIYXNTaGlwKHggKyBpLCB5KSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNxdWFyZUV4aXN0cyh4LCB5IC0gaSkgfHwgdGhpcy5zcXVhcmVIYXNTaGlwKHgsIHkgLSBpKSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwbGFjZVNoaXAoeyBzaGlwLCB4LCB5LCBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIiB9KSB7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRQbGFjZW1lbnQoeyB4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aDogc2hpcC5sZW5ndGggfSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQhXCIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICB0aGlzLnNoaXBNYXBbeCArIGldW3ldID0gc2hpcDtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgdGhpcy5zaGlwTWFwW3hdW3kgLSBpXSA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgIENvbnRyb2xsZXIucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVIaXQoeCwgeSkge1xyXG4gICAgaWYgKCF0aGlzLnNxdWFyZUV4aXN0cyh4LCB5KSkge1xyXG4gICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnNxdWFyZU5vdEhpdCh4LCB5KSkge1xyXG4gICAgICByZXR1cm4gXCJyZXBlYXRcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zaGlwTWFwW3hdW3ldKSB7XHJcbiAgICAgIHRoaXMuc2hpcE1hcFt4XVt5XS5oaXQoKTtcclxuICAgICAgdGhpcy5oaXRNYXBbeF1beV0gPSBcImhpdFwiO1xyXG4gICAgICByZXR1cm4gXCJoaXRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGl0TWFwW3hdW3ldID0gXCJtaXNzXCI7XHJcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsbFN1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4ge1xyXG4gICAgICByZXR1cm4gc2hpcC5pc1N1bmsoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgUGFnZSA9IHtcclxuICBwbGF5ZXJPbmVUeXBlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAxLXR5cGVcIiksXHJcbiAgbGVmdEdyaWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1ncmlkXCIpLFxyXG4gIGxlZnRTaGlwczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LXNoaXBzXCIpLFxyXG4gIHBsYXllclR3b1R5cGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDItdHlwZVwiKSxcclxuICByaWdodFNoaXBzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXNoaXBzXCIpLFxyXG4gIHJpZ2h0R3JpZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1ncmlkXCIpLFxyXG4gIGdhbWVUZXh0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtdGV4dFwiKSxcclxuICBnYW1lQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtYnV0dG9uXCIpLFxyXG4gIHAxVHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwMS10eXBlXCIpLFxyXG4gIHAyVHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwMi10eXBlXCIpLFxyXG4gIHJvdGF0ZUJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGUtYnV0dG9uXCIpLFxyXG4gIHNjcmVlbkJsb2NrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcmVlbi1ibG9ja1wiKSxcclxuICBleGl0U2NyZWVuQmxvY2tCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuLWJsb2NrLWJ1dHRvblwiKSxcclxuICBzY3JlZW5CbG9ja1RleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuLWJsb2NrLXRleHRcIiksXHJcbn07XHJcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNwdSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gbnVsbDtcclxuICAgIHRoaXMuZW5lbXlCb2FyZCA9IG51bGw7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5jcHUgPSBjcHU7XHJcbiAgICB0aGlzLmlkZWFsTW92ZXMgPSBbXTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXHJcbiAgICAgIG5ldyBTaGlwKDUpLFxyXG4gICAgICBuZXcgU2hpcCg0KSxcclxuICAgICAgbmV3IFNoaXAoMyksXHJcbiAgICAgIG5ldyBTaGlwKDMpLFxyXG4gICAgICBuZXcgU2hpcCgyKSxcclxuICAgIF07XHJcbiAgICB0aGlzLnNoaXBBbGlhc2VzID0ge1xyXG4gICAgICBjYXJyaWVyOiB0aGlzLnNoaXBzWzBdLFxyXG4gICAgICBiYXR0bGVzaGlwOiB0aGlzLnNoaXBzWzFdLFxyXG4gICAgICBjcnVpc2VyOiB0aGlzLnNoaXBzWzJdLFxyXG4gICAgICBzdWJtYXJpbmU6IHRoaXMuc2hpcHNbM10sXHJcbiAgICAgIGRlc3Ryb3llcjogdGhpcy5zaGlwc1s0XSxcclxuICAgIH07XHJcbiAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXRCb2FyZChuZXdCb2FyZCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ld0JvYXJkO1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBzZXRFbmVteUJvYXJkKGJvYXJkKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZW5lbXlCb2FyZCA9IGJvYXJkKTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2VsZWN0ZWRTaGlwKHsgeCwgeSwgZGlyZWN0aW9uIH0pIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU2hpcCAmJiB0aGlzLnNoaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFNoaXApID4gLTEpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcCh7IHgsIHksIGRpcmVjdGlvbiwgc2hpcDogdGhpcy5zZWxlY3RlZFNoaXAgfSk7XHJcbiAgICAgICAgdGhpcy5zaGlwcy5zcGxpY2UodGhpcy5zaGlwcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRTaGlwKSwgMSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnNlbGVjdGVkU2hpcCAmJlxyXG4gICAgICB0aGlzLnNoaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFNoaXApID09PSAtMVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGRvbid0IGhhdmUgdGhhdCBzaGlwIVwiKTtcclxuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzaGlwIHNlbGVjdGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIHdoaWxlICh0aGlzLnNoaXBzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IHRoaXMuc2hpcHNbMF07XHJcbiAgICAgIGxldCBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcclxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIGRpcmVjdGlvbiA9IFwidmVydGljYWxcIjtcclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhpcy5wbGFjZVNlbGVjdGVkU2hpcCh7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnJhbmRvbUNvb3JkaW5hdGUoKSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob290KHgsIHkpIHtcclxuICAgIGlmIChTdGF0ZS5nYW1lT3ZlcikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdhbWUgaXMgb3Zlci5cIik7XHJcbiAgICBpZiAoU3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXSAhPSB0aGlzKSB7XHJcbiAgICAgIGlmIChTdGF0ZS5wbGF5ZXJzW051bWJlcighU3RhdGUudHVybildICE9IHRoaXMpIHtcclxuICAgICAgICAvL2lmIHRoaXMgaGFwcGVucywgdGhpcyBwbGF5ZXIgaXNuJ3QgaW4gdGhlIGdhbWUgYW55bW9yZSBkdWUgdG8gYSByZXN0YXJ0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkl0J3Mgbm90IHlvdXIgdHVybiB5ZXQhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlSGl0KHgsIHkpO1xyXG4gICAgaWYgKHJlc3VsdCA9PSBcImludmFsaWRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaG9zZSBjb29yZGluYXRlcyBhcmUgaW52YWxpZCFcIiwgeyBjYXVzZTogXCJpbnZhbGlkXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0ID09IFwicmVwZWF0XCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhvc2UgY29vcmRpbmF0ZXMgaGF2ZSBhbHJlYWR5IGJlZW4gc2hvdCBhdCFcIiwge1xyXG4gICAgICAgIGNhdXNlOiBcInJlcGVhdFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gc2hvdCB0aGUgc3F1YXJlIGF0ICR7eH0sICR7eX0uYCk7XHJcbiAgICBpZiAocmVzdWx0ID09IFwiaGl0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJdCB3YXMgYSBoaXQhXCIpO1xyXG4gICAgICBpZiAodGhpcy5lbmVteUJvYXJkLmFsbFN1bmsoKSkge1xyXG4gICAgICAgIENvbnRyb2xsZXIuZW5kR2FtZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gXCJtaXNzXCIpIGNvbnNvbGUubG9nKFwiSXQgd2FzIGEgbWlzcy4uLlwiKTtcclxuICAgIENvbnRyb2xsZXIuZW5kVHVybigpO1xyXG4gICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQsIHg6IHgsIHk6IHkgfTtcclxuICB9XHJcblxyXG4gIHJhbmRvbUNvb3JkaW5hdGUoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgQ1BVc2hvb3QoKSB7XHJcbiAgICBsZXQgc2hvdCA9IGZhbHNlO1xyXG4gICAgbGV0IHNob3REYXRhID0gbnVsbDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aGlsZSAoIXNob3QpIHtcclxuICAgICAgICBpZiAoU3RhdGUuZ2FtZU92ZXIgfHwgIVN0YXRlLnBsYXlpbmcgfHwgU3RhdGUucGxhY2luZ1NoaXBzKSByZXR1cm47XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICh0aGlzLmlkZWFsTW92ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgc2hvdERhdGEgPSB0aGlzLnNob290KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGVhbE1vdmVzWzBdWzBdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGVhbE1vdmVzWzBdWzFdXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGlzLmlkZWFsTW92ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVyci5jYXVzZSA9PSBcImludmFsaWRcIiB8fCBlcnIuY2F1c2UgPT0gXCJyZXBlYXRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGVhbE1vdmVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG90RGF0YSA9IHRoaXMuc2hvb3QoXHJcbiAgICAgICAgICAgICAgdGhpcy5yYW5kb21Db29yZGluYXRlKCksXHJcbiAgICAgICAgICAgICAgdGhpcy5yYW5kb21Db29yZGluYXRlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzaG90ID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChzaG90RGF0YS5yZXN1bHQgPT0gXCJoaXRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlkZWFsTW92ZXMucHVzaChcclxuICAgICAgICAgICAgICBbc2hvdERhdGEueCArIDEsIHNob3REYXRhLnldLFxyXG4gICAgICAgICAgICAgIFtzaG90RGF0YS54IC0gMSwgc2hvdERhdGEueV0sXHJcbiAgICAgICAgICAgICAgW3Nob3REYXRhLngsIHNob3REYXRhLnkgKyAxXSxcclxuICAgICAgICAgICAgICBbc2hvdERhdGEueCwgc2hvdERhdGEueSAtIDFdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG1vdmUgb2YgdGhpcy5pZGVhbE1vdmVzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIXRoaXMuYm9hcmQuc3F1YXJlRXhpc3RzKG1vdmVbMF0sIG1vdmVbMV0pIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5lbmVteUJvYXJkLnNxdWFyZU5vdEhpdChtb3ZlWzBdLCBtb3ZlWzFdKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGVhbE1vdmVzLnNwbGljZSh0aGlzLmlkZWFsTW92ZXMuaW5kZXhPZihtb3ZlKSwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgICB9XHJcbiAgICB9LCAyMDAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vcGFnZVwiO1xyXG5cclxuLy9zbyB0aGF0IHRoZSBjb250aW51ZSBidXR0b24ga25vd3Mgd2hhdCB0byB0ZWxsIHRoZSBjb250cm9sbGVyXHJcbmxldCBwMVBsYWNlZFNoaXBzID0gZmFsc2U7XHJcblxyXG4vKippZiB5b3UncmUgYWxyZWFkeSBob3ZlcmluZyBvdmVyIGEgc3F1YXJlLCB5b3UgaGF2ZSB0byBob3ZlciBvdmVyIGEgZGlmZmVyZW50IG9uZVxyXG50byBzZWUgdGhlIHJvdGF0aW9uLiBzb3JyeSA6KCAqL1xyXG5sZXQgc2VsZWN0ZWREaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcclxuUGFnZS5yb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzZWxlY3RlZERpcmVjdGlvbiA9XHJcbiAgICBzZWxlY3RlZERpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xyXG59KTtcclxuUGFnZS5leGl0U2NyZWVuQmxvY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBSZW5kZXJlci50b2dnbGVTY3JlZW5CbG9jayhcIm9mZlwiKTtcclxufSk7XHJcblxyXG5sZXQgYnV0dG9uQ2FsbGJhY2tzID0ge1xyXG4gIG5ld0dhbWVDQigpIHtcclxuICAgIFJlbmRlcmVyLnRvZ2dsZVR5cGVzKFwib2ZmXCIpO1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlUm90YXRlQnV0dG9uKFwib25cIik7XHJcbiAgICBsZXQgaXNQMUNQVSA9IGZhbHNlO1xyXG4gICAgbGV0IGlzUDJDUFUgPSBmYWxzZTtcclxuICAgIGZvciAobGV0IHJhZGlvIG9mIFBhZ2UucDFUeXBlKSB7XHJcbiAgICAgIGlmIChyYWRpby5jaGVja2VkICYmIHJhZGlvLnZhbHVlID09IFwiQ1BVXCIpIGlzUDFDUFUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcmFkaW8gb2YgUGFnZS5wMlR5cGUpIHtcclxuICAgICAgaWYgKHJhZGlvLmNoZWNrZWQgJiYgcmFkaW8udmFsdWUgPT0gXCJDUFVcIikgaXNQMkNQVSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBDb250cm9sbGVyLm5ld0dhbWUoaXNQMUNQVSwgaXNQMkNQVSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdhbWUgc3RhcnRlZCFcIik7XHJcbiAgfSxcclxuXHJcbiAgY29udGludWVDQigpIHtcclxuICAgIHNlbGVjdGVkRGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICBpZiAoIXAxUGxhY2VkU2hpcHMgJiYgIVN0YXRlLnBsYXllcnNbMF0uY3B1KSB7XHJcbiAgICAgIGlmIChTdGF0ZS5wbGF5ZXJzWzBdLnNoaXBzLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzdGlsbCBoYXZlIHNoaXBzIGxlZnQgdG8gcGxhY2UhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIENvbnRyb2xsZXIuc3RhcnRTaGlwUGxhY2VtZW50KDEpO1xyXG4gICAgICBwMVBsYWNlZFNoaXBzID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChTdGF0ZS5wbGF5ZXJzWzFdLnNoaXBzLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzdGlsbCBoYXZlIHNoaXBzIGxlZnQgdG8gcGxhY2UhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIENvbnRyb2xsZXIuc3RhcnRHYW1lKCk7XHJcbiAgICAgIHAxUGxhY2VkU2hpcHMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXN0YXJ0Q0IoKSB7XHJcbiAgICBSZW5kZXJlci50b2dnbGVUeXBlcyhcIm9uXCIpO1xyXG4gICAgQ29udHJvbGxlci5yZXN0YXJ0KCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZW5kZXJlciA9IHtcclxuICB1cGRhdGVUZXh0KCkge1xyXG4gICAgaWYgKCFTdGF0ZS5wbGF5aW5nKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZVRleHQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgfSBlbHNlIGlmIChTdGF0ZS5nYW1lT3Zlcikge1xyXG4gICAgICBQYWdlLmdhbWVUZXh0LnRleHRDb250ZW50ID0gYCR7U3RhdGUud2lubmluZ1BsYXllci5uYW1lfSB3aW5zISEhISEhIWA7XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnBsYWNpbmdTaGlwcykge1xyXG4gICAgICBQYWdlLmdhbWVUZXh0LnRleHRDb250ZW50ID0gXCJQcmVzcyBSIHRvIHJvdGF0ZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUGFnZS5nYW1lVGV4dC50ZXh0Q29udGVudCA9IGAke1N0YXRlLnBsYXllcnNbU3RhdGUudHVybl0ubmFtZX0ncyB0dXJuYDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGRhdGVTY3JlZW5CbG9ja1RleHQocGxheWVySW5kZXgpIHtcclxuICAgIFBhZ2Uuc2NyZWVuQmxvY2tUZXh0LnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllckluZGV4ICsgMX0ncyB0dXJuYDtcclxuICB9LFxyXG5cclxuICB0b2dnbGVTY3JlZW5CbG9jayhzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlID09IFwib25cIikge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjcmVlbkJsb2NrVGV4dCgpO1xyXG4gICAgICBQYWdlLnNjcmVlbkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09IFwib2ZmXCIpIFBhZ2Uuc2NyZWVuQmxvY2suY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICB9LFxyXG5cclxuICB0b2dnbGVUeXBlczogZnVuY3Rpb24gdG9nZ2xlUGxheWVyVHlwZXNTZWxlY3Rpb24oc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgUGFnZS5wbGF5ZXJPbmVUeXBlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIFBhZ2UucGxheWVyVHdvVHlwZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBcIm9mZlwiKSB7XHJcbiAgICAgIFBhZ2UucGxheWVyT25lVHlwZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICBQYWdlLnBsYXllclR3b1R5cGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0b2dnbGVSb3RhdGVCdXR0b24oc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgUGFnZS5yb3RhdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gXCJvZmZcIikge1xyXG4gICAgICBQYWdlLnJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUJ1dHRvbkxpc3RlbmVycygpIHtcclxuICAgIGZvciAobGV0IGxpc3RlbmVyIGluIGJ1dHRvbkNhbGxiYWNrcykge1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1dHRvbkNhbGxiYWNrc1tsaXN0ZW5lcl0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldEJ1dHRvbih0eXBlKSB7XHJcbiAgICB0aGlzLnJlbW92ZUJ1dHRvbkxpc3RlbmVycygpO1xyXG5cclxuICAgIFBhZ2UuZ2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy51cGRhdGVUZXh0KTtcclxuICAgIGlmICh0eXBlID09IFwibmV3XCIpIHtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXcgZ2FtZVwiO1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1dHRvbkNhbGxiYWNrcy5uZXdHYW1lQ0IpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwiY29udGludWVcIikge1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRpbnVlXCI7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnV0dG9uQ2FsbGJhY2tzLmNvbnRpbnVlQ0IpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwicmVzdGFydFwiKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzdGFydFwiO1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1dHRvbkNhbGxiYWNrcy5yZXN0YXJ0Q0IpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNsZWFyU2hpcHMoKSB7XHJcbiAgICBmb3IgKGxldCBzaGlwIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC13cmFwcGVyXCIpKSB7XHJcbiAgICAgIHNoaXAucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlU2hpcFNlbGVjdGlvbih7IHNpZGUsIHN0YXRlIH0pIHtcclxuICAgIGlmIChzaWRlID09IFwibGVmdFwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgICBQYWdlLmxlZnRTaGlwcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIFBhZ2UubGVmdEdyaWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBcIm9mZlwiKSB7XHJcbiAgICAgICAgUGFnZS5sZWZ0U2hpcHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBQYWdlLmxlZnRHcmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2lkZSA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgaWYgKHN0YXRlID09IFwib25cIikge1xyXG4gICAgICAgIFBhZ2UucmlnaHRTaGlwcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIFBhZ2UucmlnaHRHcmlkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gXCJvZmZcIikge1xyXG4gICAgICAgIFBhZ2UucmlnaHRTaGlwcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIFBhZ2UucmlnaHRHcmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwb3B1bGF0ZVNoaXBzKHNpZGUpIHtcclxuICAgIHRoaXMuY2xlYXJTaGlwcygpO1xyXG4gICAgbGV0IHBsYXllciA9IHNpZGUgPT0gXCJyaWdodFwiID8gMCA6IDE7XHJcbiAgICBmb3IgKGxldCBzaGlwIG9mIFN0YXRlLnBsYXllcnNbcGxheWVyXS5zaGlwcykge1xyXG4gICAgICBjb25zdCBzaGlwSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNoaXBIVE1MLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXdyYXBwZXJcIik7XHJcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICBzaGlwTmFtZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1uYW1lXCIpO1xyXG4gICAgICBzaGlwTmFtZS50ZXh0Q29udGVudCA9IE9iamVjdC5rZXlzKFN0YXRlLnBsYXllcnNbcGxheWVyXS5zaGlwQWxpYXNlcylbXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhTdGF0ZS5wbGF5ZXJzW3BsYXllcl0uc2hpcEFsaWFzZXMpLmluZGV4T2Yoc2hpcClcclxuICAgICAgXTtcclxuICAgICAgY29uc3Qgc2hpcENlbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgc2hpcENlbGxzLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxzLXdyYXBwZXJcIik7XHJcbiAgICAgIHNoaXBIVE1MLmFwcGVuZENoaWxkKHNoaXBOYW1lKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxcIik7XHJcbiAgICAgICAgc2hpcENlbGxzLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcclxuICAgICAgfVxyXG4gICAgICBzaGlwSFRNTC5hcHBlbmRDaGlsZChzaGlwQ2VsbHMpO1xyXG4gICAgICBzaGlwSFRNTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIFN0YXRlLnBsYXllcnNbcGxheWVyXS5zZWxlY3RlZFNoaXAgPSBzaGlwO1xyXG4gICAgICAgIGZvciAobGV0IHNlbGVjdGVkU2hpcCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZFNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwSFRNTC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoc2lkZSA9PSBcImxlZnRcIikgUGFnZS5sZWZ0U2hpcHMuYXBwZW5kQ2hpbGQoc2hpcEhUTUwpO1xyXG4gICAgICBlbHNlIGlmIChzaWRlID09IFwicmlnaHRcIikgUGFnZS5yaWdodFNoaXBzLmFwcGVuZENoaWxkKHNoaXBIVE1MKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjbGVhckdyaWQoZ3JpZCkge1xyXG4gICAgaWYgKGdyaWQgPT0gXCJsZWZ0XCIpIHtcclxuICAgICAgd2hpbGUgKFBhZ2UubGVmdEdyaWQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFBhZ2UubGVmdEdyaWQucmVtb3ZlQ2hpbGQoUGFnZS5sZWZ0R3JpZC5sYXN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGdyaWQgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgIHdoaWxlIChQYWdlLnJpZ2h0R3JpZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgUGFnZS5yaWdodEdyaWQucmVtb3ZlQ2hpbGQoUGFnZS5yaWdodEdyaWQubGFzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZ3JpZCEgTXVzdCBiZSAnbGVmdCcgb3IgJ3JpZ2h0Jy5cIik7XHJcbiAgfSxcclxuXHJcbiAgY2xlYXJIb3ZlcnMoKSB7XHJcbiAgICBmb3IgKGxldCBob3ZlckNlbGwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3ZlclwiKSkge1xyXG4gICAgICBob3ZlckNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgc2hpcEhvdmVyIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1ob3ZlclwiKSkge1xyXG4gICAgICBzaGlwSG92ZXIuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtaG92ZXJcIik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBiYWRQbGFjZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYWQtcGxhY2VtZW50XCIpKSB7XHJcbiAgICAgIGJhZFBsYWNlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmFkLXBsYWNlbWVudFwiKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwb3B1bGF0ZUdyaWQoeyBncmlkID0gbGVmdCwgaGl0TWFwID0gbnVsbCwgc2hpcE1hcCA9IG51bGwgfSkge1xyXG4gICAgaWYgKGdyaWQgIT0gXCJsZWZ0XCIgJiYgZ3JpZCAhPSBcInJpZ2h0XCIpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZ3JpZCEgTXVzdCBiZSAnbGVmdCcgb3IgJ3JpZ2h0Jy5cIik7XHJcbiAgICB0aGlzLmNsZWFyR3JpZChncmlkKTtcclxuICAgIGlmIChoaXRNYXAgPT0gbnVsbCAmJiBzaGlwTWFwID09IG51bGwpIHJldHVybjtcclxuICAgIGZvciAobGV0IHlDb29yZCA9IDk7IHlDb29yZCA+PSAwOyB5Q29vcmQtLSkge1xyXG4gICAgICBmb3IgKGxldCB4Q29vcmQgPSAwOyB4Q29vcmQgPCAxMDsgeENvb3JkKyspIHtcclxuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHNoaXBNYXAgJiYgc2hpcE1hcFt4Q29vcmRdW3lDb29yZF0gIT09IG51bGwpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGl0TWFwICYmIGhpdE1hcFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCIpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoaXRNYXAgJiYgaGl0TWFwW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IHhDb29yZDtcclxuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IHlDb29yZDtcclxuICAgICAgICBjZWxsLmRhdGFzZXQuZ3JpZCA9IGdyaWQ7XHJcblxyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcGxheWVyID0gZ3JpZCA9PSBcImxlZnRcIiA/IDEgOiAyO1xyXG4gICAgICAgIGxldCBwbGF5ZXJJbmRleCA9IHBsYXllciAtIDE7XHJcbiAgICAgICAgbGV0IG90aGVyUGxheWVySW5kZXggPSBOdW1iZXIoIXBsYXllckluZGV4KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBTdGF0ZS5nYW1lT3ZlciAmJlxyXG4gICAgICAgICAgU3RhdGUud2lubmluZ1BsYXllciA9PSBTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwid2luXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU3RhdGUuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImxvc2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoU3RhdGUucGxhY2luZ1NoaXBzKSB7XHJcbiAgICAgICAgICAgIGlmICghU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwKSByZXR1cm47XHJcbiAgICAgICAgICAgIFN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLnBsYWNlU2VsZWN0ZWRTaGlwKHtcclxuICAgICAgICAgICAgICB4OiB4Q29vcmQsXHJcbiAgICAgICAgICAgICAgeTogeUNvb3JkLFxyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWREaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZ3JpZCA9PSBcImxlZnRcIikgdGhpcy5wb3B1bGF0ZVNoaXBzKFwicmlnaHRcIik7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wb3B1bGF0ZVNoaXBzKFwibGVmdFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2VsZWN0ZWRTaGlwIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkU2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoQ29udHJvbGxlci5jYW5DbGljayhvdGhlclBsYXllckluZGV4LCB4Q29vcmQsIHlDb29yZCkpIHtcclxuICAgICAgICAgICAgU3RhdGUucGxheWVyc1tvdGhlclBsYXllckluZGV4XS5zaG9vdCh4Q29vcmQsIHlDb29yZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoU3RhdGUucGxhY2luZ1NoaXBzKSB7XHJcbiAgICAgICAgICAgIGlmICghU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCB2YWxpZFBsYWNlbWVudCA9IFN0YXRlLnBsYXllcnNbXHJcbiAgICAgICAgICAgICAgcGxheWVySW5kZXhcclxuICAgICAgICAgICAgXS5ib2FyZC52YWxpZFBsYWNlbWVudCh7XHJcbiAgICAgICAgICAgICAgeDogeENvb3JkLFxyXG4gICAgICAgICAgICAgIHk6IHlDb29yZCxcclxuICAgICAgICAgICAgICBkaXJlY3Rpb246IHNlbGVjdGVkRGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgIGxlbmd0aDogU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwLmxlbmd0aCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgIGkgPCBTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5zZWxlY3RlZFNoaXAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRDZWxsID0gbnVsbDtcclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgIGAuY2VsbFtkYXRhLXg9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZCArIGlcclxuICAgICAgICAgICAgICAgICAgfVwiXVtkYXRhLXk9XCIke3lDb29yZH1cIl1bZGF0YS1ncmlkPVwiJHtncmlkfVwiXWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZERpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgIGAuY2VsbFtkYXRhLXg9XCIke3hDb29yZH1cIl1bZGF0YS15PVwiJHtcclxuICAgICAgICAgICAgICAgICAgICB5Q29vcmQgLSBpXHJcbiAgICAgICAgICAgICAgICAgIH1cIl1bZGF0YS1ncmlkPVwiJHtncmlkfVwiXWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZENlbGwgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgaWYgKHZhbGlkUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiYmFkLXBsYWNlbWVudFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoQ29udHJvbGxlci5jYW5DbGljayhvdGhlclBsYXllckluZGV4LCB4Q29vcmQsIHlDb29yZCkpIHtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JpZCA9PSBcImxlZnRcIlxyXG4gICAgICAgICAgPyBQYWdlLmxlZnRHcmlkLmFwcGVuZENoaWxkKGNlbGwpXHJcbiAgICAgICAgICA6IFBhZ2UucmlnaHRHcmlkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbikge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW47XHJcbiAgICB0aGlzLmhpdHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzICs9IDE7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xyXG4gIH1cclxuXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTdGF0ZSA9IHtcclxuICBwbGF5aW5nOiBmYWxzZSxcclxuICBwbGF5ZXJzOiBbXSxcclxuICB0dXJuOiAwLFxyXG4gIGdhbWVPdmVyOiBmYWxzZSxcclxuICB3aW5uaW5nUGxheWVyOiBudWxsLFxyXG4gIHBsYWNpbmdTaGlwczogZmFsc2UsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gXCIuL3JlbmRlcmVyXCI7XHJcblxyXG5SZW5kZXJlci5zZXRCdXR0b24oXCJuZXdcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==