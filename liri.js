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


//========================================================================================================================
// TWITTER
//========================================================================================================================
function myTweets(){
    var params = {screen_name: 'nickclear'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log("Here are the 20 most recent tweets..");
            for(var i = 0; i < 20; i++){
                console.log("=========================");
                console.log('Tweet: ' + tweets[i].text);
                console.log('Time of tweet: ' + tweets[i].created_at);
            }
        }
    });
}

//========================================================================================================================
// SPOTIFY
//========================================================================================================================

function spotifySong(){

};

//========================================================================================================================
// USER COMMAND LISTENER
//========================================================================================================================

var command = process.argv[2];

if(command === 'my-tweets'){
    myTweets();
}
else if(command === 'spotify-this-song'){

}
else if (command === 'movie-this'){

}
else if(command === 'do-what-it-says'){

} else {
    console.log('Please type one a proper command.')
}