# <img src="https://cdn.rawgit.com/medihack/keycuts/master/src/keycuts_logo_full.svg" height="100"></img>

_keycuts_ is a modern Javascript library for handling keyboard shortcuts. It supports listening for key combinations, key sequences and a mix of both. _keycuts_ has no external dependencies and a small footprint (~8kb, gzipped ~3kb).

* [_keycuts_ Homepage](https://medihack.github.io/keycuts/)
* [_keycuts_ Demo](https://medihack.github.io/keycuts/demo/)

## Installation

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com).

```shell
$ npm install keycuts --save
# or
$ yarn add keycuts
```

Alternatively you can [download the distributed library](https://unpkg.com/keycuts/dist/keycuts.min.js) and link it into your webpage.

```html
<script src="keycuts.min.js"></script>
```

## Usage

```js
// Import using ES6 modules syntax
import { Keys } from 'keycuts'
// or when linked directly in the webpage
const Keys = keycuts.Keys

// Create a new object (without any parameter it is directly attached
// to the window object)
const keys = new Keys()

// Trigger a provided callback when a specific key combination is pressed
keys.bind(['Control', 'a'], () => {
  // triggered when Control and a are pressed
})

// You can also provide the shortcut using a string syntax
keys.bind('Control + a', () => {
  // triggered when Control and a are pressed
})

// Sequences of key or key combinations are supported too
key.bind([['Control', 'a'], ['Alt', 'b']], () => {
  // triggered when Control and a followed by Control and b are pressed
})

// And the appropriate string syntax
key.bind('Control + a > Control + b', () => {
  // triggered when Control and a followed by Control and b are pressed
})

// Watch every keydown or keyup event and have access
// to the current key sequence
key.watch((event, sequence) => {
  // acces the currently pressed key combo
  const combo = sequence[sequence.length - 1]
})
```

But _keycuts_ can do more! The full documentation, API reference and a demo can be found on the [_keycuts_ homepage](https://medihack.github.io/keycuts).

## Development

For development fetch the code from Github and install the dependencies.

```shell
$ git clone https://github.com/medihack/keycuts.git
$ cd keycuts
$ npm install # or yarn install
```

_keycuts_ uses Webpack to transpile the source code (`src/`) into a minified and non-minified bundle in the `dist/` folder.

```shell
$ npm run build
```

You can easily start a development server with the demo which automatically recompiles the code and refreshes the page when the source files are modified (files under dist/ stay untouched).

```shell
// Start a development server on port 8000
$ npm run start

// Just visit localhost:8000 in your browser
```

Run the test suite (using Jest) once or automatically when a source or test file was changed.

```shell
// Run all tests once
$ npm run test
// or contiously
$ npm run test:watch
```

More scripts to manage the library can be found in the scripts section in the (./package.json) file.

To contribute, please fork, add your patch, write tests for it and submit a pull request.

## Contributions

Logo by Torsten Kühr ([werkst.de](http://werkst.de))

## License

[MIT © Kai Schlamp](./LICENSE)
