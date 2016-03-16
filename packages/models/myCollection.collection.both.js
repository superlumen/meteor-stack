// Ensure the global App.Schemas namespace exists by instantiating an empty
// object if it does not already exist. This avoids the dependency on load order.

let MyCollection

if (App.Schemas == null) {
  App.Schemas = {}
}

App.Schemas.MyCollection = {
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
}

MyCollection = new Mongo.Collection('tags')

MyCollection.attachSchema(new SimpleSchema([App.Schemas.Tag, App.Schemas.Meta]))
