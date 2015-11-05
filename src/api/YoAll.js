import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'POST';
const REQUIRED_PARAMETERS = [];

export default class YoAll extends Base {

    constructor() {
        super();
        this.endpoint = 'yoall';
    }

    post(options) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        return super.request(method, this.endpoint, options);
    }

}
