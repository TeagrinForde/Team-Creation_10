const inquirer = require('inquirer');
const engineer = require('./Engineer');
const manager = require('./Manager');
const intern = require('./Intern');

//1. Prompt: Team Manager's Name, id, email and office number
//2. Prompt: Engineer, Intern or DONE
//If Engineer: Name, id, email, and GitHub username BACK TO PROMPT 2
//If Intern: Name, id, email, and school BACK TO PROMPT 2
//If Done: Exit application and generate HTML
class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email; //accessible as link
        this.role = role;
    }
    //asks for a role and assigns specific questions based on role
    getRole(role) {
        if(role == manager) {
            console.log('Manager');            
        } else if(role == engineer) {
            console.log('Engineer'); //link username to profile            
        } else if(role == intern) {
            console.log('Intern');
        }
    }
}

module.exports = Employee;
//html file generated