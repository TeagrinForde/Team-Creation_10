const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Manager Properties', () => {
        it('should return an object containing an office Number', () => {
            const obj = new Manager('Paul', 10, 'Paul@aol.com', 6)

            expect(obj.officeNumber).toEqual(6);
        })
    });
    describe('Manager Method', () => {
        it('should return the role method', () => {
            const emp = new Manager('Jason', 28, 'Jason@aol.com', 9);

            expect(emp.getRole()).toEqual('Manager');
        })
    })
})