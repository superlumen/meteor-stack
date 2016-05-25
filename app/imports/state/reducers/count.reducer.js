import * as ActionTypes from "../actions"

const defaultCount = 0

export default function (state = defaultCount, action) {
  const { type, count } = action

  if (type === ActionTypes.INCREMENT_COUNT) {
    return state + count
  }

  return state
}
