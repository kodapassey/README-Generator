// TODO: Include packages needed for this application
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
return inquirer.prompt([

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
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
