let nextId = 1

/**
 * Create a unique ID every time it is called.
 * @return {number} A unique ID.
 */
export default function() {
  return nextId++
}
