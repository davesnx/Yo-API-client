import Valid from '../../../src/api/common/Valid';
import { assert, expect } from 'chai';
import should from 'should';

describe('Valid', () => {

    let VALID_PARAMS;
    let BAD_OPTIONS;
    let GOOD_OPTIONS;

    beforeEach(() => {
        VALID_PARAMS = ['api_token', 'username'];
        BAD_OPTIONS = {api_token:'a', lola:'c'};
        GOOD_OPTIONS = {api_token:'3495', username:'davesnx'};
    });

    it('true should be true', function() {
        true.should.be.a.Boolean;
        should('abc').be.a.String();
    });

    describe('#parameters', () => {
        describe('if the params match with the options', () => {
            it('should be true', () => {
                should(Valid.parameters(GOOD_OPTIONS, VALID_PARAMS)).be.true;
            });
        });
        describe('if the params not match with the options', () => {
            it('should throw an error', () => {
                Valid.parameters.bind(null, BAD_OPTIONS, VALID_PARAMS).should.throw();
            });
        });
    });

    describe('#isString', () => {
        describe('if the param is a String', () => {
            it('should not throw an TypeError', () => {
                should(Valid.isString('lola')).be.true;
            });
        });
        describe('if the param isn\'t a String', () => {
            it('should throw an TypeError', () => {
                Valid.isString.bind(null, 2).should.throw();
            });
        });
    });

    describe('#isNumber', () => {
        describe('if the param is a Number', () => {
            it('should not throw an TypeError', () => {
                should(Valid.isNumber(1)).be.true;
            });
        });
        describe('if the param isn\'t a Number', () => {
            it('should throw an TypeError', () => {
                Valid.isNumber.bind(null, 'lola').should.throw();
            });
        });
    });
});
