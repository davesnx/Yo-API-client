import Accounts from './api/Accounts';
import CheckUsername from './api/CheckUsername';
import SubscribersCount from './api/SubscribersCount';
import Yo from './api/Yo';
import YoAll from './api/YoAll';

export default class JustYo {

    constructor(apiToken) {
        this.url = 'https://api.justyo.co/';
        this.apiToken = apiToken;
        this.addEndpoints({
            'accounts': Accounts,
            'check_username': CheckUsername,
            'subscribers_count': SubscribersCount,
            'yo': Yo,
            'yo_all': YoAll
        })
    }

    addEndpoints(endpoints) {
        for (let name in endpoints) {
            this[name] = new endpoints[name](this);
        }
    }

}

/*

let yo = new JustYo("a1b650c9-ec43-4eff-90ca-51a4937b2407");

yo.check_username.get({
    'username': 'davesnx',
}).then(function(body) {
    console.log("THEN?");
    console.log(body);
}).catch(function(err) {
    console.log(err);
}); */
