import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'GET';
const REQUIRED_PARAMETERS = ['username'];

export default class CheckUsername extends Base {

    constructor() {
        super();
        this.endpoint = 'check_username';
    }

    get(parameters) {
        Valid.parameters(parameters, REQUIRED_PARAMETERS, true);
        return super.request(method, this.endpoint, parameters);
    }

}
