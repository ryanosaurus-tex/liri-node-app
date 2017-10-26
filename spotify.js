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
  			};
        
  			var searchResultsArray = data.tracks.items;
        
  			for ( i = 0 ; i < searchResultsArray.length ; i++ ){

          displayURL = function(){
            if ( searchResultsArray[i].preview_url === null ){
              return "No Preview Available.";
            } else {
              return searchResultsArray[i].preview_url;
            }
          };

          displayArtists = function(){

            var artists = " ";
            var x = 0;          

            while ( x < searchResultsArray[i].artists.length ){
              artists += searchResultsArray[i].artists[x].name + ", ";
              if ( x = searchResultsArray[i].artists.length - 1){
                artists += searchResultsArray[i].artists[x].name;
              }
              x++;
            }

            return artists
          };      

    			console.log("\nResult #" + (i + 1) + " ---------------------");          
          console.log("Artists: " + displayArtists());
          console.log("Track Name: " + searchResultsArray[i].name);
          console.log("Album Name: " + searchResultsArray[i].album.name);
          console.log("Preview URL: " + displayURL());    					        
    			
  			}			 
		});
};

module.exports = SpotifyThis;








