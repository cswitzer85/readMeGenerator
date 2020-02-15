// const axios = require("axios");

		//api.js content
		// (promptData) => {
		// 	console.log("userName; ", promptData.userName);
		// 	const avatarUrl = `https://api.github.com/users/${promptData.userName}`;
		// 	console.log("avatarUrl ", avatarUrl);
		// 	axios
		// 		.get(avatarUrl)
		// 		.then((apiRes) => {
		// 			const userAvatar = apiRes.data.avatar_url
		// 			console.log("userAvatar ", userAvatar)
		// 			let emailUrl = apiRes.data.events_url
		// 			if (emailUrl.indexOf("{/privacy}") > -1) {
		// 				emailUrl = emailUrl.substring(0, emailUrl.indexOf("{/privacy}"));
		// 			}
		// 			console.log("emailUrl ", emailUrl)
		// 			axios
		// 				.get(emailUrl)
		// 				.then((emailRes) => {
		// 					console.log("emailRes ", emailRes.data[0].payload.commits[0].author.email); // prints to this point
		// 				}); //end of .then((emailRes) =>{})
		// 		}) //end of .then((apiRes) =>{})
		// } //end of (promptData) =>{}


// module.exports = api;
