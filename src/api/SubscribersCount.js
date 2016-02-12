import Base from './common/Base.js'
import Valid from './common/Valid.js'

const method = 'GET'
const REQUIRED_PARAMETERS = []

class SubscribersCount extends Base {

  constructor (yo) {
    super(yo)
    this.endpoint = 'subscribers_count'
  }

  get (parameters) {
    Valid.parameters(parameters, REQUIRED_PARAMETERS, true)
    return super.request(method, this.endpoint, parameters)
  }

}

export default SubscribersCount
