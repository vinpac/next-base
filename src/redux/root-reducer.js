/*
  Every file ,js in the same level will be considered a reducer
  So if you create a file under ducks/ you have to 'export default a reducer'
*/

import { combineReducers } from 'redux'
import * as ducks from './ducks' // eslint-disable-line import/no-unresolved, import/extensions

export default combineReducers(ducks)
