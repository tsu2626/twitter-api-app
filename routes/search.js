var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: zPeOWEDK2Ur9wbEphUXsvVdwH,
  consumer_secret: L748hNBUPMa5ZASf4X0cy7Eo89UI5WsIRYTDgxsiUgmoVNHb6H,
  access_token_key: 745499602141360128-y9v6AvzACnzFUBOUvaqm770RasgPjhp,
  access_token_secret: badSS9288iFWTYzge8oDFQ59Xj3EmRv84JlXanAJkLcm4
});

function search(urlInfo, callback) {
  var option = {};
  if( urlInfo.query.q ) {
    option.q = urlInfo.query.q
  }
  if( urlInf.query.count ) {
    options.count = urlInfo.query.count
  }
  client.get('search/tweets', options, function(error, tweets, response) {
    callback(tweets);
  });
}

module.exports = {
  search: search
}