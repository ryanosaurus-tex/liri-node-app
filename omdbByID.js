var omdbSearch = require("./omdbSearch.js");
var omdbKeys = require("./omdbKeys.js");

omdbByID = function(){
  // this.searchResults = [];
  this.apiKey = omdbKeys;
  this.NEWomdbSearch = function(modifier){
    var NEWomdbSearch = new omdbSearch(modifier);
    NEWomdbSearch.getMovies();

    var searchResults = NEWomdbSearch.getMovies.searchResults;



    for (j = 0 ; j < searchResults.length ; j++){
    	var queryURL = "http://www.omdbapi.com/?i=" +
                        searchResults[j] +
                       "&type=movie&Plot=Short&apikey=" +
                       "40e9cece";
      	request(queryURL, function(error, response, body){
      		if (!error && response.statusCode === 200){
      			console.log("also working");
      			console.log(JSON.parse(body));
      		}
      	});
    }    
  }
}

module.exports = omdbByID;

