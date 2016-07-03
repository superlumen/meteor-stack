import '/imports/startup/server/index'

import { createApolloServer } from 'meteor/apollo'
import { schema, resolvers } from '/imports/api/schema'

// Apollo server instance
createApolloServer({
  graphiql: true,
  pretty: true,
  schema,
  resolvers
})
