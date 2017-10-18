var spotifyKeys = require("./spotifyKeys.js");
var Spotify = require('node-spotify-api');

SpotifyThis = function(modifier){
	var spotify = new Spotify({
		id: spotifyKeys.id,
		secret: spotifyKeys.secret
	}); 
	
	spotify.search({ type: 'track', query: modifier, limit: 5 }, function(err, data) {
  			if (err) {
    			return console.log('Error occurred: ' + err);
  			}

  			var searchResults = data.tracks.items;


  			for ( var i = 0 ; i < searchResults.length ; i++ ){

  				var displayArtists = function(){
  					for ( var j = 0 ; j < searchResults[i].artists.length ; j++ ){
  						return searchResults[i].artists[j].name;
  					}
  				};

  				console.log("\nResult #" + (i + 1) + " ---------------------" +
  					        "\nArtists: " + displayArtists() +
  					        "\nTrack Name: " + searchResults[i].name +
  					        "\nAlbum Name: " + searchResults[i].album.name +
  					        "\nPreview URL: " + searchResults[i].preview_url + "\n");
  			}
 
			 
		});
	

};

module.exports = SpotifyThis;








