// Example publication
// IMPORTANT: We cannot use ES6 arrow function as they don't bind 'this', so
// this.userId is not defined in this case. Use the 'old way' of defining a
// function. Hopefully this will be solved in future versions somehow.
Meteor.publish('MyCollection.private', function () {
  if (!this.userId) {
    return this.ready()
  }

  return MyCollection.find({
    createdBy: this.userId
  })
})