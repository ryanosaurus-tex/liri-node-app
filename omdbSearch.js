var request = require("request");
var omdbKeys = require("./omdbKeys.js");

var omdbSearch = function(modifier){
	this.byTitle = modifier;	
	this.apiKey = omdbKeys;
	this.results = [];	
	this.getMovies = function(){
		var queryURL = "http://www.omdbapi.com/?s=" +
										this.byTitle + 
										"&type=movie&apikey=" +
										this.apiKey;
		request(queryURL, function(error, response, body){
			if (!error && response.statusCode === 200){
				for (i = 0 ; i < JSON.parse(body).Search.length ; i ++){
					this.push(JSON.parse(body).Search[i].imdbID);
				}
			}
		}); // close request

		console.log(this.results);
	} // close getMovies
} // close omdbSearch

module.exports = omdbSearch;