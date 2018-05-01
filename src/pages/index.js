import React from 'react'
import Link from 'next/link'
import withRedux from 'Lib/redux'
import { findPosts } from 'Lib/redux/post/postActions'
import { withStyles } from 'next-styled-css'
import Layout from 'Components/Layout'
import s, { sheet } from './home.styl'

class HomePage extends React.Component {
  state = { count: 0 }
  render() {
    const { count } = this.state
    const { user } = this.props

    return (
      <Layout>
        <div />
        qweqwe qwewqqwew qweqwe
      </Layout>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user,
})

HomePage.getInitialProps = ({ store: { getState, dispatch } }) => findPosts()(dispatch, getState)

export default withStyles(withRedux(mapStateToProps)(HomePage))
