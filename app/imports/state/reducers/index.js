/*
 This file controls the shape of the default state.

 It imports all the various reducers and combines them using the
 `combineReducers()` API from redux.
 */

import * as ActionTypes from '../actions'

import apolloClient from '/imports/apollo/apollo.client.js'

import { combineReducers } from 'redux'

import count from './count.reducer.js'

const rootReducer = combineReducers({
  count,
  apollo: apolloClient.reducer()
})

export default rootReducer
