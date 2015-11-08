'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _apiAccounts = require('./api/Accounts');

var _apiAccounts2 = _interopRequireDefault(_apiAccounts);

var _apiCheckUsername = require('./api/CheckUsername');

var _apiCheckUsername2 = _interopRequireDefault(_apiCheckUsername);

var _apiSubscribersCount = require('./api/SubscribersCount');

var _apiSubscribersCount2 = _interopRequireDefault(_apiSubscribersCount);

var _apiYo = require('./api/Yo');

var _apiYo2 = _interopRequireDefault(_apiYo);

var _apiYoAll = require('./api/YoAll');

var _apiYoAll2 = _interopRequireDefault(_apiYoAll);

var JustYo = (function () {
    function JustYo(apiToken) {
        _classCallCheck(this, JustYo);

        this.url = 'https://api.justyo.co/';
        this.apiToken = apiToken;
        this.addEndpoints({
            'accounts': _apiAccounts2['default'],
            'check_username': _apiCheckUsername2['default'],
            'subscribers_count': _apiSubscribersCount2['default'],
            'yo': _apiYo2['default'],
            'yo_all': _apiYoAll2['default']
        });
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

    _createClass(JustYo, [{
        key: 'addEndpoints',
        value: function addEndpoints(endpoints) {
            for (var _name in endpoints) {
                this[_name] = new endpoints[_name](this);
            }
        }
    }]);

    return JustYo;
})();

exports['default'] = JustYo;
module.exports = exports['default'];