import { merge } from 'lodash'

const rootResolvers = {

  Date: {
    __parseValue (value) {
      return new Date(value)
    },
    __serialize (value) {
      return value.getTime()
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }
}

export const resolvers = merge(
  rootResolvers,
//  Add more modular resolvers
)

