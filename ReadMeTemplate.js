const { createReadMeModule } = require("inquirer");
const generateText = (aboutText) => {
  if (!aboutText) {
    return "";
  }
  module.exports = (templateData) => {
    console.log("TEMPLATE DATA", templateData);
    return `
 # ${templateData.projectname}
 ![Badge](https://img.shields.io/badge/license-${templateData.license}-blue.svg)
## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Installation](#installation)
* [Contribution](#contribution)
* [Questions](#questions)
* [GitHub Name](#githubName)

## Description
${templateData.about}.

## Usage
${templateData.usage}.

## Installation
${templateData.installation}

## Tests
${templateData.tests}

## License
![Badge](https://img.shields.io/badge/license-${templateData.license}-blue.svg)
${templateData.license}

## Questions
Here you will find my email address, where I can be reached, as well as my GitHub user name.
${templateData.email} <br>
${templateData.githubName}
## Contribution
${templateData.contribution}
Made with ❤️ by ${templateData.userName}
    `;
  };
};
// module.exports = generateText;
generateText("test");
