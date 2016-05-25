import React from "react"
import MyComponent from "../components/MyComponent"
import { Accounts, STATES } from "meteor/std:accounts-semantic"

export default class AppPage extends React.Component {
  render() {
    return (
      <div>
        <Accounts.ui.LoginForm state={STATES.SIGN_IN}/>
        <h1>App Page</h1>
        <MyComponent/>
      </div>
    )
  }
}