const generateMarkdown = (res, profileRes) => {
	return `
## Title:
${res.title}

[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)

## Contact:
![alt text](${profileRes.email})

![alt text](${profileRes.avatar})

## Description:
${res.description}

## Table of Contents:
${res.tableOfContents}

## Installation:
${res.installation}

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