import Base from 'common/Base.js';
import Validate from 'common/Validate.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['username', 'api_token'];

export default class Yo extends Base {

    constructor () {
        super();
        this.endpoint = '/yo';
    }

    post (options, callback) {
        Validate.parameters(options, REQUIRED_PARAMETERS);
        request(method, this.endpoint, options, callback);
    }

}
