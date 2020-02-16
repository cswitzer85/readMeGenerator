const generateMarkdown = (res, profileRes) => {
  console.log("res.title in genMd doc " , res.title);
  console.log("profile.Res in genMd doc " , profileRes.email);

	`
// ## ${res.title}
// [![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)//Badge markdown

// ## ${res.description}//consoel.log each and every to see what it is doingm then create readme document at end if everything is passing through correctly.
// ${profileRes.avatar}
// ## Contact: ${profileRes.email}
// ## ${res.tableOfContents}
//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions
// ## ${res.installation}
// ## ${res.usage}
// ## ${res.license}
// ## ${res.contributing}
// ## ${res.tests}
// ## ${res.questions}

// `;
};



module.exports = generateMarkdown;
