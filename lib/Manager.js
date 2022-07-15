const Employee = require('./Employee');

class Manager extends Employee {
    constructor(role, officeNumber) {
        super('manager', officeNumber);
        this.role = role;
        this.officeNumber = officeNumber;
    }
}


module.exports = Manager;