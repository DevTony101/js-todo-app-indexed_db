/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/database/database.js":
/*!**********************************!*\
  !*** ./src/database/database.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Database; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Database = /*#__PURE__*/function () {\n  function Database(name, version) {\n    _classCallCheck(this, Database);\n\n    this.name = name;\n    this.version = version;\n    this.indexedDB = {};\n    this.database = window.indexedDB.open(name, version);\n  }\n\n  _createClass(Database, [{\n    key: \"init\",\n    value: function init(fields, successCallback) {\n      var _this = this;\n\n      this.database.onsuccess = function () {\n        console.log(\"Database \".concat(_this.name, \": created successfully\"));\n        _this.indexedDB = _this.database.result;\n        if (typeof successCallback === \"function\") successCallback();\n      };\n\n      this.database.onupgradeneeded = function (event) {\n        var instance = event.target.result;\n        var objectStore = instance.createObjectStore(_this.name, {\n          keyPath: \"key\",\n          autoIncrement: true\n        });\n        if (typeof fields === \"string\") fields = fields.split(\",\").map(function (s) {\n          return s.trim();\n        });\n\n        var _iterator = _createForOfIteratorHelper(fields),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var field = _step.value;\n            objectStore.createIndex(field, field);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      };\n    }\n  }, {\n    key: \"persist\",\n    value: function persist(task, success) {\n      if (_typeof(task) === \"object\") {\n        var transaction = this.indexedDB.transaction([this.name], \"readwrite\");\n        var objectStore = transaction.objectStore(this.name);\n        var request = objectStore.add(task);\n        if (typeof success === \"function\") request.onsuccess = success;\n        return transaction;\n      } else {\n        throw new Error(\"An object was expected.\");\n      }\n    }\n  }, {\n    key: \"getOpenCursor\",\n    value: function getOpenCursor() {\n      var transaction = this.indexedDB.transaction([this.name], \"readonly\");\n      var objectStore = transaction.objectStore(this.name);\n      return objectStore.openCursor();\n    } // retrieving particular record from DB by id\n\n  }, {\n    key: \"getField\",\n    value: function getField(id) {\n      if (typeof id === \"number\") {\n        var transaction = this.indexedDB.transaction([this.name], \"readonly\");\n        var objectStore = transaction.objectStore(this.name);\n        var request = objectStore.get(id);\n        return request;\n      } else {\n        throw new Error(\"Parameter 'id' expected to be a number.\");\n      }\n    } // saving the changes made in the particular record\n\n  }, {\n    key: \"saveChanges\",\n    value: function saveChanges(task, success) {\n      if (_typeof(task) === \"object\") {\n        var transaction = this.indexedDB.transaction([this.name], \"readwrite\");\n        var objectStore = transaction.objectStore(this.name);\n        var request = objectStore.put(task);\n        if (typeof success === \"function\") request.onsuccess = success;\n        return transaction;\n      } else {\n        throw new Error(\"An object was expected\");\n      }\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(id, success) {\n      if (typeof id === \"number\") {\n        var transaction = this.indexedDB.transaction([this.name], \"readwrite\");\n        var objectStore = transaction.objectStore(this.name);\n        var request = objectStore[\"delete\"](id);\n        if (typeof success === \"function\") transaction.oncomplete = success;\n      } else {\n        throw new Error(\"Parameter 'id' expected to be a number.\");\n      }\n    }\n  }, {\n    key: \"toggleDone\",\n    value: function toggleDone(id, isDone, success) {\n      if (typeof id === \"number\") {\n        var transaction = this.indexedDB.transaction([this.name], \"readwrite\");\n        var objectStore = transaction.objectStore(this.name);\n\n        objectStore.get(id).onsuccess = function (event) {\n          var task = event.target.result;\n          task.done = isDone;\n          var request = objectStore.put(task);\n          if (typeof success === \"function\") request.onsuccess = success;\n        };\n\n        return transaction;\n      } else {\n        throw new Error(\"Parameter 'id' expected to be a number.\");\n      }\n    }\n  }]);\n\n  return Database;\n}();\n\n\n\n//# sourceURL=webpack:///./src/database/database.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database/database */ \"./src/database/database.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var database = new _database_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"DBTasks\", 1);\n  database.init(\"title, description, done\", function () {\n    return showTasks();\n  });\n  var form = document.querySelector(\"#save-task\");\n  var tasksContainer = document.querySelector(\"#task-container\");\n  form.addEventListener(\"submit\", saveTask);\n  var modal = document.getElementById(\"myModal\");\n  var span = document.getElementsByClassName(\"close\")[0];\n  span.onclick = closeModal;\n\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      closeModal();\n    }\n  };\n\n  function saveTask(event) {\n    event.preventDefault();\n    var title = document.querySelector(\"#itTitle\").value;\n    var description = document.querySelector(\"#itDescription\").value;\n    var task = {\n      title: title,\n      description: description,\n      done: false\n    };\n    var transaction = database.persist(task, function () {\n      return form.reset();\n    });\n\n    transaction.oncomplete = function () {\n      console.log(\"Task added successfully!\");\n      showTasks();\n    };\n  } // function for taking in the values obtained in the form of modal and sending to database\n\n\n  function changeTask(event) {\n    event.preventDefault();\n    var key = Number(event.target.getAttribute(\"data-id\"));\n    var title = document.querySelector(\"#editTitle\").value;\n    var description = document.querySelector(\"#editDescription\").value;\n    var done = document.querySelector(\"#editDone\").checked;\n    var task = {\n      title: title,\n      description: description,\n      done: done,\n      key: key\n    };\n    var form = document.querySelector(\"#task-edit\");\n    var transaction = database.saveChanges(task, function () {\n      return form.reset();\n    });\n\n    transaction.oncomplete = function () {\n      closeModal();\n      console.log(\"Task edited successfully!\");\n      showTasks();\n    };\n  }\n\n  function showTasks() {\n    // Leave the div empty\n    while (tasksContainer.firstChild) {\n      tasksContainer.removeChild(tasksContainer.firstChild);\n    }\n\n    var request = database.getOpenCursor();\n\n    request.onsuccess = function (event) {\n      var cursor = event.target.result;\n\n      if (cursor) {\n        var _cursor$value = cursor.value,\n            key = _cursor$value.key,\n            title = _cursor$value.title,\n            description = _cursor$value.description,\n            done = _cursor$value.done; // Message container\n\n        var message = document.createElement(\"article\");\n        message.classList.add(\"message\", \"is-primary\");\n        message.classList.toggle(\"is-done\", done);\n        message.setAttribute(\"data-id\", key);\n        tasksContainer.appendChild(message); // Message header\n\n        var messageHeader = document.createElement(\"div\");\n        messageHeader.classList.add(\"message-header\");\n        messageHeader.innerHTML = \"<p>\".concat(title, \"</p>\");\n        message.appendChild(messageHeader); // Message body\n\n        var messageBody = document.createElement(\"div\");\n        messageBody.classList.add(\"message-body\");\n        messageBody.innerHTML = \"<p>\".concat(description, \"</p>\");\n        message.appendChild(messageBody); // Creating the delete button element\n\n        var deleteButton = document.createElement(\"button\");\n        deleteButton.classList.add(\"delete\");\n        deleteButton.setAttribute(\"aria-label\", \"delete\");\n        deleteButton.onclick = removeTask; // Adding it to the div message header\n\n        messageHeader.appendChild(deleteButton); // Add a container for controls\n\n        var controlsContainer = document.createElement(\"div\");\n        controlsContainer.classList.add(\"mt-4\", \"is-flex\", \"is-align-items-baseline\");\n        messageBody.appendChild(controlsContainer); // Creating the edit task button element\n\n        var editButton = document.createElement(\"button\");\n        editButton.classList.add(\"button\");\n        editButton.innerHTML = \"Edit\";\n        editButton.setAttribute(\"aria-label\", \"edit\");\n        editButton.onclick = editTask; // Adding it to the controls container\n\n        controlsContainer.appendChild(editButton); // Creating the \"done\" checkbox\n\n        var doneLabel = document.createElement(\"label\");\n        doneLabel.classList.add(\"checkbox\", \"ml-4\");\n        var doneCheckbox = document.createElement(\"input\");\n        doneCheckbox.setAttribute(\"type\", \"checkbox\");\n        doneCheckbox.checked = done;\n        doneCheckbox.onchange = toggleTaskDone;\n        doneLabel.appendChild(doneCheckbox);\n        doneLabel.appendChild(document.createTextNode(\" Done\")); // Adding it to the controls container\n\n        controlsContainer.appendChild(doneLabel);\n        cursor[\"continue\"]();\n      } else {\n        if (!tasksContainer.firstChild) {\n          var text = document.createElement(\"p\");\n          text.textContent = \"There are no tasks to be shown.\";\n          tasksContainer.appendChild(text);\n        }\n      }\n    };\n  }\n\n  function removeTask(event) {\n    var task = event.currentTarget.closest(\".message\");\n    var id = Number(task.getAttribute(\"data-id\"));\n    database[\"delete\"](id, function () {\n      // Step 1\n      tasksContainer.removeChild(task); // Step 2\n\n      if (!tasksContainer.firstChild) {\n        var text = document.createElement(\"p\");\n        text.textContent = \"There are no tasks to be shown.\";\n        tasksContainer.appendChild(text);\n      } // Optional Step 3: Console log for debugging purposes\n\n\n      console.log(\"Task with id \".concat(id, \" deleted successfully.\"));\n    });\n  }\n\n  function toggleTaskDone(event) {\n    var task = event.currentTarget.closest(\".message\");\n    var isDone = event.currentTarget.checked;\n    var id = Number(task.dataset.id);\n    database.toggleDone(id, isDone, function () {\n      task.classList.toggle(\"is-done\", isDone);\n    });\n  } // filling up the modal with values of the respective to-do task\n\n\n  function editTask(event) {\n    var task = event.currentTarget.closest(\".message\");\n    var id = Number(task.getAttribute(\"data-id\"));\n    var val = database.getField(id);\n\n    val.onsuccess = function () {\n      var _val$result = val.result,\n          key = _val$result.key,\n          title = _val$result.title,\n          description = _val$result.description,\n          done = _val$result.done;\n      var editTitle = document.getElementById(\"editTitle\");\n      editTitle.setAttribute(\"value\", title);\n      var editDescription = document.getElementById(\"editDescription\");\n      editDescription.innerHTML = description;\n      document.getElementById(\"editDone\").checked = done;\n    };\n\n    modal.style.display = \"block\";\n    var saveChange = document.querySelector(\"#btnsave\");\n    saveChange.setAttribute(\"data-id\", id);\n    saveChange.onclick = changeTask;\n  } // setting back modal content on closing\n\n\n  function closeModal() {\n    var modal = document.getElementById(\"myModal\");\n    var editTitle = document.getElementById(\"editTitle\");\n    editTitle.removeAttribute(\"value\");\n    var editDescription = document.getElementById(\"editDescription\");\n    editDescription.innerHTML = \"\";\n    var saveChange = document.querySelector(\"#btnsave\");\n    saveChange.removeAttribute(\"data-id\");\n    modal.style.display = \"none\";\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });