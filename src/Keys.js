import generateId from './generateId'
import cleanShortcut from './cleanShortcut'
import parseShortcut from './parseShortcut'
import stringifyShortcut from './stringifyShortcut'

/**
 * The main class to access the features of the KeyCuts library.
 */
class Keys {
  /** The name of the default scope. */
  static DEFAULT_SCOPE = 'DEFAULT_SCOPE'

  _stopped = true
  _currentScope = Keys.DEFAULT_SCOPE
  _currentCombo = []
  _sequence = []
  _handlers = []
  _watchers = []

  options = {
    triggerOncePerKey: false,
    useCodeInsteadKey: false,
    maxSequenceLength: 3,
    filter: () => true
  }

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
  constructor(element, options) {
    if (!element) element = window
    this._element = element

    Object.assign(this.options, options)

    this.resume()
  }

  _onKeyDown = event => {
    if (!this.options.filter.call(this, event)) return

    let key = this.options.useCodeInsteadKey ? event.code : event.key

    if (key.length === 1) {
      key = key.toLowerCase()
      if (key === ' ') key = 'Space'
    }

    const alreadyTriggered = this._currentCombo.includes(key)

    if (!alreadyTriggered) {
      this._currentCombo.push(key)
      this._currentCombo.sort()

      if (
        this._sequence.length === 0 ||
        this._sequence[this._sequence.length - 1] !== this._currentCombo
      ) {
        if (this._sequence.length === this.options.maxSequenceLength)
          this._sequence.shift()

        this._sequence.push(this._currentCombo)
      }
    }

    if (!alreadyTriggered || !this.options.triggerOncePerKey) {
      this._notifyWatchers(event)
      this._dispatchHandlers(event)
    }
  }

  _onKeyUp = event => {
    if (!this.options.filter.call(this, event)) return

    let key = this.options.useCodeInsteadKey ? event.code : event.key

    if (key.length === 1) {
      key = key.toLowerCase()
      if (key === ' ') key = 'Space'
    }

    this._currentCombo = [...this._currentCombo]

    const index = this._currentCombo.indexOf(key)
    if (index !== -1) {
      this._currentCombo.splice(index, 1)
      this._currentCombo.sort()
    }

    this._notifyWatchers(event)
  }

  _resetKeys = () => {
    this._currentCombo = []
    this._sequence = []
  }

  _notifyWatchers = event => {
    const sequence = JSON.parse(JSON.stringify(this._sequence))

    for (let watcher of this._watchers) {
      watcher.callback(sequence, event)
    }
  }

  _dispatchHandlers = event => {
    const sequence = JSON.parse(JSON.stringify(this._sequence))

    const signatures = []

    let signatureSequence = []
    for (let i = this._sequence.length - 1; i >= 0; i--) {
      signatureSequence = [this._sequence[i], ...signatureSequence]
      signatures.push(stringifyShortcut(signatureSequence))
    }

    for (let handler of this._handlers) {
      if (
        this._currentScope === handler.scope &&
        signatures.includes(handler.signature)
      ) {
        handler.callback(sequence, event)
      }
    }
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
  bind = (shortcut, scope, callback) => {
    if (callback === undefined) {
      callback = scope
      scope = Keys.DEFAULT_SCOPE
    }

    if (typeof shortcut === 'string') shortcut = parseShortcut(shortcut)

    shortcut = cleanShortcut(shortcut)

    const handlerId = generateId()
    this._handlers.push({
      id: handlerId,
      signature: stringifyShortcut(shortcut),
      shortcut,
      scope,
      callback
    })

    return handlerId
  }

  /**
   * Unbind a specific keyboard shortcut handler using its ID.
   * @param {number} handlerId - The ID returned by the {@link bind} method.
   * @throws Throws an error when the ID is invalid.
   */
  unbind = handlerId => {
    const index = this._handlers.findIndex(handler => handler.id === handlerId)

    if (index === -1) throw new Error('Invalid handler ID: ' + handlerId)

    this._handlers.splice(index, 1)
  }

  /**
   * Unbind keyboard shortcut handlers having the specified scope.
   * @param {String} scope - The scope.
   */
  unbindScope = scope => {
    const indices = []
    this._handlers.forEach((handler, index) => {
      if (handler.scope === scope) indices.push(index)
    })

    for (let index of indices) {
      this._handlers.splice(index, 1)
    }
  }

  /**
   * Unbind all keyboard shortcut handlers.
   */
  unbindAll = () => {
    this._handlers = []
  }

  /**
   * Watch keyboard events (keydown and keyup).
   * @param {Function} callback - The callback that should be triggered.
   *   when a keydown or keyup event occurs. The callback gets called with
   *   the current key or combo sequence and the key event.
   * @return {number} The unique ID of the added watcher.
   */
  watch = callback => {
    const watcherId = generateId()
    this._watchers.push({
      id: watcherId,
      callback
    })

    return watcherId
  }

  /**
   * Unbind a specific watcher using its ID.
   * @param {number} watcherId - The ID returned by the {@link watch} method.
   * @throws Throws an error when the ID is invalid.
   */
  unwatch = watcherId => {
    const index = this._watchers.findIndex(watcher => watcher.id === watcherId)

    if (index === -1) throw new Error('Invalid watcher ID: ' + watcherId)

    this._watchers.splice(index, 1)
  }

  /**
   * Unbind all watchers.
   */
  unwatchAll = () => {
    this._watchers = []
  }

  /**
   * Switch the scope. Only bound handlers get triggered that have the new
   * scope. The default scope can be accessed by {@link Keys.DEFAULT_SCOPE}.
   * @param {number} scope - The scope.
   */
  switchScope = scope => {
    this._currentScope = scope
  }

  /**
   * Stop listening to key events and reset the key sequence.
   */
  stop = () => {
    if (!this._stopped) {
      this._element.removeEventListener('keydown', this._onKeyDown)
      this._element.removeEventListener('keyup', this._onKeyUp)
      this._element.removeEventListener('focus', this._resetKeys)
      this._element.removeEventListener('blur', this._resetKeys)

      this._resetKeys()

      this._stopped = true
    }
  }

  /**
   * Resume listening to key events.
   */
  resume = () => {
    if (this._stopped) {
      this._element.addEventListener('keydown', this._onKeyDown)
      this._element.addEventListener('keyup', this._onKeyUp)
      this._element.addEventListener('focus', this._resetKeys)
      this._element.addEventListener('blur', this._resetKeys)

      this._stopped = false
    }
  }

  /* Reset this instance by unbinding all handlers, removing all watchers
   * and resetting the key sequence.
   */
  reset = () => {
    this._resetKeys()
    this.unbindAll()
    this.unwatchAll()
  }
}

export default Keys
