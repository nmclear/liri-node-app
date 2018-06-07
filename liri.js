require("dotenv").config();

var request = require("request");
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var nodeArgs = process.argv;
var command = nodeArgs[2];

//Make it so liri.js can take in one of the ollowing commands
    // my-tweets
    // spotify-this-song
    // movie-this
    // do-what-it-says


//========================================================================================================================
// TWITTER
//========================================================================================================================
function myTweets(){
    var params = {screen_name: 'nickclear'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~" + '\n' +
                "Here are the 20 most recent tweets.."
            );
            for(var i = 0; i < 20; i++){
                console.log("=========================" + '\n' +
                    'Tweet: ' + tweets[i].text + '\n' +
                    'Time of tweet: ' + tweets[i].created_at
                );
            }
        }
    });
}

//========================================================================================================================
// SPOTIFY
//========================================================================================================================

function spotifySong(){
    var song = process.argv[3];
    console.log('hello');
};

//========================================================================================================================
// OMDB
//========================================================================================================================

function omdbMovie(){
    //Taking multiple-word movie titles into one string
    var movieName = '';

    if(nodeArgs.length >= 4){
        for(var i = 3; i < nodeArgs.length; i++){
            if(i > 3){
                movieName = movieName + '+' +nodeArgs[i];
            } else {
                movieName += nodeArgs[i];
            }
        }
    } else {
        movieName = 'mr+nobody';
    }


    //OMDB API URL
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    //Request movie via OMDB API
    request(queryUrl, function(error, response, body){
        //make sure request is successful before proceeding.
        if (!error && response.statusCode === 200) {
            var movie = JSON.parse(body);
            // console.log("=========================");
            // console.log('Title: ' + movie.Title);
            // console.log('Release year: ' + movie.Year);
            // console.log('IMDB Rating: ' + movie.Ratings[0].Value);
            // console.log('Rotten Tomatoes Rating: ' + movie.Ratings[1].Value);
            // console.log('Country: ' + movie.Country);
            // console.log('Language: ' + movie.Language);
            // console.log('Plot: ' + movie.Plot);
            // console.log('Actors: ' + movie.Actors);
            // console.log("=========================");
            console.log("=========================" + '\n' +
                'Title: ' + movie.Title + '\n' +
                'Release year: ' + movie.Year + '\n' +
                'IMDB Rating: ' + movie.Ratings[0].Value + '\n' + 
                'Rotten Tomatoes Rating: ' + movie.Ratings[1].Value + '\n' +
                'Country: ' + movie.Country + '\n' +
                'Language: ' + movie.Language + '\n' +
                'Plot: ' + movie.Plot + '\n' +
                'Actors: ' + movie.Actors + '\n' +
                "========================="
            );
        }
    });





};



//========================================================================================================================
// DO WHAT IT SAYS
//========================================================================================================================

function doWhatItSays(){
    console.log('hello');
};



//========================================================================================================================
// USER COMMAND LISTENER
//========================================================================================================================

// var command = process.argv[2];

if(command === 'my-tweets'){
    myTweets();
}
else if(command === 'spotify-this-song'){
    spotifySong();
}
else if (command === 'movie-this'){
    omdbMovie();
}
else if(command === 'do-what-it-says'){
    doWhatItSays();
} else {
    console.log('Please type one a proper command.')
};