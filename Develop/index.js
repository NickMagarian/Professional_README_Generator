// TODO: Include packages needed for this application
// Packages needed
const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
// Array listing questions
const questions = [
    {
        type:"input",
        message: "Repository name",
        name: "title",
    },
    {
        type: "input",
        message: "Description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Instructions & examples for your project use.",
        name: "usage",
    },
    {
        type: "input",
        message: "How users can contribute to your project.",
        name: "contribute",
    },
    {
        type: "input",
        message: "Tests for your project.",
        name: "test",
    },
    {
        type: "list",
        message: "Select a license for your project.",
        name: "license",
        choices: ['MIT', 'APACHE', 'BSD', 'None'],
    },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your E-mail: ",
        name: "email",
    }
];

// TODO: Create a function to write README file
// Writes response to file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, generateMarkdown(data))
        console.log("Your Project's README is complete!")
    } catch {
        console.log("OOPS! ERROR!")
    }
}

// TODO: Create a function to initialize app
// Initializes app
function init() {
    inquirer.prompt(questions).then(function (response){
        console.log(response);
        writeToFile(`./assets/${response.title}.md`,response);
    });
}

// Function call to initialize app
init();
