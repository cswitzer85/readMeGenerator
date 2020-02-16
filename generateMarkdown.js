const generateMarkdown = (res, profileRes) => {
	return `
## ${res.title}
[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)//Badge markdown
${profileRes.email}
${profileRes.email}
## ${res.description}//consoel.log each and every to see what it is doingm then create readme document at end if everything is passing through correctly.
${profileRes.avatar}
## Contact: ${profileRes.email}
## ${res.tableOfContents}
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
## ${res.installation}
## ${res.usage}
## ${res.license}
## ${res.contributing}
## ${res.tests}
## ${res.questions}

`;
};



module.exports = generateMarkdown;
