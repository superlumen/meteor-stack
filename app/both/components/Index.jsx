import React from 'react'

import Header from './Header.jsx'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="ui container">
          <div className="ui segment">
            <div>This is the start page of the superlumen boilerplate.</div>
            <div>To change it edit <code>app/both/components/Index.jsx</code>
            </div>
          </div>
        </div>
      </div>
    )
  }
}