import * as ActionTypes from './counter.actions'

const empty = 0

const reducer = function (state = empty, action) {
  const { type, payload } = action

  if (type === ActionTypes.INCREMENT) {
    const { count } = payload
    return state + count
  }

  return state
}

export default reducer
