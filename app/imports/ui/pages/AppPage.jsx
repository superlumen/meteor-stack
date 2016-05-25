import React from 'react'
import MyComponent from '../components/MyComponent'

export default class AppPage extends React.Component {
  render() {
    return (
      <div>
        <h1>App Page</h1>
       <MyComponent/>
      </div>
    )
  }
}