import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'GET';
const REQUIRED_PARAMETERS = ['api_token'];

export default class SubscribersCount extends Base {

    constructor () {
        super();
        this.endpoint = '/subscribers_count';
    }

    get (options, callback) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        super.request(method, this.endpoint, options, callback);
    }

}
