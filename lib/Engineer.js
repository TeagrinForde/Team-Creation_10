const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(role, gitHub) {
        super('engineer', gitHub);
        this.role = role;
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;