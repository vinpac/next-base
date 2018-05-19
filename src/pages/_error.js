import React from 'react'

const ErrorPage = () => (
  <div className="ta-center viewSpacer">
    <h1>Page not found</h1>
  </div>
)

ErrorPage.displayName = 'ErrorPage'
ErrorPage.getInitialProps = () => ({
  statusCode: 404,
})

export default ErrorPage
