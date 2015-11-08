import JustYo from '../../src/JustYo.js';
import YoAll from '../../src/api/YoAll';
import Base from '../../src/api/common/Base';
import should from 'should';
import { assert, expect } from 'chai';

import fixtures from './common/fixtures/fixture'

describe('YoAll', () => {

    let yo;
    let yo_all;
    const API_TOKEN = "a1b650c9-ec43-4eff-90ca-51a4937b2407";
    const GOOD_PARAMETERS = {
        'username': 'admin'
    };
    const WRONG_PARAMETERS = {
        'userlola': 1
    };

    beforeEach(() => {
        yo = new JustYo(API_TOKEN);
        yo_all = new YoAll(yo);
    });

    afterEach(() => {
        yo = null;
    });

    describe('#constructor', () => {
        it('should be a YoAll instance', () => {
            (yo_all instanceof YoAll).should.be.exactly(true);
        });

        it('should be a child of Base', () => {
            (yo_all instanceof Base).should.be.exactly(true);
        });

        it('should recive YoAll endpoint', () => {
            (yo_all).should.eql(yo.yo_all);
        });
    });

});
