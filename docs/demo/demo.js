/* global React, ReactDOM, keycuts */

const GAME_SIZE = [11, 11]

const R = React.createElement

const shortcutsConfigDescription =
  'To change a shortcut focus an input (by clicking it or tabbing) and ' +
  'type on the keyboard. End the editing by leaving the input (click ' +
  'somewhere else or tab until no input is highlighted). By default ' +
  'keycuts uses a maximum shortcut key sequence of 3, which can ' +
  'be customized in your app.'

const gameBoardDescription =
  'Move the red box around by using the above defined shortcuts. ' +
  'Make sure that no shortcut input is focused (otherwise you will ' +
  'just edit the shortcut).'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shortcuts: {
        up: 'Shift + i',
        down: 'Control + j',
        left: 'ArrowLeft',
        right: 'j > l'
      },
      boxPosition: [5, 5]
    }

    this.styles = {
      panel: {
        marginTop: 30
      }
    }

    this.keys = new keycuts.Keys()

    this.updateShortcutBindings = this.updateShortcutBindings.bind(this)
    this.handleChangeShortcut = this.handleChangeShortcut.bind(this)
    this.handleChangePosition = this.handleChangePosition.bind(this)
    this.handlePauseGame = this.handlePauseGame.bind(this)
  }

  componentDidMount() {
    this.keys = new keycuts.Keys()
    this.updateShortcutBindings()
  }

  componentDidUnmount() {
    this.keys.stop()
    this.keys.reset()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.shortcuts !== this.state.shortcuts) {
      this.updateShortcutBindings()
    }
  }

  updateShortcutBindings() {
    this.keys.unbindAll()

    const dirs = ['up', 'down', 'left', 'right']
    const that = this
    for (let dir of dirs) {
      this.keys.bind(this.state.shortcuts[dir], function(event) {
        event.preventDefault()
        that.handleChangePosition(dir)
      })
    }
  }

  handleChangePosition(dir) {
    let pos = [this.state.boxPosition[0], this.state.boxPosition[1]]
    switch (dir) {
      case 'up':
        if (pos[0] > 0) pos = [pos[0] - 1, pos[1]]
        break
      case 'down':
        if (pos[0] < GAME_SIZE[0] - 1) pos = [pos[0] + 1, pos[1]]
        break
      case 'left':
        if (pos[1] > 0) pos = [pos[0], pos[1] - 1]
        break
      case 'right':
        if (pos[1] < GAME_SIZE[0] - 1) pos = [pos[0], pos[1] + 1]
        break
    }

    this.setState({ boxPosition: pos })
  }

  handleChangeShortcut(dir, shortcut) {
    this.setState({
      shortcuts: Object.assign({}, this.state.shortcuts, { [dir]: shortcut })
    })
  }

  handlePauseGame(paused) {
    if (paused) this.keys.stop()
    else this.keys.resume()
  }

  render() {
    return R('div', {}, [
      R('div', { style: this.styles.panel }, [
        R('h4', {}, 'Define your shortcuts'),
        R('p', {}, shortcutsConfigDescription),
        R(ShortcutsConfig, {
          shortcuts: this.state.shortcuts,
          onChangeShortcut: this.handleChangeShortcut,
          onPauseGame: this.handlePauseGame
        })
      ]),
      R('div', { style: this.styles.panel }, [
        R('h4', {}, 'Move the red box around'),
        R('p', {}, gameBoardDescription),
        R(GameBoard, { boxPosition: this.state.boxPosition })
      ])
    ])
  }
}

class ShortcutsConfig extends React.Component {
  render() {
    return R('div', {}, [
      R(ShortcutSetter, {
        dir: 'up',
        shortcut: this.props.shortcuts['up'],
        label: 'Up',
        ariaLabel: 'Up',
        onPauseGame: this.props.onPauseGame,
        onChangeShortcut: this.props.onChangeShortcut
      }),
      R(ShortcutSetter, {
        dir: 'down',
        shortcut: this.props.shortcuts['down'],
        label: 'Down',
        ariaLabel: 'Down',
        onPauseGame: this.props.onPauseGame,
        onChangeShortcut: this.props.onChangeShortcut
      }),
      R(ShortcutSetter, {
        dir: 'left',
        shortcut: this.props.shortcuts['left'],
        label: 'Left',
        ariaLabel: 'Left',
        onPauseGame: this.props.onPauseGame,
        onChangeShortcut: this.props.onChangeShortcut
      }),
      R(ShortcutSetter, {
        dir: 'right',
        shortcut: this.props.shortcuts['right'],
        label: 'Right',
        ariaLabel: 'Right',
        onPauseGame: this.props.onPauseGame,
        onChangeShortcut: this.props.onChangeShortcut
      })
    ])
  }
}

class ShortcutSetter extends React.Component {
  constructor(props) {
    super(props)

    this.styles = {
      inputGroup: {
        maxWidth: 600
      },
      inputGroupText: {
        width: 80
      }
    }

    this.inputRef = React.createRef()

    this.handleEnterEditMode = this.handleEnterEditMode.bind(this)
    this.handleLeaveEditMode = this.handleLeaveEditMode.bind(this)
  }

  componentDidMount() {
    this.keys = new keycuts.Keys(this.inputRef.current)

    const that = this
    this.keys.watch(function(event, sequence) {
      event.preventDefault()

      if (event.type === 'keydown') {
        const shortcut = keycuts.stringifyShortcut(sequence)
        that.props.onChangeShortcut(that.props.dir, shortcut)
      }
    })
  }

  componentDidUnmount() {
    this.keys.stop()
    this.keys.reset()
  }

  handleEnterEditMode() {
    this.props.onPauseGame(true)
  }

  handleLeaveEditMode() {
    this.props.onPauseGame(false)
  }

  render() {
    return R('div', { className: 'form-group' }, [
      R('div', { className: 'input-group', style: this.styles.inputGroup }, [
        R('div', { className: 'input-group-prepend' }, [
          R(
            'span',
            {
              className: 'input-group-text',
              style: this.styles.inputGroupText
            },
            this.props.label
          )
        ]),
        R('input', {
          ref: this.inputRef,
          type: 'text',
          readonly: 1,
          className: 'form-control',
          ariaLabel: this.props.ariaLabel,
          value: this.props.shortcut,
          onFocus: this.handleEnterEditMode,
          onBlur: this.handleLeaveEditMode
        })
      ])
    ])
  }
}

class GameBoard extends React.Component {
  constructor(props) {
    super(props)

    this.styles = {
      board: {
        width: 500,
        height: 500,
        border: '10px solid black',
        display: 'grid',
        gridTemplateRows: 'repeat(11, 1fr)',
        gridTemplateColumns: 'repeat(11, 1fr)'
      },
      field: {
        backgroundColor: 'lightgrey',
        border: '1px solid darkgrey'
      },
      player: {
        backgroundColor: 'red'
      }
    }
  }

  render() {
    const pos = this.props.boxPosition

    const board = []
    for (let i = 0; i < GAME_SIZE[0]; i++) {
      for (let j = 0; j < GAME_SIZE[1]; j++) {
        let style = this.styles.field
        if (pos[0] === i && pos[1] === j) {
          style = Object.assign({}, style, this.styles.player)
        }
        board.push(R('div', { style }))
      }
    }

    return R('div', { style: this.styles.board, tabindex: 0 }, board)
  }
}

ReactDOM.render(R(Game), document.getElementById('root'))
