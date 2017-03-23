import { REHYDRATE } from 'redux-persist/constants'

const reducer = function(state = false, action) {
  const { type } = action
  if (type === REHYDRATE) {
    return true
  }

  return state
}

export default reducer
