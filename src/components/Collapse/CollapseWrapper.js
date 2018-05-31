import React from 'react'
import PropTypes from 'prop-types'

export const CollapseContext = React.createContext(true)
class CollapseWrapper extends React.Component {
  static Context = CollapseContext

  static propTypes = {
    children: PropTypes.node,
    defaultCollapsed: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    defaultCollapsed: true,
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  state = {
    collapsed: this.props.defaultCollapsed,
    toggle: this.toggle, // eslint-disable-line react/no-unused-state
  }

  render() {
    return (
      <CollapseContext.Provider value={this.state}>{this.props.children}</CollapseContext.Provider>
    )
  }
}

export default CollapseWrapper
