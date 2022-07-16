const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Engineer Properties', () => {
        it('should return an object containing GitHub username', () => {
            const obj = new Engineer('Sally', 84, 'Sally@aol.com', 'SallyGitHub')

            expect(obj.github).toEqual('SallyGitHub');
        })        
    });
    describe('Engineer Properties', () => {
        it('should return the github username and role', () => {
            const emp = new Engineer('Frank', 33, 'Frank@aol.com', 'FrankGitHub');

            expect(emp.getGithub()).toEqual('FrankGitHub');
            expect(emp.getRole()).toEqual('Engineer');
        })
    })
})