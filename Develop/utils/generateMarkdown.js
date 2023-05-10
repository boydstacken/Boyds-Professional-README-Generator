// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(choices) {}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.name}

  ${data.description}
  
  ## Table of Contents

  -[Installation](#installation)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  
  ## Installation

  
  To install the project, run:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}

  ## Tests

  ${data.tests}
  
  ## License
  
  ${data.license}

  ## Questions

  If you have any questions with this project, please reach out to me at ${data.email}. Additional work can be found here: [${data.username}](https://github.com/${data.username}). 

`;
}

module.exports = generateMarkdown;
