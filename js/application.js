var config1 = {
  "id": '616417821090680832',
  "domId": 'mytweets',
  "maxTweets": 2,
  "enableLinks": true
};

function displayTweets(){
	twitterFetcher.fetch(config1);
}

$(document).ready(displayTweets());