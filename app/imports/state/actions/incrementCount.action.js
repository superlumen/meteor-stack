export const INCREMENT_COUNT = 'INCREMENT_COUNT'

export function incrementCount(count) {
  return {
    type: INCREMENT_COUNT,
    count,
  }
}
