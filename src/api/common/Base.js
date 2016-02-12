import request from 'request-promise'

class Base {

  constructor (yo) {
    this.yo = yo
  }

  throwError (err) {
    const error = err.error
    return this.handleError(error.code, error.type, error.message)
  }

  handleError (code = '', type = 'Error ', message = 'Server error') {
    return new Error(`${code} (${type}) - ${message}`)
  }

  request (method = 'GET', url = '', params = {}) {
    const options = {
      method: method,
      uri: `${this.yo.url}${url}`,
      json: true
    }

    switch (method) {
      case 'GET':
        options.qs = {
          username: params.username,
          api_token: params.apiToken
        }
        break

      case 'POST':
        options.body = params
        break
    }

    return request(options)
  }

}

export default Base
