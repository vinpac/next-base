import React from 'react'
import PropTypes from 'prop-types'
import withRedux from '../lib/redux'
import Link from 'next/link'

const about = ({ user }) => (
  <div>
    <Link href="/">
      <a href="">Home</a>
    </Link>
    {user ? user.name : 'NO'}
  </div>
)

about.displayName = 'about'
about.propTypes = {
  className: PropTypes.string,
}
about.defaultProps = {
  className: undefined,
}

export default withRedux(state => ({ user: state.user }))(about)
