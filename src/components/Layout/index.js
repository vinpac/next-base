import React from 'react'
import PropTypes from 'prop-types'
import Style from 'next-styled-css'
import { connect } from 'react-redux'
import NavLink from 'Components/NavLink'
import s, { sheet } from './Layout.styl'

const Layout = ({ posts, children }) => {
  const categories = []
  const postsByCategory = {}
  posts.forEach(post => {
    if (!postsByCategory[post.node.category]) {
      postsByCategory[post.node.category] = [post]
      categories.push(post.node.category)
      return
    }

    postsByCategory[post.node.category].push(post)
  })

  return (
    <div className={s.layout}>
      <Style sheet={sheet} />
      <div className={s.toolbar} />
      <div className={`${s.container} container`}>
        <nav className={s.sidebar2}>
          {categories.map(category => (
            <div key={category}>
              <h4 className={s.categoryName}>{category}</h4>
              <ul className={s.postsList}>
                {postsByCategory[category].map(post => (
                  <li key={post.node.slug}>
                    <NavLink
                      href={{
                        pathname: '/post',
                        query: { slug: post.node.slug },
                      }}
                      as={`/post/${post.node.slug}`}
                      activeClassName={s.activeSidebarItem}
                      prefetch
                    >
                      <a>{post.node.title}</a>
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink href="/post" as="/post">
                    <a>Not found</a>
                  </NavLink>
                </li>
              </ul>
            </div>
          ))}
        </nav>
        <div className={s.body}>{children}</div>
      </div>
    </div>
  )
}

Layout.displayName = 'Layout'
Layout.propTypes = {
  className: PropTypes.string,
}
Layout.defaultProps = {
  className: undefined,
}

const mapStateToProps = ({ postsList }) => ({
  posts: postsList.edges,
})

export default connect(mapStateToProps)(Layout)
