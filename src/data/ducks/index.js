import { combineReducers } from 'redux'

// Reducers
import user from 'Ducks/user/user'
import posts from 'Ducks/posts/posts'

export default combineReducers({ user, posts })
