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
            for (let i = 0; i < this.lastHits.length - 1; i++) {
              if (
                shotData.x < this.lastHits[i].x + 1 ||
                shotData.x > this.lastHits[i].x - 1
              ) {
                this.currentDirection = "horizontal";
              } else if (
                shotData.y < this.lastHits[i].y + 1 ||
                shotData.y > this.lastHits[1] - 1
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
            _state__WEBPACK_IMPORTED_MODULE_1__.State.players[playerIndex].selectedShip = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUI7QUFDdEM7QUFDQSx5REFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwid2F0ZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwicm90YXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIm1pc3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiaGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcImZpbGU6Ly8vQzovb2Rpbi9qcy9vZGluLWJhdHRsZXNoaXAvc3JjL21pc3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NyZWVuLWJsb2NrLXRleHQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2stYnV0dG9uIHtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2stYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGUtaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50eXBlLWlucHV0IGlucHV0IHtcXHJcXG4gIGhlaWdodDogM3ZoO1xcclxcbiAgd2lkdGg6IGNhbGMoMC43dncgKyAydmgpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAzZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtd3JhcHBlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXdyYXBwZXI6aG92ZXIgLnNoaXAtY2VsbHMtd3JhcHBlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2VsbHMtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQgLnNoaXAtY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLWhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmJhZC1wbGFjZW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2VsbCB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGhlaWdodDogMnZ3O1xcclxcbiAgd2lkdGg6IDJ2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjF2dyArIDE2cHgpO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDE1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNyaWdodC1zaGlwcyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1zaGlwcyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdGF0ZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCBibGFjayk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWdyaWQsXFxyXFxuI2xlZnQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtZ3JpZCxcXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmxvc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSAxOTkgMTk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwud2luIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjQwIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcCxcXHJcXG4uY2VsbC5sb3NlLnNoaXAsXFxyXFxuLmNlbGwud2luLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmRpdi5oaWRkZW4sXFxyXFxuZGl2LmhpZGRlbiAqLFxcclxcbi5oaWRkZW4sXFxyXFxuLmhpZGRlbiAqIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1EQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdEQUFnRDtFQUNoRCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbURBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseURBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseURBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5REFBc0U7QUFDeEU7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJ3YXRlci5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2sge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5zY3JlZW4tYmxvY2stdGV4dCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jay1idXR0b24ge1xcclxcbiAgZ3JpZC1yb3c6IDI7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcmVlbi1ibG9jay1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGUtaW5wdXQgaW5wdXQge1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICB3aWR0aDogY2FsYygwLjd2dyArIDJ2aCk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBkaXYgaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBkaXYgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDElO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDNmcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGhlaWdodDogNjB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDYwdmg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC13cmFwcGVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtd3JhcHBlcjpob3ZlciAuc2hpcC1jZWxscy13cmFwcGVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jZWxscy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCAuc2hpcC1jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnNoaXAtaG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuYmFkLXBsYWNlbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jZWxsIHtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgaGVpZ2h0OiAydnc7XFxyXFxuICB3aWR0aDogMnZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDEuMXZ3ICsgMTZweCk7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0LXNoaXBzIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LXNoaXBzIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jcm90YXRlLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgaGVpZ2h0OiAyNSU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcInJvdGF0ZS5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCBibGFjayk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWdyaWQsXFxyXFxuI2xlZnQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtZ3JpZCxcXHJcXG4jcmlnaHQtc2hpcHMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmxvc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSAxOTkgMTk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwud2luIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjQwIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJtaXNzLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaGl0LnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc2hpcCxcXHJcXG4uY2VsbC5sb3NlLnNoaXAsXFxyXFxuLmNlbGwud2luLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5zaGlwLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZmlsZTovLy9DOi9vZGluL2pzL29kaW4tYmF0dGxlc2hpcC9zcmMvbWlzcy5wbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5ob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmRpdi5oaWRkZW4sXFxyXFxuZGl2LmhpZGRlbiAqLFxcclxcbi5oaWRkZW4sXFxyXFxuLmhpZGRlbiAqIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xsZXIgPSB7XHJcbiAgbmV3R2FtZShwMWNwdSwgcDJjcHUpIHtcclxuICAgIFN0YXRlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHAxID0gbmV3IFBsYXllcihcIlBsYXllciAxXCIsIHAxY3B1KTtcclxuICAgIGxldCBwMiA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXIgMlwiLCBwMmNwdSk7XHJcbiAgICBTdGF0ZS5wbGF5ZXJzLnB1c2gocDEsIHAyKTtcclxuICAgIHAxLnNldEJvYXJkKG5ldyBHYW1lYm9hcmQoKSk7XHJcbiAgICBwMi5zZXRCb2FyZChuZXcgR2FtZWJvYXJkKCkpO1xyXG4gICAgcDEuc2V0RW5lbXlCb2FyZChwMi5ib2FyZCk7XHJcbiAgICBwMi5zZXRFbmVteUJvYXJkKHAxLmJvYXJkKTtcclxuXHJcbiAgICBTdGF0ZS5wbGFjaW5nU2hpcHMgPSB0cnVlO1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgdGhpcy5zdGFydFNoaXBQbGFjZW1lbnQoMCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcGxheWVyczogU3RhdGUucGxheWVycyB9O1xyXG4gIH0sXHJcblxyXG4gIHJlc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlc2V0U3RhdGUoKTtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIFJlbmRlcmVyLnNldEJ1dHRvbihcIm5ld1wiKTtcclxuICB9LFxyXG5cclxuICByZXNldFN0YXRlKCkge1xyXG4gICAgU3RhdGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbGVhclBsYXllcnMoKTtcclxuICAgIFN0YXRlLnR1cm4gPSAwO1xyXG4gICAgU3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIFN0YXRlLndpbm5pbmdQbGF5ZXIgPSBudWxsO1xyXG4gICAgU3RhdGUucGxhY2luZ1NoaXBzID0gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnRTaGlwUGxhY2VtZW50KHBsYXllckluZGV4KSB7XHJcbiAgICBpZiAocGxheWVySW5kZXggPT0gMCkge1xyXG4gICAgICBpZiAoIVN0YXRlLnBsYXllcnNbMF0uY3B1KSB7XHJcbiAgICAgICAgUmVuZGVyZXIudG9nZ2xlU2hpcFNlbGVjdGlvbih7IHNpZGU6IFwibGVmdFwiLCBzdGF0ZTogXCJvZmZcIiB9KTtcclxuICAgICAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJyaWdodFwiLCBzdGF0ZTogXCJvblwiIH0pO1xyXG4gICAgICAgIFJlbmRlcmVyLnBvcHVsYXRlU2hpcHMoXCJyaWdodFwiKTtcclxuICAgICAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJjb250aW51ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTdGF0ZS5wbGF5ZXJzWzBdLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTaGlwUGxhY2VtZW50KDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllckluZGV4ID09IDEpIHtcclxuICAgICAgaWYgKCFTdGF0ZS5wbGF5ZXJzWzFdLmNwdSkge1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcInJpZ2h0XCIsIHN0YXRlOiBcIm9mZlwiIH0pO1xyXG4gICAgICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcImxlZnRcIiwgc3RhdGU6IFwib25cIiB9KTtcclxuICAgICAgICBSZW5kZXJlci5wb3B1bGF0ZVNoaXBzKFwibGVmdFwiKTtcclxuICAgICAgICBSZW5kZXJlci5zZXRCdXR0b24oXCJjb250aW51ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTdGF0ZS5wbGF5ZXJzWzFdLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICBTdGF0ZS5wbGFjaW5nU2hpcHMgPSBmYWxzZTtcclxuICAgIFJlbmRlcmVyLnRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlOiBcImxlZnRcIiwgc3RhdGU6IFwib2ZmXCIgfSk7XHJcbiAgICBSZW5kZXJlci50b2dnbGVTaGlwU2VsZWN0aW9uKHsgc2lkZTogXCJyaWdodFwiLCBzdGF0ZTogXCJvZmZcIiB9KTtcclxuICAgIFJlbmRlcmVyLnNldEJ1dHRvbihcInJlc3RhcnRcIik7XHJcbiAgICBSZW5kZXJlci50b2dnbGVSb3RhdGVCdXR0b24oXCJvZmZcIik7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICBpZiAoU3RhdGUucGxheWVyc1swXS5jcHUpIFN0YXRlLnBsYXllcnNbMF0uQ1BVc2hvb3QoKTtcclxuICB9LFxyXG5cclxuICBlbmRHYW1lKCkge1xyXG4gICAgU3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgU3RhdGUud2lubmluZ1BsYXllciA9IFN0YXRlLnBsYXllcnNbU3RhdGUudHVybl07XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICBjb25zb2xlLmxvZyhgVGhlIGdhbWUgaXMgb3Zlci4gJHtTdGF0ZS53aW5uaW5nUGxheWVyLm5hbWV9IHdpbnMhYCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqICBUZWxscyB0aGUgcmVuZGVyZXIgd2hhdCB0byBkaXNwbGF5IGluIHRoZSBncmlkc1xyXG4gICAqIGJhc2VkIG9uIHdobydzIHBsYXlpbmcgYW5kIHdoZXRoZXIgdGhleSdyZSBhIENQVVxyXG4gICAqIHRoZW4gdXBkYXRlcyB0aGUgXCJYIHBsYXllcidzIHR1cm5cIiB0ZXh0LiAqL1xyXG4gIHJlZnJlc2hWaWV3KCkge1xyXG4gICAgLy8gSWYgYSBnYW1lIGhhc24ndCBiZWVuIHN0YXJ0ZWQsIGVtcHR5IGJvdGggZ3JpZHNcclxuICAgIGlmICghU3RhdGUucGxheWluZykge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoeyBncmlkOiBcImxlZnRcIiwgaGl0TWFwOiBudWxsLCBzaGlwTWFwOiBudWxsIH0pO1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoeyBncmlkOiBcInJpZ2h0XCIsIGhpdE1hcDogbnVsbCwgc2hpcE1hcDogbnVsbCB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIFN0YXRlLnBsYWNpbmdTaGlwcyB8fFxyXG4gICAgICAoU3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXS5jcHUgJiYgU3RhdGUucGxheWVyc1tOdW1iZXIoIVN0YXRlLnR1cm4pXS5jcHUpXHJcblxyXG4gICAgICAvKiogZGlzcGxheSBhIGZ1bGwgdmlldyBvZiBib3RoIHBsYXllcidzIGJvYXJkcyBpZiBib3RoIHBsYXllcnMgYXJlIENQVXNcclxuICAgICBvciBpZiBzaGlwcyBhcmUgYmVpbmcgcGxhY2VkKi9cclxuICAgICkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5zaGlwTWFwLFxyXG4gICAgICB9KTtcclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgICBzaGlwTWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLnNoaXBNYXAsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBJZiBpdCdzIHAxJ3MgdHVybiBhbmQgcDEgaXMgYSBDUFUsIGRpc3BsYXkgcDAncyB2aWV3XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMSAmJiBTdGF0ZS5wbGF5ZXJzWzFdLmNwdSkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMF0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1sxXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBJZiBpdCdzIHAwJ3MgdHVybiBhbmQgcDAgaXMgYSBDUFUsIGRpc3BsYXkgcDEncyB2aWV3XHJcbiAgICB9IGVsc2UgaWYgKFN0YXRlLnR1cm4gPT0gMCAmJiBTdGF0ZS5wbGF5ZXJzWzBdLmNwdSkge1xyXG4gICAgICBSZW5kZXJlci5wb3B1bGF0ZUdyaWQoe1xyXG4gICAgICAgIGdyaWQ6IFwibGVmdFwiLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgICAgc2hpcE1hcDogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIG90aGVyd2lzZSBkaXNwbGF5IHRoZSBjdXJyZW50IHBsYXllcidzIHZpZXdcclxuICAgIH0gZWxzZSBpZiAoU3RhdGUudHVybiA9PSAwKSB7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJsZWZ0XCIsXHJcbiAgICAgICAgc2hpcE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5zaGlwTWFwLFxyXG4gICAgICAgIGhpdE1hcDogU3RhdGUucGxheWVyc1swXS5ib2FyZC5oaXRNYXAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUmVuZGVyZXIucG9wdWxhdGVHcmlkKHtcclxuICAgICAgICBncmlkOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzFdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgICBzaGlwTWFwOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoU3RhdGUudHVybiA9PSAxKSB7XHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJsZWZ0XCIsXHJcbiAgICAgICAgaGl0TWFwOiBTdGF0ZS5wbGF5ZXJzWzBdLmJvYXJkLmhpdE1hcCxcclxuICAgICAgICBzaGlwTWFwOiBudWxsLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJlbmRlcmVyLnBvcHVsYXRlR3JpZCh7XHJcbiAgICAgICAgZ3JpZDogXCJyaWdodFwiLFxyXG4gICAgICAgIHNoaXBNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuc2hpcE1hcCxcclxuICAgICAgICBoaXRNYXA6IFN0YXRlLnBsYXllcnNbMV0uYm9hcmQuaGl0TWFwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFJlbmRlcmVyLnVwZGF0ZVRleHQoKTtcclxuICB9LFxyXG5cclxuICBibG9ja1NjcmVlbigpIHtcclxuICAgIHNldFRpbWVvdXQoUmVuZGVyZXIudG9nZ2xlU2NyZWVuQmxvY2soXCJvblwiKSwgMjAwMCk7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZW5kVHVybigpIHtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIGlmICghU3RhdGUucGxheWVyc1swXS5jcHUgJiYgIVN0YXRlLnBsYXllcnNbMV0uY3B1KSB7XHJcbiAgICAgIGxldCBuZXh0VHVybiA9IE51bWJlcighU3RhdGUudHVybik7XHJcbiAgICAgIFN0YXRlLnR1cm4gPSAtMTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgUmVuZGVyZXIudG9nZ2xlU2NyZWVuQmxvY2soXCJvblwiKTtcclxuICAgICAgICBSZW5kZXJlci51cGRhdGVTY3JlZW5CbG9ja1RleHQobmV4dFR1cm4pO1xyXG4gICAgICAgIFN0YXRlLnR1cm4gPSBuZXh0VHVybjtcclxuICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgU3RhdGUudHVybiA9IE51bWJlcighU3RhdGUudHVybik7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgICAgaWYgKFN0YXRlLnBsYXllcnNbU3RhdGUudHVybl0uY3B1KSBTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dLkNQVXNob290KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2xlYXJQbGF5ZXJzKCkge1xyXG4gICAgd2hpbGUgKFN0YXRlLnBsYXllcnNbMF0pIFN0YXRlLnBsYXllcnMucG9wKCk7XHJcbiAgfSxcclxuXHJcbiAgY2FuQ2xpY2socGxheWVySW5kZXgsIHgsIHkpIHtcclxuICAgIGlmIChwbGF5ZXJJbmRleCAhPT0gMCAmJiBwbGF5ZXJJbmRleCAhPT0gMSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGF5ZXIgaW5kZXghXCIpO1xyXG4gICAgbGV0IG90aGVyUGxheWVySW5kZXggPSBOdW1iZXIoIXBsYXllckluZGV4KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIFN0YXRlLnBsYXllcnNbb3RoZXJQbGF5ZXJJbmRleF0uYm9hcmQuc3F1YXJlRXhpc3RzKHgsIHkpICYmXHJcbiAgICAgIFN0YXRlLnBsYXllcnNbb3RoZXJQbGF5ZXJJbmRleF0uYm9hcmQuc3F1YXJlTm90SGl0KHgsIHkpICYmXHJcbiAgICAgIFN0YXRlLnR1cm4gPT0gcGxheWVySW5kZXggJiZcclxuICAgICAgIVN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLmNwdVxyXG4gICAgKTtcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNoaXBNYXAgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XHJcbiAgICB0aGlzLmhpdE1hcCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgbGV0IGJvYXJkID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xyXG4gICAgICAgIHJvdy5wdXNoKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIHNxdWFyZUV4aXN0cyh4LCB5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHggPCB0aGlzLnNoaXBNYXAubGVuZ3RoICYmXHJcbiAgICAgIHggPj0gMCAmJlxyXG4gICAgICB5IDwgdGhpcy5zaGlwTWFwWzBdLmxlbmd0aCAmJlxyXG4gICAgICB5ID49IDBcclxuICAgIClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzcXVhcmVOb3RIaXQoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuaGl0TWFwW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3F1YXJlSGFzU2hpcCh4LCB5KSB7XHJcbiAgICBpZiAodGhpcy5zaGlwTWFwW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRQbGFjZW1lbnQoeyB4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbiB9KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3F1YXJlRXhpc3RzKHggKyBpLCB5KSB8fCB0aGlzLnNxdWFyZUhhc1NoaXAoeCArIGksIHkpKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3F1YXJlRXhpc3RzKHgsIHkgLSBpKSB8fCB0aGlzLnNxdWFyZUhhc1NoaXAoeCwgeSAtIGkpKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcCh7IHNoaXAsIHgsIHksIGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiIH0pIHtcclxuICAgIGlmICghdGhpcy52YWxpZFBsYWNlbWVudCh7IHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoOiBzaGlwLmxlbmd0aCB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCFcIik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgIHRoaXMuc2hpcE1hcFt4ICsgaV1beV0gPSBzaGlwO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICB0aGlzLnNoaXBNYXBbeF1beSAtIGldID0gc2hpcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgQ29udHJvbGxlci5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUhpdCh4LCB5KSB7XHJcbiAgICBpZiAoIXRoaXMuc3F1YXJlRXhpc3RzKHgsIHkpKSB7XHJcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3F1YXJlTm90SGl0KHgsIHkpKSB7XHJcbiAgICAgIHJldHVybiBcInJlcGVhdFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNoaXBNYXBbeF1beV0pIHtcclxuICAgICAgdGhpcy5zaGlwTWFwW3hdW3ldLmhpdCgpO1xyXG4gICAgICB0aGlzLmhpdE1hcFt4XVt5XSA9IFwiaGl0XCI7XHJcbiAgICAgIHJldHVybiBcImhpdFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oaXRNYXBbeF1beV0gPSBcIm1pc3NcIjtcclxuICAgICAgcmV0dXJuIFwibWlzc1wiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxsU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBQYWdlID0ge1xyXG4gIHBsYXllck9uZVR5cGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDEtdHlwZVwiKSxcclxuICBsZWZ0R3JpZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWdyaWRcIiksXHJcbiAgbGVmdFNoaXBzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtc2hpcHNcIiksXHJcbiAgcGxheWVyVHdvVHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMi10eXBlXCIpLFxyXG4gIHJpZ2h0U2hpcHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtc2hpcHNcIiksXHJcbiAgcmlnaHRHcmlkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWdyaWRcIiksXHJcbiAgZ2FtZVRleHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS10ZXh0XCIpLFxyXG4gIGdhbWVCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1idXR0b25cIiksXHJcbiAgcDFUeXBlOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInAxLXR5cGVcIiksXHJcbiAgcDJUeXBlOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInAyLXR5cGVcIiksXHJcbiAgcm90YXRlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0ZS1idXR0b25cIiksXHJcbiAgc2NyZWVuQmxvY2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuLWJsb2NrXCIpLFxyXG4gIGV4aXRTY3JlZW5CbG9ja0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW4tYmxvY2stYnV0dG9uXCIpLFxyXG4gIHNjcmVlbkJsb2NrVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW4tYmxvY2stdGV4dFwiKSxcclxufTtcclxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgY3B1ID0gZmFsc2UpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBudWxsO1xyXG4gICAgdGhpcy5lbmVteUJvYXJkID0gbnVsbDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNwdSA9IGNwdTtcclxuICAgIHRoaXMuaWRlYWxNb3ZlcyA9IFtdO1xyXG4gICAgdGhpcy5sYXN0SGl0cyA9IFtdO1xyXG4gICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbnVsbDtcclxuICAgIHRoaXMuc2hpcHMgPSBbXHJcbiAgICAgIG5ldyBTaGlwKDUpLFxyXG4gICAgICBuZXcgU2hpcCg0KSxcclxuICAgICAgbmV3IFNoaXAoMyksXHJcbiAgICAgIG5ldyBTaGlwKDMpLFxyXG4gICAgICBuZXcgU2hpcCgyKSxcclxuICAgIF07XHJcbiAgICB0aGlzLnNoaXBBbGlhc2VzID0ge1xyXG4gICAgICBjYXJyaWVyOiB0aGlzLnNoaXBzWzBdLFxyXG4gICAgICBiYXR0bGVzaGlwOiB0aGlzLnNoaXBzWzFdLFxyXG4gICAgICBjcnVpc2VyOiB0aGlzLnNoaXBzWzJdLFxyXG4gICAgICBzdWJtYXJpbmU6IHRoaXMuc2hpcHNbM10sXHJcbiAgICAgIGRlc3Ryb3llcjogdGhpcy5zaGlwc1s0XSxcclxuICAgIH07XHJcbiAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXRCb2FyZChuZXdCb2FyZCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ld0JvYXJkO1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBzZXRFbmVteUJvYXJkKGJvYXJkKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZW5lbXlCb2FyZCA9IGJvYXJkKTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2VsZWN0ZWRTaGlwKHsgeCwgeSwgZGlyZWN0aW9uIH0pIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU2hpcCAmJiB0aGlzLnNoaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFNoaXApID4gLTEpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcCh7IHgsIHksIGRpcmVjdGlvbiwgc2hpcDogdGhpcy5zZWxlY3RlZFNoaXAgfSk7XHJcbiAgICAgICAgdGhpcy5zaGlwcy5zcGxpY2UodGhpcy5zaGlwcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRTaGlwKSwgMSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnNlbGVjdGVkU2hpcCAmJlxyXG4gICAgICB0aGlzLnNoaXBzLmluZGV4T2YodGhpcy5zZWxlY3RlZFNoaXApID09PSAtMVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGRvbid0IGhhdmUgdGhhdCBzaGlwIVwiKTtcclxuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzaGlwIHNlbGVjdGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIHdoaWxlICh0aGlzLnNoaXBzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU2hpcCA9IHRoaXMuc2hpcHNbMF07XHJcbiAgICAgIGxldCBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcclxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIGRpcmVjdGlvbiA9IFwidmVydGljYWxcIjtcclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhpcy5wbGFjZVNlbGVjdGVkU2hpcCh7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmFuZG9tQ29vcmRpbmF0ZSgpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnJhbmRvbUNvb3JkaW5hdGUoKSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob290KHgsIHkpIHtcclxuICAgIGlmIChTdGF0ZS5nYW1lT3ZlcikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdhbWUgaXMgb3Zlci5cIik7XHJcbiAgICBpZiAoU3RhdGUucGxheWVyc1tTdGF0ZS50dXJuXSAhPSB0aGlzKSB7XHJcbiAgICAgIGlmIChTdGF0ZS5wbGF5ZXJzW051bWJlcighU3RhdGUudHVybildICE9IHRoaXMpIHtcclxuICAgICAgICAvL2lmIHRoaXMgaGFwcGVucywgdGhpcyBwbGF5ZXIgaXNuJ3QgaW4gdGhlIGdhbWUgYW55bW9yZSBkdWUgdG8gYSByZXN0YXJ0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkl0J3Mgbm90IHlvdXIgdHVybiB5ZXQhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlSGl0KHgsIHkpO1xyXG4gICAgaWYgKHJlc3VsdCA9PSBcImludmFsaWRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaG9zZSBjb29yZGluYXRlcyBhcmUgaW52YWxpZCFcIiwgeyBjYXVzZTogXCJpbnZhbGlkXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0ID09IFwicmVwZWF0XCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhvc2UgY29vcmRpbmF0ZXMgaGF2ZSBhbHJlYWR5IGJlZW4gc2hvdCBhdCFcIiwge1xyXG4gICAgICAgIGNhdXNlOiBcInJlcGVhdFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gc2hvdCB0aGUgc3F1YXJlIGF0ICR7eH0sICR7eX0uYCk7XHJcbiAgICBpZiAocmVzdWx0ID09IFwiaGl0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJdCB3YXMgYSBoaXQhXCIpO1xyXG4gICAgICBpZiAodGhpcy5lbmVteUJvYXJkLmFsbFN1bmsoKSkge1xyXG4gICAgICAgIENvbnRyb2xsZXIuZW5kR2FtZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gXCJtaXNzXCIpIGNvbnNvbGUubG9nKFwiSXQgd2FzIGEgbWlzcy4uLlwiKTtcclxuICAgIENvbnRyb2xsZXIuZW5kVHVybigpO1xyXG4gICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQsIHg6IHgsIHk6IHkgfTtcclxuICB9XHJcblxyXG4gIHJhbmRvbUNvb3JkaW5hdGUoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQmFkTW92ZXMobW92ZXNPYmopIHtcclxuICAgIGZvciAobGV0IGkgPSBtb3Zlc09iai5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMuYm9hcmQuc3F1YXJlRXhpc3RzKG1vdmVzT2JqW2ldLngsIG1vdmVzT2JqW2ldLnkpIHx8XHJcbiAgICAgICAgIXRoaXMuZW5lbXlCb2FyZC5zcXVhcmVOb3RIaXQobW92ZXNPYmpbaV0ueCwgbW92ZXNPYmpbaV0ueSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgbW92ZXNPYmouc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBDUFVzaG9vdCgpIHtcclxuICAgIGxldCBzaG90ID0gZmFsc2U7XHJcbiAgICBsZXQgc2hvdERhdGEgPSBudWxsO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdoaWxlICghc2hvdCkge1xyXG4gICAgICAgIGlmIChTdGF0ZS5nYW1lT3ZlciB8fCAhU3RhdGUucGxheWluZyB8fCBTdGF0ZS5wbGFjaW5nU2hpcHMpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pZGVhbE1vdmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgc2hvdERhdGEgPSB0aGlzLnNob290KHRoaXMuaWRlYWxNb3Zlc1swXS54LCB0aGlzLmlkZWFsTW92ZXNbMF0ueSk7XHJcbiAgICAgICAgICBpZiAoc2hvdERhdGEucmVzdWx0ID09IFwiaGl0XCIpIHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuaWRlYWxNb3Zlc1swXS5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pZGVhbE1vdmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZGVhbE1vdmVzW2ldLmRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pZGVhbE1vdmVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmlkZWFsTW92ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkZWFsTW92ZXNbaV0uZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWRlYWxNb3Zlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmlkZWFsTW92ZXMuc3BsaWNlKHRoaXMuaWRlYWxNb3Zlc1swXSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNob3REYXRhID0gdGhpcy5zaG9vdChcclxuICAgICAgICAgICAgICB0aGlzLnJhbmRvbUNvb3JkaW5hdGUoKSxcclxuICAgICAgICAgICAgICB0aGlzLnJhbmRvbUNvb3JkaW5hdGUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hvdCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFzaG90RGF0YS5yZXN1bHQpIHJldHVybjtcclxuICAgICAgICBpZiAoc2hvdERhdGEucmVzdWx0ID09IFwiaGl0XCIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxhc3RIaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0SGl0cy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sYXN0SGl0cy5zcGxpY2UoMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhc3RIaXRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNob3REYXRhLnggPCB0aGlzLmxhc3RIaXRzW2ldLnggKyAxIHx8XHJcbiAgICAgICAgICAgICAgICBzaG90RGF0YS54ID4gdGhpcy5sYXN0SGl0c1tpXS54IC0gMVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHNob3REYXRhLnkgPCB0aGlzLmxhc3RIaXRzW2ldLnkgKyAxIHx8XHJcbiAgICAgICAgICAgICAgICBzaG90RGF0YS55ID4gdGhpcy5sYXN0SGl0c1sxXSAtIDFcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IFwidmVydGljYWxcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBuZXh0TW92ZXMgPSBudWxsO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgICAgICBuZXh0TW92ZXMgPSBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogc2hvdERhdGEueCAtIDEsXHJcbiAgICAgICAgICAgICAgICB5OiBzaG90RGF0YS55LFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IHNob3REYXRhLnggKyAxLFxyXG4gICAgICAgICAgICAgICAgeTogc2hvdERhdGEueSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RGlyZWN0aW9uID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICBuZXh0TW92ZXMgPSBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogc2hvdERhdGEueCxcclxuICAgICAgICAgICAgICAgIHk6IHNob3REYXRhLnkgKyAxLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiBzaG90RGF0YS54LFxyXG4gICAgICAgICAgICAgICAgeTogc2hvdERhdGEueSAtIDEsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV4dE1vdmVzID0gW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IHNob3REYXRhLnggLSAxLFxyXG4gICAgICAgICAgICAgICAgeTogc2hvdERhdGEueSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiBzaG90RGF0YS54ICsgMSxcclxuICAgICAgICAgICAgICAgIHk6IHNob3REYXRhLnksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogc2hvdERhdGEueCxcclxuICAgICAgICAgICAgICAgIHk6IHNob3REYXRhLnkgKyAxLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB4OiBzaG90RGF0YS54LFxyXG4gICAgICAgICAgICAgICAgeTogc2hvdERhdGEueSAtIDEsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuZGVsZXRlQmFkTW92ZXMobmV4dE1vdmVzKTtcclxuICAgICAgICAgIHRoaXMuaWRlYWxNb3Zlcy5wdXNoKC4uLm5leHRNb3Zlcyk7XHJcbiAgICAgICAgICB0aGlzLmxhc3RIaXRzLnVuc2hpZnQoeyB4OiBzaG90RGF0YS54LCB5OiBzaG90RGF0YS55IH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2hvdERhdGEucmVzdWx0ID09IFwibWlzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL3BhZ2VcIjtcclxuXHJcbi8vc28gdGhhdCB0aGUgY29udGludWUgYnV0dG9uIGtub3dzIHdoYXQgdG8gdGVsbCB0aGUgY29udHJvbGxlclxyXG5sZXQgcDFQbGFjZWRTaGlwcyA9IGZhbHNlO1xyXG5cclxuLyoqaWYgeW91J3JlIGFscmVhZHkgaG92ZXJpbmcgb3ZlciBhIHNxdWFyZSwgeW91IGhhdmUgdG8gaG92ZXIgb3ZlciBhIGRpZmZlcmVudCBvbmVcclxudG8gc2VlIHRoZSByb3RhdGlvbi4gc29ycnkgOiggKi9cclxubGV0IHNlbGVjdGVkRGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcblBhZ2Uucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2VsZWN0ZWREaXJlY3Rpb24gPVxyXG4gICAgc2VsZWN0ZWREaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcclxufSk7XHJcblBhZ2UuZXhpdFNjcmVlbkJsb2NrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgUmVuZGVyZXIudG9nZ2xlU2NyZWVuQmxvY2soXCJvZmZcIik7XHJcbn0pO1xyXG5cclxubGV0IGJ1dHRvbkNhbGxiYWNrcyA9IHtcclxuICBuZXdHYW1lQ0IoKSB7XHJcbiAgICBSZW5kZXJlci50b2dnbGVUeXBlcyhcIm9mZlwiKTtcclxuICAgIFJlbmRlcmVyLnRvZ2dsZVJvdGF0ZUJ1dHRvbihcIm9uXCIpO1xyXG4gICAgcDFQbGFjZWRTaGlwcyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzUDFDUFUgPSBmYWxzZTtcclxuICAgIGxldCBpc1AyQ1BVID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCByYWRpbyBvZiBQYWdlLnAxVHlwZSkge1xyXG4gICAgICBpZiAocmFkaW8uY2hlY2tlZCAmJiByYWRpby52YWx1ZSA9PSBcIkNQVVwiKSBpc1AxQ1BVID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IHJhZGlvIG9mIFBhZ2UucDJUeXBlKSB7XHJcbiAgICAgIGlmIChyYWRpby5jaGVja2VkICYmIHJhZGlvLnZhbHVlID09IFwiQ1BVXCIpIGlzUDJDUFUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgQ29udHJvbGxlci5uZXdHYW1lKGlzUDFDUFUsIGlzUDJDUFUpO1xyXG4gICAgY29uc29sZS5sb2coXCJHYW1lIHN0YXJ0ZWQhXCIpO1xyXG4gIH0sXHJcblxyXG4gIGNvbnRpbnVlQ0IoKSB7XHJcbiAgICBzZWxlY3RlZERpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgaWYgKCFwMVBsYWNlZFNoaXBzICYmICFTdGF0ZS5wbGF5ZXJzWzBdLmNwdSkge1xyXG4gICAgICBpZiAoU3RhdGUucGxheWVyc1swXS5zaGlwcy5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3Ugc3RpbGwgaGF2ZSBzaGlwcyBsZWZ0IHRvIHBsYWNlIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBDb250cm9sbGVyLnN0YXJ0U2hpcFBsYWNlbWVudCgxKTtcclxuICAgICAgcDFQbGFjZWRTaGlwcyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoU3RhdGUucGxheWVyc1sxXS5zaGlwcy5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3Ugc3RpbGwgaGF2ZSBzaGlwcyBsZWZ0IHRvIHBsYWNlIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBwMVBsYWNlZFNoaXBzID0gZmFsc2U7XHJcbiAgICAgIENvbnRyb2xsZXIuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVzdGFydENCKCkge1xyXG4gICAgUmVuZGVyZXIudG9nZ2xlVHlwZXMoXCJvblwiKTtcclxuICAgIENvbnRyb2xsZXIucmVzdGFydCgpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUmVuZGVyZXIgPSB7XHJcbiAgdXBkYXRlVGV4dCgpIHtcclxuICAgIGlmICghU3RhdGUucGxheWluZykge1xyXG4gICAgICBQYWdlLmdhbWVUZXh0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIH0gZWxzZSBpZiAoU3RhdGUuZ2FtZU92ZXIpIHtcclxuICAgICAgUGFnZS5nYW1lVGV4dC50ZXh0Q29udGVudCA9IGAke1N0YXRlLndpbm5pbmdQbGF5ZXIubmFtZX0gd2lucyEhISEhISFgO1xyXG4gICAgfSBlbHNlIGlmIChTdGF0ZS5wbGFjaW5nU2hpcHMpIHtcclxuICAgICAgUGFnZS5nYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiUHJlc3MgUiB0byByb3RhdGVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFBhZ2UuZ2FtZVRleHQudGV4dENvbnRlbnQgPSBgJHtTdGF0ZS5wbGF5ZXJzW1N0YXRlLnR1cm5dLm5hbWV9J3MgdHVybmA7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2NyZWVuQmxvY2tUZXh0KHBsYXllckluZGV4KSB7XHJcbiAgICBQYWdlLnNjcmVlbkJsb2NrVGV4dC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtwbGF5ZXJJbmRleCArIDF9J3MgdHVybmA7XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlU2NyZWVuQmxvY2soc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgdGhpcy51cGRhdGVTY3JlZW5CbG9ja1RleHQoKTtcclxuICAgICAgUGFnZS5zY3JlZW5CbG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBcIm9mZlwiKSBQYWdlLnNjcmVlbkJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlVHlwZXM6IGZ1bmN0aW9uIHRvZ2dsZVBsYXllclR5cGVzU2VsZWN0aW9uKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgIFBhZ2UucGxheWVyT25lVHlwZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBQYWdlLnBsYXllclR3b1R5cGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gXCJvZmZcIikge1xyXG4gICAgICBQYWdlLnBsYXllck9uZVR5cGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgUGFnZS5wbGF5ZXJUd29UeXBlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlUm90YXRlQnV0dG9uKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgIFBhZ2Uucm90YXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09IFwib2ZmXCIpIHtcclxuICAgICAgUGFnZS5yb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgICBmb3IgKGxldCBsaXN0ZW5lciBpbiBidXR0b25DYWxsYmFja3MpIHtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DYWxsYmFja3NbbGlzdGVuZXJdKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRCdXR0b24odHlwZSkge1xyXG4gICAgdGhpcy5yZW1vdmVCdXR0b25MaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBQYWdlLmdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudXBkYXRlVGV4dCk7XHJcbiAgICBpZiAodHlwZSA9PSBcIm5ld1wiKSB7XHJcbiAgICAgIFBhZ2UuZ2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IGdhbWVcIjtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DYWxsYmFja3MubmV3R2FtZUNCKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImNvbnRpbnVlXCIpIHtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250aW51ZVwiO1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1dHRvbkNhbGxiYWNrcy5jb250aW51ZUNCKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInJlc3RhcnRcIikge1xyXG4gICAgICBQYWdlLmdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlc3RhcnRcIjtcclxuICAgICAgUGFnZS5nYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DYWxsYmFja3MucmVzdGFydENCKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjbGVhclNoaXBzKCkge1xyXG4gICAgZm9yIChsZXQgc2hpcCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtd3JhcHBlclwiKSkge1xyXG4gICAgICBzaGlwLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZVNoaXBTZWxlY3Rpb24oeyBzaWRlLCBzdGF0ZSB9KSB7XHJcbiAgICBpZiAoc2lkZSA9PSBcImxlZnRcIikge1xyXG4gICAgICBpZiAoc3RhdGUgPT0gXCJvblwiKSB7XHJcbiAgICAgICAgUGFnZS5sZWZ0U2hpcHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBQYWdlLmxlZnRHcmlkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gXCJvZmZcIikge1xyXG4gICAgICAgIFBhZ2UubGVmdFNoaXBzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgUGFnZS5sZWZ0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNpZGUgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgICBQYWdlLnJpZ2h0U2hpcHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBQYWdlLnJpZ2h0R3JpZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09IFwib2ZmXCIpIHtcclxuICAgICAgICBQYWdlLnJpZ2h0U2hpcHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBQYWdlLnJpZ2h0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcG9wdWxhdGVTaGlwcyhzaWRlKSB7XHJcbiAgICB0aGlzLmNsZWFyU2hpcHMoKTtcclxuICAgIGxldCBwbGF5ZXIgPSBzaWRlID09IFwicmlnaHRcIiA/IDAgOiAxO1xyXG4gICAgZm9yIChsZXQgc2hpcCBvZiBTdGF0ZS5wbGF5ZXJzW3BsYXllcl0uc2hpcHMpIHtcclxuICAgICAgY29uc3Qgc2hpcEhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzaGlwSFRNTC5jbGFzc0xpc3QuYWRkKFwic2hpcC13cmFwcGVyXCIpO1xyXG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgc2hpcE5hbWUuY2xhc3NMaXN0LmFkZChcInNoaXAtbmFtZVwiKTtcclxuICAgICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBPYmplY3Qua2V5cyhTdGF0ZS5wbGF5ZXJzW3BsYXllcl0uc2hpcEFsaWFzZXMpW1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoU3RhdGUucGxheWVyc1twbGF5ZXJdLnNoaXBBbGlhc2VzKS5pbmRleE9mKHNoaXApXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IHNoaXBDZWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNoaXBDZWxscy5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxscy13cmFwcGVyXCIpO1xyXG4gICAgICBzaGlwSFRNTC5hcHBlbmRDaGlsZChzaGlwTmFtZSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsXCIpO1xyXG4gICAgICAgIHNoaXBDZWxscy5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XHJcbiAgICAgIH1cclxuICAgICAgc2hpcEhUTUwuYXBwZW5kQ2hpbGQoc2hpcENlbGxzKTtcclxuICAgICAgc2hpcEhUTUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBTdGF0ZS5wbGF5ZXJzW3BsYXllcl0uc2VsZWN0ZWRTaGlwID0gc2hpcDtcclxuICAgICAgICBmb3IgKGxldCBzZWxlY3RlZFNoaXAgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcEhUTUwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHNpZGUgPT0gXCJsZWZ0XCIpIFBhZ2UubGVmdFNoaXBzLmFwcGVuZENoaWxkKHNoaXBIVE1MKTtcclxuICAgICAgZWxzZSBpZiAoc2lkZSA9PSBcInJpZ2h0XCIpIFBhZ2UucmlnaHRTaGlwcy5hcHBlbmRDaGlsZChzaGlwSFRNTCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2xlYXJHcmlkKGdyaWQpIHtcclxuICAgIGlmIChncmlkID09IFwibGVmdFwiKSB7XHJcbiAgICAgIHdoaWxlIChQYWdlLmxlZnRHcmlkLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBQYWdlLmxlZnRHcmlkLnJlbW92ZUNoaWxkKFBhZ2UubGVmdEdyaWQubGFzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChncmlkID09IFwicmlnaHRcIikge1xyXG4gICAgICB3aGlsZSAoUGFnZS5yaWdodEdyaWQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFBhZ2UucmlnaHRHcmlkLnJlbW92ZUNoaWxkKFBhZ2UucmlnaHRHcmlkLmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyaWQhIE11c3QgYmUgJ2xlZnQnIG9yICdyaWdodCcuXCIpO1xyXG4gIH0sXHJcblxyXG4gIGNsZWFySG92ZXJzKCkge1xyXG4gICAgZm9yIChsZXQgaG92ZXJDZWxsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG92ZXJcIikpIHtcclxuICAgICAgaG92ZXJDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IHNoaXBIb3ZlciBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtaG92ZXJcIikpIHtcclxuICAgICAgc2hpcEhvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLWhvdmVyXCIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYmFkUGxhY2VtZW50IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFkLXBsYWNlbWVudFwiKSkge1xyXG4gICAgICBiYWRQbGFjZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJhZC1wbGFjZW1lbnRcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcG9wdWxhdGVHcmlkKHsgZ3JpZCA9IGxlZnQsIGhpdE1hcCA9IG51bGwsIHNoaXBNYXAgPSBudWxsIH0pIHtcclxuICAgIGlmIChncmlkICE9IFwibGVmdFwiICYmIGdyaWQgIT0gXCJyaWdodFwiKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyaWQhIE11c3QgYmUgJ2xlZnQnIG9yICdyaWdodCcuXCIpO1xyXG4gICAgdGhpcy5jbGVhckdyaWQoZ3JpZCk7XHJcbiAgICBpZiAoaGl0TWFwID09IG51bGwgJiYgc2hpcE1hcCA9PSBudWxsKSByZXR1cm47XHJcbiAgICBmb3IgKGxldCB5Q29vcmQgPSA5OyB5Q29vcmQgPj0gMDsgeUNvb3JkLS0pIHtcclxuICAgICAgZm9yIChsZXQgeENvb3JkID0gMDsgeENvb3JkIDwgMTA7IHhDb29yZCsrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcblxyXG4gICAgICAgIGlmIChzaGlwTWFwICYmIHNoaXBNYXBbeENvb3JkXVt5Q29vcmRdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpdE1hcCAmJiBoaXRNYXBbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGl0TWFwICYmIGhpdE1hcFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIikge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnggPSB4Q29vcmQ7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSB5Q29vcmQ7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmdyaWQgPSBncmlkO1xyXG5cclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFySG92ZXJzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBsYXllciA9IGdyaWQgPT0gXCJsZWZ0XCIgPyAxIDogMjtcclxuICAgICAgICBsZXQgcGxheWVySW5kZXggPSBwbGF5ZXIgLSAxO1xyXG4gICAgICAgIGxldCBvdGhlclBsYXllckluZGV4ID0gTnVtYmVyKCFwbGF5ZXJJbmRleCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgU3RhdGUuZ2FtZU92ZXIgJiZcclxuICAgICAgICAgIFN0YXRlLndpbm5pbmdQbGF5ZXIgPT0gU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIndpblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFN0YXRlLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFN0YXRlLnBsYWNpbmdTaGlwcykge1xyXG4gICAgICAgICAgICBpZiAoIVN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLnNlbGVjdGVkU2hpcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBTdGF0ZS5wbGF5ZXJzW3BsYXllckluZGV4XS5wbGFjZVNlbGVjdGVkU2hpcCh7XHJcbiAgICAgICAgICAgICAgeDogeENvb3JkLFxyXG4gICAgICAgICAgICAgIHk6IHlDb29yZCxcclxuICAgICAgICAgICAgICBkaXJlY3Rpb246IHNlbGVjdGVkRGlyZWN0aW9uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGdyaWQgPT0gXCJsZWZ0XCIpIHRoaXMucG9wdWxhdGVTaGlwcyhcInJpZ2h0XCIpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMucG9wdWxhdGVTaGlwcyhcImxlZnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHNlbGVjdGVkU2hpcCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKENvbnRyb2xsZXIuY2FuQ2xpY2sob3RoZXJQbGF5ZXJJbmRleCwgeENvb3JkLCB5Q29vcmQpKSB7XHJcbiAgICAgICAgICAgIFN0YXRlLnBsYXllcnNbb3RoZXJQbGF5ZXJJbmRleF0uc2hvb3QoeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFN0YXRlLnBsYWNpbmdTaGlwcykge1xyXG4gICAgICAgICAgICBpZiAoIVN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLnNlbGVjdGVkU2hpcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRQbGFjZW1lbnQgPSBTdGF0ZS5wbGF5ZXJzW1xyXG4gICAgICAgICAgICAgIHBsYXllckluZGV4XHJcbiAgICAgICAgICAgIF0uYm9hcmQudmFsaWRQbGFjZW1lbnQoe1xyXG4gICAgICAgICAgICAgIHg6IHhDb29yZCxcclxuICAgICAgICAgICAgICB5OiB5Q29vcmQsXHJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzZWxlY3RlZERpcmVjdGlvbixcclxuICAgICAgICAgICAgICBsZW5ndGg6IFN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdLnNlbGVjdGVkU2hpcC5sZW5ndGgsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICBpIDwgU3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF0uc2VsZWN0ZWRTaGlwLmxlbmd0aDtcclxuICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ2VsbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICBgLmNlbGxbZGF0YS14PVwiJHtcclxuICAgICAgICAgICAgICAgICAgICB4Q29vcmQgKyBpXHJcbiAgICAgICAgICAgICAgICAgIH1cIl1bZGF0YS15PVwiJHt5Q29vcmR9XCJdW2RhdGEtZ3JpZD1cIiR7Z3JpZH1cIl1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWREaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICBgLmNlbGxbZGF0YS14PVwiJHt4Q29vcmR9XCJdW2RhdGEteT1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkIC0gaVxyXG4gICAgICAgICAgICAgICAgICB9XCJdW2RhdGEtZ3JpZD1cIiR7Z3JpZH1cIl1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRDZWxsID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIGlmICh2YWxpZFBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENlbGwuY2xhc3NMaXN0LmFkZChcImJhZC1wbGFjZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKENvbnRyb2xsZXIuY2FuQ2xpY2sob3RoZXJQbGF5ZXJJbmRleCwgeENvb3JkLCB5Q29vcmQpKSB7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdyaWQgPT0gXCJsZWZ0XCJcclxuICAgICAgICAgID8gUGFnZS5sZWZ0R3JpZC5hcHBlbmRDaGlsZChjZWxsKVxyXG4gICAgICAgICAgOiBQYWdlLnJpZ2h0R3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW4pIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuO1xyXG4gICAgdGhpcy5oaXRzID0gMDtcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIHRoaXMuaGl0cyA9IHRoaXMuaGl0cyArPSAxO1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0cztcclxuICB9XHJcblxyXG4gIGlzU3VuaygpIHtcclxuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU3RhdGUgPSB7XHJcbiAgcGxheWluZzogZmFsc2UsXHJcbiAgcGxheWVyczogW10sXHJcbiAgdHVybjogMCxcclxuICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgd2lubmluZ1BsYXllcjogbnVsbCxcclxuICBwbGFjaW5nU2hpcHM6IGZhbHNlLFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xyXG5cclxuUmVuZGVyZXIuc2V0QnV0dG9uKFwibmV3XCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=