import Accounts from './api/Accounts';
import CheckUsername from './api/CheckUsername';
import SubscribersCount from './api/SubscribersCount';
import Yo from './api/Yo';
import YoAll from './api/YoAll';

class JustYo {

    constructor (apiToken) {
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

    addEndpoints (endpoints) {
        for (let name in endpoints) {
            let end = endpoints[name];
            this[name] = new end;
        }
    }

}

let yo = new JustYo("a1b650c9-ec43-4eff-90ca-51a4937b2407");
yo.accounts.post({
    'username': 'davesnx'
});
