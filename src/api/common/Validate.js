import _ from 'lodash';

export default class Validate {

    constructor() {}

    parameters (options = {}, validation = []) {
        _.each(validation, function(val) {
            if (options[val]) {
                throw new Error(`Missing ${value} parameter`);
            }
        })
    }

    isString (param = '') {
        if (_.isString(param)) {
            throw new Error(`${param} should be a string`);
        } 
    }

    isNumber (param) {
        if (_.isNumber(param)) {
            throw new Error(`${param} should be a number`);
        }
    }

}
