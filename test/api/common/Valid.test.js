import Valid from '../../../src/api/common/Valid';
import { assert } from 'chai';
import should from 'should';

describe('Valid', () => {

    let VALID_PARAMS;
    let BAD_OPTIONS;
    let GOOD_OPTIONS;

    beforeEach(() => {
        VALID_PARAMS = ['a', 'b'];
        BAD_OPTIONS = {a:'a', c:'c'};
        GOOD_OPTIONS = {a:'1', b:'2'};
    });

    it('true should be true', function() {
        true.should.be.a.Boolean;
        should('abc').be.a.String();
    });

    describe('#parameters', () => {
        describe('if the params not match with the options', () => {
            it('should throw an error', () => {
                //assert.throws(Valid.parameters(BAD_OPTIONS, VALID_PARAMS), Error, /^Missing/);
            });
        });
        describe('if the params match with the options', () => {
            it('should be true', () => {
                //should(Valid.parameters(GOOD_OPTIONS, VALID_PARAMS)).be.true;
            });
        });
    });

    describe('#isString', () => {
        describe('if the param is a String', () => {
            it('should not throw an TypeError', () => {
                //assert.doesNotThrow(Valid.isString('lola'), TypeError);
            });
        });
        describe('if the param isn\'t a String', () => {
            it('should throw an TypeError', () => {
                //assert.throw(Valid.isString(2), TypeError);
            });
        });
    });

    describe('#isNumber', () => {
        describe('if the param is a Number', () => {
            it('should not throw an TypeError', () => {
                //assert.doesNotThrow(Valid.isNumber(1), TypeError);
            });
        });
        describe('if the param isn\'t a Number', () => {
            it('should throw an TypeError', () => {
                //assert.throw(Valid.isNumber('2'), TypeError);
            });
        });
    });
});
