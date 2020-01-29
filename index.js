// requires 
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const jest = require("jest");
const fs = require("fs");
const writeFileSync = util.promisify(fs.writeFile);


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
    .then(function(answer){
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
        buildHTML();
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
    ]).then(function(answer) {
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

