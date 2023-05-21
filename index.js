// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a Project Title:',
        // Handling empty entry
        validate: titleinputs => {
            if(titleinputs){
                return true;
            } else {
                console.log('Please Enter Title')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter Project Description:',
        validate: descriptioninputs => {
            if(descriptioninputs){
                return true;
            } else {
                console.log('Please Enter Description')
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter Project Installation Instructions:',
        validate: installationinputs => {
            if(installationinputs){
                return true;
            } else {
                console.log('Please Enter Installation Instruction')
                return false;
            }
        }            
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter Project Usage Information:',
        validate: usageinputs => {
            if(usageinputs){
                return true;
            } else {
                console.log('Please Enter Usage Information')
                return false;
            }
        }            
    },  
    {
        type: 'input',
        name: 'video',
        message: 'Demo Video Link Format: [![alt text]({img src})]({video-url})',     
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Demo Screenshot Link Format: ![alt text]({img src})',     
    },    
    {
        type: 'list',
        name: 'license',
        message: 'Choose Prefered Project License:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter Project Contributing Guidelines:',
        validate: contributinginputs => {
            if(contributinginputs){
                return true;
            } else {
                console.log('Please Enter Contributing Guidelines')
                return false;
            }
        }            
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter Project Testing Guidelines:',
        validate: testsinputs => {
            if(testsinputs){
                return true;
            } else {
                console.log('Please Enter Testing Guidelines')
                return false;
            }
        }    
    },
    
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: githubinputs => {
            if(githubinputs){
                return true;
            } else {
                console.log('Please Enter GitHub Username')
                return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email:',
        validate: emailinputs => {
            if(emailinputs){
                return true;
            } else {
                console.log('Please Enter Email Address')
                return false;
            }
        }            
    },
    {
        type: 'input',
        name: 'references',
        message: 'Enter References',     
    },    
];


// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md generated successfully!')
    );
  }

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeTemplate = generateReadme(answers); // Generate README content based on user answers
      writeToFile('README.md', readmeTemplate); // Write README file
    });
  }


// Creating the README Table of Content with Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateReadme(answers) {
    // Generate licensing badge
    const licenseBadge = generateLicenseBadge(answers.license);
    return `

# ${answers.title}

${licenseBadge}

## Table of Contents:
### - [Description](#description)
### - [Usage](#usage)
### - [Video Demo](#video)
### - [Screenshot Demo](#screenshot)
### - [License](#license)
### - [Contributing](#contributing)
### - [Tests](#tests)
### - [Questions](#questions)
### - [References](#references)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Demo Video
${answers.video}

## Demo Screenshot
${answers.screenshot}

## License
Three license choices namely MIT, Apache 2.0 and GNU GPL v3 are made available and a foourth choice with None if the user prefer not to make a choice of the available license choices<br><br>When a license type is chosen a badge will be included below the title, when none is chosen, line below the title will be empty.
- ${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, please contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}

## References
${answers.references}

`;
}



// Extracting License Badge
function generateLicenseBadge(license) {
    if (license === 'None') {
      return '';
    }
    return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
  }


// Function call to initialize app
init();
