import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import { loadSchema, getSchema } from 'graphql-loader'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { initAccounts } from 'meteor/nicolaslopezj:apollo-accounts'
import OpticsAgent from 'optics-agent'

initAccounts({})

loadSchema({ typeDefs, resolvers })

const executableSchema = makeExecutableSchema(getSchema())

OpticsAgent.instrumentSchema(executableSchema)

createApolloServer((req) => ({
  schema: executableSchema,
  context: {
    opticsContext: OpticsAgent.context(req)
  }
}), {
  configServer: (graphQLServer) => {
    graphQLServer.use('/graphql', OpticsAgent.middleware())
  }
})