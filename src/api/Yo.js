import Base from 'common/Base.js';

export default class Yo extends Base {

    constructor () {
        super();
        this.endpoint = '/yo'
    }

    post (options, callback) {
        const method = 'POST';
        request(method, this.endpoint, options, callback);
    }

}

