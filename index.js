// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("./generateReadme");
const generateReadme = require("./ReadMeTemplate");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectname",
      message: "What the title of your project? (Required)",
      validate: (projectNameInput) => {
        if (projectNameInput) {
          return true;
        } else {
          console.log("Please enter your project's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "userName",
      message: "What is your name? (Required)",
      validate: (userNameInput) => {
        if (userNameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "githubName",
      message: "Please enter the link to your GitHub account (Required)",
      validate: (githubName) => {
        if (githubName) {
          return true;
        } else {
          console.log("Please enter your Github account link!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "about",
      message: "Please describe the project",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description of your project");
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide some instructions for installation",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log(
            "Please enter the installation instructions for your project!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message:
        "Please provide some information or example on the usage of your project",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter the usage information for your project!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Select one license that you want to be applied to your project",
      choices: [
        "MIT",
        "GNU_GPLv3",
        "Apache_License_2.0",
        "Mozilla_Public_License_2.0",
        "GNU_LGPLv3",
      ],
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Please provide some instructions as to how other developers can contribute to your project",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide the user with some test instructions",
    },
    //     {}
    //     },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address",
    },
  ]);
};
// TODO: Create an array of questions for user input
promptUser()
  .then((templateData) => {
    return generateReadme(templateData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
