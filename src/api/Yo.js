import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'POST';
const REQUIRED_PARAMETERS = ['username'];

export default class Yo extends Base {

    constructor(yo) {
        super(yo);
        this.endpoint = 'yo';
    }

    post(parameters) {
        Valid.parameters(parameters, REQUIRED_PARAMETERS, true);
        return super.request(method, this.endpoint, parameters);
    }

}
