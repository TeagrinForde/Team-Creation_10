//packages needed for this application
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const fs = require('fs');
console.log(process.argv);

inquirer
  .prompt([
    {
        type: 'input',
        message: "Enter your name: ",
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter your employee ID number: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your office number: ',
        name: 'officeNumber',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter the name of your university: ',
        name: 'school',
    },
    {
        type: 'list',
        message: 'Team member role: ',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'Employee'],
        default: 'Manager'
    }
])
.then((response) => {
    fs.writeFile('./dist/index.html'. JSON.stringify(response), error => {
        if(error) {
            console.log(error)
        } else {
            console.log('Wonder Team Activate!')
        }
    })
})

//Function to initialize app
const employee = new Employee();

//Function call to initialize app
employee.getRole();