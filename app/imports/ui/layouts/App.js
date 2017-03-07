import React from "react"
import { Provider } from "react-redux"
import Header from "/imports/ui/layouts/Header"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
