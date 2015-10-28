import Base from 'common/Base.js';
import Validate from 'common/Validate.js';

const method = 'GET';
const REQUIRED_PARAMETERS = ['api_token', 'username'];

export default class CheckUsername extends Base {

    constructor () {
        super();
        this.endpoint = '/check_username';
    }

    get (options, callback) {
        Validate.parameters(options, REQUIRED_PARAMETERS);
        request(method, this.endpoint, options, callback);
    }

}
