//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const { isNumberObject } = require('util/types');
console.log(process.argv);

let team = [];
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter the Manager's name: ",
                name: 'name',
            },
            {
                type: 'input',
                message: "Manager's employee ID number: ",
                name: 'id',
                validate: (input) => {
                    if (isNaN(input)) {
                        return 'Please include only numeric values.';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "Manager's email address: ",
                name: 'email',
            },
            {
                type: 'input',
                message: "Manager's office number: ",
                name: 'officeNumber',
                validate: (input) => {
                    if (isNaN(input)) {
                        return 'Please include only numeric values.';
                    }
                    return true;
                }
            }
        ])
        .then((response) => {
            let manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.officeNumber,
            );
            team.push(manager);
            nextEmployee();
        });
};
addManager();

//prompt for choosing next employee or submitting team
function nextEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Select another employee role to build your team',
                name: 'role',
                choices: ['Engineer', 'Intern', 'Employee', 'DONE building team'],
            }
        ])
        .then((answer) => {
            if(answer.role === 'Engineer') {
                addEngineer();
            } else if(answer.role === 'Intern') {
                addIntern();
            } else if(answer.role === 'Employee') {
                addEmployee();
            } else {
                console.log('Teamwork makes the dream work!')
                buildTeam();
            }
        })        
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter Engineer's name: ",
                name: 'name',
            },
            {
                type: 'input',
                message: "Engineer's employee ID number: ",
                name: 'id',
            },
            {
                type: 'input',
                message: "Engineer's email address: ",
                name: 'email',
            },
            {
                type: 'input',
                message: "Engineer's GitHub username: ",
                name: 'github',
            }
        ])
        .then((response) => {
            const engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github,
            );
            team.push(engineer);
            nextEmployee();
        });
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter Intern's name: ",
                name: 'name',
            },
            {
                type: 'input',
                message: "Intern's employee ID number: ",
                name: 'id',
            },
            {
                type: 'input',
                message: "Intern's email address: ",
                name: 'email',
            },
            {
                type: 'input',
                message: "Intern's school/university: ",
                name: 'school',
            }
        ])
        .then((response) => {
            const intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school,
            );
            team.push(intern);
            buildTeam();
            nextEmployee();
        });
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter Employee's name: ",
                name: 'name',
            },
            {
                type: 'input',
                message: "Employee's ID number: ",
                name: 'id',
            },
            {
                type: 'input',
                message: "Employee's email address: ",
                name: 'email',
            }
        ])
        .then((response) => {
            const employee = new Employee(
                response.name,
                response.id,
                response.email,
            );
            team.push(employee);
            buildTeam();
            nextEmployee();
        });
};

function buildTeam() {
    // if(!fs.existsSync(DIST_DIR)) { //must create directory since it doesn't exist yet
    //     fs.mkdirSync(DIST_DIR);
    // }
    // fs.writeFileSync(distPath, render(team), 'utf-8'); //put info into directory as html
    console.log(team);
};