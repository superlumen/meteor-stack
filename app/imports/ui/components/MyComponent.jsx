import React from "react"
import { connect } from "react-redux"
import { incrementCount } from "/imports/state/actions"

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        MyComponent
        <div>
          <div>
            <div>
              {this.props.count}
            </div>
          </div>
          <div>
               onClick={this.props.increment.bind(null, 1)}>
            + 1
          </div>
        </div>
      </div>
    )
  }
}

function mapStatesToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (count) => {
      dispatch(incrementCount(count))
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(MyComponent)