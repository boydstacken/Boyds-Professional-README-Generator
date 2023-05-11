// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

//License choice that feeds into the array in the prompt,this if/else statement will return the related badge the user selects.
const choices = ["Apache 2.0", "BSD 3-Clause", "BSD 2-Clause" ]

if (choices == "Apache 2.0") {
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}else{
if (choices == "BSD 3-Clause") {
    license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}else{
if (choices == "BSD 2-Clause") {
    license = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    ;
 }

 const username = 'your-github-username'

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your first and last name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please include a description of your README',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe the usage for this application ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who were contributors for the project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please describe tests ran for this project',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose your README license',
        choices: ['Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter Your Github Username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
    },
  ])
  .then((response) =>{
  const filename = `${response.name.toLowerCase().split(' ').join('')}.json`;
  // TODO: Create a function to write README file
  console.log(response)
  fs.writeFile("README.md",generateMarkdown(response), err=> {
      err?console.log(err):console.log("success")
  })
  })}}