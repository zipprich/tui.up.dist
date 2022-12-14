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
 * @fileoverview I18N for Turkish
 * @author Mesut G??lc??k <mesutgolcuk@gmail.com>
 */

_editorCore__WEBPACK_IMPORTED_MODULE_0___default().setLanguage(['tr', 'tr-TR'], {
    Markdown: 'Markdown',
    WYSIWYG: 'WYSIWYG',
    Write: 'D??zenle',
    Preview: '??n izleme',
    Headings: 'Ba??l??klar',
    Paragraph: 'Paragraf',
    Bold: 'Kal??n',
    Italic: '??talik',
    Strike: 'Alt?? ??izgili',
    Code: 'Sat??r i??i kod',
    Line: '??izgi',
    Blockquote: 'Al??nt??',
    'Unordered list': 'S??ralanmam???? liste',
    'Ordered list': 'S??ral?? liste',
    Task: 'G??rev kutusu',
    Indent: 'Girintiyi artt??r',
    Outdent: 'Girintiyi azalt',
    'Insert link': 'Ba??lant?? ekle',
    'Insert CodeBlock': 'Kod bloku ekle',
    'Insert table': 'Tablo ekle',
    'Insert image': '??maj ekle',
    Heading: 'Ba??l??k',
    'Image URL': '??maj URL',
    'Select image file': '??maj dosyas?? se??',
    'Choose a file': 'Bir dosya se??in',
    'No file': 'Dosya yok',
    Description: 'A????klama',
    OK: 'Onay',
    More: 'Daha Fazla',
    Cancel: '??ptal',
    File: 'Dosya',
    URL: 'URL',
    'Link text': 'Ba??lant?? yaz??s??',
    'Add row to up': 'Yukar?? sat??r ekle',
    'Add row to down': 'A??a???? sat??r ekle',
    'Add column to left': 'Sola s??tun ekleyin',
    'Add column to right': 'Sa??a s??tun ekle',
    'Remove row': 'Sat??r sil',
    'Remove column': 'S??tun sil',
    'Align column to left': 'Sola hizala',
    'Align column to center': 'Merkeze hizala',
    'Align column to right': 'Sa??a hizala',
    'Remove table': 'Tabloyu kald??r',
    'Would you like to paste as table?': 'Tablo olarak yap????t??rmak ister misiniz?',
    'Text color': 'Metin rengi',
    'Auto scroll enabled': 'Otomatik kayd??rma a????k',
    'Auto scroll disabled': 'Otomatik kayd??rma kapal??',
    'Choose language': 'Dil se??iniz',
});

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});