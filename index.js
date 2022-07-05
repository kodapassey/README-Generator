// TODO: Include packages needed for this application
// all the packages I need for this project
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
// function with inquirer prompt and array of questions
function promptQuestions() {
    return inquirer.prompt([

        // project title question that is required
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },

        // project description question that is required
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your project (Required)',
            validate: projectDesc => {
                if (projectDesc) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },

        // installation process, not required
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process if any'
        },

        // project usage question that is required
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this project? (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('You need to enter the usage of this project');
                    return false;
                }
            }
        },

        // license question, not required
        {
            type: 'list',
            name: 'license',
            message: 'Choose the correct license for this project',
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

        // contributors question that is required
        {
            type: 'input',
            name: 'contributors',
            message: 'Who are the contributors of this project? (Required)',
            validate: contributors => {
                if (contributors) {
                    return true;
                } else {
                    console.log('You need to enter the projects contributors!');
                    return false;
                }
            }
        },

        // tests question, not required
        {
            type: 'input',
            name: 'test',
            message: 'Is there a test included?'
        },

        // any questions, question, not required
        {
            type: 'input',
            name: 'questions',
            message: 'What do I do if I have an issue?'
        },

        // users github username that is required
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your github username (Required)',
            validate: userName => {
                if (userName) {
                    return true;
                } else {
                    console.log('You need to enter your GitHub username!');
                    return false;
                }
            }
        },

        // users email for contact, required
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You need to enter your email!');
                    return false;
                }
            }
        }
    ]);
}


// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptQuestions();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}

init();