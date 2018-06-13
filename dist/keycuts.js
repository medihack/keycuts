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
 * The main class to access the features of the keycuts library.
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

        watcher.callback(event, sequence);
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
          handler.callback(event, sequence);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvS2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY2xlYW5TaG9ydGN1dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3BhcnNlU2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzIl0sIm5hbWVzIjpbIktleXMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIl9zdG9wcGVkIiwiX2N1cnJlbnRTY29wZSIsIkRFRkFVTFRfU0NPUEUiLCJfY3VycmVudENvbWJvIiwiX3NlcXVlbmNlIiwiX2hhbmRsZXJzIiwiX3dhdGNoZXJzIiwidHJpZ2dlck9uY2VQZXJLZXkiLCJ1c2VDb2RlSW5zdGVhZEtleSIsIm1heFNlcXVlbmNlTGVuZ3RoIiwiZmlsdGVyIiwiX29uS2V5RG93biIsImNhbGwiLCJldmVudCIsImtleSIsImNvZGUiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImFscmVhZHlUcmlnZ2VyZWQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0Iiwic2hpZnQiLCJfbm90aWZ5V2F0Y2hlcnMiLCJfZGlzcGF0Y2hIYW5kbGVycyIsIl9vbktleVVwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiX3Jlc2V0S2V5cyIsInNlcXVlbmNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwid2F0Y2hlciIsImNhbGxiYWNrIiwic2lnbmF0dXJlcyIsInNpZ25hdHVyZVNlcXVlbmNlIiwiaSIsImhhbmRsZXIiLCJzY29wZSIsInNpZ25hdHVyZSIsImJpbmQiLCJzaG9ydGN1dCIsInVuZGVmaW5lZCIsImhhbmRsZXJJZCIsImlkIiwidW5iaW5kIiwiZmluZEluZGV4IiwiRXJyb3IiLCJ1bmJpbmRTY29wZSIsImluZGljZXMiLCJmb3JFYWNoIiwidW5iaW5kQWxsIiwid2F0Y2giLCJ3YXRjaGVySWQiLCJ1bndhdGNoIiwidW53YXRjaEFsbCIsInN3aXRjaFNjb3BlIiwic3RvcCIsIl9lbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3VtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldCIsImRvY3VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNTZXF1ZW5jZSIsImNsZWFuU2VxdWVuY2UiLCJjbGVhbkNvbWJvIiwiY29tYm8iLCJjbGVhbmVkS2V5IiwiY2xlYW5LZXkiLCJyZXBsYWNlIiwidHJpbSIsIm5leHRJZCIsImRlZmF1bHQiLCJjIiwiY2hhckF0IiwiQ09NQklORV9XSVRIIiwiY29udmVydEtleSIsIkZPTExPV0VEX0JZIiwiZHVwbGljYXRlcyIsImdldER1cGxpY2F0ZXMiLCJjb3VudCIsInJlZHVjZSIsImsxIiwiazIiLCJrZXlzIiwiZGljdCIsImsiLCJqb2luIiwibWFwIiwicGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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WixZQUFkLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPdkMsU0FBU29ELEdBQVQsQ0FBYTtBQUFBLGFBQVFDLEtBQUtGLElBQUwsQ0FBVVosWUFBVixDQUFSO0FBQUEsS0FBYixFQUE4Q1ksSUFBOUMsQ0FBbURWLFdBQW5ELENBQVA7QUFDRDtBQUNGLEM7O0FBbkJELElBQU1GLGVBQWUsS0FBckI7QUFDQSxJQUFNRSxjQUFjLEtBQXBCOztBQUVBIiwiZmlsZSI6ImtleWN1dHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrZXljdXRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtleWN1dHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi9nZW5lcmF0ZUlkJ1xuaW1wb3J0IGNsZWFuU2hvcnRjdXQgZnJvbSAnLi9jbGVhblNob3J0Y3V0J1xuaW1wb3J0IHBhcnNlU2hvcnRjdXQgZnJvbSAnLi9wYXJzZVNob3J0Y3V0J1xuaW1wb3J0IHN0cmluZ2lmeVNob3J0Y3V0IGZyb20gJy4vc3RyaW5naWZ5U2hvcnRjdXQnXG5cbi8qKlxuICogVGhlIG1haW4gY2xhc3MgdG8gYWNjZXNzIHRoZSBmZWF0dXJlcyBvZiB0aGUga2V5Y3V0cyBsaWJyYXJ5LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgSFRNTCBlbGVtZW50IHRoYXQgc2hvdWxkIGxpc3RlbiB0b1xuICogICBrZXlib2FyZCBzaG9ydGN1dHMgKGlmIG5vdCBwcm92aWRlZCB0aGVuIHRoZSBkb2N1bWVudCBvYmplY3QgaXMgdXNlZCkuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyAob3B0aW9uYWwpLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnRyaWdnZXJPbmNlUGVyS2V5IC0gSWYgYSBrZXkgaXMga2VwdCBkb3duIHRoZW5cbiAqICAgdGhlIHNob3J0Y3V0IHdpbGwgYmUgdHJpZ2dlcmVkIG11bHRpcGxlIHRpbWVzIHdoZW4gc2V0IHRvIGZhbHNlIGFuZFxuICogICBvbmx5IG9uY2Ugd2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdDogZmFsc2UpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgLSBJZiBzZXQgdG8gZmFsc2UgdGhlblxuICogICBLZXlib2FyZEV2ZW50LmtleSBpcyBldmFsdWF0ZWQgZm9yIHRyaWdnZXJpbmcgc2hvcnRjdXRzLCBvdGhlcndpc2VcbiAqICAgS2V5Ym9hcmRFdmVudC5jb2RlIChkZWZhdWx0OiBmYWxzZSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoIC0gVGhlIG1heGltdW0gc2VxdWVuY2Ugb2ZcbiAqICAga2V5IG9yIGNvbWJvcyB0aGF0IHNob3VsZCBiZSB0cmFja2VkIChkZWZhdWx0OiAzKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5maWx0ZXIgLSBBIGZpbHRlciBmdW5jdGlvbi4gSWYgdGhlIGZpbHRlclxuICogICByZXR1cm5zIGZhbHNlIHRoZSBldmVudCB3aWxsIGJlIGZpbHRlcmVkIG91dCBhbmQgbm8gYm91bmQgaGFuZGxlclxuICogICBvciB3YXRjaGVyIHdpbGwgYmUgdHJpZ2dlcmVkLiBUaGUgZmlsdGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gKiAgIHdpdGggdGhlIGtleSBldmVudC4gVGhlIGRlZmF1bHQgZmlsdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuICovXG5jbGFzcyBLZXlzIHtcbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBkZWZhdWx0IHNjb3BlLiAqL1xuICBzdGF0aWMgREVGQVVMVF9TQ09QRSA9ICdERUZBVUxUX1NDT1BFJ1xuXG4gIF9zdG9wcGVkID0gdHJ1ZVxuICBfY3VycmVudFNjb3BlID0gS2V5cy5ERUZBVUxUX1NDT1BFXG4gIF9jdXJyZW50Q29tYm8gPSBbXVxuICBfc2VxdWVuY2UgPSBbXVxuICBfaGFuZGxlcnMgPSBbXVxuICBfd2F0Y2hlcnMgPSBbXVxuXG4gIG9wdGlvbnMgPSB7XG4gICAgdHJpZ2dlck9uY2VQZXJLZXk6IGZhbHNlLFxuICAgIHVzZUNvZGVJbnN0ZWFkS2V5OiBmYWxzZSxcbiAgICBtYXhTZXF1ZW5jZUxlbmd0aDogMyxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWVcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSBkb2N1bWVudFxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcblxuICAgIHRoaXMucmVzdW1lKClcbiAgfVxuXG4gIF9vbktleURvd24gPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm5cblxuICAgIGxldCBrZXkgPSB0aGlzLm9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgPyBldmVudC5jb2RlIDogZXZlbnQua2V5XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJ1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlUcmlnZ2VyZWQgPSB0aGlzLl9jdXJyZW50Q29tYm8uaW5jbHVkZXMoa2V5KVxuXG4gICAgaWYgKCFhbHJlYWR5VHJpZ2dlcmVkKSB7XG4gICAgICB0aGlzLl9jdXJyZW50Q29tYm8ucHVzaChrZXkpXG4gICAgICB0aGlzLl9jdXJyZW50Q29tYm8uc29ydCgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fc2VxdWVuY2UubGVuZ3RoID09PSAwIHx8XG4gICAgICAgIHRoaXMuX3NlcXVlbmNlW3RoaXMuX3NlcXVlbmNlLmxlbmd0aCAtIDFdICE9PSB0aGlzLl9jdXJyZW50Q29tYm9cbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5fc2VxdWVuY2UubGVuZ3RoID09PSB0aGlzLm9wdGlvbnMubWF4U2VxdWVuY2VMZW5ndGgpXG4gICAgICAgICAgdGhpcy5fc2VxdWVuY2Uuc2hpZnQoKVxuXG4gICAgICAgIHRoaXMuX3NlcXVlbmNlLnB1c2godGhpcy5fY3VycmVudENvbWJvKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYWxyZWFkeVRyaWdnZXJlZCB8fCAhdGhpcy5vcHRpb25zLnRyaWdnZXJPbmNlUGVyS2V5KSB7XG4gICAgICB0aGlzLl9ub3RpZnlXYXRjaGVycyhldmVudClcbiAgICAgIHRoaXMuX2Rpc3BhdGNoSGFuZGxlcnMoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgX29uS2V5VXAgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm5cblxuICAgIGxldCBrZXkgPSB0aGlzLm9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgPyBldmVudC5jb2RlIDogZXZlbnQua2V5XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJ1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRDb21ibyA9IFsuLi50aGlzLl9jdXJyZW50Q29tYm9dXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2N1cnJlbnRDb21iby5pbmRleE9mKGtleSlcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9jdXJyZW50Q29tYm8uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNvcnQoKVxuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeVdhdGNoZXJzKGV2ZW50KVxuICB9XG5cbiAgX3Jlc2V0S2V5cyA9ICgpID0+IHtcbiAgICB0aGlzLl9jdXJyZW50Q29tYm8gPSBbXVxuICAgIHRoaXMuX3NlcXVlbmNlID0gW11cbiAgfVxuXG4gIF9ub3RpZnlXYXRjaGVycyA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBzZXF1ZW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VxdWVuY2UpKVxuXG4gICAgZm9yIChsZXQgd2F0Y2hlciBvZiB0aGlzLl93YXRjaGVycykge1xuICAgICAgd2F0Y2hlci5jYWxsYmFjayhldmVudCwgc2VxdWVuY2UpXG4gICAgfVxuICB9XG5cbiAgX2Rpc3BhdGNoSGFuZGxlcnMgPSBldmVudCA9PiB7XG4gICAgY29uc3Qgc2VxdWVuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlcXVlbmNlKSlcblxuICAgIGNvbnN0IHNpZ25hdHVyZXMgPSBbXVxuXG4gICAgbGV0IHNpZ25hdHVyZVNlcXVlbmNlID0gW11cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fc2VxdWVuY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHNpZ25hdHVyZVNlcXVlbmNlID0gW3RoaXMuX3NlcXVlbmNlW2ldLCAuLi5zaWduYXR1cmVTZXF1ZW5jZV1cbiAgICAgIHNpZ25hdHVyZXMucHVzaChzdHJpbmdpZnlTaG9ydGN1dChzaWduYXR1cmVTZXF1ZW5jZSkpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jdXJyZW50U2NvcGUgPT09IGhhbmRsZXIuc2NvcGUgJiZcbiAgICAgICAgc2lnbmF0dXJlcy5pbmNsdWRlcyhoYW5kbGVyLnNpZ25hdHVyZSlcbiAgICAgICkge1xuICAgICAgICBoYW5kbGVyLmNhbGxiYWNrKGV2ZW50LCBzZXF1ZW5jZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGtleWJvYXJkIHNob3J0Y3V0LiBBIHNob3J0Y3V0IGNhbiBiZSBpbiBzdHJpbmcgb3IgYXJyYXkgZm9ybWF0LlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBzaG9ydGN1dCB0byBiaW5kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBBbiBvcHRpb25hbCBzY29wZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxuICAgKiAgIFRoZSBjYWxsYmFjayBnZXRzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IGtleSBvciBjb21ibyBzZXF1ZW5jZVxuICAgKiAgIGFuZCB0aGUga2V5IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB1bmlxdWUgSUQgb2YgdGhlIGJvdW5kIGhhbmRsZXIuXG4gICAqL1xuICBiaW5kID0gKHNob3J0Y3V0LCBzY29wZSwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSBzY29wZVxuICAgICAgc2NvcGUgPSBLZXlzLkRFRkFVTFRfU0NPUEVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNob3J0Y3V0ID09PSAnc3RyaW5nJykgc2hvcnRjdXQgPSBwYXJzZVNob3J0Y3V0KHNob3J0Y3V0KVxuXG4gICAgc2hvcnRjdXQgPSBjbGVhblNob3J0Y3V0KHNob3J0Y3V0KVxuXG4gICAgY29uc3QgaGFuZGxlcklkID0gZ2VuZXJhdGVJZCgpXG4gICAgdGhpcy5faGFuZGxlcnMucHVzaCh7XG4gICAgICBpZDogaGFuZGxlcklkLFxuICAgICAgc2lnbmF0dXJlOiBzdHJpbmdpZnlTaG9ydGN1dChzaG9ydGN1dCksXG4gICAgICBzaG9ydGN1dCxcbiAgICAgIHNjb3BlLFxuICAgICAgY2FsbGJhY2tcbiAgICB9KVxuXG4gICAgcmV0dXJuIGhhbmRsZXJJZFxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhIHNwZWNpZmljIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXIgdXNpbmcgaXRzIElELlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlcklkIC0gVGhlIElEIHJldHVybmVkIGJ5IHRoZSB7QGxpbmsgYmluZH0gbWV0aG9kLlxuICAgKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciB3aGVuIHRoZSBJRCBpcyBpbnZhbGlkLlxuICAgKi9cbiAgdW5iaW5kID0gaGFuZGxlcklkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2hhbmRsZXJzLmZpbmRJbmRleChoYW5kbGVyID0+IGhhbmRsZXIuaWQgPT09IGhhbmRsZXJJZClcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoYW5kbGVyIElEOiAnICsgaGFuZGxlcklkKVxuXG4gICAgdGhpcy5faGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVycyBoYXZpbmcgdGhlIHNwZWNpZmllZCBzY29wZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIC0gVGhlIHNjb3BlLlxuICAgKi9cbiAgdW5iaW5kU2NvcGUgPSBzY29wZSA9PiB7XG4gICAgY29uc3QgaW5kaWNlcyA9IFtdXG4gICAgdGhpcy5faGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09PSBzY29wZSkgaW5kaWNlcy5wdXNoKGluZGV4KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpbmRleCBvZiBpbmRpY2VzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlcnMuXG4gICAqL1xuICB1bmJpbmRBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5faGFuZGxlcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIGtleWJvYXJkIGV2ZW50cyAoa2V5ZG93biBhbmQga2V5dXApLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQuXG4gICAqICAgd2hlbiBhIGtleWRvd24gb3Iga2V5dXAgZXZlbnQgb2NjdXJzLiBUaGUgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgd2l0aFxuICAgKiAgIHRoZSBjdXJyZW50IGtleSBvciBjb21ibyBzZXF1ZW5jZSBhbmQgdGhlIGtleSBldmVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdW5pcXVlIElEIG9mIHRoZSBhZGRlZCB3YXRjaGVyLlxuICAgKi9cbiAgd2F0Y2ggPSBjYWxsYmFjayA9PiB7XG4gICAgY29uc3Qgd2F0Y2hlcklkID0gZ2VuZXJhdGVJZCgpXG4gICAgdGhpcy5fd2F0Y2hlcnMucHVzaCh7XG4gICAgICBpZDogd2F0Y2hlcklkLFxuICAgICAgY2FsbGJhY2tcbiAgICB9KVxuXG4gICAgcmV0dXJuIHdhdGNoZXJJZFxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhIHNwZWNpZmljIHdhdGNoZXIgdXNpbmcgaXRzIElELlxuICAgKiBAcGFyYW0ge251bWJlcn0gd2F0Y2hlcklkIC0gVGhlIElEIHJldHVybmVkIGJ5IHRoZSB7QGxpbmsgd2F0Y2h9IG1ldGhvZC5cbiAgICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3Igd2hlbiB0aGUgSUQgaXMgaW52YWxpZC5cbiAgICovXG4gIHVud2F0Y2ggPSB3YXRjaGVySWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fd2F0Y2hlcnMuZmluZEluZGV4KHdhdGNoZXIgPT4gd2F0Y2hlci5pZCA9PT0gd2F0Y2hlcklkKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHdhdGNoZXIgSUQ6ICcgKyB3YXRjaGVySWQpXG5cbiAgICB0aGlzLl93YXRjaGVycy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGFsbCB3YXRjaGVycy5cbiAgICovXG4gIHVud2F0Y2hBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5fd2F0Y2hlcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0aGUgc2NvcGUuIE9ubHkgYm91bmQgaGFuZGxlcnMgZ2V0IHRyaWdnZXJlZCB0aGF0IGhhdmUgdGhlIG5ld1xuICAgKiBzY29wZS4gVGhlIGRlZmF1bHQgc2NvcGUgY2FuIGJlIGFjY2Vzc2VkIGJ5IHtAbGluayBLZXlzLkRFRkFVTFRfU0NPUEV9LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NvcGUgLSBUaGUgc2NvcGUuXG4gICAqL1xuICBzd2l0Y2hTY29wZSA9IHNjb3BlID0+IHtcbiAgICB0aGlzLl9jdXJyZW50U2NvcGUgPSBzY29wZVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbGlzdGVuaW5nIHRvIGtleSBldmVudHMgYW5kIHJlc2V0IHRoZSBrZXkgc2VxdWVuY2UuXG4gICAqL1xuICBzdG9wID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5fc3RvcHBlZCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fcmVzZXRLZXlzKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fcmVzZXRLZXlzKVxuXG4gICAgICB0aGlzLl9yZXNldEtleXMoKVxuXG4gICAgICB0aGlzLl9zdG9wcGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN1bWUgbGlzdGVuaW5nIHRvIGtleSBldmVudHMuXG4gICAqL1xuICByZXN1bWUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX3N0b3BwZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bilcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKVxuICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX3Jlc2V0S2V5cylcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX3Jlc2V0S2V5cylcblxuICAgICAgdGhpcy5fc3RvcHBlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLyogUmVzZXQgdGhpcyBpbnN0YW5jZSBieSB1bmJpbmRpbmcgYWxsIGhhbmRsZXJzLCByZW1vdmluZyBhbGwgd2F0Y2hlcnNcbiAgICogYW5kIHJlc2V0dGluZyB0aGUga2V5IHNlcXVlbmNlLlxuICAgKi9cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5fcmVzZXRLZXlzKClcbiAgICB0aGlzLnVuYmluZEFsbCgpXG4gICAgdGhpcy51bndhdGNoQWxsKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlzXG4iLCJmdW5jdGlvbiBjbGVhblNlcXVlbmNlKHNlcXVlbmNlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2VxdWVuY2VbaV0pKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNob3J0Y3V0IHNlcXVlbmNlICR7c2VxdWVuY2V9LmApXG5cbiAgICBjbGVhbkNvbWJvKHNlcXVlbmNlW2ldKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ29tYm8oY29tYm8pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21iby5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgY29tYm9baV0gIT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNob3J0Y3V0IGNvbWJvICR7Y29tYm99LmApXG5cbiAgICBjb25zdCBjbGVhbmVkS2V5ID0gY2xlYW5LZXkoY29tYm9baV0pXG4gICAgaWYgKCFjbGVhbmVkS2V5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGtleSAke2NsZWFuZWRLZXl9IGluIHNob3J0Y3V0IGNvbWJvICR7Y29tYm99LmApXG5cbiAgICBjb21ib1tpXSA9IGNsZWFuZWRLZXlcbiAgfVxuICBjb21iby5zb3J0KClcbn1cblxuZnVuY3Rpb24gY2xlYW5LZXkoa2V5KSB7XG4gIGtleSA9IGtleS5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgaWYgKGtleSA9PT0gJyAnKSBrZXkgPSAnU3BhY2UnXG4gIGtleSA9IGtleS50cmltKClcbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBrZXlcbn1cblxuLyoqXG4gKiBDbGVhbiBhbiBhcnJheSBzaG9ydGN1dC4gVGhlIGFycmF5IGlzIGNsZWFuZWQgaW4tcGxhY2UgYW5kIGFsc28gcmV0dXJuZWQuXG4gKiBVbm5lY2Vzc2FyeSB3aGl0ZSBzcGFjZSBpcyByZW1vdmVkLCBrZXkgY29tYmluYXRpb25zIGFyZSBzb3J0ZWQgYW5kXG4gKiBzaW5nbGUgY2hhcnMgY29udmVydGVkIHRvIGxvd2VyIGNhc2UuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IHNob3J0Y3V0IC0gVGhlIGFycmF5IHNob3J0Y3V0IHRvIGNsZWFuLlxuICogQHJldHVybiB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gVGhlIGNsZWFuZWQgYXJyYXkgc2hvcnRjdXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNob3J0Y3V0KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzaG9ydGN1dCkgfHwgc2hvcnRjdXQubGVuZ3RoID09PSAwKVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcnJheSBzaG9ydGN1dCB0byBjbGVhbjogJyArIHNob3J0Y3V0KVxuXG4gIGxldCBpc1NlcXVlbmNlID0gdHlwZW9mIHNob3J0Y3V0WzBdICE9PSAnc3RyaW5nJ1xuXG4gIGlmIChpc1NlcXVlbmNlICYmIHNob3J0Y3V0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHNob3J0Y3V0ID0gc2hvcnRjdXRbMF1cbiAgICBpc1NlcXVlbmNlID0gZmFsc2VcbiAgfVxuXG4gIGlmIChpc1NlcXVlbmNlKSBjbGVhblNlcXVlbmNlKHNob3J0Y3V0KVxuICBlbHNlIGNsZWFuQ29tYm8oc2hvcnRjdXQpXG5cbiAgcmV0dXJuIHNob3J0Y3V0XG59XG4iLCJsZXQgbmV4dElkID0gMVxuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXF1ZSBJRCBldmVyeSB0aW1lIGl0IGlzIGNhbGxlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gQSB1bmlxdWUgSUQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV4dElkKytcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgS2V5cyB9IGZyb20gJy4vS2V5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xlYW5TaG9ydGN1dCB9IGZyb20gJy4vY2xlYW5TaG9ydGN1dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2VuZXJhdGVJZCB9IGZyb20gJy4vZ2VuZXJhdGVJZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2VTaG9ydGN1dCB9IGZyb20gJy4vcGFyc2VTaG9ydGN1dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5naWZ5U2hvcnRjdXQgfSBmcm9tICcuL3N0cmluZ2lmeVNob3J0Y3V0J1xuIiwiY29uc3QgQ09NQklORV9XSVRIID0gJysnXG5jb25zdCBGT0xMT1dFRF9CWSA9ICc+J1xuXG5mdW5jdGlvbiBnZXREdXBsaWNhdGVzKGNvbWJvKSB7XG4gIGNvbnN0IGNvdW50ID0gY29tYm8gPT5cbiAgICBjb21iby5yZWR1Y2UoKGsxLCBrMikgPT4gT2JqZWN0LmFzc2lnbihrMSwgeyBbazJdOiAoazFbazJdIHx8IDApICsgMSB9KSwge30pXG4gIGNvbnN0IGR1cGxpY2F0ZXMgPSBkaWN0ID0+IE9iamVjdC5rZXlzKGRpY3QpLmZpbHRlcihrID0+IGRpY3Rba10gPiAxKVxuICByZXR1cm4gZHVwbGljYXRlcyhjb3VudChjb21ibykpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRLZXkoa2V5KSB7XG4gIGtleSA9IGtleS5qb2luKCcnKVxuICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIGtleVxufVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIHNob3J0Y3V0IGFuZCByZXR1cm4gdGhlIGVxdWl2YWxlbnQgYXJyYXkgc2hvcnRjdXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hvcnRjdXQgLSBUaGUgc3RyaW5nIHNob3J0Y3V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBUaGUgY29udmVydGVkIGFycmF5IHNob3J0Y3V0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaG9ydGN1dCkge1xuICBpZiAodHlwZW9mIHNob3J0Y3V0ICE9PSAnc3RyaW5nJylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIHNob3J0Y3V0IHRvIHBhcnNlOiAnICsgc2hvcnRjdXQpXG5cbiAgc2hvcnRjdXQgPSBzaG9ydGN1dC5yZXBsYWNlKC9cXHMrL2csICcnKVxuXG4gIGlmICh0eXBlb2Ygc2hvcnRjdXQgIT09ICdzdHJpbmcnIHx8IHNob3J0Y3V0Lmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKG11c3QgYmUgbm9uIGVtcHR5IHN0cmluZyk6ICcgKyBzaG9ydGN1dClcblxuICBsZXQga2V5ID0gW11cbiAgbGV0IGNvbWJvID0gW11cbiAgY29uc3Qgc2VxdWVuY2UgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hvcnRjdXQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjID0gc2hvcnRjdXQuY2hhckF0KGkpXG4gICAgaWYgKCFrZXkubGVuZ3RoKSB7XG4gICAgICBrZXkucHVzaChjKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYyA9PT0gQ09NQklORV9XSVRIKSB7XG4gICAgICAgIGNvbWJvLnB1c2goY29udmVydEtleShrZXkpKVxuICAgICAgICBrZXkgPSBbXVxuICAgICAgfSBlbHNlIGlmIChjID09PSBGT0xMT1dFRF9CWSkge1xuICAgICAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSlcbiAgICAgICAga2V5ID0gW11cbiAgICAgICAgY29tYm8uc29ydCgpXG4gICAgICAgIHNlcXVlbmNlLnB1c2goY29tYm8pXG4gICAgICAgIGNvbWJvID0gW11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5wdXNoKGMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleS5sZW5ndGgpIHtcbiAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSlcbiAgICBjb21iby5zb3J0KClcbiAgICBzZXF1ZW5jZS5wdXNoKGNvbWJvKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCAobXVzdCBlbmQgd2l0aCBrZXkpOiAnICsgc2hvcnRjdXQpXG4gIH1cblxuICBmb3IgKGxldCBjb21ibyBvZiBzZXF1ZW5jZSkge1xuICAgIGNvbnN0IGR1cGxpY2F0ZXMgPSBnZXREdXBsaWNhdGVzKGNvbWJvKVxuICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKGR1cGxpY2F0ZSBrZXlzKTonICsgc2hvcnRjdXQpXG4gIH1cblxuICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAxKSByZXR1cm4gc2VxdWVuY2VbMF1cbiAgZWxzZSByZXR1cm4gc2VxdWVuY2Vcbn1cbiIsImNvbnN0IENPTUJJTkVfV0lUSCA9ICcgKyAnXG5jb25zdCBGT0xMT1dFRF9CWSA9ICcgPiAnXG5cbi8qKlxuICogQ3JlYXRlIGVxdWl2YWxlbnQgc3RyaW5nIHNob3J0Y3V0IG9mIGFuIGFycmF5IHNob3J0Y3V0LlxuICogQHBhcmFtIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBhcnJheSBzaG9ydGN1dCB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY29udmVydGVkIHN0cmluZyBzaG9ydGN1cnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNob3J0Y3V0KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzaG9ydGN1dCkpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFycmF5IHNob3J0Y3V0IHRvIHN0cmluZ2lmeTogJyArIHNob3J0Y3V0KVxuXG4gIGxldCBpc1NlcXVlbmNlID0gdHlwZW9mIHNob3J0Y3V0WzBdICE9PSAnc3RyaW5nJ1xuXG4gIGlmICghaXNTZXF1ZW5jZSkge1xuICAgIHJldHVybiBzaG9ydGN1dC5qb2luKENPTUJJTkVfV0lUSClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2hvcnRjdXQubWFwKHBhcnQgPT4gcGFydC5qb2luKENPTUJJTkVfV0lUSCkpLmpvaW4oRk9MTE9XRURfQlkpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=