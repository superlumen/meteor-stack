import _ from 'lodash'

import shared from '/imports/shared/config/shared.config'
import local from './local.config'

// Deeply merge the local config over the shared config, so local takes
// precendence
export default _.merge({}, shared, local)
