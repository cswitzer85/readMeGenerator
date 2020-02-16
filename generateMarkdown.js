const generateMarkdown = (res, profileRes) => {
	return `
## Title: ${res.title}

[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)

## Contact:
${res.userName}  
E-mail: ${profileRes.email}  
![alt text](${profileRes.avatar})

## Description:
${res.description}

## Table of Contents:
${res.tableOfContents}

## Installation:
${res.install}

## Usage:
${res.usage}

## Licenses:
${res.license}

## Contributing:
${res.contributing}

## Tests:
${res.tests}

## Questions:
${res.questions}
`;
};
module.exports = generateMarkdown;