import React from 'react'
import PropTypes from 'prop-types'
import Meta from 'Components/Meta'
import Toolbar from 'Components/Toolbar'

const AboutPage = ({ className }) => (
  <div>
    <Toolbar />
    <Meta title="Sobre" />
    <div className="container next-toolbar">
      <div className="ratio mb-4 mt-3">
        <div className="ratio-fill" style={{ paddingTop: '50%' }} />
        <div className="ratio-body rounded bg-primary p-5 tc-white ta-center">
          <h1 className="display-1">Home</h1>
        </div>
      </div>
      <div className="card">
        <div className="p-2 card-item" />
        <div className="p-2 card-item" />
      </div>
    </div>
  </div>
)

AboutPage.displayName = 'AboutPage'
AboutPage.propTypes = {
  className: PropTypes.string,
}
AboutPage.defaultProps = {
  className: undefined,
}

export default AboutPage
