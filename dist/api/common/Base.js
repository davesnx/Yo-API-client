'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var Base = (function () {
    function Base(yo) {
        _classCallCheck(this, Base);

        this.yo = yo;
    }

    _createClass(Base, [{
        key: 'throwError',
        value: function throwError(err) {
            var error = err.error;
            return this.handleError(error.code, error.type, error.message);
        }
    }, {
        key: 'handleError',
        value: function handleError() {
            var code = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var type = arguments.length <= 1 || arguments[1] === undefined ? 'Error ' : arguments[1];
            var message = arguments.length <= 2 || arguments[2] === undefined ? 'Server error' : arguments[2];

            return new Error(code + ' (' + type + ') - ' + message);
        }
    }, {
        key: 'request',
        value: function request() {
            var method = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];
            var url = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
            var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

            var options = {
                method: method,
                uri: '' + this.yo.url + url,
                json: true
            };

            switch (method) {
                case 'GET':
                    options.qs = {
                        username: params.username,
                        api_token: params.apiToken
                    };
                    break;

                case 'POST':
                    options.body = params;
                    break;
            }

            return (0, _requestPromise2['default'])(options);
        }
    }]);

    return Base;
})();

exports['default'] = Base;
module.exports = exports['default'];