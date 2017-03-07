const schema = [`
  type User {
    _id: ID!
    emails: [Email] 
   profile: Profile
   name: String
  }
 
  type Email {
    address: String
    verified: Boolean
  }

  type Profile {
    firstName: String
    lastName: String
    type: String
    occupation: [String]
    abstract: String
  }
 
  
  type Query {
    allResources: [String] 
  }

  scalar Date

  schema {
    query: Query
  }
`]

export const typeDefs = [schema]
