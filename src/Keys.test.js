/* eslint-env jest */

import Keys from './Keys'
import cleanShortcut from './cleanShortcut'
import generateId from './generateId'
import parseShortcut from './parseShortcut'
import stringifyShortcut from './stringifyShortcut'

jest.mock('./cleanShortcut')
jest.mock('./generateId')
jest.mock('./parseShortcut')
jest.mock('./stringifyShortcut')

let keys,
  arrayShortcut1,
  arrayShortcut2,
  stringShortcut1,
  scope1,
  scope2,
  callback1,
  callback2,
  id1,
  id2,
  handler1,
  watcher1

beforeEach(() => {
  jest.resetAllMocks()

  keys = new Keys()
  arrayShortcut1 = ['a', 'b']
  arrayShortcut2 = [['Control', 'c'], ['d']]
  stringShortcut1 = 'a + b'
  scope1 = 'scope1'
  scope2 = 'scope2'
  callback1 = jest.fn()
  callback2 = jest.fn()
  id1 = 1
  id2 = 2
  handler1 = {
    id: id1,
    signature: stringShortcut1,
    shortcut: arrayShortcut1,
    scope: scope1,
    callback: callback1
  }
  watcher1 = {
    id: id1,
    callback1
  }
})

afterEach(() => {
  keys.reset()
  keys.stop()
})

describe('default Keys instance', () => {
  test('should work on windows element and have default options', () => {
    expect(keys._element).toBe(window)
    expect(keys.options).toEqual({
      triggerOncePerKey: false,
      useCodeInsteadKey: false,
      maxSequenceLength: 3,
      filter: expect.any(Function)
    })
    expect(keys.options.filter()).toBe(true)
  })
})

describe('constructor method', () => {
  test('should attach listeners to window', () => {
    window.addEventListener = jest.fn()

    const _keys = new Keys()

    expect(window.addEventListener.mock.calls).toEqual([
      ['keydown', _keys._onKeyDown],
      ['keyup', _keys._onKeyUp],
      ['focus', _keys._resetKeys],
      ['blur', _keys._resetKeys]
    ])
    expect(_keys._stopped).toBe(false)

    _keys.reset()
    _keys.stop()
  })

  test('should attach listeners to element', () => {
    const _el = document.createElement('div')
    _el.addEventListener = jest.fn()

    const _keys = new Keys(_el)

    expect(_el.addEventListener.mock.calls).toEqual([
      ['keydown', _keys._onKeyDown],
      ['keyup', _keys._onKeyUp],
      ['focus', _keys._resetKeys],
      ['blur', _keys._resetKeys]
    ])
    expect(_keys._stopped).toBe(false)

    _keys.reset()
    _keys.stop()
  })

  test('should alter options', () => {
    const _keys = new Keys(null, {
      triggerOncePerKey: true,
      useCodeInsteadKey: true,
      maxSequenceLength: 5,
      filter: callback1
    })

    expect(_keys.options).toEqual({
      triggerOncePerKey: true,
      useCodeInsteadKey: true,
      maxSequenceLength: 5,
      filter: callback1
    })

    _keys.reset()
    _keys.stop()
  })
})

describe('bind method', () => {
  test('should add a handler when provided a string shortcut', () => {
    parseShortcut.mockReturnValue(arrayShortcut1)
    cleanShortcut.mockReturnValue(arrayShortcut1)
    generateId.mockReturnValue(id1)
    stringifyShortcut.mockReturnValue(stringShortcut1)

    const _id = keys.bind(stringShortcut1, callback1)

    expect(parseShortcut).toBeCalledWith(stringShortcut1)
    expect(keys._handlers.length).toBe(1)
    expect(keys._handlers[0]).toEqual({
      id: id1,
      signature: stringShortcut1,
      shortcut: arrayShortcut1,
      scope: Keys.DEFAULT_SCOPE,
      callback: callback1
    })
    expect(_id).toBe(id1)
  })

  test('should add a handler when provided an array shortcut', () => {
    cleanShortcut.mockReturnValue(arrayShortcut1)
    generateId.mockReturnValue(id1)
    stringifyShortcut.mockReturnValue(stringShortcut1)

    const _id = keys.bind(arrayShortcut1, callback1)

    expect(parseShortcut).not.toBeCalled()
    expect(keys._handlers.length).toBe(1)
    expect(keys._handlers[0]).toEqual({
      id: id1,
      signature: stringShortcut1,
      shortcut: arrayShortcut1,
      scope: Keys.DEFAULT_SCOPE,
      callback: callback1
    })
    expect(_id).toBe(id1)
  })

  test('should add a handler with a provided custom scope', () => {
    cleanShortcut.mockReturnValue(arrayShortcut1)
    generateId.mockReturnValue(id1)
    stringifyShortcut.mockReturnValue(stringShortcut1)

    const _id = keys.bind(arrayShortcut1, scope1, callback1)

    expect(keys._handlers.length).toBe(1)
    expect(keys._handlers[0]).toEqual({
      id: id1,
      signature: stringShortcut1,
      shortcut: arrayShortcut1,
      scope: scope1,
      callback: callback1
    })
    expect(_id).toBe(id1)
  })
})

describe('unbind method', () => {
  test('should only remove one handler', () => {
    generateId.mockReturnValueOnce(id1)
    generateId.mockReturnValueOnce(id2)

    keys.bind(arrayShortcut1, callback1)
    keys.bind(arrayShortcut2, callback2)

    expect(keys._handlers.length).toBe(2)

    keys.unbind(id1)

    expect(keys._handlers.length).toBe(1)
    expect(keys._handlers[0].id).toBe(id2)
  })
})

describe('unbindScope method', () => {
  test('should remove handlers of scope', () => {
    generateId.mockReturnValueOnce(id1)
    generateId.mockReturnValueOnce(id2)

    keys.bind(arrayShortcut1, scope1, callback1)
    keys.bind(arrayShortcut2, scope2, callback2)

    keys.unbindScope(scope1)

    expect(keys._handlers.length).toBe(1)
    expect(keys._handlers[0].id).toBe(id2)
  })
})

describe('unbindAll method', () => {
  test('should remove all handlers', () => {
    keys.bind(arrayShortcut1, callback1)
    keys.bind(arrayShortcut2, callback2)

    expect(keys._handlers.length).toBe(2)

    keys.unbindAll()

    expect(keys._handlers.length).toBe(0)
  })
})

describe('watch method', () => {
  test('should add  a watcher', () => {
    generateId.mockReturnValueOnce(id1)

    const _id = keys.watch(callback1)

    expect(keys._watchers.length).toBe(1)
    expect(keys._watchers[0]).toEqual({
      id: id1,
      callback: callback1
    })
    expect(_id).toBe(id1)
  })
})

describe('unwatch method', () => {
  test('should remove a watcher', () => {
    generateId.mockReturnValueOnce(id1)
    generateId.mockReturnValueOnce(id2)

    keys.watch(callback1)
    keys.watch(callback2)

    expect(keys._watchers.length).toBe(2)

    keys.unwatch(id1)

    expect(keys._watchers.length).toBe(1)
    expect(keys._watchers[0].id).toBe(id2)
  })
})

describe('unwatchAll method', () => {
  test('should remove all watchers', () => {
    keys.watch(callback1)
    keys.watch(callback2)

    expect(keys._watchers.length).toBe(2)

    keys.unwatchAll()

    expect(keys._watchers.length).toBe(0)
  })
})

describe('switchScope method', () => {
  test('should switch scope', () => {
    keys.switchScope(scope1)

    expect(keys._currentScope).toBe(scope1)

    keys.switchScope(scope2)

    expect(keys._currentScope).toBe(scope2)
  })
})

describe('stop method', () => {
  test('should dettach event listeners and stop', () => {
    expect(keys._stopped).toBe(false)

    window.removeEventListener = jest.fn()
    keys._resetKeys = jest.fn()

    keys.stop()

    expect(keys._stopped).toBe(true)
    expect(window.removeEventListener.mock.calls).toEqual([
      ['keydown', keys._onKeyDown],
      ['keyup', keys._onKeyUp],
      ['focus', keys._resetKeys],
      ['blur', keys._resetKeys]
    ])
    expect(keys._resetKeys).toBeCalled()
  })
})

describe('resume method', () => {
  test('should attach event listeners and resume', () => {
    expect(keys._stopped).toBe(false)

    keys.stop()

    expect(keys._stopped).toBe(true)

    window.addEventListener = jest.fn()
    keys.resume()

    expect(window.addEventListener.mock.calls).toEqual([
      ['keydown', keys._onKeyDown],
      ['keyup', keys._onKeyUp],
      ['focus', keys._resetKeys],
      ['blur', keys._resetKeys]
    ])
    expect(keys._stopped).toBe(false)
  })
})

describe('reset method', () => {
  test('should reset memory', () => {
    keys._resetKeys = jest.fn()
    keys._handlers = [handler1]
    keys._watchers = [watcher1]

    keys.reset()

    expect(keys._currentScope).toBe(Keys.DEFAULT_SCOPE)
    expect(keys._currentCombo.length).toBe(0)
    expect(keys._sequence.length).toBe(0)
    expect(keys._handlers.length).toBe(0)
    expect(keys._watchers.length).toBe(0)
  })
})
