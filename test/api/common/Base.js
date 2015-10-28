import Base from '../../../src/api/common/Base';
import sinon from 'sinon';

describe('Base', () => {

    let base;

    beforeEach(() => {
        base = new Base();
    });

    afterEach(() => {
        base = null;
    });

    it('should recive a justyo instance', () => {
        (base instanceof Base).should.be.exactly(true);
    });

    describe('#trowError', () => {
        it('should throw an error with the correct output', () => {
            const err0r = {
                error: {
                    code: "200",
                    type: "Not found",
                    message: "Error"
                }
            }

            const expectedErrorOutput = new Error(`${err0r.error.code} (${err0r.error.type}) - ${err0r.error.message}`);
            base.throwError(err0r).should.be.eql(expectedErrorOutput);
        })
    });

});
