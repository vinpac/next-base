import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, className, ...props }) => (
  <span className={`fa fa-${name} ${className}`} {...props} />
)
Icon.displayName = 'Icon'
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.defaultProps = {
  className: '',
}

export default Icon
