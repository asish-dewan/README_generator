const inquirer = require("inquirer");
const fs = require("fs");

const MarkdownGenerator = require ('./util/Markdown');

// Inquirer questions

const questions = [
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
        name: "title",
        message: "What is your project title?",
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    },
    {
        type: "input",
        name: "description",
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
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
    },
    },

    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
    },
    },

    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    },
    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?",
        // Validate if the user has provided a value
        validate: (value) => {
            if(value) {return true}
                else {return 'Please enter a valid input'}
        },
    }
    ];

    // Function to write README file

    const writeToFile = (fileName, data) => {

        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log (err)
            }
            else {
                console.log ("Success!")
            }
        })
    }


    // Initialise application

    function init () {
        inquirer.prompt(questions)
        .then(function(data) {
            writeToFile ("README.md", MarkdownGenerator(data));
        })
    }

    // Call init function

    init();

