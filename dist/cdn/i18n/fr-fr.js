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
 * @fileoverview I18N for French
 * @author Stanislas Michalak <stanislas.michalak@gmail.com>
 */

_editorCore__WEBPACK_IMPORTED_MODULE_0___default().setLanguage(['fr', 'fr-FR'], {
    Markdown: 'Markdown',
    WYSIWYG: 'WYSIWYG',
    Write: '??crire',
    Preview: 'Aper??u',
    Headings: 'En-t??tes',
    Paragraph: 'Paragraphe',
    Bold: 'Gras',
    Italic: 'Italique',
    Strike: 'Barr??',
    Code: 'Code en ligne',
    Line: 'Ligne',
    Blockquote: 'Citation',
    'Unordered list': 'Liste non-ordonn??e',
    'Ordered list': 'Liste ordonn??e',
    Task: 'T??che',
    Indent: 'Retrait',
    Outdent: 'Sortir',
    'Insert link': 'Ins??rer un lien',
    'Insert CodeBlock': 'Ins??rer un bloc de code',
    'Insert table': 'Ins??rer un tableau',
    'Insert image': 'Ins??rer une image',
    Heading: 'En-t??te',
    'Image URL': "URL de l'image",
    'Select image file': 'S??lectionnez un fichier image',
    'Choose a file': 'Choisissez un fichier',
    'No file': 'Pas de fichier',
    Description: 'Description',
    OK: 'OK',
    More: 'de plus',
    Cancel: 'Annuler',
    File: 'Fichier',
    URL: 'URL',
    'Link text': 'Texte du lien',
    'Add row to up': 'Ajouter une ligne vers le haut',
    'Add row to down': 'Ajouter une ligne vers le bas',
    'Add column to left': 'Ajouter une colonne ?? gauche',
    'Add column to right': 'Ajouter une colonne ?? droite',
    'Remove row': 'Supprimer une ligne',
    'Remove column': 'Supprimer une colonne',
    'Align column to left': 'Aligner ?? gauche',
    'Align column to center': 'Aligner au centre',
    'Align column to right': 'Aligner ?? droite',
    'Remove table': 'Supprimer le tableau',
    'Would you like to paste as table?': 'Voulez-vous coller ce contenu en tant que tableau ?',
    'Text color': 'Couleur du texte',
    'Auto scroll enabled': 'D??filement automatique activ??',
    'Auto scroll disabled': 'D??filement automatique d??sactiv??',
    'Choose language': 'Choix de la langue',
});

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});