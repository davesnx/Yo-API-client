'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var Valid = (function () {
    function Valid() {
        _classCallCheck(this, Valid);
    }

    _createClass(Valid, null, [{
        key: 'parameters',
        value: function parameters(options) {
            var validation = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
            var requiredOptions = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

            if (!options && requiredOptions) {
                throw new Error('Impossible do the request without parameters');
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = validation[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var val = _step.value;

                    if (!options[val]) {
                        throw new Error('Missing ' + val + ' parameter');
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'isString',
        value: function isString() {
            var param = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            if (!_lodash2['default'].isString(param)) {
                throw new TypeError(param + ' should be a string');
            }
        }
    }, {
        key: 'isNumber',
        value: function isNumber(param) {
            if (!_lodash2['default'].isNumber(param)) {
                throw new TypeError(param + ' should be a number');
            }
        }
    }]);

    return Valid;
})();

exports['default'] = Valid;
module.exports = exports['default'];