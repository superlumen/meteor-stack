import {Resources} from '/imports/api/resource/resource.collection'

const ensembleResolver = {
  Query: {
    allResources() {
      return Resources.find().fetch()
    },
    resource(_, args) {
      return Resources.findOne(args._id)
    }
  }
}

export default ensembleResolver