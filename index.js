const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
require('dotenv').config();
// var api = require("./api");
// var generateMarkdown = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
	return inquirer.prompt([{
				type: "input",
				name: "userName",
				message: "What is your GitHub user name?"
			},
			{
				type: "input",
				name: "projectTitle",
				message: "What is the name of your project?"
			},
			{
				type: "input",
				name: "description",
				message: "What is your project description?"
			},
			{
				type: "input",
				name: "tableOfContents",
				message: "What is the table of contents for your project?"
			},
			{
				type: "input",
				name: "installation",
				message: "How should your project be installed?"
			},
			{
				type: "input",
				name: "usage",
				message: "Describe the usage of your project."
			},
			{
				type: "input",
				name: "license",
				message: "Which licenses are to be included in your project?"
			},
			{
				type: "input",
				name: "contributing",
				message: "What would you like to say about contributing to your project?"
			},
			{
				type: "input",
				name: "tests",
				message: "What tests are in your poject?"
			}
		])

		//api.js content
		.then((promptData) => {
			console.log("userName; ", promptData.userName);
			const avatarUrl = `https://api.github.com/users/${promptData.userName}`;
			console.log("avatarUrl ", avatarUrl);
			axios
				.get(avatarUrl)
				.then((apiRes) => {
					const userAvatar = apiRes.data.avatar_url
					console.log("userAvatar ", userAvatar)
					let emailUrl = apiRes.data.events_url
					if (emailUrl.indexOf("{/privacy}") > -1) {
						emailUrl = emailUrl.substring(0, emailUrl.indexOf("{/privacy}"));
					}
					console.log("emailUrl ", emailUrl)
					axios
						.get(emailUrl)
						.then((emailRes) => {
							console.log("emailRes ", emailRes.data[0].payload.commits[0].author.email); // prints to this point
						}); //end of .then((emailRes) =>{})
				}) //end of .then((apiRes) =>{})
		}) //end of .then((promptData) =>{})
    ;
  } //end of promptUser()
    //generateMarkdown.js content
function createReadMe(res) {
  return`
      ## ${promptUser.title}
      [![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)//Badge markdown
      ## ${promptUser.userName}
      ## ${promptUser.description}
      ## ${promptUser.tableOfContents}
      // * Title
      // * Description
      // * Table of Contents
      // * Installation
      // * Usage
      // * License
      // * Contributing
      // * Tests
      // * Questions
      ## ${promptUser.installation}
      ## ${promptUser.usage}
      ## ${promptUser.license}
      ## ${promptUser.contributing}
      ## ${promptUser.tests}
      ## ${promptUser.questions}`;
    
    }

//email data found using "eventsPageAPI[0].payload.commits[0].author.email"
// user avatar URL found using "userPageAPI.avatar_url"
async function init() {
	console.log("initiated async function init");
	try {
		const res = await promptUser();

		const markdown = createReadMe(res);
		await writeFileAsync("README.md", markdown);
		console.log("Ding, your readme is done!");
	} catch (err) {
		console.log(err);
	}
}
init();
// promptUser();