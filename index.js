// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title if your project/README",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of this README?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for this project?",
    name: "install",
  },
  {
    type: "input",
    message: "What are the usage directions/information for this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contributing guidelines?",
    name: "contribute",
  },
  {
    type: "input",
    message: "What are the test instructions for this project?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "Which license would you like to use?",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "ISC License",
      "Creative Commons Zero v1.0 Universal",
      "The Unliscense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then((data) => {
    const { title: title } = data;
    const { description: description } = data;
    const { install: install } = data;
    const { usage: usage } = data;
    const { contribute: contribute } = data;
    const { test: test } = data;
    const { license: license } = data;

    const README = ` # ${title}
        
        ## Description

        ${description}

        ## Table of Contents
        
        ## Installation

        ${install}

        ## Usage

        ${usage}

        ## Contribution Guidelines

        ${contribute}

        ## Tests

        ${test}

        ## License

        ${license}
        `;
    fs.writeFile("READMEexample.md", README, (err, data) => {
      err ? console.log(err) : console.log("Success!");
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
