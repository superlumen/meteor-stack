Package.describe({
  name: 'project:model',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The model package for the project',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use('coffeescript')

  // The SimpleSchema / collection2 / autoform stack is loaded through base
  api.use([
    'superlumen:base'
  ])

  // Export base package to the whole project
  api.imply([
    'superlumen:base'
  ])

  api.export('MyCollection')
  api.addFiles('myCollection.collection.both.coffee')

})
