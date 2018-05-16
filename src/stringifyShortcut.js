const COMBINE_WITH = ' + '
const FOLLOWED_BY = ' > '

/**
 * Create equivalent string shortcut of an array shortcut.
 * @param {string[]|string[][]} shortcut - The array shortcut to convert.
 * @return {string} The converted string shortcurt.
 */
export default function(shortcut) {
  let isSequence = typeof shortcut[0] !== 'string'

  if (!isSequence) {
    return shortcut.join(COMBINE_WITH)
  } else {
    return shortcut.map(part => part.join(COMBINE_WITH)).join(FOLLOWED_BY)
  }
}
