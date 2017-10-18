// require for stored twitter keys
var twitterKeys = require("./twitterKeys.js");

// test export and access of key data -- WORKS
// console.log(twitterKeys.consumer_key);

// require for twitter npm/api
var Twitter = require('twitter');

showTweets = function() { 
    var client = new Twitter({
        consumer_key: twitterKeys.consumer_key,
        consumer_secret: twitterKeys.consumer_secret,
        access_token_key: twitterKeys.access_token_key,
        access_token_secret: twitterKeys.access_token_secret
    });

    client.get("statuses/user_timeline", {count: 20}, function(error, tweets, response){
	    if (!error) {		
		    console.log("\n20 most recent tweets by @" + tweets[0].user.screen_name + ":");

		    for( var i = 0 ; i < tweets.length ; i++){
			    console.log("\n(" +(i+1)+ ") " + tweets[i].created_at +
				    "\n " + tweets[i].text);
		    }
		
	    }
    });
}

module.exports = showTweets;