import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'GET';
const REQUIRED_PARAMETERS = [];

export default class SubscribersCount extends Base {

    constructor() {
        super();
        this.endpoint = 'subscribers_count';
    }

    get(options) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        return super.request(method, this.endpoint, options);
    }

}
