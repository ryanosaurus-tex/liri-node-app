
var showTweets = require('./twitter.js');
var SpotifyThis = require('./spotify.js');
var omdbByID = require('./omdbByID.js');

var command = process.argv[2];
var modifier = process.argv[3];

if ( command.toLowerCase() === 'my-tweets' ){
	showTweets();
}

else if ( command.toLowerCase() === 'spotify-this-song'){
	SpotifyThis(modifier);
}

else if ( command.toLowerCase() === 'movie-this'){
	omdbByID(modifier);
}