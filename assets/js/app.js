/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const sidebarBurger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst body = document.body;\r\nconst allMask = document.getElementById('all-mask');\r\n\r\nsidebarBurger.addEventListener('click', event => {\r\n    body.classList.toggle('show_sidebar');\r\n    body.classList.toggle('no_scroll');\r\n});\r\n\r\nallMask.addEventListener('click', event => {\r\n    body.classList.remove('show_sidebar');\r\n    body.classList.remove('no_scroll');\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal_close_btn');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal_content');\r\n\r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        });\r\n\r\n        modal.classList.add('show');\r\n        body.classList.add('no_scroll');\r\n    });\r\n});\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no_scroll');\r\n    });\r\n});\r\n\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.target;\r\n\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no_scroll');\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\ntextArea.forEach(item => {\r\n    let textAreaH = item.offsetHeight;\r\n    item.addEventListener('input', event => {\r\n        let $this = event.target;\r\n\r\n        $this.style.height = textAreaH + 'px';\r\n        $this.style.height = $this.scrollHeight + 'px';\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;