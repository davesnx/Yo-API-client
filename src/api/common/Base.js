import request from 'request-promise';

export default class Base {

    constructor() {}

    throwError(err) {
        const error = err.error;
        return this.handleError(error.code, error.type, error.message);
    }

    handleError(code = '', type = 'Error ', message = 'Server error') {
        return new Error(`${code} (${type}) - ${message}`);
    }

    request(method = 'GET', url = '', params = {}) {
        let self = this;
        return new Promise(
            (resolve, reject) => {

                let options = {
                    method: method,
                    uri: `${self.yo.url}${url}`,
                    json: true
                }

                switch (method) {
                    case 'GET':
                        options.qs = {
                            username: params.username,
                            api_token: self.yo.apiToken
                        }
                    break;

                    case 'POST':
                        options.body = params;
                    break;
                }

                request(options)
                    .then(function(res) {
                        resolve(res);
                    })
                    .catch(function(err) {
                        reject(self.throwError(err));
                    });
            }
        )
    }

}
