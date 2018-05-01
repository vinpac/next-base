import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { PageNotFoundError } from 'next/router'
import { findPosts } from 'Lib/redux/post/postActions'
import Style, { withStyles } from 'next-styled-css'
import Layout from 'Components/Layout'
import Markdown from 'react-markdown'
import s, { sheet } from './Post.styl'
import withRedux from '../lib/redux'

const PostPage = ({ post }) => (
  <Layout>
    <Head>
      <title>{post.node.title} - post</title>
      <meta name="title" content={post.title} />
    </Head>
    <Style sheet={sheet} />
    <div className={s.post}>
      <h1>{post.node.title}</h1>
      <Markdown source={post.node.body} />
    </div>
  </Layout>
)

PostPage.displayName = 'PostPage'
PostPage.propTypes = {
  className: PropTypes.string,
}
PostPage.defaultProps = {
  className: undefined,
}

const mapStateToProps = ({ user, postsList }, { slug }) => ({
  user,
  post: postsList.edges.find(post => post.node.slug === slug),
})

PostPage.getInitialProps = async ({ store: { getState, dispatch }, query: { slug } }) => {
  await findPosts()(dispatch, getState, true)
  const { postsList } = getState()
  if (!postsList.edges.some(post => post.node.slug === slug)) {
    const err = new Error()
    err.code = 'ENOENT'
    throw err
  }
  return { slug }
}
export default withStyles(withRedux(mapStateToProps)(PostPage))
