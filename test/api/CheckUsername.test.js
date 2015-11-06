import JustYo from '../../src/JustYo.js';
import CheckUsername from '../../src/api/CheckUsername';
import Base from '../../src/api/common/Base';
import should from 'should';
import { assert, expect } from 'chai';
// import { assert, expect } from 'chai-as-promised';
import fixtures from './common/fixtures/fixture'

describe('CheckUsername', () => {

    let yo;
    let check_username;
    const API_TOKEN = "a1b650c9-ec43-4eff-90ca-51a4937b2407";
    const GOOD_PARAMETERS = {
        'username': 'admin'
    };
    const WRONG_PARAMETERS = {
        'userlola': 1
    };

    beforeEach(() => {
        yo = new JustYo(API_TOKEN);
        check_username = new CheckUsername(yo);
    });

    afterEach(() => {
        yo = null;
    });

    describe('#constructor', () => {
        it('should be a CheckUsername instance', () => {
            (check_username instanceof CheckUsername).should.be.exactly(true);
        });

        it('should be a child of Base', () => {
            (check_username instanceof Base).should.be.exactly(true);
        });

        it('should recive CheckUsername endpoint', () => {
            (check_username).should.eql(yo.check_username);
        });
    });

    describe('#get', () => {
        describe('should call the validation of the parameters', () => {
            it('and fail with wrong parameters', () => {
                //  check_username.get(WRONG_PARAMETERS)
                //      .then((result) => {
                //          expect(result).to.not.be(true);
                //  });
            });

            it('and success with correct parameters', () => {
                check_username.get(GOOD_PARAMETERS)
                    .then((result) => {
                      expect(result).to.be(true);
                  });
            });
        });

        describe('should call the request', () => {
            it('and fail with wrong request', () => {
                throw Error;
            });

            it('and success with good request', () => {
                throw Error;
            });

            it('and catch with good request', () => {
                throw Error;
            });
        });
    });

});
