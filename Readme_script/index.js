const inquirer = require("inquirer");
const fs = require("fs");

//const generateREADME = ({ username, location, github, linkedin }) =>

// Inquirer questions

inquirer
    .prompt([
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    },
    {
        type: "input",
        name: "project",
        message: "What is your project title?",
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    },
    {
        type: "input",
        name: "project-description",
        message: "Please write a brief description of your project",
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    },
    
    {
        type: "list",
        name: "license",
        message: "Please select a license type",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None' ],
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        default: 

    },

    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to run tests?"
    },

    {
        type: "input",
        name: "dependencies",
        message: "What does the user need to know about using the repo?"
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    },
    {
        type: "input",
        name: "dependencies",
        message: "What does the user need to know about contributing to the repo?"
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    }
    ])