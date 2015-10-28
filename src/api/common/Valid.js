import _ from 'lodash';

export default class Valid {

    static parameters (options = {}, validation = []) {
        _.each(validation, function(val) {
            if (!options[val]) {
                throw new Error(`Missing ${val} parameter`);
            }
        })
    }

    static isString (param = '') {
        console.log(typeof param);
        console.log(_.isString(param));
        if (!_.isString(param)) {
            throw new TypeError(`${param} should be a string`);
        }
    }

    static isNumber (param) {
        if (!_.isNumber(param)) {
            throw new TypeError(`${param} should be a number`);
        }
    }

}
