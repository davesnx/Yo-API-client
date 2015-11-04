import JustYo from '../../src/JustYo.js';
import CheckUsername from '../../src/api/CheckUsername';
import Base from '../../src/api/common/Base';
import should from 'should';

describe('CheckUsername', () => {

    let yo;
    let check_username;
    const API_TOKEN = "a1b650c9-ec43-4eff-90ca-51a4937b2407";

    beforeEach(() => {
        yo = new JustYo(API_TOKEN);
        check_username = new CheckUsername(API_TOKEN);
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
            // the same as yo.check_username:
            // (check_username).should.be.exactly(yo.check_username);
            throw Error;
        });
    });

    describe('#get', () => {
        describe('should call the validation of the parameters', () => {
            it('and fail with wrong parameters', () => {
                throw Error;
            });

            it('and success with correct parameters', () => {
                throw Error;
            });
        })

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
        })
    })

});
