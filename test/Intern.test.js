const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Intern Properties', () => {
        it('should return an object containing school', () => {
            const obj = new Intern('Heather', 76, 'Heather@aol.com', 'USF')

            expect(obj.school).toEqual('USF');
        })        
    });
    describe('Intern Properties', () => {
        it('should return the school and role', () => {
            const emp = new Intern('Zarah', 11, 'Zarah@aol.com', 'KSU');

            expect(emp.getSchool()).toEqual('KSU');
            expect(emp.getRole()).toEqual('Intern');
        })
    })
})