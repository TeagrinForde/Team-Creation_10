const Employee = require('../lib/Employee');

describe('Employee',() => {
    describe('Employee Properties', () => {
        it('should return an object containing name, id, and email', () => {
            const obj = new Employee('George', 56, 'Teagrin@aol.com');

            expect(obj.name).toEqual('George');
            expect(obj.id).toEqual(56);
            expect(obj.email).toEqual('Teagrin@aol.com');
        });
    });
    describe('Employee Methods', () => {
        it('should return an object containing name, id, and email', () => {
            const emp = new Employee ('Jessica', 18, 'Teagrin@gmail.com');

            expect(emp.getName()).toEqual('Jessica');
            expect(emp.getId()).toEqual(18);
            expect(emp.getEmail()).toEqual('Teagrin@gmail.com');
            expect(emp.getRole()).toEqual('Employee');
        })
    })
})