// requires 
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const jest = require("jest");
const fs = require("fs");
const writeFileSync = util.promisify(fs.writeFile);

const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

const createManager = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter the name of a Manager:"
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the ID of the Manager:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter the email of the Manager:"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Enter the office number of the Manager:"
        },
    ])
    .then(function({ managerName, managerId, managerEmail, managerOffice }){
        const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
        const html = buildManagerHTML(managerName, managerId, managerEmail, managerOffice);

        teamMembers.push(manager);

        fs.writeFileSync("./output/team.html", html, function(err, result){
            if (err) console.log('error', err);
        })

        createTeam();
    });
}

createManager();

function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Would you like to add an Engineer or Intern?",
        choices: [
          "Engineer",
          "Intern",
          "Don't add any more team members"
        ]
      }
    ]).then(answer => {
      switch(answer.teamMember) {
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      default:
        return;
      }
    });

}

function createEngineer() {

    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the name of a engineer:"
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the ID of the engineer:"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the email of the engineer:"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the Github username of the engineer:"
        },
    ]).then(function( { engineerName, engineerId, engineerEmail, engineerGithub }) {
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        teamMembers.push(engineer);
        createTeam();
    });

}

function createIntern() {

    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the name of a Intern:"
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the ID of the Intern:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the email of the Intern:"
        },
        {
            type: "input",
            name: "internGithub",
            message: "Enter the Github username of the Intern:"
        },
    ]).then(function(answer) {
        createTeam();
    });

}

const buildInternHTML = (name, role, id, email, school) => {

    return `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-3"></i>${role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}<a href="mailto:${email}"></a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
    </div>
</div>`

};

const buildEngineerHTML = (name, role, id, email, github) => {

    return `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fas fa-user-cog mr-3"></i>${role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}<a href="mailto:${email}"></a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
        </ul>
    </div>
</div>`

};

const buildManagerHTML = (name, role, id, email, officeNumber) => {

    return `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fas fa-user-tie mr-3"></i>${role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}<a href="mailto:${email}"></a></li>
            <li class="list-group-item">Office number: ${officeNumber}</li>
        </ul>
    </div>
</div>`

}

