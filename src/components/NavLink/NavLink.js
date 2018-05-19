import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import Link from 'next/link'

function defaultIsActive(router, href) {
  return href && href.pathname ? router.pathname === href.patname : href === router.pathname
}

const NavLink = ({
  router,
  href,
  isActive: isActiveFn,
  className: baseClassName,
  activeClassName,
  children,
  ...props
}) => {
  const isActive = isActiveFn ? isActiveFn(router, href) : defaultIsActive(router, href)
  let className = baseClassName
  if (isActive && activeClassName) {
    className = className ? `${className} ${activeClassName}` : activeClassName
  }

  return (
    <Link href={href}>
      <a {...props} className={className}>
        {children}
      </a>
    </Link>
  )
}

NavLink.displayName = 'NavLink'
NavLink.propTypes = {
  router: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  isActive: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
}
NavLink.defaultProps = {
  isActive: undefined,
  className: '',
  children: null,
  activeClassName: undefined,
}

export default withRouter(NavLink)
