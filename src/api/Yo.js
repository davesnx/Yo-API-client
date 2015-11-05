import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['username'];

export default class Yo extends Base {

    constructor() {
        super();
        this.endpoint = 'yo';
    }

    post(options) {
        Valid.parameters(options, REQUIRED_PARAMETERS, true);
        return super.request(method, this.endpoint, options);
    }

}
