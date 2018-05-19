import React from 'react'
import PropTypes from 'prop-types'

class Collapse extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: undefined,
  }

  state = {
    collapsed: true,
    style: this.props.collapsed ? { height: '0', overflow: 'hidden' } : undefined,
  }

  componentWillReceiveProps({ collapsed }) {
    if (collapsed !== !!this.props.collapsed) {
      this.toggle()
    }
  }

  toggle = () => {
    clearTimeout(this.timeout)

    let timeout
    let startState
    let nextState

    if (this.state.collapsed) {
      timeout = 350
      startState = {
        collapsed: false,
        style: {
          overflow: 'hidden',
          boxShadow: 'none',
          height: this.container.clientHeight,
        },
      }
      nextState = { style: undefined }
    } else {
      timeout = 20
      startState = {
        collapsed: true,
        style: {
          overflow: 'hidden',
          boxShadow: 'none',
          height: this.container.clientHeight,
        },
      }
      nextState = {
        style: {
          overflow: 'hidden',
          height: 0,
          boxShadow: 'none',
        },
      }
    }

    this.setState(startState, () => {
      this.timeout = setTimeout(() => this.setState(nextState), timeout)
    })
  }

  collapse = () => {
    if (this.state.collapsed) {
      this.toggle()
    }
  }

  show = () => this.state.collapsed && this.toggle()
  hide = () => !this.state.collapsed && this.toggle()

  render() {
    const { collapsed, children, containerClassName, ...props } = this.props
    const { style } = this.state

    return (
      <div {...props} style={style}>
        <div
          ref={container => {
            this.container = container
          }}
          className={containerClassName}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default Collapse
