const generateMarkdown = (promptData) => {
  console.log("generateMD " , promptData);
	`
## ${promptData.title}
[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)//Badge markdown
## ${promptData.description}
## ${promptData.tableOfContents}
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
## ${promptData.installation}
## ${promptData.usage}
## ${promptData.license}
## ${promptData.contributing}
## ${promptData.tests}
## ${promptData.questions}

`;
};



module.exports = generateMarkdown;
