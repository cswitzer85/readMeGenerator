const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
require('dotenv').config();
// var api = require("./api.js");
// var generateMarkdown = require("./generateMarkdown.js");
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
		.then((userName) => {
			console.log("first then; " + userName)
			const avatarUrl = `https://api.github.com/users/${userName}`
			axios
				.get(avatarUrl)
				.then((apiRes) => {
          console.log("second then; " + userName)
						console.log(apiRes.data);
						const userAvatar = apiRes.data.avatar_url
					
					.then((userName) => {
            console.log("third then; " + userName)
						const emailUrl = `https://api.github.com/users/${userName}/events/public`
							.get(emailUrl)
							.then((apiEventsRes) => {
                console.log("fourth then; " + userName)
								const emailQueryUrl = ``;
								const userEmail = api.Res.data[0].payload.commits[0].author.email

								// email data found using "eventsPageAPI[0].payload.commits[0].author.email"
								// user avatar URL found using "userPageAPI.avatar_url"
							})
					})})}
		)
};
//generateMarkdown.js content
function generateMarkdown(data) {
	return `
    ## ${data.title}
    [![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)//Badge markdown
    ## ${data.description}
    ## ${tableOfContents}
    * Title
    * Description
    * Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
    ## ${installation}
    ## ${usage}
    ## ${license}
    ## ${contributing}
    ## ${tests}
    ## ${questions}
    
    `;
};
//email data found using "eventsPageAPI[0].payload.commits[0].author.email"
// user avatar URL found using "userPageAPI.avatar_url"
// async function init() {
// 	console.log("initiated async function init");
// 	try {
// 		const res = await promptUser();
// 		const markdown = generateMarkdown(data);
// 		await writeFileAsync("README.md", markdown);
// 		console.log("Ding, your readme is done!");
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// init();
promptUser();