//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const { isNumberObject } = require('util/types');
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
            const manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.officeNumber,
            );
            team.push(manager);
            nextEmployee();
        });
};

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
            if (answer.role === 'Engineer') {
                addEngineer();
            } else if (answer.role === 'Intern') {
                addIntern();
            } else if (answer.role === 'Employee') {
                addEmployee();
            } else {
                console.log('Teamwork makes the dream work!');
                console.log(team);
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
            nextEmployee();
        });
};

// function importCards(role) {
//     switch (role.getRole()) {
//     case 'Engineer':
//         return `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
//         <div class="card-header d-flex justify-content-between align-items-center">
//         Engineer <img
//         src="https://cdn.onlinewebfonts.com/svg/img_533250.png"
//         alt="Engineer" type="image/png" style="width:50px;height:50px;"> 
//         </div>
//         <h5 class="card-text m-2">${role.name}</h5>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">${role.id}</li>
//             <li class="list-group-item">${role.email}</li>
//             <li class="list-group-item">${role.github}</li>
//           </ul>
//         </div>`;
//         case 'Intern':
//         return `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
//         <div class="card-header d-flex justify-content-between align-items-center">
//           Intern <img
//           src="https://history.missouri.edu/sites/default/files/nav-icons/noun_internship_516824_1a1a1a.png"
//           alt="Intern" type="image/png" style="width:50px;height:50px;"> 
//         </div>
//         <h5 class="card-text m-2">${role.name}</h5>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${role.id}</li>
//           <li class="list-group-item">${role.email}</li>
//           <li class="list-group-item">${role.school}</li>
//         </ul>
//         </div>`;
//         case 'Employee':
//         return `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
//         <div class="card-header d-flex justify-content-between align-items-center">
//             Employee <img
//             src="https://cdn.onlinewebfonts.com/svg/img_233258.png"
//             alt="Employee" type="image/png" style="width:50px;height:50px;"> 
//         </div>
//         <h5 class="card-text m-2">${team.name}</h5>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">${team.id}</li>
//             <li class="list-group-item">${team.email}</li>
//         </ul>
//       </div>`;
//     };
// };

function generateHTML(manager) {
    // importCards();
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <title>Generated Team</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid justify-content-center">
            <div class="container">
                <h1 class="display-4">Wonder Team, ACTIVATE!</h1>
            </div>
        </div>
    
        <div class="card-group container-fluid d-flex justify-content-between">
    
                <div class="card text-bg-info mb-3" style="max-width: 18rem;">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Manager <img
                        src="https://www.clipartkey.com/mpngs/m/65-656685_board-of-directors-management-icon-png.png"
                        alt="Manager" type="image/png" style="width:50px;height:50px;"> 
                    </div>
                    <h5 class="card-text m-2">${manager.name}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${manager.id}</li>
                        <li class="list-group-item">${manager.email}</li>
                        <li class="list-group-item">${manager.officeNumber}</li>
                    </ul>
                </div>
                {INSERT cards HERE}
    </div>
    </body>
    </html>`
};

function buildTeam() {
    fs.writeFile('./dist/index.html', generateHTML(), (err) => 
    err ? console.log(err) : console.log('Generating HTML... ')); //put info into directory as html
};

addManager();