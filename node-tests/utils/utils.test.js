const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('Basic', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44);
            expect(typeof res).toBe('number')
        });

        it('should square numbers', () => {
            let res = utils.square(11);
            expect(res).toBe(121);
            expect(typeof res).toBe('number');
        });

        it('should set first and last names are set', () => {
            let user = { location: 'Philadelphia', age: 25 };
            let res = utils.setName(user, 'Dakshraj Sharma');
            expect(res).toHaveProperty('firstName');
            expect(res).toHaveProperty('lastName');
        });
    });

    describe('Async', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7);
                expect(typeof sum).toBe('number');
                done();
            })
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(4 * 4);
                expect(typeof square).toBe('number');
                done();
            })
        });
    });
});
// it('should expect some values', () => {
//     expect(12).toNotBe(11);
//     expect({name: 'Dex'}).toNotEqual({name: 'DexS'});
//     expect([2,3,4]).toContain(2);
//     expect({
//         name: 'DexS',
//         age: 25,
//         location: 'Pakistan'
//     }).toExclude({
//         age: 23
//     });
// });