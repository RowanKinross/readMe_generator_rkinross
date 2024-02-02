const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer
  .prompt([
    {
  //Title (#) 
    // ask for title
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },

  //## Description
    // [Project name] is an [application, project, etc] that...
    // The [application, project, etc] takes...
    // Users can...
    // The project makes use of...(tools, languages, strategies)
    {
      type: 'input',
      message: 'What is the name of the project?',
      name: 'projectName',
    },
    {
      type: 'rawlist',
      message: 'Which of these best describes the project:',
      name: 'projectType',
      choices: ['project', 'application', 'web-application', 'tool', 'game', 'product'],
      default: [0]
    },
    {
      type: 'input',
      message: 'Complete this sentence to explain the outcome of the project: The projects takes...',
      name: 'projectTakes'
    }
  ])
  //response is just a parameter, you could use 'banana' instead

.then((response) => {
const fs = require('fs');
const fileName = `${response.name}.txt`

fs.appendFile(fileName, 
  `Name: ${response.name}\n 
  Languages:${response.languages}\n 
  Preferred Communication:${response.preferredLanguage}\n`, 
(err) =>
  err ? console.error(err) : console.log('data logged')
  );
 }
);
// array of questions for user
const questions = [



  
  //## Installations
    // How do you install the application?
    //default n/a

  //## Usage
    // Use a series of prompts i.e "Upon opening the (what best describes the project - project, application, page, repository, terminal), the user is "

  //## Demo
    //link to screencapture or gif of demo
    //default n/a

  //## License (list options - allow to select one only)
    //find from github

  //## Contributors
    // github? yes or no > github name
    //default n/a

  //## Tests
    // Short description on testing
    //default n/a

  //## Questions
    //Enter github username
    //enter email

];

// function to write README file
function writeToFile(fileName, data) {

//Title (#) 

// Sections:
// if any left blank, put n/a
//## Description
    // [Project name] is an [application, project, etc] that...
      //Capitalise project name
    // The [application, project, etc] takes...
    // Users can...
    // The project makes use of...(tools, languages, strategies)
  
  //## Table of contents:
    //installation, usage, demo, license, contributing, tests, questions (installation instructions, usage information, contribution guidelines, and test instructions)
    //table of contents clickable to that part of the readMe
  
  //## Installations

  //## Usage

  //## Demo

  //## License

  //## Contributors
    //github names if they exist + github profiles
    //else names

  //## Tests

  //## Questions
    //some sort of description of how to reach them with additional questions
    // username - ${username}
    // profile - https://github.com/${username}
    // + email

    //Once the readme is generated it is recommended to add a demo and link to a deployed application or where a user can find the product where appropriate
}

// function to initialize program
function init() {
}

// function call to initialize program
init();
