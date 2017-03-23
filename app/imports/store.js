import _ from "lodash";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
// We don't always need redux persistence
// import { persistStore, autoRehydrate } from 'redux-persist'

import rootReducer from "./root.reducer";

import config from "/imports/config";

// import analytics from './analytics.middleware'

// Create an array of middlewares so we can conditionally add the logger
let middlewares = [thunk];

// In dev, add the logger
if (_.get(config, "isDev", false)) {
  const logger = createLogger();
  middlewares.push(logger);
}

const Store = createStore(
  rootReducer,
  {},
  compose(
    /*
  autoRehydrate({
    // This logs the rehydration process which is helpful during debuggin
    log: true,
    // This replaces the initial state with the rehydrated state in its
    // entirety. There's some complication with regards to blacklisting nested
    // keys in redux-persist.
    stateReconciler: (state, inboundState) => inboundState,
  }),
  */
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// persistStore(Store, {
//   // Use localforge which in turn uses
//   storage: AsyncStorage,
//   // Only update the save state every 1s at most
//   debounce: 1000,
//   // Ignore these state keys
//   //blacklist,
// })

export default Store;
