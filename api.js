const axios = require("axios");

axios
	.get("https://api.github.com/users/${userName}")
	.then(function (res) {
		console.log(res.data);
		// const queryUrl = `https://api.github.com/users/${userName}`;
    // const api = {res.data.avatar_url};
    
		// email data found using "eventsPageAPI[0].payload.commits[0].author.email"
		// user avatar URL found using "userPageAPI.avatar_url"
	});

module.exports = api;
