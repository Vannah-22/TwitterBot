// app.js
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
// Set up your search parameters
var params = {
  q: '#Capricorn', // the only required parameter; will store search query //
  count: 10, // specifies the number of tweets to return //
  result_type: 'recent', // returns only the most recent results //
  lang: 'en' // returns only English results //
}

T.get('search/tweets', params, function(err, data, response) { // GET request, search tweets using the above params variable//
    // If there is no error, proceed //
    if(!err){
        for(let i = 0; i < data.statuses.length; i++){ // Loop through the returned tweets
            let id = { id: data.statuses[i].id_str } // Get the tweet Id from the returned data
            T.post('favorites/create', id, function(err, response){// Try to Favorite the selected Tweet
            
                if(err){// If the favorite fails, log the error message
                console.log(err[0].message);
                }
                else {// If the favorite is successful, console.log the url of the tweet //
                    let username = response.user.screen_name;
                    let tweetID = response.id_str;
                    console.log('Favorited:', `https://twitter.com/${username}/status/${tweetId}`)
                }
            });
        }
    } else {
      console.log(err);
    }
  })