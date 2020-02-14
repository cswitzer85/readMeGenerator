const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
	.prompt({
		message: "Enter your GitHub user name",
		name: "username"
	})
	.then(function ({ username}) {
		const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
		axios.get(queryUrl).then(function (res) {
			const repoNames = res.data.map(function (repo) {
				return repo.name;//Grabs all repo names, how to grab info for certain repo??????????
			});

      const repoDataThatIDontEvenKnowINeedYet = repoNames.join("\n");
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

			// 	console.log(`Saved ${repoNames.length} repos to new file`);
			// });
		});
	});