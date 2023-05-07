// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
const questions = ["What is your first and last name?", 
"What is your README title?", 
"Please include a description of your README", 
"What are the installation instructions?", 
"Please describe usage",
"Who were contributors for the proect?"];

const fs = require ('fs')
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
    if (err) throw err;
    console.log(err) : console.log('Success!');
    })
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
