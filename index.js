// TODO: Include packages needed for this application
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
return inquirer.prompt([

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process if any: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the correct license for this project: ',
        choices: [
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Is there a test included?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What do I do if I have an issue? '
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: '
    }
])

    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
