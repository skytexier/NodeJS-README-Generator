//Packages/Imports
const getFile = require("../index")


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = " ";
  if (badge === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (badge === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (badge === "ISC License"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  else if (badge === "Creative Commons Zero v1.0 Universal"){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  else if (badge === "The Unliscense"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else 
  return badge = " ";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  switch (license){
    case "MIT License": 
      link = "https://opensource.org/licenses/MIT"
      break;
    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0"
      break;
    case "ISC License":
      link = "https://opensource.org/licenses/ISC"
      break;
    case "Creative Commons Zero v1.0 Universal":
      link = "http://creativecommons.org/publicdomain/zero/1.0/"
      break;
    case "The Unliscense":
      link = "http://unlicense.org/"
      break;
      default: "Link cannot be found"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = " ";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
`;
}

module.exports = generateMarkdown;
