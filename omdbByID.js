var omdbSearch = require("./omdbSearch.js");

omdbByID = function(){
	this.NEWomdbSearch = function(modifier){
		var NEWomdbSearch = new omdbSearch(modifier);
		NEWomdbSearch.getMovies();

		for (j = 0 ; j < NEWomdbSearch.results.length ; j++){
			var queryURL = "http://www.omdbapi.com/?i=" +
										NEWomdbSearch.results[j] + 
										"&type=movie&Plot=Short&apikey=" +
										NEWomdbSearch.apiKey;
			request(queryURL, function(error, response, body){
			if (!error && response.statusCode === 200){
				console.log(JSON.parse(body).Title);

				
			}
		}); // close request
		}
	}
	this.NEWomdbSearch();
}

module.exports = omdbByID;