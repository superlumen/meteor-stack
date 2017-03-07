import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '/imports/state/reducers'

// Create an array of middlewares so we can conditionally add the logger
let middlewares = [thunk]

// In dev, add the logger
if (Meteor.isDevelopment) {
  const logger = createLogger()
  middlewares.push(logger)
}

const Store = createStore(rootReducer, {}, applyMiddleware(...middlewares))

export default Store
