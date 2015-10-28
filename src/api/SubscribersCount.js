import Base from 'common/Base.js';
import Validate from 'common/Validate.js';

const method = 'GET';
const REQUIRED_PARAMETERS = ['api_token'];

export default class SubscribersCount extends Base {

    constructor () {
        super();
        this.endpoint = '/subscribers_count';
    }

    get (options, callback) {
        Validate.parameters(options, REQUIRED_PARAMETERS);
        request(method, this.endpoint, options, callback);
    }

}
