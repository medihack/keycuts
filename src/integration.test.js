/* eslint-env jest */

import Keys from './Keys'

let keys, keyEvents

function createKeyEvent(eventType, key) {
  return new KeyboardEvent(eventType, { key })
}

beforeEach(() => {
  keys = new Keys()

  keyEvents = {
    aKeyDown: createKeyEvent('keydown', 'a'),
    aKeyUp: createKeyEvent('keyup', 'a'),
    bKeyDown: createKeyEvent('keydown', 'b'),
    bKeyUp: createKeyEvent('keyup', 'b')
  }
})

afterEach(() => {
  keys.reset()
  keys.stop()
})

describe('bound handlers', () => {
  test('should listen to combo defined by string shortcut', done => {
    keys.bind('a + b', (sequence, event) => {
      expect(sequence).toEqual([['a', 'b']])
      expect(event).toBe(keyEvents.bKeyDown)
      done()
    })

    document.dispatchEvent(keyEvents.aKeyDown)
    document.dispatchEvent(keyEvents.bKeyDown)
  })

  test('should listen to combo defined by array shortcut', done => {
    keys.bind(['a', 'b'], (sequence, event) => {
      expect(sequence).toEqual([['a', 'b']])
      expect(event).toBe(keyEvents.bKeyDown)
      done()
    })

    document.dispatchEvent(keyEvents.aKeyDown)
    document.dispatchEvent(keyEvents.bKeyDown)
  })

  test('should listen to sequence defined by string shortcut', done => {
    keys.bind('a > b', (sequence, event) => {
      expect(sequence).toEqual([['a'], ['b']])
      expect(event).toBe(keyEvents.bKeyDown)
      done()
    })

    document.dispatchEvent(keyEvents.aKeyDown)
    document.dispatchEvent(keyEvents.aKeyUp)
    document.dispatchEvent(keyEvents.bKeyDown)
  })

  test('should listen to sequence defined by array shortcut', done => {
    keys.bind([['a'], ['b']], (sequence, event) => {
      expect(sequence).toEqual([['a'], ['b']])
      expect(event).toBe(keyEvents.bKeyDown)
      done()
    })

    document.dispatchEvent(keyEvents.aKeyDown)
    document.dispatchEvent(keyEvents.aKeyUp)
    document.dispatchEvent(keyEvents.bKeyDown)
  })
})

describe('watchers', () => {
  test('should listen to key events', done => {
    let _counter = 0

    keys.watch((sequence, event) => {
      _counter++

      if (_counter === 1) {
        expect(sequence).toEqual([['a']])
        expect(event).toBe(keyEvents.aKeyDown)
      }

      if (_counter === 2) {
        expect(sequence).toEqual([['a']])
        expect(event).toBe(keyEvents.aKeyUp)
        done()
      }
    })

    document.dispatchEvent(keyEvents.aKeyDown)
    document.dispatchEvent(keyEvents.aKeyUp)
  })
})
