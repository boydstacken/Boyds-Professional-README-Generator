// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const choices = ["Apache 2.0", "BSD 3-Clause", "BSD 2-Clause" ]

function renderLicenseBadge(choices) {
let badge = ''
if (choices == "Apache 2.0") {
    badge= `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg) alt="Apache license/>`
}
else if (choices == "BSD 3-Clause") {
    badge =`<img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg) alt="BSD 3-Clause/>`
}
else if (choices == "BSD 2-Clause") {
    badge =`<img src ="https://img.shields.io/badge/License-BSD%202--Clause-orange.svg) alt="BSD 2-Clause/>`
}
console.log(badge)
return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(choices) {

if (choices == "Apache 2.0") {
  license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  return `![Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
}else
if (choices == "BSD 3-Clause") {
  license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  return `![BSD 3-Clause License] (https://opensource.org/licenses/BSD-3-Clause)`
  }else
if (choices == "BSD 2-Clause") {
  license = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  return `![BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)`
  ;
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(choices) {

if (choices == "Apache 2.0") {
  license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  return `## ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}else
if (choices == "BSD 3-Clause") {
  license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  return `## ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  }else
if (choices == "BSD 2-Clause") {
  license = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg "
  return `## ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  ${renderLicenseBadge(data.license)} 

  ${data.title}
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
