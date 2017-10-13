// require twitter keys
var twitterKeys = require("./keys.js");

// require twitter npm
var Twitter = require("twitter");

MyTweets = function(){
	var client = new Twitter({
		consumer_key: twitterKeys.consumer_key,
		consumer_secret: twitterKeys.consumer_secret,
		access_token_key: twitterKeys.access_token_key,
		access_token_secret: twitterKeys.access_token_secret
	});

	client.get("statuses/user_timeline", {count: "20"}, function(error, tweet, response){
		if (error) throw error;
		console.log(tweet);
		console.log(response);
	} );

}
