/* eslint-disable import/prefer-default-export */
import graphql from 'Lib/graphql'
import { createAction } from 'redux-handy'

export const findPosts = createAction('FIND_POSTS', (_, { prevent, getState }) => {
  const {
    postsList: { fetched },
  } = getState()

  if (fetched) {
    return prevent()
  }

  return graphql(`
    query listPosts {
      listPosts(first: 15) {
        edges {
          node {
            slug
            title
            category
            body
          }
        }
      }
    }
  `)
})
