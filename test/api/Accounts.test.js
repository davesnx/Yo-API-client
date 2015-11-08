import JustYo from '../../src/JustYo.js';
import Accounts from '../../src/api/Accounts';
import Base from '../../src/api/common/Base';
import should from 'should';
import { assert, expect } from 'chai';

import fixtures from './common/fixtures/fixture'

describe('Accounts', () => {

    let yo;
    let accounts;
    const API_TOKEN = "a1b650c9-ec43-4eff-90ca-51a4937b2407";
    const GOOD_PARAMETERS = {
        'username': 'admin'
    };
    const WRONG_PARAMETERS = {
        'userlola': 1
    };

    beforeEach(() => {
        yo = new JustYo(API_TOKEN);
        accounts = new Accounts(yo);
    });

    afterEach(() => {
        yo = null;
    });

    describe('#constructor', () => {
        it('should be a Accounts instance', () => {
            (accounts instanceof Accounts).should.be.exactly(true);
        });

        it('should be a child of Base', () => {
            (accounts instanceof Base).should.be.exactly(true);
        });

        it('should recive Accounts endpoint', () => {
            (accounts).should.eql(yo.accounts);
        });
    });

    describe('#post', () => {
        describe('should call the validation of the parameters', () => {
            it('and fail with wrong parameters', () => {
                // expect(() => {
                //  accounts.post(WRONG_PARAMETERS);
                // }).to.throw(Error);
            });

            it('and success with correct parameters', () => {
                // accounts.post(GOOD_PARAMETERS).then((result) => {
                //    (result).should.eql(fixtures.Accounts);
                // });
            });
        });
    });

});
