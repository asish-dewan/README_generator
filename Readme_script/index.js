const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({ name, location, github, linkedin }) =>


inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    
    ])
    .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
    );
    });
