import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['api_token'];

export default class YoAll extends Base {

    constructor () {
        super();
        this.endpoint = '/yoall'
    }

    post (options, callback) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        super.request(method, this.endpoint, options, callback);
    }

}
