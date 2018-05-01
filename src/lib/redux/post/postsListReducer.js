import { createReducer, handleAction } from 'redux-handy'
import { findPosts } from './postActions'

export default createReducer(
  {
    [findPosts]: (state, action) => handleAction(action, ({ listPosts }) => listPosts),
  },
  { edges: [] },
)
