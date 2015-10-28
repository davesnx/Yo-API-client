import Base from 'common/Base.js';
import Validate from 'common/Validate.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['username'];

export default class Accounts extends Base {

    constructor () {
        super();
        this.endpoint = '/accounts';
    }

    post (options, callback) {
        Validate.parameters(options, REQUIRED_PARAMETERS);
        request(method, this.endpoint, options, callback);
    }

}
