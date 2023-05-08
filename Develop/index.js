// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')

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
        name: 'installation instructions',
    },
    {
        type: 'input',
        message: 'Please describe the usage for this application ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who were contributors for the project?',
        name: 'contributors',
    },
    {
        type: 'checkbox',
        message: 'Choose your README license',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter Your Github Username',
        choices: [Licenes],
        name: 'contributors',
    },
  ])
  .then((response) =>{
  const filename = `${response.name.toLowerCase().split(' ').join('')}.json`;
  // TODO: Create a function to write README file
  fs.writeFile(README.md,JSON.stringify(response), err=> {
      err?console.log(err):console.log("sucess")
  })
})