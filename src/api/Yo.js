import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['username', 'api_token'];

export default class Yo extends Base {

    constructor () {
        super();
        this.endpoint = '/yo';
    }

    post (options, callback) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        super.request(method, this.endpoint, options, callback);
    }

}
