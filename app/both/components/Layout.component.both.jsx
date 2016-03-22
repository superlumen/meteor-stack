import React from 'react'

import Header from './Header.component.both.jsx'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.content}
      </div>
    )
  }
}
