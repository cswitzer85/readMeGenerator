const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
require('dotenv').config();
var api = require("./api.js");
var generateMarkdown = require("./generateMarkdown")


const writeFileAsync = util.promisify(fs.writeFile);
const userName = ""

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
	]);
}
// .get(`https://api.github.com/users/${userName}`)

// console.log(userNameAPI.avatar_url);
// .then(function ({

// 			const queryUrl = `https://api.github.com/users/${userName}`;
// 			axios.get(queryUrl).then(function (res) {
// 			const userEmail = (function (users.email) {
// 			console.log(userEmail);

// 		fs.writeFile("README.md", repoDataThatIDontEvenKnowINeedYet, function (err) {
// 			if (err) {
// 				throw err;
//email data found using "eventsPageAPI[0].payload.commits[0].author.email"
// user avatar URL found using "userPageAPI.avatar_url"

async function init() {
	console.log("initiated async function init")
	try {
		const res = await promptUser();
		const markdown = generateMarkdown(data);
		await writeFileAsync("README.md", markdown);
		console.log("Ding, your readme is done!");
	} catch (err) {
		console.log(err);
	}
}
promptUser();
