const fs = require("fs");
const generateAbout = (aboutText) => {
  if (!aboutText) {
    return "";
  }
  return `
    # ${projectname}

## GitHub user name
${githubName}

## Purpose
${aboutProject}.

## Built With
${languages}

## Website
${fs.link}

## Contribution
Made with ❤️ by ${yourName}
    `;
};
