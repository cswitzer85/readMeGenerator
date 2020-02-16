//install "axios", "inquirer" and "util" before running this program
const fs = require("fs");
// const axios = require("axios"); -- this is used in the api.js file
const inquirer = require("inquirer");
const util = require("util");
require('dotenv').config();
var getProfile = require("./api");
var generateMarkdown = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

//user defined inquiry
function promptUser() {
	return inquirer.prompt([{
			type: "input",
			name: "userName",
			message: "What is your GitHub user name?"
		},
		{
			type: "input",
			name: "title",
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
			name: "install",
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
		},
		{
			type: "input",
			name: "questions",
			message: "What questions need to be answered?"
		}
	])
} //end of promptUser()

async function init() {
	try {
    //gets user input for questions
		const res = await promptUser();
		//runs api.js
    const profileRes = await getProfile(res);
    //takes info from res and profileRes and plugs into readme template
    const generatedRes = await generateMarkdown(res, profileRes);
    //creates new const with all data combined from user input, API call and template to be used in readme
    const markdown = generatedRes;
    //creates a new md document with the data in markdown
    await writeFileAsync("README.md", markdown);
		console.log("Ding, your readme is done!"); //would you like an apple pie with that?
  //log error if error occurs
	} catch (err) {
		console.log(err);
	}
}
init();
