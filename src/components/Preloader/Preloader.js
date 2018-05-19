import React from 'react'
import PropTypes from 'prop-types'
import Style from 'next-styled-css'
import s, { sheet } from './Preloader.styl'

const Preloader = ({ size, itemClassName, className }) => (
  <div className={`${s.component} ${className} ${size ? s[`size-${size}`] : ''}`}>
    <Style sheet={sheet} />
    <span className={`${s.item} ${s.item1} ${itemClassName}`} />
    <span className={`${s.item} ${s.item2} ${itemClassName}`} />
    <span className={`${s.item} ${s.item3} ${itemClassName}`} />
  </div>
)

Preloader.displayName = 'Preloader'

Preloader.propTypes = {
  itemClassName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
}

Preloader.defaultProps = {
  itemClassName: '',
  className: '',
  size: undefined,
}

export default Preloader
