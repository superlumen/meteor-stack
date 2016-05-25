import React from 'react'
import Header from '/imports/ui/layouts/Header'

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="ui container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
