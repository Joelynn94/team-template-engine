// requires 
const inquirer = require("inquirer");
const createCards = require("./lib/createCards");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerArray = [];
const engineerArray = [];
const internArray = [];

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
        }
    ])
    .then(function({ managerName, managerId, managerEmail, managerOffice }){
        const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
        managerArray.push(manager)
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
            createCards(managerArray, engineerArray, internArray);
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
        }
    ]).then(function({ engineerName, engineerId, engineerEmail, engineerGithub }) {
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        engineerArray.push(engineer);
        createTeam();
    });

}

function createIntern() {

    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the name of a intern:"
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the ID of the intern:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the email of the intern:"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the school the intern is attending:"
        }
    ]).then(function({ internName, internId, internEmail, internSchool }) {
        const intern = new Intern(internName, internId, internEmail, internSchool);
        internArray.push(intern);
        createTeam();
    });

}


