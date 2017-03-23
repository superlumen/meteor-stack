// This file controls the shape of the services key of the state.

import { combineReducers } from "redux";

// Rehydration needs to be installed & enabled to use this
// import rehydrated from './rehydrated/reducer'

const reducer = combineReducers({
  empty: (state = {}) => state
});

export default reducer;
