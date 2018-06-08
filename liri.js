require("dotenv").config();

var request = require("request");
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");

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
    var songName = '';

    if(nodeArgs.length > 3){
        for(var i = 3; i < nodeArgs.length; i++){
            if(i > 3){
                songName = songName + ' ' + nodeArgs[i];
            } else {
                songName += nodeArgs[i];
            }
        }
    } else {
        songName = 'The Sign ace of base';
    }

    spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var songInfo = data.tracks.items[0];
        var artistInfo = songInfo.artists[0];
        var albumInfo = songInfo.album;

        console.log("=========================" + '\n' +
            'Artist: ' + artistInfo.name + '\n' +
            'Song Name: ' + songInfo.name + '\n' +
            'Album Name: ' + albumInfo.name + '\n' +
            'Preview Link: ' + songInfo.preview_url + '\n' + 
            'Open Spotify Link: ' + songInfo.external_urls.spotify + '\n' +
            "========================="
        );
    });
};

//========================================================================================================================
// OMDB
//========================================================================================================================

function omdbMovie(){
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

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body){
        if (!error && response.statusCode === 200) {
            var movie = JSON.parse(body);
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


    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
      
        console.log(data);
      
      
    });


};



//========================================================================================================================
// USER COMMAND LISTENER
//========================================================================================================================

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
    console.log('Please type a proper command.')
};