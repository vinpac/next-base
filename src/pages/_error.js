import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'next-styled-css'

const ErrorPage = ({ className }) => (
  <div className="ta-center viewSpacer">
    <h1>Page not found</h1>
  </div>
)

ErrorPage.displayName = 'ErrorPage'
ErrorPage.propTypes = {
  className: PropTypes.string,
}
ErrorPage.defaultProps = {
  className: undefined,
}
ErrorPage.getInitialProps = () => ({
  statusCode: 404,
})

export default withStyles(ErrorPage)
