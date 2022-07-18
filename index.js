//packages needed for this application
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const fs = require('fs');
const { isNumberObject } = require('util/types');
console.log(process.argv);

const team = [];
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
            const manager = new Manager(
                response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber,
            );
            team.push(manager);
            nextEmployee();
        });
}
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
        if(answer == engineer) {
            addEngineer();
        } else if(answer == intern) {
            addIntern();
        } else if(answer == employee) {
            addEmployee();
        } else {
            buildTeam();
        }
}

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
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub,
            );
            team.push(engineer);
            nextEmployee();
        });
}

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
                response.internName,
                response.internId,
                response.internEmail,
                response.internGithub,
            );
            team.push(intern);
            buildTeam();
            nextEmployee();
        });
}

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
                response.employeeName,
                response.employeeId,
                response.employeeEmail,
                response.employeeGithub,
            );
            team.push(employee);
            buildTeam();
            nextEmployee();
        });
}

function buildTeam() {
    if(!fs.existsSync(DIST_DIR)) { //must create directory since it doesn't exist yet
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(team), 'utf-8'); //put info into directory as html
}