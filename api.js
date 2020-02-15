const axios = require("axios");

const getProfile = (res) => {
	console.log("userName; ", res.userName);
	const avatarUrl = `https://api.github.com/users/${res.userName}`;
	console.log("avatarUrl ", avatarUrl);
	return axios
		.get(avatarUrl)
		.then((apiRes) => {
			const userAvatar = apiRes.data.avatar_url;
      console.log("userAvatar ", userAvatar);

			let emailUrl = apiRes.data.events_url;
			if (emailUrl.indexOf("{/privacy}") > -1) {
				emailUrl = emailUrl.substring(0, emailUrl.indexOf("{/privacy}"));
			}
			console.log("emailUrl ", emailUrl);
			return axios
				.get(emailUrl)
				.then((emailRes) => {
          userEmail = emailRes.data[0].payload.commits[0].author.email;
          console.log("userEmail in getProfile ready to export", userEmail); // prints to this point
          console.log("userAvatar in getProfile ready to export" , userAvatar);
          return {
            email: userEmail, 
            avatar: userAvatar
          };
          
				}); //end of .then((emailRes) =>{})
      }) //end of .then((apiRes) =>{})
    } //end of (res) =>{}
    

module.exports = getProfile;

/*{getProfile: getProfile(), email: userEmail, avatar: userAvatar}*/ //how to object created inside method
