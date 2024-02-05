const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");


// function to initialize program
function init() {

inquirer
  .prompt([
    {
      //Description of the program
      type: 'input',
      message: 'Hello and welcome to your personal readme file creator. Please answer as fully as you can and make sure to use full-stops at the end of your answers. Great, lets get started!',
      name: 'getStarted',
    }, 


    {
      //Project Status
      type: 'input',
      message: 'Project status:',
      name: 'projectStatus',
    }, 


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
    {
      type: 'input',
      message: 'link to deployed page (if appropriate): (else, leave blank)',
      name: 'deployed',
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
        default: '',
      }, 
      {
        type: 'input',
        message: 'What else does the user then interact with? Take them through a step by step',
        name: 'usageDescr',
        default: '',
      }, 
    

    //## Demo
      //link to screencapture or gif of demo
      {
        type: 'input',
        message: 'Link to screencapture or demo - the relative path from where demo gif/image is located in the repo: (if nothing, leave blank)',
        name: 'demo',
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
    {
      type: 'input',
      message: 'A short description on the testing: (If none, leave blank)',
      name: 'test',
      default: 'n/a',
    },
    
    
    //## Credits
    {
    type: 'input',
    message: 'Credits:',
    name: 'credits',
    }, 
    

    //## Questions
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
  ])
  



.then((response) => {
const fs = require('fs');
fs.writeFile('./output/README.md',
`# ${response.title}

## Project status <a name = "status"></a>
${response.projectStatus}

## Description <a name = "description"></a>
${response.title} is ${response.projectType} that ${response.projectDoes} The aim of the project was to ${response.projectAim} Users can ${response.projectUse} The project makes use of ${response.projectTools} <br>
${response.deployed}
  
## Table of contents: 
[Project Status](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#status) <br>
[Description](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#description) <br>
[Installation](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#installation) <br>
[Usage](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#usage) <br>
[Demo](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#demo) <br>
[License](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#license) <br>
[Contributors](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#contributors) <br>
[Credits](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#credits) <br>
[Tests](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#tests) <br>
[Questions](https://github.com/${response.github}/${response.repo}?tab=readme-ov-file#questions)
  
## Installation <a name = "installation"></a>
${response.install}

## Usage <a name = "usage"></a>
Upon opening the project, the user is ${response.usage} ${response.usageDescr}

## Demo <a name = "demo"></a>
![demo](${response.demo})

## License <a name = "license"></a>
${response.license}

## Contributors <a name = "contributors"></a>
${response.contrib}

## Credits <a name = "credits"></a>
${response.credits}

## Tests <a name = "tests"></a>
${response.test}

## Questions <a name = "questions"></a>
If you have any further questions you can find me here:
GitHub - https://github.com/${response.github}
Email - ${response.email} `, 
  
  (err) => err ? console.error(err) : console.log('Success! We recommended that you open the generated readme (in the output folder) to check for any spelling or gramatical errors with a spell-checker, before posting to your repo.')
);
})
}

// function call to initialize program
init();
