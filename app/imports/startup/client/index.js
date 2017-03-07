import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from '/imports/graphql/apollo.client'
import store from "/imports/state/store"
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import App from '/imports/ui/layouts/App'
import Home from '/imports/ui/pages/Home'

render((
  <ApolloProvider client={client}
                  store={store}>
    <App>
      <Router history={hashHistory}>
        <Route path="/"
               component={Home}/>
      </Router>
    </App>
  </ApolloProvider>
), document.getElementById('root'))
