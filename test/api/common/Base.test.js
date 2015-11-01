import JustYo from '../../../src/JustYo';
import Base from '../../../src/api/common/Base';
import should from 'should';

describe('Base', () => {

    let base;
    let justyo;

    beforeEach(() => {
        base = new Base();
    });

    afterEach(() => {
        justyo = null;
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
