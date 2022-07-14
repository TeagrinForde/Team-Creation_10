const inquirer = require('inquirer');
const engineer = require('./Engineer');
const manager = require('./Manager');
const intern = require('./Intern');

//1. Prompt: Team Manager's Name, id, email and office number
//2. Prompt: Engineer, Intern or DONE
//If Engineer: Name, id, email, and GitHub username BACK TO PROMPT 2
//If Intern: Name, id, email, and school BACK TO PROMPT 2
//If Done: Exit application and generate HTML
class EmployeeForm {
    constructor(){
        this.name = name;
        this.id = id;
        this.email = email; //accessible as link
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
            this.getGithub(); //link username to profile            
        } else if(role == intern) {
            this.school = school;
            getSchool();
        }
    }
}
//html file generated