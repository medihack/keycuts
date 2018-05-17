const COMBINE_WITH = '+'
const FOLLOWED_BY = '>'

function getDuplicates(combo) {
  const count = combo =>
    combo.reduce((k1, k2) => Object.assign(k1, { [k2]: (k1[k2] || 0) + 1 }), {})
  const duplicates = dict => Object.keys(dict).filter(k => dict[k] > 1)
  return duplicates(count(combo))
}

function convertKey(key) {
  key = key.join('')
  if (key.length === 1) key = key.toLowerCase()
  return key
}

/**
 * Parse a string shortcut and return the equivalent array shortcut.
 * @param {string} shortcut - The string shortcut to convert.
 * @return {string[]|string[][]} The converted array shortcut.
 */
export default function(shortcut) {
  if (typeof shortcut !== 'string')
    throw new Error('Invalid string shortcut to parse: ' + shortcut)

  shortcut = shortcut.replace(/\s+/g, '')

  if (typeof shortcut !== 'string' || shortcut.length === 0)
    throw new Error('Invalid shortcut (must be non empty string): ' + shortcut)

  let key = []
  let combo = []
  const sequence = []

  for (let i = 0; i < shortcut.length; i++) {
    const c = shortcut.charAt(i)
    if (!key.length) {
      key.push(c)
    } else {
      if (c === COMBINE_WITH) {
        combo.push(convertKey(key))
        key = []
      } else if (c === FOLLOWED_BY) {
        combo.push(convertKey(key))
        key = []
        combo.sort()
        sequence.push(combo)
        combo = []
      } else {
        key.push(c)
      }
    }
  }

  if (key.length) {
    combo.push(convertKey(key))
    combo.sort()
    sequence.push(combo)
  } else {
    throw new Error('Invalid shortcut (must end with key): ' + shortcut)
  }

  for (let combo of sequence) {
    const duplicates = getDuplicates(combo)
    if (duplicates.length > 0)
      throw new Error('Invalid shortcut (duplicate keys):' + shortcut)
  }

  if (sequence.length === 1) return sequence[0]
  else return sequence
}
