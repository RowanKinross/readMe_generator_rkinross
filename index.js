const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");


// function to initialize program
function init() {

inquirer
  .prompt([
    {
  //Title (#) 
    // ask for title
      type: 'input',
      message: 'What is the title of the project? (Please capitalise where appropriate)',
      name: 'title',
    },


  //## Description
    // [title] is an [application, project, etc] that...
    // The [application, project, etc] takes...
    {
      type: 'rawlist',
      message: 'Which of these best describes the project:',
      name: 'projectType',
      choices: ['a project', 'an application', 'a web-application', 'a tool', 'a game', 'a product', `a document`, `a way of life`, `a new beginning`],
      default: [0]
    },
    {
      type: 'input',
      message: 'Complete this sentence to explain what the project does: The project...',
      name: 'projectDoes'
    },    
    // The aim of the project
    {
      type: 'input',
      message: 'Complete this sentence to explain aim of the project: The aim of the project was to...',
      name: 'projectAim'
    },  
    // Users can...
    {
      type: 'input',
      message: 'Complete this sentence to explain the benefit or uses: Users can',
      name: 'projectUse'
    }, 
    // The project makes use of...(tools, languages, strategies)
    {
      type: 'input',
      message: 'What tools, languages or strategies did you use?',
      name: 'projectTools'
    }, 


    //## Installations
      // How do you install the application?
    {
      type: 'input',
      message: 'How do you install the application? (if not applicable, leave blank)',
      name: 'install',
      default: 'n/a',
    }, 


    //## Usage
      // Use a series of prompts i.e "Upon opening the... the user is "
      {
        type: 'input',
        message: 'Complete the sentence: Upon opening the project, the user is...(e.g met with? prompted to? shown?)',
        name: 'usage',
        default: 'n/a',
      }, 
      {
        type: 'input',
        message: 'What else does the user then interact with? Take them through a step by step',
        name: 'usageDescr',
      }, 
    

    //## Demo
      //link to screencapture or gif of demo
      {
        type: 'input',
        message: 'Link to screencapture or demo - the relative path from where readme will be located: (if nothing, leave blank)',
        name: 'demo',
        default: 'n/a',
      },


    //## License (list options - allow to select one only)
      //find from github
      {
        type: 'rawlist',
        message: 'Which license are you using?:',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', `Eclipse Public License`, `Mozilla Public License 2.0`, `none`],
        default: 'none',
      },


    //## Contributors
    {
      type: 'input',
      message: 'gitHub name of any contributors: (if none, leave blank)',
      name: 'contrib',
      default: 'n/a',
    },


    //## Tests
      // Short description on testing
      //default n/a
    
    //## Questions
      //Enter github username
    {
      type: 'input',
      message: 'Your github username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Your repo-name:',
      name: 'repo',
    },
      //enter email
    {
      type: 'input',
      message: 'Your email:',
      name: 'email',
    }
    //Once the readme is generated it is recommended to add a demo and link to a deployed application or where a user can find the product where appropriate
  ])




.then((response) => {
const fs = require('fs');
fs.writeFile('./output/README.md',
`
# ${response.title}

## Description
  ${response.title} is an ${response.projectType} that ${response.projectDoes}. The aim of the project was to ${response.projectAim}. Users can ${response.projectUse}. The project makes use of ${response.projectTools}.
  
## Table of contents:
  [Installation](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#installation)
  [Usage](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#usage)
  [Demo](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#demo)
  [License](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#license)
  [Contributors](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#contributors)
  [Tests](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#tests)
  [Questions](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#questions)
  
## Installation

## Usage

## Demo

## License

## Contributors
    //github names if they exist + github profiles
    //else names

## Tests

## Questions
    //some sort of description of how to reach them with additional questions
    // username - ${response.github}
    // profile - https://github.com/${response.github}
    // + email



  `
  , 
  
  (err) => err ? console.error(err) : console.log('Success!')
);
})
}

// function call to initialize program
init();
