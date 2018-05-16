/* eslint-env jest */

import stringifyShortcut from './stringifyShortcut'

describe('creates a signature for a combo with', () => {
  test('one key', () => {
    const result = stringifyShortcut(['a'])
    expect(result).toEqual('a')
  })

  test('multiple keys', () => {
    const result = stringifyShortcut(['a', 'b'])
    expect(result).toEqual('a + b')
  })
})

describe('creates a signature for a sequence with', () => {
  test('two combos each having one key', () => {
    const result = stringifyShortcut([['a'], ['b']])
    expect(result).toEqual('a > b')
  })

  test('multiple combos having multiple keys', () => {
    const result = stringifyShortcut([['a', 'b'], ['c', 'd', 'e'], ['f']])
    expect(result).toEqual('a + b > c + d + e > f')
  })
})
