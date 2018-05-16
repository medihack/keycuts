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
 * @return {string[]|string[][]} The array shortcut.
 */
export default function(signature) {
  signature = signature.replace(/\s+/g, '')

  if (typeof signature !== 'string' || signature.length === 0)
    throw new Error(
      'Invalid signature (must be non empty string): ' + signature
    )

  let key = []
  let combo = []
  const sequence = []

  for (let i = 0; i < signature.length; i++) {
    const c = signature.charAt(i)
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
    throw new Error('Invalid signature (must end with key): ' + signature)
  }

  for (let combo of sequence) {
    const duplicates = getDuplicates(combo)
    if (duplicates.length > 0)
      throw new Error('Invalid signature (duplicate keys):' + signature)
  }

  if (sequence.length === 1) return sequence[0]
  else return sequence
}
