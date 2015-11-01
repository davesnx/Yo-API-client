import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'GET';
const REQUIRED_PARAMETERS = ['api_token', 'username'];

export default class CheckUsername extends Base {

    constructor () {
        super();
        this.endpoint = '/check_username';
    }

    get (options, callback) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        super.request(method, this.endpoint, options, callback);
    }

}
