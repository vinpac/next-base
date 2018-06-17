import NextApp, { Container } from 'next/app'
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { withStyles } from 'next-styled-css'
import withRedux from '../redux'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { Component, store, pageProps } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

const mapStateToProps = ({ user }) => ({ authToken: user.token })
export default withStyles(withRedux(mapStateToProps)(App))
