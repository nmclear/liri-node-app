require("dotenv").config();

var request = require("request");
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



//Make it so liri.js can take in one of the ollowing commands
    // my-tweets
    // spotify-this-song
    // movie-this
    // do-what-it-says



function myTweets(){
    var params = {screen_name: 'nickclear'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}

//========================================================================================================================
// TWITTER API
//========================================================================================================================

if(process.argv[2] === 'my-tweets'){
    myTweets();
};