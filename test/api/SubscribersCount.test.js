import JustYo from '../../src/JustYo.js';
import SubscribersCount from '../../src/api/SubscribersCount';
import Base from '../../src/api/common/Base';
import should from 'should';
import { assert, expect } from 'chai';

import fixtures from './common/fixtures/fixture'

describe('SubscribersCount', () => {

    let yo;
    let subscribers_count;
    const API_TOKEN = "a1b650c9-ec43-4eff-90ca-51a4937b2407";
    const GOOD_PARAMETERS = {
        'username': 'admin'
    };
    const WRONG_PARAMETERS = {};

    beforeEach(() => {
        yo = new JustYo(API_TOKEN);
        subscribers_count = new SubscribersCount(yo);
    });

    afterEach(() => {
        yo = null;
    });

    describe('#constructor', () => {
        it('should be a SubscribersCount instance', () => {
            (subscribers_count instanceof SubscribersCount).should.be.exactly(true);
        });

        it('should be a child of Base', () => {
            (subscribers_count instanceof Base).should.be.exactly(true);
        });

        it('should recive SubscribersCount endpoint', () => {
            (subscribers_count).should.eql(yo.subscribers_count);
        });
    });
    
});
