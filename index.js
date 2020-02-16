const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
require('dotenv').config();
var getProfile = require("./api");
var generateMarkdown = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

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

    
    //generateMarkdown.js content
    // .then((promptData) => {
      // 	console.log("after API .then generateMarkdown ", promptData);
      // 	generateMarkdown(promptData);
      // });
      
      // }) //end of .then((promptData) =>{})
      
      
    } //end of promptUser()
    
    
    //email data found using "eventsPageAPI[0].payload.commits[0].author.email"   ----------   user avatar URL found using "userPageAPI.avatar_url"
    
    async function init() {
      console.log("initiated async function init");
      try {
        const res = await promptUser();
        console.log("promptUser eneded: ", res);
        
        // api.js content
        const profileRes = await getProfile(res);
        console.log("getProfile ended: " , getProfile);
        console.log("res still... " , res);
        console.log("user email and avatar " , profileRes);
        console.log("email: " , profileRes.email);
        console.log("avatar: " , profileRes.avatar);

        const generatedRes = await generateMarkdown(res, profileRes);
        console.log("generateMarkdown ended: " , generatedRes);
        
        // const markdown = generatedRes;
		// await writeFileAsync("README.md", markdown);
		// console.log("Ding, your readme is done!");

	} catch (err) {
		console.log(err);
	}
}
init();
