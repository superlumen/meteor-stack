import { Tasks } from '/imports/api/tasks/tasks.collection.js'

export const schema = [`
  type Task {
    _id: String
    title: String
  }
  
  type Query {
    tasks: [Task]
  }
  
  schema {
    query: Query
  } 
`]

export const resolvers = {
  Query: {
    async tasks(root, args) {
      return await Tasks.find().fetch()
    }
  }
}