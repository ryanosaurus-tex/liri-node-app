var request = require("request");

searchOMDB = function(modifier){
	var movieName = modifier;
	var queryURL = "http://www.omdbapi.com/?t=" +
									movieName + "&type=movie&plot=short&apikey=40e9cece"
	request(queryURL, function(error, response, body){
		if (!error && response.statusCode === 200){

			console.log("\nOMDB Movie Search Results:");
			console.log(JSON.parse(body));

			for ( i = 0 ; i < JSON.parse(body).Search.length ; i ++){
				console.log("\n#" + (i + 1) + " ----------------");
				console.log(JSON.parse(body).Search[i].Title);
				console.log(JSON.parse(body).Search[i].Year);
				// console.log(JSON.parse(body).Search[i].IMDB RATING);
				// console.log(JSON.parse(body).Search[i].ROTTEN TOMATOES RATING);
				console.log(JSON.parse(body).Search[i].Country);
				console.log(JSON.parse(body).Search[i].Language);
				console.log(JSON.parse(body).Search[i].Plot);
				console.log(JSON.parse(body).Search[i].Actors);

			}

		}

	});

};

module.exports = searchOMDB;