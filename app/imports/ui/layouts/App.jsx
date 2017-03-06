import React from "react"
import { Provider } from "react-redux"
import Header from "/imports/ui/layouts/Header"
import store from "/imports/state/store"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <div className="ui container">
            {this.props.children}
          </div>
        </div>
      </Provider>
    )
  }
}
