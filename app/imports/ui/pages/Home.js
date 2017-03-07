import React from "react"

export default class Home extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <h1>Home</h1>
      </div>
    )
  }
}

const style = {
  container: {
    padding: 50
  }
}
