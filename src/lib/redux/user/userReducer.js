import { createReducer, handleAction } from 'redux-handy'
import { login, editUser } from './userActions'

export default createReducer(
  {
    [login]: (state, action) => action.payload,
    [editUser]: (state, action) => {
      if (action.payload && !action.error) {
        return { ...state, ...action.payload }
      }

      return state
    },
  },
  null,
)
