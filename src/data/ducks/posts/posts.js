import isEqual from 'fast-deep-equal'
import { createAction, createReducer, handleAction } from 'redux-handy'
import { fetchJSON } from 'Lib/fetch'

export const fetchPostsIfNeeded = createAction(
  'POSTS_FETCH',
  (meta, { setMeta, getState, prevent }) => {
    const { posts: currentState } = getState()
    setMeta(meta)

    if (currentState.fetched && isEqual(currentState.meta, meta)) {
      return prevent()
    }

    return fetchJSON('https://www.reddit.com/r/reactjs.json').then(json =>
      json.data.children.map(child => child.data),
    )
  },
)

export default createReducer(
  {
    [fetchPostsIfNeeded]: (state, action) => handleAction(action, 'nodes'),
  },
  { nodes: [] },
)
