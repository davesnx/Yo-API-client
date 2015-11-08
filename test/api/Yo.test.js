import JustYo from '../../src/JustYo';
import Yo from '../../src/api/Yo';
import Base from '../../src/api/common/Base';
import should from 'should';
import { assert, expect } from 'chai';

import fixtures from './common/fixtures/fixture'

describe('JustYo', () => {

    let justyo;
    let yo;
    const API_TOKEN = "a1b650c9-ec43-4eff-90ca-51a4937b2407";

    beforeEach(() => {
        justyo = new JustYo(API_TOKEN);
        yo = new Yo(justyo);
    });

    afterEach(() => {
        justyo = null;
    });

    describe('#constructor', () => {
        it('should be a JustYo instance', () => {
            (yo instanceof Yo).should.be.exactly(true);
        });

        it('should be a child of Base', () => {
            (yo instanceof Base).should.be.exactly(true);
        });

        it('should recive JustYo endpoint', () => {
            (yo).should.eql(justyo.yo);
        });
    });


    ('#post', () => {
        describe('should call the validation of the parameters', () => {
            it('and fail with wrong parameters', () => {
                expect(() => {
                  yo.post(WRONG_PARAMETERS);
                }).to.throw(Error);
            });

            it('and success with correct parameters', () => {
                yo.post(GOOD_PARAMETERS).then((result) => {
                    (result).should.eql(fixtures.Yo);
                });
            });
        });
    });

});
