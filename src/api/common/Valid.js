import { each, isString, isNumber } from 'lodash'

class Valid {

  static parameters (options, validation = [], requiredOptions = false) {
    if (!options && requiredOptions) {
      throw new Error(`Impossible do the request without parameters`)
    }
    each(validation, function (val, i) {
      if (!options[val]) {
        throw new Error(`Missing ${val} parameter`)
      }
    })
  }

  static isString (param = '') {
    if (!isString(param)) {
      throw new TypeError(`${param} should be a string`)
    }
  }

  static isNumber (param) {
    if (!isNumber(param)) {
      throw new TypeError(`${param} should be a number`)
    }
  }

}

export default Valid
