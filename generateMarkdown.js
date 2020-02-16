const generateMarkdown = (res, profileRes) => {
	return `
## Title:
${res.title}

[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)

## Contact:
${res.userName}
![alt text](${profileRes.avatar})
E-mail: ${profileRes.email}

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