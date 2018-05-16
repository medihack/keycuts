---
title: KeyCuts Documentation
---

# Getting Started

Coming soon ...

# Bind Shortcuts

Coming soon ...

# Watchers

Coming soon ...

# Options

Coming soon ...

# API Reference

[Link to the API reference](./api/index.html)

## FAQ

** Why another Javascript keyboard library? **
The existing keyboard shortcut libraries I have found all use the now deprecated `[charCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/charCode)` and `[keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)` attributes of `[KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)`. KeyCuts uses the newer `[key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)` and `[code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)` attributes instead. It also adds features not found in the other libraries.

** What browsers are supported? **
By using the above mentioned newer (and not deprecated) `key` and `code` attributes of `KeyboardEvend` KeyCuts only supports [modern browser](https://caniuse.com/#feat=keyboardevent-key) (especially IE >= 11). If you need to support older browsers then KeyCuts is not for you and you have to look somewhere else (e.g. [Hotkeys](https://github.com/jaywcjlove/hotkeys), [Keypress](https://github.com/dmauro/Keypress/), [keymaster.js](https://github.com/madrobby/keymaster), [Mousetrap](https://github.com/ccampbell/mousetrap), [KeyboardJS](https://github.com/RobertWHurst/KeyboardJS)).

** What keys are supported? **
KeyCuts is completely key agnostic. All printable keys and all non printable keys listed in the [MDN web docs](https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key/Key_Values) are supported. The naming schema of the non printable keys is the key value stated in the MDN web docs, except for the space key (' ' in the MDN docs) which is named `Space` in KeyCuts (just better visible in a shortcut).

** Under what license is KeyCuts published? **
The very liberal MIT license.

** Can I support this library somehow? **
Absolutely! If you are a writer by improving the documentation. If you are a coder by fixing bugs and writing tests. If you are a creative mind by suggesting features. If you are damn rich by donating money or even better BTC / ETH (see Donations).

# Donations

Coming ...

# License

[MIT © Kai Schlamp](./LICENSE)
