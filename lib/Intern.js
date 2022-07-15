const Employee = require('./Employee');

class Intern extends Employee {
    constructor(role, school) {
        super('intern', school);
        this.role = role;
        this.school = school;
    }
}

module.exports = Intern;