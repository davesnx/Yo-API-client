import Base from './common/Base.js'
import Valid from './common/Valid.js'

const method = 'POST'
const REQUIRED_PARAMETERS = []

class YoAll extends Base {

  constructor (yo) {
    super(yo)
    this.endpoint = 'yoall'
  }

  post (parameters) {
    Valid.parameters(parameters, REQUIRED_PARAMETERS, true)
    return super.request(method, this.endpoint, parameters)
  }

}

export default YoAll
