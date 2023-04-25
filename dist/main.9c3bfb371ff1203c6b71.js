/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/script.js":
/*!*******************************!*\
  !*** ./src/modules/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mult": () => (/* binding */ mult)
/* harmony export */ });
var mult = function mult(a, b) {
  return a * b;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Onest-Regular.woff2 */ "./src/fonts/Onest-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Onest-Regular.woff */ "./src/fonts/Onest-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Onest\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Onest\";\n  color: #383838;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\n.quiz {\n  background: #CAFFA0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 24px;\n  padding: 32px;\n  width: 1216px;\n}\n.quiz__wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.quiz__title {\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n.quiz__subtitle {\n  font-size: 16px;\n  line-height: 20px;\n  margin-bottom: 81px;\n  opacity: 0.7;\n}\n\n.question {\n  position: relative;\n  background: #FFFFFF;\n  border-radius: 24px;\n  width: 576px;\n  padding: 32px;\n  min-height: 400px;\n}\n.question__wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.question__title {\n  font-weight: 500;\n  font-size: 16px;\n}\n.question__subtitle {\n  color: #9B9B9B;\n}\n.question__btns {\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.question__btns.select {\n  position: absolute;\n  bottom: 32px;\n  width: 512px;\n}\n.question__select {\n  width: 100%;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 10px 16px;\n  font-size: 16px;\n  background: #f5f5f5;\n  cursor: pointer;\n  border-radius: 16px;\n  border: 1px solid #FFFFFF;\n  transition: all 0.5s ease 0s;\n}\n.question__select:hover {\n  border: 1px solid #383838;\n}\n.question__label {\n  margin-bottom: 8px;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #F5F5F5;\n  border-radius: 16px;\n  padding: 18px;\n  width: 246px;\n  border: 1px solid #FFFFFF;\n}\n.question__label.w100 {\n  width: 100%;\n}\n.question__step {\n  color: #383838;\n  opacity: 0.3;\n  font-size: 16px;\n}\n.question__send {\n  width: 100%;\n  background: #383838;\n  border-radius: 16px;\n  color: #FFFFFF;\n  font-size: 16px;\n  padding: 18px 0;\n  cursor: pointer;\n}\n\ninput[type=radio] {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 2px solid #999;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n\ninput[type=radio]:hover {\n  border-color: #666;\n}\n\ninput[type=radio]:checked {\n  background-color: #FFFFFF;\n  border: 6px solid #333;\n  border-radius: 50%;\n}\n\n.modal-content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.next__btn {\n  background: #383838;\n  border-radius: 12px;\n  color: #FFFFFF;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  cursor: pointer;\n}\n.next__btn:disabled {\n  cursor: not-allowed;\n}\n\n.prev__btn {\n  border: 1px solid #D8D8D8;\n  border-radius: 12px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  cursor: pointer;\n}\n\ninput[type=radio]:checked + label {\n  background-color: #FFFFFF;\n  border: 1px solid #383838;\n}\n\nlabel.active {\n  background-color: #FFFFFF;\n  border: 1px solid #383838;\n}\n\n.hide {\n  display: none;\n}\n\n.select__box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.select__wrapper {\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  width: 512px;\n  height: 56px;\n  padding: 10px 16px;\n  background: #f5f5f5;\n  border-radius: 16px;\n  transition: all 0.3s ease 0s;\n}\n.select__wrapper:hover {\n  box-shadow: inset 0 0 0 1px #9b9b9b;\n}\n.select__wrapper.active {\n  box-shadow: inset 0 0 0 1px #383838;\n  background-color: #fff;\n}\n.select__wrapper.active .select__arrow-img {\n  display: none;\n}\n.select__wrapper.active .select__close-img {\n  display: block;\n}\n.select__wrapper.active .select-values {\n  display: flex;\n  visibility: visible;\n  max-height: 256px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  opacity: 1;\n  z-index: 10;\n}\n.select__label {\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  display: block;\n  font-size: 0.75rem;\n  line-height: 1;\n  color: #9b9b9b;\n}\n\n.select-values {\n  display: none;\n  visibility: hidden;\n  flex-direction: column;\n}\n\n.select__input:placeholder-shown {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.select__itemsWrapper {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  bottom: -1px;\n  left: 0;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n  background: #fff;\n  box-shadow: 0 0 40px rgba(58, 58, 58, 0.08);\n  border-radius: 16px;\n  transition: all 0.3s ease 0s;\n  opacity: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.select__wrapper.active .select__itemsWrapper {\n  opacity: 1;\n  z-index: 10;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 65px;\n}\n\n.select__wrapper.active .select-values {\n  display: flex;\n  visibility: visible;\n  max-height: 256px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  opacity: 1;\n  z-index: 10;\n}\n\n.filter-select .select__arrow {\n  margin-left: 10px;\n  position: relative;\n}\n\n.select__close-img {\n  display: none;\n}\n\n.filter-select .select__itemsWrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: #fff;\n  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.08);\n  border-radius: 16px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n.filter-select .checkbox__input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.filter-select .checkbox__label {\n  position: relative;\n  display: inline-block;\n  padding-left: 40px;\n  cursor: pointer;\n}\n\n.filter-select .checkbox__label:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\n.filter-select .checkbox__input:checked + .checkbox__label:before {\n  background-color: #000000;\n  border-color: #000000;\n}\n\n.filter-select .checkbox__input:checked + .checkbox__label:before {\n  content: \"✓\";\n  font-size: 14px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 16px;\n}\n\n.checkbox__label {\n  background-color: #FFFFFF;\n  width: 100%;\n  margin-bottom: 0;\n  padding: 10px 0;\n}\n\n.form {\n  width: 100%;\n}\n.form__group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n}\n.form input[type=text],\n.form input[type=email],\n.form input[type=tel] {\n  border: none;\n  background: #F5F5F5;\n  border-radius: 16px;\n  padding: 18px;\n  font-size: 16px;\n}\n.form__text {\n  color: #9B9B9B;\n  font-size: 12px;\n  margin: 0 auto;\n}\n.form__link {\n  color: #383838;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_style.scss","webpack://./src/style/_var.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,oBAAA;EACA,oHAAA;ADGF;AELA;EACE,sBAAA;AFOF;;AEJA;EACE,oBAAA;EACA,cCNK;EDOL,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AFOF;;AEJA;;EAEE,SAAA;AFOF;;AEJA;EACE,mBAAA;EACA,2CAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;AFOF;AENE;EACE,aAAA;EACA,8BAAA;AFQJ;AENE;EACE,gBAAA;EACA,mBAAA;AFQJ;AENE;EACE,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;AFQJ;;AEJA;EACE,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;AFOF;AENE;EACE,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AFQJ;AENE;EACE,gBAAA;EACA,eAAA;AFQJ;AENE;EACE,cAAA;AFQJ;AENE;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;AFQJ;AEPI;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AFSN;AENE;EACE,WAAA;EACA,gBAAA;EACA,wBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;EACA,4BAAA;AFQJ;AEPI;EACE,yBAAA;AFSN;AENE;EACE,kBAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;AFQJ;AEPI;EACE,WAAA;AFSN;AENE;EACE,cAAA;EACA,YAAA;EACA,eAAA;AFQJ;AENE;EACE,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;AFQJ;;AELA;EACE,wBAAA;EAEA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AFQF;;AELA;EACE,kBAAA;AFQF;;AENA;EACE,yBAAA;EACA,sBAAA;EACA,kBAAA;AFSF;;AEPA;EACE,aAAA;EACA,eAAA;EACA,8BAAA;AFUF;;AERA;EACE,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AFWF;AETE;EACE,mBAAA;AFWJ;;AERA;EACE,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AFWF;;AETA;EACE,yBAAA;EACA,yBAAA;AFYF;;AEVA;EACE,yBAAA;EACA,yBAAA;AFaF;;AEXA;EACA,aAAA;AFcA;;AEXE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AFcJ;AEZE;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EAGA,4BAAA;AFcJ;AEbI;EACE,mCAAA;AFeN;AEbI;EACE,mCAAA;EACA,sBAAA;AFeN;AEdM;EACE,aAAA;AFgBR;AEdM;EACE,cAAA;AFgBR;AEZE;EAGE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,2BAAA;EACA,wBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AFcJ;AEXE;EACE,kBAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,cAAA;EACA,cAAA;AFaJ;;AEVA;EACE,aAAA;EACA,kBAAA;EAIA,sBAAA;AFaF;;AEXA;EACE,mBAAA;EACA,gBAAA;EAEA,uBAAA;AFcF;;AEZA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,OAAA;EACA,qCAAA;EAEA,6BAAA;EACA,gBAAA;EAEA,2CAAA;EACA,mBAAA;EAGA,4BAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;AFeF;;AEbA;EACE,UAAA;EACA,WAAA;EACA,2BAAA;EACA,wBAAA;EACA,mBAAA;EACA,gBAAA;AFgBF;;AEdA;EAGE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,2BAAA;EACA,wBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AFiBF;;AEfA;EACE,iBAAA;EACA,kBAAA;AFkBF;;AEhBA;EACE,aAAA;AFmBF;;AEjBA;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,sBAAA;EACA,4CAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;AFoBF;;AElBA;EACE,kBAAA;EACA,UAAA;EACA,eAAA;AFqBF;;AEnBA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;AFsBF;;AEpBA;EACE,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,mCAAA;UAAA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;AFuBF;;AErBA;EACE,yBAAA;EACA,qBAAA;AFwBF;;AEtBA;EACE,YAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;AFyBF;;AEvBA;EACE,yBAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;AF0BF;;AExBA;EACE,WAAA;AF2BF;AE1BE;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;AF4BJ;AE1BE;;;EAGE,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;AF4BJ;AE1BE;EACE,cAAA;EACA,eAAA;EACA,cAAA;AF4BJ;AE1BE;EACE,cAAA;AF4BJ","sourcesContent":["@import '~normalize.css';\n@import 'style/fonts';\n@import 'style/var';\n@import 'style/style';","@font-face {\n  font-family: 'Onest';\n  src: url('../fonts/Onest-Regular.woff2') format('woff2'),\n    url('../fonts/Onest-Regular.woff') format('woff');\n}\n","* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Onest';\n  color: $text;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\n.quiz {\n  background: #CAFFA0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 24px;\n  padding: 32px;\n  width: 1216px;\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n  }\n  &__title {\n    font-weight: 500;\n    margin-bottom: 16px;\n  }\n  &__subtitle {\n    font-size: 16px;\n    line-height: 20px;\n    margin-bottom: 81px;\n    opacity: 0.7;\n  }\n}\n\n.question {\n  position: relative;\n  background: #FFFFFF;\n  border-radius: 24px;\n  width: 576px;\n  padding: 32px;\n  min-height: 400px;\n  &__wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n  }\n  &__title {\n    font-weight: 500;\n    font-size: 16px;\n  }\n  &__subtitle {\n    color: #9B9B9B;\n  }\n  &__btns {\n    margin-top: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    &.select {\n      position: absolute;\n      bottom: 32px;\n      width: 512px;\n    }\n  }\n  &__select {\n    width: 100%;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    padding: 10px 16px;\n    font-size: 16px;\n    background: #f5f5f5;\n    cursor: pointer;\n    border-radius: 16px;\n    border: 1px solid #FFFFFF;\n    transition: all .5s ease 0s;\n    &:hover {\n      border: 1px solid #383838;\n    }\n  }\n  &__label {\n    margin-bottom: 8px;\n    font-size: 16px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: #F5F5F5;\n    border-radius: 16px;\n    padding: 18px;\n    width: 246px;\n    border: 1px solid #FFFFFF;\n    &.w100 {\n      width: 100%;\n    }\n  }\n  &__step {\n    color: #383838;\n    opacity: 0.3;\n    font-size: 16px;\n  }\n  &__send {\n    width: 100%;\n    background: #383838;\n    border-radius: 16px;\n    color: #FFFFFF;\n    font-size: 16px;\n    padding: 18px 0;\n    cursor: pointer;\n  }\n}\ninput[type=\"radio\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 2px solid #999;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n\n}\ninput[type=\"radio\"]:hover {\n  border-color: #666;\n}\ninput[type=\"radio\"]:checked {\n  background-color: #FFFFFF;\n  border: 6px solid #333;\n  border-radius: 50%;\n}\n.modal-content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.next__btn {\n  background: #383838;\n  border-radius: 12px;\n  color: #FFFFFF;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  cursor: pointer;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n}\n.prev__btn {\n  border: 1px solid #D8D8D8;\n  border-radius: 12px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  cursor: pointer;\n}\ninput[type=\"radio\"]:checked+label {\n  background-color: #FFFFFF;\n  border: 1px solid #383838;\n}\nlabel.active {\n  background-color: #FFFFFF;\n  border: 1px solid #383838;\n}\n.hide {\ndisplay: none;\n}\n.select {\n  &__box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  &__wrapper {\n    display: flex;\n    cursor: pointer;\n    position: relative;\n    width: 512px;\n    height: 56px;\n    padding: 10px 16px;\n    background: #f5f5f5;\n    border-radius: 16px;\n    -webkit-transition: all .3s ease 0s;\n    -o-transition: all .3s ease 0s;\n    transition: all .3s ease 0s;\n    &:hover {\n      box-shadow: inset 0 0 0 1px #9b9b9b;\n    }\n    &.active {\n      box-shadow: inset 0 0 0 1px #383838;\n      background-color: #fff;\n      .select__arrow-img {\n        display: none;\n      }\n      .select__close-img {\n        display: block;\n      }\n    }\n  }\n  &__wrapper.active .select-values {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    visibility: visible;\n    max-height: 256px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    opacity: 1;\n    z-index: 10;\n  }\n\n  &__label {\n    position: relative;\n    width: 100%;\n    cursor: pointer;\n    display: block;\n    font-size: .75rem;\n    line-height: 1;\n    color: #9b9b9b;\n  }\n}\n.select-values {\n  display: none;\n  visibility: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.select__input:placeholder-shown {\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n.select__itemsWrapper {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  bottom: -1px;\n  left: 0;\n  -webkit-transform: translate(0, 100%);\n  -ms-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n  background: #fff;\n  -webkit-box-shadow: 0 0 40px rgba(58, 58, 58, .08);\n  box-shadow: 0 0 40px rgba(58, 58, 58, .08);\n  border-radius: 16px;\n  -webkit-transition: all .3s ease 0s;\n  -o-transition: all .3s ease 0s;\n  transition: all .3s ease 0s;\n  opacity: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n.select__wrapper.active .select__itemsWrapper {\n  opacity: 1;\n  z-index: 10;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 65px;\n}\n.select__wrapper.active .select-values {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: visible;\n  max-height: 256px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  opacity: 1;\n  z-index: 10;\n}\n.filter-select .select__arrow {\n  margin-left: 10px;\n  position: relative;\n}\n.select__close-img {\n  display: none;\n}\n.filter-select .select__itemsWrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: #fff;\n  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.08);\n  border-radius: 16px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.filter-select .checkbox__input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.filter-select .checkbox__label {\n  position: relative;\n  display: inline-block;\n  padding-left: 40px;\n  cursor: pointer;\n}\n.filter-select .checkbox__label:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n.filter-select .checkbox__input:checked+.checkbox__label:before {\n  background-color: #000000;\n  border-color: #000000;\n}\n.filter-select .checkbox__input:checked+.checkbox__label:before {\n  content: \"\\2713\";\n  font-size: 14px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 16px;\n}\n.checkbox__label {\n  background-color: #FFFFFF;\n  width: 100%;\n  margin-bottom: 0;\n  padding: 10px 0;\n}\n.form {\n  width: 100%;\n  &__group {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 8px;\n  }\n  input[type=\"text\"],\n  input[type=\"email\"],\n  input[type=\"tel\"] {\n    border: none;\n    background: #F5F5F5;\n    border-radius: 16px;\n    padding: 18px;\n    font-size: 16px;\n  }\n  &__text {\n    color: #9B9B9B;\n    font-size: 12px;\n    margin: 0 auto;\n  }\n  &__link {\n    color: #383838;\n  }\n}","$text: #383838;\n\n\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.svg */ "./src/img/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.png */ "./src/img/favicon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/free.png */ "./src/img/free.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons8-close.svg */ "./src/img/icons8-close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Arrow 2.svg */ "./src/img/Arrow 2.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\">\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\">\n\n  <title>Quiz</title>\n</head>\n\n<body>\n\n\n  <div class=\"quiz\">\n    <div class=\"quiz__wrapper\">\n      <div class=\"quiz__left\">\n        <h1 class=\"quiz__title\">Подберём вуз мечты</h1>\n        <h2 class=\"quiz_subtitle\">Ответьте на 8 простых вопросов, и мы составим<br> список наболее подходящих для вас\n          вузов</h2>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"free\" class=\"quiz__img\">\n      </div>\n      <div class=\"quiz__right\">\n        <div class=\"question\">\n\n          <div class=\"modal-content\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Для кого вы ищете учебное заведение?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <label class=\"question__label\">\n              <span>Себе</span>\n              <input type=\"radio\" name=\"answer\" value=\"Себе\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Супругу/супруге</span>\n              <input type=\"radio\" name=\"answer\" value=\"Супругу/супруге\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Родственнику</span>\n              <input type=\"radio\" name=\"answer\" value=\"Родственнику\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Коллеге</span>\n              <input type=\"radio\" name=\"answer\" value=\"Коллеге\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Ребенку</span>\n              <input type=\"radio\" name=\"answer\" value=\"Ребенку\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Другое</span>\n              <input type=\"radio\" name=\"answer\" value=\"Другое\" />\n            </label>\n            <div class=\"question__btns\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">В каком городе планируете поступать?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <div class=\"filter-select filter-select-main\"> \n\n              <div class=\"select__wrapper city\">\n                <div class=\"select__label\"><span>Город</span>\n                  <span class=\"select__chois\"></span>\n                  <!-- <div class=\"select__counter\" data-counter=\"-1\"></div> -->\n                </div>\n                <div class=\"select__box\">\n                  <img class=\"select__close-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                  <img class=\"select__arrow-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                </div>\n\n                <div class=\"select__itemsWrapper\">\n                  <div class=\"select__values\">\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"1\" data-id=\"1\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"1\"><span\n                            class=\"checkbox__text\">Москва</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\"  id=\"2\" data-id=\"2\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"2\"><span\n                            class=\"checkbox__text\">Новосибирск</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"3\" data-id=\"3\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"3\"><span\n                            class=\"checkbox__text\">Нижний новгород</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"4\" data-id=\"4\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"4\"><span\n                            class=\"checkbox__text\">Ростов-на-Дону</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"5\" data-id=\"5\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"5\"><span\n                            class=\"checkbox__text\">Санкт-Петербург</span></label></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"question__btns select\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Какое образование уже есть?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <label class=\"question__label\">\n              <span>9 классов</span>\n              <input type=\"radio\" name=\"answer\" value=\"9 классов\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Колледж/техникум</span>\n              <input type=\"radio\" name=\"answer\" value=\"Колледж/техникум\" />\n            </label>\n            <label class=\"question__label\">\n              <span>11 классов</span>\n              <input type=\"radio\" name=\"answer\" value=\"11 классов\" />\n            </label>\n            <label class=\"question__label\">\n              <span>11 классов</span>\n              <input type=\"radio\" name=\"answer\" value=\"11 классов\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Училище</span>\n              <input type=\"radio\" name=\"answer\" value=\"Училище\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Неоконченное высшее</span>\n              <input type=\"radio\" name=\"answer\" value=\"Неоконченное высшее\" />\n            </label>\n\n\n            <div class=\"question__btns\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Куда планируете поступать?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <label class=\"question__label w100\">\n              <span>Вуз</span>\n              <input type=\"radio\" name=\"answer\" value=\"Вуз\" />\n            </label>\n            <label class=\"question__label w100\">\n              <span>Колледж/техникум</span>\n              <input type=\"radio\" name=\"answer\" value=\"Колледж/техникум\" />\n            </label>\n            <label class=\"question__label w100\">\n              <span>Училище</span>\n              <input type=\"radio\" name=\"answer\" value=\"Училище\" />\n            </label>\n\n\n            <div class=\"question__btns\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Какую форму обучения предпочитаете?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <label class=\"question__label w100\">\n              <span>Очную</span>\n              <input type=\"radio\" name=\"answer\" value=\"Очную\" />\n            </label>\n            <label class=\"question__label w100\">\n              <span>Заочную</span>\n              <input type=\"radio\" name=\"answer\" value=\"Заочную\" />\n            </label>\n            <label class=\"question__label w100\">\n              <span>Дистанционную</span>\n              <input type=\"radio\" name=\"answer\" value=\"Дистанционную\" />\n            </label>\n\n\n            <div class=\"question__btns\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Рассматриваете платное обучение?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <label class=\"question__label w100\">\n              <span>Нет, только бюджет</span>\n              <input type=\"radio\" name=\"answer\" value=\"Нет, только бюджет\" />\n            </label>\n            <label class=\"question__label w100\">\n              <span>Да, планирую учиться платно</span>\n              <input type=\"radio\" name=\"answer\" value=\"Да, планирую учиться платно\" />\n            </label>\n            <label class=\"question__label w100\">\n              <span>Возможны оба варианта</span>\n              <input type=\"radio\" name=\"answer\" value=\"Возможны оба варианта\" />\n            </label>\n\n\n            <div class=\"question__btns\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Какая специальность интересует?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <div class=\"filter-select filter-select-main\"> \n\n              <div class=\"select__wrapper profession\">\n                <div class=\"select__label\"><span>Специальность</span>\n                  <span class=\"select__chois\"></span>\n                  <!-- <div class=\"select__counter\" data-counter=\"-1\"></div> -->\n                </div>\n                <div class=\"select__box\">\n                  <img class=\"select__close-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                  <img class=\"select__arrow-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                </div>\n\n                <div class=\"select__itemsWrapper\">\n                  <div class=\"select__values\">\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"10\" data-id=\"10\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"10\"><span\n                            class=\"checkbox__text\">Экономика</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"20\" data-id=\"20\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"20\"><span\n                            class=\"checkbox__text\">Философия</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"30\" data-id=\"30\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"30\"><span\n                            class=\"checkbox__text\">Социология</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"40\" data-id=\"40\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"40\"><span\n                            class=\"checkbox__text\">Юриспруденция</span></label></div>\n                    </div>\n                    <div class=\"select-values__item\">\n                      <div class=\"checkbox\"><input class=\"checkbox__input\" id=\"50\" data-id=\"50\"\n                          type=\"checkbox\"><label class=\"checkbox__label\" for=\"50\"><span\n                            class=\"checkbox__text\">Менеджмент</span></label></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"question__btns select\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Как скоро планируете поступать?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n            <label class=\"question__label\">\n              <span>Как можно быстрее</span>\n              <input type=\"radio\" name=\"answer\" value=\"Как можно быстрее\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Месяц</span>\n              <input type=\"radio\" name=\"answer\" value=\"Месяц\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Квартал</span>\n              <input type=\"radio\" name=\"answer\" value=\"Квартал\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Полгода</span>\n              <input type=\"radio\" name=\"answer\" value=\"Полгода\" />\n            </label>\n            <label class=\"question__label\">\n              <span>Год</span>\n              <input type=\"radio\" name=\"answer\" value=\"Год\" />\n            </label>\n\n\n\n            <div class=\"question__btns\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n\n          </div>\n          <div class=\"modal-content hide\">\n            <div class=\"question__wrapper\">\n              <h2 class=\"question__title\">Ваша подборка готова! 🥳 Куда нам отправить её?</h2>\n              <div class=\"question__step\"></div>\n            </div>\n\n\n            <form class=\"form\">\n              <div class=\"form__group\">\n\n                <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Введите ваше имя\" required>\n              </div>\n              <div class=\"form__group\">\n\n                <input type=\"tel\" id=\"phone\" name=\"phone\" placeholder=\"Введите ваш номер телефона\" required>\n              </div>\n              <div class=\"form__group\">\n\n                <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Введите ваш email\" required>\n              </div>\n              <div class=\"form__group\">\n                <button class=\"question__send\" type=\"submit\">Получить подборку</button>\n              </div>\n            </form>\n            <span class=\"form__text\">Нажимая на кнопку, вы даете согласие на обработку своих <a class=\"form__link\" href=\"#\">Персональных данных</a> </span>\n            <div class=\"question__btns hide\">\n              <button class=\"prev__btn\" disabled>\n                < Назад </button>\n\n                  <button class=\"next__btn\" disabled>Далее ></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/fonts/Onest-Regular.woff":
/*!**************************************!*\
  !*** ./src/fonts/Onest-Regular.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Onest-Regular.woff";

/***/ }),

/***/ "./src/fonts/Onest-Regular.woff2":
/*!***************************************!*\
  !*** ./src/fonts/Onest-Regular.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Onest-Regular.woff2";

/***/ }),

/***/ "./src/img/Arrow 2.svg":
/*!*****************************!*\
  !*** ./src/img/Arrow 2.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Arrow 2.svg";

/***/ }),

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.png";

/***/ }),

/***/ "./src/img/favicon.svg":
/*!*****************************!*\
  !*** ./src/img/favicon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.svg";

/***/ }),

/***/ "./src/img/free.png":
/*!**************************!*\
  !*** ./src/img/free.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/free.png";

/***/ }),

/***/ "./src/img/icons8-close.svg":
/*!**********************************!*\
  !*** ./src/img/icons8-close.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons8-close.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
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
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/script */ "./src/modules/script.js");



document.addEventListener('DOMContentLoaded', function () {
  // Находим все модальные окна
  var modalList = document.querySelectorAll('.modal-content');

  // Находим кнопки "Далее" и "Назад"
  var nextBtn = document.querySelectorAll('.next__btn');
  var prevBtn = document.querySelectorAll('.prev__btn');

  // Находим все радио-кнопки
  var radioBtns = document.querySelectorAll('input[name="answer"]');

  // Находим элементы для отображения текущего шага

  var stepElems = document.querySelectorAll('.question__step');

  // Начальное значение текущего шага
  var currentStep = 0;

  // Отображаем количество модальных окон
  var modalCount = modalList.length;

  // Устанавливаем значения шагов на каждом модальном окне
  for (var i = 0; i < modalCount; i++) {
    stepElems[i].textContent = "\u0428\u0430\u0433 ".concat(i + 1, "/").concat(modalCount);
  }

  // По умолчанию скрываем все модальные окна кроме первого
  for (var _i = 1; _i < modalCount; _i++) {
    modalList[_i].classList.add('hide');
  }
  function switchModal(direction) {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // Проверяем, был ли выбран какой-то вариант ответа
    if (currentStep !== 0 && !selectedAnswer) {
      nextBtn[currentStep].disabled = true;
      return;
    }

    // Скрываем текущее модальное окно
    modalList[currentStep].classList.add('hide');

    // Устанавливаем новое значение текущего шага
    currentStep += direction;

    // Отображаем новое модальное окно
    modalList[currentStep].classList.remove('hide');

    // Обновляем отображение текущего шага
    for (var _i2 = 0; _i2 < modalCount; _i2++) {
      stepElems[_i2].textContent = "\u0428\u0430\u0433 ".concat(_i2 + 1, "/").concat(modalCount);
    }

    // Если это первое модальное окно, делаем кнопку "Назад" неактивной
    if (currentStep === 0) {
      prevBtn[currentStep].disabled = true;
    } else {
      prevBtn[currentStep].disabled = false;
    }

    // Если это последнее модальное окно, делаем кнопку "Далее" неактивной
    if (currentStep === modalCount - 1) {
      nextBtn[currentStep].disabled = true;
    } else {
      nextBtn[currentStep].disabled = false;
    }
  }

  // Обработчик клика на кнопку "Назад"
  prevBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchModal(-1);
    });
  });

  // Обработчик клика на кнопку "Далее"
  nextBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchModal(1);
      // nextBtn[currentStep].disabled = true;
    });
  });
  // Обработчик изменения радио-кнопок
  radioBtns.forEach(function (btn) {
    btn.addEventListener('change', function () {
      // Добавляем класс active к выбранной радио-кнопке
      radioBtns.forEach(function (radioBtn) {
        radioBtn.parentNode.classList.remove('active');
      });
      btn.parentNode.classList.add('active');

      // Если выбран какой-то вариант, делаем кнопку "Далее" активной
      nextBtn[currentStep].disabled = false;
      switchModal(1);
    });
  });
  var selectWrapperCity = document.querySelector(".select__wrapper.city");
  selectWrapperCity.addEventListener("click", function () {
    selectWrapperCity.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    var sel = e.composedPath().includes(selectWrapperCity);
    if (!sel) {
      selectWrapperCity.classList.remove("active");
    }
  });
  var selectWrapperProfession = document.querySelector(".select__wrapper.profession");
  selectWrapperProfession.addEventListener("click", function () {
    selectWrapperProfession.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    var sel = e.composedPath().includes(selectWrapperProfession);
    if (!sel) {
      selectWrapperProfession.classList.remove("active");
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.9c3bfb371ff1203c6b71.js.map