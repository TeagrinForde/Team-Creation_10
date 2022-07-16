//1. Prompt: Team Manager's Name, id, email and office number
//2. Prompt: Engineer, Intern or DONE
//If Engineer: Name, id, email, and GitHub username BACK TO PROMPT 2
//If Intern: Name, id, email, and school BACK TO PROMPT 2
//If Done: Exit application and generate HTML
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email; //accessible as link
    }
    //asks for a role and assigns specific questions based on role
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
//html file generated