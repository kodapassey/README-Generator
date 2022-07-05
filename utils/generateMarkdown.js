function generateMarkdown(data) {
  return `

  // title of README
  <h1 align = 'center'>${data.projectTitle}</h1>

  // description section
  ## Description
  ${data.description}

  // table of contents section with links to other sections
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  // installation section
  ## Installation
  💾 ${data.installation}
  
  // usage section
  ## Usage
  💻 ${data.usage}

  // license section
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 

  // contributors section
  ## Contributing
  👪 ${data.contributing}

  // tests section
  ## Tests
  ✏️ ${data.tests}

  // questions section
  ## Questions
  ✋ ${data.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  _This README was generated with [README-generator](https://github.com/kodapassey/README-Generator) by [kodapassey](https://github.com/kodapassey)
`;
}

module.exports = generateMarkdown;
