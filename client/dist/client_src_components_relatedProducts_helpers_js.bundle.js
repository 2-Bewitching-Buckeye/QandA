/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_src_components_relatedProducts_helpers_js"],{

/***/ "./client/src/components/relatedProducts/helpers.js":
/*!**********************************************************!*\
  !*** ./client/src/components/relatedProducts/helpers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollCardByWidth\": () => (/* binding */ scrollCardByWidth),\n/* harmony export */   \"checkSession\": () => (/* binding */ checkSession),\n/* harmony export */   \"addToLooksSession\": () => (/* binding */ addToLooksSession),\n/* harmony export */   \"removeFromLooksSession\": () => (/* binding */ removeFromLooksSession),\n/* harmony export */   \"structureTableData\": () => (/* binding */ structureTableData),\n/* harmony export */   \"checkCardAction\": () => (/* binding */ checkCardAction)\n/* harmony export */ });\n/* harmony import */ var rfdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfdc */ \"./node_modules/rfdc/index.js\");\n/* harmony import */ var rfdc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rfdc__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ \"./client/src/components/relatedProducts/utility.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar checkCardAction = function checkCardAction(props) {\n  var cardAction;\n\n  if (props.removeFromLooks) {\n    cardAction = props.removeFromLooks;\n  } else if (props.compareProducts) {\n    cardAction = props.compareProducts;\n  }\n\n  return cardAction;\n};\n\nvar scrollCardByWidth = function scrollCardByWidth(direction, width, carouselRef, setIndexFn, cardIndex) {\n  var amount;\n  width !== null ? amount = width : amount = 350;\n\n  if (direction === 'back') {\n    carouselRef.current.scrollBy(-amount, 0);\n    setIndexFn(cardIndex - 1);\n  } else if (direction === 'forward') {\n    carouselRef.current.scrollBy(amount, 0);\n    setIndexFn(cardIndex + 1);\n  }\n};\n\nvar checkSession = function checkSession(props, setSessionFn) {\n  var sessionLooks = props.getLooksInSession();\n\n  if (sessionLooks && sessionLooks.length && sessionLooks.length > 0) {\n    setSessionFn(sessionLooks);\n  }\n};\n\nvar addToLooksSession = function addToLooksSession(props, currentLooksArray, setCurrentLooksArray, currentProduct) {\n  if (currentLooksArray.length > 0) {\n    var clone = rfdc__WEBPACK_IMPORTED_MODULE_0___default()();\n\n    var _iterator = _createForOfIteratorHelper(currentLooksArray),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var product = _step.value;\n\n        if (product.id === props.currentProductId) {\n          return;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    var looksCopy = clone(currentLooksArray);\n    looksCopy.unshift(currentProduct);\n    setCurrentLooksArray(looksCopy);\n    window.sessionStorage.removeItem('Looks');\n    props.updateLooksInSession(looksCopy);\n  } else {\n    setCurrentLooksArray([currentProduct]);\n    window.sessionStorage.removeItem('Looks');\n    props.updateLooksInSession([currentProduct]);\n  }\n};\n\nvar removeFromLooksSession = function removeFromLooksSession(id, currentLooksArray, setCurrentLooksArray) {\n  var updatedLooks = currentLooksArray.filter(function (product) {\n    return product.id !== id;\n  });\n  setCurrentLooksArray(updatedLooks);\n  window.sessionStorage.removeItem('Looks');\n  window.sessionStorage.setItem('Looks', JSON.stringify(updatedLooks));\n};\n\nvar structureTableData = function structureTableData(props, setStateTableData) {\n  var featureObj = {};\n\n  var _iterator2 = _createForOfIteratorHelper(props.currentProduct.features),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var obj = _step2.value;\n      featureObj[(0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(obj.feature)] = [(0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(obj.feature), (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(obj.value), 1];\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  var _iterator3 = _createForOfIteratorHelper(props.comparedProduct.features),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var feat = _step3.value;\n\n      if (featureObj[(0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(feat.feature)] === undefined) {\n        featureObj[(0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(feat.feature)] = [(0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(feat.feature), (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(feat.value), 2];\n      } else {\n        featureObj[(0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.replaceEscapeQuotes)(feat.feature)].push(2);\n      }\n\n      setStateTableData(Object.values(featureObj));\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n};\n\n\n\n//# sourceURL=webpack://fec/./client/src/components/relatedProducts/helpers.js?");

/***/ }),

/***/ "./client/src/components/relatedProducts/utility.js":
/*!**********************************************************!*\
  !*** ./client/src/components/relatedProducts/utility.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"replaceEscapeQuotes\": () => (/* binding */ replaceEscapeQuotes),\n/* harmony export */   \"makePhotoMatrix\": () => (/* binding */ makePhotoMatrix)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar replaceEscapeQuotes = function replaceEscapeQuotes(string) {\n  if (string) {\n    return string = string.replace(/\\\\\"/g, '').replace(/['\"]+/g, '');\n  }\n\n  return string;\n};\n\nvar makePhotoMatrix = function makePhotoMatrix(photos) {\n  var imgs = [];\n\n  var _iterator = _createForOfIteratorHelper(photos),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var photo = _step.value;\n      imgs.push(photo);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var rowsOfImages = [];\n\n  for (var i = 0; i < imgs.length; i += 4) {\n    rowsOfImages.push(imgs.slice(i, i + 4));\n  }\n\n  if (rowsOfImages.length > 0) {\n    return rowsOfImages;\n  } else {\n    return null;\n  }\n};\n\n\n\n//# sourceURL=webpack://fec/./client/src/components/relatedProducts/utility.js?");

/***/ }),

/***/ "./node_modules/rfdc/index.js":
/*!************************************!*\
  !*** ./node_modules/rfdc/index.js ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("\nmodule.exports = rfdc\n\nfunction copyBuffer (cur) {\n  if (cur instanceof Buffer) {\n    return Buffer.from(cur)\n  }\n\n  return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length)\n}\n\nfunction rfdc (opts) {\n  opts = opts || {}\n\n  if (opts.circles) return rfdcCircles(opts)\n  return opts.proto ? cloneProto : clone\n\n  function cloneArray (a, fn) {\n    var keys = Object.keys(a)\n    var a2 = new Array(keys.length)\n    for (var i = 0; i < keys.length; i++) {\n      var k = keys[i]\n      var cur = a[k]\n      if (typeof cur !== 'object' || cur === null) {\n        a2[k] = cur\n      } else if (cur instanceof Date) {\n        a2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        a2[k] = copyBuffer(cur)\n      } else {\n        a2[k] = fn(cur)\n      }\n    }\n    return a2\n  }\n\n  function clone (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, clone)\n    var o2 = {}\n    for (var k in o) {\n      if (Object.hasOwnProperty.call(o, k) === false) continue\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        o2[k] = clone(cur)\n      }\n    }\n    return o2\n  }\n\n  function cloneProto (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, cloneProto)\n    var o2 = {}\n    for (var k in o) {\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        o2[k] = cloneProto(cur)\n      }\n    }\n    return o2\n  }\n}\n\nfunction rfdcCircles (opts) {\n  var refs = []\n  var refsNew = []\n\n  return opts.proto ? cloneProto : clone\n\n  function cloneArray (a, fn) {\n    var keys = Object.keys(a)\n    var a2 = new Array(keys.length)\n    for (var i = 0; i < keys.length; i++) {\n      var k = keys[i]\n      var cur = a[k]\n      if (typeof cur !== 'object' || cur === null) {\n        a2[k] = cur\n      } else if (cur instanceof Date) {\n        a2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        a2[k] = copyBuffer(cur)\n      } else {\n        var index = refs.indexOf(cur)\n        if (index !== -1) {\n          a2[k] = refsNew[index]\n        } else {\n          a2[k] = fn(cur)\n        }\n      }\n    }\n    return a2\n  }\n\n  function clone (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, clone)\n    var o2 = {}\n    refs.push(o)\n    refsNew.push(o2)\n    for (var k in o) {\n      if (Object.hasOwnProperty.call(o, k) === false) continue\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        var i = refs.indexOf(cur)\n        if (i !== -1) {\n          o2[k] = refsNew[i]\n        } else {\n          o2[k] = clone(cur)\n        }\n      }\n    }\n    refs.pop()\n    refsNew.pop()\n    return o2\n  }\n\n  function cloneProto (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, cloneProto)\n    var o2 = {}\n    refs.push(o)\n    refsNew.push(o2)\n    for (var k in o) {\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        var i = refs.indexOf(cur)\n        if (i !== -1) {\n          o2[k] = refsNew[i]\n        } else {\n          o2[k] = cloneProto(cur)\n        }\n      }\n    }\n    refs.pop()\n    refsNew.pop()\n    return o2\n  }\n}\n\n\n//# sourceURL=webpack://fec/./node_modules/rfdc/index.js?");

/***/ })

}]);