import _ from 'lodash'

// The path to this part of the state tree
import path from '../selectorPath'

export const countSelector = (state) => {
  return _.get(state, path + 'counter')
}
