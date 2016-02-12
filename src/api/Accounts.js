import Base from './common/Base.js'
import Valid from './common/Valid.js'

const method = 'POST'
const REQUIRED_PARAMETERS = ['username']

class Accounts extends Base {

  constructor (yo) {
    super(yo)
    this.endpoint = 'accounts'
  }

  post (parameters) {
    Valid.parameters(parameters, REQUIRED_PARAMETERS, true)
    return super.request(method, this.endpoint, parameters)
  }

}

export default Accounts
