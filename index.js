// requires 
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const jest = require("jest");
const fs = require("fs");
const writeFileSync = util.promisify(fs.writeFile);

const promptManager = () => {

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
        {
            type: "list",
            name: "numberOfEngineers",
            message: "Enter how many Engineers you would like to add",
            choices: [1, 2, 3, 4]
        }
    ])
    .then(function({ numberOfEngineers }){

    })
}

promptManager();
