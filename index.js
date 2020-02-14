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
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter your GitHub user name",
      name: "userName"
  },
    {
      type: "input",
      message: "What is the name of your repository?",
      name: "repoName"
  },])
	}
	// .then(function ({ userName}) {
	// 	const queryUrl = `https://api.github.com/users/${userName}`;
	// 	axios.get(queryUrl).then(function (res) {
	// 		const userEmail = (function (users.email) {
	// 			console.log(userEmail);
	// 		});

    //   const repoDataThatIDontEvenKnowINeedYet = repoNames.join("\n");
      // const description;
      // const tableOfContents;
      // const installation;
      // const usage;
      // const license;
      // const contributing;
      // const tests;
      // const questions;


			// fs.writeFile("README.md", repoDataThatIDontEvenKnowINeedYet, function (err) {
			// 	if (err) {
			// 		throw err;
			// 	}

			// });
	// 	});
  // });


  // email data found using "eventsPageAPI[0].payload.commits[0].author.email"
  // user avatar URL found using "userPageAPI.avatar_url"
  promptUser();
