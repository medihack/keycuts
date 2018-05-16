function cleanSequence(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    if (!Array.isArray(sequence[i]))
      throw new Error(`Invalid shortcut sequence ${sequence}.`)

    cleanCombo(sequence[i])
  }
}

function cleanCombo(combo) {
  for (let i = 0; i < combo.length; i++) {
    if (typeof combo[i] !== 'string')
      throw new Error(`Invalid shortcut combo ${combo}.`)

    const cleanedKey = cleanKey(combo[i])
    if (!cleanedKey)
      throw new Error(`Invalid key ${cleanedKey} in shortcut combo ${combo}.`)

    combo[i] = cleanedKey
  }
  combo.sort()
}

function cleanKey(key) {
  key = key.replace(/\s+/g, ' ')
  if (key === ' ') key = 'Space'
  key = key.trim()
  if (key.length === 1) key = key.toLowerCase()
  return key
}

/**
 * Clean an array shortcut. The array is cleaned in-place and also returned.
 * Unnecessary white space is removed, key combinations are sorted and
 * single chars converted to lower case.
 * @param {string[]|string[][]} shortcut - The array shortcut to clean.
 * @return {string[]|string[][]} The cleaned array shortcut.
 */
export default function(shortcut) {
  if (!Array.isArray(shortcut) || shortcut.length === 0)
    throw new Error('Invalid shortcut: ' + shortcut)

  let isSequence = typeof shortcut[0] !== 'string'

  if (isSequence && shortcut.length === 1) {
    shortcut = shortcut[0]
    isSequence = false
  }

  if (isSequence) cleanSequence(shortcut)
  else cleanCombo(shortcut)

  return shortcut
}
