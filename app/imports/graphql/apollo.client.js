import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({ uri: '/graphql' })

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('Meteor.loginToken')
    req.options.headers.authorization = token || null
    next()
  },
}])

const client = new ApolloClient({ networkInterface })

export default client