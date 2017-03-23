// This file controls the shape of the root state tree

import { combineReducers } from 'redux';

import scenes from './scenes/scenes.reducer';
import services from './services/services.reducer';

const reducer = combineReducers({
  scenes,
  services,
})

export default reducer
