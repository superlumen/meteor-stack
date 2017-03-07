const resourceSchema = `
  type Resource {
    title: String!
    url: String!
  }
  
  type Query {
    allResources: [Resource]
    resource(_id: ID): Resource
  }
`

export default resourceSchema