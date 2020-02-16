const axios = require("axios");
const getProfile = (res) => {
	const avatarUrl = `https://api.github.com/users/${res.userName}`;
	return axios
		.get(avatarUrl)
		.then((apiRes) => {
			const userAvatar = apiRes.data.avatar_url;
			let emailUrl = apiRes.data.events_url;
			if (emailUrl.indexOf("{/privacy}") > -1) {
				emailUrl = emailUrl.substring(0, emailUrl.indexOf("{/privacy}"));
			}
			return axios
				.get(emailUrl)
				.then((emailRes) => {
					userEmail = emailRes.data[0].payload.commits[0].author.email;
					return {
						email: userEmail,
						avatar: userAvatar
					};
				}); //end of .then((emailRes) =>{})
		}) //end of .then((apiRes) =>{})
} //end of (res) =>{}
module.exports = getProfile;
