/*
This file controls the shape of the default state.

It imports all the various reducers and combines them using the
`combineReducers()` API from redux.
*/

import * as ActionTypes from '../actions'

import { combineReducers } from 'redux'

import count from './count.reducer.js'

const rootReducer = combineReducers({
  count,
})

export default rootReducer
