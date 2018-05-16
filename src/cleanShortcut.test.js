/* eslint-env jest */

/*
 * Currently we test the whole module as it is not possible to
 * mock specific functions inside a module (as of how the
 * whole module system in Javascript currently works).
 * See https://github.com/facebook/jest/issues/936
 * A possible workaround would be
 * https://github.com/speedskater/babel-plugin-rewire,
 * but I am not sure if it is worth it.
 */

import cleanShortcut from './cleanShortcut'

describe('a combo should be cleaned with', () => {
  test('space char', () => {
    const result = cleanShortcut([' '])
    expect(result).toEqual(['Space'])
  })

  test('an uppercase char', () => {
    const result = cleanShortcut(['A'])
    expect(result).toEqual(['a'])
  })

  test('trailing spaces', () => {
    const result = cleanShortcut(['  Alt '])
    expect(result).toEqual(['Alt'])
  })

  test('unsorted keys', () => {
    const result = cleanShortcut(['b', 'a'])
    expect(result).toEqual(['a', 'b'])
  })
})

describe('a sequence should be cleaned with', () => {
  test('combo', () => {
    const result = cleanShortcut([['a']])
    expect(result).toEqual(['a'])
  })

  test('multiple combos', () => {
    const result = cleanShortcut([['b', 'A'], ['a', ' Alt ']])
    expect(result).toEqual([['a', 'b'], ['Alt', 'a']])
  })
})

describe('an invalid shortcut show throw an error when', () => {
  test('called without an argument', () => {
    expect(() => {
      cleanShortcut()
    }).toThrow()
  })

  test('it is an empty array', () => {
    expect(() => {
      cleanShortcut([])
    }).toThrow()
  })

  test('it is not an array', () => {
    expect(() => {
      cleanShortcut('foo')
    }).toThrow()
  })

  test('too many dimensions', () => {
    expect(() => {
      cleanShortcut([[['a']]])
    }).toThrow()
  })

  test('when mixing dimensions', () => {
    expect(() => {
      cleanShortcut([['a'], 'b'])
    }).toThrow()

    expect(() => {
      cleanShortcut(['a', ['b']])
    }).toThrow()
  })
})
