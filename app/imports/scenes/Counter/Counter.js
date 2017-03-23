import React from "react"
import { connect } from "react-redux"

import { incrementCount } from "./counter.actions"
import { countSelector } from "./counter.selectors"

const Counter = function(props) {
  const { count, incrementCount } = props

  return (
    <div className="ui segment">
      Counter
      <div className="ui stats">
        <div className="ui statistic">
          <div className="value">
            {count}
          </div>
        </div>
        <div
          className="ui primary button"
          onClick={incrementCount.bind(this, 1)}
        >
          + 1
        </div>
        <div
          className="ui primary button"
          onClick={incrementCount.bind(this, 2)}
        >
          + 2
        </div>
      </div>
    </div>
  )
}

function mapStatesToProps(state) {
  return {
    count: countSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCount: (count) => dispatch(incrementCount(count)),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Counter)
