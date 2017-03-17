// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db');
var twit = require('twit');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app


// Pass configuration to Twit
var Twitter = new twit({
	consumer_key: '6LuP5PwdW0UiSXeVAZqqxZzwE',  
	consumer_secret: 'EVlkKkkz4UFqG2FOtDthLlJIzSrwKf7K9QDr9N1oaZltaVSnX6',
	access_token: '830092639596904448-qLUuggZI7EAE5lPobmEvkYAd2qwfrgT',  
	access_token_secret: 'SStj33hLlvPgRzBSylm6Zf7m1142Pzpj76jPMLrRU7EVy'	
})
 
/* Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
}) */

/* Twitter Stream API
var stream = Twitter.stream('statuses/filter', { follow: '830142586354597888' } );  

stream.on('tweet', function (tweet) {
    Twitter.post('statuses/update', { status: unicornifyTheDonald( tweet.text ) + " https://twitter.com/testingDonald/status/" + tweet.id_str }, function(err, data, response) {
    console.log(data)
    })
})
var unicornDictionary = {
    "AMERICA" : "THE WORLD OF HARRY POTTER",
    "\"evil\"" : "\"unicorns\"",
    "country!" : "beauty pagents",
    "SECURITY" : "CHICKEN WINGS",
    "COURT" : "HAWAII",
    "Trump" : "Mr. Universe",
}

function unicornifyTheDonald( tweet ){
var words = tweet.split(" "),
    i;
var unicornifiedDonald = "";

    for (i = 0; i < words.length; i++) {
        var word = words[i];
        if(unicornDictionary.hasOwnProperty( word ) ) {
            unicornifiedDonald = unicornifiedDonald + unicornDictionary[ word ];
        } else {
            unicornifiedDonald = unicornifiedDonald + word;
        }
        unicornifiedDonald = unicornifiedDonald + " ";
    }
   console.log(unicornifiedDonald);
   return unicornifiedDonald + " #OPPOTUS";
} */