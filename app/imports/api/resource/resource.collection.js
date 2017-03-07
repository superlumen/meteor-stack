import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

class ResourceCollection extends Mongo.Collection {
  //     Override livecycle methods here.
}

const Resources = new ResourceCollection('resources')

export { Resources }
