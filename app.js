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

T.get('search/tweets', params, function(err, data, response) { // GET request, pass through params variable //
    if(!err){ //IF an arror occurs //
      // This is where the magic will happen
    } else {
      console.log(err);
    }
  })