import Base from 'common/Base.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['api_token'];

export default class YoAll extends Base {

    constructor () {
        super();
        this.endpoint = '/yoall'
    }

    post (options, callback) {
        Validate.parameters(options, REQUIRED_PARAMETERS);
        request(method, this.endpoint, options, callback);
    }

}
