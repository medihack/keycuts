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
 *   keyboard shortcuts (if not provided then Window object is used).
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

  if (!element) element = window;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvS2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY2xlYW5TaG9ydGN1dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3BhcnNlU2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzIl0sIm5hbWVzIjpbIktleXMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIl9zdG9wcGVkIiwiX2N1cnJlbnRTY29wZSIsIkRFRkFVTFRfU0NPUEUiLCJfY3VycmVudENvbWJvIiwiX3NlcXVlbmNlIiwiX2hhbmRsZXJzIiwiX3dhdGNoZXJzIiwidHJpZ2dlck9uY2VQZXJLZXkiLCJ1c2VDb2RlSW5zdGVhZEtleSIsIm1heFNlcXVlbmNlTGVuZ3RoIiwiZmlsdGVyIiwiX29uS2V5RG93biIsImNhbGwiLCJldmVudCIsImtleSIsImNvZGUiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImFscmVhZHlUcmlnZ2VyZWQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0Iiwic2hpZnQiLCJfbm90aWZ5V2F0Y2hlcnMiLCJfZGlzcGF0Y2hIYW5kbGVycyIsIl9vbktleVVwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiX3Jlc2V0S2V5cyIsInNlcXVlbmNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwid2F0Y2hlciIsImNhbGxiYWNrIiwic2lnbmF0dXJlcyIsInNpZ25hdHVyZVNlcXVlbmNlIiwiaSIsImhhbmRsZXIiLCJzY29wZSIsInNpZ25hdHVyZSIsImJpbmQiLCJzaG9ydGN1dCIsInVuZGVmaW5lZCIsImhhbmRsZXJJZCIsImlkIiwidW5iaW5kIiwiZmluZEluZGV4IiwiRXJyb3IiLCJ1bmJpbmRTY29wZSIsImluZGljZXMiLCJmb3JFYWNoIiwidW5iaW5kQWxsIiwid2F0Y2giLCJ3YXRjaGVySWQiLCJ1bndhdGNoIiwidW53YXRjaEFsbCIsInN3aXRjaFNjb3BlIiwic3RvcCIsIl9lbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3VtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldCIsIndpbmRvdyIsIk9iamVjdCIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsImlzU2VxdWVuY2UiLCJjbGVhblNlcXVlbmNlIiwiY2xlYW5Db21ibyIsImNvbWJvIiwiY2xlYW5lZEtleSIsImNsZWFuS2V5IiwicmVwbGFjZSIsInRyaW0iLCJuZXh0SWQiLCJkZWZhdWx0IiwiYyIsImNoYXJBdCIsIkNPTUJJTkVfV0lUSCIsImNvbnZlcnRLZXkiLCJGT0xMT1dFRF9CWSIsImR1cGxpY2F0ZXMiLCJnZXREdXBsaWNhdGVzIiwiY291bnQiLCJyZWR1Y2UiLCJrMSIsImsyIiwia2V5cyIsImRpY3QiLCJrIiwiam9pbiIsIm1hcCIsInBhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFkLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPdkMsU0FBU29ELEdBQVQsQ0FBYTtBQUFBLGFBQVFDLEtBQUtGLElBQUwsQ0FBVVosWUFBVixDQUFSO0FBQUEsS0FBYixFQUE4Q1ksSUFBOUMsQ0FBbURWLFdBQW5ELENBQVA7QUFDRDtBQUNGLEM7O0FBbkJELElBQU1GLGVBQWUsS0FBckI7QUFDQSxJQUFNRSxjQUFjLEtBQXBCOztBQUVBIiwiZmlsZSI6ImtleWN1dHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrZXljdXRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtleWN1dHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi9nZW5lcmF0ZUlkJ1xuaW1wb3J0IGNsZWFuU2hvcnRjdXQgZnJvbSAnLi9jbGVhblNob3J0Y3V0J1xuaW1wb3J0IHBhcnNlU2hvcnRjdXQgZnJvbSAnLi9wYXJzZVNob3J0Y3V0J1xuaW1wb3J0IHN0cmluZ2lmeVNob3J0Y3V0IGZyb20gJy4vc3RyaW5naWZ5U2hvcnRjdXQnXG5cbi8qKlxuICogVGhlIG1haW4gY2xhc3MgdG8gYWNjZXNzIHRoZSBmZWF0dXJlcyBvZiB0aGUgS2V5Q3V0cyBsaWJyYXJ5LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgSFRNTCBlbGVtZW50IHRoYXQgc2hvdWxkIGxpc3RlbiB0b1xuICogICBrZXlib2FyZCBzaG9ydGN1dHMgKGlmIG5vdCBwcm92aWRlZCB0aGVuIFdpbmRvdyBvYmplY3QgaXMgdXNlZCkuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyAob3B0aW9uYWwpLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnRyaWdnZXJPbmNlUGVyS2V5IC0gSWYgYSBrZXkgaXMga2VwdCBkb3duIHRoZW5cbiAqICAgdGhlIHNob3J0Y3V0IHdpbGwgYmUgdHJpZ2dlcmVkIG11bHRpcGxlIHRpbWVzIHdoZW4gc2V0IHRvIGZhbHNlIGFuZFxuICogICBvbmx5IG9uY2Ugd2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdDogZmFsc2UpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgLSBJZiBzZXQgdG8gZmFsc2UgdGhlblxuICogICBLZXlib2FyZEV2ZW50LmtleSBpcyBldmFsdWF0ZWQgZm9yIHRyaWdnZXJpbmcgc2hvcnRjdXRzLCBvdGhlcndpc2VcbiAqICAgS2V5Ym9hcmRFdmVudC5jb2RlIChkZWZhdWx0OiBmYWxzZSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoIC0gVGhlIG1heGltdW0gc2VxdWVuY2Ugb2ZcbiAqICAga2V5IG9yIGNvbWJvcyB0aGF0IHNob3VsZCBiZSB0cmFja2VkIChkZWZhdWx0OiAzKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5maWx0ZXIgLSBBIGZpbHRlciBmdW5jdGlvbi4gSWYgdGhlIGZpbHRlclxuICogICByZXR1cm5zIGZhbHNlIHRoZSBldmVudCB3aWxsIGJlIGZpbHRlcmVkIG91dCBhbmQgbm8gYm91bmQgaGFuZGxlclxuICogICBvciB3YXRjaGVyIHdpbGwgYmUgdHJpZ2dlcmVkLiBUaGUgZmlsdGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gKiAgIHdpdGggdGhlIGtleSBldmVudC4gVGhlIGRlZmF1bHQgZmlsdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuICovXG5jbGFzcyBLZXlzIHtcbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBkZWZhdWx0IHNjb3BlLiAqL1xuICBzdGF0aWMgREVGQVVMVF9TQ09QRSA9ICdERUZBVUxUX1NDT1BFJ1xuXG4gIF9zdG9wcGVkID0gdHJ1ZVxuICBfY3VycmVudFNjb3BlID0gS2V5cy5ERUZBVUxUX1NDT1BFXG4gIF9jdXJyZW50Q29tYm8gPSBbXVxuICBfc2VxdWVuY2UgPSBbXVxuICBfaGFuZGxlcnMgPSBbXVxuICBfd2F0Y2hlcnMgPSBbXVxuXG4gIG9wdGlvbnMgPSB7XG4gICAgdHJpZ2dlck9uY2VQZXJLZXk6IGZhbHNlLFxuICAgIHVzZUNvZGVJbnN0ZWFkS2V5OiBmYWxzZSxcbiAgICBtYXhTZXF1ZW5jZUxlbmd0aDogMyxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWVcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB3aW5kb3dcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJlc3VtZSgpXG4gIH1cblxuICBfb25LZXlEb3duID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuXG5cbiAgICBsZXQga2V5ID0gdGhpcy5vcHRpb25zLnVzZUNvZGVJbnN0ZWFkS2V5ID8gZXZlbnQuY29kZSA6IGV2ZW50LmtleVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSdcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5VHJpZ2dlcmVkID0gdGhpcy5fY3VycmVudENvbWJvLmluY2x1ZGVzKGtleSlcblxuICAgIGlmICghYWxyZWFkeVRyaWdnZXJlZCkge1xuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnB1c2goa2V5KVxuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNvcnQoKVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3NlcXVlbmNlLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICB0aGlzLl9zZXF1ZW5jZVt0aGlzLl9zZXF1ZW5jZS5sZW5ndGggLSAxXSAhPT0gdGhpcy5fY3VycmVudENvbWJvXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlLmxlbmd0aCA9PT0gdGhpcy5vcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoKVxuICAgICAgICAgIHRoaXMuX3NlcXVlbmNlLnNoaWZ0KClcblxuICAgICAgICB0aGlzLl9zZXF1ZW5jZS5wdXNoKHRoaXMuX2N1cnJlbnRDb21ibylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFscmVhZHlUcmlnZ2VyZWQgfHwgIXRoaXMub3B0aW9ucy50cmlnZ2VyT25jZVBlcktleSkge1xuICAgICAgdGhpcy5fbm90aWZ5V2F0Y2hlcnMoZXZlbnQpXG4gICAgICB0aGlzLl9kaXNwYXRjaEhhbmRsZXJzKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIF9vbktleVVwID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuXG5cbiAgICBsZXQga2V5ID0gdGhpcy5vcHRpb25zLnVzZUNvZGVJbnN0ZWFkS2V5ID8gZXZlbnQuY29kZSA6IGV2ZW50LmtleVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSdcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50Q29tYm8gPSBbLi4udGhpcy5fY3VycmVudENvbWJvXVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9jdXJyZW50Q29tYm8uaW5kZXhPZihrZXkpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuX2N1cnJlbnRDb21iby5zb3J0KClcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnlXYXRjaGVycyhldmVudClcbiAgfVxuXG4gIF9yZXNldEtleXMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY3VycmVudENvbWJvID0gW11cbiAgICB0aGlzLl9zZXF1ZW5jZSA9IFtdXG4gIH1cblxuICBfbm90aWZ5V2F0Y2hlcnMgPSBldmVudCA9PiB7XG4gICAgY29uc3Qgc2VxdWVuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlcXVlbmNlKSlcblxuICAgIGZvciAobGV0IHdhdGNoZXIgb2YgdGhpcy5fd2F0Y2hlcnMpIHtcbiAgICAgIHdhdGNoZXIuY2FsbGJhY2soc2VxdWVuY2UsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIF9kaXNwYXRjaEhhbmRsZXJzID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHNlcXVlbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zZXF1ZW5jZSkpXG5cbiAgICBjb25zdCBzaWduYXR1cmVzID0gW11cblxuICAgIGxldCBzaWduYXR1cmVTZXF1ZW5jZSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX3NlcXVlbmNlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBzaWduYXR1cmVTZXF1ZW5jZSA9IFt0aGlzLl9zZXF1ZW5jZVtpXSwgLi4uc2lnbmF0dXJlU2VxdWVuY2VdXG4gICAgICBzaWduYXR1cmVzLnB1c2goc3RyaW5naWZ5U2hvcnRjdXQoc2lnbmF0dXJlU2VxdWVuY2UpKVxuICAgIH1cblxuICAgIGZvciAobGV0IGhhbmRsZXIgb2YgdGhpcy5faGFuZGxlcnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fY3VycmVudFNjb3BlID09PSBoYW5kbGVyLnNjb3BlICYmXG4gICAgICAgIHNpZ25hdHVyZXMuaW5jbHVkZXMoaGFuZGxlci5zaWduYXR1cmUpXG4gICAgICApIHtcbiAgICAgICAgaGFuZGxlci5jYWxsYmFjayhzZXF1ZW5jZSwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgYSBrZXlib2FyZCBzaG9ydGN1dC4gQSBzaG9ydGN1dCBjYW4gYmUgaW4gc3RyaW5nIG9yIGFycmF5IGZvcm1hdC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gc2hvcnRjdXQgLSBUaGUgc2hvcnRjdXQgdG8gYmluZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gQW4gb3B0aW9uYWwgc2NvcGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cbiAgICogICBUaGUgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCBrZXkgb3IgY29tYm8gc2VxdWVuY2VcbiAgICogICBhbmQgdGhlIGtleSBldmVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdW5pcXVlIElEIG9mIHRoZSBib3VuZCBoYW5kbGVyLlxuICAgKi9cbiAgYmluZCA9IChzaG9ydGN1dCwgc2NvcGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gc2NvcGVcbiAgICAgIHNjb3BlID0gS2V5cy5ERUZBVUxUX1NDT1BFXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzaG9ydGN1dCA9PT0gJ3N0cmluZycpIHNob3J0Y3V0ID0gcGFyc2VTaG9ydGN1dChzaG9ydGN1dClcblxuICAgIHNob3J0Y3V0ID0gY2xlYW5TaG9ydGN1dChzaG9ydGN1dClcblxuICAgIGNvbnN0IGhhbmRsZXJJZCA9IGdlbmVyYXRlSWQoKVxuICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goe1xuICAgICAgaWQ6IGhhbmRsZXJJZCxcbiAgICAgIHNpZ25hdHVyZTogc3RyaW5naWZ5U2hvcnRjdXQoc2hvcnRjdXQpLFxuICAgICAgc2hvcnRjdXQsXG4gICAgICBzY29wZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgfSlcblxuICAgIHJldHVybiBoYW5kbGVySWRcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYSBzcGVjaWZpYyBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVyIHVzaW5nIGl0cyBJRC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZXJJZCAtIFRoZSBJRCByZXR1cm5lZCBieSB0aGUge0BsaW5rIGJpbmR9IG1ldGhvZC5cbiAgICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3Igd2hlbiB0aGUgSUQgaXMgaW52YWxpZC5cbiAgICovXG4gIHVuYmluZCA9IGhhbmRsZXJJZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9oYW5kbGVycy5maW5kSW5kZXgoaGFuZGxlciA9PiBoYW5kbGVyLmlkID09PSBoYW5kbGVySWQpXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGFuZGxlciBJRDogJyArIGhhbmRsZXJJZClcblxuICAgIHRoaXMuX2hhbmRsZXJzLnNwbGljZShpbmRleCwgMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlcnMgaGF2aW5nIHRoZSBzcGVjaWZpZWQgc2NvcGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSAtIFRoZSBzY29wZS5cbiAgICovXG4gIHVuYmluZFNjb3BlID0gc2NvcGUgPT4ge1xuICAgIGNvbnN0IGluZGljZXMgPSBbXVxuICAgIHRoaXMuX2hhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaGFuZGxlci5zY29wZSA9PT0gc2NvcGUpIGluZGljZXMucHVzaChpbmRleClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaW5kZXggb2YgaW5kaWNlcykge1xuICAgICAgdGhpcy5faGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJzLlxuICAgKi9cbiAgdW5iaW5kQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuX2hhbmRsZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBrZXlib2FyZCBldmVudHMgKGtleWRvd24gYW5kIGtleXVwKS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxuICAgKiAgIHdoZW4gYSBrZXlkb3duIG9yIGtleXVwIGV2ZW50IG9jY3Vycy4gVGhlIGNhbGxiYWNrIGdldHMgY2FsbGVkIHdpdGhcbiAgICogICB0aGUgY3VycmVudCBrZXkgb3IgY29tYm8gc2VxdWVuY2UgYW5kIHRoZSBrZXkgZXZlbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgYWRkZWQgd2F0Y2hlci5cbiAgICovXG4gIHdhdGNoID0gY2FsbGJhY2sgPT4ge1xuICAgIGNvbnN0IHdhdGNoZXJJZCA9IGdlbmVyYXRlSWQoKVxuICAgIHRoaXMuX3dhdGNoZXJzLnB1c2goe1xuICAgICAgaWQ6IHdhdGNoZXJJZCxcbiAgICAgIGNhbGxiYWNrXG4gICAgfSlcblxuICAgIHJldHVybiB3YXRjaGVySWRcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYSBzcGVjaWZpYyB3YXRjaGVyIHVzaW5nIGl0cyBJRC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHdhdGNoZXJJZCAtIFRoZSBJRCByZXR1cm5lZCBieSB0aGUge0BsaW5rIHdhdGNofSBtZXRob2QuXG4gICAqIEB0aHJvd3MgVGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIElEIGlzIGludmFsaWQuXG4gICAqL1xuICB1bndhdGNoID0gd2F0Y2hlcklkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3dhdGNoZXJzLmZpbmRJbmRleCh3YXRjaGVyID0+IHdhdGNoZXIuaWQgPT09IHdhdGNoZXJJZClcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB3YXRjaGVyIElEOiAnICsgd2F0Y2hlcklkKVxuXG4gICAgdGhpcy5fd2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwgd2F0Y2hlcnMuXG4gICAqL1xuICB1bndhdGNoQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuX3dhdGNoZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdGhlIHNjb3BlLiBPbmx5IGJvdW5kIGhhbmRsZXJzIGdldCB0cmlnZ2VyZWQgdGhhdCBoYXZlIHRoZSBuZXdcbiAgICogc2NvcGUuIFRoZSBkZWZhdWx0IHNjb3BlIGNhbiBiZSBhY2Nlc3NlZCBieSB7QGxpbmsgS2V5cy5ERUZBVUxUX1NDT1BFfS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3BlIC0gVGhlIHNjb3BlLlxuICAgKi9cbiAgc3dpdGNoU2NvcGUgPSBzY29wZSA9PiB7XG4gICAgdGhpcy5fY3VycmVudFNjb3BlID0gc2NvcGVcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGxpc3RlbmluZyB0byBrZXkgZXZlbnRzIGFuZCByZXNldCB0aGUga2V5IHNlcXVlbmNlLlxuICAgKi9cbiAgc3RvcCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuX3N0b3BwZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bilcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX3Jlc2V0S2V5cylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX3Jlc2V0S2V5cylcblxuICAgICAgdGhpcy5fcmVzZXRLZXlzKClcblxuICAgICAgdGhpcy5fc3RvcHBlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIGxpc3RlbmluZyB0byBrZXkgZXZlbnRzLlxuICAgKi9cbiAgcmVzdW1lID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9zdG9wcGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcClcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9yZXNldEtleXMpXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9yZXNldEtleXMpXG5cbiAgICAgIHRoaXMuX3N0b3BwZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qIFJlc2V0IHRoaXMgaW5zdGFuY2UgYnkgdW5iaW5kaW5nIGFsbCBoYW5kbGVycywgcmVtb3ZpbmcgYWxsIHdhdGNoZXJzXG4gICAqIGFuZCByZXNldHRpbmcgdGhlIGtleSBzZXF1ZW5jZS5cbiAgICovXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuX3Jlc2V0S2V5cygpXG4gICAgdGhpcy51bmJpbmRBbGwoKVxuICAgIHRoaXMudW53YXRjaEFsbCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5c1xuIiwiZnVuY3Rpb24gY2xlYW5TZXF1ZW5jZShzZXF1ZW5jZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNlcXVlbmNlW2ldKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzaG9ydGN1dCBzZXF1ZW5jZSAke3NlcXVlbmNlfS5gKVxuXG4gICAgY2xlYW5Db21ibyhzZXF1ZW5jZVtpXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbkNvbWJvKGNvbWJvKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tYm8ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGNvbWJvW2ldICE9PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzaG9ydGN1dCBjb21ibyAke2NvbWJvfS5gKVxuXG4gICAgY29uc3QgY2xlYW5lZEtleSA9IGNsZWFuS2V5KGNvbWJvW2ldKVxuICAgIGlmICghY2xlYW5lZEtleSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBrZXkgJHtjbGVhbmVkS2V5fSBpbiBzaG9ydGN1dCBjb21ibyAke2NvbWJvfS5gKVxuXG4gICAgY29tYm9baV0gPSBjbGVhbmVkS2V5XG4gIH1cbiAgY29tYm8uc29ydCgpXG59XG5cbmZ1bmN0aW9uIGNsZWFuS2V5KGtleSkge1xuICBrZXkgPSBrZXkucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJ1xuICBrZXkgPSBrZXkudHJpbSgpXG4gIGlmIChrZXkubGVuZ3RoID09PSAxKSBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4ga2V5XG59XG5cbi8qKlxuICogQ2xlYW4gYW4gYXJyYXkgc2hvcnRjdXQuIFRoZSBhcnJheSBpcyBjbGVhbmVkIGluLXBsYWNlIGFuZCBhbHNvIHJldHVybmVkLlxuICogVW5uZWNlc3Nhcnkgd2hpdGUgc3BhY2UgaXMgcmVtb3ZlZCwga2V5IGNvbWJpbmF0aW9ucyBhcmUgc29ydGVkIGFuZFxuICogc2luZ2xlIGNoYXJzIGNvbnZlcnRlZCB0byBsb3dlciBjYXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBhcnJheSBzaG9ydGN1dCB0byBjbGVhbi5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IFRoZSBjbGVhbmVkIGFycmF5IHNob3J0Y3V0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaG9ydGN1dCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hvcnRjdXQpIHx8IHNob3J0Y3V0Lmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJyYXkgc2hvcnRjdXQgdG8gY2xlYW46ICcgKyBzaG9ydGN1dClcblxuICBsZXQgaXNTZXF1ZW5jZSA9IHR5cGVvZiBzaG9ydGN1dFswXSAhPT0gJ3N0cmluZydcblxuICBpZiAoaXNTZXF1ZW5jZSAmJiBzaG9ydGN1dC5sZW5ndGggPT09IDEpIHtcbiAgICBzaG9ydGN1dCA9IHNob3J0Y3V0WzBdXG4gICAgaXNTZXF1ZW5jZSA9IGZhbHNlXG4gIH1cblxuICBpZiAoaXNTZXF1ZW5jZSkgY2xlYW5TZXF1ZW5jZShzaG9ydGN1dClcbiAgZWxzZSBjbGVhbkNvbWJvKHNob3J0Y3V0KVxuXG4gIHJldHVybiBzaG9ydGN1dFxufVxuIiwibGV0IG5leHRJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYSB1bmlxdWUgSUQgZXZlcnkgdGltZSBpdCBpcyBjYWxsZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgdW5pcXVlIElELlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5leHRJZCsrXG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEtleXMgfSBmcm9tICcuL0tleXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsZWFuU2hvcnRjdXQgfSBmcm9tICcuL2NsZWFuU2hvcnRjdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdlbmVyYXRlSWQgfSBmcm9tICcuL2dlbmVyYXRlSWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlU2hvcnRjdXQgfSBmcm9tICcuL3BhcnNlU2hvcnRjdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ2lmeVNob3J0Y3V0IH0gZnJvbSAnLi9zdHJpbmdpZnlTaG9ydGN1dCdcbiIsImNvbnN0IENPTUJJTkVfV0lUSCA9ICcrJ1xuY29uc3QgRk9MTE9XRURfQlkgPSAnPidcblxuZnVuY3Rpb24gZ2V0RHVwbGljYXRlcyhjb21ibykge1xuICBjb25zdCBjb3VudCA9IGNvbWJvID0+XG4gICAgY29tYm8ucmVkdWNlKChrMSwgazIpID0+IE9iamVjdC5hc3NpZ24oazEsIHsgW2syXTogKGsxW2syXSB8fCAwKSArIDEgfSksIHt9KVxuICBjb25zdCBkdXBsaWNhdGVzID0gZGljdCA9PiBPYmplY3Qua2V5cyhkaWN0KS5maWx0ZXIoayA9PiBkaWN0W2tdID4gMSlcbiAgcmV0dXJuIGR1cGxpY2F0ZXMoY291bnQoY29tYm8pKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0S2V5KGtleSkge1xuICBrZXkgPSBrZXkuam9pbignJylcbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBrZXlcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBzaG9ydGN1dCBhbmQgcmV0dXJuIHRoZSBlcXVpdmFsZW50IGFycmF5IHNob3J0Y3V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHNob3J0Y3V0IC0gVGhlIHN0cmluZyBzaG9ydGN1dCB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gVGhlIGNvbnZlcnRlZCBhcnJheSBzaG9ydGN1dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2hvcnRjdXQpIHtcbiAgaWYgKHR5cGVvZiBzaG9ydGN1dCAhPT0gJ3N0cmluZycpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZyBzaG9ydGN1dCB0byBwYXJzZTogJyArIHNob3J0Y3V0KVxuXG4gIHNob3J0Y3V0ID0gc2hvcnRjdXQucmVwbGFjZSgvXFxzKy9nLCAnJylcblxuICBpZiAodHlwZW9mIHNob3J0Y3V0ICE9PSAnc3RyaW5nJyB8fCBzaG9ydGN1dC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNob3J0Y3V0IChtdXN0IGJlIG5vbiBlbXB0eSBzdHJpbmcpOiAnICsgc2hvcnRjdXQpXG5cbiAgbGV0IGtleSA9IFtdXG4gIGxldCBjb21ibyA9IFtdXG4gIGNvbnN0IHNlcXVlbmNlID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3J0Y3V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHNob3J0Y3V0LmNoYXJBdChpKVxuICAgIGlmICgha2V5Lmxlbmd0aCkge1xuICAgICAga2V5LnB1c2goYylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGMgPT09IENPTUJJTkVfV0lUSCkge1xuICAgICAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSlcbiAgICAgICAga2V5ID0gW11cbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gRk9MTE9XRURfQlkpIHtcbiAgICAgICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpXG4gICAgICAgIGtleSA9IFtdXG4gICAgICAgIGNvbWJvLnNvcnQoKVxuICAgICAgICBzZXF1ZW5jZS5wdXNoKGNvbWJvKVxuICAgICAgICBjb21ibyA9IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkucHVzaChjKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkubGVuZ3RoKSB7XG4gICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpXG4gICAgY29tYm8uc29ydCgpXG4gICAgc2VxdWVuY2UucHVzaChjb21ibylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKG11c3QgZW5kIHdpdGgga2V5KTogJyArIHNob3J0Y3V0KVxuICB9XG5cbiAgZm9yIChsZXQgY29tYm8gb2Ygc2VxdWVuY2UpIHtcbiAgICBjb25zdCBkdXBsaWNhdGVzID0gZ2V0RHVwbGljYXRlcyhjb21ibylcbiAgICBpZiAoZHVwbGljYXRlcy5sZW5ndGggPiAwKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNob3J0Y3V0IChkdXBsaWNhdGUga2V5cyk6JyArIHNob3J0Y3V0KVxuICB9XG5cbiAgaWYgKHNlcXVlbmNlLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHNlcXVlbmNlWzBdXG4gIGVsc2UgcmV0dXJuIHNlcXVlbmNlXG59XG4iLCJjb25zdCBDT01CSU5FX1dJVEggPSAnICsgJ1xuY29uc3QgRk9MTE9XRURfQlkgPSAnID4gJ1xuXG4vKipcbiAqIENyZWF0ZSBlcXVpdmFsZW50IHN0cmluZyBzaG9ydGN1dCBvZiBhbiBhcnJheSBzaG9ydGN1dC5cbiAqIEBwYXJhbSB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gc2hvcnRjdXQgLSBUaGUgYXJyYXkgc2hvcnRjdXQgdG8gY29udmVydC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvbnZlcnRlZCBzdHJpbmcgc2hvcnRjdXJ0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaG9ydGN1dCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hvcnRjdXQpKVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcnJheSBzaG9ydGN1dCB0byBzdHJpbmdpZnk6ICcgKyBzaG9ydGN1dClcblxuICBsZXQgaXNTZXF1ZW5jZSA9IHR5cGVvZiBzaG9ydGN1dFswXSAhPT0gJ3N0cmluZydcblxuICBpZiAoIWlzU2VxdWVuY2UpIHtcbiAgICByZXR1cm4gc2hvcnRjdXQuam9pbihDT01CSU5FX1dJVEgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNob3J0Y3V0Lm1hcChwYXJ0ID0+IHBhcnQuam9pbihDT01CSU5FX1dJVEgpKS5qb2luKEZPTExPV0VEX0JZKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9