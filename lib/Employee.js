const inquirer = require('inquirer');
const engineer = require('./Engineer');
const manager = require('./Manager');
const intern = require('./Intern');


class EmployeeForm {
    constructor(){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    //asks for a role and assigns specific questions based on role
    getRole(role) {
        if(role == employee){
            console.log('Employee');
        } else if(role == manager) {
            this.officeNumber = officeNumber;
            console.log('Manager');
        } else if(role == engineer) {
            this.gitHub = gitHub;
            this.getGithub();            
        } else if(role == intern) {
            this.school = school;
            getSchool();
        }
    }
}