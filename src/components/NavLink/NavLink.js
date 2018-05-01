import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const NavLink = ({ router, children, activeClassName, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || null
  if (router.asPath === props.as && activeClassName) {
    className = `${className !== null ? className : ''} ${activeClassName}`.trim()
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(NavLink)
