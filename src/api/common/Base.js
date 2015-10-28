import request from 'superagent';

export default class Base {

    constructor(yo) {
        return this.yo;
    }

    throwError(err) {
        const error = err.error;
        return this.handleError(error.code, error.type, error.message);
    }

    handleError(code = '', type = 'Error ', message = 'Server error') {
        return new Error(`${code} (${type}) - ${message}`);
    }

    request(method = 'GET', url = '', params = {}, callback) {
        params.auth_token = this.yo.api_token;

        const xhr = request[method.toLowerCase()] + `${this.yo.host}${url}`;

        if (method === 'POST') {
            xhr.type('form');
            xhr.send(params);
        } else {
            xhr.query(params);
        }

        xhr.end((err, res) => {
            if (err) {
                throw err;
            }
            if (res.ok) {
                callback(null, res.body);
            } else {
                callback(this.throwError(res.body));
            }
        });
    }

}
