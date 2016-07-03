import React from 'react'
import { connect } from 'react-apollo'
import gql from 'graphql-tag'

IndexPage = () => {
  return (
    <div className="ui segment">
      <div className="ui header">
        Index Page
        {this.p}
      </div>
    </div>
  )
}

function mapQueriesToProps({ ownProps, state }) {
  return {
    tasks:
       gql`{ 
          tasks {
            title
        }
      }`

  }
}

const IndexData = connect({
  mapQueriesToProps
})(IndexPage)

export default IndexData