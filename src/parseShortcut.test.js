/* eslint-env jest */

import parseShortcut from './parseShortcut'

describe('parse combo only with', () => {
  test('single multi char key', () => {
    const combo = parseShortcut('Alt')
    expect(combo).toEqual(['Alt'])
  })

  test('single one char uppercase key', () => {
    const combo = parseShortcut('B')
    expect(combo).toEqual(['b'])
  })

  test('multiple keys', () => {
    const combo = parseShortcut('c + B + Alt')
    expect(combo).toEqual(['Alt', 'b', 'c'])
  })
})

describe('parse sequence with', () => {
  test('multiple keys', () => {
    const combo = parseShortcut('Shift > c > A')
    expect(combo).toEqual([['Shift'], ['c'], ['a']])
  })

  test('multiple combos', () => {
    const combo = parseShortcut('Shift + G > Alt + m')
    expect(combo).toEqual([['Shift', 'g'], ['Alt', 'm']])
  })
})

describe('invalid combo should throw error', () => {
  test('when empty', () => {
    expect(() => {
      parseShortcut('')
    }).toThrow()
  })

  test('when ends with an + operator', () => {
    expect(() => {
      parseShortcut('a +')
    }).toThrow()
  })

  test('when ends with an > operator', () => {
    expect(() => {
      parseShortcut('a >')
    }).toThrow()
  })
})
