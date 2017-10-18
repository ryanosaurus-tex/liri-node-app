
var showTweets = require('./twitter.js');
var SpotifyThis = require('./spotify.js');

var command = process.argv[2];
var modifier = process.argv[3];

if ( command.toLowerCase() === 'my-tweets' ){
	showTweets();
}

else if ( command.toLowerCase() === 'spotify-this-song'){
	SpotifyThis(modifier);
}