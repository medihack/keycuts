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

var _stringifyShortcut = __webpack_require__(/*! ./stringifyShortcut */ "./src/stringifyShortcut.js");

var _stringifyShortcut2 = _interopRequireDefault(_stringifyShortcut);

var _parseShortcut = __webpack_require__(/*! ./parseShortcut */ "./src/parseShortcut.js");

var _parseShortcut2 = _interopRequireDefault(_parseShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The main class to access the features of the KeyCuts library.
 */
var Keys =

/**
 * Create a new keys instance.
 * @param {HTMLElement} shortcut The HTML element that should listen to
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
    } };

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
 * @param {string|string[]|string[][]} shortcut - The shortcut to bind.
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
  if (!Array.isArray(shortcut) || shortcut.length === 0) throw new Error('Invalid shortcut: ' + shortcut);

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
 * @param {string[]|string[][]} shortcut - The array shortcut to clean.
 * @return {string[]|string[][]} The cleaned array shortcut.
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

exports.default = function (signature) {
  signature = signature.replace(/\s+/g, '');

  if (typeof signature !== 'string' || signature.length === 0) throw new Error('Invalid signature (must be non empty string): ' + signature);

  var key = [];
  var combo = [];
  var sequence = [];

  for (var i = 0; i < signature.length; i++) {
    var c = signature.charAt(i);
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
    throw new Error('Invalid signature (must end with key): ' + signature);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sequence[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _combo = _step.value;

      var duplicates = getDuplicates(_combo);
      if (duplicates.length > 0) throw new Error('Invalid signature (duplicate keys):' + signature);
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
 * @return {string[]|string[][]} The array shortcut.
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
 * @param {string[]|string[][]} shortcut - The array shortcut to convert.
 * @return {string} The converted string shortcurt.
 */

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvS2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY2xlYW5TaG9ydGN1dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3BhcnNlU2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzIl0sIm5hbWVzIjpbIktleXMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIl9zdG9wcGVkIiwiX2N1cnJlbnRTY29wZSIsIkRFRkFVTFRfU0NPUEUiLCJfY3VycmVudENvbWJvIiwiX3NlcXVlbmNlIiwiX2hhbmRsZXJzIiwiX3dhdGNoZXJzIiwidHJpZ2dlck9uY2VQZXJLZXkiLCJ1c2VDb2RlSW5zdGVhZEtleSIsIm1heFNlcXVlbmNlTGVuZ3RoIiwiZmlsdGVyIiwiX29uS2V5RG93biIsImNhbGwiLCJldmVudCIsImtleSIsImNvZGUiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImFscmVhZHlUcmlnZ2VyZWQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0Iiwic2hpZnQiLCJfbm90aWZ5V2F0Y2hlcnMiLCJfZGlzcGF0Y2hIYW5kbGVycyIsIl9vbktleVVwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiX3Jlc2V0S2V5cyIsInNlcXVlbmNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwid2F0Y2hlciIsImNhbGxiYWNrIiwic2lnbmF0dXJlcyIsInNpZ25hdHVyZVNlcXVlbmNlIiwiaSIsImhhbmRsZXIiLCJzY29wZSIsInNpZ25hdHVyZSIsImJpbmQiLCJzaG9ydGN1dCIsInVuZGVmaW5lZCIsImhhbmRsZXJJZCIsImlkIiwidW5iaW5kIiwiZmluZEluZGV4IiwiRXJyb3IiLCJ1bmJpbmRTY29wZSIsImluZGljZXMiLCJmb3JFYWNoIiwidW5iaW5kQWxsIiwid2F0Y2giLCJ3YXRjaGVySWQiLCJ1bndhdGNoIiwidW53YXRjaEFsbCIsInN3aXRjaFNjb3BlIiwic3RvcCIsIl9lbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3VtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldCIsIndpbmRvdyIsIk9iamVjdCIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsImlzU2VxdWVuY2UiLCJjbGVhblNlcXVlbmNlIiwiY2xlYW5Db21ibyIsImNvbWJvIiwiY2xlYW5lZEtleSIsImNsZWFuS2V5IiwicmVwbGFjZSIsInRyaW0iLCJuZXh0SWQiLCJkZWZhdWx0IiwiYyIsImNoYXJBdCIsIkNPTUJJTkVfV0lUSCIsImNvbnZlcnRLZXkiLCJGT0xMT1dFRF9CWSIsImR1cGxpY2F0ZXMiLCJnZXREdXBsaWNhdGVzIiwiY291bnQiLCJyZWR1Y2UiLCJrMSIsImsyIiwia2V5cyIsImRpY3QiLCJrIiwiam9pbiIsIm1hcCIsInBhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFD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b2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2V5Y3V0c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXljdXRzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL2dlbmVyYXRlSWQnXG5pbXBvcnQgY2xlYW5TaG9ydGN1dCBmcm9tICcuL2NsZWFuU2hvcnRjdXQnXG5pbXBvcnQgc3RyaW5naWZ5U2hvcnRjdXQgZnJvbSAnLi9zdHJpbmdpZnlTaG9ydGN1dCdcbmltcG9ydCBwYXJzZVNob3J0Y3V0IGZyb20gJy4vcGFyc2VTaG9ydGN1dCdcblxuLyoqXG4gKiBUaGUgbWFpbiBjbGFzcyB0byBhY2Nlc3MgdGhlIGZlYXR1cmVzIG9mIHRoZSBLZXlDdXRzIGxpYnJhcnkuXG4gKi9cbmNsYXNzIEtleXMge1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgc2NvcGUuICovXG4gIHN0YXRpYyBERUZBVUxUX1NDT1BFID0gJ0RFRkFVTFRfU0NPUEUnXG5cbiAgX3N0b3BwZWQgPSB0cnVlXG4gIF9jdXJyZW50U2NvcGUgPSBLZXlzLkRFRkFVTFRfU0NPUEVcbiAgX2N1cnJlbnRDb21ibyA9IFtdXG4gIF9zZXF1ZW5jZSA9IFtdXG4gIF9oYW5kbGVycyA9IFtdXG4gIF93YXRjaGVycyA9IFtdXG5cbiAgb3B0aW9ucyA9IHtcbiAgICB0cmlnZ2VyT25jZVBlcktleTogZmFsc2UsXG4gICAgdXNlQ29kZUluc3RlYWRLZXk6IGZhbHNlLFxuICAgIG1heFNlcXVlbmNlTGVuZ3RoOiAzLFxuICAgIGZpbHRlcjogKCkgPT4gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBrZXlzIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzaG9ydGN1dCBUaGUgSFRNTCBlbGVtZW50IHRoYXQgc2hvdWxkIGxpc3RlbiB0b1xuICAgKiAgIGtleWJvYXJkIHNob3J0Y3V0cyAoaWYgbm90IHByb3ZpZGVkIHRoZW4gV2luZG93IG9iamVjdCBpcyB1c2VkKS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgKG9wdGlvbmFsKS5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnRyaWdnZXJPbmNlUGVyS2V5IC0gSWYgYSBrZXkgaXMga2VwdCBkb3duIHRoZW5cbiAgICogICB0aGUgc2hvcnRjdXQgd2lsbCBiZSB0cmlnZ2VyZWQgbXVsdGlwbGUgdGltZXMgd2hlbiBzZXQgdG8gZmFsc2UgYW5kXG4gICAqICAgb25seSBvbmNlIHdoZW4gc2V0IHRvIHRydWUgKGRlZmF1bHQ6IGZhbHNlKVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgLSBJZiBzZXQgdG8gZmFsc2UgdGhlblxuICAgKiAgIEtleWJvYXJkRXZlbnQua2V5IGlzIGV2YWx1YXRlZCBmb3IgdHJpZ2dlcmluZyBzaG9ydGN1dHMsIG90aGVyd2lzZVxuICAgKiAgIEtleWJvYXJkRXZlbnQuY29kZSAoZGVmYXVsdDogZmFsc2UpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoIC0gVGhlIG1heGltdW0gc2VxdWVuY2Ugb2ZcbiAgICogICBrZXkgb3IgY29tYm9zIHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQgKGRlZmF1bHQ6IDMpXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMuZmlsdGVyIC0gQSBmaWx0ZXIgZnVuY3Rpb24uIElmIHRoZSBmaWx0ZXJcbiAgICogICByZXR1cm5zIGZhbHNlIHRoZSBldmVudCB3aWxsIGJlIGZpbHRlcmVkIG91dCBhbmQgbm8gYm91bmQgaGFuZGxlclxuICAgKiAgIG9yIHdhdGNoZXIgd2lsbCBiZSB0cmlnZ2VyZWQuIFRoZSBmaWx0ZXIgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAgICogICB3aXRoIHRoZSBrZXkgZXZlbnQuIFRoZSBkZWZhdWx0IGZpbHRlciB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB3aW5kb3dcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJlc3VtZSgpXG4gIH1cblxuICBfb25LZXlEb3duID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuXG5cbiAgICBsZXQga2V5ID0gdGhpcy5vcHRpb25zLnVzZUNvZGVJbnN0ZWFkS2V5ID8gZXZlbnQuY29kZSA6IGV2ZW50LmtleVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSdcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5VHJpZ2dlcmVkID0gdGhpcy5fY3VycmVudENvbWJvLmluY2x1ZGVzKGtleSlcblxuICAgIGlmICghYWxyZWFkeVRyaWdnZXJlZCkge1xuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnB1c2goa2V5KVxuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNvcnQoKVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3NlcXVlbmNlLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICB0aGlzLl9zZXF1ZW5jZVt0aGlzLl9zZXF1ZW5jZS5sZW5ndGggLSAxXSAhPT0gdGhpcy5fY3VycmVudENvbWJvXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlLmxlbmd0aCA9PT0gdGhpcy5vcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoKVxuICAgICAgICAgIHRoaXMuX3NlcXVlbmNlLnNoaWZ0KClcblxuICAgICAgICB0aGlzLl9zZXF1ZW5jZS5wdXNoKHRoaXMuX2N1cnJlbnRDb21ibylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFscmVhZHlUcmlnZ2VyZWQgfHwgIXRoaXMub3B0aW9ucy50cmlnZ2VyT25jZVBlcktleSkge1xuICAgICAgdGhpcy5fbm90aWZ5V2F0Y2hlcnMoZXZlbnQpXG4gICAgICB0aGlzLl9kaXNwYXRjaEhhbmRsZXJzKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIF9vbktleVVwID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuXG5cbiAgICBsZXQga2V5ID0gdGhpcy5vcHRpb25zLnVzZUNvZGVJbnN0ZWFkS2V5ID8gZXZlbnQuY29kZSA6IGV2ZW50LmtleVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSdcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50Q29tYm8gPSBbLi4udGhpcy5fY3VycmVudENvbWJvXVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9jdXJyZW50Q29tYm8uaW5kZXhPZihrZXkpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuX2N1cnJlbnRDb21iby5zb3J0KClcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnlXYXRjaGVycyhldmVudClcbiAgfVxuXG4gIF9yZXNldEtleXMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY3VycmVudENvbWJvID0gW11cbiAgICB0aGlzLl9zZXF1ZW5jZSA9IFtdXG4gIH1cblxuICBfbm90aWZ5V2F0Y2hlcnMgPSBldmVudCA9PiB7XG4gICAgY29uc3Qgc2VxdWVuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlcXVlbmNlKSlcblxuICAgIGZvciAobGV0IHdhdGNoZXIgb2YgdGhpcy5fd2F0Y2hlcnMpIHtcbiAgICAgIHdhdGNoZXIuY2FsbGJhY2soc2VxdWVuY2UsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIF9kaXNwYXRjaEhhbmRsZXJzID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHNlcXVlbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zZXF1ZW5jZSkpXG5cbiAgICBjb25zdCBzaWduYXR1cmVzID0gW11cblxuICAgIGxldCBzaWduYXR1cmVTZXF1ZW5jZSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX3NlcXVlbmNlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBzaWduYXR1cmVTZXF1ZW5jZSA9IFt0aGlzLl9zZXF1ZW5jZVtpXSwgLi4uc2lnbmF0dXJlU2VxdWVuY2VdXG4gICAgICBzaWduYXR1cmVzLnB1c2goc3RyaW5naWZ5U2hvcnRjdXQoc2lnbmF0dXJlU2VxdWVuY2UpKVxuICAgIH1cblxuICAgIGZvciAobGV0IGhhbmRsZXIgb2YgdGhpcy5faGFuZGxlcnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fY3VycmVudFNjb3BlID09PSBoYW5kbGVyLnNjb3BlICYmXG4gICAgICAgIHNpZ25hdHVyZXMuaW5jbHVkZXMoaGFuZGxlci5zaWduYXR1cmUpXG4gICAgICApIHtcbiAgICAgICAgaGFuZGxlci5jYWxsYmFjayhzZXF1ZW5jZSwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgYSBrZXlib2FyZCBzaG9ydGN1dC4gQSBzaG9ydGN1dCBjYW4gYmUgaW4gc3RyaW5nIG9yIGFycmF5IGZvcm1hdC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118c3RyaW5nW11bXX0gc2hvcnRjdXQgLSBUaGUgc2hvcnRjdXQgdG8gYmluZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gQW4gb3B0aW9uYWwgc2NvcGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cbiAgICogICBUaGUgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCBrZXkgb3IgY29tYm8gc2VxdWVuY2VcbiAgICogICBhbmQgdGhlIGtleSBldmVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdW5pcXVlIElEIG9mIHRoZSBib3VuZCBoYW5kbGVyLlxuICAgKi9cbiAgYmluZCA9IChzaG9ydGN1dCwgc2NvcGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gc2NvcGVcbiAgICAgIHNjb3BlID0gS2V5cy5ERUZBVUxUX1NDT1BFXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzaG9ydGN1dCA9PT0gJ3N0cmluZycpIHNob3J0Y3V0ID0gcGFyc2VTaG9ydGN1dChzaG9ydGN1dClcblxuICAgIHNob3J0Y3V0ID0gY2xlYW5TaG9ydGN1dChzaG9ydGN1dClcblxuICAgIGNvbnN0IGhhbmRsZXJJZCA9IGdlbmVyYXRlSWQoKVxuICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goe1xuICAgICAgaWQ6IGhhbmRsZXJJZCxcbiAgICAgIHNpZ25hdHVyZTogc3RyaW5naWZ5U2hvcnRjdXQoc2hvcnRjdXQpLFxuICAgICAgc2hvcnRjdXQsXG4gICAgICBzY29wZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgfSlcblxuICAgIHJldHVybiBoYW5kbGVySWRcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYSBzcGVjaWZpYyBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVyIHVzaW5nIGl0cyBJRC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZXJJZCAtIFRoZSBJRCByZXR1cm5lZCBieSB0aGUge0BsaW5rIGJpbmR9IG1ldGhvZC5cbiAgICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3Igd2hlbiB0aGUgSUQgaXMgaW52YWxpZC5cbiAgICovXG4gIHVuYmluZCA9IGhhbmRsZXJJZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9oYW5kbGVycy5maW5kSW5kZXgoaGFuZGxlciA9PiBoYW5kbGVyLmlkID09PSBoYW5kbGVySWQpXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGFuZGxlciBJRDogJyArIGhhbmRsZXJJZClcblxuICAgIHRoaXMuX2hhbmRsZXJzLnNwbGljZShpbmRleCwgMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlcnMgaGF2aW5nIHRoZSBzcGVjaWZpZWQgc2NvcGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSAtIFRoZSBzY29wZS5cbiAgICovXG4gIHVuYmluZFNjb3BlID0gc2NvcGUgPT4ge1xuICAgIGNvbnN0IGluZGljZXMgPSBbXVxuICAgIHRoaXMuX2hhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaGFuZGxlci5zY29wZSA9PT0gc2NvcGUpIGluZGljZXMucHVzaChpbmRleClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaW5kZXggb2YgaW5kaWNlcykge1xuICAgICAgdGhpcy5faGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJzLlxuICAgKi9cbiAgdW5iaW5kQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuX2hhbmRsZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBrZXlib2FyZCBldmVudHMgKGtleWRvd24gYW5kIGtleXVwKS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxuICAgKiAgIHdoZW4gYSBrZXlkb3duIG9yIGtleXVwIGV2ZW50IG9jY3Vycy4gVGhlIGNhbGxiYWNrIGdldHMgY2FsbGVkIHdpdGhcbiAgICogICB0aGUgY3VycmVudCBrZXkgb3IgY29tYm8gc2VxdWVuY2UgYW5kIHRoZSBrZXkgZXZlbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgYWRkZWQgd2F0Y2hlci5cbiAgICovXG4gIHdhdGNoID0gY2FsbGJhY2sgPT4ge1xuICAgIGNvbnN0IHdhdGNoZXJJZCA9IGdlbmVyYXRlSWQoKVxuICAgIHRoaXMuX3dhdGNoZXJzLnB1c2goe1xuICAgICAgaWQ6IHdhdGNoZXJJZCxcbiAgICAgIGNhbGxiYWNrXG4gICAgfSlcblxuICAgIHJldHVybiB3YXRjaGVySWRcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYSBzcGVjaWZpYyB3YXRjaGVyIHVzaW5nIGl0cyBJRC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHdhdGNoZXJJZCAtIFRoZSBJRCByZXR1cm5lZCBieSB0aGUge0BsaW5rIHdhdGNofSBtZXRob2QuXG4gICAqIEB0aHJvd3MgVGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIElEIGlzIGludmFsaWQuXG4gICAqL1xuICB1bndhdGNoID0gd2F0Y2hlcklkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3dhdGNoZXJzLmZpbmRJbmRleCh3YXRjaGVyID0+IHdhdGNoZXIuaWQgPT09IHdhdGNoZXJJZClcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB3YXRjaGVyIElEOiAnICsgd2F0Y2hlcklkKVxuXG4gICAgdGhpcy5fd2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwgd2F0Y2hlcnMuXG4gICAqL1xuICB1bndhdGNoQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuX3dhdGNoZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdGhlIHNjb3BlLiBPbmx5IGJvdW5kIGhhbmRsZXJzIGdldCB0cmlnZ2VyZWQgdGhhdCBoYXZlIHRoZSBuZXdcbiAgICogc2NvcGUuIFRoZSBkZWZhdWx0IHNjb3BlIGNhbiBiZSBhY2Nlc3NlZCBieSB7QGxpbmsgS2V5cy5ERUZBVUxUX1NDT1BFfS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3BlIC0gVGhlIHNjb3BlLlxuICAgKi9cbiAgc3dpdGNoU2NvcGUgPSBzY29wZSA9PiB7XG4gICAgdGhpcy5fY3VycmVudFNjb3BlID0gc2NvcGVcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGxpc3RlbmluZyB0byBrZXkgZXZlbnRzIGFuZCByZXNldCB0aGUga2V5IHNlcXVlbmNlLlxuICAgKi9cbiAgc3RvcCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuX3N0b3BwZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bilcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX3Jlc2V0S2V5cylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX3Jlc2V0S2V5cylcblxuICAgICAgdGhpcy5fcmVzZXRLZXlzKClcblxuICAgICAgdGhpcy5fc3RvcHBlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIGxpc3RlbmluZyB0byBrZXkgZXZlbnRzLlxuICAgKi9cbiAgcmVzdW1lID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9zdG9wcGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcClcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9yZXNldEtleXMpXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9yZXNldEtleXMpXG5cbiAgICAgIHRoaXMuX3N0b3BwZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qIFJlc2V0IHRoaXMgaW5zdGFuY2UgYnkgdW5iaW5kaW5nIGFsbCBoYW5kbGVycywgcmVtb3ZpbmcgYWxsIHdhdGNoZXJzXG4gICAqIGFuZCByZXNldHRpbmcgdGhlIGtleSBzZXF1ZW5jZS5cbiAgICovXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuX3Jlc2V0S2V5cygpXG4gICAgdGhpcy51bmJpbmRBbGwoKVxuICAgIHRoaXMudW53YXRjaEFsbCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5c1xuIiwiZnVuY3Rpb24gY2xlYW5TZXF1ZW5jZShzZXF1ZW5jZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNlcXVlbmNlW2ldKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzaG9ydGN1dCBzZXF1ZW5jZSAke3NlcXVlbmNlfS5gKVxuXG4gICAgY2xlYW5Db21ibyhzZXF1ZW5jZVtpXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbkNvbWJvKGNvbWJvKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tYm8ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGNvbWJvW2ldICE9PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzaG9ydGN1dCBjb21ibyAke2NvbWJvfS5gKVxuXG4gICAgY29uc3QgY2xlYW5lZEtleSA9IGNsZWFuS2V5KGNvbWJvW2ldKVxuICAgIGlmICghY2xlYW5lZEtleSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBrZXkgJHtjbGVhbmVkS2V5fSBpbiBzaG9ydGN1dCBjb21ibyAke2NvbWJvfS5gKVxuXG4gICAgY29tYm9baV0gPSBjbGVhbmVkS2V5XG4gIH1cbiAgY29tYm8uc29ydCgpXG59XG5cbmZ1bmN0aW9uIGNsZWFuS2V5KGtleSkge1xuICBrZXkgPSBrZXkucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJ1xuICBrZXkgPSBrZXkudHJpbSgpXG4gIGlmIChrZXkubGVuZ3RoID09PSAxKSBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4ga2V5XG59XG5cbi8qKlxuICogQ2xlYW4gYW4gYXJyYXkgc2hvcnRjdXQuIFRoZSBhcnJheSBpcyBjbGVhbmVkIGluLXBsYWNlIGFuZCBhbHNvIHJldHVybmVkLlxuICogVW5uZWNlc3Nhcnkgd2hpdGUgc3BhY2UgaXMgcmVtb3ZlZCwga2V5IGNvbWJpbmF0aW9ucyBhcmUgc29ydGVkIGFuZFxuICogc2luZ2xlIGNoYXJzIGNvbnZlcnRlZCB0byBsb3dlciBjYXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmdbXVtdfSBzaG9ydGN1dCAtIFRoZSBhcnJheSBzaG9ydGN1dCB0byBjbGVhbi5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfHN0cmluZ1tdW119IFRoZSBjbGVhbmVkIGFycmF5IHNob3J0Y3V0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaG9ydGN1dCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hvcnRjdXQpIHx8IHNob3J0Y3V0Lmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQ6ICcgKyBzaG9ydGN1dClcblxuICBsZXQgaXNTZXF1ZW5jZSA9IHR5cGVvZiBzaG9ydGN1dFswXSAhPT0gJ3N0cmluZydcblxuICBpZiAoaXNTZXF1ZW5jZSAmJiBzaG9ydGN1dC5sZW5ndGggPT09IDEpIHtcbiAgICBzaG9ydGN1dCA9IHNob3J0Y3V0WzBdXG4gICAgaXNTZXF1ZW5jZSA9IGZhbHNlXG4gIH1cblxuICBpZiAoaXNTZXF1ZW5jZSkgY2xlYW5TZXF1ZW5jZShzaG9ydGN1dClcbiAgZWxzZSBjbGVhbkNvbWJvKHNob3J0Y3V0KVxuXG4gIHJldHVybiBzaG9ydGN1dFxufVxuIiwibGV0IG5leHRJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYSB1bmlxdWUgSUQgZXZlcnkgdGltZSBpdCBpcyBjYWxsZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgdW5pcXVlIElELlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5leHRJZCsrXG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEtleXMgfSBmcm9tICcuL0tleXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsZWFuU2hvcnRjdXQgfSBmcm9tICcuL2NsZWFuU2hvcnRjdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdlbmVyYXRlSWQgfSBmcm9tICcuL2dlbmVyYXRlSWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlU2hvcnRjdXQgfSBmcm9tICcuL3BhcnNlU2hvcnRjdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ2lmeVNob3J0Y3V0IH0gZnJvbSAnLi9zdHJpbmdpZnlTaG9ydGN1dCdcbiIsImNvbnN0IENPTUJJTkVfV0lUSCA9ICcrJ1xuY29uc3QgRk9MTE9XRURfQlkgPSAnPidcblxuZnVuY3Rpb24gZ2V0RHVwbGljYXRlcyhjb21ibykge1xuICBjb25zdCBjb3VudCA9IGNvbWJvID0+XG4gICAgY29tYm8ucmVkdWNlKChrMSwgazIpID0+IE9iamVjdC5hc3NpZ24oazEsIHsgW2syXTogKGsxW2syXSB8fCAwKSArIDEgfSksIHt9KVxuICBjb25zdCBkdXBsaWNhdGVzID0gZGljdCA9PiBPYmplY3Qua2V5cyhkaWN0KS5maWx0ZXIoayA9PiBkaWN0W2tdID4gMSlcbiAgcmV0dXJuIGR1cGxpY2F0ZXMoY291bnQoY29tYm8pKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0S2V5KGtleSkge1xuICBrZXkgPSBrZXkuam9pbignJylcbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBrZXlcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBzaG9ydGN1dCBhbmQgcmV0dXJuIHRoZSBlcXVpdmFsZW50IGFycmF5IHNob3J0Y3V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHNob3J0Y3V0IC0gVGhlIHN0cmluZyBzaG9ydGN1dCB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nW118c3RyaW5nW11bXX0gVGhlIGFycmF5IHNob3J0Y3V0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaWduYXR1cmUpIHtcbiAgc2lnbmF0dXJlID0gc2lnbmF0dXJlLnJlcGxhY2UoL1xccysvZywgJycpXG5cbiAgaWYgKHR5cGVvZiBzaWduYXR1cmUgIT09ICdzdHJpbmcnIHx8IHNpZ25hdHVyZS5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0ludmFsaWQgc2lnbmF0dXJlIChtdXN0IGJlIG5vbiBlbXB0eSBzdHJpbmcpOiAnICsgc2lnbmF0dXJlXG4gICAgKVxuXG4gIGxldCBrZXkgPSBbXVxuICBsZXQgY29tYm8gPSBbXVxuICBjb25zdCBzZXF1ZW5jZSA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWduYXR1cmUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjID0gc2lnbmF0dXJlLmNoYXJBdChpKVxuICAgIGlmICgha2V5Lmxlbmd0aCkge1xuICAgICAga2V5LnB1c2goYylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGMgPT09IENPTUJJTkVfV0lUSCkge1xuICAgICAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSlcbiAgICAgICAga2V5ID0gW11cbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gRk9MTE9XRURfQlkpIHtcbiAgICAgICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpXG4gICAgICAgIGtleSA9IFtdXG4gICAgICAgIGNvbWJvLnNvcnQoKVxuICAgICAgICBzZXF1ZW5jZS5wdXNoKGNvbWJvKVxuICAgICAgICBjb21ibyA9IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkucHVzaChjKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkubGVuZ3RoKSB7XG4gICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpXG4gICAgY29tYm8uc29ydCgpXG4gICAgc2VxdWVuY2UucHVzaChjb21ibylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2lnbmF0dXJlIChtdXN0IGVuZCB3aXRoIGtleSk6ICcgKyBzaWduYXR1cmUpXG4gIH1cblxuICBmb3IgKGxldCBjb21ibyBvZiBzZXF1ZW5jZSkge1xuICAgIGNvbnN0IGR1cGxpY2F0ZXMgPSBnZXREdXBsaWNhdGVzKGNvbWJvKVxuICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2lnbmF0dXJlIChkdXBsaWNhdGUga2V5cyk6JyArIHNpZ25hdHVyZSlcbiAgfVxuXG4gIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDEpIHJldHVybiBzZXF1ZW5jZVswXVxuICBlbHNlIHJldHVybiBzZXF1ZW5jZVxufVxuIiwiY29uc3QgQ09NQklORV9XSVRIID0gJyArICdcbmNvbnN0IEZPTExPV0VEX0JZID0gJyA+ICdcblxuLyoqXG4gKiBDcmVhdGUgZXF1aXZhbGVudCBzdHJpbmcgc2hvcnRjdXQgb2YgYW4gYXJyYXkgc2hvcnRjdXQuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ1tdW119IHNob3J0Y3V0IC0gVGhlIGFycmF5IHNob3J0Y3V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBjb252ZXJ0ZWQgc3RyaW5nIHNob3J0Y3VydC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2hvcnRjdXQpIHtcbiAgbGV0IGlzU2VxdWVuY2UgPSB0eXBlb2Ygc2hvcnRjdXRbMF0gIT09ICdzdHJpbmcnXG5cbiAgaWYgKCFpc1NlcXVlbmNlKSB7XG4gICAgcmV0dXJuIHNob3J0Y3V0LmpvaW4oQ09NQklORV9XSVRIKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzaG9ydGN1dC5tYXAocGFydCA9PiBwYXJ0LmpvaW4oQ09NQklORV9XSVRIKSkuam9pbihGT0xMT1dFRF9CWSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==