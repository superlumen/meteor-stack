// This file controls the shape of the services key of the state.

import { combineReducers } from 'redux'

// Rehydration needs to be installed & enabled to use this
import counter from './Counter/counter.reducer'

const reducer = combineReducers({
  counter,
})

export default reducer
