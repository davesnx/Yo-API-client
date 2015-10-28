import Base from './api/common/Base';

class JustYo {

    constructor (apiToken) {
        this.url = 'https://api.justyo.co/';
        this.apiToken = apiToken;
        console.log(this.apiToken);
        console.log(this.url);
    }
}

new JustYo('1293013123');
