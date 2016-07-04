import React from "react"
import { Provider } from "react-redux"
import Header from "/imports/ui/layouts/Header"
import store from "/imports/state/store"

import { ApolloProvider } from 'react-apollo'

import apolloClient from '/imports/apollo/apollo.client.js'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={apolloClient}>
        <div>
          <Header/>
          <div className="ui container">
            {this.props.children}
          </div>
        </div>
      </ApolloProvider>
    )
  }
}
