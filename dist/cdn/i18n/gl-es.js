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
 * @fileoverview I18N for Spanish
 * @author Aida Vidal <avidal@emapic.es>
 */

_editorCore__WEBPACK_IMPORTED_MODULE_0___default().setLanguage(['gl', 'gl-ES'], {
    Markdown: 'Markdown',
    WYSIWYG: 'WYSIWYG',
    Write: 'Escribir',
    Preview: 'Vista previa',
    Headings: 'Encabezados',
    Paragraph: 'Par??grafo',
    Bold: 'Negri??a',
    Italic: 'Cursiva',
    Strike: 'Riscado',
    Code: 'C??digo',
    Line: 'Li??a',
    Blockquote: 'Cita',
    'Unordered list': 'Lista desordenada',
    'Ordered list': 'Lista ordenada',
    Task: 'Tarefa',
    Indent: 'Sangr??a',
    Outdent: 'Anular sangr??a',
    'Insert link': 'Inserir enlace',
    'Insert CodeBlock': 'Inserir bloque de c??digo',
    'Insert table': 'Inserir t??boa',
    'Insert image': 'Inserir imaxe',
    Heading: 'Encabezado',
    'Image URL': 'URL da imaxe',
    'Select image file': 'Seleccionar arquivo da imaxe',
    'Choose a file': 'Escoge un archivo',
    'No file': 'Ning??n archivo',
    Description: 'Descrici??n',
    OK: 'Aceptar',
    More: 'M??is',
    Cancel: 'Cancelar',
    File: 'Arquivo',
    URL: 'URL',
    'Link text': 'Texto do enlace',
    'Add row to up': 'Engade fila para arriba',
    'Add row to down': 'Engade fila para abaixo',
    'Add column to left': 'Engade columna ?? esquerda',
    'Add column to right': 'Engade columna ?? dereita',
    'Remove row': 'Eliminar fila',
    'Remove column': 'Eliminar columna',
    'Align column to left': 'Ali??ar ?? esquerda',
    'Align column to center': 'Centrar',
    'Align column to right': 'Ali??ar ?? dereita',
    'Remove table': 'Eliminar t??boa',
    'Would you like to paste as table?': 'Desexa pegar como t??boa?',
    'Text color': 'Cor do texto',
    'Auto scroll enabled': 'Desprazamento autom??tico habilitado',
    'Auto scroll disabled': 'Desprazamento autom??tico deshabilitado',
    'Choose language': 'Elixir idioma',
});

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});