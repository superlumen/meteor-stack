import { Meteor } from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

class TaskCollection extends Mongo.Collection {
  insert(task, callback) {
    return super.insert(task, callback)
  }
}

export const Tasks = new TaskCollection('tasks')
