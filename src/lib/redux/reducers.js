import { combineReducers } from 'redux'

// Reducers
import user from './user/userReducer'
import postsList from './post/postsListReducer'

export default combineReducers({ user, postsList })
