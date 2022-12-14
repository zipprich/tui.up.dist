/*!
 * TOAST UI Editor : i18n
 * @version 3.2.1
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@toast-ui/editor"));
	else if(typeof define === 'function' && define.amd)
		define(["@toast-ui/editor"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@toast-ui/editor")) : factory(root["toastui"]["Editor"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__213__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 213:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__213__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editorCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var _editorCore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorCore__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @fileoverview I18N for Czech
 * @author Dmitrij Tka??enko <dmitrij.tkacenko@scalesoft.cz>
 */

_editorCore__WEBPACK_IMPORTED_MODULE_0___default().setLanguage(['cs', 'cs-CZ'], {
    Markdown: 'Markdown',
    WYSIWYG: 'WYSIWYG',
    Write: 'Napsat',
    Preview: 'N??hled',
    Headings: 'Nadpisy',
    Paragraph: 'Odstavec',
    Bold: 'Tu??n??',
    Italic: 'Kurz??va',
    Strike: 'P??e??krtnut??',
    Code: 'K??d',
    Line: 'Vodorovn?? ????ra',
    Blockquote: 'Citace',
    'Unordered list': 'Seznam s odr????kami',
    'Ordered list': '????slovan?? seznam',
    Task: '??kol',
    Indent: 'Zv??t??it odsazen??',
    Outdent: 'Zmen??it odsazen??',
    'Insert link': 'Vlo??it odkaz',
    'Insert CodeBlock': 'Vlo??it blok k??du',
    'Insert table': 'Vlo??it tabulku',
    'Insert image': 'Vlo??it obr??zek',
    Heading: 'Nadpis',
    'Image URL': 'URL obr??zku',
    'Select image file': 'Vybrat obr??zek',
    'Choose a file': 'Vyberte soubor',
    'No file': '????dn?? soubor',
    Description: 'Popis',
    OK: 'OK',
    More: 'V??ce',
    Cancel: 'Zru??it',
    File: 'Soubor',
    URL: 'URL',
    'Link text': 'Text odkazu',
    'Add row to up': 'P??idejte ????dek nahoru',
    'Add row to down': 'P??idejte ????dek dol??',
    'Add column to left': 'P??idat sloupec vlevo',
    'Add column to right': 'P??idat sloupec doprava',
    'Remove row': 'Odebrat ????dek',
    'Remove column': 'Odebrat sloupec',
    'Align column to left': 'Zarovnat vlevo',
    'Align column to center': 'Zarovnat na st??ed',
    'Align column to right': 'Zarovnat vpravo',
    'Remove table': 'Odstranit tabulku',
    'Would you like to paste as table?': 'Chcete vlo??it jako tabulku?',
    'Text color': 'Barva textu',
    'Auto scroll enabled': 'Automatick?? rolov??n?? zapnuto',
    'Auto scroll disabled': 'Automatick?? rolov??n?? vypnuto',
    'Choose language': 'Vybrat jazyk',
});

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});