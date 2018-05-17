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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvS2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY2xlYW5TaG9ydGN1dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3BhcnNlU2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzIl0sIm5hbWVzIjpbIktleXMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIl9zdG9wcGVkIiwiX2N1cnJlbnRTY29wZSIsIkRFRkFVTFRfU0NPUEUiLCJfY3VycmVudENvbWJvIiwiX3NlcXVlbmNlIiwiX2hhbmRsZXJzIiwiX3dhdGNoZXJzIiwidHJpZ2dlck9uY2VQZXJLZXkiLCJ1c2VDb2RlSW5zdGVhZEtleSIsIm1heFNlcXVlbmNlTGVuZ3RoIiwiZmlsdGVyIiwiX29uS2V5RG93biIsImNhbGwiLCJldmVudCIsImtleSIsImNvZGUiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImFscmVhZHlUcmlnZ2VyZWQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0Iiwic2hpZnQiLCJfbm90aWZ5V2F0Y2hlcnMiLCJfZGlzcGF0Y2hIYW5kbGVycyIsIl9vbktleVVwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiX3Jlc2V0S2V5cyIsInNlcXVlbmNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwid2F0Y2hlciIsImNhbGxiYWNrIiwic2lnbmF0dXJlcyIsInNpZ25hdHVyZVNlcXVlbmNlIiwiaSIsImhhbmRsZXIiLCJzY29wZSIsInNpZ25hdHVyZSIsImJpbmQiLCJzaG9ydGN1dCIsInVuZGVmaW5lZCIsImhhbmRsZXJJZCIsImlkIiwidW5iaW5kIiwiZmluZEluZGV4IiwiRXJyb3IiLCJ1bmJpbmRTY29wZSIsImluZGljZXMiLCJmb3JFYWNoIiwidW5iaW5kQWxsIiwid2F0Y2giLCJ3YXRjaGVySWQiLCJ1bndhdGNoIiwidW53YXRjaEFsbCIsInN3aXRjaFNjb3BlIiwic3RvcCIsIl9lbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3VtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldCIsIndpbmRvdyIsIk9iamVjdCIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsImlzU2VxdWVuY2UiLCJjbGVhblNlcXVlbmNlIiwiY2xlYW5Db21ibyIsImNvbWJvIiwiY2xlYW5lZEtleSIsImNsZWFuS2V5IiwicmVwbGFjZSIsInRyaW0iLCJuZXh0SWQiLCJkZWZhdWx0IiwiYyIsImNoYXJBdCIsIkNPTUJJTkVfV0lUSCIsImNvbnZlcnRLZXkiLCJGT0xMT1dFRF9CWSIsImR1cGxpY2F0ZXMiLCJnZXREdXBsaWNhdGVzIiwiY291bnQiLCJyZWR1Y2UiLCJrMSIsImsyIiwia2V5cyIsImRpY3QiLCJrIiwiam9pbiIsIm1hcCIsInBhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQk1BLEk7QUFDSjtBQWlCQSxjQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QjtBQUFBOztBQUFBOztBQUFBLE9BZDlCQyxRQWM4QixHQWRuQixJQWNtQjtBQUFBLE9BYjlCQyxhQWE4QixHQWJkSixLQUFLSyxhQWFTO0FBQUEsT0FaOUJDLGFBWThCLEdBWmQsRUFZYztBQUFBLE9BWDlCQyxTQVc4QixHQVhsQixFQVdrQjtBQUFBLE9BVjlCQyxTQVU4QixHQVZsQixFQVVrQjtBQUFBLE9BVDlCQyxTQVM4QixHQVRsQixFQVNrQjtBQUFBLE9BUDlCUCxPQU84QixHQVBwQjtBQUNSUSx1QkFBbUIsS0FEWDtBQUVSQyx1QkFBbUIsS0FGWDtBQUdSQyx1QkFBbUIsQ0FIWDtBQUlSQyxZQUFRO0FBQUEsYUFBTSxJQUFOO0FBQUE7QUFKQSxHQU9vQjs7QUFBQSxPQVM5QkMsVUFUOEIsR0FTakIsaUJBQVM7QUFDcEIsUUFBSSxDQUFDLE1BQUtaLE9BQUwsQ0FBYVcsTUFBYixDQUFvQkUsSUFBcEIsQ0FBeUIsS0FBekIsRUFBK0JDLEtBQS9CLENBQUwsRUFBNEM7O0FBRTVDLFFBQUlDLE1BQU0sTUFBS2YsT0FBTCxDQUFhUyxpQkFBYixHQUFpQ0ssTUFBTUUsSUFBdkMsR0FBOENGLE1BQU1DLEdBQTlEOztBQUVBLFFBQUlBLElBQUlFLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQkYsWUFBTUEsSUFBSUcsV0FBSixFQUFOO0FBQ0EsVUFBSUgsUUFBUSxHQUFaLEVBQWlCQSxNQUFNLE9BQU47QUFDbEI7O0FBRUQsUUFBTUksbUJBQW1CLE1BQUtmLGFBQUwsQ0FBbUJnQixRQUFuQixDQUE0QkwsR0FBNUIsQ0FBekI7O0FBRUEsUUFBSSxDQUFDSSxnQkFBTCxFQUF1QjtBQUNyQixZQUFLZixhQUFMLENBQW1CaUIsSUFBbkIsQ0FBd0JOLEdBQXhCO0FBQ0EsWUFBS1gsYUFBTCxDQUFtQmtCLElBQW5COztBQUVBLFVBQ0UsTUFBS2pCLFNBQUwsQ0FBZVksTUFBZixLQUEwQixDQUExQixJQUNBLE1BQUtaLFNBQUwsQ0FBZSxNQUFLQSxTQUFMLENBQWVZLE1BQWYsR0FBd0IsQ0FBdkMsTUFBOEMsTUFBS2IsYUFGckQsRUFHRTtBQUNBLFlBQUksTUFBS0MsU0FBTCxDQUFlWSxNQUFmLEtBQTBCLE1BQUtqQixPQUFMLENBQWFVLGlCQUEzQyxFQUNFLE1BQUtMLFNBQUwsQ0FBZWtCLEtBQWY7O0FBRUYsY0FBS2xCLFNBQUwsQ0FBZWdCLElBQWYsQ0FBb0IsTUFBS2pCLGFBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJLENBQUNlLGdCQUFELElBQXFCLENBQUMsTUFBS25CLE9BQUwsQ0FBYVEsaUJBQXZDLEVBQTBEO0FBQ3hELFlBQUtnQixlQUFMLENBQXFCVixLQUFyQjtBQUNBLFlBQUtXLGlCQUFMLENBQXVCWCxLQUF2QjtBQUNEO0FBQ0YsR0F4QzZCOztBQUFBLE9BMEM5QlksUUExQzhCLEdBMENuQixpQkFBUztBQUNsQixRQUFJLENBQUMsTUFBSzFCLE9BQUwsQ0FBYVcsTUFBYixDQUFvQkUsSUFBcEIsQ0FBeUIsS0FBekIsRUFBK0JDLEtBQS9CLENBQUwsRUFBNEM7O0FBRTVDLFFBQUlDLE1BQU0sTUFBS2YsT0FBTCxDQUFhUyxpQkFBYixHQUFpQ0ssTUFBTUUsSUFBdkMsR0FBOENGLE1BQU1DLEdBQTlEOztBQUVBLFFBQUlBLElBQUlFLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQkYsWUFBTUEsSUFBSUcsV0FBSixFQUFOO0FBQ0EsVUFBSUgsUUFBUSxHQUFaLEVBQWlCQSxNQUFNLE9BQU47QUFDbEI7O0FBRUQsVUFBS1gsYUFBTCxnQ0FBeUIsTUFBS0EsYUFBOUI7O0FBRUEsUUFBTXVCLFFBQVEsTUFBS3ZCLGFBQUwsQ0FBbUJ3QixPQUFuQixDQUEyQmIsR0FBM0IsQ0FBZDtBQUNBLFFBQUlZLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLFlBQUt2QixhQUFMLENBQW1CeUIsTUFBbkIsQ0FBMEJGLEtBQTFCLEVBQWlDLENBQWpDO0FBQ0EsWUFBS3ZCLGFBQUwsQ0FBbUJrQixJQUFuQjtBQUNEOztBQUVELFVBQUtFLGVBQUwsQ0FBcUJWLEtBQXJCO0FBQ0QsR0E3RDZCOztBQUFBLE9BK0Q5QmdCLFVBL0Q4QixHQStEakIsWUFBTTtBQUNqQixVQUFLMUIsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDRCxHQWxFNkI7O0FBQUEsT0FvRTlCbUIsZUFwRThCLEdBb0VaLGlCQUFTO0FBQ3pCLFFBQU1PLFdBQVdDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsU0FBTCxDQUFlLE1BQUs3QixTQUFwQixDQUFYLENBQWpCOztBQUR5QjtBQUFBO0FBQUE7O0FBQUE7QUFHekIsMkJBQW9CLE1BQUtFLFNBQXpCLDhIQUFvQztBQUFBLFlBQTNCNEIsT0FBMkI7O0FBQ2xDQSxnQkFBUUMsUUFBUixDQUFpQkwsUUFBakIsRUFBMkJqQixLQUEzQjtBQUNEO0FBTHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNMUIsR0ExRTZCOztBQUFBLE9BNEU5QlcsaUJBNUU4QixHQTRFVixpQkFBUztBQUMzQixRQUFNTSxXQUFXQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLFNBQUwsQ0FBZSxNQUFLN0IsU0FBcEIsQ0FBWCxDQUFqQjs7QUFFQSxRQUFNZ0MsYUFBYSxFQUFuQjs7QUFFQSxRQUFJQyxvQkFBb0IsRUFBeEI7QUFDQSxTQUFLLElBQUlDLElBQUksTUFBS2xDLFNBQUwsQ0FBZVksTUFBZixHQUF3QixDQUFyQyxFQUF3Q3NCLEtBQUssQ0FBN0MsRUFBZ0RBLEdBQWhELEVBQXFEO0FBQ25ERCwyQkFBcUIsTUFBS2pDLFNBQUwsQ0FBZWtDLENBQWYsQ0FBckIsNEJBQTJDRCxpQkFBM0M7QUFDQUQsaUJBQVdoQixJQUFYLENBQWdCLGlDQUFrQmlCLGlCQUFsQixDQUFoQjtBQUNEOztBQVQwQjtBQUFBO0FBQUE7O0FBQUE7QUFXM0IsNEJBQW9CLE1BQUtoQyxTQUF6QixtSUFBb0M7QUFBQSxZQUEzQmtDLE9BQTJCOztBQUNsQyxZQUNFLE1BQUt0QyxhQUFMLEtBQXVCc0MsUUFBUUMsS0FBL0IsSUFDQUosV0FBV2pCLFFBQVgsQ0FBb0JvQixRQUFRRSxTQUE1QixDQUZGLEVBR0U7QUFDQUYsa0JBQVFKLFFBQVIsQ0FBaUJMLFFBQWpCLEVBQTJCakIsS0FBM0I7QUFDRDtBQUNGO0FBbEIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUI1QixHQS9GNkI7O0FBQUEsT0EwRzlCNkIsSUExRzhCLEdBMEd2QixVQUFDQyxRQUFELEVBQVdILEtBQVgsRUFBa0JMLFFBQWxCLEVBQStCO0FBQ3BDLFFBQUlBLGFBQWFTLFNBQWpCLEVBQTRCO0FBQzFCVCxpQkFBV0ssS0FBWDtBQUNBQSxjQUFRM0MsS0FBS0ssYUFBYjtBQUNEOztBQUVELFFBQUksT0FBT3lDLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0NBLFdBQVcsNkJBQWNBLFFBQWQsQ0FBWDs7QUFFbENBLGVBQVcsNkJBQWNBLFFBQWQsQ0FBWDs7QUFFQSxRQUFNRSxZQUFZLDJCQUFsQjtBQUNBLFVBQUt4QyxTQUFMLENBQWVlLElBQWYsQ0FBb0I7QUFDbEIwQixVQUFJRCxTQURjO0FBRWxCSixpQkFBVyxpQ0FBa0JFLFFBQWxCLENBRk87QUFHbEJBLHdCQUhrQjtBQUlsQkgsa0JBSmtCO0FBS2xCTDtBQUxrQixLQUFwQjs7QUFRQSxXQUFPVSxTQUFQO0FBQ0QsR0E5SDZCOztBQUFBLE9BcUk5QkUsTUFySThCLEdBcUlyQixxQkFBYTtBQUNwQixRQUFNckIsUUFBUSxNQUFLckIsU0FBTCxDQUFlMkMsU0FBZixDQUF5QjtBQUFBLGFBQVdULFFBQVFPLEVBQVIsS0FBZUQsU0FBMUI7QUFBQSxLQUF6QixDQUFkOztBQUVBLFFBQUluQixVQUFVLENBQUMsQ0FBZixFQUFrQixNQUFNLElBQUl1QixLQUFKLENBQVUseUJBQXlCSixTQUFuQyxDQUFOOztBQUVsQixVQUFLeEMsU0FBTCxDQUFldUIsTUFBZixDQUFzQkYsS0FBdEIsRUFBNkIsQ0FBN0I7QUFDRCxHQTNJNkI7O0FBQUEsT0FpSjlCd0IsV0FqSjhCLEdBaUpoQixpQkFBUztBQUNyQixRQUFNQyxVQUFVLEVBQWhCO0FBQ0EsVUFBSzlDLFNBQUwsQ0FBZStDLE9BQWYsQ0FBdUIsVUFBQ2IsT0FBRCxFQUFVYixLQUFWLEVBQW9CO0FBQ3pDLFVBQUlhLFFBQVFDLEtBQVIsS0FBa0JBLEtBQXRCLEVBQTZCVyxRQUFRL0IsSUFBUixDQUFhTSxLQUFiO0FBQzlCLEtBRkQ7O0FBRnFCO0FBQUE7QUFBQTs7QUFBQTtBQU1yQiw0QkFBa0J5QixPQUFsQixtSUFBMkI7QUFBQSxZQUFsQnpCLEtBQWtCOztBQUN6QixjQUFLckIsU0FBTCxDQUFldUIsTUFBZixDQUFzQkYsS0FBdEIsRUFBNkIsQ0FBN0I7QUFDRDtBQVJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3RCLEdBMUo2Qjs7QUFBQSxPQStKOUIyQixTQS9KOEIsR0ErSmxCLFlBQU07QUFDaEIsVUFBS2hELFNBQUwsR0FBaUIsRUFBakI7QUFDRCxHQWpLNkI7O0FBQUEsT0EwSzlCaUQsS0ExSzhCLEdBMEt0QixvQkFBWTtBQUNsQixRQUFNQyxZQUFZLDJCQUFsQjtBQUNBLFVBQUtqRCxTQUFMLENBQWVjLElBQWYsQ0FBb0I7QUFDbEIwQixVQUFJUyxTQURjO0FBRWxCcEI7QUFGa0IsS0FBcEI7O0FBS0EsV0FBT29CLFNBQVA7QUFDRCxHQWxMNkI7O0FBQUEsT0F5TDlCQyxPQXpMOEIsR0F5THBCLHFCQUFhO0FBQ3JCLFFBQU05QixRQUFRLE1BQUtwQixTQUFMLENBQWUwQyxTQUFmLENBQXlCO0FBQUEsYUFBV2QsUUFBUVksRUFBUixLQUFlUyxTQUExQjtBQUFBLEtBQXpCLENBQWQ7O0FBRUEsUUFBSTdCLFVBQVUsQ0FBQyxDQUFmLEVBQWtCLE1BQU0sSUFBSXVCLEtBQUosQ0FBVSx5QkFBeUJNLFNBQW5DLENBQU47O0FBRWxCLFVBQUtqRCxTQUFMLENBQWVzQixNQUFmLENBQXNCRixLQUF0QixFQUE2QixDQUE3QjtBQUNELEdBL0w2Qjs7QUFBQSxPQW9NOUIrQixVQXBNOEIsR0FvTWpCLFlBQU07QUFDakIsVUFBS25ELFNBQUwsR0FBaUIsRUFBakI7QUFDRCxHQXRNNkI7O0FBQUEsT0E2TTlCb0QsV0E3TThCLEdBNk1oQixpQkFBUztBQUNyQixVQUFLekQsYUFBTCxHQUFxQnVDLEtBQXJCO0FBQ0QsR0EvTTZCOztBQUFBLE9Bb045Qm1CLElBcE44QixHQW9OdkIsWUFBTTtBQUNYLFFBQUksQ0FBQyxNQUFLM0QsUUFBVixFQUFvQjtBQUNsQixZQUFLNEQsUUFBTCxDQUFjQyxtQkFBZCxDQUFrQyxTQUFsQyxFQUE2QyxNQUFLbEQsVUFBbEQ7QUFDQSxZQUFLaUQsUUFBTCxDQUFjQyxtQkFBZCxDQUFrQyxPQUFsQyxFQUEyQyxNQUFLcEMsUUFBaEQ7QUFDQSxZQUFLbUMsUUFBTCxDQUFjQyxtQkFBZCxDQUFrQyxPQUFsQyxFQUEyQyxNQUFLaEMsVUFBaEQ7QUFDQSxZQUFLK0IsUUFBTCxDQUFjQyxtQkFBZCxDQUFrQyxNQUFsQyxFQUEwQyxNQUFLaEMsVUFBL0M7O0FBRUEsWUFBS0EsVUFBTDs7QUFFQSxZQUFLN0IsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBQ0YsR0EvTjZCOztBQUFBLE9Bb085QjhELE1BcE84QixHQW9PckIsWUFBTTtBQUNiLFFBQUksTUFBSzlELFFBQVQsRUFBbUI7QUFDakIsWUFBSzRELFFBQUwsQ0FBY0csZ0JBQWQsQ0FBK0IsU0FBL0IsRUFBMEMsTUFBS3BELFVBQS9DO0FBQ0EsWUFBS2lELFFBQUwsQ0FBY0csZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsTUFBS3RDLFFBQTdDO0FBQ0EsWUFBS21DLFFBQUwsQ0FBY0csZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsTUFBS2xDLFVBQTdDO0FBQ0EsWUFBSytCLFFBQUwsQ0FBY0csZ0JBQWQsQ0FBK0IsTUFBL0IsRUFBdUMsTUFBS2xDLFVBQTVDOztBQUVBLFlBQUs3QixRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRixHQTdPNkI7O0FBQUEsT0FrUDlCZ0UsS0FsUDhCLEdBa1B0QixZQUFNO0FBQ1osVUFBS25DLFVBQUw7QUFDQSxVQUFLd0IsU0FBTDtBQUNBLFVBQUtJLFVBQUw7QUFDRCxHQXRQNkI7O0FBQzVCLE1BQUksQ0FBQzNELE9BQUwsRUFBY0EsVUFBVW1FLE1BQVY7QUFDZCxPQUFLTCxRQUFMLEdBQWdCOUQsT0FBaEI7O0FBRUFvRSxTQUFPQyxNQUFQLENBQWMsS0FBS3BFLE9BQW5CLEVBQTRCQSxPQUE1Qjs7QUFFQSxPQUFLK0QsTUFBTDtBQUNEOztBQTBGRDs7Ozs7Ozs7Ozs7QUErQkE7Ozs7Ozs7QUFhQTs7Ozs7O0FBZUE7Ozs7O0FBT0E7Ozs7Ozs7OztBQWlCQTs7Ozs7OztBQWFBOzs7OztBQU9BOzs7Ozs7O0FBU0E7Ozs7O0FBZ0JBOzs7OztBQWNBOzs7OztBQWpRSWpFLEksQ0FFR0ssYSxHQUFnQixlO2tCQXlRVkwsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQzVQQSxVQUFTOEMsUUFBVCxFQUFtQjtBQUNoQyxNQUFJLENBQUN5QixNQUFNQyxPQUFOLENBQWMxQixRQUFkLENBQUQsSUFBNEJBLFNBQVMzQixNQUFULEtBQW9CLENBQXBELEVBQ0UsTUFBTSxJQUFJaUMsS0FBSixDQUFVLHNDQUFzQ04sUUFBaEQsQ0FBTjs7QUFFRixNQUFJMkIsYUFBYSxPQUFPM0IsU0FBUyxDQUFULENBQVAsS0FBdUIsUUFBeEM7O0FBRUEsTUFBSTJCLGNBQWMzQixTQUFTM0IsTUFBVCxLQUFvQixDQUF0QyxFQUF5QztBQUN2QzJCLGVBQVdBLFNBQVMsQ0FBVCxDQUFYO0FBQ0EyQixpQkFBYSxLQUFiO0FBQ0Q7O0FBRUQsTUFBSUEsVUFBSixFQUFnQkMsY0FBYzVCLFFBQWQsRUFBaEIsS0FDSzZCLFdBQVc3QixRQUFYOztBQUVMLFNBQU9BLFFBQVA7QUFDRCxDOztBQXJERCxTQUFTNEIsYUFBVCxDQUF1QnpDLFFBQXZCLEVBQWlDO0FBQy9CLE9BQUssSUFBSVEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUixTQUFTZCxNQUE3QixFQUFxQ3NCLEdBQXJDLEVBQTBDO0FBQ3hDLFFBQUksQ0FBQzhCLE1BQU1DLE9BQU4sQ0FBY3ZDLFNBQVNRLENBQVQsQ0FBZCxDQUFMLEVBQ0UsTUFBTSxJQUFJVyxLQUFKLGdDQUF1Q25CLFFBQXZDLE9BQU47O0FBRUYwQyxlQUFXMUMsU0FBU1EsQ0FBVCxDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTa0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsT0FBSyxJQUFJbkMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbUMsTUFBTXpELE1BQTFCLEVBQWtDc0IsR0FBbEMsRUFBdUM7QUFDckMsUUFBSSxPQUFPbUMsTUFBTW5DLENBQU4sQ0FBUCxLQUFvQixRQUF4QixFQUNFLE1BQU0sSUFBSVcsS0FBSiw2QkFBb0N3QixLQUFwQyxPQUFOOztBQUVGLFFBQU1DLGFBQWFDLFNBQVNGLE1BQU1uQyxDQUFOLENBQVQsQ0FBbkI7QUFDQSxRQUFJLENBQUNvQyxVQUFMLEVBQ0UsTUFBTSxJQUFJekIsS0FBSixrQkFBeUJ5QixVQUF6QiwyQkFBeURELEtBQXpELE9BQU47O0FBRUZBLFVBQU1uQyxDQUFOLElBQVdvQyxVQUFYO0FBQ0Q7QUFDREQsUUFBTXBELElBQU47QUFDRDs7QUFFRCxTQUFTc0QsUUFBVCxDQUFrQjdELEdBQWxCLEVBQXVCO0FBQ3JCQSxRQUFNQSxJQUFJOEQsT0FBSixDQUFZLE1BQVosRUFBb0IsR0FBcEIsQ0FBTjtBQUNBLE1BQUk5RCxRQUFRLEdBQVosRUFBaUJBLE1BQU0sT0FBTjtBQUNqQkEsUUFBTUEsSUFBSStELElBQUosRUFBTjtBQUNBLE1BQUkvRCxJQUFJRSxNQUFKLEtBQWUsQ0FBbkIsRUFBc0JGLE1BQU1BLElBQUlHLFdBQUosRUFBTjtBQUN0QixTQUFPSCxHQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkN6QmUsWUFBVztBQUN4QixTQUFPZ0UsUUFBUDtBQUNELEM7O0FBUkQsSUFBSUEsU0FBUyxDQUFiOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0NGU0MsTzs7Ozs7Ozs7O2tEQUNBQSxPOzs7Ozs7Ozs7K0NBQ0FBLE87Ozs7Ozs7OztrREFDQUEsTzs7Ozs7Ozs7O3NEQUNBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2lCTSxVQUFTcEMsUUFBVCxFQUFtQjtBQUNoQyxNQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFDRSxNQUFNLElBQUlNLEtBQUosQ0FBVSx1Q0FBdUNOLFFBQWpELENBQU47O0FBRUZBLGFBQVdBLFNBQVNpQyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLEVBQXpCLENBQVg7O0FBRUEsTUFBSSxPQUFPakMsUUFBUCxLQUFvQixRQUFwQixJQUFnQ0EsU0FBUzNCLE1BQVQsS0FBb0IsQ0FBeEQsRUFDRSxNQUFNLElBQUlpQyxLQUFKLENBQVUsa0RBQWtETixRQUE1RCxDQUFOOztBQUVGLE1BQUk3QixNQUFNLEVBQVY7QUFDQSxNQUFJMkQsUUFBUSxFQUFaO0FBQ0EsTUFBTTNDLFdBQVcsRUFBakI7O0FBRUEsT0FBSyxJQUFJUSxJQUFJLENBQWIsRUFBZ0JBLElBQUlLLFNBQVMzQixNQUE3QixFQUFxQ3NCLEdBQXJDLEVBQTBDO0FBQ3hDLFFBQU0wQyxJQUFJckMsU0FBU3NDLE1BQVQsQ0FBZ0IzQyxDQUFoQixDQUFWO0FBQ0EsUUFBSSxDQUFDeEIsSUFBSUUsTUFBVCxFQUFpQjtBQUNmRixVQUFJTSxJQUFKLENBQVM0RCxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSUEsTUFBTUUsWUFBVixFQUF3QjtBQUN0QlQsY0FBTXJELElBQU4sQ0FBVytELFdBQVdyRSxHQUFYLENBQVg7QUFDQUEsY0FBTSxFQUFOO0FBQ0QsT0FIRCxNQUdPLElBQUlrRSxNQUFNSSxXQUFWLEVBQXVCO0FBQzVCWCxjQUFNckQsSUFBTixDQUFXK0QsV0FBV3JFLEdBQVgsQ0FBWDtBQUNBQSxjQUFNLEVBQU47QUFDQTJELGNBQU1wRCxJQUFOO0FBQ0FTLGlCQUFTVixJQUFULENBQWNxRCxLQUFkO0FBQ0FBLGdCQUFRLEVBQVI7QUFDRCxPQU5NLE1BTUE7QUFDTDNELFlBQUlNLElBQUosQ0FBUzRELENBQVQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSWxFLElBQUlFLE1BQVIsRUFBZ0I7QUFDZHlELFVBQU1yRCxJQUFOLENBQVcrRCxXQUFXckUsR0FBWCxDQUFYO0FBQ0EyRCxVQUFNcEQsSUFBTjtBQUNBUyxhQUFTVixJQUFULENBQWNxRCxLQUFkO0FBQ0QsR0FKRCxNQUlPO0FBQ0wsVUFBTSxJQUFJeEIsS0FBSixDQUFVLDJDQUEyQ04sUUFBckQsQ0FBTjtBQUNEOztBQXZDK0I7QUFBQTtBQUFBOztBQUFBO0FBeUNoQyx5QkFBa0JiLFFBQWxCLDhIQUE0QjtBQUFBLFVBQW5CMkMsTUFBbUI7O0FBQzFCLFVBQU1ZLGFBQWFDLGNBQWNiLE1BQWQsQ0FBbkI7QUFDQSxVQUFJWSxXQUFXckUsTUFBWCxHQUFvQixDQUF4QixFQUNFLE1BQU0sSUFBSWlDLEtBQUosQ0FBVSx1Q0FBdUNOLFFBQWpELENBQU47QUFDSDtBQTdDK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUErQ2hDLE1BQUliLFNBQVNkLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkIsT0FBT2MsU0FBUyxDQUFULENBQVAsQ0FBM0IsS0FDSyxPQUFPQSxRQUFQO0FBQ04sQzs7OztBQXRFRCxJQUFNb0QsZUFBZSxHQUFyQjtBQUNBLElBQU1FLGNBQWMsR0FBcEI7O0FBRUEsU0FBU0UsYUFBVCxDQUF1QmIsS0FBdkIsRUFBOEI7QUFDNUIsTUFBTWMsUUFBUSxTQUFSQSxLQUFRO0FBQUEsV0FDWmQsTUFBTWUsTUFBTixDQUFhLFVBQUNDLEVBQUQsRUFBS0MsRUFBTDtBQUFBLGFBQVl4QixPQUFPQyxNQUFQLENBQWNzQixFQUFkLHNCQUFxQkMsRUFBckIsRUFBMEIsQ0FBQ0QsR0FBR0MsRUFBSCxLQUFVLENBQVgsSUFBZ0IsQ0FBMUMsRUFBWjtBQUFBLEtBQWIsRUFBeUUsRUFBekUsQ0FEWTtBQUFBLEdBQWQ7QUFFQSxNQUFNTCxhQUFhLFNBQWJBLFVBQWE7QUFBQSxXQUFRbkIsT0FBT3lCLElBQVAsQ0FBWUMsSUFBWixFQUFrQmxGLE1BQWxCLENBQXlCO0FBQUEsYUFBS2tGLEtBQUtDLENBQUwsSUFBVSxDQUFmO0FBQUEsS0FBekIsQ0FBUjtBQUFBLEdBQW5CO0FBQ0EsU0FBT1IsV0FBV0UsTUFBTWQsS0FBTixDQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFTVSxVQUFULENBQW9CckUsR0FBcEIsRUFBeUI7QUFDdkJBLFFBQU1BLElBQUlnRixJQUFKLENBQVMsRUFBVCxDQUFOO0FBQ0EsTUFBSWhGLElBQUlFLE1BQUosS0FBZSxDQUFuQixFQUFzQkYsTUFBTUEsSUFBSUcsV0FBSixFQUFOO0FBQ3RCLFNBQU9ILEdBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNSZSxVQUFTNkIsUUFBVCxFQUFtQjtBQUNoQyxNQUFJLENBQUN5QixNQUFNQyxPQUFOLENBQWMxQixRQUFkLENBQUwsRUFDRSxNQUFNLElBQUlNLEtBQUosQ0FBVSwwQ0FBMENOLFFBQXBELENBQU47O0FBRUYsTUFBSTJCLGFBQWEsT0FBTzNCLFNBQVMsQ0FBVCxDQUFQLEtBQXVCLFFBQXhDOztBQUVBLE1BQUksQ0FBQzJCLFVBQUwsRUFBaUI7QUFDZixXQUFPM0IsU0FBU21ELElBQVQsQ0FBY1osWUFBZCxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT3ZDLFNBQVNvRCxHQUFULENBQWE7QUFBQSxhQUFRQyxLQUFLRixJQUFMLENBQVVaLFlBQVYsQ0FBUjtBQUFBLEtBQWIsRUFBOENZLElBQTlDLENBQW1EVixXQUFuRCxDQUFQO0FBQ0Q7QUFDRixDOztBQW5CRCxJQUFNRixlQUFlLEtBQXJCO0FBQ0EsSUFBTUUsY0FBYyxLQUFwQjs7QUFFQSIsImZpbGUiOiJrZXljdXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2V5Y3V0c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXljdXRzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL2dlbmVyYXRlSWQnXG5pbXBvcnQgY2xlYW5TaG9ydGN1dCBmcm9tICcuL2NsZWFuU2hvcnRjdXQnXG5pbXBvcnQgcGFyc2VTaG9ydGN1dCBmcm9tICcuL3BhcnNlU2hvcnRjdXQnXG5pbXBvcnQgc3RyaW5naWZ5U2hvcnRjdXQgZnJvbSAnLi9zdHJpbmdpZnlTaG9ydGN1dCdcblxuLyoqXG4gKiBUaGUgbWFpbiBjbGFzcyB0byBhY2Nlc3MgdGhlIGZlYXR1cmVzIG9mIHRoZSBLZXlDdXRzIGxpYnJhcnkuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBIVE1MIGVsZW1lbnQgdGhhdCBzaG91bGQgbGlzdGVuIHRvXG4gKiAgIGtleWJvYXJkIHNob3J0Y3V0cyAoaWYgbm90IHByb3ZpZGVkIHRoZW4gV2luZG93IG9iamVjdCBpcyB1c2VkKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQWRkaXRpb25hbCBvcHRpb25zIChvcHRpb25hbCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudHJpZ2dlck9uY2VQZXJLZXkgLSBJZiBhIGtleSBpcyBrZXB0IGRvd24gdGhlblxuICogICB0aGUgc2hvcnRjdXQgd2lsbCBiZSB0cmlnZ2VyZWQgbXVsdGlwbGUgdGltZXMgd2hlbiBzZXQgdG8gZmFsc2UgYW5kXG4gKiAgIG9ubHkgb25jZSB3aGVuIHNldCB0byB0cnVlIChkZWZhdWx0OiBmYWxzZSlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy51c2VDb2RlSW5zdGVhZEtleSAtIElmIHNldCB0byBmYWxzZSB0aGVuXG4gKiAgIEtleWJvYXJkRXZlbnQua2V5IGlzIGV2YWx1YXRlZCBmb3IgdHJpZ2dlcmluZyBzaG9ydGN1dHMsIG90aGVyd2lzZVxuICogICBLZXlib2FyZEV2ZW50LmNvZGUgKGRlZmF1bHQ6IGZhbHNlKVxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubWF4U2VxdWVuY2VMZW5ndGggLSBUaGUgbWF4aW11bSBzZXF1ZW5jZSBvZlxuICogICBrZXkgb3IgY29tYm9zIHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQgKGRlZmF1bHQ6IDMpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmZpbHRlciAtIEEgZmlsdGVyIGZ1bmN0aW9uLiBJZiB0aGUgZmlsdGVyXG4gKiAgIHJldHVybnMgZmFsc2UgdGhlIGV2ZW50IHdpbGwgYmUgZmlsdGVyZWQgb3V0IGFuZCBubyBib3VuZCBoYW5kbGVyXG4gKiAgIG9yIHdhdGNoZXIgd2lsbCBiZSB0cmlnZ2VyZWQuIFRoZSBmaWx0ZXIgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqICAgd2l0aCB0aGUga2V5IGV2ZW50LiBUaGUgZGVmYXVsdCBmaWx0ZXIgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG4gKi9cbmNsYXNzIEtleXMge1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgc2NvcGUuICovXG4gIHN0YXRpYyBERUZBVUxUX1NDT1BFID0gJ0RFRkFVTFRfU0NPUEUnXG5cbiAgX3N0b3BwZWQgPSB0cnVlXG4gIF9jdXJyZW50U2NvcGUgPSBLZXlzLkRFRkFVTFRfU0NPUEVcbiAgX2N1cnJlbnRDb21ibyA9IFtdXG4gIF9zZXF1ZW5jZSA9IFtdXG4gIF9oYW5kbGVycyA9IFtdXG4gIF93YXRjaGVycyA9IFtdXG5cbiAgb3B0aW9ucyA9IHtcbiAgICB0cmlnZ2VyT25jZVBlcktleTogZmFsc2UsXG4gICAgdXNlQ29kZUluc3RlYWRLZXk6IGZhbHNlLFxuICAgIG1heFNlcXVlbmNlTGVuZ3RoOiAzLFxuICAgIGZpbHRlcjogKCkgPT4gdHJ1ZVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmICghZWxlbWVudCkgZWxlbWVudCA9IHdpbmRvd1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcblxuICAgIHRoaXMucmVzdW1lKClcbiAgfVxuXG4gIF9vbktleURvd24gPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm5cblxuICAgIGxldCBrZXkgPSB0aGlzLm9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgPyBldmVudC5jb2RlIDogZXZlbnQua2V5XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJ1xuICAgIH1cblxuICAgIGNvbnN0IGFscmVhZHlUcmlnZ2VyZWQgPSB0aGlzLl9jdXJyZW50Q29tYm8uaW5jbHVkZXMoa2V5KVxuXG4gICAgaWYgKCFhbHJlYWR5VHJpZ2dlcmVkKSB7XG4gICAgICB0aGlzLl9jdXJyZW50Q29tYm8ucHVzaChrZXkpXG4gICAgICB0aGlzLl9jdXJyZW50Q29tYm8uc29ydCgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fc2VxdWVuY2UubGVuZ3RoID09PSAwIHx8XG4gICAgICAgIHRoaXMuX3NlcXVlbmNlW3RoaXMuX3NlcXVlbmNlLmxlbmd0aCAtIDFdICE9PSB0aGlzLl9jdXJyZW50Q29tYm9cbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5fc2VxdWVuY2UubGVuZ3RoID09PSB0aGlzLm9wdGlvbnMubWF4U2VxdWVuY2VMZW5ndGgpXG4gICAgICAgICAgdGhpcy5fc2VxdWVuY2Uuc2hpZnQoKVxuXG4gICAgICAgIHRoaXMuX3NlcXVlbmNlLnB1c2godGhpcy5fY3VycmVudENvbWJvKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYWxyZWFkeVRyaWdnZXJlZCB8fCAhdGhpcy5vcHRpb25zLnRyaWdnZXJPbmNlUGVyS2V5KSB7XG4gICAgICB0aGlzLl9ub3RpZnlXYXRjaGVycyhldmVudClcbiAgICAgIHRoaXMuX2Rpc3BhdGNoSGFuZGxlcnMoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgX29uS2V5VXAgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm5cblxuICAgIGxldCBrZXkgPSB0aGlzLm9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgPyBldmVudC5jb2RlIDogZXZlbnQua2V5XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJ1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRDb21ibyA9IFsuLi50aGlzLl9jdXJyZW50Q29tYm9dXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2N1cnJlbnRDb21iby5pbmRleE9mKGtleSlcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9jdXJyZW50Q29tYm8uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNvcnQoKVxuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeVdhdGNoZXJzKGV2ZW50KVxuICB9XG5cbiAgX3Jlc2V0S2V5cyA9ICgpID0+IHtcbiAgICB0aGlzLl9jdXJyZW50Q29tYm8gPSBbXVxuICAgIHRoaXMuX3NlcXVlbmNlID0gW11cbiAgfVxuXG4gIF9ub3RpZnlXYXRjaGVycyA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBzZXF1ZW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VxdWVuY2UpKVxuXG4gICAgZm9yIChsZXQgd2F0Y2hlciBvZiB0aGlzLl93YXRjaGVycykge1xuICAgICAgd2F0Y2hlci5jYWxsYmFjayhzZXF1ZW5jZSwgZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgX2Rpc3BhdGNoSGFuZGxlcnMgPSBldmVudCA9PiB7XG4gICAgY29uc3Qgc2VxdWVuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlcXVlbmNlKSlcblxuICAgIGNvbnN0IHNpZ25hdHVyZXMgPSBbXVxuXG4gICAgbGV0IHNpZ25hdHVyZVNlcXVlbmNlID0gW11cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fc2VxdWVuY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHNpZ25hdHVyZVNlcXVlbmNlID0gW3RoaXMuX3NlcXVlbmNlW2ldLCAuLi5zaWduYXR1cmVTZXF1ZW5jZV1cbiAgICAgIHNpZ25hdHVyZXMucHVzaChzdHJpbmdpZnlTaG9ydGN1dChzaWduYXR1cmVTZXF1ZW5jZSkpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jdXJyZW50U2NvcGUgPT09IGhhbmRsZXIuc2NvcGUgJiZcbiAgICAgICAgc2lnbmF0dXJlcy5pbmNsdWRlcyhoYW5kbGVyLnNpZ25hdHVyZSlcbiAgICAgICkge1xuICAgICAgICBoYW5kbGVyLmNhbGxiYWNrKHNlcXVlbmNlLCBldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGtleWJvYXJkIHNob3J0Y3V0LiBBIHNob3J0Y3V0IGNhbiBiZSBpbiBzdHJpbmcgb3IgYXJyYXkgZm9ybWF0LlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBzaG9ydGN1dCB0byBiaW5kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBBbiBvcHRpb25hbCBzY29wZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxuICAgKiAgIFRoZSBjYWxsYmFjayBnZXRzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IGtleSBvciBjb21ibyBzZXF1ZW5jZVxuICAgKiAgIGFuZCB0aGUga2V5IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB1bmlxdWUgSUQgb2YgdGhlIGJvdW5kIGhhbmRsZXIuXG4gICAqL1xuICBiaW5kID0gKHNob3J0Y3V0LCBzY29wZSwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSBzY29wZVxuICAgICAgc2NvcGUgPSBLZXlzLkRFRkFVTFRfU0NPUEVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNob3J0Y3V0ID09PSAnc3RyaW5nJykgc2hvcnRjdXQgPSBwYXJzZVNob3J0Y3V0KHNob3J0Y3V0KVxuXG4gICAgc2hvcnRjdXQgPSBjbGVhblNob3J0Y3V0KHNob3J0Y3V0KVxuXG4gICAgY29uc3QgaGFuZGxlcklkID0gZ2VuZXJhdGVJZCgpXG4gICAgdGhpcy5faGFuZGxlcnMucHVzaCh7XG4gICAgICBpZDogaGFuZGxlcklkLFxuICAgICAgc2lnbmF0dXJlOiBzdHJpbmdpZnlTaG9ydGN1dChzaG9ydGN1dCksXG4gICAgICBzaG9ydGN1dCxcbiAgICAgIHNjb3BlLFxuICAgICAgY2FsbGJhY2tcbiAgICB9KVxuXG4gICAgcmV0dXJuIGhhbmRsZXJJZFxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhIHNwZWNpZmljIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXIgdXNpbmcgaXRzIElELlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlcklkIC0gVGhlIElEIHJldHVybmVkIGJ5IHRoZSB7QGxpbmsgYmluZH0gbWV0aG9kLlxuICAgKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciB3aGVuIHRoZSBJRCBpcyBpbnZhbGlkLlxuICAgKi9cbiAgdW5iaW5kID0gaGFuZGxlcklkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2hhbmRsZXJzLmZpbmRJbmRleChoYW5kbGVyID0+IGhhbmRsZXIuaWQgPT09IGhhbmRsZXJJZClcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoYW5kbGVyIElEOiAnICsgaGFuZGxlcklkKVxuXG4gICAgdGhpcy5faGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVycyBoYXZpbmcgdGhlIHNwZWNpZmllZCBzY29wZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIC0gVGhlIHNjb3BlLlxuICAgKi9cbiAgdW5iaW5kU2NvcGUgPSBzY29wZSA9PiB7XG4gICAgY29uc3QgaW5kaWNlcyA9IFtdXG4gICAgdGhpcy5faGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09PSBzY29wZSkgaW5kaWNlcy5wdXNoKGluZGV4KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpbmRleCBvZiBpbmRpY2VzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlcnMuXG4gICAqL1xuICB1bmJpbmRBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5faGFuZGxlcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIGtleWJvYXJkIGV2ZW50cyAoa2V5ZG93biBhbmQga2V5dXApLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQuXG4gICAqICAgd2hlbiBhIGtleWRvd24gb3Iga2V5dXAgZXZlbnQgb2NjdXJzLiBUaGUgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgd2l0aFxuICAgKiAgIHRoZSBjdXJyZW50IGtleSBvciBjb21ibyBzZXF1ZW5jZSBhbmQgdGhlIGtleSBldmVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdW5pcXVlIElEIG9mIHRoZSBhZGRlZCB3YXRjaGVyLlxuICAgKi9cbiAgd2F0Y2ggPSBjYWxsYmFjayA9PiB7XG4gICAgY29uc3Qgd2F0Y2hlcklkID0gZ2VuZXJhdGVJZCgpXG4gICAgdGhpcy5fd2F0Y2hlcnMucHVzaCh7XG4gICAgICBpZDogd2F0Y2hlcklkLFxuICAgICAgY2FsbGJhY2tcbiAgICB9KVxuXG4gICAgcmV0dXJuIHdhdGNoZXJJZFxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhIHNwZWNpZmljIHdhdGNoZXIgdXNpbmcgaXRzIElELlxuICAgKiBAcGFyYW0ge251bWJlcn0gd2F0Y2hlcklkIC0gVGhlIElEIHJldHVybmVkIGJ5IHRoZSB7QGxpbmsgd2F0Y2h9IG1ldGhvZC5cbiAgICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3Igd2hlbiB0aGUgSUQgaXMgaW52YWxpZC5cbiAgICovXG4gIHVud2F0Y2ggPSB3YXRjaGVySWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fd2F0Y2hlcnMuZmluZEluZGV4KHdhdGNoZXIgPT4gd2F0Y2hlci5pZCA9PT0gd2F0Y2hlcklkKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHdhdGNoZXIgSUQ6ICcgKyB3YXRjaGVySWQpXG5cbiAgICB0aGlzLl93YXRjaGVycy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGFsbCB3YXRjaGVycy5cbiAgICovXG4gIHVud2F0Y2hBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5fd2F0Y2hlcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0aGUgc2NvcGUuIE9ubHkgYm91bmQgaGFuZGxlcnMgZ2V0IHRyaWdnZXJlZCB0aGF0IGhhdmUgdGhlIG5ld1xuICAgKiBzY29wZS4gVGhlIGRlZmF1bHQgc2NvcGUgY2FuIGJlIGFjY2Vzc2VkIGJ5IHtAbGluayBLZXlzLkRFRkFVTFRfU0NPUEV9LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NvcGUgLSBUaGUgc2NvcGUuXG4gICAqL1xuICBzd2l0Y2hTY29wZSA9IHNjb3BlID0+IHtcbiAgICB0aGlzLl9jdXJyZW50U2NvcGUgPSBzY29wZVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbGlzdGVuaW5nIHRvIGtleSBldmVudHMgYW5kIHJlc2V0IHRoZSBrZXkgc2VxdWVuY2UuXG4gICAqL1xuICBzdG9wID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5fc3RvcHBlZCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fcmVzZXRLZXlzKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fcmVzZXRLZXlzKVxuXG4gICAgICB0aGlzLl9yZXNldEtleXMoKVxuXG4gICAgICB0aGlzLl9zdG9wcGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN1bWUgbGlzdGVuaW5nIHRvIGtleSBldmVudHMuXG4gICAqL1xuICByZXN1bWUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX3N0b3BwZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bilcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKVxuICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX3Jlc2V0S2V5cylcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX3Jlc2V0S2V5cylcblxuICAgICAgdGhpcy5fc3RvcHBlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLyogUmVzZXQgdGhpcyBpbnN0YW5jZSBieSB1bmJpbmRpbmcgYWxsIGhhbmRsZXJzLCByZW1vdmluZyBhbGwgd2F0Y2hlcnNcbiAgICogYW5kIHJlc2V0dGluZyB0aGUga2V5IHNlcXVlbmNlLlxuICAgKi9cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5fcmVzZXRLZXlzKClcbiAgICB0aGlzLnVuYmluZEFsbCgpXG4gICAgdGhpcy51bndhdGNoQWxsKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlzXG4iLCJmdW5jdGlvbiBjbGVhblNlcXVlbmNlKHNlcXVlbmNlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2VxdWVuY2VbaV0pKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNob3J0Y3V0IHNlcXVlbmNlICR7c2VxdWVuY2V9LmApXG5cbiAgICBjbGVhbkNvbWJvKHNlcXVlbmNlW2ldKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ29tYm8oY29tYm8pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21iby5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgY29tYm9baV0gIT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNob3J0Y3V0IGNvbWJvICR7Y29tYm99LmApXG5cbiAgICBjb25zdCBjbGVhbmVkS2V5ID0gY2xlYW5LZXkoY29tYm9baV0pXG4gICAgaWYgKCFjbGVhbmVkS2V5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGtleSAke2NsZWFuZWRLZXl9IGluIHNob3J0Y3V0IGNvbWJvICR7Y29tYm99LmApXG5cbiAgICBjb21ib1tpXSA9IGNsZWFuZWRLZXlcbiAgfVxuICBjb21iby5zb3J0KClcbn1cblxuZnVuY3Rpb24gY2xlYW5LZXkoa2V5KSB7XG4gIGtleSA9IGtleS5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgaWYgKGtleSA9PT0gJyAnKSBrZXkgPSAnU3BhY2UnXG4gIGtleSA9IGtleS50cmltKClcbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBrZXlcbn1cblxuLyoqXG4gKiBDbGVhbiBhbiBhcnJheSBzaG9ydGN1dC4gVGhlIGFycmF5IGlzIGNsZWFuZWQgaW4tcGxhY2UgYW5kIGFsc28gcmV0dXJuZWQuXG4gKiBVbm5lY2Vzc2FyeSB3aGl0ZSBzcGFjZSBpcyByZW1vdmVkLCBrZXkgY29tYmluYXRpb25zIGFyZSBzb3J0ZWQgYW5kXG4gKiBzaW5nbGUgY2hhcnMgY29udmVydGVkIHRvIGxvd2VyIGNhc2UuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IHNob3J0Y3V0IC0gVGhlIGFycmF5IHNob3J0Y3V0IHRvIGNsZWFuLlxuICogQHJldHVybiB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gVGhlIGNsZWFuZWQgYXJyYXkgc2hvcnRjdXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNob3J0Y3V0KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzaG9ydGN1dCkgfHwgc2hvcnRjdXQubGVuZ3RoID09PSAwKVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcnJheSBzaG9ydGN1dCB0byBjbGVhbjogJyArIHNob3J0Y3V0KVxuXG4gIGxldCBpc1NlcXVlbmNlID0gdHlwZW9mIHNob3J0Y3V0WzBdICE9PSAnc3RyaW5nJ1xuXG4gIGlmIChpc1NlcXVlbmNlICYmIHNob3J0Y3V0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHNob3J0Y3V0ID0gc2hvcnRjdXRbMF1cbiAgICBpc1NlcXVlbmNlID0gZmFsc2VcbiAgfVxuXG4gIGlmIChpc1NlcXVlbmNlKSBjbGVhblNlcXVlbmNlKHNob3J0Y3V0KVxuICBlbHNlIGNsZWFuQ29tYm8oc2hvcnRjdXQpXG5cbiAgcmV0dXJuIHNob3J0Y3V0XG59XG4iLCJsZXQgbmV4dElkID0gMVxuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXF1ZSBJRCBldmVyeSB0aW1lIGl0IGlzIGNhbGxlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gQSB1bmlxdWUgSUQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV4dElkKytcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgS2V5cyB9IGZyb20gJy4vS2V5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xlYW5TaG9ydGN1dCB9IGZyb20gJy4vY2xlYW5TaG9ydGN1dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2VuZXJhdGVJZCB9IGZyb20gJy4vZ2VuZXJhdGVJZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2VTaG9ydGN1dCB9IGZyb20gJy4vcGFyc2VTaG9ydGN1dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5naWZ5U2hvcnRjdXQgfSBmcm9tICcuL3N0cmluZ2lmeVNob3J0Y3V0J1xuIiwiY29uc3QgQ09NQklORV9XSVRIID0gJysnXG5jb25zdCBGT0xMT1dFRF9CWSA9ICc+J1xuXG5mdW5jdGlvbiBnZXREdXBsaWNhdGVzKGNvbWJvKSB7XG4gIGNvbnN0IGNvdW50ID0gY29tYm8gPT5cbiAgICBjb21iby5yZWR1Y2UoKGsxLCBrMikgPT4gT2JqZWN0LmFzc2lnbihrMSwgeyBbazJdOiAoazFbazJdIHx8IDApICsgMSB9KSwge30pXG4gIGNvbnN0IGR1cGxpY2F0ZXMgPSBkaWN0ID0+IE9iamVjdC5rZXlzKGRpY3QpLmZpbHRlcihrID0+IGRpY3Rba10gPiAxKVxuICByZXR1cm4gZHVwbGljYXRlcyhjb3VudChjb21ibykpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRLZXkoa2V5KSB7XG4gIGtleSA9IGtleS5qb2luKCcnKVxuICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIGtleVxufVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIHNob3J0Y3V0IGFuZCByZXR1cm4gdGhlIGVxdWl2YWxlbnQgYXJyYXkgc2hvcnRjdXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hvcnRjdXQgLSBUaGUgc3RyaW5nIHNob3J0Y3V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBUaGUgY29udmVydGVkIGFycmF5IHNob3J0Y3V0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaG9ydGN1dCkge1xuICBpZiAodHlwZW9mIHNob3J0Y3V0ICE9PSAnc3RyaW5nJylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIHNob3J0Y3V0IHRvIHBhcnNlOiAnICsgc2hvcnRjdXQpXG5cbiAgc2hvcnRjdXQgPSBzaG9ydGN1dC5yZXBsYWNlKC9cXHMrL2csICcnKVxuXG4gIGlmICh0eXBlb2Ygc2hvcnRjdXQgIT09ICdzdHJpbmcnIHx8IHNob3J0Y3V0Lmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKG11c3QgYmUgbm9uIGVtcHR5IHN0cmluZyk6ICcgKyBzaG9ydGN1dClcblxuICBsZXQga2V5ID0gW11cbiAgbGV0IGNvbWJvID0gW11cbiAgY29uc3Qgc2VxdWVuY2UgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hvcnRjdXQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjID0gc2hvcnRjdXQuY2hhckF0KGkpXG4gICAgaWYgKCFrZXkubGVuZ3RoKSB7XG4gICAgICBrZXkucHVzaChjKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYyA9PT0gQ09NQklORV9XSVRIKSB7XG4gICAgICAgIGNvbWJvLnB1c2goY29udmVydEtleShrZXkpKVxuICAgICAgICBrZXkgPSBbXVxuICAgICAgfSBlbHNlIGlmIChjID09PSBGT0xMT1dFRF9CWSkge1xuICAgICAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSlcbiAgICAgICAga2V5ID0gW11cbiAgICAgICAgY29tYm8uc29ydCgpXG4gICAgICAgIHNlcXVlbmNlLnB1c2goY29tYm8pXG4gICAgICAgIGNvbWJvID0gW11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5wdXNoKGMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleS5sZW5ndGgpIHtcbiAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSlcbiAgICBjb21iby5zb3J0KClcbiAgICBzZXF1ZW5jZS5wdXNoKGNvbWJvKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCAobXVzdCBlbmQgd2l0aCBrZXkpOiAnICsgc2hvcnRjdXQpXG4gIH1cblxuICBmb3IgKGxldCBjb21ibyBvZiBzZXF1ZW5jZSkge1xuICAgIGNvbnN0IGR1cGxpY2F0ZXMgPSBnZXREdXBsaWNhdGVzKGNvbWJvKVxuICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKGR1cGxpY2F0ZSBrZXlzKTonICsgc2hvcnRjdXQpXG4gIH1cblxuICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAxKSByZXR1cm4gc2VxdWVuY2VbMF1cbiAgZWxzZSByZXR1cm4gc2VxdWVuY2Vcbn1cbiIsImNvbnN0IENPTUJJTkVfV0lUSCA9ICcgKyAnXG5jb25zdCBGT0xMT1dFRF9CWSA9ICcgPiAnXG5cbi8qKlxuICogQ3JlYXRlIGVxdWl2YWxlbnQgc3RyaW5nIHNob3J0Y3V0IG9mIGFuIGFycmF5IHNob3J0Y3V0LlxuICogQHBhcmFtIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBhcnJheSBzaG9ydGN1dCB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY29udmVydGVkIHN0cmluZyBzaG9ydGN1cnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNob3J0Y3V0KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzaG9ydGN1dCkpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFycmF5IHNob3J0Y3V0IHRvIHN0cmluZ2lmeTogJyArIHNob3J0Y3V0KVxuXG4gIGxldCBpc1NlcXVlbmNlID0gdHlwZW9mIHNob3J0Y3V0WzBdICE9PSAnc3RyaW5nJ1xuXG4gIGlmICghaXNTZXF1ZW5jZSkge1xuICAgIHJldHVybiBzaG9ydGN1dC5qb2luKENPTUJJTkVfV0lUSClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2hvcnRjdXQubWFwKHBhcnQgPT4gcGFydC5qb2luKENPTUJJTkVfV0lUSCkpLmpvaW4oRk9MTE9XRURfQlkpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=