(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["keycuts"] = factory();
	else
		root["keycuts"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Keys.js":
/*!*********************!*\
  !*** ./src/Keys.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateId = __webpack_require__(/*! ./generateId */ "./src/generateId.js");

var _generateId2 = _interopRequireDefault(_generateId);

var _cleanShortcut = __webpack_require__(/*! ./cleanShortcut */ "./src/cleanShortcut.js");

var _cleanShortcut2 = _interopRequireDefault(_cleanShortcut);

var _parseShortcut = __webpack_require__(/*! ./parseShortcut */ "./src/parseShortcut.js");

var _parseShortcut2 = _interopRequireDefault(_parseShortcut);

var _stringifyShortcut = __webpack_require__(/*! ./stringifyShortcut */ "./src/stringifyShortcut.js");

var _stringifyShortcut2 = _interopRequireDefault(_stringifyShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The main class to access the features of the KeyCuts library.
 * @param {HTMLElement} element The HTML element that should listen to
 *   keyboard shortcuts (if not provided then the document object is used).
 * @param {Object} options - Additional options (optional).
 * @param {boolean} options.triggerOncePerKey - If a key is kept down then
 *   the shortcut will be triggered multiple times when set to false and
 *   only once when set to true (default: false)
 * @param {boolean} options.useCodeInsteadKey - If set to false then
 *   KeyboardEvent.key is evaluated for triggering shortcuts, otherwise
 *   KeyboardEvent.code (default: false)
 * @param {number} options.maxSequenceLength - The maximum sequence of
 *   key or combos that should be tracked (default: 3)
 * @param {Function} options.filter - A filter function. If the filter
 *   returns false the event will be filtered out and no bound handler
 *   or watcher will be triggered. The filter function will be called
 *   with the key event. The default filter will always return true.
 */
var Keys =
/** The name of the default scope. */
function Keys(element, options) {
  var _this = this;

  _classCallCheck(this, Keys);

  this._stopped = true;
  this._currentScope = Keys.DEFAULT_SCOPE;
  this._currentCombo = [];
  this._sequence = [];
  this._handlers = [];
  this._watchers = [];
  this.options = {
    triggerOncePerKey: false,
    useCodeInsteadKey: false,
    maxSequenceLength: 3,
    filter: function filter() {
      return true;
    }
  };

  this._onKeyDown = function (event) {
    if (!_this.options.filter.call(_this, event)) return;

    var key = _this.options.useCodeInsteadKey ? event.code : event.key;

    if (key.length === 1) {
      key = key.toLowerCase();
      if (key === ' ') key = 'Space';
    }

    var alreadyTriggered = _this._currentCombo.includes(key);

    if (!alreadyTriggered) {
      _this._currentCombo.push(key);
      _this._currentCombo.sort();

      if (_this._sequence.length === 0 || _this._sequence[_this._sequence.length - 1] !== _this._currentCombo) {
        if (_this._sequence.length === _this.options.maxSequenceLength) _this._sequence.shift();

        _this._sequence.push(_this._currentCombo);
      }
    }

    if (!alreadyTriggered || !_this.options.triggerOncePerKey) {
      _this._notifyWatchers(event);
      _this._dispatchHandlers(event);
    }
  };

  this._onKeyUp = function (event) {
    if (!_this.options.filter.call(_this, event)) return;

    var key = _this.options.useCodeInsteadKey ? event.code : event.key;

    if (key.length === 1) {
      key = key.toLowerCase();
      if (key === ' ') key = 'Space';
    }

    _this._currentCombo = [].concat(_toConsumableArray(_this._currentCombo));

    var index = _this._currentCombo.indexOf(key);
    if (index !== -1) {
      _this._currentCombo.splice(index, 1);
      _this._currentCombo.sort();
    }

    _this._notifyWatchers(event);
  };

  this._resetKeys = function () {
    _this._currentCombo = [];
    _this._sequence = [];
  };

  this._notifyWatchers = function (event) {
    var sequence = JSON.parse(JSON.stringify(_this._sequence));

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this._watchers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var watcher = _step.value;

        watcher.callback(sequence, event);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  this._dispatchHandlers = function (event) {
    var sequence = JSON.parse(JSON.stringify(_this._sequence));

    var signatures = [];

    var signatureSequence = [];
    for (var i = _this._sequence.length - 1; i >= 0; i--) {
      signatureSequence = [_this._sequence[i]].concat(_toConsumableArray(signatureSequence));
      signatures.push((0, _stringifyShortcut2.default)(signatureSequence));
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _this._handlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var handler = _step2.value;

        if (_this._currentScope === handler.scope && signatures.includes(handler.signature)) {
          handler.callback(sequence, event);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  this.bind = function (shortcut, scope, callback) {
    if (callback === undefined) {
      callback = scope;
      scope = Keys.DEFAULT_SCOPE;
    }

    if (typeof shortcut === 'string') shortcut = (0, _parseShortcut2.default)(shortcut);

    shortcut = (0, _cleanShortcut2.default)(shortcut);

    var handlerId = (0, _generateId2.default)();
    _this._handlers.push({
      id: handlerId,
      signature: (0, _stringifyShortcut2.default)(shortcut),
      shortcut: shortcut,
      scope: scope,
      callback: callback
    });

    return handlerId;
  };

  this.unbind = function (handlerId) {
    var index = _this._handlers.findIndex(function (handler) {
      return handler.id === handlerId;
    });

    if (index === -1) throw new Error('Invalid handler ID: ' + handlerId);

    _this._handlers.splice(index, 1);
  };

  this.unbindScope = function (scope) {
    var indices = [];
    _this._handlers.forEach(function (handler, index) {
      if (handler.scope === scope) indices.push(index);
    });

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = indices[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var index = _step3.value;

        _this._handlers.splice(index, 1);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  };

  this.unbindAll = function () {
    _this._handlers = [];
  };

  this.watch = function (callback) {
    var watcherId = (0, _generateId2.default)();
    _this._watchers.push({
      id: watcherId,
      callback: callback
    });

    return watcherId;
  };

  this.unwatch = function (watcherId) {
    var index = _this._watchers.findIndex(function (watcher) {
      return watcher.id === watcherId;
    });

    if (index === -1) throw new Error('Invalid watcher ID: ' + watcherId);

    _this._watchers.splice(index, 1);
  };

  this.unwatchAll = function () {
    _this._watchers = [];
  };

  this.switchScope = function (scope) {
    _this._currentScope = scope;
  };

  this.stop = function () {
    if (!_this._stopped) {
      _this._element.removeEventListener('keydown', _this._onKeyDown);
      _this._element.removeEventListener('keyup', _this._onKeyUp);
      _this._element.removeEventListener('focus', _this._resetKeys);
      _this._element.removeEventListener('blur', _this._resetKeys);

      _this._resetKeys();

      _this._stopped = true;
    }
  };

  this.resume = function () {
    if (_this._stopped) {
      _this._element.addEventListener('keydown', _this._onKeyDown);
      _this._element.addEventListener('keyup', _this._onKeyUp);
      _this._element.addEventListener('focus', _this._resetKeys);
      _this._element.addEventListener('blur', _this._resetKeys);

      _this._stopped = false;
    }
  };

  this.reset = function () {
    _this._resetKeys();
    _this.unbindAll();
    _this.unwatchAll();
  };

  if (!element) element = document;
  this._element = element;

  Object.assign(this.options, options);

  this.resume();
}

/**
 * Bind a keyboard shortcut. A shortcut can be in string or array format.
 * @param {string|string[]|Array.<string[]>} shortcut - The shortcut to bind.
 * @param {string} scope - An optional scope.
 * @param {Function} callback - The callback that should be triggered.
 *   The callback gets called with the current key or combo sequence
 *   and the key event.
 * @return {number} The unique ID of the bound handler.
 */


/**
 * Unbind a specific keyboard shortcut handler using its ID.
 * @param {number} handlerId - The ID returned by the {@link bind} method.
 * @throws Throws an error when the ID is invalid.
 */


/**
 * Unbind keyboard shortcut handlers having the specified scope.
 * @param {String} scope - The scope.
 */


/**
 * Unbind all keyboard shortcut handlers.
 */


/**
 * Watch keyboard events (keydown and keyup).
 * @param {Function} callback - The callback that should be triggered.
 *   when a keydown or keyup event occurs. The callback gets called with
 *   the current key or combo sequence and the key event.
 * @return {number} The unique ID of the added watcher.
 */


/**
 * Unbind a specific watcher using its ID.
 * @param {number} watcherId - The ID returned by the {@link watch} method.
 * @throws Throws an error when the ID is invalid.
 */


/**
 * Unbind all watchers.
 */


/**
 * Switch the scope. Only bound handlers get triggered that have the new
 * scope. The default scope can be accessed by {@link Keys.DEFAULT_SCOPE}.
 * @param {number} scope - The scope.
 */


/**
 * Stop listening to key events and reset the key sequence.
 */


/**
 * Resume listening to key events.
 */


/* Reset this instance by unbinding all handlers, removing all watchers
 * and resetting the key sequence.
 */
;

Keys.DEFAULT_SCOPE = 'DEFAULT_SCOPE';
exports.default = Keys;

/***/ }),

/***/ "./src/cleanShortcut.js":
/*!******************************!*\
  !*** ./src/cleanShortcut.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (shortcut) {
  if (!Array.isArray(shortcut) || shortcut.length === 0) throw new Error('Invalid array shortcut to clean: ' + shortcut);

  var isSequence = typeof shortcut[0] !== 'string';

  if (isSequence && shortcut.length === 1) {
    shortcut = shortcut[0];
    isSequence = false;
  }

  if (isSequence) cleanSequence(shortcut);else cleanCombo(shortcut);

  return shortcut;
};

function cleanSequence(sequence) {
  for (var i = 0; i < sequence.length; i++) {
    if (!Array.isArray(sequence[i])) throw new Error('Invalid shortcut sequence ' + sequence + '.');

    cleanCombo(sequence[i]);
  }
}

function cleanCombo(combo) {
  for (var i = 0; i < combo.length; i++) {
    if (typeof combo[i] !== 'string') throw new Error('Invalid shortcut combo ' + combo + '.');

    var cleanedKey = cleanKey(combo[i]);
    if (!cleanedKey) throw new Error('Invalid key ' + cleanedKey + ' in shortcut combo ' + combo + '.');

    combo[i] = cleanedKey;
  }
  combo.sort();
}

function cleanKey(key) {
  key = key.replace(/\s+/g, ' ');
  if (key === ' ') key = 'Space';
  key = key.trim();
  if (key.length === 1) key = key.toLowerCase();
  return key;
}

/**
 * Clean an array shortcut. The array is cleaned in-place and also returned.
 * Unnecessary white space is removed, key combinations are sorted and
 * single chars converted to lower case.
 * @param {string[]|Array.<string[]>} shortcut - The array shortcut to clean.
 * @return {string[]|Array.<string[]>} The cleaned array shortcut.
 */

/***/ }),

/***/ "./src/generateId.js":
/*!***************************!*\
  !*** ./src/generateId.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return nextId++;
};

var nextId = 1;

/**
 * Create a unique ID every time it is called.
 * @return {number} A unique ID.
 */

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Keys = __webpack_require__(/*! ./Keys */ "./src/Keys.js");

Object.defineProperty(exports, 'Keys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Keys).default;
  }
});

var _cleanShortcut = __webpack_require__(/*! ./cleanShortcut */ "./src/cleanShortcut.js");

Object.defineProperty(exports, 'cleanShortcut', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cleanShortcut).default;
  }
});

var _generateId = __webpack_require__(/*! ./generateId */ "./src/generateId.js");

Object.defineProperty(exports, 'generateId', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_generateId).default;
  }
});

var _parseShortcut = __webpack_require__(/*! ./parseShortcut */ "./src/parseShortcut.js");

Object.defineProperty(exports, 'parseShortcut', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseShortcut).default;
  }
});

var _stringifyShortcut = __webpack_require__(/*! ./stringifyShortcut */ "./src/stringifyShortcut.js");

Object.defineProperty(exports, 'stringifyShortcut', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stringifyShortcut).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/parseShortcut.js":
/*!******************************!*\
  !*** ./src/parseShortcut.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (shortcut) {
  if (typeof shortcut !== 'string') throw new Error('Invalid string shortcut to parse: ' + shortcut);

  shortcut = shortcut.replace(/\s+/g, '');

  if (typeof shortcut !== 'string' || shortcut.length === 0) throw new Error('Invalid shortcut (must be non empty string): ' + shortcut);

  var key = [];
  var combo = [];
  var sequence = [];

  for (var i = 0; i < shortcut.length; i++) {
    var c = shortcut.charAt(i);
    if (!key.length) {
      key.push(c);
    } else {
      if (c === COMBINE_WITH) {
        combo.push(convertKey(key));
        key = [];
      } else if (c === FOLLOWED_BY) {
        combo.push(convertKey(key));
        key = [];
        combo.sort();
        sequence.push(combo);
        combo = [];
      } else {
        key.push(c);
      }
    }
  }

  if (key.length) {
    combo.push(convertKey(key));
    combo.sort();
    sequence.push(combo);
  } else {
    throw new Error('Invalid shortcut (must end with key): ' + shortcut);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sequence[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _combo = _step.value;

      var duplicates = getDuplicates(_combo);
      if (duplicates.length > 0) throw new Error('Invalid shortcut (duplicate keys):' + shortcut);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (sequence.length === 1) return sequence[0];else return sequence;
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COMBINE_WITH = '+';
var FOLLOWED_BY = '>';

function getDuplicates(combo) {
  var count = function count(combo) {
    return combo.reduce(function (k1, k2) {
      return Object.assign(k1, _defineProperty({}, k2, (k1[k2] || 0) + 1));
    }, {});
  };
  var duplicates = function duplicates(dict) {
    return Object.keys(dict).filter(function (k) {
      return dict[k] > 1;
    });
  };
  return duplicates(count(combo));
}

function convertKey(key) {
  key = key.join('');
  if (key.length === 1) key = key.toLowerCase();
  return key;
}

/**
 * Parse a string shortcut and return the equivalent array shortcut.
 * @param {string} shortcut - The string shortcut to convert.
 * @return {string[]|Array.<string[]>} The converted array shortcut.
 */

/***/ }),

/***/ "./src/stringifyShortcut.js":
/*!**********************************!*\
  !*** ./src/stringifyShortcut.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (shortcut) {
  if (!Array.isArray(shortcut)) throw new Error('Invalid array shortcut to stringify: ' + shortcut);

  var isSequence = typeof shortcut[0] !== 'string';

  if (!isSequence) {
    return shortcut.join(COMBINE_WITH);
  } else {
    return shortcut.map(function (part) {
      return part.join(COMBINE_WITH);
    }).join(FOLLOWED_BY);
  }
};

var COMBINE_WITH = ' + ';
var FOLLOWED_BY = ' > ';

/**
 * Create equivalent string shortcut of an array shortcut.
 * @param {string[]|Array.<string[]>} shortcut - The array shortcut to convert.
 * @return {string} The converted string shortcurt.
 */

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvS2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY2xlYW5TaG9ydGN1dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3BhcnNlU2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzIl0sIm5hbWVzIjpbIktleXMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIl9zdG9wcGVkIiwiX2N1cnJlbnRTY29wZSIsIkRFRkFVTFRfU0NPUEUiLCJfY3VycmVudENvbWJvIiwiX3NlcXVlbmNlIiwiX2hhbmRsZXJzIiwiX3dhdGNoZXJzIiwidHJpZ2dlck9uY2VQZXJLZXkiLCJ1c2VDb2RlSW5zdGVhZEtleSIsIm1heFNlcXVlbmNlTGVuZ3RoIiwiZmlsdGVyIiwiX29uS2V5RG93biIsImNhbGwiLCJldmVudCIsImtleSIsImNvZGUiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImFscmVhZHlUcmlnZ2VyZWQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0Iiwic2hpZnQiLCJfbm90aWZ5V2F0Y2hlcnMiLCJfZGlzcGF0Y2hIYW5kbGVycyIsIl9vbktleVVwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiX3Jlc2V0S2V5cyIsInNlcXVlbmNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwid2F0Y2hlciIsImNhbGxiYWNrIiwic2lnbmF0dXJlcyIsInNpZ25hdHVyZVNlcXVlbmNlIiwiaSIsImhhbmRsZXIiLCJzY29wZSIsInNpZ25hdHVyZSIsImJpbmQiLCJzaG9ydGN1dCIsInVuZGVmaW5lZCIsImhhbmRsZXJJZCIsImlkIiwidW5iaW5kIiwiZmluZEluZGV4IiwiRXJyb3IiLCJ1bmJpbmRTY29wZSIsImluZGljZXMiLCJmb3JFYWNoIiwidW5iaW5kQWxsIiwid2F0Y2giLCJ3YXRjaGVySWQiLCJ1bndhdGNoIiwidW53YXRjaEFsbCIsInN3aXRjaFNjb3BlIiwic3RvcCIsIl9lbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3VtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldCIsImRvY3VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNTZXF1ZW5jZSIsImNsZWFuU2VxdWVuY2UiLCJjbGVhbkNvbWJvIiwiY29tYm8iLCJjbGVhbmVkS2V5IiwiY2xlYW5LZXkiLCJyZXBsYWNlIiwidHJpbSIsIm5leHRJZCIsImRlZmF1bHQiLCJjIiwiY2hhckF0IiwiQ09NQklORV9XSVRIIiwiY29udmVydEtleSIsIkZPTExPV0VEX0JZIiwiZHVwbGljYXRlcyIsImdldER1cGxpY2F0ZXMiLCJjb3VudCIsInJlZHVjZSIsImsxIiwiazIiLCJrZXlzIiwiZGljdCIsImsiLCJqb2luIiwibWFwIiwicGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LFlBQWQsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU92QyxTQUFTb0QsR0FBVCxDQUFhO0FBQUEsYUFBUUMsS0FBS0YsSUFBTCxDQUFVWixZQUFWLENBQVI7QUFBQSxLQUFiLEVBQThDWSxJQUE5QyxDQUFtRFYsV0FBbkQsQ0FBUDtBQUNEO0FBQ0YsQzs7QUFuQkQsSUFBTUYsZUFBZSxLQUFyQjtBQUNBLElBQU1FLGNBQWMsS0FBcEI7O0FBRUEiLCJmaWxlIjoia2V5Y3V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtleWN1dHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2V5Y3V0c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL2dlbmVyYXRlSWQnXG5pbXBvcnQgY2xlYW5TaG9ydGN1dCBmcm9tICcuL2NsZWFuU2hvcnRjdXQnXG5pbXBvcnQgcGFyc2VTaG9ydGN1dCBmcm9tICcuL3BhcnNlU2hvcnRjdXQnXG5pbXBvcnQgc3RyaW5naWZ5U2hvcnRjdXQgZnJvbSAnLi9zdHJpbmdpZnlTaG9ydGN1dCdcblxuLyoqXG4gKiBUaGUgbWFpbiBjbGFzcyB0byBhY2Nlc3MgdGhlIGZlYXR1cmVzIG9mIHRoZSBLZXlDdXRzIGxpYnJhcnkuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBIVE1MIGVsZW1lbnQgdGhhdCBzaG91bGQgbGlzdGVuIHRvXG4gKiAgIGtleWJvYXJkIHNob3J0Y3V0cyAoaWYgbm90IHByb3ZpZGVkIHRoZW4gdGhlIGRvY3VtZW50IG9iamVjdCBpcyB1c2VkKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQWRkaXRpb25hbCBvcHRpb25zIChvcHRpb25hbCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudHJpZ2dlck9uY2VQZXJLZXkgLSBJZiBhIGtleSBpcyBrZXB0IGRvd24gdGhlblxuICogICB0aGUgc2hvcnRjdXQgd2lsbCBiZSB0cmlnZ2VyZWQgbXVsdGlwbGUgdGltZXMgd2hlbiBzZXQgdG8gZmFsc2UgYW5kXG4gKiAgIG9ubHkgb25jZSB3aGVuIHNldCB0byB0cnVlIChkZWZhdWx0OiBmYWxzZSlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy51c2VDb2RlSW5zdGVhZEtleSAtIElmIHNldCB0byBmYWxzZSB0aGVuXG4gKiAgIEtleWJvYXJkRXZlbnQua2V5IGlzIGV2YWx1YXRlZCBmb3IgdHJpZ2dlcmluZyBzaG9ydGN1dHMsIG90aGVyd2lzZVxuICogICBLZXlib2FyZEV2ZW50LmNvZGUgKGRlZmF1bHQ6IGZhbHNlKVxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubWF4U2VxdWVuY2VMZW5ndGggLSBUaGUgbWF4aW11bSBzZXF1ZW5jZSBvZlxuICogICBrZXkgb3IgY29tYm9zIHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQgKGRlZmF1bHQ6IDMpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmZpbHRlciAtIEEgZmlsdGVyIGZ1bmN0aW9uLiBJZiB0aGUgZmlsdGVyXG4gKiAgIHJldHVybnMgZmFsc2UgdGhlIGV2ZW50IHdpbGwgYmUgZmlsdGVyZWQgb3V0IGFuZCBubyBib3VuZCBoYW5kbGVyXG4gKiAgIG9yIHdhdGNoZXIgd2lsbCBiZSB0cmlnZ2VyZWQuIFRoZSBmaWx0ZXIgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqICAgd2l0aCB0aGUga2V5IGV2ZW50LiBUaGUgZGVmYXVsdCBmaWx0ZXIgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG4gKi9cbmNsYXNzIEtleXMge1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgc2NvcGUuICovXG4gIHN0YXRpYyBERUZBVUxUX1NDT1BFID0gJ0RFRkFVTFRfU0NPUEUnXG5cbiAgX3N0b3BwZWQgPSB0cnVlXG4gIF9jdXJyZW50U2NvcGUgPSBLZXlzLkRFRkFVTFRfU0NPUEVcbiAgX2N1cnJlbnRDb21ibyA9IFtdXG4gIF9zZXF1ZW5jZSA9IFtdXG4gIF9oYW5kbGVycyA9IFtdXG4gIF93YXRjaGVycyA9IFtdXG5cbiAgb3B0aW9ucyA9IHtcbiAgICB0cmlnZ2VyT25jZVBlcktleTogZmFsc2UsXG4gICAgdXNlQ29kZUluc3RlYWRLZXk6IGZhbHNlLFxuICAgIG1heFNlcXVlbmNlTGVuZ3RoOiAzLFxuICAgIGZpbHRlcjogKCkgPT4gdHJ1ZVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmICghZWxlbWVudCkgZWxlbWVudCA9IGRvY3VtZW50XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuXG4gICAgdGhpcy5yZXN1bWUoKVxuICB9XG5cbiAgX29uS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5maWx0ZXIuY2FsbCh0aGlzLCBldmVudCkpIHJldHVyblxuXG4gICAgbGV0IGtleSA9IHRoaXMub3B0aW9ucy51c2VDb2RlSW5zdGVhZEtleSA/IGV2ZW50LmNvZGUgOiBldmVudC5rZXlcblxuICAgIGlmIChrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgaWYgKGtleSA9PT0gJyAnKSBrZXkgPSAnU3BhY2UnXG4gICAgfVxuXG4gICAgY29uc3QgYWxyZWFkeVRyaWdnZXJlZCA9IHRoaXMuX2N1cnJlbnRDb21iby5pbmNsdWRlcyhrZXkpXG5cbiAgICBpZiAoIWFscmVhZHlUcmlnZ2VyZWQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb21iby5wdXNoKGtleSlcbiAgICAgIHRoaXMuX2N1cnJlbnRDb21iby5zb3J0KClcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9zZXF1ZW5jZS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgdGhpcy5fc2VxdWVuY2VbdGhpcy5fc2VxdWVuY2UubGVuZ3RoIC0gMV0gIT09IHRoaXMuX2N1cnJlbnRDb21ib1xuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZXF1ZW5jZS5sZW5ndGggPT09IHRoaXMub3B0aW9ucy5tYXhTZXF1ZW5jZUxlbmd0aClcbiAgICAgICAgICB0aGlzLl9zZXF1ZW5jZS5zaGlmdCgpXG5cbiAgICAgICAgdGhpcy5fc2VxdWVuY2UucHVzaCh0aGlzLl9jdXJyZW50Q29tYm8pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhbHJlYWR5VHJpZ2dlcmVkIHx8ICF0aGlzLm9wdGlvbnMudHJpZ2dlck9uY2VQZXJLZXkpIHtcbiAgICAgIHRoaXMuX25vdGlmeVdhdGNoZXJzKGV2ZW50KVxuICAgICAgdGhpcy5fZGlzcGF0Y2hIYW5kbGVycyhldmVudClcbiAgICB9XG4gIH1cblxuICBfb25LZXlVcCA9IGV2ZW50ID0+IHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5maWx0ZXIuY2FsbCh0aGlzLCBldmVudCkpIHJldHVyblxuXG4gICAgbGV0IGtleSA9IHRoaXMub3B0aW9ucy51c2VDb2RlSW5zdGVhZEtleSA/IGV2ZW50LmNvZGUgOiBldmVudC5rZXlcblxuICAgIGlmIChrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgaWYgKGtleSA9PT0gJyAnKSBrZXkgPSAnU3BhY2UnXG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudENvbWJvID0gWy4uLnRoaXMuX2N1cnJlbnRDb21ib11cblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY3VycmVudENvbWJvLmluZGV4T2Yoa2V5KVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb21iby5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB0aGlzLl9jdXJyZW50Q29tYm8uc29ydCgpXG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5V2F0Y2hlcnMoZXZlbnQpXG4gIH1cblxuICBfcmVzZXRLZXlzID0gKCkgPT4ge1xuICAgIHRoaXMuX2N1cnJlbnRDb21ibyA9IFtdXG4gICAgdGhpcy5fc2VxdWVuY2UgPSBbXVxuICB9XG5cbiAgX25vdGlmeVdhdGNoZXJzID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHNlcXVlbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zZXF1ZW5jZSkpXG5cbiAgICBmb3IgKGxldCB3YXRjaGVyIG9mIHRoaXMuX3dhdGNoZXJzKSB7XG4gICAgICB3YXRjaGVyLmNhbGxiYWNrKHNlcXVlbmNlLCBldmVudClcbiAgICB9XG4gIH1cblxuICBfZGlzcGF0Y2hIYW5kbGVycyA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBzZXF1ZW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VxdWVuY2UpKVxuXG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IFtdXG5cbiAgICBsZXQgc2lnbmF0dXJlU2VxdWVuY2UgPSBbXVxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9zZXF1ZW5jZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgc2lnbmF0dXJlU2VxdWVuY2UgPSBbdGhpcy5fc2VxdWVuY2VbaV0sIC4uLnNpZ25hdHVyZVNlcXVlbmNlXVxuICAgICAgc2lnbmF0dXJlcy5wdXNoKHN0cmluZ2lmeVNob3J0Y3V0KHNpZ25hdHVyZVNlcXVlbmNlKSlcbiAgICB9XG5cbiAgICBmb3IgKGxldCBoYW5kbGVyIG9mIHRoaXMuX2hhbmRsZXJzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY29wZSA9PT0gaGFuZGxlci5zY29wZSAmJlxuICAgICAgICBzaWduYXR1cmVzLmluY2x1ZGVzKGhhbmRsZXIuc2lnbmF0dXJlKVxuICAgICAgKSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbGJhY2soc2VxdWVuY2UsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEga2V5Ym9hcmQgc2hvcnRjdXQuIEEgc2hvcnRjdXQgY2FuIGJlIGluIHN0cmluZyBvciBhcnJheSBmb3JtYXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IHNob3J0Y3V0IC0gVGhlIHNob3J0Y3V0IHRvIGJpbmQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZSAtIEFuIG9wdGlvbmFsIHNjb3BlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQuXG4gICAqICAgVGhlIGNhbGxiYWNrIGdldHMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQga2V5IG9yIGNvbWJvIHNlcXVlbmNlXG4gICAqICAgYW5kIHRoZSBrZXkgZXZlbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgYm91bmQgaGFuZGxlci5cbiAgICovXG4gIGJpbmQgPSAoc2hvcnRjdXQsIHNjb3BlLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHNjb3BlXG4gICAgICBzY29wZSA9IEtleXMuREVGQVVMVF9TQ09QRVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2hvcnRjdXQgPT09ICdzdHJpbmcnKSBzaG9ydGN1dCA9IHBhcnNlU2hvcnRjdXQoc2hvcnRjdXQpXG5cbiAgICBzaG9ydGN1dCA9IGNsZWFuU2hvcnRjdXQoc2hvcnRjdXQpXG5cbiAgICBjb25zdCBoYW5kbGVySWQgPSBnZW5lcmF0ZUlkKClcbiAgICB0aGlzLl9oYW5kbGVycy5wdXNoKHtcbiAgICAgIGlkOiBoYW5kbGVySWQsXG4gICAgICBzaWduYXR1cmU6IHN0cmluZ2lmeVNob3J0Y3V0KHNob3J0Y3V0KSxcbiAgICAgIHNob3J0Y3V0LFxuICAgICAgc2NvcGUsXG4gICAgICBjYWxsYmFja1xuICAgIH0pXG5cbiAgICByZXR1cm4gaGFuZGxlcklkXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGEgc3BlY2lmaWMga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlciB1c2luZyBpdHMgSUQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYW5kbGVySWQgLSBUaGUgSUQgcmV0dXJuZWQgYnkgdGhlIHtAbGluayBiaW5kfSBtZXRob2QuXG4gICAqIEB0aHJvd3MgVGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIElEIGlzIGludmFsaWQuXG4gICAqL1xuICB1bmJpbmQgPSBoYW5kbGVySWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5faGFuZGxlcnMuZmluZEluZGV4KGhhbmRsZXIgPT4gaGFuZGxlci5pZCA9PT0gaGFuZGxlcklkKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhhbmRsZXIgSUQ6ICcgKyBoYW5kbGVySWQpXG5cbiAgICB0aGlzLl9oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJzIGhhdmluZyB0aGUgc3BlY2lmaWVkIHNjb3BlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgLSBUaGUgc2NvcGUuXG4gICAqL1xuICB1bmJpbmRTY29wZSA9IHNjb3BlID0+IHtcbiAgICBjb25zdCBpbmRpY2VzID0gW11cbiAgICB0aGlzLl9oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGhhbmRsZXIuc2NvcGUgPT09IHNjb3BlKSBpbmRpY2VzLnB1c2goaW5kZXgpXG4gICAgfSlcblxuICAgIGZvciAobGV0IGluZGV4IG9mIGluZGljZXMpIHtcbiAgICAgIHRoaXMuX2hhbmRsZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGFsbCBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVycy5cbiAgICovXG4gIHVuYmluZEFsbCA9ICgpID0+IHtcbiAgICB0aGlzLl9oYW5kbGVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogV2F0Y2gga2V5Ym9hcmQgZXZlbnRzIChrZXlkb3duIGFuZCBrZXl1cCkuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cbiAgICogICB3aGVuIGEga2V5ZG93biBvciBrZXl1cCBldmVudCBvY2N1cnMuIFRoZSBjYWxsYmFjayBnZXRzIGNhbGxlZCB3aXRoXG4gICAqICAgdGhlIGN1cnJlbnQga2V5IG9yIGNvbWJvIHNlcXVlbmNlIGFuZCB0aGUga2V5IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB1bmlxdWUgSUQgb2YgdGhlIGFkZGVkIHdhdGNoZXIuXG4gICAqL1xuICB3YXRjaCA9IGNhbGxiYWNrID0+IHtcbiAgICBjb25zdCB3YXRjaGVySWQgPSBnZW5lcmF0ZUlkKClcbiAgICB0aGlzLl93YXRjaGVycy5wdXNoKHtcbiAgICAgIGlkOiB3YXRjaGVySWQsXG4gICAgICBjYWxsYmFja1xuICAgIH0pXG5cbiAgICByZXR1cm4gd2F0Y2hlcklkXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGEgc3BlY2lmaWMgd2F0Y2hlciB1c2luZyBpdHMgSUQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3YXRjaGVySWQgLSBUaGUgSUQgcmV0dXJuZWQgYnkgdGhlIHtAbGluayB3YXRjaH0gbWV0aG9kLlxuICAgKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciB3aGVuIHRoZSBJRCBpcyBpbnZhbGlkLlxuICAgKi9cbiAgdW53YXRjaCA9IHdhdGNoZXJJZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl93YXRjaGVycy5maW5kSW5kZXgod2F0Y2hlciA9PiB3YXRjaGVyLmlkID09PSB3YXRjaGVySWQpXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgd2F0Y2hlciBJRDogJyArIHdhdGNoZXJJZClcblxuICAgIHRoaXMuX3dhdGNoZXJzLnNwbGljZShpbmRleCwgMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIHdhdGNoZXJzLlxuICAgKi9cbiAgdW53YXRjaEFsbCA9ICgpID0+IHtcbiAgICB0aGlzLl93YXRjaGVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBzY29wZS4gT25seSBib3VuZCBoYW5kbGVycyBnZXQgdHJpZ2dlcmVkIHRoYXQgaGF2ZSB0aGUgbmV3XG4gICAqIHNjb3BlLiBUaGUgZGVmYXVsdCBzY29wZSBjYW4gYmUgYWNjZXNzZWQgYnkge0BsaW5rIEtleXMuREVGQVVMVF9TQ09QRX0uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29wZSAtIFRoZSBzY29wZS5cbiAgICovXG4gIHN3aXRjaFNjb3BlID0gc2NvcGUgPT4ge1xuICAgIHRoaXMuX2N1cnJlbnRTY29wZSA9IHNjb3BlXG4gIH1cblxuICAvKipcbiAgICogU3RvcCBsaXN0ZW5pbmcgdG8ga2V5IGV2ZW50cyBhbmQgcmVzZXQgdGhlIGtleSBzZXF1ZW5jZS5cbiAgICovXG4gIHN0b3AgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLl9zdG9wcGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcClcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9yZXNldEtleXMpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9yZXNldEtleXMpXG5cbiAgICAgIHRoaXMuX3Jlc2V0S2V5cygpXG5cbiAgICAgIHRoaXMuX3N0b3BwZWQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc3VtZSBsaXN0ZW5pbmcgdG8ga2V5IGV2ZW50cy5cbiAgICovXG4gIHJlc3VtZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5fc3RvcHBlZCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKVxuICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fcmVzZXRLZXlzKVxuICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fcmVzZXRLZXlzKVxuXG4gICAgICB0aGlzLl9zdG9wcGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKiBSZXNldCB0aGlzIGluc3RhbmNlIGJ5IHVuYmluZGluZyBhbGwgaGFuZGxlcnMsIHJlbW92aW5nIGFsbCB3YXRjaGVyc1xuICAgKiBhbmQgcmVzZXR0aW5nIHRoZSBrZXkgc2VxdWVuY2UuXG4gICAqL1xuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLl9yZXNldEtleXMoKVxuICAgIHRoaXMudW5iaW5kQWxsKClcbiAgICB0aGlzLnVud2F0Y2hBbGwoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleXNcbiIsImZ1bmN0aW9uIGNsZWFuU2VxdWVuY2Uoc2VxdWVuY2UpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzZXF1ZW5jZVtpXSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2hvcnRjdXQgc2VxdWVuY2UgJHtzZXF1ZW5jZX0uYClcblxuICAgIGNsZWFuQ29tYm8oc2VxdWVuY2VbaV0pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5Db21ibyhjb21ibykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbWJvLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBjb21ib1tpXSAhPT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2hvcnRjdXQgY29tYm8gJHtjb21ib30uYClcblxuICAgIGNvbnN0IGNsZWFuZWRLZXkgPSBjbGVhbktleShjb21ib1tpXSlcbiAgICBpZiAoIWNsZWFuZWRLZXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQga2V5ICR7Y2xlYW5lZEtleX0gaW4gc2hvcnRjdXQgY29tYm8gJHtjb21ib30uYClcblxuICAgIGNvbWJvW2ldID0gY2xlYW5lZEtleVxuICB9XG4gIGNvbWJvLnNvcnQoKVxufVxuXG5mdW5jdGlvbiBjbGVhbktleShrZXkpIHtcbiAga2V5ID0ga2V5LnJlcGxhY2UoL1xccysvZywgJyAnKVxuICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSdcbiAga2V5ID0ga2V5LnRyaW0oKVxuICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIGtleVxufVxuXG4vKipcbiAqIENsZWFuIGFuIGFycmF5IHNob3J0Y3V0LiBUaGUgYXJyYXkgaXMgY2xlYW5lZCBpbi1wbGFjZSBhbmQgYWxzbyByZXR1cm5lZC5cbiAqIFVubmVjZXNzYXJ5IHdoaXRlIHNwYWNlIGlzIHJlbW92ZWQsIGtleSBjb21iaW5hdGlvbnMgYXJlIHNvcnRlZCBhbmRcbiAqIHNpbmdsZSBjaGFycyBjb252ZXJ0ZWQgdG8gbG93ZXIgY2FzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gc2hvcnRjdXQgLSBUaGUgYXJyYXkgc2hvcnRjdXQgdG8gY2xlYW4uXG4gKiBAcmV0dXJuIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBUaGUgY2xlYW5lZCBhcnJheSBzaG9ydGN1dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2hvcnRjdXQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHNob3J0Y3V0KSB8fCBzaG9ydGN1dC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFycmF5IHNob3J0Y3V0IHRvIGNsZWFuOiAnICsgc2hvcnRjdXQpXG5cbiAgbGV0IGlzU2VxdWVuY2UgPSB0eXBlb2Ygc2hvcnRjdXRbMF0gIT09ICdzdHJpbmcnXG5cbiAgaWYgKGlzU2VxdWVuY2UgJiYgc2hvcnRjdXQubGVuZ3RoID09PSAxKSB7XG4gICAgc2hvcnRjdXQgPSBzaG9ydGN1dFswXVxuICAgIGlzU2VxdWVuY2UgPSBmYWxzZVxuICB9XG5cbiAgaWYgKGlzU2VxdWVuY2UpIGNsZWFuU2VxdWVuY2Uoc2hvcnRjdXQpXG4gIGVsc2UgY2xlYW5Db21ibyhzaG9ydGN1dClcblxuICByZXR1cm4gc2hvcnRjdXRcbn1cbiIsImxldCBuZXh0SWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pcXVlIElEIGV2ZXJ5IHRpbWUgaXQgaXMgY2FsbGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBBIHVuaXF1ZSBJRC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXh0SWQrK1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBLZXlzIH0gZnJvbSAnLi9LZXlzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbGVhblNob3J0Y3V0IH0gZnJvbSAnLi9jbGVhblNob3J0Y3V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZW5lcmF0ZUlkIH0gZnJvbSAnLi9nZW5lcmF0ZUlkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZVNob3J0Y3V0IH0gZnJvbSAnLi9wYXJzZVNob3J0Y3V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdpZnlTaG9ydGN1dCB9IGZyb20gJy4vc3RyaW5naWZ5U2hvcnRjdXQnXG4iLCJjb25zdCBDT01CSU5FX1dJVEggPSAnKydcbmNvbnN0IEZPTExPV0VEX0JZID0gJz4nXG5cbmZ1bmN0aW9uIGdldER1cGxpY2F0ZXMoY29tYm8pIHtcbiAgY29uc3QgY291bnQgPSBjb21ibyA9PlxuICAgIGNvbWJvLnJlZHVjZSgoazEsIGsyKSA9PiBPYmplY3QuYXNzaWduKGsxLCB7IFtrMl06IChrMVtrMl0gfHwgMCkgKyAxIH0pLCB7fSlcbiAgY29uc3QgZHVwbGljYXRlcyA9IGRpY3QgPT4gT2JqZWN0LmtleXMoZGljdCkuZmlsdGVyKGsgPT4gZGljdFtrXSA+IDEpXG4gIHJldHVybiBkdXBsaWNhdGVzKGNvdW50KGNvbWJvKSlcbn1cblxuZnVuY3Rpb24gY29udmVydEtleShrZXkpIHtcbiAga2V5ID0ga2V5LmpvaW4oJycpXG4gIGlmIChrZXkubGVuZ3RoID09PSAxKSBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4ga2V5XG59XG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgc2hvcnRjdXQgYW5kIHJldHVybiB0aGUgZXF1aXZhbGVudCBhcnJheSBzaG9ydGN1dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaG9ydGN1dCAtIFRoZSBzdHJpbmcgc2hvcnRjdXQgdG8gY29udmVydC5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IFRoZSBjb252ZXJ0ZWQgYXJyYXkgc2hvcnRjdXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNob3J0Y3V0KSB7XG4gIGlmICh0eXBlb2Ygc2hvcnRjdXQgIT09ICdzdHJpbmcnKVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgc2hvcnRjdXQgdG8gcGFyc2U6ICcgKyBzaG9ydGN1dClcblxuICBzaG9ydGN1dCA9IHNob3J0Y3V0LnJlcGxhY2UoL1xccysvZywgJycpXG5cbiAgaWYgKHR5cGVvZiBzaG9ydGN1dCAhPT0gJ3N0cmluZycgfHwgc2hvcnRjdXQubGVuZ3RoID09PSAwKVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCAobXVzdCBiZSBub24gZW1wdHkgc3RyaW5nKTogJyArIHNob3J0Y3V0KVxuXG4gIGxldCBrZXkgPSBbXVxuICBsZXQgY29tYm8gPSBbXVxuICBjb25zdCBzZXF1ZW5jZSA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaG9ydGN1dC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGMgPSBzaG9ydGN1dC5jaGFyQXQoaSlcbiAgICBpZiAoIWtleS5sZW5ndGgpIHtcbiAgICAgIGtleS5wdXNoKGMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjID09PSBDT01CSU5FX1dJVEgpIHtcbiAgICAgICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpXG4gICAgICAgIGtleSA9IFtdXG4gICAgICB9IGVsc2UgaWYgKGMgPT09IEZPTExPV0VEX0JZKSB7XG4gICAgICAgIGNvbWJvLnB1c2goY29udmVydEtleShrZXkpKVxuICAgICAgICBrZXkgPSBbXVxuICAgICAgICBjb21iby5zb3J0KClcbiAgICAgICAgc2VxdWVuY2UucHVzaChjb21ibylcbiAgICAgICAgY29tYm8gPSBbXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5LnB1c2goYylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoa2V5Lmxlbmd0aCkge1xuICAgIGNvbWJvLnB1c2goY29udmVydEtleShrZXkpKVxuICAgIGNvbWJvLnNvcnQoKVxuICAgIHNlcXVlbmNlLnB1c2goY29tYm8pXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNob3J0Y3V0IChtdXN0IGVuZCB3aXRoIGtleSk6ICcgKyBzaG9ydGN1dClcbiAgfVxuXG4gIGZvciAobGV0IGNvbWJvIG9mIHNlcXVlbmNlKSB7XG4gICAgY29uc3QgZHVwbGljYXRlcyA9IGdldER1cGxpY2F0ZXMoY29tYm8pXG4gICAgaWYgKGR1cGxpY2F0ZXMubGVuZ3RoID4gMClcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCAoZHVwbGljYXRlIGtleXMpOicgKyBzaG9ydGN1dClcbiAgfVxuXG4gIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDEpIHJldHVybiBzZXF1ZW5jZVswXVxuICBlbHNlIHJldHVybiBzZXF1ZW5jZVxufVxuIiwiY29uc3QgQ09NQklORV9XSVRIID0gJyArICdcbmNvbnN0IEZPTExPV0VEX0JZID0gJyA+ICdcblxuLyoqXG4gKiBDcmVhdGUgZXF1aXZhbGVudCBzdHJpbmcgc2hvcnRjdXQgb2YgYW4gYXJyYXkgc2hvcnRjdXQuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IHNob3J0Y3V0IC0gVGhlIGFycmF5IHNob3J0Y3V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBjb252ZXJ0ZWQgc3RyaW5nIHNob3J0Y3VydC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2hvcnRjdXQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHNob3J0Y3V0KSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJyYXkgc2hvcnRjdXQgdG8gc3RyaW5naWZ5OiAnICsgc2hvcnRjdXQpXG5cbiAgbGV0IGlzU2VxdWVuY2UgPSB0eXBlb2Ygc2hvcnRjdXRbMF0gIT09ICdzdHJpbmcnXG5cbiAgaWYgKCFpc1NlcXVlbmNlKSB7XG4gICAgcmV0dXJuIHNob3J0Y3V0LmpvaW4oQ09NQklORV9XSVRIKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzaG9ydGN1dC5tYXAocGFydCA9PiBwYXJ0LmpvaW4oQ09NQklORV9XSVRIKSkuam9pbihGT0xMT1dFRF9CWSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==