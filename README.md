# LIRI Bot

Woah take it easy, this is no Siri but it's the next life altering technology, LIRI: Language Interpretation and Recognition Interface.

LIRI is a command line node app that will provide tweet, songs, and movie data at your request.

## npm packages used
   * [Twitter](https://www.npmjs.com/package/twitter)
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Request](https://www.npmjs.com/package/request)
   * [DotEnv](https://www.npmjs.com/package/dotenv)

## How to use the app
 * clone the repository.
 * use npm install for the required packages (see package.json)
 * You will need to have your own .env file holding API keys for Twitter and Spotify. Use the following layout for the structure.
 * Once everything is installed and the .env file is created, the app is ready to use.
 * Use node to start the app (example: node liri.js )
 * Followed by one of the following commands:
 1. `my-tweets` - Logs the last 20 tweets from the Brewers Association
 2. `spotify-this-song <song name here>` - will log the song name, artist, album, and links to listen.
 3. `movie-this <movie name here>` - logs moive info of given title.
 4. `do-what-it-says` - will log the greatest song of my childhood.


## .env file setup
#### Spotify API keys
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

#### Twitter API keys
TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

#### Any Advice?
* I hope you enjoyed the game! What was your record?
* Feel free to reach out! I would greatly appreciate any tips or feedback on the  visuals or code.

#### Cheers! Enjoy the phenomenal LIRI!