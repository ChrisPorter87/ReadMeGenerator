const { createReadMeModule } = require("inquirer");
const generateReadme = (aboutText) => {
  if (!aboutText) {
    return "";
  }
  module.exports = (templateData) => {
    console.log(templateData);
    return `
 # ${this.name} 
## Table of Contents 
##[Description] (#description) 
##[Usage] (#usage) 
##[Tests] (#tests) 
##[Licenses] (#licenses) 
##[Installation] (#installation) 
##[Contribution] (#contribution) 
## GitHub user name
${this.githubName}

## Description
${this.about}.

## Usage
${this.usage}.

## Installation Instructions
${this.installation}

## Tests
${this.tests}

##Licenses
${this.licenses}

## Contribution
${this.contribution}
Made with ❤️ by ${this.userName}
    `;
  };
};
