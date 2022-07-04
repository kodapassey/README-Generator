function generateMarkdown(data) {
  return `
  <h1 align = 'center'>${data.projectTitle} 👋</h1>

  #Description
  ${data.description}

  #Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  #Installation
  💾 ${data.installation}
  
  ## Usage
  💻 ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 

  ## Contributing
  👪 ${data.contributing}

  ## Tests
  ✏️ ${data.tests}

  ## Questions
  ✋ ${data.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
`;
}

module.exports = generateMarkdown;
