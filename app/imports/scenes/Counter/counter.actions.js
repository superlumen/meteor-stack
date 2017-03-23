const prefix = 'counter/'

export const INCREMENT = prefix + 'INCREMENT'

export function incrementCount(count = 1) {
  return {
    type: INCREMENT,
    payload: {
      count,
    },
  }
}
