const { createReadMeModule } = require("inquirer");
const generateText = (aboutText) => {
  if (!aboutText) {
    return "";
  }
  module.exports = (templateData) => {
    console.log("TEMPLATE DATA", templateData);
    return `
 # ${templateData.projectname}
 ![Badge](https://img.shields.io/badge/license-${templateData.license}.svg”)
## Table of Contents
-[Description] (#description)
-[Usage] (#usage)
-[Tests] (#tests)
-[License] (#license)
-[Installation] (#installation)
-[Contribution] (#contribution)
- GitHub user name
${templateData.githubName}

## Description
${templateData.about}.

## Usage
${templateData.usage}.

## Installation Instructions
${templateData.installation}

## Tests
${templateData.tests}

##License
${templateData.license}

## Contribution
${templateData.contribution}
Made with ❤️ by ${templateData.userName}
    `;
  };
};
// module.exports = generateText;
generateText("test");
