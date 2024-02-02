const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
//Title (#) 
  // ask for title

// Sections:
  //( if any left blank, put "n/a" )

  //## Description
    // repo name
    // [Project name] is an [application, project, etc] that...
    // The [application, project, etc] takes...
    // Users can...
    // The project makes use of...(tools, languages, strategies)
  
  //## Installations
    // How do you install the application?

  //## Usage
    // Use a series of prompts i.e "Upon opening the (what best describes the project - project, application, page, repository, terminal), the user is "

  //## Demo
    //link to screencapture or gif of demo

  //## License (list options - allow to select one only)
    //find from github

  //## Contributors
    // github? yes or no > github name

  //## Tests
    // Short description on testing

  //## Questions
    //Enter github username
    //enter email

];

// function to write README file
function writeToFile(fileName, data) {

//Title (#) 

// Sections:
  //## Description
    // [Project name] is an [application, project, etc] that...
    // The [application, project, etc] takes...
    // Users can...
    // The project makes use of...(tools, languages, strategies)
    //link to repo - https://github.com/${username}/${repo}
  
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
