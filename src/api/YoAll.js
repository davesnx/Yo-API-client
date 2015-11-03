import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['api_token'];

export default class YoAll extends Base {

    constructor(apiToken) {
        super(apiToken);
        this.endpoint = 'yoall';
    }

    post(options) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        return super.request(method, this.endpoint, options);
    }

}
