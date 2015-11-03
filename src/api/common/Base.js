import request from 'request-promise';

export default class Base {

    constructor(yo) {
        this.yo = yo;
    }

    throwError(err) {
        const error = err.error;
        return this.handleError(error.code, error.type, error.message);
    }

    handleError(code = '', type = 'Error ', message = 'Server error') {
        return new Error(`${code} (${type}) - ${message}`);
    }

    request(method = 'GET', url = '', params = {}) {
        return new Promise(
            (resolve, reject) => {

                let options = {
                    method: method,
                    uri: `${this.yo.url}${url}`,
                    json: true
                };

                switch (method) {
                    case 'GET':
                        options.qs = {
                            username: params.username,
                            api_token: this.yo.apiToken
                        };
                    break;

                    case 'POST':
                        options.body = params;
                    break;
                }

                request(options)
                    .then(function(res) {
                        resolve(null, res.body)
                    })
                    .catch(function(err) {
                        reject(this.throwError(err));
                    });
            }
        )

        /*
        params.auth_token = this.yo.apiToken;

        const xhr = request[method.toLowerCase()] + `${this.yo.url}${url}`;
        console.log(xhr);
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
        }); */
    }

}
