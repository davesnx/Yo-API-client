import Base from 'common/Base.js';

export default class YoAll extends Base {

    constructor () {
        super();
        this.endpoint = '/yoall'
    }

    post (options, callback) {
        const method = 'POST';
        request(method, this.endpoint, options, callback);
    }

}

