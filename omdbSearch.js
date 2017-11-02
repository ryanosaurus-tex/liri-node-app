var request = require("request");
var omdbKeys = require("./omdbKeys.js");

var omdbSearch = function(modifier){
	// this.byTitle = modifier;
	
	this.apiKey = omdbKeys;		
	this.getMovies = function(modifier){
		var queryURL = "http://www.omdbapi.com/?s=" +
										modifier + 
										"&type=movie&apikey=" +
										this.apiKey;
		request(queryURL, function(error, response, body){
			if (!error && response.statusCode === 200){

				console.log("this worked");
				// console.log(JSON.parse(body));
				this.searchResults = [];

				for (i = 0 ; i < JSON.parse(body).Search.length ; i ++){
					searchResults.push(JSON.parse(body).Search[i].imdbID);
				}

				return this.searchResults;
			}
		}); // close request
		
	} // close getMovies

} // close omdbSearch

module.exports = omdbSearch;