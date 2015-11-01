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

    request(method = 'GET', url = '', params = {}) {
        return new Promise((resolve, reject) => {
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
                    resolve(null, res.body);
                } else {
                    reject(this.throwError(res.body));
                }
            });
        })
    }

}
