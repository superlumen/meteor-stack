import React from 'react'
import { connect } from 'react-apollo'
import gql from 'graphql-tag'

IndexPage = ({tasksData} ) => {
  const tasks = tasksData.tasks
  return (
    <div className="ui segment">
      <div className="ui header">
        Index Page

        {_.map(tasks, (task)=>{
          return (
            <div className="" key={task._id} >{task.title}</div>
          )
        })}

      </div>
    </div>
  )
}


function mapQueriesToProps() {
  return {
    tasksData: {
      query: gql`
        {
          tasks {
            _id
            title
            }
        }
      `
    }

  }
}

const IndexData = connect({
  mapQueriesToProps
})(IndexPage)

export default IndexData